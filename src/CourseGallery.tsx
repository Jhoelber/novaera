import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Sparkles } from "lucide-react";
import { tracks } from "./content";
import type { Audience } from "./content";
import { CarouselControls, SectionHeading } from "./components";
import { useSwipe } from "./useSwipe";
import { useI18n } from "./i18n";
export function CourseGallery({ audience }: { audience: Audience }) {
  const { t } = useI18n();
  const available = tracks.filter(
    (t) => audience === "editor" || ["dr", "ai"].includes(t.id),
  );
  const [selected, setSelected] = useState(available[0].id);
  const [position, setPosition] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const track = available.find((t) => t.id === selected) ?? available[0];
  const slide =
    ((position % track.lessons.length) + track.lessons.length) %
    track.lessons.length;
  const swipe = useSwipe((direction) => {
    setPosition((current) => current + (direction === "next" ? 1 : -1));
  });
  function changeTrack(id: string) {
    setSelected(id);
    setPosition(0);
  }
  function goToSlide(index: number) {
    setPosition((current) => {
      const currentIndex =
        ((current % track.lessons.length) + track.lessons.length) %
        track.lessons.length;
      let distance = index - currentIndex;
      if (Math.abs(distance) > track.lessons.length / 2) {
        distance += distance > 0 ? -track.lessons.length : track.lessons.length;
      }
      return current + distance;
    });
  }
  return (
    <section className="gallery-section" id="trilhas">
      <div className="container">
        <SectionHeading
          eyebrow={t("O que você vai aprender")}
          description={t(
            "Técnica, ferramentas e prática. Conheça o conteúdo que faz parte da sua próxima fase.",
          )}
        >
          {t("Sua jornada dentro do")} <em>Editor Nova Era.</em>
        </SectionHeading>
        <div
          className="track-tabs"
          role="tablist"
          aria-label={t("Trilhas do curso")}
        >
          {available.map((trackOption, index) => (
            <button
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`tab-${trackOption.id}`}
              role="tab"
              aria-selected={track.id === trackOption.id}
              tabIndex={track.id === trackOption.id ? 0 : -1}
              aria-controls="track-panel"
              key={trackOption.id}
              onClick={() => changeTrack(trackOption.id)}
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
              {t(trackOption.title)}
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
              {t(track.subtitle)}
            </span>
            <p>{t(track.description)}</p>
          </div>
          <div className="gallery-carousel-shell">
            <div
              className={`lesson-stage swipe-surface ${swipe.dragging ? "is-dragging" : ""}`}
              style={{ "--swipe-offset": `${swipe.offset}px` } as CSSProperties}
              aria-live="polite"
              {...swipe.handlers}
            >
              {Array.from({ length: track.lessons.length }, (_, item) => {
                const firstOffset = -Math.floor((track.lessons.length - 1) / 2);
                const offset = firstOffset + item;
                const virtualPosition = position + offset;
                const lessonIndex =
                  ((virtualPosition % track.lessons.length) +
                    track.lessons.length) %
                  track.lessons.length;
                const lesson = track.lessons[lessonIndex];
                const placement =
                  offset === 0
                    ? "is-center"
                    : offset === -1
                      ? "is-left"
                      : offset === 1
                        ? "is-right"
                        : offset < 0
                          ? "is-far-left"
                          : "is-far-right";
                return (
                  <figure
                    className={`lesson-card ${placement}`}
                    key={`${track.id}-${virtualPosition}`}
                    aria-hidden={offset !== 0}
                  >
                    <img
                      draggable={false}
                      src={`/assets/${lesson[1]}`}
                      alt={t(lesson[0])}
                      loading="lazy"
                      width="400"
                      height="600"
                    />
                    <figcaption>
                      <span>{t(track.title)}</span>
                      <strong>{t(lesson[0])}</strong>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
            <CarouselControls
              className="gallery-carousel-controls"
              index={slide}
              count={track.lessons.length}
              onChange={goToSlide}
              onPrevious={() => setPosition((current) => current - 1)}
              onNext={() => setPosition((current) => current + 1)}
              label="Aula"
            />
          </div>
        </div>
        {audience === "operation" && (
          <p className="fine-print text-center">
            {t(
              "Seu acesso inclui Editor DR e Edite com IA. As outras quatro trilhas fazem parte da formação completa.",
            )}
          </p>
        )}
      </div>
    </section>
  );
}
