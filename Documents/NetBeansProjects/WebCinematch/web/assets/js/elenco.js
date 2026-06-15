// Array com os dados das avaliações   
let reviews = [
    {
        id: 1,
        stars: 5,
        starsDisplay: '★★★★★',
        content: `Amo esse filme. Especialmente por causa da incrível química entre Julia Stiles e Heath Ledger. O que eu amo nesse casal é a forma como eles se equilibram. Patrick começa a conquista como parte de uma aposta, mas logo demonstra que seus sentimentos são reais, e Kat, com sua postura defensiva, acaba se rendendo ao charme de Patrick. As trocas de farpas entre eles são divertidas, e a evolução do relacionamento deles é tão envolvente que você não consegue evitar torcer por eles. É aquele tipo de casal que você ama acompanhar e torcer para que tudo dê certo. Também tem a Bianca e o Cameron, que são um casal muito fofo, e que deixa o filme melhor ainda.`,
        shortContent: `Amo esse filme. Especialmente por causa da incrível química entre Julia Stiles e Heath Ledger. O que eu amo nesse casal é a forma como eles se equilibram. Patrick começa a conquista como parte de uma aposta, mas logo demonstra que seus sentimentos são reais, e Kat, com sua postura defensiva, acaba se rendendo ao charme...`,
        useful: 8,
        isUserReview: false
    },
    {
        id: 2,
        stars: 4,
        starsDisplay: '★★★★',
        content: `Um dos melhores filmes, não só da década de 90, como também do gênero adolescente. Confesso que foi o primeiro filme Teen que assisti e me fez amar o gênero. A história é envolvente, os personagens são carismáticos e a trilha sonora é perfeita.

Heath Ledger entrega uma performance memorável que mostra todo seu carisma e talento. A cena em que ele canta "Can't Take My Eyes Off You" no estádio é simplesmente icônica e inesquecível. Julia Stiles também brilha como Kat, trazendo força e vulnerabilidade ao personagem.

O filme consegue equilibrar comédia, romance e drama de forma natural, sem forçar situações. Os diálogos são espertos e as situações, embora absurdas às vezes, são críveis dentro do universo proposto.`,
        shortContent: `Um dos melhores filmes, não só da década de 90, como também do gênero adolescente. Confesso que foi o primeiro filme Teen que assisti e me fez amar o gênero. A história é envolvente, os personagens são carismáticos e a trilha sonora é perfeita.`,
        useful: 12,
        isUserReview: false
    },
    {
        id: 3,
        stars: 3.5,
        starsDisplay: '★★★½',
        content: `Uma razoável releitura de "A Megera Domada" de Shakespeare. Por manter a estrutura do clássico original o roteiro consegue se destacar dos filmes teen convencionais, trazendo diálogos inteligentes e situações mais elaboradas.

O elenco está ótimo, especialmente Heath Ledger e Julia Stiles que têm uma química incrível. A trilha sonora dos anos 90 é um diferencial e ajuda a criar a atmosfera perfeita.

Porém, alguns momentos são um pouco previsíveis e seguem fórmulas do gênero. Mesmo assim, é um filme divertido e que merece ser assistido, principalmente por quem gosta de comédias românticas adolescentes.`,
        shortContent: `Uma razoável releitura de "A Megera Domada" de Shakespeare. Por manter a estrutura do clássico original o roteiro consegue se destacar dos filmes teen convencionais, trazendo diálogos inteligentes e situações mais elaboradas.`,
        useful: 5,
        isUserReview: false
    }
];

// Variável global para controlar a avaliação sendo editada
let editingReviewId = null;

// Variável para armazenar a nota selecionada para nova avaliação
let selectedRating = 0;

// Função para abrir o modal com a avaliação específica
function openModal(reviewIndex) {
    const modal = document.getElementById('modalOverlay');
    const modalStars = document.getElementById('modalStars');
    const modalContent = document.getElementById('modalContent');
    const review = reviews[reviewIndex];
    
    // Atualiza o conteúdo do modal
    modalStars.textContent = review.starsDisplay;
    modalContent.innerHTML = `<p>${review.content}</p>`;
    
    // Atualiza o contador de utilidade
    const modalMeta = document.querySelector('.modal-meta');
    modalMeta.innerHTML = `<strong>${review.useful} PESSOAS ACHARAM ISSO ÚTIL.</strong>`;
    
    // Mostra o modal
    modal.classList.add('active');
}

// Função para fechar o modal
function closeModal(event) {
    const modal = document.getElementById('modalOverlay');
    
    // Verifica se o evento é undefined (chamado pelo botão X) ou se clicou no overlay
    if (!event || event.target.id === 'modalOverlay' || event.target.classList.contains('modal-close')) {
        modal.classList.remove('active');
    }
}

// Função para abrir o sidebar de avaliações
function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    // Adiciona as classes para mostrar
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Carrega as avaliações no sidebar
    loadSidebarReviews();
    updateReviewsCount();
    
    console.log('Sidebar aberto!'); // Para debug
}

// Função para fechar o sidebar
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    // Remove as classes para esconder
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reseta o formulário
    const textArea = document.getElementById('newReviewText');
    if (textArea) {
        textArea.value = '';
    }
    selectedRating = 0;
    updateStarSelection();
    
    // Cancela edição se houver
    editingReviewId = null;
    
    console.log('Sidebar fechado!'); // Para debug
}

// Função para converter número de estrelas em display
function getStarsDisplay(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    let display = '★'.repeat(fullStars);
    if (hasHalf) display += '½';
    return display;
}

// Função para atualizar contador de reviews
function updateReviewsCount() {
    const countElement = document.getElementById('reviewsCount');
    if (!countElement) return;
    
    const filterSelect = document.getElementById('filterSelect');
    const filter = filterSelect ? filterSelect.value : 'all';
    let count = reviews.length;
    
    if (filter === 'user') {
        count = reviews.filter(r => r.isUserReview).length;
    } else if (filter !== 'all') {
        count = reviews.filter(r => Math.floor(r.stars) === parseInt(filter)).length;
    }
    
    countElement.textContent = 
        `Mostrando ${count} ${count === 1 ? 'avaliação' : 'avaliações'}`;
}

// Função para filtrar avaliações
function filterReviews() {
    loadSidebarReviews();
    updateReviewsCount();
}

// Função para carregar as avaliações no sidebar
function loadSidebarReviews() {
    const container = document.getElementById('sidebarReviews');
    if (!container) return;
    
    const filterSelect = document.getElementById('filterSelect');
    const filter = filterSelect ? filterSelect.value : 'all';
    container.innerHTML = '';
    
    // Filtra as reviews
    let filteredReviews = reviews;
    if (filter === 'user') {
        filteredReviews = reviews.filter(r => r.isUserReview);
    } else if (filter !== 'all') {
        filteredReviews = reviews.filter(r => Math.floor(r.stars) === parseInt(filter));
    }
    
    // Ordena: reviews do usuário primeiro
    filteredReviews.sort((a, b) => {
        if (a.isUserReview && !b.isUserReview) return -1;
        if (!a.isUserReview && b.isUserReview) return 1;
        return b.id - a.id; // Mais recentes primeiro
    });
    
    if (filteredReviews.length === 0) {
        container.innerHTML = '<p style="text-align: center; opacity: 0.7; padding: 40px;">Nenhuma avaliação encontrada.</p>';
        return;
    }
    
    filteredReviews.forEach((review) => {
        const reviewElement = document.createElement('div');
        reviewElement.className = `sidebar-review ${review.isUserReview ? 'user-review' : ''}`;
        reviewElement.id = `review-${review.id}`;
        
        const isEditing = editingReviewId === review.id;
        
        reviewElement.innerHTML = `
            ${review.isUserReview ? '<span class="user-badge">MINHA AVALIAÇÃO</span>' : ''}
            <div class="sidebar-review-header">
                <div class="sidebar-review-avatar"></div>
                <div class="sidebar-review-stars" id="stars-${review.id}">${review.starsDisplay}</div>
            </div>
            ${isEditing ? `
                <div class="edit-stars-selector" id="edit-stars-${review.id}">
                    ${[1, 2, 3, 4, 5].map(n => 
                        `<span class="star ${n <= review.stars ? 'active' : ''}" data-rating="${n}" onclick="updateEditStars(${review.id}, ${n})">★</span>`
                    ).join('')}
                </div>
                <textarea class="sidebar-review-text-edit" id="edit-text-${review.id}">${review.content}</textarea>
            ` : `
                <div class="sidebar-review-text">${review.content}</div>
            `}
            <div class="sidebar-review-meta">
                <strong>${review.useful} PESSOAS ACHARAM ISSO ÚTIL.</strong>
            </div>
            <div class="sidebar-review-actions">
                ${isEditing ? `
                    <button class="sidebar-review-btn sidebar-btn-save" onclick="saveEdit(${review.id})">
                        💾 Salvar
                    </button>
                    <button class="sidebar-review-btn sidebar-btn-cancel" onclick="cancelEdit()">
                        ✖ Cancelar
                    </button>
                ` : `
                    ${!review.isUserReview ? `
                        <button class="sidebar-review-btn sidebar-btn-like" onclick="likeReview(${review.id})">
                            👍 Útil
                        </button>
                    ` : ''}
                    ${review.isUserReview ? `
                        <button class="sidebar-review-btn sidebar-btn-edit" onclick="startEdit(${review.id})">
                            ✏️ Editar
                        </button>
                        <button class="sidebar-review-btn sidebar-btn-delete" onclick="deleteReview(${review.id})">
                            🗑️ Excluir
                        </button>
                    ` : ''}
                `}
            </div>
        `;
        container.appendChild(reviewElement);
    });
}

// Função para atualizar estrelas durante edição
function updateEditStars(reviewId, rating) {
    const review = reviews.find(r => r.id === reviewId);
    if (review) {
        review.stars = rating;
        review.starsDisplay = getStarsDisplay(rating);
        
        // Atualiza visualmente as estrelas
        const starsContainer = document.getElementById(`edit-stars-${reviewId}`);
        if (starsContainer) {
            const stars = starsContainer.querySelectorAll('.star');
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        }
    }
}

// Função para submeter nova avaliação
function submitNewReview() {
    const textArea = document.getElementById('newReviewText');
    const text = textArea ? textArea.value.trim() : '';
    
    if (!text) {
        alert('Por favor, escreva sua avaliação!');
        return;
    }
    
    if (selectedRating === 0) {
        alert('Por favor, selecione uma nota de 1 a 5 estrelas!');
        return;
    }
    
    // Cria nova review
    const newReview = {
        id: Date.now(),
        stars: selectedRating,
        starsDisplay: getStarsDisplay(selectedRating),
        content: text,
        shortContent: text.substring(0, 150) + (text.length > 150 ? '...' : ''),
        useful: 0,
        isUserReview: true
    };
    
    // Adiciona ao início do array
    reviews.unshift(newReview);
    
    // Limpa o formulário
    if (textArea) {
        textArea.value = '';
    }
    selectedRating = 0;
    updateStarSelection();
    
    // Recarrega as reviews
    loadSidebarReviews();
    updateReviewsCount();
    
    alert('✅ Avaliação publicada com sucesso!');
}

// Função para iniciar edição
function startEdit(reviewId) {
    editingReviewId = reviewId;
    loadSidebarReviews();
}

// Função para cancelar edição
function cancelEdit() {
    editingReviewId = null;
    loadSidebarReviews();
}

// Função para salvar edição
function saveEdit(reviewId) {
    const textArea = document.getElementById(`edit-text-${reviewId}`);
    const newText = textArea ? textArea.value.trim() : '';
    
    if (!newText) {
        alert('A avaliação não pode estar vazia!');
        return;
    }
    
    const review = reviews.find(r => r.id === reviewId);
    if (review) {
        review.content = newText;
        review.shortContent = newText.substring(0, 150) + (newText.length > 150 ? '...' : '');
        editingReviewId = null;
        loadSidebarReviews();
        alert('✅ Avaliação atualizada com sucesso!');
    }
}

// Função para excluir avaliação
function deleteReview(reviewId) {
    if (confirm('❌ Tem certeza que deseja excluir sua avaliação?')) {
        reviews = reviews.filter(r => r.id !== reviewId);
        loadSidebarReviews();
        updateReviewsCount();
        alert('✅ Avaliação excluída com sucesso!');
    }
}

// Função para dar like em uma review
function likeReview(reviewId) {
    const review = reviews.find(r => r.id === reviewId);
    if (review) {
        review.useful++;
        loadSidebarReviews();
    }
}

// Função para atualizar seleção de estrelas (nova avaliação)
function updateStarSelection() {
    const starsContainer = document.getElementById('newReviewStars');
    if (!starsContainer) return;
    
    const stars = starsContainer.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < selectedRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
    
    // Habilita/desabilita botão de submit
    const submitBtn = document.getElementById('submitReviewBtn');
    const textArea = document.getElementById('newReviewText');
    const text = textArea ? textArea.value.trim() : '';
    
    if (submitBtn) {
        submitBtn.disabled = !text || selectedRating === 0;
    }
}

// Fechar com a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
        closeSidebar();
    }
});

// Event listeners - Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando event listeners...');
    
    // Modal buttons
    const btnLike = document.querySelector('.btn-like');
    const btnDislike = document.querySelector('.btn-dislike');
    
    if (btnLike) {
        btnLike.addEventListener('click', function() {
            alert('Obrigado pelo feedback!');
            closeModal();
        });
    }
    
    if (btnDislike) {
        btnDislike.addEventListener('click', function() {
            alert('Obrigado pelo feedback!');
            closeModal();
        });
    }
    
    // Botão "MAIS AVALIAÇÕES" - IMPORTANTE!
    const moreReviewsBtn = document.querySelector('.more-reviews-btn');
    if (moreReviewsBtn) {
        moreReviewsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Botão "MAIS AVALIAÇÕES" clicado!');
            openSidebar();
        });
        console.log('Event listener do botão "MAIS AVALIAÇÕES" adicionado!');
    } else {
        console.error('Botão "MAIS AVALIAÇÕES" não encontrado!');
    }
    
    // Sistema de seleção de estrelas para nova avaliação
    const newReviewStars = document.getElementById('newReviewStars');
    if (newReviewStars) {
        const stars = newReviewStars.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', function() {
                selectedRating = parseInt(this.dataset.rating);
                updateStarSelection();
            });
        });
    }
    
    // Monitora mudanças no textarea
    const newReviewText = document.getElementById('newReviewText');
    if (newReviewText) {
        newReviewText.addEventListener('input', updateStarSelection);
    }
    
    // Inicializa estado do botão
    updateStarSelection();
});