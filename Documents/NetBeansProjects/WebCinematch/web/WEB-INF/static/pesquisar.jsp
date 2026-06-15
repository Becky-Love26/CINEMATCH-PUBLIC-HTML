
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pesquisa - Cinematch</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/pesquisar.css">
</head>

<body>
  <div class="fundo"></div>

  <header>
    <div class="logo">
      <a href="home.htm">
        <img src="img/logo.png" class="logo-desktop" alt="Cinematch Logo">
        <img src="img/logo_simbolo.png" class="logo-mobile" alt="Cinematch Logo Mobile">
      </a>
    </div>
    <div class="menu-toggle" id="menuToggle">
      <span></span><span></span><span></span>
    </div>

    <!-- MENU MOBILE -->
    <nav class="nav-mobile" id="mobileMenu">
      <a href="home.htm">HOME</a>
      <a href="genero.htm">GÊNEROS</a>
      <a href="historico.htm">HISTÓRICO</a>
      <a href="pesquisar.htm"id="selecionado" >PESQUISAR</a>

      <div class="profile-section-mobile">
        <a href="alterarPerfil.htm" class="profile-link-mobile">
          <img src="" alt="Perfil" class="profile-mobile">
          <span></span>
        </a>
      </div>

      <div class="menu-options-mobile">
        <a href="alterarPerfil.htm">
          <i class="fa fa-user"></i> Meu Perfil
        </a>
        <a href="escolha_perfil.htm">
          <i class="fa fa-exchange-alt"></i> Trocar Perfil
        </a>
        <a href="index.htm">
          <i class="fa fa-sign-out-alt"></i> Sair
        </a>
      </div>
    </nav>

    <!-- MENU DESKTOP -->
    <nav class="nav-desktop">
      <a href="home.htm">HOME</a>
      <a href="genero.htm">GÊNEROS</a>
      <a href="historico.htm">HISTÓRICO</a>
      <div class="icons icons-desktop">
        <i id="selecionado" class="fa-solid fa-magnifying-glass" onclick="window.location.href='pesquisar.htm'"></i>
        <div class="settings-wrapper">
          <i class="fa fa-cog" id="settingsIconDesktop"></i>
          <div class="settings-dropdown" id="settingsDropdownDesktop">
            <a href="alterarPerfil.htm">
              <i class="fa fa-user"></i> Meu Perfil
            </a>
            <a href="escolha_perfil.htm">
              <i class="fa fa-exchange-alt"></i> Trocar Perfil
            </a>
            <a href="index.htm">
              <i class="fa fa-sign-out-alt"></i> Sair
            </a>
          </div>
        </div>
        <a href="alterarPerfil.htm">
          <img src="" alt="Perfil de " class="profile">
        </a>
      </div>
    </nav>
  </header>

  <main>
    <!-- SEÇÃO DE BUSCA -->
    <section class="search-section">
      <div class="search-container">
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <input 
          type="text" 
          id="searchInput" 
          class="search-input" 
          placeholder="Buscar filmes, gêneros, diretores..."
          autocomplete="off">
        <button class="clear-btn" id="clearBtn">
          <i class="fa-solid fa-times"></i>
        </button>
      </div>
    </section>

    <!-- RESULTADOS DA PESQUISA -->
    <section class="results-section" id="resultsSection">
      <div class="results-header">
        <h2 id="resultsTitle">Digite algo para começar a busca</h2>
        <span id="resultsCount"></span>
      </div>

      <div class="results-grid" id="resultsGrid">
        <!-- Resultados serão inseridos aqui via JavaScript -->
      </div>

      <!-- Mensagem quando não houver resultados -->
      <div class="no-results" id="noResults" style="display: none;">
        <i class="fa-solid fa-film"></i>
        <h3>Nenhum resultado encontrado</h3>
        <p>Tente buscar por outro termo ou explore nossos catálogos</p>
      </div>

      <!-- Loading spinner -->
      <div class="loading" id="loading" style="display: none;">
        <i class="fa-solid fa-spinner fa-spin"></i>
        <p>Buscando...</p>
      </div>
    </section>

    <!-- SUGESTÕES POPULARES (quando não há busca) -->
    <section class="suggestions-section" id="suggestionsSection">
      <h3>BUSCAS POPULARES</h3>
      <div class="suggestions-tags">
        <span class="tag" data-genero="Ação">Ação</span>
        <span class="tag" data-genero="Comédia">Comédia</span>
        <span class="tag" data-genero="Terror">Terror</span>
        <span class="tag" data-genero="Romance">Romance</span>
        <span class="tag" data-genero="Ficção Científica">Ficção Científica</span>
        <span class="tag" data-genero="Animação">Animação</span>
        <span class="tag" data-genero="Drama">Drama</span>
        <span class="tag" data-genero="Suspense">Suspense</span>
      </div>

      <h3 style="margin-top: 40px;">TENDÊNCIAS</h3>
      <div class="trending-grid" id="trendingGrid">
        <!-- Filmes em tendência serão inseridos aqui -->
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-top">
      <img src="img/logo.png" alt="Logo Cinematch" class="footer-logo">
    </div>
  
    <div class="footer-links">
      <a href="#">ENVIE UM COMENTÁRIO</a>
      <a href="#">HELP</a>
      <a href="#">TERMOS DE PRIVACIDADE</a>
    </div>
  
    <div class="footer-info">
      <p>CineMatch Serviços de avaliações do Brasil Ltda. | CNPJ 00.000.000/0001-03</p>
      <p>
        <a href="#">Condições de Uso</a> |
        <a href="#">Notificação de Privacidade</a> |
        <a href="#">Cookies</a>
      </p>
      <p>© 2025 Cinematch.com</p>
    </div>
  </footer>

  <script>
    // Configuração da URL base para as requisições AJAX
    const BASE_URL = 'pesquisar.htm';
    
    // Elementos DOM
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');
    const resultsSection = document.getElementById('resultsSection');
    const suggestionsSection = document.getElementById('suggestionsSection');
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsCount = document.getElementById('resultsCount');
    const resultsGrid = document.getElementById('resultsGrid');
    const noResults = document.getElementById('noResults');
    const loading = document.getElementById('loading');
    const trendingGrid = document.getElementById('trendingGrid');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // Menu Mobile Toggle
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
      });
    }

    // Settings dropdown Desktop
    document.addEventListener('DOMContentLoaded', function() {
      const settingsIconDesktop = document.getElementById('settingsIconDesktop');
      const settingsDropdownDesktop = document.getElementById('settingsDropdownDesktop');
      
      if (settingsIconDesktop) {
        settingsIconDesktop.addEventListener('click', function(e) {
          e.stopPropagation();
          settingsDropdownDesktop.classList.toggle('active');
        });
      }

      // Fechar dropdown ao clicar fora
      document.addEventListener('click', function() {
        if (settingsDropdownDesktop) {
          settingsDropdownDesktop.classList.remove('active');
        }
      });

      // Prevenir que cliques dentro do dropdown o fechem
      if (settingsDropdownDesktop) {
        settingsDropdownDesktop.addEventListener('click', function(e) {
          e.stopPropagation();
        });
      }
    });

    // Carregar tendências ao iniciar a página
    carregarTendencias();

    // Event listener para busca
    let timeoutId;
    searchInput.addEventListener('input', (e) => {
      const termo = e.target.value.trim();
      
      // Mostrar/esconder botão limpar
      if (termo.length > 0) {
        clearBtn.classList.add('show');
      } else {
        clearBtn.classList.remove('show');
        mostrarSugestoes();
        return;
      }

      // Debounce - espera 500ms após usuário parar de digitar
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (termo.length >= 2) {
          buscarFilmes(termo);
        }
      }, 500);
    });

    // Botão limpar
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearBtn.classList.remove('show');
      mostrarSugestoes();
    });

    // Event listener para tags de gênero
    document.querySelectorAll('.tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const genero = tag.getAttribute('data-genero');
        searchInput.value = genero;
        clearBtn.classList.add('show');
        buscarPorGenero(genero);
      });
    });

    // Função para buscar filmes
    async function buscarFilmes(termo) {
      mostrarLoading();
      
      try {
        const response = await // fetch removido;
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          exibirResultados(data.resultados, termo);
        } else {
          exibirMensagemErro(data.message || 'Erro ao buscar filmes');
        }
      } catch (error) {
        console.error('Erro na busca:', error);
        exibirMensagemErro('Erro ao realizar a busca. Tente novamente.');
      }
    }

    // Função para buscar por gênero
    async function buscarPorGenero(genero) {
      mostrarLoading();
      
      try {
        const response = await // fetch removido;
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          exibirResultados(data.resultados, genero);
        } else {
          exibirMensagemErro(data.message || 'Erro ao buscar por gênero');
        }
      } catch (error) {
        console.error('Erro na busca por gênero:', error);
        exibirMensagemErro('Erro ao buscar por gênero. Tente novamente.');
      }
    }

    // Função para carregar tendências
    async function carregarTendencias() {
      try {
        const response = await // fetch removido;
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success && data.tendencias.length > 0) {
          exibirTendencias(data.tendencias);
        }
      } catch (error) {
        console.error('Erro ao carregar tendências:', error);
      }
    }

    // Função para exibir resultados
    function exibirResultados(resultados, termo) {
      esconderLoading();
      suggestionsSection.style.display = 'none';
      resultsSection.style.display = 'block';

      if (resultados.length === 0) {
        resultsTitle.textContent = 'Nenhum resultado encontrado';
        resultsCount.textContent = '';
        resultsGrid.innerHTML = '';
        noResults.style.display = 'flex';
        return;
      }

      noResults.style.display = 'none';
      resultsTitle.textContent = `Resultados para "${termo}"`;
      resultsCount.textContent = `${resultados.length} resultado${resultados.length > 1 ? 's' : ''} encontrado${resultados.length > 1 ? 's' : ''}`;

      resultsGrid.innerHTML = resultados.map(filme => criarCardFilme(filme)).join('');
    }

    // Função para criar card de filme
    function criarCardFilme(filme) {
      const nota = parseFloat(filme.nota_media).toFixed(1);
      const posterUrl = filme.foto_filme_folder || 'img/placeholder.jpg';
      
      return `
        <div class="movie-card" onclick="window.location.href='elenco.htm?id=${filme.id}'">
          <div class="movie-poster">
            <img src="${posterUrl}" alt="${filme.titulo}" onerror="this.src='img/placeholder.jpg'">
            <div class="movie-rating">
              <i class="fa fa-star"></i>
              <span>${nota}</span>
            </div>
          </div>
          <div class="movie-info">
            <h3 class="movie-title">${filme.titulo}</h3>
            <p class="movie-year">${filme.ano_lancamento || 'N/A'}</p>
          </div>
        </div>
      `;
    }

    // Função para exibir tendências
    function exibirTendencias(tendencias) {
      trendingGrid.innerHTML = tendencias.map(filme => criarCardFilme(filme)).join('');
    }

    // Funções auxiliares
    function mostrarLoading() {
      loading.style.display = 'flex';
      resultsGrid.innerHTML = '';
      noResults.style.display = 'none';
    }

    function esconderLoading() {
      loading.style.display = 'none';
    }

    function mostrarSugestoes() {
      resultsSection.style.display = 'none';
      suggestionsSection.style.display = 'block';
      resultsTitle.textContent = 'Digite algo para começar a busca';
      resultsCount.textContent = '';
      resultsGrid.innerHTML = '';
      noResults.style.display = 'none';
    }

    function exibirMensagemErro(mensagem) {
      esconderLoading();
      resultsTitle.textContent = 'Erro';
      resultsCount.textContent = '';
      resultsGrid.innerHTML = `<p style="color: red; text-align: center; width: 100%;">${mensagem}</p>`;
    }
  </script>
</body>
</html>