import { useRef, useState } from "react";
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
  ArrowUpRight,
  X,
} from "lucide-react";
import { offers, tracks, testimonials, checkoutUrl } from "./content";
import type { Audience } from "./content";
import { CarouselControls, CheckList, Cta, SectionHeading } from "./components";
import { CourseGallery } from "./CourseGallery";

const icons = [MonitorPlay, Layers3, KeyRound, Sparkles, Users, TrendingUp];
export function App() {
  const [audience, setAudience] = useState<Audience>("editor");
  const [testimonial, setTestimonial] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
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
        <section className="section" id="resultados">
          <div className="container">
            <SectionHeading
              eyebrow="Experiências de quem já começou"
              description="Veja os relatos compartilhados por alunos do Editor Nova Era."
            >
              Da aula para a <em>vida real.</em>
            </SectionHeading>
            <div className="proof-card">
              <div className="proof-top">
                <span className="small-tag">Editor Nova Era · Depoimentos</span>
                <span className="mono">
                  Relato {testimonial + 1} de {testimonials.length}
                </span>
              </div>
              <div className="proof-content">
                <div>
                  <p className="eyebrow">Cada trajetória é única</p>
                  <h3>O próximo passo começa com uma nova habilidade.</h3>
                  <p>
                    Técnica, ferramentas e prática para transformar a forma como
                    você edita.
                  </p>
                  <CheckList
                    items={
                      editor
                        ? [
                            "Edição para Direct Response",
                            "IA aplicada à criação de vídeos",
                            "Clientes e posicionamento profissional",
                          ]
                        : [
                            "Criativos e VSLs para sua operação",
                            "Inteligência artificial na edição",
                            "Mais autonomia no processo criativo",
                          ]
                    }
                  />
                  <p className="fine-print">
                    Relatos individuais. Resultados não representam garantia de
                    desempenho ou faturamento.
                  </p>
                </div>
                <button
                  className="testimonial-image"
                  onClick={() => dialog.current?.showModal()}
                  aria-label={`Ampliar depoimento ${testimonial + 1}`}
                >
                  <img
                    src={`/assets/${testimonials[testimonial]}`}
                    alt={`Depoimento de aluno ${testimonial + 1}, publicado no Editor Nova Era`}
                    loading="lazy"
                  />
                  <span>
                    Ampliar depoimento <ArrowUpRight size={16} />
                  </span>
                </button>
              </div>
            </div>
            <CarouselControls
              label="Depoimento"
              index={testimonial}
              count={testimonials.length}
              onChange={setTestimonial}
            />
          </div>
        </section>
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
        <section className="section offer-section" id="oferta">
          <div className="container">
            <SectionHeading eyebrow="A sua próxima fase começa aqui">
              Editor <em>Nova Era.</em>
            </SectionHeading>
            <div className="offer-card">
              <div>
                <span className="small-tag">
                  {editor
                    ? "6 TRILHAS · FORMAÇÃO COMPLETA"
                    : "2 TRILHAS · DR + IA"}
                </span>
                <h3>{offer.label}</h3>
                <CheckList items={offer.benefits} />
              </div>
              <div className="offer-price">
                <p>Comece a aprender por</p>
                <div className="price">
                  <span>12x R$</span>
                  {offer.installment}
                </div>
                <p>
                  ou <strong>R${offer.price} à vista</strong>
                </p>
                <Cta href={href}>Garantir minha vaga</Cta>
                <span className="guarantee">
                  <ShieldCheck size={18} /> Garantia de 7 dias
                </span>
                <p className="fine-print">
                  Acesso após confirmação do pagamento.
                  <br />
                  Confira as condições de parcelamento no checkout.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section faq-section">
          <div className="container narrow">
            <SectionHeading eyebrow="Dúvidas frequentes">
              Antes do seu <em>primeiro passo.</em>
            </SectionHeading>
            <div className="faq-list">
              {questions.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="container narrow">
            <p className="small-tag">
              <Sparkles size={14} /> EDIÇÃO · IA · NOVAS POSSIBILIDADES
            </p>
            <h2>
              {editor ? (
                <>
                  Pronto para construir sua <em>carreira como editor?</em>
                </>
              ) : (
                <>
                  Pronto para ter autonomia sobre <em>suas edições?</em>
                </>
              )}
            </h2>
            <p>
              {editor
                ? "O caminho do zero ao profissional começa com o seu próximo passo."
                : "Aprenda Direct Response e IA para transformar seu processo de produção."}
            </p>
            <Cta href={href} />
            <div className="final-facts">
              <span>
                <ShieldCheck size={16} />7 dias de garantia
              </span>
              <span>
                <Clock3 size={16} />
                Online, no seu ritmo
              </span>
              <span>
                <KeyRound size={16} />
                Acesso após confirmação
              </span>
            </div>
          </div>
        </section>
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
      <dialog
        ref={dialog}
        className="image-dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div>
          <button
            className="dialog-close arrow-button"
            aria-label="Fechar depoimento"
            onClick={() => dialog.current?.close()}
          >
            <X />
          </button>
          <img
            src={`/assets/${testimonials[testimonial]}`}
            alt={`Depoimento ampliado de aluno ${testimonial + 1}`}
          />
        </div>
      </dialog>
    </>
  );
}
