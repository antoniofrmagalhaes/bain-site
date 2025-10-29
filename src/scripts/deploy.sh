#!/bin/bash

# ============================
# Visual helpers
# ============================
ESC="\e"
BOLD="${ESC}[1m"; RESET="${ESC}[0m"
FG_GREEN="${ESC}[32m"; FG_RED="${ESC}[31m"; FG_CYAN="${ESC}[36m"
OK_ICON="✔"; ERR_ICON="✖"; STEP_ICON="➤"

log_step()   { echo -e "${FG_CYAN}${STEP_ICON} $*${RESET}"; }
log_ok()     { echo -e "    ${FG_GREEN}${OK_ICON} $*${RESET}"; }
log_error()  { echo -e "    ${FG_RED}${ERR_ICON} $*${RESET}"; }

# ============================
# Variáveis
# ============================
SITE_DIR="$HOME/repos/bain-site"
APP_NAME="bain-site"
LOG_FILE="${SITE_DIR}/deploy_$(date +%F_%H-%M-%S).log"

# ============================
# Execução
# ============================
log_step "Log em: ${LOG_FILE}"

cd "$SITE_DIR" || { log_error "Diretório $SITE_DIR não encontrado"; exit 1; }

log_step "Instalando dependências"
if npm install >>"$LOG_FILE" 2>&1; then
  log_ok "Dependências instaladas"
else
  log_error "Erro ao instalar dependências"
  tail -n 80 "$LOG_FILE"
  exit 1
fi

log_step "Gerando build de produção"
if npm run build >>"$LOG_FILE" 2>&1; then
  log_ok "Build gerada com sucesso"
else
  log_error "Erro ao gerar build"
  tail -n 80 "$LOG_FILE"
  exit 1
fi

log_step "Iniciando ou reiniciando o app com PM2"
if pm2 list >>"$LOG_FILE" 2>&1 | grep -q "$APP_NAME"; then
  if pm2 restart "$APP_NAME" >>"$LOG_FILE" 2>&1; then
    log_ok "App reiniciado via PM2"
  else
    log_error "Erro ao reiniciar app via PM2"
    tail -n 80 "$LOG_FILE"
    exit 1
  fi
else
  if pm2 start npm --name "$APP_NAME" -- run start >>"$LOG_FILE" 2>&1; then
    log_ok "App iniciado via PM2"
  else
    log_error "Erro ao iniciar app via PM2"
    tail -n 80 "$LOG_FILE"
    exit 1
  fi
fi

log_step "Salvando estado do PM2 e habilitando no boot"
if pm2 save >>"$LOG_FILE" 2>&1; then
  log_ok "Estado salvo"
else
  log_error "Falha ao salvar estado"
  tail -n 40 "$LOG_FILE"
fi

if pm2 startup systemd >>"$LOG_FILE" 2>&1; then
  log_ok "PM2 configurado para iniciar no boot"
else
  log_error "Falha ao configurar auto start"
  tail -n 40 "$LOG_FILE"
fi