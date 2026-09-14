import { useState } from "react";
import {
  Clock3,
  KeyRound,
  Sparkles,
  TrendingUp,
  MonitorPlay,
  Layers3,
  Users,
  BriefcaseBusiness,
  ShieldCheck,
  X,
  Languages,
} from "lucide-react";
import { offers, tracks, checkoutUrl } from "./content";
import type { Audience } from "./content";
import { CheckList, Cta, SectionHeading } from "./components";
import { CourseGallery } from "./CourseGallery";
import { Testimonials } from "./Testimonials";
import { Faq } from "./Faq";
import { Offer, FinalCta } from "./Offer";
import { languageOptions, useI18n } from "./i18n";

const icons = [MonitorPlay, Layers3, KeyRound, Sparkles, Users, TrendingUp];
export function App() {
  const { language, setLanguage, t } = useI18n();
  const [audience, setAudience] = useState<Audience>("editor");
  const offer = offers[audience];
  const editor = audience === "editor";
  const available = tracks.filter((t) => editor || ["dr", "ai"].includes(t.id));
  const href = checkoutUrl(audience);
  const facts = [
    {
      icon: Clock3,
      title: t("Online, no seu ritmo"),
      text: t("Assista às aulas e evolua de acordo com a sua rotina."),
    },
    {
      icon: KeyRound,
      title: t("Acesso imediato"),
      text: t("Comece a aprender após a confirmação do pagamento."),
    },
    {
      icon: Sparkles,
      title: t("Edição + inteligência artificial"),
      text: t("Técnica e ferramentas de IA no mesmo processo criativo."),
    },
    {
      icon: TrendingUp,
      title: editor
        ? t("Do zero ao profissional")
        : t("Autonomia para sua operação"),
      text: editor
        ? t("Da primeira edição à construção da sua carreira.")
        : t("Edite seus próprios vídeos com mais agilidade."),
    },
  ];
  return (
    <>
      <a className="skip-link" href="#conteudo">
        {t("Pular para o conteúdo")}
      </a>
      <header className="site-header">
        <div className="site-header-inner">
          <a
            href="#"
            aria-label={t("Editor Nova Era — início")}
            className="brand"
          >
            EDITOR<span>NOVA ERA</span>
          </a>
          <label className="language-picker">
            <Languages size={17} aria-hidden="true" />
            <span className="sr-only">{t("Idioma do site")}</span>
            <select
              aria-label={t("Idioma do site")}
              value={language}
              onChange={(event) =>
                setLanguage(event.target.value as typeof language)
              }
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>
      <main id="conteudo">
        <section className="hero">
          <div className="container hero-inner">
            <div
              className="audience-switch"
              aria-label={t("Escolha seu perfil")}
            >
              <button
                aria-pressed={editor}
                onClick={() => setAudience("editor")}
              >
                {t("Sou Editor")}
              </button>
              <button
                aria-pressed={!editor}
                onClick={() => setAudience("operation")}
              >
                {t("Sou Dono de Operação")}
              </button>
            </div>
            <p className="eyebrow hero-eyebrow">
              {editor
                ? t("Formação completa de editor")
                : t("Edição para donos de operação")}
            </p>
            <h1>
              {editor ? (
                <>
                  {t("De editor iniciante a")} <em>R$10.000/mês.</em>
                  <br />
                  {t("Construa sua carreira com")}{" "}
                  <em>{t("edição de vídeo.")}</em>
                </>
              ) : (
                <>
                  {t("Edite seus")} <em>{t("próprios vídeos.")}</em>
                  <br />
                  {t("Tenha o controle da")} <em>{t("sua operação.")}</em>
                </>
              )}
            </h1>
            <p className="hero-description">{t(offer.description)}</p>
            <div className="hero-actions">
              <Cta href={href} />
              <Cta href="#trilhas" secondary>
                {t("Conheça as trilhas")}
              </Cta>
            </div>
            <p className="hero-note">
              {editor
                ? t(
                    "Uma formação para buscar sua meta. Resultados variam conforme a aplicação.",
                  )
                : t(
                    "Direct Response e IA. Dois módulos, um novo nível de autonomia.",
                  )}
            </p>
            <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {facts.map(({ icon: Icon, title, text }) => (
                <article className="benefit" key={title}>
                  <span className="icon-box">
                    <Icon size={23} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Testimonials editor={editor} />
        <CourseGallery key={audience} audience={audience} />
        <section className="section journey-section">
          <div className="container">
            <SectionHeading
              eyebrow={t("O método Editor Nova Era")}
              description={
                editor
                  ? t(
                      "Uma jornada que conecta edição, inteligência artificial e a construção do seu negócio.",
                    )
                  : t(
                      "Aprenda o essencial para assumir o controle da produção dos seus vídeos.",
                    )
              }
            >
              {editor ? (
                <>
                  {t("Mais que editar. Aprenda a")} <em>{t("evoluir.")}</em>
                </>
              ) : (
                <>
                  {t("Da ideia à edição, com")} <em>{t("autonomia.")}</em>
                </>
              )}
            </SectionHeading>
            <div className="journey-grid grid grid-cols-1 md:grid-cols-2">
              {available.map((trackItem, i) => {
                const Icon =
                  icons[tracks.findIndex((track) => track.id === trackItem.id)];
                return (
                  <article className="journey-card" key={trackItem.id}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="small-tag">
                        {t("TRILHA")} {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="icon-box">
                        <Icon size={22} />
                      </span>
                    </div>
                    <h3>{t(trackItem.title)}</h3>
                    <h4>{t(trackItem.subtitle)}</h4>
                    <p>{t(trackItem.description)}</p>
                    <div className="journey-deliverables">
                      <p className="micro-heading">
                        {t("Dentro desta trilha")}
                      </p>
                      <CheckList
                        items={trackItem.lessons
                          .slice(0, 3)
                          .map((l) => t(l[0]))}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="comparison">
              <SectionHeading
                eyebrow={t("O que está travando seu próximo passo?")}
              >
                {t(offer.problem)}
              </SectionHeading>
              <div className="comparison-head">
                <span>{t("O desafio")}</span>
                <span>{t("O que você vai desenvolver")}</span>
              </div>
              {offer.problems.map((problem, i) => (
                <div className="comparison-row" key={problem}>
                  <p>
                    <X size={18} />
                    {t(problem)}
                  </p>
                  <p>
                    <ShieldCheck size={18} />
                    {t(offer.solutions[i])}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section skills-section">
          <div className="container">
            <SectionHeading
              eyebrow={t("Conhecimento que vira prática")}
              description={t(
                "Um conjunto de habilidades para acompanhar a nova era da edição.",
              )}
            >
              {t("Seu próximo repertório.")}
            </SectionHeading>
            <div className="skills-grid grid grid-cols-1 md:grid-cols-3">
              {(editor
                ? ([
                    [
                      MonitorPlay,
                      "Edição de vídeo",
                      "Do primeiro corte aos criativos e VSLs.",
                    ],
                    [
                      Sparkles,
                      "Inteligência artificial",
                      "Novas ferramentas para seu processo criativo.",
                    ],
                    [
                      Layers3,
                      "Ferramentas digitais",
                      "Conheça os sites que apoiam sua produção.",
                    ],
                    [
                      Users,
                      "Prospecção de clientes",
                      "Aprenda a encontrar suas primeiras oportunidades.",
                    ],
                    [
                      BriefcaseBusiness,
                      "Negociação",
                      "Converse com clientes e apresente seu trabalho.",
                    ],
                    [
                      TrendingUp,
                      "Presença profissional",
                      "Instagram, portfólio e divulgação.",
                    ],
                  ] as const)
                : ([
                    [
                      MonitorPlay,
                      "Direct Response",
                      "Edição para criativos e VSLs.",
                    ],
                    [
                      Sparkles,
                      "Inteligência artificial",
                      "Vídeos e elementos visuais com IA.",
                    ],
                    [
                      KeyRound,
                      "Autonomia",
                      "Mais controle sobre sua própria produção.",
                    ],
                  ] as const)
              ).map(([Icon, title, text]) => (
                <article className="skill-card" key={title}>
                  <Icon size={42} strokeWidth={1.8} />
                  <h3>{t(title)}</h3>
                  <p>{t(text)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Offer audience={audience} href={href} />
        <Faq editor={editor} />
        <FinalCta editor={editor} href={href} />
      </main>
      <footer>
        <a href="#" className="brand">
          EDITOR<span>NOVA ERA</span>
        </a>
        <p>
          Editor Nova Era · {new Date().getFullYear()} ·{" "}
          {t("Todos os direitos reservados.")}
        </p>
      </footer>
    </>
  );
}
