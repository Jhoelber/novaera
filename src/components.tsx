import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { ReactNode } from "react";
import { useI18n } from "./i18n";
export function SectionHeading({
  eyebrow,
  children,
  description,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
export function Cta({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children?: ReactNode;
  secondary?: boolean;
}) {
  const { t } = useI18n();
  return (
    <a className={`cta ${secondary ? "cta-secondary" : ""}`} href={href}>
      {children ?? t("Quero começar agora")}
      {!secondary && <ArrowRight size={18} aria-hidden="true" />}
    </a>
  );
}
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 size={17} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
export function CarouselControls({
  index,
  count,
  onChange,
  label,
  className,
  onPrevious,
  onNext,
}: {
  index: number;
  count: number;
  onChange: (index: number) => void;
  label: string;
  className?: string;
  onPrevious?: () => void;
  onNext?: () => void;
}) {
  const { t } = useI18n();
  const previousLabel =
    label === "Aula" ? t("Aula anterior") : t("Depoimento anterior");
  const nextLabel =
    label === "Aula" ? t("Próxima aula") : t("Próximo depoimento");
  return (
    <div className={`carousel-controls ${className ?? ""}`}>
      <button
        className="arrow-button"
        aria-label={previousLabel}
        onClick={() =>
          onPrevious ? onPrevious() : onChange((index - 1 + count) % count)
        }
      >
        <ChevronLeft size={22} />
      </button>
      <div className="dots">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            aria-label={`${t(label)} ${i + 1}`}
            aria-pressed={index === i}
            onClick={() => onChange(i)}
          >
            <span />
          </button>
        ))}
      </div>
      <button
        className="arrow-button"
        aria-label={nextLabel}
        onClick={() => (onNext ? onNext() : onChange((index + 1) % count))}
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
