import { useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { testimonials } from "./content";
import { CarouselControls, CheckList, SectionHeading } from "./components";
export function Testimonials({ editor }: { editor: boolean }) {
  const [testimonial, setTestimonial] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
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
