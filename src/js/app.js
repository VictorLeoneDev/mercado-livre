/**
 * Mercado Livre - App Básico
 * Funcionalidades simples do e-commerce
 */

// ==========================================
// 1. BUSCA
// ==========================================
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('button[aria-label="Buscar"]');
    
    if (searchInput && searchButton) {
        // Buscar ao clicar no botão
        searchButton.addEventListener('click', function() {
            const query = searchInput.value;
            if (query.trim() !== '') {
                alert('Buscando por: ' + query);
                searchInput.value = '';
            } else {
                alert('Digite algo para buscar!');
            }
        });
        
        // Buscar ao pressionar Enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
}

// ==========================================
// 2. CARRINHO DE COMPRAS
// ==========================================
function initializeCart() {
    const cartButtons = document.querySelectorAll('button:contains("Adicionar ao Carrinho")');
    
    // Selecionar todos os botões de produto
    const allButtons = document.querySelectorAll('button');
    const productButtons = Array.from(allButtons).filter(btn => 
        btn.textContent.includes('Adicionar ao Carrinho')
    );
    
    productButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            addToCart(this);
        });
    });
}

function addToCart(button) {
    // Pegar informações do produto
    const article = button.closest('article');
    const productName = article.querySelector('h3').textContent.trim();
    const productPrice = article.querySelector('.text-lg').textContent.trim();
    
    // Mostrar mensagem
    alert('✓ ' + productName + '\nPreço: ' + productPrice + '\nAdicionado ao carrinho!');
    
    // Mudar cor do botão
    button.style.backgroundColor = '#22c55e';
    button.textContent = '✓ Adicionado!';
    
    // Voltar ao normal depois de 2 segundos
    setTimeout(function() {
        button.style.backgroundColor = '#2563eb';
        button.textContent = 'Adicionar ao Carrinho';
    }, 2000);
}

// ==========================================
// 3. FILTRO DE CATEGORIAS
// ==========================================
function initializeCategories() {
    const categoryButtons = document.querySelectorAll('.px-4.py-2.bg-gray-100');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover estado ativo de todos
            categoryButtons.forEach(btn => {
                btn.classList.remove('bg-blue-100', 'text-blue-600');
                btn.classList.add('bg-gray-100', 'text-gray-600');
            });
            
            // Adicionar estado ativo ao selecionado
            this.classList.remove('bg-gray-100', 'text-gray-600');
            this.classList.add('bg-blue-100', 'text-blue-600');
        });
    });
}

// ==========================================
// 4. INICIALIZAR TUDO
// ==========================================
function initializeApp() {
    console.log('Mercado Livre iniciado!');
    initializeSearch();
    initializeCart();
    initializeCategories();
}

// Quando a página carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
