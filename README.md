# Editor Nova Era

Landing page em React, TypeScript, Vite e Tailwind CSS. Identidade visual baseada na referência Rarity e conteúdo adaptado do Editor Nova Era.

## Desenvolvimento

```sh
npm ci
npm run dev
```

`npm run build` verifica o TypeScript e gera os arquivos estáticos em `dist/client`. `npm run preview` permite conferir o build. `npm run test:sites` verifica o empacotamento opcional para Sites.

## Publicação na Vercel

O arquivo `vercel.json` define o preset Vite, o comando `npm run build` e a pasta de saída `dist/client`.

1. Use como Root Directory a pasta que contém `package.json` e `vercel.json`.
2. Inclua `vercel.json` no commit enviado ao repositório conectado à Vercel.
3. Publique esse novo commit. Reimplantar um commit anterior não inclui o arquivo corrigido.

Se a configuração for feita pelo painel, use **Framework Preset: Vite**, **Build Command: npm run build** e **Output Directory: dist/client**.

Não publique a pasta `dist` como raiz: o HTML fica dentro de `client`, enquanto os caminhos de assets são relativos à raiz do site. Isso provoca 404 na página inicial e falha de assets em `/client/`.

## Conteúdo e integrações

- `src/content.ts`: ofertas, preços, checkouts, trilhas e imagens.
- `src/CourseGallery.tsx`: navegação das trilhas e aulas, incluindo teclado.
- `src/Testimonials.tsx`: carrossel e ampliação de depoimentos.
- `src/Offer.tsx`: oferta e chamada final.
- `src/Faq.tsx`: dúvidas para cada público.
- `src/styles.css`: fontes locais, identidade visual e responsividade.
- `public/assets`: imagens do curso e fontes utilizadas.

O checkout externo é da Hubla. A página não recebe dados de pagamento nem libera o acesso às aulas; essas funções continuam na plataforma. A seleção de público altera somente a apresentação comercial e o destino da compra.

Somente parâmetros UTM conhecidos são repassados aos checkouts fixos. Nenhum pixel, analytics, formulário de coleta, credencial ou secret foi adicionado.

Valores e parcelamentos foram conferidos nos checkouts em 14/09/2026. A meta de faturamento é apresentada como objetivo, não como garantia. A anotação original “comunidade e suporte confirmar” foi omitida por não representar um benefício confirmado.

## Validação

Veja `design-qa.md` e as capturas em `evidence/`. Verificação visual em 390×844, 1366×768 e 1920×1080, navegação por teclado, carrosséis, modal, FAQ e destinos dos dois checkouts.
