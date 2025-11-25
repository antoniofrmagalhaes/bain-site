import Container from "@/components/container";

export const metadata = {
  title: "Políticas de Privacidade",
};

export default function PoliticasDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]/95 text-neutral-100 overflow-y-auto pt-[109px]">
      <Container>
        <div className="flex flex-col gap-6 px-4 pb-8 text-sm leading-relaxed text-neutral-200">
          <header className="space-y-2">
            <h1 className="text-2xl font-semibold text-white">
              Políticas de Privacidade
            </h1>
            <p className="text-xs text-neutral-400">
              Última atualização em{" "}
              {new Date().toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
              .
            </p>
          </header>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-neutral-50">
              1. Informações que coletamos
            </h2>
            <p>
              Coletamos apenas as informações necessárias para processar sua
              compra de VIP e ativar o seu acesso no servidor, como seu ID de
              jogador (Steam ID ou Epic ID) e seu e-mail.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-neutral-50">
              2. Uso das informações
            </h2>
            <p>
              Utilizamos seus dados exclusivamente para gerar o link de
              pagamento, identificar sua conta dentro do servidor e enviar
              comunicações sobre o status da compra e da ativação do VIP.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-neutral-50">
              3. Compartilhamento de dados
            </h2>
            <p>
              Não vendemos ou compartilhamos seus dados pessoais com terceiros,
              com exceção dos provedores de pagamento utilizados para processar
              as transações, que recebem apenas as informações necessárias para
              concluir o pagamento.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-neutral-50">
              4. Armazenamento e segurança
            </h2>
            <p>
              Os dados são armazenados em ambientes protegidos e acessados
              apenas por responsáveis autorizados. Ainda assim, nenhum sistema é
              100% seguro, e recomendamos que você utilize sempre senhas fortes
              e não compartilhe seus dados de acesso.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-neutral-50">
              5. Direitos do usuário
            </h2>
            <p>
              Você pode solicitar a remoção ou atualização dos seus dados
              pessoais entrando em contato com nossa equipe de suporte. A
              exclusão de alguns dados pode afetar sua capacidade de utilizar
              determinados recursos, como o acesso VIP.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-neutral-50">
              6. Atualizações desta política
            </h2>
            <p>
              Podemos atualizar estas Políticas de Privacidade periodicamente.
              As alterações passam a valer a partir da publicação desta página,
              com a data de atualização revisada.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-neutral-50">
              7. Contato
            </h2>
            <p>
              Em caso de dúvidas sobre o uso dos seus dados ou sobre estas
              políticas de privacidade, entre em contato com a administração
              pelo nosso servidor no Discord, enviando mensagem para os
              administradores ou moderadores, ou abrindo um ticket de suporte.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
