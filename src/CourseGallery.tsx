import { useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { tracks } from "./content";
import type { Audience } from "./content";
import { CarouselControls, SectionHeading } from "./components";
export function CourseGallery({ audience }: { audience: Audience }) {
  const available = tracks.filter(
    (t) => audience === "editor" || ["dr", "ai"].includes(t.id),
  );
  const [selected, setSelected] = useState(available[0].id);
  const [slide, setSlide] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const track = available.find((t) => t.id === selected) ?? available[0];
  function changeTrack(id: string) {
    setSelected(id);
    setSlide(0);
  }
  return (
    <section className="gallery-section" id="trilhas">
      <div className="container">
        <SectionHeading
          eyebrow="O que você vai aprender"
          description="Técnica, ferramentas e prática. Conheça o conteúdo que faz parte da sua próxima fase."
        >
          Sua jornada dentro do <em>Editor Nova Era.</em>
        </SectionHeading>
        <div
          className="track-tabs"
          role="tablist"
          aria-label="Trilhas do curso"
        >
          {available.map((t, index) => (
            <button
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`tab-${t.id}`}
              role="tab"
              aria-selected={track.id === t.id}
              tabIndex={track.id === t.id ? 0 : -1}
              aria-controls="track-panel"
              key={t.id}
              onClick={() => changeTrack(t.id)}
              onKeyDown={(event) => {
                if (
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(
                    event.key,
                  )
                )
                  return;
                event.preventDefault();
                const next =
                  event.key === "Home"
                    ? 0
                    : event.key === "End"
                      ? available.length - 1
                      : (index +
                          (event.key === "ArrowRight" ? 1 : -1) +
                          available.length) %
                        available.length;
                changeTrack(available[next].id);
                tabRefs.current[next]?.focus();
              }}
            >
              {t.title}
            </button>
          ))}
        </div>
        <div
          id="track-panel"
          role="tabpanel"
          aria-labelledby={`tab-${track.id}`}
        >
          <div className="track-intro">
            <span className="small-tag">
              <Sparkles size={13} />
              {track.subtitle}
            </span>
            <p>{track.description}</p>
          </div>
          <div className="lesson-stage" aria-live="polite">
            {[-1, 0, 1].map((offset) => {
              const i =
                (slide + offset + track.lessons.length) % track.lessons.length;
              const lesson = track.lessons[i];
              return (
                <figure
                  className={`lesson-card ${offset === 0 ? "is-center" : offset < 0 ? "is-left" : "is-right"}`}
                  key={`${track.id}-${offset}`}
                  aria-hidden={offset !== 0}
                >
                  <img
                    src={`/assets/${lesson[1]}`}
                    alt={lesson[0]}
                    loading="lazy"
                    width="400"
                    height="600"
                  />
                  <figcaption>
                    <span>{track.title}</span>
                    <strong>{lesson[0]}</strong>
                  </figcaption>
                </figure>
              );
            })}
          </div>
          <CarouselControls
            index={slide}
            count={track.lessons.length}
            onChange={setSlide}
            label="Aula"
          />
        </div>
        {audience === "operation" && (
          <p className="fine-print text-center">
            Seu acesso inclui Editor DR e Edite com IA. As outras quatro trilhas
            fazem parte da formação completa.
          </p>
        )}
      </div>
    </section>
  );
}
