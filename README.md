# seusitemelhor.com.br

Site profissional moderno com design premium, desenvolvido com foco em performance, acessibilidade e SEO.

## 🚀 Features

- **Design System Premium** - Tokens de design inspirados em Apple, Stripe, Linear
- **Dark/Light Mode** - Suporte completo a temas com persistência em localStorage
- **Mobile First** - Navegação mobile otimizada com menu responsivo
- **Animações Performáticas** - Scroll-driven animations com fallback para IntersectionObserver
- **Acessibilidade** - WCAG 2.1 AA compliant, navegação por teclado, ARIA labels
- **SEO Otimizado** - Meta tags, sitemap, robots.txt configurados
- **Performance** - CSS crítico inline, loading diferido de assets

## 📁 Estrutura do Projeto

```
/workspace
├── src/                          # Código fonte organizado
│   ├── components/               # Componentes JavaScript modulares
│   │   ├── header.js            # Header com navegação
│   │   ├── theme.js             # Gerenciador de tema dark/light
│   │   ├── mobileNav.js         # Navegação mobile
│   │   ├── scrollReveal.js      # Animações de scroll
│   │   ├── counter.js           # Animação de contadores
│   │   └── smoothScroll.js      # Scroll suave para âncoras
│   ├── scripts/
│   │   ├── app.js               # Entry point da aplicação
│   │   └── main.js              # Bundle legado (compatibilidade)
│   ├── styles/
│   │   ├── base.css             # Reset e fundamentos
│   │   └── tokens.css           # Design tokens consolidados
│   └── assets/                   # Assets estáticos
├── public/                       # Build output
├── index.html                    # Página inicial
├── portfolio.html                # Página de portfólio
├── sobre.html                    # Sobre a empresa
├── contato.html                  # Página de contato
├── demo-advocacia.html          # Demo caso de uso
├── style.css                     # Styles consolidados (legado)
├── premium.css                   # Premium styles (legado)
├── premium-refinement.css        # Refinamentos (legado)
├── base.css                      # Base styles (legado)
├── app.js                        # JavaScript principal (legado)
├── robots.txt                    # Configuração de crawlers
└── sitemap.xml                   # Sitemap para SEO
```

## 🛠️ Uso dos Componentes

### Importação Modular (Recomendado)

```javascript
import { ThemeManager } from './src/components/theme.js';
import { MobileNav } from './src/components/mobileNav.js';
import { ScrollReveal } from './src/components/scrollReveal.js';
import { CounterAnimation } from './src/components/counter.js';
import { SmoothScroll } from './src/components/smoothScroll.js';

// Ou usar o app.js que já importa tudo
import App from './src/scripts/app.js';
```

### Uso via CDN (Sem build)

O projeto funciona diretamente no navegador sem necessidade de build:

```html
<script type="module" src="./src/scripts/app.js"></script>
```

## 🎨 Design Tokens

Os tokens de design estão consolidados em `src/styles/tokens.css`:

- **Cores** - Paleta primária (navy), accent (gold), semantic colors
- **Tipografia** - Scale responsiva com clamp()
- **Espaçamento** - Base de 4px (0.25rem)
- **Sombras** - Sistema de elevação consistente
- **Transições** - Curvas bezier otimizadas

## 📱 Componentes

### ThemeManager
Gerencia tema dark/light com:
- Detecção de preferência do sistema
- Persistência em localStorage
- Ícones dinâmicos

### MobileNav
Menu mobile com:
- Toggle hamburger/X
- Fechamento ao clicar fora
- Suporte a tecla Escape
- ARIA attributes

### ScrollReveal
Animações de entrada com:
- Detecção de suporte a scroll-timeline
- Fallback com IntersectionObserver
- Configuração via options

### CounterAnimation
Animadores numéricos com:
- Ease-out cubic
- Prefix/suffix support
- Trigger via IntersectionObserver

### SmoothScroll
Scroll suave para âncoras:
- Respeita prefers-reduced-motion
- Comportamento configurável

## 🔧 Desenvolvimento

### Adicionar Nova Página

1. Copie um template existente (ex: `sobre.html`)
2. Atualize meta tags (title, description)
3. Use os componentes HTML padrão (header, nav)
4. Adicione conteúdo nas sections

### Adicionar Novo Componente

1. Crie arquivo em `src/components/nomeComponente.js`
2. Exporte classe ou funções
3. Importe em `src/scripts/app.js`
4. Inicialize no método `init()`

### Estilização

1. Use tokens existentes em `tokens.css`
2. Para novos tokens, adicione em `:root`
3. Mantenha compatibilidade dark mode

## 📊 Performance

- **CSS**: Critical CSS inline + loading diferido
- **JS**: Modules ES6, tree-shaking friendly
- **Imagens**: Lazy loading nativo
- **Fontes**: Preconnect + display swap

## ♿ Acessibilidade

- Navegação por teclado completa
- Focus indicators visíveis
- ARIA labels e roles
- Contraste de cores WCAG AA
- Reduced motion support

## 🌐 SEO

- Meta tags Open Graph
- Sitemap XML
- Robots.txt configurado
- Canonical URLs
- Schema.org ready

## 📄 Licença

MIT License - verifique arquivos individuais para atribuições.

---

**Criado com** ❤️ **por Perplexity Computer**
