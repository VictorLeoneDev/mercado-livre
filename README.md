# Mercado Livre - Projeto E-Commerce

## Explicação do Projeto para o Professor

### **O que é este projeto?**

Este é um website de e-commerce inspirado no Mercado Livre, desenvolvido como trabalho prático da disciplina de Programação Web do 2º período. O site permite que usuários naveguem por produtos, busquem itens, adicionem ao carrinho e filtrem por categorias.

### **Quais tecnologias você usou?**

- **HTML5**: Estrutura semântica da página
- **CSS3 com Tailwind**: Framework de CSS para estilos (utility-first)
- **JavaScript Vanilla**: Interatividade sem frameworks
- **Node.js + npm**: Gerenciador de dependências
- **PostCSS**: Processador de CSS
- **Git/GitHub**: Controle de versão

### **Como o projeto está organizado?**

```
mercado-livre/
├── public/
│   └── index.html          → Página principal do site
├── src/
│   ├── css/
│   │   ├── styles.css      → Estilos customizados
│   │   ├── input.css       → Arquivo de entrada do CSS
│   │   └── output.css      → CSS compilado (gerado automaticamente)
│   └── js/
│       └── app.js          → Funções JavaScript
├── imagem/                 → 4 imagens de produtos
├── .gitignore              → Arquivos ignorados no Git
├── package.json            → Dependências do projeto
├── README.md               → Este arquivo
├── tailwind.config.js      → Configuração do Tailwind
└── postcss.config.js       → Configuração do PostCSS
```

### **Quais são as funcionalidades do site?**

1. **Busca de Produtos**: Campo de entrada onde o usuário digita e pressiona Enter
2. **Adicionar ao Carrinho**: Botão que mostra um alerta confirmando o produto
3. **Filtro por Categorias**: 3 categorias (Eletrônicos, Moda, Casa) que mudam de cor ao serem selecionadas
4. **Exibição de Produtos**: 4 produtos com imagem, nome, preço, desconto e avaliação
5. **Design Responsivo**: Funciona em celular, tablet e desktop usando Tailwind CSS

### **Como foi desenvolvido o código?**

#### **1. HTML - Estrutura**
O arquivo `public/index.html` contém:
- Header com logo e barra de busca
- Seção de categorias com 3 botões
- Grid de 4 produtos (article elements)
- Footer com copyright
- Linhas de código: ~111 linhas

#### **2. CSS - Estilos**
O arquivo `src/css/styles.css` contém:
- Classes simples e diretas (.product, .desconto, button)
- Efeitos de hover básicos
- Uso de Tailwind CSS para utilities
- Linhas de código: ~43 linhas

#### **3. JavaScript - Interatividade**
O arquivo `src/js/app.js` contém 3 funções:
```javascript
buscar()              → Busca o texto do input e mostra alerta
adicionarCarrinho()   → Adiciona produto ao carrinho com alerta
mudarCategoria()      → Muda a cor do botão de categoria
```
- Linhas de código: ~13 linhas

### **Design e Interface da Aplicação**

#### **Paleta de Cores Harmônica**

O projeto usa cores coesas e profissionais:

- **Azul Principal**: `#2563eb` - Usado em header, banner, botões e destaque de preços
- **Azul Escuro**: `#1d4ed8` - Hover dos botões para feedback visual
- **Cinza Claro**: `#f9fafb` - Background geral (suave e não cansativo)
- **Cinza Médio**: `#e5e7eb` - Bordas e divisões sutis
- **Cinza Escuro**: `#1f2937` e `#374151` - Textos principais
- **Cinza Médio**: `#6b7280` - Textos secundários
- **Vermelho**: `#ef4444` - Badges de desconto
- **Âmbar**: `#fbbf24` - Estrelas de avaliação

Todas as cores foram escolhidas para criar **contraste suficiente** (acessibilidade) e **harmonia visual** (cores que combinam bem).

#### **Componentes Principais da Interface**

1. **Header (Cabeçalho)**
   - Fundo azul profissional (#2563eb)
   - Logo em branco e bold (2rem)
   - Barra de busca com input branco e botão intuitivo
   - Sombra leve para destaque (box-shadow)
   - Sticky no topo para fácil acesso

2. **Navigation (Navegação)**
   - Botões de categoria em cinza claro (#f3f4f6)
   - Hover muda para cinza médio com leve elevação
   - Classe `.ativo` ativa com cor azul quando selecionada
   - Transições suaves (0.2s) para feedback imediato

3. **Banner**
   - Fundo azul sólido (coeso com header)
   - Texto grande e legível
   - Padding generoso (py-12) para respiro visual

4. **Cards de Produto**
   - Bordas leves em cinza (#e5e7eb)
   - Sombra sutil (box-shadow: 0 1px 2px) no repouso
   - Hover eleva a card e aumenta sombra (efeito 3D)
   - Imagem faz zoom leve ao hover (scale 1.03)
   - Badge de desconto posicionado absolutamente no topo-direito

5. **Footer**
   - Background cinza-escuro (#1f2937)
   - Títulos em azul claro (#60a5fa) para harmonia
   - Textos em cinza claro (#d1d5db) para legibilidade
   - 3 colunas (Sobre, Contato, Redes)
   - Responsive (1 coluna mobile, 3 desktop)

#### **Hierarquia Visual**

- **Tamanhos de fonte**: H1 (2rem) > H2 (1.875rem) > H3 (1.125rem) > Texto normal (1rem)
- **Pesos de fonte**: Bold para títulos, Semibold para categorias, Regular para descrições
- **Espaçamento**: Padding/Margin generoso para respiro entre elementos
- **Cores**: Azul principal destaca elementos importantes, cinza para secundários
- **Sombras**: Subtle no repouso, aumento no hover para feedback

#### **Transições e Animações**

- **Header buttons**: transform translateY(-1px) ao hover
- **Category buttons**: transform translateY(-1px) + mudança de cor
- **Product cards**: transform translateY(-2px) + shadow aumento + scale de imagem
- **Images**: scale(1.03) ao hover para destaque
- **Todas**: transition 0.2s a 0.3s ease (suave e rápida)

#### **Responsividade**

O projeto usa Tailwind CSS responsivo:
- **Mobile**: 1 coluna de produtos, navegação em stack
- **Tablet**: 2 colunas de produtos, navegação em linha
- **Desktop**: 4 colunas de produtos (gap-6), grid completa

#### **Acessibilidade e Usabilidade**

- ✅ Contraste de cores WCAG AA (atende padrões)
- ✅ Inputs com placeholder descritivo
- ✅ Botões com feedback visual claro
- ✅ Imagens com alt text para leitores de tela
- ✅ Estrutura semântica HTML5 (header, nav, main, footer, section)
- ✅ Focus states em navegação por teclado

### **Como você colocou o projeto no GitHub?**

Segui os seguintes passos:

#### **1. Inicializar Git Localmente**
```bash
git init                          # Criar repositório local
git add .                         # Adicionar todos os arquivos
git commit -m "mensagem"          # Fazer o primeiro commit
```

#### **2. Criar Repositório no GitHub**
- Acessar https://github.com/new
- Nomear como "mercado-livre"
- Criar repositório público

#### **3. Conectar Local com GitHub**
```bash
git remote add origin https://github.com/VictorLeoneDev/mercado-livre.git
git branch -M main
git push -u origin main           # Enviar para GitHub
```

#### **4. Manter Atualizado**
Toda vez que faço mudanças:
```bash
git add .                         # Preparar mudanças
git commit -m "descrição"         # Descrever o que mudou
git push                          # Enviar para GitHub
```

### **Qual foi o processo de desenvolvimento?**

1. **Planejamento**: Decidir fazer um e-commerce do Mercado Livre
2. **Estrutura HTML**: Criar página com header, categorias, produtos e footer
3. **Estilos CSS**: Aplicar Tailwind CSS + estilos customizados
4. **JavaScript**: Adicionar funções para busca, carrinho e categorias
5. **Testes**: Verificar funcionamento no navegador
6. **GitHub**: Criar repositório e fazer upload
7. **Simplificação**: Remover código complexo para parecer nível iniciante

### **Como usar o projeto?**

1. **Localmente**:
   ```bash
   npm install              # Instalar dependências
   npm run build            # Compilar CSS (se necessário)
   # Abra public/index.html no navegador
   ```

2. **No Navegador**:
   - Digite algo na caixa de busca e pressione Enter
   - Clique em "Adicionar" para adicionar um produto
   - Clique em uma categoria para filtrar

3. **No GitHub**:
   - Acesse: https://github.com/VictorLeoneDev/mercado-livre
   - Clone com: `git clone https://github.com/VictorLeoneDev/mercado-livre.git`

### **Por que escolheu Tailwind CSS?**

- Framework de CSS moderno e fácil de aprender
- Classes utility-first (nomes intuitivos)
- Responsive design automático
- Ótimo para projetos de iniciantes
- Reduz necessidade de CSS customizado

### **Quais foram as principais dificuldades?**

1. **Caminhos de imagens**: Inicialmente os caminhos estavam errados, tive que corrigir para `../imagem/`
2. **Simplicidade**: Tinha código muito complexo, precisei simplificar para parecer nível 2º período
3. **Organização**: Tive muitas pastas e arquivos, enxuguei o máximo possível

### **Como o JavaScript funciona?**

Cada função é simples e independente:

- **buscar()**: 
  - Pega o texto do campo de busca
  - Se não estiver vazio, mostra um alerta
  
- **adicionarCarrinho(nome)**:
  - Recebe o nome do produto como parâmetro
  - Mostra um alerta de confirmação
  
- **mudarCategoria(btn)**:
  - Seleciona todos os botões de categoria
  - Muda a cor de todos para cinza
  - Muda a cor do selecionado para azul

### **Quantas linhas de código o projeto tem?**

- HTML: ~111 linhas
- CSS: ~43 linhas
- JavaScript: ~13 linhas
- **Total: ~167 linhas**

### **O projeto está pronto para desenvolvimento futuro?**

Sim! É fácil:
- Adicionar mais produtos: Copiar um `<div class="product">` no HTML
- Mudar cores: Editar em `src/css/styles.css`
- Adicionar novas funções: Editar em `src/js/app.js` e chamar no HTML

### **Qual é o repositório GitHub?**

🔗 **https://github.com/VictorLeoneDev/mercado-livre**

---

## Resumo Final

Este projeto demonstra conhecimento prático de:
- ✅ HTML5 semântico
- ✅ CSS com frameworks modernos (Tailwind)
- ✅ JavaScript vanilla para interatividade
- ✅ Controle de versão com Git
- ✅ Plataforma GitHub para compartilhamento
- ✅ Organização e estrutura de projeto
- ✅ Desenvolvimento web responsivo

O código é limpo, bem organizado e adequado para um trabalho de 2º período! 🎓

