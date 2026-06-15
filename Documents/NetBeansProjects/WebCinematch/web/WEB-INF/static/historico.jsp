

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Histórico - Cinematch</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/historico.css">
</head>

<body>
  <div class="fundo"></div>

  <header>
    <div class="logo">
      <a href="home.htm">
        <img src="${pageContext.request.contextPath}/assets/img/logo.png" class="logo-desktop" alt="Cinematch Logo">
        <img src="${pageContext.request.contextPath}/assets/img/logo_simbolo.png" class="logo-mobile" alt="Cinematch Logo Mobile">
      </a>
    </div>

    <div class="menu-toggle" id="menuToggle">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- MENU MOBILE -->
    <nav class="nav-mobile" id="mobileMenu">
      <a href="home.htm">HOME</a>
      <a href="genero.htm">GÊNEROS</a>
      <a href="historico.htm" id="selecionado">HISTÓRICO</a>
     <a href="pesquisar.htm">PESQUISAR</a>

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
      <a href="historico.htm" id="selecionado">HISTÓRICO</a>

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
          <img src="" 
               alt="Perfil de " 
               class="profile">
        </a>
      </div>
    </nav>
  </header>

  <main>
    <div class="history-container">
      
      <!-- FILMES ASSISTIDOS -->
      <section class="history-section">
        <h2><i class="fa fa-history"></i> FILMES ASSISTIDOS</h2>
        
        
          <div class="movies-grid">
            
              <div class="movie-card" onclick="window.location.href='elenco.htm?id='">
                <img src="" 
                     alt="">
                <div class="movie-card-info">
                  <div class="movie-card-title"></div>
                  <div class="movie-card-meta">
                    
                      <div class="movie-card-rating">
                        <i class="fa fa-star"></i>
                        <span></span>
                      </div>
                    
                      <div class="movie-card-rating">
                        <span style="color: #8a9ec1;">Não avaliado</span>
                      </div>
                    

                    <div class="movie-card-date">
                      
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        
          <div class="empty-state">
            <i class="fa fa-film"></i>
            <h3>Nenhum filme assistido ainda</h3>
            <p>Comece a assistir filmes para criar seu histórico!</p>
          </div>
        
      </section>

      <!-- FILMES FAVORITOS -->
      
    </div>
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
    // Menu mobile toggle
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
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
  </script>

</body>
</html>