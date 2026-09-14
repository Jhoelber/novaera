import { ShieldCheck, Sparkles, Clock3, KeyRound } from "lucide-react";
import { Cta, CheckList, SectionHeading } from "./components";
import { offers } from "./content";
import type { Audience } from "./content";
import { useI18n } from "./i18n";
export function Offer({
  audience,
  href,
}: {
  audience: Audience;
  href: string;
}) {
  const { t } = useI18n();
  const editor = audience === "editor";
  const offer = offers[audience];
  return (
    <section className="section offer-section" id="oferta">
      <div className="container">
        <SectionHeading eyebrow={t("A sua próxima fase começa aqui")}>
          Editor <em>Nova Era.</em>
        </SectionHeading>
        <div className="offer-card">
          <div>
            <span className="small-tag">
              {editor
                ? t("6 TRILHAS · FORMAÇÃO COMPLETA")
                : t("2 TRILHAS · DR + IA")}
            </span>
            <h3>{t(offer.label)}</h3>
            <CheckList items={offer.benefits.map(t)} />
          </div>
          <div className="offer-price">
            <p>{t("Comece a aprender por")}</p>
            <div className="price">
              <span>12x R$</span>
              {offer.installment}
            </div>
            <p>
              {t("ou")}{" "}
              <strong>
                R${offer.price} {t("à vista")}
              </strong>
            </p>
            <Cta href={href}>{t("Garantir minha vaga")}</Cta>
            <span className="guarantee">
              <ShieldCheck size={18} /> {t("Garantia de 7 dias")}
            </span>
            <p className="fine-print">
              {t("Acesso após confirmação do pagamento.")}
              <br />
              {t("Confira as condições de parcelamento no checkout.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export function FinalCta({ editor, href }: { editor: boolean; href: string }) {
  const { t } = useI18n();
  return (
    <section className="final-cta">
      <div className="container narrow">
        <p className="small-tag">
          <Sparkles size={14} /> {t("EDIÇÃO · IA · NOVAS POSSIBILIDADES")}
        </p>
        <h2>
          {editor ? (
            <>
              {t("Pronto para construir sua")}{" "}
              <em>{t("carreira como editor?")}</em>
            </>
          ) : (
            <>
              {t("Pronto para ter autonomia sobre")}{" "}
              <em>{t("suas edições?")}</em>
            </>
          )}
        </h2>
        <p>
          {editor
            ? t(
                "O caminho do zero ao profissional começa com o seu próximo passo.",
              )
            : t(
                "Aprenda Direct Response e IA para transformar seu processo de produção.",
              )}
        </p>
        <Cta href={href} />
        <div className="final-facts">
          <span>
            <ShieldCheck size={16} /> {t("7 dias de garantia")}
          </span>
          <span>
            <Clock3 size={16} />
            {t("Online, no seu ritmo")}
          </span>
          <span>
            <KeyRound size={16} />
            {t("Acesso após confirmação")}
          </span>
        </div>
      </div>
    </section>
  );
}
