// Busca
function buscar() {
  const texto = document.getElementById('searchInput').value;
  if(texto != '') {
    alert('Você buscou por: ' + texto);
  }
}

// Adicionar ao carrinho
function adicionarCarrinho(nome) {
  alert(nome + ' adicionado ao carrinho!');
}

// Mudar categoria
function mudarCategoria(btn) {
  const botoes = document.querySelectorAll('.categoria-btn');
  botoes.forEach(b => b.style.backgroundColor = '#f3f4f6');
  btn.style.backgroundColor = '#93c5fd';
}
