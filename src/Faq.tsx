import { SectionHeading } from "./components";
import { useI18n } from "./i18n";
export function Faq({ editor }: { editor: boolean }) {
  const { t } = useI18n();
  const questions = [
    {
      q: editor
        ? "Sou iniciante e nunca tive cliente. Consigo acompanhar?"
        : "Não quero virar editor profissional. Faz sentido pra mim?",
      a: editor
        ? "Sim. O curso começa pela base e avança até a busca e negociação com os primeiros clientes. Você pode acompanhar as aulas no seu ritmo."
        : "Sim. O acesso para donos de operação reúne Direct Response e IA: o essencial para editar seus próprios vídeos, sem a grade completa de formação.",
    },
    {
      q: "O curso é só sobre IA?",
      a: editor
        ? "Não. A IA faz parte da jornada. A formação também aborda edição, tráfego, negociação, Instagram e portfólio."
        : "Não. Além das ferramentas de IA, seu acesso inclui edição para Direct Response, criativos e VSLs.",
    },
    ...(editor
      ? [
          {
            q: "Realmente dá para faturar R$10 mil por mês editando?",
            a: "Esse é o objetivo apresentado pela formação, e não uma garantia de renda. Os resultados dependem da sua dedicação, experiência, prospecção e das condições do mercado.",
          },
        ]
      : []),
    {
      q: "Quais trilhas estão incluídas no meu acesso?",
      a: editor
        ? "A formação completa inclui Comece Aqui, Editor DR, Entenda os Sites, Edite com IA, Seus Primeiros Clientes e Cresça como Editor."
        : "O acesso para operação inclui as trilhas Editor DR e Edite com IA.",
    },
    {
      q: "Tenho garantia?",
      a: "Sim. A oferta inclui garantia de 7 dias. Consulte as condições e o canal de atendimento no checkout da Hubla.",
    },
  ];
  return (
    <section className="section faq-section">
      <div className="container narrow">
        <SectionHeading eyebrow={t("Dúvidas frequentes")}>
          {t("Antes do seu")} <em>{t("primeiro passo.")}</em>
        </SectionHeading>
        <div className="faq-list">
          {questions.map((item) => (
            <details key={item.q}>
              <summary>{t(item.q)}</summary>
              <p>{t(item.a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
