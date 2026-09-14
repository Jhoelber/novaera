export type Audience = "editor" | "operation";
export const offers = {
  editor: {
    label: "Formação completa de editor",
    price: "250,00",
    installment: "25,41",
    checkout: "https://pay.hub.la/LqAaAy3mOmqx40uXTyCh",
    description:
      "Edição, IA, tráfego para conseguir clientes, negociação e um Instagram que vende seu trabalho. O caminho completo, do zero ao profissional.",
    benefits: [
      "Acesso a todas as 6 trilhas do curso",
      "Edição para Direct Response e criação com IA",
      "Tráfego para conseguir seus primeiros clientes",
      "Como negociar e conversar com clientes",
      "Instagram e portfólio para apresentar seu trabalho",
      "Atualizações das ferramentas de IA",
    ],
    problem: "Editar bem nunca foi o suficiente pra viver de edição.",
    problems: [
      "Sabe editar, mas não sabe como conseguir o primeiro cliente",
      "Depende só de indicação — e isso trava o crescimento",
      "Cobra pouco porque tem medo de espantar o cliente",
      "Falta a parte de negócio: tráfego, conversa e portfólio",
    ],
    solutions: [
      "Aprenda a buscar seus primeiros clientes",
      "Combine tráfego e presença online",
      "Aprenda a negociar e apresentar seu valor",
      "Desenvolva técnica, IA e visão de negócio",
    ],
  },
  operation: {
    label: "Acesso Direct Response + IA",
    price: "100,00",
    installment: "10,17",
    checkout: "https://pay.hub.la/fxcsaWgXlNiyiJ0nelW1",
    description:
      "Acesso aos módulos de Edição para Direct Response e Edição com IA. O essencial para editar seus próprios vídeos com agilidade e qualidade profissional.",
    benefits: [
      "Acesso à trilha Editor DR (Direct Response)",
      "Acesso à trilha Edite com IA",
      "Criativos e vídeos para sua operação",
      "Atualizações das ferramentas de IA",
    ],
    problem: "O problema nunca foi dinheiro. Foi controle.",
    problems: [
      "O editor sumiu no meio do lançamento",
      "Um corte virou refação três vezes",
      "Perdeu o timing esperando a edição ficar pronta",
      "Depende de gente demais para colocar um vídeo no ar",
    ],
    solutions: [
      "Tenha autonomia sobre suas edições",
      "Aprenda a executar seus próprios ajustes",
      "Edite com mais agilidade usando IA",
      "Domine o essencial de Direct Response",
    ],
  },
};
export const tracks = [
  {
    id: "start",
    title: "Comece Aqui",
    subtitle: "Toda a base para começar",
    description:
      "Conheça a formação, organize seus primeiros passos e descubra as ferramentas que vão acompanhar sua jornada.",
    lessons: [
      ["Bem-vindo!", "bem-vindo.png"],
      ["Os Sites", "os-sites.png"],
      ["Vem por aí", "vem-por-ai.png"],
    ],
  },
  {
    id: "dr",
    title: "Editor DR",
    subtitle: "Edição para Direct Response",
    description:
      "Entenda o papel da edição em criativos e VSLs. Aprenda a construir vídeos com intenção, ritmo e foco na mensagem.",
    lessons: [
      ["O que é DR", "dr-o-que-e-dr.png"],
      ["Para Criativos", "dr-para-criativos.png"],
      ["Zero Custo", "dr-zero-custo.png"],
      ["Vendem", "dr-vendem.png"],
      ["Para VSL", "dr-para-vsl.png"],
    ],
  },
  {
    id: "tools",
    title: "Entenda os Sites",
    subtitle: "As ferramentas do seu dia a dia",
    description:
      "Explore ferramentas de edição, organização, voz e geração de vídeo para ampliar suas possibilidades de criação.",
    lessons: [
      ["Canva", "IMG_8418-1.jpg"],
      ["CapCut", "IMG_8419-1.jpg"],
      ["Trello", "IMG_8420-1.jpg"],
      ["Higgsfield", "IMG_8421-1.jpg"],
      ["ElevenLabs", "IMG_8422-1.jpg"],
      ["HeyGen", "IMG_8423-1.jpg"],
      ["DreamFace", "IMG_8424-1.jpg"],
      ["Gemini / Flow", "WhatsApp-Image-2026-08-31-at-08.44.45-1.jpeg"],
    ],
  },
  {
    id: "ai",
    title: "Edite com IA",
    subtitle: "Inteligência artificial na prática",
    description:
      "Traga a IA para seu processo criativo. Explore geração de vídeo, elementos visuais e novas formas de criar.",
    lessons: [
      ["Google Veo 3", "ia-google-veo3.png"],
      ["Elementos Visuais", "ia-elementos-visuais.png"],
      ["Empreender com IA", "ia-empreender-com-ia.png"],
      ["Conceitografia", "ia-conceitografia.png"],
    ],
  },
  {
    id: "clients",
    title: "Seus Primeiros Clientes",
    subtitle: "Do seu trabalho à primeira oportunidade",
    description:
      "Aprenda a divulgar sua edição, encontrar oportunidades e conversar com clientes com mais segurança.",
    lessons: [
      ["Para Editores", "clientes-para-editores.png"],
      ["Orgânico", "clientes-organico.png"],
      ["Trabalho", "clientes-trabalho.png"],
      ["O Cliente", "clientes-o-cliente.png"],
      ["Com Eles", "clientes-com-eles.png"],
    ],
  },
  {
    id: "growth",
    title: "Cresça como Editor",
    subtitle: "Construa uma presença profissional",
    description:
      "Organize seu portfólio e use o Instagram e a divulgação para tornar seu trabalho mais visível.",
    lessons: [
      ["Instagram", "cresca-instagram.png"],
      ["Portfólio", "cresca-portfolio.png"],
      ["Alta Divulgação", "WhatsApp-Image-2026-08-31-at-09.42.34.jpeg"],
      ["Faz Divulgação", "cresca-faz-divulgacao.png"],
    ],
  },
];
export const testimonials = [
  "WhatsApp-Image-2026-09-01-at-15.16.55.jpeg",
  "WhatsApp-Image-2026-09-01-at-16.06.27.jpeg",
  "WhatsApp-Image-2026-09-01-at-16.11.13.jpeg",
];
export function checkoutUrl(audience: Audience) {
  const url = new URL(offers[audience].checkout);
  const params = new URLSearchParams(window.location.search);
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ]) {
    const value = params.get(key);
    if (value) url.searchParams.set(key, value.slice(0, 200));
  }
  return url.toString();
}
