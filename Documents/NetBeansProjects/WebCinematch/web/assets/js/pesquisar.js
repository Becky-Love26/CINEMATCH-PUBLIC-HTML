// ==================== DADOS SIMULADOS ====================
// Array com filmes e séries de exemplo (em produção virá do PHP)
const database = [
    {
      id: 1,
      title: "Duna: Parte 2",
      type: "filme",
      genre: ["Ficção Científica", "Aventura"],
      rating: 4.7,
      year: 2024,
      poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
    },
    {
      id: 2,
      title: "Oppenheimer",
      type: "filme",
      genre: ["Drama", "História"],
      rating: 4.8,
      year: 2023,
      poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
    },
    {
      id: 3,
      title: "Breaking Bad",
      type: "serie",
      genre: ["Drama", "Crime"],
      rating: 4.9,
      year: 2008,
      poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
    },
    {
      id: 4,
      title: "The Last of Us",
      type: "serie",
      genre: ["Drama", "Ficção Científica"],
      rating: 4.6,
      year: 2023,
      poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
    },
    {
      id: 5,
      title: "Barbie",
      type: "filme",
      genre: ["Comédia", "Aventura"],
      rating: 4.3,
      year: 2023,
      poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
    },
    {
      id: 6,
      title: "Guardiões da Galáxia Vol. 3",
      type: "filme",
      genre: ["Ação", "Ficção Científica"],
      rating: 4.5,
      year: 2023,
      poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"
    },
    {
      id: 7,
      title: "Succession",
      type: "serie",
      genre: ["Drama"],
      rating: 4.7,
      year: 2018,
      poster: "https://image.tmdb.org/t/p/w500/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg"
    },
    {
      id: 8,
      title: "John Wick 4",
      type: "filme",
      genre: ["Ação", "Suspense"],
      rating: 4.6,
      year: 2023,
      poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
    },
    {
      id: 9,
      title: "The Bear",
      type: "serie",
      genre: ["Drama", "Comédia"],
      rating: 4.8,
      year: 2022,
      poster: "https://image.tmdb.org/t/p/w500/zCbIg5Zz7O5j3Vhv3YYXuYnLIgF.jpg"
    },
    {
      id: 10,
      title: "Missão Impossível 7",
      type: "filme",
      genre: ["Ação", "Suspense"],
      rating: 4.4,
      year: 2023,
      poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
    },
    {
      id: 11,
      title: "Wednesday",
      type: "serie",
      genre: ["Comédia", "Terror"],
      rating: 4.2,
      year: 2022,
      poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"
    },
    {
      id: 12,
      title: "Avatar: O Caminho da Água",
      type: "filme",
      genre: ["Ficção Científica", "Aventura"],
      rating: 4.5,
      year: 2022,
      poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
    },
    {
      id: 13,
      title: "Stranger Things",
      type: "serie",
      genre: ["Ficção Científica", "Terror"],
      rating: 4.7,
      year: 2016,
      poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
    },
    {
      id: 14,
      title: "Top Gun: Maverick",
      type: "filme",
      genre: ["Ação", "Drama"],
      rating: 4.6,
      year: 2022,
      poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
    },
    {
      id: 15,
      title: "House of the Dragon",
      type: "serie",
      genre: ["Drama", "Fantasia"],
      rating: 4.5,
      year: 2022,
      poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg"
    },
    {
      id: 16,
      title: "Homem-Aranha: Através do Aranhaverso",
      type: "filme",
      genre: ["Animação", "Ação"],
      rating: 4.9,
      year: 2023,
      poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
    },
    {
      id: 17,
      title: "The Witcher",
      type: "serie",
      genre: ["Fantasia", "Aventura"],
      rating: 4.3,
      year: 2019,
      poster: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"
    },
    {
      id: 18,
      title: "Elementos",
      type: "filme",
      genre: ["Animação", "Comédia"],
      rating: 4.2,
      year: 2023,
      poster: "https://image.tmdb.org/t/p/w500/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg"
    }
  ];
  
  // ==================== VARIÁVEIS GLOBAIS ====================
  let currentFilter = 'all';
  let searchTimeout = null;
  
  // ==================== ELEMENTOS DOM ====================
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearBtn');
  const resultsSection = document.getElementById('resultsSection');
  const resultsTitle = document.getElementById('resultsTitle');
  const resultsCount = document.getElementById('resultsCount');
  const resultsGrid = document.getElementById('resultsGrid');
  const noResults = document.getElementById('noResults');
  const loading = document.getElementById('loading');
  const suggestionsSection = document.getElementById('suggestionsSection');
  const trendingGrid = document.getElementById('trendingGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const suggestionTags = document.querySelectorAll('.tag');
  
  // ==================== INICIALIZAÇÃO ====================
  document.addEventListener('DOMContentLoaded', () => {
    // Mostrar filmes em tendência inicialmente
    displayTrending();
    
    // Event listeners
    searchInput.addEventListener('input', handleSearch);
    clearBtn.addEventListener('click', clearSearch);
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        handleSearch();
      });
    });
    
    // Menu mobile
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
      });
    }
    
    // Tags de sugestão
    suggestionTags.forEach(tag => {
      tag.addEventListener('click', () => {
        searchInput.value = tag.textContent;
        handleSearch();
      });
    });
  });
  
  // ==================== FUNÇÃO DE BUSCA ====================
  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    // Mostrar/esconder botão de limpar
    if (query.length > 0) {
      clearBtn.classList.add('show');
    } else {
      clearBtn.classList.remove('show');
    }
    
    // Limpar timeout anterior
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    
    // Adicionar delay para simular digitação (debounce)
    searchTimeout = setTimeout(() => {
      if (query.length === 0) {
        // Mostrar sugestões quando não há busca
        showSuggestions();
      } else {
        // Mostrar loading
        showLoading();
        
        // Simular delay de busca (200ms)
        setTimeout(() => {
          performSearch(query);
        }, 200);
      }
    }, 300); // Aguarda 300ms após o usuário parar de digitar
  }
  
  // ==================== REALIZAR BUSCA ====================
  function performSearch(query) {
    let results = database.filter(item => {
      // Filtrar por tipo primeiro
      if (currentFilter !== 'all' && currentFilter !== 'genero') {
        if (item.type !== currentFilter) return false;
      }
      
      // Buscar em título e gêneros
      const titleMatch = item.title.toLowerCase().includes(query);
      const genreMatch = item.genre.some(g => g.toLowerCase().includes(query));
      
      // Se o filtro for gênero, só retornar matches de gênero
      if (currentFilter === 'genero') {
        return genreMatch;
      }
      
      return titleMatch || genreMatch;
    });
    
    displayResults(results, query);
  }
  
  // ==================== EXIBIR RESULTADOS ====================
  function displayResults(results, query) {
    hideLoading();
    hideSuggestions();
    
    resultsSection.style.display = 'block';
    
    if (results.length === 0) {
      resultsTitle.textContent = `Nenhum resultado para "${query}"`;
      resultsCount.textContent = '';
      resultsGrid.innerHTML = '';
      noResults.style.display = 'block';
    } else {
      resultsTitle.textContent = `Resultados para "${query}"`;
      resultsCount.textContent = `${results.length} ${results.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}`;
      noResults.style.display = 'none';
      
      // Renderizar cards
      resultsGrid.innerHTML = results.map(item => createMovieCard(item)).join('');
    }
  }
  
  // ==================== CRIAR CARD DE FILME ====================
  function createMovieCard(item) {
    const stars = generateStars(item.rating);
    
    return `
      <div class="movie-card" onclick="alert('Clicou em: ${item.title}')">
        <img src="${item.poster}" alt="${item.title}" 
             onerror="this.src='https://via.placeholder.com/200x300/133576/ffffff?text=Sem+Imagem'">
        <div class="movie-card-info">
          <div class="movie-card-title">${item.title}</div>
          <div class="movie-card-meta">
            <div class="movie-card-rating">
              <span>${item.rating.toFixed(1)}</span>
              ${stars}
            </div>
            <span class="movie-card-type">${item.type === 'filme' ? 'Filme' : 'Série'}</span>
          </div>
        </div>
      </div>
    `;
  }
  
  // ==================== GERAR ESTRELAS ====================
  function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
      stars += '<i class="fa fa-star"></i>';
    }
    
    if (hasHalfStar && fullStars < 5) {
      stars += '<i class="fa fa-star-half-alt"></i>';
    }
    
    return stars;
  }
  
  // ==================== EXIBIR TENDÊNCIAS ====================
  function displayTrending() {
    // Pegar 6 filmes aleatórios como tendência
    const trending = database
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
    
    trendingGrid.innerHTML = trending.map(item => createMovieCard(item)).join('');
  }
  
  // ==================== LIMPAR BUSCA ====================
  function clearSearch() {
    searchInput.value = '';
    searchInput.focus();
    clearBtn.classList.remove('show');
    showSuggestions();
  }
  
  // ==================== MOSTRAR/ESCONDER ELEMENTOS ====================
  function showLoading() {
    loading.style.display = 'block';
    resultsGrid.innerHTML = '';
    noResults.style.display = 'none';
  }
  
  function hideLoading() {
    loading.style.display = 'none';
  }
  
  function showSuggestions() {
    resultsSection.style.display = 'none';
    suggestionsSection.style.display = 'block';
    resultsTitle.textContent = 'Digite algo para começar a busca';
    resultsCount.textContent = '';
  }
  
  function hideSuggestions() {
    suggestionsSection.style.display = 'none';
  }