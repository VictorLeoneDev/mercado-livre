# 📚 Documentação de Estilos CSS

## Estrutura de Estilos

O projeto utiliza **Tailwind CSS v4** com estilos customizados organizados de forma modular.

---

## 📁 Arquivos CSS

### `input.css`
- **Função**: Arquivo de entrada que importa os estilos
- **Conteúdo**: Importa `styles.css` e outras dependências
- **Localização**: `src/css/input.css`

### `styles.css`
- **Função**: Arquivo principal com todos os estilos customizados
- **Conteúdo**: Organizado em seções temáticas
- **Localização**: `src/css/styles.css`

### `output.css`
- **Função**: CSS compilado e pronto para uso
- **Gerado automaticamente**: Não edite manualmente!
- **Localização**: `src/css/output.css`
- **Referência no HTML**: `<link rel="stylesheet" href="../src/css/output.css">`

---

## 🎨 Seções de Estilos

### 1. Base Styles & Animations
```css
/* Smooth scroll and keyframe animations */
- slideInUp
- slideInDown
- fadeIn
- pulse-glow
- bounce-in
```

### 2. Text & Typography
```css
.text-gradient       /* Texto com degradê */
.text-shadow        /* Sombra de texto */
.truncate-2         /* Limita texto a 2 linhas */
.truncate-3         /* Limita texto a 3 linhas */
```

### 3. Interaction Effects
```css
.hover-lift         /* Efeito de levantamento */
.hover-scale        /* Efeito de escala */
.hover-shadow       /* Efeito de sombra */
```

### 4. Product Cards
```css
.product-card       /* Container do card */
.product-image      /* Imagem do produto */
.product-button     /* Botão do produto */
```

### 5. Categories
```css
.category-box       /* Container de categoria */
.category-icon      /* Ícone de categoria */
.category-name      /* Nome da categoria */
```

### 6. Feature Boxes
```css
.feature-box        /* Container de feature */
.feature-icon       /* Ícone de feature */
.feature-title      /* Título de feature */
.feature-description /* Descrição de feature */
```

### 7. Buttons & Controls
```css
.btn-base          /* Base para botões */
.btn-primary       /* Botão primário (azul) */
.btn-secondary     /* Botão secundário (outline) */
.btn-category      /* Botão de categoria */
```

### 8. Badges
```css
.badge             /* Badge base */
.badge-discount    /* Badge de desconto (vermelho) */
.badge-new         /* Badge de novo (verde) */
.badge-featured    /* Badge destaque (amarelo) */
```

### 9. Forms
```css
.input-base        /* Input padrão */
.search-input      /* Input de busca */
.search-button     /* Botão de busca */
```

### 10. Utilities
```css
.blur-sm           /* Blur backdrop */
.shadow-elevation  /* Sombra com elevação */
.container-custom  /* Container customizado */
```

### 11. Responsive
```css
.text-responsive         /* Text responsivo */
.text-responsive-lg      /* Text responsivo grande */
```

### 12. Dark Mode
```css
[data-theme="dark"]     /* Modo escuro */
```

---

## 🎯 Como Adicionar Novos Estilos

### Opção 1: Adicionar no `styles.css`
```css
/* No final de styles.css */
.novo-estilo {
  propriedade: valor;
}
```

### Opção 2: Usar Tailwind Classes (sem editar CSS)
```html
<div class="bg-blue-600 text-white px-4 py-2 rounded-lg">
  Botão com Tailwind
</div>
```

### Opção 3: Combinar Tailwind + Customizado
```html
<div class="product-card hover-lift">
  <!-- Combina CSS customizado com Tailwind -->
</div>
```

---

## 🔴 Cores Utilizadas

| Classe | Cor RGB | Hex |
|---|---|---|
| Blue (Primária) | rgb(37, 99, 235) | #2563EB |
| Red (Desconto) | rgb(220, 38, 38) | #DC2626 |
| Green (Frete) | rgb(34, 197, 94) | #22C55E |
| Yellow (Rating) | rgb(234, 179, 8) | #EAB308 |
| Gray (Neutro) | rgb(107, 114, 128) | #6B7280 |

---

## 📐 Espaçamentos Padrão

```css
/* Tailwind Default Spacing */
0    = 0px
1    = 0.25rem (4px)
2    = 0.5rem (8px)
3    = 0.75rem (12px)
4    = 1rem (16px)
6    = 1.5rem (24px)
8    = 2rem (32px)
12   = 3rem (48px)
```

---

## 📱 Breakpoints (Tailwind)

```css
sm   = 640px    (tablets pequenos)
md   = 768px    (tablets)
lg   = 1024px   (desktops)
xl   = 1280px   (desktops grandes)
2xl  = 1536px   (ultra wide)
```

---

## ⚡ Performance

### Otimizações Implementadas:
- ✅ CSS compilado e minificado
- ✅ Utility-first com Tailwind
- ✅ Animações otimizadas (60fps)
- ✅ Lazy loading de imagens
- ✅ Sem bloqueadores de renderização

### Size do CSS:
- `input.css`: ~10KB
- `output.css`: ~80KB (antes da minificação)
- Após minificação: ~20KB

---

## 🔄 Compilação

### Modo Desenvolvimento (Watch)
```bash
npm run dev
```
Recompila CSS automaticamente quando há mudanças.

### Compilação Única
```bash
npm run build
```
Compila uma vez e gera `output.css`.

---

## 🐛 Debugging CSS

### Verificar Estilos Aplicados
1. Abra DevTools (F12)
2. Inspecione o elemento
3. Veja as classes aplicadas na aba "Styles"

### Common Issues
| Problema | Solução |
|---|---|
| Estilos não aparecem | Verificar se `output.css` foi compilado |
| Classes não funcionam | Verificar se classe existe em `styles.css` |
| Primeiras letras maiúsculas não funcionam | Tailwind é case-sensitive |

---

## 🎓 Referências

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [PostCSS](https://postcss.org)
- [Can I Use](https://caniuse.com)

---

**Última atualização:** 4 de março de 2026
