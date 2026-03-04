# Mercado Livre - Projeto E-Commerce Minimalista

## Sobre o Projeto
Este projeto é um site de e-commerce inspirado no Mercado Livre, desenvolvido para a disciplina de Programação Web. O objetivo foi criar uma interface moderna, minimalista e responsiva, focada em usabilidade e visual limpo.

## Tecnologias Utilizadas
- **HTML5**: Estrutura semântica da página
- **CSS3 + Tailwind**: Estilização com utilitários e customização própria
- **JavaScript Vanilla**: Funções simples para busca, categorias e carrinho
- **Node.js + npm**: Gerenciamento de dependências
- **PostCSS**: Processamento do CSS final
- **Git/GitHub**: Controle de versão e publicação

## Estrutura do Projeto
```
mercado-livre/
├── public/
│   └── index.html          # Página principal
├── src/
│   ├── css/
│   │   ├── styles.css      # Estilos customizados
│   │   ├── input.css       # Entrada do Tailwind
│   │   └── output.css      # CSS final gerado
│   └── js/
│       └── app.js          # Funções JS
├── imagem/                 # Imagens dos produtos
├── package.json            # Dependências
├── tailwind.config.js      # Configuração do Tailwind
├── postcss.config.js       # Configuração do PostCSS
└── README.md               # Este arquivo
```

## Funcionalidades
- **Busca de Produtos**: Campo de busca no header, mostra alerta com o termo buscado.
- **Filtro por Categorias**: Botões de categoria que mudam cor ao serem selecionados.
- **Adicionar ao Carrinho**: Botão em cada produto que mostra alerta ao clicar.
- **Exibição de Produtos**: Grid responsivo com 4 produtos, cada um com imagem, nome, preço, desconto e avaliação.
- **Footer**: Informações de contato, redes sociais e nomes dos criadores.

## Principais Ajustes e Melhorias
- Layout minimalista: Menos bordas, sombras e cores fortes.
- Espaçamento e fontes reduzidos para visual limpo.
- Banner compacto e discreto.
- Header e navegação fixos, mas sem ocupar espaço excessivo.
- Cards de produto menores e mais organizados.
- Footer simples, com nomes dos criadores: Victor Leone, Romulo Gabriel, Emerson Correia.
- Responsividade total: Grid se adapta para 1, 2 ou 4 colunas conforme o dispositivo.

## Como responder perguntas do professor
**1. Como funciona a busca?**
- O campo de busca está no header. Ao digitar e clicar em "Buscar", a função JS mostra um alerta com o termo digitado.

**2. Como o filtro de categorias funciona?**
- Os botões de categoria mudam de cor ao serem clicados, usando JS para destacar o selecionado.

**3. Como adicionar ao carrinho?**
- Cada produto tem um botão "Adicionar ao Carrinho". Ao clicar, aparece um alerta confirmando a ação.

**4. Como foi feita a responsividade?**
- O grid de produtos usa classes do Tailwind e CSS customizado para se adaptar a diferentes tamanhos de tela.

**5. Como o layout ficou minimalista?**
- Reduzi bordas, sombras, tamanhos e cores. Usei azul e branco como base, com muito espaço em branco e fontes pequenas.

**6. Quem são os criadores?**
- Os nomes estão no footer: Victor Leone, Romulo Gabriel, Emerson Correia.

**7. Como o CSS é gerado?**
- O arquivo output.css é gerado automaticamente pelo PostCSS a partir do input.css/styles.css e das configurações do Tailwind.

**8. Como publicar no GitHub?**
- Usei git add, commit e push para enviar todas as alterações para o repositório remoto.

## Dicas para responder o professor
- Explique cada parte do código com base nas funcionalidades acima.
- Mostre como o layout foi pensado para ser simples e fácil de usar.
- Fale sobre a importância da responsividade e acessibilidade.
- Cite o uso de ferramentas modernas (Tailwind, PostCSS, Git).
- Mostre que você entende cada ajuste feito e o motivo das escolhas visuais.

---

