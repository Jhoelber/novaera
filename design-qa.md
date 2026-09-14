# Design QA — Editor Nova Era

## Escopo

Referência visual: https://ecom.rarityagency.io/rarityaudit

Fonte do conteúdo: https://editornovaera.com/?page_id=120

Implementação: http://127.0.0.1:4173/; build de produção validado em http://127.0.0.1:4174/.

O pedido combina a identidade visual da Rarity com o conteúdo do Editor Nova Era. As imagens de anúncios, tabelas de desempenho e agendamento de auditoria da agência foram substituídos por aulas, depoimentos e os checkouts reais do curso. Seis trilhas substituem as quatro fases da agência. Oferta e FAQ foram preservados do produto original.

## Evidência visual

- Hero desktop: `evidence/source-desktop.png` e `evidence/app-desktop.png`, apresentados juntos na comparação. Viewport CSS de 1366×768; capturas do conteúdo com aproximadamente 1358×764 e 1351×760 pixels. Diferença pequena de recorte de barras do navegador; sem redimensionamento de imagens.
- Hero mobile: `evidence/source-mobile.png` e `evidence/app-mobile.png`, apresentados juntos. Viewport CSS 390×844; capturas com aproximadamente 382×827 e 375×812 pixels. Escalas do provedor de captura e barras diferem ligeiramente; a comparação considera os mesmos elementos, sem afirmar identidade pixel a pixel.
- Desktop amplo: `evidence/app-desktop-1920.png`, viewport CSS 1920×1080; overflow horizontal ausente.
- Comparação focada das trilhas: `evidence/source-journey-desktop.png` e `evidence/app-journey-desktop-final.png`, apresentados juntos em viewport CSS 1366×768. Posição vertical de rolagem diferente, mas cartões, fontes, paddings e hierarquia legíveis.
- Estados adicionais: `evidence/app-gallery-mobile.png`, `evidence/app-gallery-desktop.png`, `evidence/app-operation-mobile.png`, `evidence/app-faq-mobile.png` e `evidence/app-comparison-desktop.png`.
- Build de produção: `evidence/app-offer-production.png` contém a primeira dobra do build (o fragmento na navegação inicial não posicionou a captura na oferta).

## Superfícies obrigatórias

1. **Fontes e tipografia:** Plus Jakarta Sans e Playfair Display itálica copiadas localmente da referência; pesos e hierarquia preservados. Quebras de linha adaptadas aos textos em português.
2. **Espaçamento e layout:** hero centralizado, duas ações, quatro benefícios, carrosséis, trilhas em duas colunas e habilidades em três colunas no desktop; uma coluna no mobile. Margens laterais preservadas. Nenhum overflow horizontal nos tamanhos verificados.
3. **Cores e tokens:** fundo azul-marinho, superfícies azul-escuro, bordas discretas, verde-água e botão rosa reproduzidos. Botões e estados selecionados possuem foco visível.
4. **Imagens:** 32 assets reais do Editor Nova Era salvos localmente, sem hotlinks. Aulas usam tratamento de carrossel da referência. Depoimentos usam `object-fit: contain` para manter a leitura e ampliam em diálogo. Ícones são da biblioteca Lucide, consistente com o estilo da referência.
5. **Conteúdo:** preços, trilhas, duas ofertas e destinos reais preservados. A anotação de suporte a confirmar foi omitida; objetivo financeiro não é descrito como garantia. Nenhum depoimento, número de aluno ou resultado da agência foi atribuído ao curso.

## Histórico de ajustes

- [P2 corrigido] Cabeçalho: referência permanece no topo durante a rolagem, mas a primeira implementação usava `position: relative`. Corrigido para `sticky; top: 0`. Captura final das trilhas e leitura do DOM confirmaram cabeçalho em y=0.
- [P2 corrigido] Navegação de trilhas: adicionadas setas esquerda/direita, Home/End e `tabIndex` conforme a seleção. Teste com ArrowRight moveu seleção e foco de Comece Aqui para Editor DR.
- Rótulo do próximo item corrigido para “Próxima aula”.

## Interações verificadas

- Alternar Editor/Operação atualiza título, trilhas, oferta e os três links de checkout.
- Formação completa: 6 trilhas e 12x R$25,41; operação: somente Editor DR e Edite com IA, 12x R$10,17.
- Os dois botões abriram o checkout Hubla correto; os valores parcelados foram confirmados visualmente. Nenhum dado foi enviado ou pagamento realizado.
- Navegação para trilhas, seleção de categoria, avanço de aula, avanço de depoimento e ampliação de imagem.
- Diálogo cabe em 390px, bloqueia foco fora de si e fecha com Escape.
- FAQ abre o conteúdo correspondente.
- Build estático renderizado no navegador, CSS/JS na raiz de assets com HTTP 200 e nenhuma imagem carregada quebrada.
- Sem erros locais observados no console. A navegação externa pela Hubla registrou erros próprios de hidratação e iframe, separados da aplicação local.

## Limites e publicação

Validação visual realizada no navegador Chromium disponível, nos viewports informados; não substitui teste em dispositivos físicos. Nenhuma transação real foi executada. Capturas de página inteira em 1920px excederam a capacidade de captura; a revisão usou capturas por seção.

O deploy existente na Vercel retornava 404 em `/`, enquanto `/client/` expunha o HTML. A correção local `vercel.json` define `outputDirectory: dist/client`. Build e assets locais passaram. A validação do novo deploy público depende de publicar o commit que contém esse arquivo.

## Checklist final

- [x] TypeScript e build de produção aprovados.
- [x] Quatro testes de empacotamento aprovados.
- [x] Fluxos centrais e responsividade conferidos.
- [x] Cabeçalho sticky corrigido e recapturado.
- [x] Fontes, cores, layout e conteúdo comparados com a referência.
- [x] Configuração de saída da Vercel corrigida localmente.

Sem pendências P0/P1/P2 na implementação visual local. Publicação da correção na Vercel ainda pendente.

final result: passed

## Correção de arraste em telas de toque

- Causa: o `lostpointercapture` da imagem, emitido ao transferir a captura implícita do toque para o carrossel, propagava até o contêiner e cancelava o gesto antes de `pointerup`.
- Correção: cancelar somente quando o próprio contêiner perde a captura do ponteiro ativo. Eventos de outros ponteiros também não interrompem o gesto em andamento.
- A lógica compartilhada por aulas e depoimentos foi isolada em `src/swipeGesture.ts` para testar a sequência de eventos sem dependências adicionais.
- Seis testes de regressão aprovados: transferência da captura com avanço e retorno, rolagem vertical/toque curto, cancelamento nativo, perda real da captura e ponteiros secundários. O arraste também bloqueia o clique que abriria indevidamente o depoimento.
- Dez testes totais aprovados, incluindo os quatro de empacotamento. TypeScript e build de produção aprovados.
- Navegador em largura mobile: aulas Os Sites → Vem por aí → Os Sites e depoimento 1 → 2 confirmados por arraste com mouse. A sequência de captura do toque foi validada por teste automatizado; não foi testada em aparelho físico.
- Moldura preta dos depoimentos removida; no primeiro print, recorte visual elimina a borda embutida na imagem sem alterar seu texto.
