import { ShieldCheck, Sparkles, Clock3, KeyRound } from "lucide-react";
import { Cta, CheckList, SectionHeading } from "./components";
import { offers } from "./content";
import type { Audience } from "./content";
export function Offer({
  audience,
  href,
}: {
  audience: Audience;
  href: string;
}) {
  const editor = audience === "editor";
  const offer = offers[audience];
  return (
    <section className="section offer-section" id="oferta">
      <div className="container">
        <SectionHeading eyebrow="A sua próxima fase começa aqui">
          Editor <em>Nova Era.</em>
        </SectionHeading>
        <div className="offer-card">
          <div>
            <span className="small-tag">
              {editor ? "6 TRILHAS · FORMAÇÃO COMPLETA" : "2 TRILHAS · DR + IA"}
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
  );
}
export function FinalCta({ editor, href }: { editor: boolean; href: string }) {
  return (
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
  );
}
