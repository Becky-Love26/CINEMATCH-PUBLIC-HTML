<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CineMatch - </title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.${pageContext.request.contextPath}/assets/css/">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/elenco.css">
</head>
<body>
    <a href="home.htm" class="back-btn">
        <img src="${pageContext.request.contextPath}/assets/img//voltar.png" alt="Voltar">
    </a>
    <div class="fundo"></div>

   <header>
    <div class="logo">
      <img src="${pageContext.request.contextPath}/assets/img//logo.png" class="logo-desktop" alt="Cinematch Logo">
      <img src="${pageContext.request.contextPath}/assets/img//logo_simbolo.png" class="logo-mobile" alt="Cinematch Logo Mobile" href="home.htm">
    </div>

    <!-- BOTÃO MENU HAMBÚRGUER -->
    <div class="menu-toggle" id="menuToggle">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- MENU MOBILE -->
    <nav class="nav-mobile" id="mobileMenu">
      <a href="home.htm" >HOME</a>
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
       <img src="" alt="Perfil de " class="profile">
       </a>
      </div>
    </nav>
  </header>


    <div class="movie-container">
        <div class="movie-header">
            <div class="movie-poster">
                <img src="" alt="">
            </div>
            <div class="movie-details">
                <h1><b></b></h1>
                <p></p>
                
                <div class="movie-meta">
                    <div><strong></strong> | </div>
                    <div><strong>Direção:</strong> </div>
                    <div><strong>Classificação:</strong> </div>
                    <div><strong>Nacionalidade:</strong> </div>
                </div>

                <div class="action-buttons">
                    <button class="btn-primary" onclick="marcarComoAssistido()">ASSISTIR FILME</button>
                    <button class="btn-primary" onclick="marcarComoAssistido()">ASSISTIR TRAILER</button>
                </div>
            </div>
        </div>

        <!-- Cast Section -->
        <div class="cast-section">
            <h3><b>ELENCO</b></h3>
            <div class="cast-grid">
                
                <div class="cast-member">
                    <div class="cast-photo">
                        <img src="" alt="">
                    </div>
                    <div class="cast-name"></div>
                    <div class="cast-role"></div>
                </div>
                
            </div>
        </div>

        <!-- Ratings Section -->
        <div class="ratings-section">
            <div class="ratings-header">
                <h2 class="ratings-title">AVALIAÇÕES</h2>
                <div class="ratings-stats">
                    <div class="rating-bars">
                        
                        <div class="rating-bar-row">
                            <span class="rating-label"></span>
                            <div class="rating-bar"><div class="rating-bar-fill" style="width: 10%;"></div></div>
                        </div>
                        
                    </div>
                    <div class="rating-score">
                        <div class="score-number"></div>
                        <div class="score-stars">
                            
                        </div>
                        <div class="score-count"> NOTAS</div>
                    </div>
                </div>
            </div>

            <!-- Reviews -->
            <div class="reviews-grid">
                
                <div class="review-card" onclick="openModal()">
                    <div class="review-header">
                        <div class="review-avatar" style="background-image: url('');"></div>
                        <div class="review-stars">
                            
                            <i class="fa fa-star"></i>
                            
                        </div>
                    </div>
                    <div class="review-text">
                        
                    </div>
                    <span class="review-more"><u>LER MAIS</u></span>
                </div>
                
            </div>

            <button class="more-reviews-btn" onclick="openSidebar()">MAIS AVALIAÇÕES</button>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal-overlay" id="modalOverlay" onclick="closeModal(event)">
        <div class="modal" onclick="event.stopPropagation()">
            <button class="modal-close" onclick="closeModal()">×</button>
            
            <div class="modal-header">
                <div class="modal-avatar" id="modalAvatar"></div>
                <div class="modal-stars" id="modalStars"></div>
            </div>

            <div class="modal-content" id="modalContent"></div>
            <div class="modal-meta" id="modalMeta"></div>
        </div>
    </div>

    <!-- Sidebar de Avaliações -->
    <div class="sidebar-overlay" id="sidebarOverlay" onclick="closeSidebar()"></div>
    <div class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <h2 class="sidebar-title"></h2>
            <button class="sidebar-close" onclick="closeSidebar()">×</button>
        </div>
        
        <div class="sidebar-content">
            <!-- Input de Avaliação -->
            <form method="POST" action="">
                <div class="sidebar-rating-input">
                    <p class="rating-input-subtitle">VOCÊ ASSISTIU ?</p>
                    <textarea 
                        name="resenha"
                        id="newReviewText" 
                        class="rating-input-field" 
                        placeholder="Deixe sua avaliação aqui... Compartilhe sua opinião sobre o filme!"
                        required
                    ></textarea>
                    <div class="rating-stars-selector" id="newReviewStars">
                        
                        <span class="star" data-rating=""><i class="fa fa-star"></i></span>
                        
                    </div>
                    <input type="hidden" name="estrelas" id="estrelas_input" value="0">
                    <button type="submit" name="salvar_avaliacao" class="rating-submit-btn" id="submitReviewBtn">
                        PUBLICAR AVALIAÇÃO
                    </button>
                </div>
            </form>

            <!-- Reviews -->
            <div id="sidebarReviews">
                
                <div class="sidebar-review " id="review-">
                    
                    <span class="user-badge">MINHA AVALIAÇÃO</span>
                    
                    
                    <div class="sidebar-review-header">
                        <div class="sidebar-review-avatar" style="background-image: url('');"></div>
                        <div class="sidebar-review-stars">
                            
                            <i class="fa fa-star"></i>
                            
                        </div>
                    </div>
                    <div class="sidebar-review-text"></div>
                    <div class="sidebar-review-meta">
                        <strong></strong> ? 
                    </div>
                    
                    
                    <div class="sidebar-review-actions">
                        <button class="sidebar-review-btn sidebar-btn-delete" onclick="deleteReview()">
                            Excluir
                        </button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-top">
            <img src="${pageContext.request.contextPath}/assets/img//logo.png" alt="Logo Cinematch" class="footer-logo">
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
        // Array com dados das avaliações para o modal
        const reviews = ;
        
        function marcarComoAssistido() {
            // Fazer requisição AJAX
            // fetch removido;
                }
            })
            .catch(error => {
                console.error('Erro:', error);
            });
        }
        
        // ? NOVA FUNÇÃO: Deletar avaliação
        function deleteReview(idAvaliacao) {
            if (!confirm('?? Tem certeza que deseja excluir sua avaliação?')) {
                return;
            }
            
            // Fazer requisição AJAX para deletar
            // fetch removido;
                    // Remover o elemento da tela
                    const reviewElement = document.getElementById('review-' + idAvaliacao);
                    if (reviewElement) {
                        reviewElement.remove();
                    }
                    // Recarregar a página para atualizar estatísticas
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                } else {
                    alert('? ' + data.message);
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('? Erro ao excluir avaliação.');
            });
        }
                
        function openModal(index) {
            const modal = document.getElementById('modalOverlay');
            const review = reviews[index];
            
            document.getElementById('modalAvatar').style.backgroundImage = `url('${review.foto_perfil}')`;
            
            let stars = '';
            for (let i = 0; i < review.estrelas; i++) {
                stars += '<i class="fa fa-star"></i>';
            }
            document.getElementById('modalStars').innerHTML = stars;
            document.getElementById('modalContent').innerHTML = `<p>${review.resenha}</p>`;
            document.getElementById('modalMeta').innerHTML = `<strong>${review.nome_perfil}</strong> ? ${review.data_avaliacao}`;
            
            modal.classList.add('active');
        }
        
        function closeModal(event) {
            const modal = document.getElementById('modalOverlay');
            if (!event || event.target.id === 'modalOverlay' || event.target.classList.contains('modal-close')) {
                modal.classList.remove('active');
            }
        }
        
        function openSidebar() {
            document.getElementById('sidebar').classList.add('active');
            document.getElementById('sidebarOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeSidebar() {
            document.getElementById('sidebar').classList.remove('active');
            document.getElementById('sidebarOverlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Sistema de estrelas
        let selectedRating = 0;
        const stars = document.querySelectorAll('#newReviewStars .star');
        
        stars.forEach(star => {
            star.addEventListener('click', function() {
                selectedRating = parseInt(this.dataset.rating);
                document.getElementById('estrelas_input').value = selectedRating;
                
                stars.forEach((s, index) => {
                    if (index < selectedRating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
        });
        
        // Menu toggle
        const menuToggle = document.getElementById("menuToggle");
        const mobileMenu = document.getElementById("mobileMenu");

        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

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
        
        // Fechar com ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
                closeSidebar();
            }
        });
    </script>
</body>
</html>