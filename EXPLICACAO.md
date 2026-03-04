# 📚 EXPLICAÇÃO DO PROJETO - MERCADO LIVRE

## O QUE FOI FEITO

### ✅ 1. **CORRIGIDO: Caminhos das Imagens**
**Problema:** As imagens não estavam aparecendo porque o caminho estava errado.
- ❌ Antes: `../20180522124247.jpg`
- ✅ Depois: `../imagem/20180522124247.jpg`

**Onde está:** [public/index.html](public/index.html) - linhas 120, 151, 180, 208

---

### ✅ 2. **SIMPLIFICADO: CSS (Estilos)**
**Arquivo:** [src/css/styles.css](src/css/styles.css)

**O que tinha ANTES:**
- 483 linhas com animações complexas
- Muitas keyframes (@keyframes) desnecessárias
- Classes extras que não eram usadas
- Tema escuro não sendo usado

**O que tem AGORA:**
- Apenas 50 linhas de CSS customizado
- Estilos básicos para:
  - ✓ Cartões de produtos (product-card)
  - ✓ Badges (etiquetas de desconto)
  - ✓ Efeitos simples de hover
  - ✓ Inputs e botões

**Como funciona:**
```css
@import "tailwindcss";  /* Importa o Tailwind (framework de CSS) */

html {
  scroll-behavior: smooth;  /* Scroll suave */
}

.product-card {
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;  /* Animação suave */
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);  /* Sombra maior ao passar mouse */
}
```

---

### ✅ 3. **SIMPLIFICADO: JavaScript (Interatividade)**
**Arquivo:** [src/js/app.js](src/js/app.js)

**O que tinha ANTES:**
- 185 linhas com muitas funções complexas
- Tema escuro com localStorage
- Animações de scroll com IntersectionObserver
- Múltiplas funcionalidades avançadas

**O que tem AGORA:**
- Apenas 90 linhas com 3 funcionalidades:

#### **Funcionalidade 1: Busca** 
```javascript
function initializeSearch() {
    // Quando digita e pressiona Enter, busca o produto
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            alert('Buscando por: ' + query);
        }
    });
}
```

#### **Funcionalidade 2: Carrinho**
```javascript
function addToCart(button) {
    // Pega o nome e preço do produto
    const productName = article.querySelector('h3').textContent;
    
    // Mostra mensagem
    alert('✓ ' + productName + ' adicionado!');
    
    // Muda cor do botão por 2 segundos
    button.style.backgroundColor = '#22c55e';  // Verde
    setTimeout(function() {
        button.style.backgroundColor = '#2563eb';  // Azul de novo
    }, 2000);
}
```

#### **Funcionalidade 3: Filtro de Categorias**
```javascript
function initializeCategories() {
    // Quando clica em uma categoria, muda a cor
    button.classList.add('bg-blue-100');  // Adiciona background azul
    button.classList.add('text-blue-600');  // Texto fica azul
}
```

---

## 📁 ESTRUTURA DO PROJETO

```
Mercado livre/
├── public/
│   └── index.html          ← PÁGINA PRINCIPAL (abra isto no navegador!)
├── src/
│   ├── css/
│   │   ├── input.css       ← Arquivo de entrada (não mexa)
│   │   ├── styles.css      ← Estilos customizados (PODE EDITAR!)
│   │   └── output.css      ← Gerado automaticamente (não mexa)
│   └── js/
│       └── app.js          ← JavaScript com 3 funções (PODE EDITAR!)
├── imagem/
│   ├── 20180522124247.jpg
│   ├── 7899653741827.jpg
│   ├── images.jpg
│   └── 7193592_ra.avif
├── package.json            ← Dependências do projeto
├── tailwind.config.js      ← Configuração do Tailwind
└── postcss.config.js       ← Configuração do processador CSS
```

---

## 🎯 COMO USAR

### **Para abrir no navegador:**
1. Vá até a pasta: `Mercado livre/public/`
2. Abra o arquivo `index.html` no navegador
3. As imagens devem aparecer agora! ✓

### **Para fazer mudanças no CSS:**
1. Edite o arquivo: `src/css/styles.css`
2. No terminal, execute: `npm run build`
3. Refresh (F5) no navegador

### **Para fazer mudanças no JavaScript:**
1. Edite o arquivo: `src/js/app.js`
2. Apenas refresh (F5) no navegador (não precisa compilar)

---

## 🧪 O QUE FUNCIONA

- ✅ **Imagens aparecem** (problema corrigido!)
- ✅ **Busca** - Digite e pressione Enter
- ✅ **Adicionar ao Carrinho** - Botão fica verde por 2 segundos
- ✅ **Filtro de Categorias** - Clique para destacar
- ✅ **Responsivo** - Funciona em celular, tablet e desktop

---

## 📝 TIPOS DE TECNOLOGIA USADA

1. **HTML** - Estrutura da página (tags, elementos)
2. **CSS** - Estilos e beleza (cores, animações leves)
3. **JavaScript** - Interatividade (cliques, alertas, mudanças)
4. **Tailwind CSS** - Framework de utilidades (classes prontas)

**Nada de Java!** Este é apenas para interface web, não para backend.

---

## 💡 DICAS PARA EXPANDIR

- Adicionar mais produtos: Copie um `<article>` em index.html
- Mudar cores: Edite o arquivo `styles.css`
- Adicionar novas funcionalidades: Edite `app.js` e chame em `initializeApp()`
- Adicionar novas imagens: Coloque em `imagem/` e referencie em index.html

---

## ❓ PERGUNTAS COMUNS

**P: As imagens ainda não aparecem?**
R: Verifique se os arquivos estão em `imagem/` com o nome correto.

**P: O CSS não está funcionando?**
R: Execute `npm run build` no terminal para recompilar.

**P: Como adiciono um novo botão com função?**
R: Crie um `<button>` em index.html e adicione um `addEventListener` em app.js.

**P: Preciso usar Node.js?**
R: Apenas para compilar o CSS (npm run build). O HTML/JS funcionam diretamente no navegador.

---

**Pronto! O projeto agora está simples, funcional e adequado para um trabalho de 2º período** ✨
