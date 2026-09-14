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
} from "lucide-react";
import { offers, tracks, checkoutUrl } from "./content";
import type { Audience } from "./content";
import { CheckList, Cta, SectionHeading } from "./components";
import { CourseGallery } from "./CourseGallery";
import { Testimonials } from "./Testimonials";
import { Faq } from "./Faq";
import { Offer, FinalCta } from "./Offer";

const icons = [MonitorPlay, Layers3, KeyRound, Sparkles, Users, TrendingUp];
export function App() {
  const [audience, setAudience] = useState<Audience>("editor");
  const offer = offers[audience];
  const editor = audience === "editor";
  const available = tracks.filter((t) => editor || ["dr", "ai"].includes(t.id));
  const href = checkoutUrl(audience);
  const facts = [
    {
      icon: Clock3,
      title: "Online, no seu ritmo",
      text: "Assista às aulas e evolua de acordo com a sua rotina.",
    },
    {
      icon: KeyRound,
      title: "Acesso imediato",
      text: "Comece a aprender após a confirmação do pagamento.",
    },
    {
      icon: Sparkles,
      title: "Edição + inteligência artificial",
      text: "Técnica e ferramentas de IA no mesmo processo criativo.",
    },
    {
      icon: TrendingUp,
      title: editor ? "Do zero ao profissional" : "Autonomia para sua operação",
      text: editor
        ? "Da primeira edição à construção da sua carreira."
        : "Edite seus próprios vídeos com mais agilidade.",
    },
  ];
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <a href="#" aria-label="Editor Nova Era — início" className="brand">
          EDITOR<span>NOVA ERA</span>
        </a>
      </header>
      <main id="conteudo">
        <section className="hero">
          <div className="container hero-inner">
            <div className="audience-switch" aria-label="Escolha seu perfil">
              <button
                aria-pressed={editor}
                onClick={() => setAudience("editor")}
              >
                Sou Editor
              </button>
              <button
                aria-pressed={!editor}
                onClick={() => setAudience("operation")}
              >
                Sou Dono de Operação
              </button>
            </div>
            <p className="eyebrow hero-eyebrow">
              {editor
                ? "Formação completa de editor"
                : "Edição para donos de operação"}
            </p>
            <h1>
              {editor ? (
                <>
                  De editor iniciante a <em>R$10.000/mês.</em>
                  <br />
                  Construa sua carreira com <em>edição de vídeo.</em>
                </>
              ) : (
                <>
                  Edite seus <em>próprios vídeos.</em>
                  <br />
                  Tenha o controle da <em>sua operação.</em>
                </>
              )}
            </h1>
            <p className="hero-description">{offer.description}</p>
            <div className="hero-actions">
              <Cta href={href} />
              <Cta href="#trilhas" secondary>
                Conheça as trilhas
              </Cta>
            </div>
            <p className="hero-note">
              {editor
                ? "Uma formação para buscar sua meta. Resultados variam conforme a aplicação."
                : "Direct Response e IA. Dois módulos, um novo nível de autonomia."}
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
              eyebrow="O método Editor Nova Era"
              description={
                editor
                  ? "Uma jornada que conecta edição, inteligência artificial e a construção do seu negócio."
                  : "Aprenda o essencial para assumir o controle da produção dos seus vídeos."
              }
            >
              {editor ? (
                <>
                  Mais que editar. Aprenda a <em>evoluir.</em>
                </>
              ) : (
                <>
                  Da ideia à edição, com <em>autonomia.</em>
                </>
              )}
            </SectionHeading>
            <div className="journey-grid grid grid-cols-1 md:grid-cols-2">
              {available.map((t, i) => {
                const Icon =
                  icons[tracks.findIndex((track) => track.id === t.id)];
                return (
                  <article className="journey-card" key={t.id}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="small-tag">
                        TRILHA {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="icon-box">
                        <Icon size={22} />
                      </span>
                    </div>
                    <h3>{t.title}</h3>
                    <h4>{t.subtitle}</h4>
                    <p>{t.description}</p>
                    <div className="journey-deliverables">
                      <p className="micro-heading">Dentro desta trilha</p>
                      <CheckList
                        items={t.lessons.slice(0, 3).map((l) => l[0])}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="comparison">
              <SectionHeading eyebrow="O que está travando seu próximo passo?">
                {offer.problem}
              </SectionHeading>
              <div className="comparison-head">
                <span>O desafio</span>
                <span>O que você vai desenvolver</span>
              </div>
              {offer.problems.map((problem, i) => (
                <div className="comparison-row" key={problem}>
                  <p>
                    <X size={18} />
                    {problem}
                  </p>
                  <p>
                    <ShieldCheck size={18} />
                    {offer.solutions[i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section skills-section">
          <div className="container">
            <SectionHeading
              eyebrow="Conhecimento que vira prática"
              description="Um conjunto de habilidades para acompanhar a nova era da edição."
            >
              Seu próximo repertório.
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
                  <h3>{title}</h3>
                  <p>{text}</p>
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
          Editor Nova Era · {new Date().getFullYear()} · Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}
