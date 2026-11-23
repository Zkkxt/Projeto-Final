# Projeto-Final
E-commerce front-end da loja ArmaZenlar (cama, mesa, banho e presentes), com busca inteligente, filtro por categorias, carrinho com desconto no PIX e finalização do pedido pelo WhatsApp. Projeto final de faculdade em HTML, CSS e JavaScript puro.

# 🏠 ArmaZenlar — Sua casa, seu mundo!

Site de e-commerce (front-end) para a loja **ArmaZenlar**, especializada em **cama, mesa, banho e presentes**. O projeto simula uma loja virtual completa: catálogo de produtos, busca inteligente, filtro por categorias, carrinho de compras e finalização do pedido direto pelo WhatsApp da loja.

> Projeto final de curso desenvolvido para o curso de informática para Negócios na FATEC RIO PRETO.

---

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Como executar](#-como-executar)
- [Como funciona](#-como-funciona)
- [Como personalizar](#-como-personalizar)
- [Responsividade e acessibilidade](#-responsividade-e-acessibilidade)
- [Melhorias futuras](#-melhorias-futuras)
- [Autor(es)](#-autores)

---

## 📖 Sobre o projeto

A ArmaZenlar é uma loja física localizada em São Paulo (Vila Nova Bonsucesso). Este projeto leva a loja para o ambiente digital, oferecendo uma vitrine online simples, rápida e fácil de manter, sem depender de frameworks ou back-end.

O objetivo é aplicar na prática conceitos de **HTML semântico, CSS moderno e JavaScript puro (Vanilla JS)**, incluindo manipulação do DOM, roteamento por hash, manipulação de arrays e integração com serviços externos (WhatsApp, Instagram e Google Maps).

---

## ✨ Funcionalidades

- **Navegação em página única (SPA simples):** as telas (Início, Categorias, Times, Resultados da busca e Sobre Nós) são trocadas via `#hash` na URL, sem recarregar a página.
- **Catálogo de produtos:** 32 produtos organizados em três grupos — `geral` (vitrine "Itens"), `time` (produtos de times de futebol) e `catalogo` (aparecem nas categorias e na busca).
- **Busca inteligente:**
  - ignora acentos e maiúsculas/minúsculas;
  - ignora palavras comuns ("de", "da", "o", "a"...);
  - procura no nome, nas tags e no nome das categorias do produto;
  - mostra primeiro os itens que contêm **todas** as palavras e, se não houver, os que contêm **alguma** (ordenados por relevância).
- **Filtro por categorias:** 11 categorias com campo de pesquisa e "chips" clicáveis.
- **Carrinho de compras:**
  - adicionar, aumentar/diminuir quantidade e remover itens;
  - contador de itens no ícone do carrinho;
  - total da compra e **valor com 5% de desconto no PIX**.
- **Finalização via WhatsApp:** gera automaticamente uma mensagem com o pedido (itens, quantidades, total e valor no PIX) e abre a conversa com a loja.
- **Menu lateral e carrinho** em painéis deslizantes com fundo escurecido.
- **Cabeçalho fixo** (sticky) com busca sempre disponível ao rolar a página.
- **Página "Sobre Nós"** com links para Instagram, localização (Google Maps) e WhatsApp.
- **Botão flutuante do WhatsApp** presente em todas as telas.
- **Rodapé** com horários de funcionamento e formas de pagamento.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica das páginas |
| **CSS3** | Layout com Flexbox e Grid, variáveis CSS, animações e media queries |
| **JavaScript (ES6+)** | Lógica da loja, busca, carrinho e roteamento por hash |
| **Google Fonts** | Fontes *DM Sans* e *League Spartan* |
| **API do WhatsApp (`wa.me`)** | Envio do pedido para a loja |

Não há dependências, bibliotecas, frameworks nem etapa de build.

---

## 📂 Estrutura de pastas

```
armazenlar/
├── index.html      # Estrutura e conteúdo de todas as "páginas"
├── style.css       # Estilos, cores e responsividade
├── script.js       # Produtos, categorias, busca, carrinho e navegação
├── img/            # Logos, banners e fotos dos produtos
│   ├── logo.png
│   ├── logo-mini.png
│   ├── loja.png
│   ├── cozinha.png, banheiro.png, cama.png, presente.png, time.png
│   └── (fotos dos produtos .webp / .jpeg)
└── README.md
```

> ⚠️ A pasta `img/` precisa estar no mesmo nível do `index.html`, com os nomes de arquivo usados em `script.js` e `index.html`.

---

## 🚀 Como executar

Não é necessário instalar nada.

**Opção 1 — Direto no navegador**
1. Baixe ou clone o projeto.
2. Dê dois cliques no arquivo `index.html`.

**Opção 2 — Com servidor local (recomendado)**

Com a extensão **Live Server** do VS Code:
1. Abra a pasta do projeto no VS Code.
2. Clique com o botão direito em `index.html` → **Open with Live Server**.

Ou, com Python instalado:
```bash
python -m http.server 5500
```
e acesse `http://localhost:5500`.

---

## ⚙️ Como funciona

### Navegação por hash

O script lê `location.hash` e exibe apenas a `div.pagina` correspondente (classe `ativa`).

| Endereço | Tela exibida |
|---|---|
| `#` ou vazio | Início |
| `#itens`, `#ambientes`, `#quem-somos` | Início (rola até a seção) |
| `#categorias` | Lista de categorias |
| `#categorias/mesa` | Categoria "Mesa" selecionada |
| `#times` | Produtos de times |
| `#busca` | Resultados da busca |
| `#sobre` | Sobre Nós |

### Modelo de produto

Cada produto é criado pela função auxiliar `P(...)` em `script.js`:

```js
P(id, nome, preco, grupo, categorias, emoji, tags, imagem)

P(5, "Caneca São Paulo", 34.90, "time", ["times", "mesa"], "☕", "caneca tricolor spfc", "img/caneca-sao-paulo.webp")
```

- **grupo:** `"geral"` (vitrine Itens), `"time"` (página Times) ou `"catalogo"` (somente categorias e busca).
- **categorias:** lista com os `id` definidos em `CATEGORIAS`.
- **tags:** palavras extras que a busca também reconhece.
- **imagem:** opcional; sem ela, o emoji é exibido no lugar.

### Carrinho

O carrinho é um array em memória (`[{ id, qtd }]`). Ao finalizar, a mensagem do pedido é montada e enviada com `encodeURIComponent` para `https://wa.me/<número>?text=...`.

> ℹ️ O carrinho **não é salvo** ao recarregar a página (não usa `localStorage`).

---

## 🎨 Como personalizar

| Quero mudar... | Onde |
|---|---|
| Número de WhatsApp do pedido | constante `WHATSAPP` no início de `script.js` |
| Produtos | array `PRODUTOS` em `script.js` |
| Categorias | array `CATEGORIAS` em `script.js` |
| Cores do site | variáveis em `:root` no início de `style.css` |
| Desconto do PIX | multiplicador `0.95` em `script.js` e texto no `index.html` |
| Textos, horários e contatos | `index.html` |

---

## 📱 Responsividade e acessibilidade

- Layout **mobile-first** com ajustes para telas até 720px (grades de 2 colunas, busca em linha própria, menu em painel lateral).
- Grades fluidas com `auto-fit` / `auto-fill`.
- Uso de `aria-label` em botões com ícones e `alt` em imagens.
- Estilo de foco visível (`:focus-visible`) para navegação por teclado.
- Respeito à preferência `prefers-reduced-motion` (desativa animações).
- Cores com contraste adequado (ex.: amarelo escuro para texto sobre fundo branco).

---

## 🔮 Melhorias futuras

- Persistir o carrinho com `localStorage`.
- Páginas individuais de produto com descrição e galeria.
- Opções de frete e cálculo por CEP.
- Cadastro/login de clientes (hoje o link "Entre ou Cadastre-se" é ilustrativo).
- Integração com gateway de pagamento e back-end para gerenciar estoque.
- Painel administrativo para cadastro de produtos.

---

## 👤 Autor(es)

- João Pedro Pereira Gonçalves — jp8467270@gmail.com
- Luiz Eduardo De Souza Junior - luizeduardosousajunior@gmail.com
- Julio Cesar Zampolo - 
- Orientador(a): Lucimar Sasso / Lucimeire 

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos. Logos, imagens e informações da loja pertencem à **ArmaZenlar**.
