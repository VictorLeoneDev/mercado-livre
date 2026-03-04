# 📖 GUIA DE INÍCIO RÁPIDO

## Comece em 3 minutos! ⚡

### 1️⃣ Navegar para o projeto
```bash
cd "C:\Users\Emerson Correira\Desktop\PROGRAMAÇÃO WEB (TRABALHOS)\Mercado livre"
```

### 2️⃣ Instalar dependências (primeira vez)
```bash
npm install
```

### 3️⃣ Compilar CSS
```bash
npm run build
```

### 4️⃣ Abrir no navegador
```
Clique em: public/index.html
```

---

## 🎯 Comandos Principais

### Desenvolvimento (com auto-reload)
```bash
npm run dev
```
✅ Recompila CSS automaticamente
✅ Perfeito para desenvolvimento

### Produção (uma única compilação)
```bash
npm run build
```
✅ Compila uma vez
✅ Use para finalizações

### Iniciar rápido
```bash
npm start
```
✅ Alias para `npm run build`

---

## ✏️ Editar Arquivos

### CSS (Estilos)
📂 Abra: `src/css/styles.css`

Exemplo:
```css
.meu-estilo {
  background-color: blue;
  padding: 10px;
}
```

### JavaScript (Funções)
📂 Abra: `src/js/app.js`

Exemplo:
```javascript
function minhaFuncao() {
  console.log('Olá!');
}
```

### HTML (Conteúdo)
📂 Abra: `public/index.html`

Exemplo:
```html
<h1>Meu Título</h1>
<p>Meu parágrafo</p>
```

---

## 🔄 Fluxo Básico

```
1. Editar arquivo
2. Salvar (Ctrl+S)
3. Se CSS: npm run build
4. F5 no navegador
5. Ver mudanças!
```

---

## 📂 Estrutura Rápida

```
✅ public/           ← Arquivos para o navegador
✅ src/css/          ← Estilos aqui
✅ src/js/           ← Funções aqui
✅ imagem/           ← Imagens de produtos
✅ config/           ← Configurações
```

---

## 💡 Dicas Importantes

### Quando usar `npm run dev`
- ✅ Você vai trabalhar por uma hora
- ✅ Vai fazer muitas mudanças no CSS
- ✅ Quer ver mudanças em tempo real

### Quando usar `npm run build`
- ✅ Fazer única mudança e finalizar
- ✅ Antes de fazer upload/deploy
- ✅ Para testar versão final

### Dica: Abra 2 terminais
- Terminal 1: `npm run dev`
- Terminal 2: Outros comandos
- F5 no navegador para ver mudanças

---

## 🆘 Problemas Comuns

### CSS não atualiza
```bash
# Solução:
npm run build
# Depois F5 no navegador (cmd+shift+r)
```

### npm não reconhecido
```bash
# Solução:
# Reinicie o terminal
# Ou reinstale Node.js
```

### Imagens não aparecem
```bash
# Verificar caminho da imagem em public/index.html
# Devem estar em ../imagem/nome.jpg
```

---

## 📚 Consulte a Documentação

| Arquivo | Para |
|---------|------|
| **README.md** | Guia completo |
| **CSS-DOCUMENTATION.md** | Estilos CSS |
| **STRUCTURE.md** | Estrutura de pastas |
| **PROJECT-SUMMARY.md** | Resumo do projeto |

---

## ✨ Você está pronto!

Agora:
1. Abra `public/index.html` no navegador
2. Comece a editar os arquivos
3. Veja as mudanças em tempo real

**Boa sorte! 🚀**

---

### Atalhos Úteis

| Ação | Comando |
|------|---------|
| Salvar arquivo | Ctrl+S |
| Comando terminal | npm run dev |
| Recarregar navegador | F5 |
| Recarregar cache | Ctrl+Shift+R |
| Abrir DevTools | F12 |
| Inspecionar elemento | Ctrl+Shift+C |

---

*Última atualização: 4 de março de 2026*
