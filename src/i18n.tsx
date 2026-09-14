import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type Language = "pt" | "es" | "en";

const es: Record<string, string> = {
  "Editor Nova Era | Edição, IA e sua próxima fase":
    "Editor Nova Era | Edición, IA y tu próxima etapa",
  "Pular para o conteúdo": "Saltar al contenido",
  "Editor Nova Era — início": "Editor Nova Era — inicio",
  "Idioma do site": "Idioma del sitio",
  "Escolha seu perfil": "Elige tu perfil",
  "Sou Editor": "Soy editor",
  "Sou Dono de Operação": "Soy dueño de una operación",
  "Formação completa de editor": "Formación completa para editores",
  "Edição para donos de operação": "Edición para dueños de operaciones",
  "De editor iniciante a": "De editor principiante a",
  "Construa sua carreira com": "Construye tu carrera con",
  "edição de vídeo.": "edición de video.",
  "Edite seus": "Edita tus",
  "próprios vídeos.": "propios videos.",
  "Tenha o controle da": "Toma el control de",
  "sua operação.": "tu operación.",
  "Quero começar agora": "Quiero empezar ahora",
  "Conheça as trilhas": "Conoce las rutas",
  "Uma formação para buscar sua meta. Resultados variam conforme a aplicação.":
    "Una formación para alcanzar tu meta. Los resultados varían según la aplicación.",
  "Direct Response e IA. Dois módulos, um novo nível de autonomia.":
    "Direct Response e IA. Dos módulos, un nuevo nivel de autonomía.",
  "Online, no seu ritmo": "Online, a tu ritmo",
  "Assista às aulas e evolua de acordo com a sua rotina.":
    "Mira las clases y avanza de acuerdo con tu rutina.",
  "Acesso imediato": "Acceso inmediato",
  "Comece a aprender após a confirmação do pagamento.":
    "Empieza a aprender después de la confirmación del pago.",
  "Edição + inteligência artificial": "Edición + inteligencia artificial",
  "Técnica e ferramentas de IA no mesmo processo criativo.":
    "Técnica y herramientas de IA en el mismo proceso creativo.",
  "Do zero ao profissional": "De cero a profesional",
  "Da primeira edição à construção da sua carreira.":
    "Desde tu primera edición hasta construir tu carrera.",
  "Autonomia para sua operação": "Autonomía para tu operación",
  "Edite seus próprios vídeos com mais agilidade.":
    "Edita tus propios videos con mayor agilidad.",
  "O método Editor Nova Era": "El método Editor Nova Era",
  "Uma jornada que conecta edição, inteligência artificial e a construção do seu negócio.":
    "Un recorrido que conecta edición, inteligencia artificial y la construcción de tu negocio.",
  "Aprenda o essencial para assumir o controle da produção dos seus vídeos.":
    "Aprende lo esencial para tomar el control de la producción de tus videos.",
  "Mais que editar. Aprenda a": "Más que editar. Aprende a",
  "evoluir.": "evolucionar.",
  "Da ideia à edição, com": "De la idea a la edición, con",
  "autonomia.": "autonomía.",
  TRILHA: "RUTA",
  "Dentro desta trilha": "Dentro de esta ruta",
  "O que está travando seu próximo passo?":
    "¿Qué está frenando tu próximo paso?",
  "O desafio": "El desafío",
  "O que você vai desenvolver": "Lo que vas a desarrollar",
  "Conhecimento que vira prática": "Conocimiento que se convierte en práctica",
  "Um conjunto de habilidades para acompanhar a nova era da edição.":
    "Un conjunto de habilidades para acompañar la nueva era de la edición.",
  "Seu próximo repertório.": "Tu próximo repertorio.",
  "Edição de vídeo": "Edición de video",
  "Do primeiro corte aos criativos e VSLs.":
    "Desde el primer corte hasta creativos y VSL.",
  "Inteligência artificial": "Inteligencia artificial",
  "Novas ferramentas para seu processo criativo.":
    "Nuevas herramientas para tu proceso creativo.",
  "Ferramentas digitais": "Herramientas digitales",
  "Conheça os sites que apoiam sua produção.":
    "Conoce los sitios que apoyan tu producción.",
  "Prospecção de clientes": "Prospección de clientes",
  "Aprenda a encontrar suas primeiras oportunidades.":
    "Aprende a encontrar tus primeras oportunidades.",
  Negociação: "Negociación",
  "Converse com clientes e apresente seu trabalho.":
    "Habla con clientes y presenta tu trabajo.",
  "Presença profissional": "Presencia profesional",
  "Instagram, portfólio e divulgação.": "Instagram, portafolio y promoción.",
  "Direct Response": "Direct Response",
  "Edição para criativos e VSLs.": "Edición para creativos y VSL.",
  "Vídeos e elementos visuais com IA.": "Videos y elementos visuales con IA.",
  Autonomia: "Autonomía",
  "Mais controle sobre sua própria produção.":
    "Más control sobre tu propia producción.",
  "Todos os direitos reservados.": "Todos los derechos reservados.",
  "Experiências de quem já começou": "Experiencias de quienes ya empezaron",
  "Veja os relatos compartilhados por alunos do Editor Nova Era.":
    "Mira los testimonios compartidos por alumnos de Editor Nova Era.",
  "Da aula para a": "De la clase a la",
  "vida real.": "vida real.",
  Depoimentos: "Testimonios",
  Relato: "Testimonio",
  de: "de",
  "Cada trajetória é única": "Cada trayectoria es única",
  "O próximo passo começa com uma nova habilidade.":
    "El siguiente paso comienza con una nueva habilidad.",
  "Técnica, ferramentas e prática para transformar a forma como você edita.":
    "Técnica, herramientas y práctica para transformar tu forma de editar.",
  "Edição para Direct Response": "Edición para Direct Response",
  "IA aplicada à criação de vídeos": "IA aplicada a la creación de videos",
  "Clientes e posicionamento profissional":
    "Clientes y posicionamiento profesional",
  "Criativos e VSLs para sua operação": "Creativos y VSL para tu operación",
  "Inteligência artificial na edição": "Inteligencia artificial en la edición",
  "Mais autonomia no processo criativo": "Más autonomía en el proceso creativo",
  "Relatos individuais. Resultados não representam garantia de desempenho ou faturamento.":
    "Testimonios individuales. Los resultados no garantizan rendimiento ni ingresos.",
  "Ampliar depoimento": "Ampliar testimonio",
  "Fechar depoimento": "Cerrar testimonio",
  "Depoimento de aluno": "Testimonio de alumno",
  "publicado no Editor Nova Era": "publicado en Editor Nova Era",
  "Depoimento ampliado de aluno": "Testimonio ampliado de alumno",
  Depoimento: "Testimonio",
  "Depoimento anterior": "Testimonio anterior",
  "Próximo depoimento": "Siguiente testimonio",
  "O que você vai aprender": "Lo que vas a aprender",
  "Técnica, ferramentas e prática. Conheça o conteúdo que faz parte da sua próxima fase.":
    "Técnica, herramientas y práctica. Conoce el contenido de tu próxima etapa.",
  "Sua jornada dentro do": "Tu recorrido dentro de",
  "Trilhas do curso": "Rutas del curso",
  Aula: "Clase",
  "Aula anterior": "Clase anterior",
  "Próxima aula": "Siguiente clase",
  "Seu acesso inclui Editor DR e Edite com IA. As outras quatro trilhas fazem parte da formação completa.":
    "Tu acceso incluye Editor DR y Edita con IA. Las otras cuatro rutas forman parte de la formación completa.",
  "A sua próxima fase começa aqui": "Tu próxima etapa comienza aquí",
  "6 TRILHAS · FORMAÇÃO COMPLETA": "6 RUTAS · FORMACIÓN COMPLETA",
  "2 TRILHAS · DR + IA": "2 RUTAS · DR + IA",
  "Comece a aprender por": "Empieza a aprender por",
  ou: "o",
  "à vista": "al contado",
  "Garantir minha vaga": "Reservar mi plaza",
  "Garantia de 7 dias": "Garantía de 7 días",
  "Acesso após confirmação do pagamento.":
    "Acceso después de la confirmación del pago.",
  "Confira as condições de parcelamento no checkout.":
    "Consulta las condiciones de pago en el checkout.",
  "EDIÇÃO · IA · NOVAS POSSIBILIDADES": "EDICIÓN · IA · NUEVAS POSIBILIDADES",
  "Pronto para construir sua": "¿Listo para construir tu",
  "carreira como editor?": "carrera como editor?",
  "Pronto para ter autonomia sobre": "¿Listo para tener autonomía sobre",
  "suas edições?": "tus ediciones?",
  "O caminho do zero ao profissional começa com o seu próximo passo.":
    "El camino de cero a profesional comienza con tu próximo paso.",
  "Aprenda Direct Response e IA para transformar seu processo de produção.":
    "Aprende Direct Response e IA para transformar tu proceso de producción.",
  "7 dias de garantia": "7 días de garantía",
  "Acesso após confirmação": "Acceso después de la confirmación",
  "Dúvidas frequentes": "Preguntas frecuentes",
  "Antes do seu": "Antes de tu",
  "primeiro passo.": "primer paso.",
  "Sou iniciante e nunca tive cliente. Consigo acompanhar?":
    "Soy principiante y nunca tuve clientes. ¿Puedo seguir el curso?",
  "Não quero virar editor profissional. Faz sentido pra mim?":
    "No quiero ser editor profesional. ¿Tiene sentido para mí?",
  "Sim. O curso começa pela base e avança até a busca e negociação com os primeiros clientes. Você pode acompanhar as aulas no seu ritmo.":
    "Sí. El curso comienza desde la base y avanza hasta la búsqueda y negociación con los primeros clientes. Puedes seguir las clases a tu ritmo.",
  "Sim. O acesso para donos de operação reúne Direct Response e IA: o essencial para editar seus próprios vídeos, sem a grade completa de formação.":
    "Sí. El acceso para dueños de operaciones reúne Direct Response e IA: lo esencial para editar tus propios videos sin la formación completa.",
  "O curso é só sobre IA?": "¿El curso trata solamente de IA?",
  "Não. A IA faz parte da jornada. A formação também aborda edição, tráfego, negociação, Instagram e portfólio.":
    "No. La IA forma parte del recorrido. La formación también aborda edición, tráfico, negociación, Instagram y portafolio.",
  "Não. Além das ferramentas de IA, seu acesso inclui edição para Direct Response, criativos e VSLs.":
    "No. Además de las herramientas de IA, tu acceso incluye edición para Direct Response, creativos y VSL.",
  "Realmente dá para faturar R$10 mil por mês editando?":
    "¿Realmente se pueden facturar R$10 mil al mes editando?",
  "Esse é o objetivo apresentado pela formação, e não uma garantia de renda. Os resultados dependem da sua dedicação, experiência, prospecção e das condições do mercado.":
    "Ese es el objetivo presentado por la formación, no una garantía de ingresos. Los resultados dependen de tu dedicación, experiencia, prospección y de las condiciones del mercado.",
  "Quais trilhas estão incluídas no meu acesso?":
    "¿Qué rutas están incluidas en mi acceso?",
  "A formação completa inclui Comece Aqui, Editor DR, Entenda os Sites, Edite com IA, Seus Primeiros Clientes e Cresça como Editor.":
    "La formación completa incluye Empieza Aquí, Editor DR, Conoce los Sitios, Edita con IA, Tus Primeros Clientes y Crece como Editor.",
  "O acesso para operação inclui as trilhas Editor DR e Edite com IA.":
    "El acceso para operaciones incluye las rutas Editor DR y Edita con IA.",
  "Tenho garantia?": "¿Tengo garantía?",
  "Sim. A oferta inclui garantia de 7 dias. Consulte as condições e o canal de atendimento no checkout da Hubla.":
    "Sí. La oferta incluye una garantía de 7 días. Consulta las condiciones y el canal de atención en el checkout de Hubla.",
  "Acesso Direct Response + IA": "Acceso Direct Response + IA",
  "Edição, IA, tráfego para conseguir clientes, negociação e um Instagram que vende seu trabalho. O caminho completo, do zero ao profissional.":
    "Edición, IA, tráfico para conseguir clientes, negociación y un Instagram que vende tu trabajo. El camino completo, de cero a profesional.",
  "Acesso aos módulos de Edição para Direct Response e Edição com IA. O essencial para editar seus próprios vídeos com agilidade e qualidade profissional.":
    "Acceso a los módulos de Edición para Direct Response y Edición con IA. Lo esencial para editar tus propios videos con agilidad y calidad profesional.",
  "Acesso a todas as 6 trilhas do curso": "Acceso a las 6 rutas del curso",
  "Edição para Direct Response e criação com IA":
    "Edición para Direct Response y creación con IA",
  "Tráfego para conseguir seus primeiros clientes":
    "Tráfico para conseguir tus primeros clientes",
  "Como negociar e conversar com clientes":
    "Cómo negociar y hablar con clientes",
  "Instagram e portfólio para apresentar seu trabalho":
    "Instagram y portafolio para presentar tu trabajo",
  "Atualizações das ferramentas de IA":
    "Actualizaciones de las herramientas de IA",
  "Acesso à trilha Editor DR (Direct Response)":
    "Acceso a la ruta Editor DR (Direct Response)",
  "Acesso à trilha Edite com IA": "Acceso a la ruta Edita con IA",
  "Criativos e vídeos para sua operação":
    "Creativos y videos para tu operación",
  "Editar bem nunca foi o suficiente pra viver de edição.":
    "Editar bien nunca fue suficiente para vivir de la edición.",
  "O problema nunca foi dinheiro. Foi controle.":
    "El problema nunca fue el dinero. Fue el control.",
  "Sabe editar, mas não sabe como conseguir o primeiro cliente":
    "Sabes editar, pero no cómo conseguir tu primer cliente",
  "Depende só de indicação — e isso trava o crescimento":
    "Dependes solo de recomendaciones, y eso frena el crecimiento",
  "Cobra pouco porque tem medo de espantar o cliente":
    "Cobras poco por miedo a perder al cliente",
  "Falta a parte de negócio: tráfego, conversa e portfólio":
    "Falta la parte de negocio: tráfico, conversación y portafolio",
  "Aprenda a buscar seus primeiros clientes":
    "Aprende a buscar tus primeros clientes",
  "Combine tráfego e presença online": "Combina tráfico y presencia online",
  "Aprenda a negociar e apresentar seu valor":
    "Aprende a negociar y presentar tu valor",
  "Desenvolva técnica, IA e visão de negócio":
    "Desarrolla técnica, IA y visión de negocio",
  "O editor sumiu no meio do lançamento":
    "El editor desapareció en pleno lanzamiento",
  "Um corte virou refação três vezes": "Un corte tuvo que rehacerse tres veces",
  "Perdeu o timing esperando a edição ficar pronta":
    "Perdiste el momento esperando la edición",
  "Depende de gente demais para colocar um vídeo no ar":
    "Dependes de demasiadas personas para publicar un video",
  "Tenha autonomia sobre suas edições": "Ten autonomía sobre tus ediciones",
  "Aprenda a executar seus próprios ajustes":
    "Aprende a realizar tus propios ajustes",
  "Edite com mais agilidade usando IA": "Edita con mayor agilidad usando IA",
  "Domine o essencial de Direct Response":
    "Domina lo esencial de Direct Response",
  "Comece Aqui": "Empieza Aquí",
  "Toda a base para começar": "Toda la base para empezar",
  "Conheça a formação, organize seus primeiros passos e descubra as ferramentas que vão acompanhar sua jornada.":
    "Conoce la formación, organiza tus primeros pasos y descubre las herramientas que acompañarán tu recorrido.",
  "Bem-vindo!": "¡Bienvenido!",
  "Os Sites": "Los Sitios",
  "Vem por aí": "Lo que viene",
  "Entenda o papel da edição em criativos e VSLs. Aprenda a construir vídeos com intenção, ritmo e foco na mensagem.":
    "Comprende el papel de la edición en creativos y VSL. Aprende a crear videos con intención, ritmo y foco en el mensaje.",
  "O que é DR": "Qué es DR",
  "Para Criativos": "Para Creativos",
  "Zero Custo": "Costo Cero",
  Vendem: "Venden",
  "Para VSL": "Para VSL",
  "Entenda os Sites": "Conoce los Sitios",
  "As ferramentas do seu dia a dia": "Las herramientas de tu día a día",
  "Explore ferramentas de edição, organização, voz e geração de vídeo para ampliar suas possibilidades de criação.":
    "Explora herramientas de edición, organización, voz y generación de video para ampliar tus posibilidades creativas.",
  "Edite com IA": "Edita con IA",
  "Inteligência artificial na prática":
    "Inteligencia artificial en la práctica",
  "Traga a IA para seu processo criativo. Explore geração de vídeo, elementos visuais e novas formas de criar.":
    "Integra la IA en tu proceso creativo. Explora generación de video, elementos visuales y nuevas formas de crear.",
  "Elementos Visuais": "Elementos Visuales",
  "Empreender com IA": "Emprender con IA",
  "Seus Primeiros Clientes": "Tus Primeros Clientes",
  "Do seu trabalho à primeira oportunidade":
    "De tu trabajo a la primera oportunidad",
  "Aprenda a divulgar sua edição, encontrar oportunidades e conversar com clientes com mais segurança.":
    "Aprende a promocionar tu edición, encontrar oportunidades y hablar con clientes con mayor seguridad.",
  "Para Editores": "Para Editores",
  Orgânico: "Orgánico",
  Trabalho: "Trabajo",
  "O Cliente": "El Cliente",
  "Com Eles": "Con Ellos",
  "Cresça como Editor": "Crece como Editor",
  "Construa uma presença profissional": "Construye una presencia profesional",
  "Organize seu portfólio e use o Instagram e a divulgação para tornar seu trabalho mais visível.":
    "Organiza tu portafolio y usa Instagram y la promoción para dar visibilidad a tu trabajo.",
  Portfólio: "Portafolio",
  "Alta Divulgação": "Alta Promoción",
  "Faz Divulgação": "Haz Promoción",
};

const en: Record<string, string> = {
  ...es,
  "Editor Nova Era | Edição, IA e sua próxima fase":
    "Editor Nova Era | Editing, AI and your next chapter",
  "Pular para o conteúdo": "Skip to content",
  "Editor Nova Era — início": "Editor Nova Era — home",
  "Idioma do site": "Site language",
  "Escolha seu perfil": "Choose your profile",
  "Sou Editor": "I'm an editor",
  "Sou Dono de Operação": "I run an operation",
  "Formação completa de editor": "Complete editor training",
  "Edição para donos de operação": "Editing for business owners",
  "De editor iniciante a": "From beginner editor to",
  "Construa sua carreira com": "Build your career with",
  "edição de vídeo.": "video editing.",
  "Edite seus": "Edit your",
  "próprios vídeos.": "own videos.",
  "Tenha o controle da": "Take control of",
  "sua operação.": "your operation.",
  "Quero começar agora": "I want to start now",
  "Conheça as trilhas": "Explore the tracks",
  "Uma formação para buscar sua meta. Resultados variam conforme a aplicação.":
    "Training designed to help you pursue your goal. Results vary according to application.",
  "Direct Response e IA. Dois módulos, um novo nível de autonomia.":
    "Direct Response and AI. Two modules, a new level of autonomy.",
  "Online, no seu ritmo": "Online, at your pace",
  "Assista às aulas e evolua de acordo com a sua rotina.":
    "Watch the lessons and progress on your own schedule.",
  "Acesso imediato": "Immediate access",
  "Comece a aprender após a confirmação do pagamento.":
    "Start learning after payment confirmation.",
  "Edição + inteligência artificial": "Editing + artificial intelligence",
  "Técnica e ferramentas de IA no mesmo processo criativo.":
    "Technique and AI tools in the same creative process.",
  "Do zero ao profissional": "From zero to professional",
  "Da primeira edição à construção da sua carreira.":
    "From your first edit to building your career.",
  "Autonomia para sua operação": "Autonomy for your operation",
  "Edite seus próprios vídeos com mais agilidade.":
    "Edit your own videos more efficiently.",
  "O método Editor Nova Era": "The Editor Nova Era method",
  "Uma jornada que conecta edição, inteligência artificial e a construção do seu negócio.":
    "A journey connecting editing, artificial intelligence and building your business.",
  "Aprenda o essencial para assumir o controle da produção dos seus vídeos.":
    "Learn the essentials to take control of your video production.",
  "Mais que editar. Aprenda a": "More than editing. Learn to",
  "evoluir.": "grow.",
  "Da ideia à edição, com": "From idea to edit, with",
  "autonomia.": "autonomy.",
  TRILHA: "TRACK",
  "Dentro desta trilha": "Inside this track",
  "O que está travando seu próximo passo?":
    "What is holding back your next step?",
  "O desafio": "The challenge",
  "O que você vai desenvolver": "What you will develop",
  "Conhecimento que vira prática": "Knowledge put into practice",
  "Um conjunto de habilidades para acompanhar a nova era da edição.":
    "A set of skills for the new era of editing.",
  "Seu próximo repertório.": "Your next skill set.",
  "Edição de vídeo": "Video editing",
  "Do primeiro corte aos criativos e VSLs.":
    "From the first cut to creatives and VSLs.",
  "Inteligência artificial": "Artificial intelligence",
  "Novas ferramentas para seu processo criativo.":
    "New tools for your creative process.",
  "Ferramentas digitais": "Digital tools",
  "Conheça os sites que apoiam sua produção.":
    "Discover the sites that support your production.",
  "Prospecção de clientes": "Client prospecting",
  "Aprenda a encontrar suas primeiras oportunidades.":
    "Learn how to find your first opportunities.",
  Negociação: "Negotiation",
  "Converse com clientes e apresente seu trabalho.":
    "Talk to clients and present your work.",
  "Presença profissional": "Professional presence",
  "Instagram, portfólio e divulgação.": "Instagram, portfolio and promotion.",
  "Edição para criativos e VSLs.": "Editing for creatives and VSLs.",
  "Vídeos e elementos visuais com IA.": "AI videos and visual elements.",
  Autonomia: "Autonomy",
  "Mais controle sobre sua própria produção.":
    "More control over your own production.",
  "Todos os direitos reservados.": "All rights reserved.",
  "Experiências de quem já começou":
    "Experiences from those who already started",
  "Veja os relatos compartilhados por alunos do Editor Nova Era.":
    "See testimonials shared by Editor Nova Era students.",
  "Da aula para a": "From lessons to",
  "vida real.": "real life.",
  Depoimentos: "Testimonials",
  Relato: "Testimonial",
  "Cada trajetória é única": "Every journey is unique",
  "O próximo passo começa com uma nova habilidade.":
    "Your next step starts with a new skill.",
  "Técnica, ferramentas e prática para transformar a forma como você edita.":
    "Technique, tools and practice to transform the way you edit.",
  "Edição para Direct Response": "Direct Response editing",
  "IA aplicada à criação de vídeos": "AI applied to video creation",
  "Clientes e posicionamento profissional":
    "Clients and professional positioning",
  "Criativos e VSLs para sua operação": "Creatives and VSLs for your operation",
  "Inteligência artificial na edição": "Artificial intelligence in editing",
  "Mais autonomia no processo criativo":
    "More autonomy in the creative process",
  "Relatos individuais. Resultados não representam garantia de desempenho ou faturamento.":
    "Individual testimonials. Results do not guarantee performance or revenue.",
  "Ampliar depoimento": "Enlarge testimonial",
  "Fechar depoimento": "Close testimonial",
  "Depoimento de aluno": "Student testimonial",
  "publicado no Editor Nova Era": "published by Editor Nova Era",
  "Depoimento ampliado de aluno": "Enlarged student testimonial",
  Depoimento: "Testimonial",
  "Depoimento anterior": "Previous testimonial",
  "Próximo depoimento": "Next testimonial",
  "O que você vai aprender": "What you will learn",
  "Técnica, ferramentas e prática. Conheça o conteúdo que faz parte da sua próxima fase.":
    "Technique, tools and practice. Explore the content in your next chapter.",
  "Sua jornada dentro do": "Your journey inside",
  "Trilhas do curso": "Course tracks",
  Aula: "Lesson",
  "Aula anterior": "Previous lesson",
  "Próxima aula": "Next lesson",
  "Seu acesso inclui Editor DR e Edite com IA. As outras quatro trilhas fazem parte da formação completa.":
    "Your access includes Editor DR and Edit with AI. The other four tracks are part of the complete training.",
  "A sua próxima fase começa aqui": "Your next chapter starts here",
  "6 TRILHAS · FORMAÇÃO COMPLETA": "6 TRACKS · COMPLETE TRAINING",
  "2 TRILHAS · DR + IA": "2 TRACKS · DR + AI",
  "Comece a aprender por": "Start learning for",
  ou: "or",
  "à vista": "upfront",
  "Garantir minha vaga": "Secure my spot",
  "Garantia de 7 dias": "7-day guarantee",
  "Acesso após confirmação do pagamento.": "Access after payment confirmation.",
  "Confira as condições de parcelamento no checkout.":
    "Check installment terms at checkout.",
  "EDIÇÃO · IA · NOVAS POSSIBILIDADES": "EDITING · AI · NEW POSSIBILITIES",
  "Pronto para construir sua": "Ready to build your",
  "carreira como editor?": "career as an editor?",
  "Pronto para ter autonomia sobre": "Ready to take control of",
  "suas edições?": "your edits?",
  "O caminho do zero ao profissional começa com o seu próximo passo.":
    "The path from zero to professional starts with your next step.",
  "Aprenda Direct Response e IA para transformar seu processo de produção.":
    "Learn Direct Response and AI to transform your production process.",
  "7 dias de garantia": "7-day guarantee",
  "Acesso após confirmação": "Access after confirmation",
  "Dúvidas frequentes": "Frequently asked questions",
  "Antes do seu": "Before your",
  "primeiro passo.": "first step.",
  "Sou iniciante e nunca tive cliente. Consigo acompanhar?":
    "I'm a beginner and have never had a client. Can I follow along?",
  "Não quero virar editor profissional. Faz sentido pra mim?":
    "I don't want to become a professional editor. Is this for me?",
  "Sim. O curso começa pela base e avança até a busca e negociação com os primeiros clientes. Você pode acompanhar as aulas no seu ritmo.":
    "Yes. The course starts with the basics and progresses to finding and negotiating with your first clients. You can follow the lessons at your own pace.",
  "Sim. O acesso para donos de operação reúne Direct Response e IA: o essencial para editar seus próprios vídeos, sem a grade completa de formação.":
    "Yes. Access for business owners combines Direct Response and AI: everything you need to edit your own videos without the complete training curriculum.",
  "O curso é só sobre IA?": "Is the course only about AI?",
  "Não. A IA faz parte da jornada. A formação também aborda edição, tráfego, negociação, Instagram e portfólio.":
    "No. AI is part of the journey. The training also covers editing, traffic, negotiation, Instagram and portfolios.",
  "Não. Além das ferramentas de IA, seu acesso inclui edição para Direct Response, criativos e VSLs.":
    "No. In addition to AI tools, your access includes Direct Response editing, creatives and VSLs.",
  "Realmente dá para faturar R$10 mil por mês editando?":
    "Can you really make R$10,000 per month editing?",
  "Esse é o objetivo apresentado pela formação, e não uma garantia de renda. Os resultados dependem da sua dedicação, experiência, prospecção e das condições do mercado.":
    "That is the goal presented by the training, not an income guarantee. Results depend on your dedication, experience, prospecting and market conditions.",
  "Quais trilhas estão incluídas no meu acesso?":
    "Which tracks are included in my access?",
  "A formação completa inclui Comece Aqui, Editor DR, Entenda os Sites, Edite com IA, Seus Primeiros Clientes e Cresça como Editor.":
    "The complete training includes Start Here, Editor DR, Understand the Sites, Edit with AI, Your First Clients and Grow as an Editor.",
  "O acesso para operação inclui as trilhas Editor DR e Edite com IA.":
    "Operation access includes the Editor DR and Edit with AI tracks.",
  "Tenho garantia?": "Is there a guarantee?",
  "Sim. A oferta inclui garantia de 7 dias. Consulte as condições e o canal de atendimento no checkout da Hubla.":
    "Yes. The offer includes a 7-day guarantee. Check the terms and support channel at Hubla checkout.",
  "Acesso Direct Response + IA": "Direct Response + AI access",
  "Edição, IA, tráfego para conseguir clientes, negociação e um Instagram que vende seu trabalho. O caminho completo, do zero ao profissional.":
    "Editing, AI, traffic to find clients, negotiation and an Instagram presence that sells your work. The complete path from zero to professional.",
  "Acesso aos módulos de Edição para Direct Response e Edição com IA. O essencial para editar seus próprios vídeos com agilidade e qualidade profissional.":
    "Access to Direct Response Editing and AI Editing modules. Everything you need to edit your own videos efficiently and professionally.",
  "Acesso a todas as 6 trilhas do curso": "Access to all 6 course tracks",
  "Edição para Direct Response e criação com IA":
    "Direct Response editing and AI creation",
  "Tráfego para conseguir seus primeiros clientes":
    "Traffic to find your first clients",
  "Como negociar e conversar com clientes":
    "How to negotiate and talk to clients",
  "Instagram e portfólio para apresentar seu trabalho":
    "Instagram and portfolio to showcase your work",
  "Atualizações das ferramentas de IA": "AI tool updates",
  "Acesso à trilha Editor DR (Direct Response)":
    "Access to the Editor DR track (Direct Response)",
  "Acesso à trilha Edite com IA": "Access to the Edit with AI track",
  "Criativos e vídeos para sua operação":
    "Creatives and videos for your operation",
  "Editar bem nunca foi o suficiente pra viver de edição.":
    "Editing well has never been enough to make a living from editing.",
  "O problema nunca foi dinheiro. Foi controle.":
    "The problem was never money. It was control.",
  "Sabe editar, mas não sabe como conseguir o primeiro cliente":
    "You can edit, but don't know how to find your first client",
  "Depende só de indicação — e isso trava o crescimento":
    "You rely only on referrals, which limits growth",
  "Cobra pouco porque tem medo de espantar o cliente":
    "You charge too little because you're afraid of losing the client",
  "Falta a parte de negócio: tráfego, conversa e portfólio":
    "The business side is missing: traffic, conversations and portfolio",
  "Aprenda a buscar seus primeiros clientes":
    "Learn how to find your first clients",
  "Combine tráfego e presença online": "Combine traffic and online presence",
  "Aprenda a negociar e apresentar seu valor":
    "Learn to negotiate and present your value",
  "Desenvolva técnica, IA e visão de negócio":
    "Develop technique, AI skills and business vision",
  "O editor sumiu no meio do lançamento":
    "The editor disappeared during the launch",
  "Um corte virou refação três vezes": "One cut had to be redone three times",
  "Perdeu o timing esperando a edição ficar pronta":
    "You missed the timing while waiting for the edit",
  "Depende de gente demais para colocar um vídeo no ar":
    "You depend on too many people to publish a video",
  "Tenha autonomia sobre suas edições": "Take control of your edits",
  "Aprenda a executar seus próprios ajustes":
    "Learn to make your own adjustments",
  "Edite com mais agilidade usando IA": "Edit more efficiently with AI",
  "Domine o essencial de Direct Response":
    "Master the essentials of Direct Response",
  "Comece Aqui": "Start Here",
  "Toda a base para começar": "Everything you need to get started",
  "Conheça a formação, organize seus primeiros passos e descubra as ferramentas que vão acompanhar sua jornada.":
    "Explore the training, organize your first steps and discover the tools that will support your journey.",
  "Bem-vindo!": "Welcome!",
  "Os Sites": "The Sites",
  "Vem por aí": "Coming Next",
  "Entenda o papel da edição em criativos e VSLs. Aprenda a construir vídeos com intenção, ritmo e foco na mensagem.":
    "Understand the role of editing in creatives and VSLs. Learn to build videos with intention, rhythm and focus on the message.",
  "O que é DR": "What is DR",
  "Para Criativos": "For Creatives",
  "Zero Custo": "Zero Cost",
  Vendem: "That Sell",
  "Entenda os Sites": "Understand the Sites",
  "As ferramentas do seu dia a dia": "Your everyday tools",
  "Explore ferramentas de edição, organização, voz e geração de vídeo para ampliar suas possibilidades de criação.":
    "Explore editing, organization, voice and video generation tools to expand your creative possibilities.",
  "Edite com IA": "Edit with AI",
  "Inteligência artificial na prática": "Artificial intelligence in practice",
  "Traga a IA para seu processo criativo. Explore geração de vídeo, elementos visuais e novas formas de criar.":
    "Bring AI into your creative process. Explore video generation, visual elements and new ways to create.",
  "Elementos Visuais": "Visual Elements",
  "Empreender com IA": "Build with AI",
  "Seus Primeiros Clientes": "Your First Clients",
  "Do seu trabalho à primeira oportunidade":
    "From your work to your first opportunity",
  "Aprenda a divulgar sua edição, encontrar oportunidades e conversar com clientes com mais segurança.":
    "Learn to promote your editing, find opportunities and talk to clients with confidence.",
  Orgânico: "Organic",
  Trabalho: "Work",
  "O Cliente": "The Client",
  "Com Eles": "With Them",
  "Cresça como Editor": "Grow as an Editor",
  "Construa uma presença profissional": "Build a professional presence",
  "Organize seu portfólio e use o Instagram e a divulgação para tornar seu trabalho mais visível.":
    "Organize your portfolio and use Instagram and promotion to make your work more visible.",
  Portfólio: "Portfolio",
  "Alta Divulgação": "High Promotion",
  "Faz Divulgação": "Promote Your Work",
};

const dictionaries: Record<Exclude<Language, "pt">, Record<string, string>> = {
  es,
  en,
};

type I18nValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

function savedLanguage(): Language {
  const saved = window.localStorage.getItem("editor-nova-era-language");
  return saved === "es" || saved === "en" ? saved : "pt";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(savedLanguage);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
    document.title =
      language === "pt"
        ? "Editor Nova Era | Edição, IA e sua próxima fase"
        : dictionaries[language][
            "Editor Nova Era | Edição, IA e sua próxima fase"
          ];
    window.localStorage.setItem("editor-nova-era-language", language);
  }, [language]);

  const t = (text: string) =>
    language === "pt" ? text : (dictionaries[language][text] ?? text);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside I18nProvider");
  return value;
}

export const languageOptions: Array<{ value: Language; label: string }> = [
  { value: "pt", label: "Português" },
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
];
