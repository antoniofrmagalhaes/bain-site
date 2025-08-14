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
SITE_DIR="/root/repos/bain-site"
APP_NAME="bain-site"

# ============================
# Execução
# ============================
cd "$SITE_DIR" || { log_error "Diretório $SITE_DIR não encontrado"; exit 1; }

log_step "Instalando dependências"
npm install > /dev/null 2>&1 && log_ok "Dependências instaladas" || { log_error "Erro ao instalar dependências"; exit 1; }

log_step "Gerando build de produção"
npm run build > /dev/null 2>&1 && log_ok "Build gerada com sucesso" || { log_error "Erro ao gerar build"; exit 1; }

log_step "Iniciando ou reiniciando o app com PM2"

if pm2 list | grep -q "$APP_NAME"; then
    pm2 restart "$APP_NAME" > /dev/null 2>&1 && log_ok "App reiniciado via PM2" || { log_error "Erro ao reiniciar app via PM2"; exit 1; }
else
    pm2 start npm --name "$APP_NAME" -- run start > /dev/null 2>&1 && log_ok "App iniciado via PM2" || { log_error "Erro ao iniciar app via PM2"; exit 1; }
fi

log_step "Salvando estado do PM2 e habilitando no boot"
pm2 save > /dev/null 2>&1 && log_ok "Estado salvo" || log_error "Falha ao salvar estado"
pm2 startup systemd > /dev/null 2>&1 && log_ok "PM2 configurado para iniciar no boot" || log_error "Falha ao configurar auto start"
