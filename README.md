# AquaImperial 🐬🌊

Projeto desenvolvido como parte da avaliação da disciplina **CAW** (Construção de Aplicações Web) do **2º período** do curso de **Análise e Desenvolvimento de Sistemas (ADS)**.

O **AquaImperial** é uma interface web (landing page + e-commerce) para um parque temático e zoológico marinho fictício. O objetivo central do projeto foi aplicar, na prática, os fundamentos e as melhores práticas de front-end para criar uma experiência de usuário (UX) atraente, moderna, responsiva e interativa.

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estruturação e semântica avançada (uso de tags como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- **CSS3:** Flexbox, CSS Grid, Variáveis (Custom Properties), Media Queries, Animações complexas (`@keyframes`) e efeito *Glassmorphism* (backdrop-filter).
- **JavaScript (Vanilla):** Manipulação de DOM, Event Listeners, manipulação de arrays/objetos, `Intersection Observer` (para animações on-scroll) e `LocalStorage`.

## ✨ Funcionalidades e Destaques

*   **Design Premium (Glassmorphism):** Utilização de painéis translúcidos e gradientes que remetem ao fundo do mar, proporcionando um visual sofisticado.
*   **Design System:** CSS estruturado com base em variáveis (`global.css`) para garantir consistência visual e facilitar a manutenção.
*   **Responsividade Total:** Menu "hamburger" e grids adaptáveis para garantir o funcionamento perfeito em Desktop, Tablets e Smartphones.
*   **Carrinho de Compras Persistente (E-commerce):** Na página de "Produtos", é possível adicionar e remover ingressos e pacotes do carrinho. O estado do carrinho é salvo usando `LocalStorage`, garantindo que os dados não sejam perdidos ao recarregar ou mudar de página.
*   **Notificações Elegantes (Toasts):** Substituição dos bloqueantes `alert()` nativos por componentes *Toast* personalizados e não-intrusivos, criados com JS e CSS.
*   **Animações e Micro-interações:**
    *   Efeito de *Scroll Reveal* (elementos aparecem suavemente ao rolar a página).
    *   Animação de bolhas subindo (partículas CSS) na Home.
    *   Contadores numéricos animados dinamicamente (seção de estatísticas).
    *   Carousel de depoimentos com scroll infinito (`animation`).
*   **Acessibilidade (a11y) & SEO Técnico:**
    *   Uso extensivo de atributos `aria-*` (como `aria-expanded` no FAQ e navegação, `aria-live` no carrinho).
    *   Feedback claro de foco teclado via `:focus-visible`.
    *   Respeito à preferência do usuário por `prefers-reduced-motion` (desativa animações se configurado no OS).
    *   *Schema.org (JSON-LD)* implementado na página de FAQ para otimização em motores de busca (Rich Snippets).
*   **Performance:** Imagens não-críticas carregadas com `loading="lazy"` e pré-carregamento inteligente de fontes do Google.

## 📁 Estrutura de Diretórios

O projeto segue uma arquitetura baseada em features/assets para separar lógica, estilo e views:

```text
av2-caw-diegoRosa Da Silva/
├── assets/
│   ├── css/          # Estilos modulares (reset, global, pages)
│   ├── img/          # Imagens otimizadas, ícones (SVG) e vídeos
│   └── js/           # Scripts isolados por contexto de página e lógicas globais
├── pages/
│   ├── perguntas.html # Página de FAQ com Accordion animado e formulário
│   └── produtos.html  # Loja virtual com Sidebar, Grid de Produtos e Carrinho
└── index.html        # Landing Page principal
```

## 🛠️ Como Executar o Projeto

Como o projeto utiliza apenas tecnologias front-end estáticas (HTML, CSS e JS), não há necessidade de instalação de dependências ou *build steps*.

1.  Clone o repositório ou extraia a pasta do projeto.
2.  Abra o arquivo `index.html` em seu navegador.
    *   *Recomendação:* Para a melhor experiência (especialmente durante o desenvolvimento), utilize a extensão **Live Server** no VS Code.

## 👨‍💻 Autor

**Diego Rosa Da Silva**
*   **Curso:** Análise e Desenvolvimento de Sistemas (ADS) - 2º Período
*   **Disciplina:** Construção de Aplicações Web (CAW)

---
*Projeto construído para fins acadêmicos.*
