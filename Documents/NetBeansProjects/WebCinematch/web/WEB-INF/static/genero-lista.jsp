

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> - Cinematch</title>

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/genero-lista.css">
</head>

<body>
  <div class="fundo"></div>

  <!-- HEADER -->
  <header>
    <div class="logo">
      <a href="home.htm">
        <img src="${pageContext.request.contextPath}/assets/img/logo.png" class="logo-desktop" alt="Cinematch Logo">
        <img src="${pageContext.request.contextPath}/assets/img/logo_simbolo.png" class="logo-mobile" alt="Cinematch Logo Mobile">
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
          <img src="" alt="Perfil" class="profile">
        </a>
      </div>
    </nav>
  </header>

  <!-- CONTEÚDO -->
  <main>
    <div class="breadcrumb">
      <a href="genero.htm">Gêneros</a> 
      <span>/</span> 
      <span></span>
    </div>

    <h2 class="genero-titulo">Filmes de </h2>
    
    <p style="color: #b5ceff; margin-bottom: 20px; text-align: center;">
       filme encontrado
    </p>

    <div class="filmes-grid">
      
        
          <div class="filme-card">
            <a href="elenco.htm?id=">
              <img src="" 
                   alt=""
                   onerror="this.src='${pageContext.request.contextPath}/assets/img/placeholder-filme.jpg'">
              <div class="filme-info">
                <h3></h3>
                <div class="rating">
                  
                  
                    <span></span>
                    
                      <i class="fa fa-star"></i>
                    
                    
                      <i class="fa fa-star-half-alt"></i>
                    
                    
                      <i class="far fa-star"></i>
                    
                  
                    <span style="color: #999;">Sem avaliações</span>
                  
                </div>
              </div>
            </a>
          </div>
        
      
        <p style="grid-column: 1/-1; text-align: center; color: #b5ceff; margin-top: 40px;">
          Nenhum filme encontrado neste gênero.
        </p>
      
    </div>
  </main>

  <!-- FOOTER -->
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