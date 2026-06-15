

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home - Cinematch</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/home.css">
</head>

<body>
  <div class="fundo"></div>

  <header>
    <div class="logo">
      <img src="${pageContext.request.contextPath}/assets/img/logo.png" class="logo-desktop" alt="Cinematch Logo">
      <img src="${pageContext.request.contextPath}/assets/img/logo_simbolo.png" class="logo-mobile" alt="Cinematch Logo Mobile" href="home.htm">
    </div>

    <!-- BOTÃO MENU HAMBÚRGUER -->
    <div class="menu-toggle" id="menuToggle">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- MENU MOBILE -->
    <nav class="nav-mobile" id="mobileMenu">
      <a href="home.htm" id="selecionado">HOME</a>
      <a href="genero.htm">GÊNEROS</a>
      <a href="historico.htm">HISTÓRICO</a>
      <a href="pesquisar.htm" >PESQUISAR</a>

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
      <a href="home.htm" id="selecionado">HOME</a>
      <a href="genero.htm">GÊNEROS</a>
      <a href="historico.htm">HISTÓRICO</a>

      <div class="icons icons-desktop">
        <i class="fa-solid fa-magnifying-glass" onclick="window.location.href='pesquisar.htm'"></i>
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
    
    <section class="highlight" id="highlightSection">
      <div class="movie-poster" style="cursor: pointer;" onclick="window.location.href='elenco.htm?id='">
        <img 
          id="bannerImage"
          src="" 
          alt="Banner do filme"
          class="banner-desktop">
        
        <img 
          id="posterImage"
          src="" 
          alt="Poster do filme"
          class="poster-mobile">
      </div>
      
      <div class="movie-info">
        <h2 id="movieTitle"></h2>
        <p id="movieDescription">
          
        </p>
        <div class="rating" id="movieRating">
          
          <span></span>
          
            <i class="fa fa-star"></i>
          
          
            <i class="fa fa-star-half-alt"></i>
          
        </div>
        <button class="btn-info" id="btnMaisInfo">MAIS INFORMAÇÕES</button>
        <div class="controls">
          <i class="fa fa-arrow-left" onclick="changeHighlight(-1)"></i>
          <i class="fa fa-arrow-right" onclick="changeHighlight(1)"></i>
        </div>
      </div>
    </section>
    

    <!-- Carrossel 1 -->
    
    <section class="carousel-section">
      <h3>PRINCIPAIS RECOMENDAÇÕES PARA VOCÊ</h3>
      <div class="carousel-container">
        <button class="carousel-btn prev" onclick="scrollCarousel('carousel1', -1)">
          <i class="fa fa-chevron-left"></i>
        </button>
        <div class="carousel-wrapper">
          <div class="carousel-track" id="carousel1">
            
              <img src="" 
                   alt=""
                   style="cursor: pointer;"
                   onclick="window.location.href='elenco.htm?id='">
            
          </div>
        </div>
        <button class="carousel-btn next" onclick="scrollCarousel('carousel1', 1)">
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </section>
    

    <!-- Carrossel 2 -->
    
    <section class="carousel-section">
      <h3>EM ALTA</h3>
      <div class="carousel-container">
        <button class="carousel-btn prev" onclick="scrollCarousel('carousel2', -1)">
          <i class="fa fa-chevron-left"></i>
        </button>
        <div class="carousel-wrapper">
          <div class="carousel-track" id="carousel2">
            
              <img src="" 
                   alt=""
                   style="cursor: pointer;"
                   onclick="window.location.href='elenco.htm?id='">
            
          </div>
        </div>
        <button class="carousel-btn next" onclick="scrollCarousel('carousel2', 1)">
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </section>
    

    <!-- Carrossel 3 -->
    
    <section class="carousel-section">
      <h3>COMÉDIAS ROMÂNTICAS</h3>
      <div class="carousel-container">
        <button class="carousel-btn prev" onclick="scrollCarousel('carousel3', -1)">
          <i class="fa fa-chevron-left"></i>
        </button>
        <div class="carousel-wrapper">
          <div class="carousel-track" id="carousel3">
            
              <img src="" 
                   alt=""
                   style="cursor: pointer;"
                   onclick="window.location.href='elenco.htm?id='">
            
          </div>
        </div>
        <button class="carousel-btn next" onclick="scrollCarousel('carousel3', 1)">
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </section>
    

    <!-- Carrossel 4 -->
    
    <section class="carousel-section">
      <h3>AÇÃO E AVENTURA</h3>
      <div class="carousel-container">
        <button class="carousel-btn prev" onclick="scrollCarousel('carousel4', -1)">
          <i class="fa fa-chevron-left"></i>
        </button>
        <div class="carousel-wrapper">
          <div class="carousel-track" id="carousel4">
            
              <img src="" 
                   alt=""
                   style="cursor: pointer;"
                   onclick="window.location.href='elenco.htm?id='">
            
          </div>
        </div>
        <button class="carousel-btn next" onclick="scrollCarousel('carousel4', 1)">
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </section>
    
  </main>

  <footer class="footer">
    <div class="footer-top">
      <img src="${pageContext.request.contextPath}/assets/img/logo.png" alt="Logo Cinematch" class="footer-logo">
    </div>
  
    <div class="footer-links">
      <a href="#">ENVIE UM COMENTÁRIO</a>
      <a href="#">HELP</a>
      <a href="#">TERMOS DE PRIVACIDADE</a>
    </div>
  
    <div class="footer-info">
      <p>
        CineMatch Serviços de avaliações do Brasil Ltda. | CNPJ 00.000.000/0001-03
      </p>
      <p>
        <a href="#">Condições de Uso</a> |
        <a href="#">Notificação de Privacidade</a> |
        <a href="#">Cookies</a>
      </p>
      <p>© 2025 Cinematch.com</p>
    </div>
  </footer>

  <script>
    // Dados dos filmes em destaque vindos do PHP
    const highlightMovies = ;

    let currentHighlightIndex = 0;

    // Função para mudar o filme em destaque
    function changeHighlight(direction) {
      if (highlightMovies.length === 0) return;
      
      currentHighlightIndex += direction;
      
      // Loop circular
      if (currentHighlightIndex < 0) {
        currentHighlightIndex = highlightMovies.length - 1;
      } else if (currentHighlightIndex >= highlightMovies.length) {
        currentHighlightIndex = 0;
      }

      const movie = highlightMovies[currentHighlightIndex];
      
      // Atualizar informações do filme
      document.getElementById('movieTitle').textContent = movie.title;
      document.getElementById('movieDescription').textContent = movie.description;
      
      // Atualizar rating
      const ratingDiv = document.getElementById('movieRating');
      const fullStars = Math.floor(movie.stars);
      const hasHalfStar = movie.stars % 1 !== 0;
      
      let starsHTM = `<span>${movie.rating}</span>`;
      for (let i = 0; i < fullStars; i++) {
        starsHTM += '<i class="fa fa-star"></i>';
      }
      if (hasHalfStar) {
        starsHTM += '<i class="fa fa-star-half-alt"></i>';
      }
      ratingDiv.innerHTM = starsHTM;
      
      // Atualizar imagens
      document.getElementById('bannerImage').src = movie.banner;
      document.getElementById('posterImage').src = movie.poster;
      
      // Atualizar link do poster
      const posterDiv = document.querySelector('.movie-poster');
      posterDiv.setAttribute('onclick', `window.location.href='elenco.htm?id=${movie.id}'`);
      
      // Atualizar botão "Mais Informações"
      const btnMaisInfo = document.getElementById('btnMaisInfo');
      btnMaisInfo.setAttribute('onclick', `window.location.href='elenco.htm?id=${movie.id}'`);
    }

    // Adicionar evento ao botão "Mais Informações"
    document.addEventListener('DOMContentLoaded', function() {
      const btnMaisInfo = document.getElementById('btnMaisInfo');
      if (btnMaisInfo && highlightMovies.length > 0) {
        btnMaisInfo.addEventListener('click', function() {
          window.location.href = `elenco.htm?id=${highlightMovies[currentHighlightIndex].id}`;
        });
      }

      // Settings dropdown Desktop
      const settingsIconDesktop = document.getElementById('settingsIconDesktop');
      const settingsDropdownDesktop = document.getElementById('settingsDropdownDesktop');
      
      if (settingsIconDesktop) {
        settingsIconDesktop.addEventListener('click', function(e) {
          e.stopPropagation();
          settingsDropdownDesktop.classList.toggle('active');
        });
      }

      // Fechar dropdowns ao clicar fora
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

    // Função para os carrosseis
    function scrollCarousel(carouselId, direction) {
      const track = document.getElementById(carouselId);
      const itemWidth = 215; // tamanho do card
      const totalItems = track.children.length;

      // Posição atual
      let currentTransform = track.style.transform || "translateX(0px)";
      let currentX = parseInt(currentTransform.replace("translateX(", "").replace("px)", ""));

      // Move
      let newX = currentX + direction * -itemWidth;

      // Largura total dos itens originais (metade, pois duplicamos)
      const realItemCount = totalItems / 2;
      const maxOffset = -(realItemCount * itemWidth);

      // --- LOOP INFINITO REAL ---

      // Se passar do final ? teleporta para o início da duplicata
      if (newX <= maxOffset) {
        newX = 0;
      }

      // Se voltar antes do início ? teleporta para a duplicata do final
      if (newX > 0) {
        newX = maxOffset;
      }

      track.style.transition = "transform 0.3s ease";
      track.style.transform = `translateX(${newX}px)`;
    }

    // Menu mobile toggle
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
      });
    }
  </script>
</body>
</html>