<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CineMatch - Administração de Filmes</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.${pageContext.request.contextPath}/assets/css/">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/adm_filmes.css">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="logo">
            <img src="${pageContext.request.contextPath}/assets/img//logo.png" class="logo-desktop" alt="Cinematch Logo">
        </div>

        <!-- MENU DESKTOP -->
        <nav class="nav-desktop">
            <a href="dashboard.htm">DASHBOARD</a>
            <a href="adm_usuario.htm">USUÁRIOS</a>
            <a href="adm_filmes.htm" id="selecionado">FILMES</a>

            
        </nav>
    </header>

    <!-- Main Content -->
    <div class="container">
        <!-- Search Bar -->
        <div class="search-container">
            <div class="search-wrapper">
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" 
                       id="searchInput" 
                       class="search-input" 
                       placeholder="Busca por filmes..."
                       value="">
            </div>
            <button class="btn-add" onclick="novoFilme()" title="Adicionar Novo Filme">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>

        <!-- Filter Section -->
        <div class="filter-section">
            <div class="filter-label">FILTRAR POR</div>
            <div class="filter-dropdown">
                <select id="filterSelect" onchange="aplicarFiltro()">
                    <option value="todos">Todos</option>
                    <option value="data_recente">Data de Lançamento (Recente)</option>
                    <option value="data_antiga">Data de Lançamento (Antiga)</option>
                    <option value="avaliacao_maior">Avaliação (Maior para Menor)</option>
                    <option value="avaliacao_menor">Avaliação (Menor para Maior)</option>
                    <option value="titulo_az">Título (A-Z)</option>
                    <option value="titulo_za">Título (Z-A)</option>
                </select>
            </div>
        </div>

        <!-- Movie List -->
        <div class="movie-list" id="movieList">
            
            <div class="movie-row">
                <div class="movie-number"></div>
                
                <div class="movie-info">
                    <div class="movie-title"></div>
                    <div class="movie-details">
                        <span> | </span>
                        <span>Direção: </span>
                        <span>País: </span>
                    </div>
                </div>

                <div class="movie-rating">
                    <i class="fa-solid fa-star"></i>
                    <span></span>
                </div>

                <div class="movie-actions">
                    <div class="action-icon icon-view" 
                         title="Visualizar" 
                         onclick="visualizarFilme()">
                        <i class="fa-solid fa-eye"></i>
                    </div>
                    <div class="action-icon icon-edit" 
                         title="Editar" 
                         onclick="editarFilme()">
                        <i class="fa-solid fa-pen"></i>
                    </div>
                    <div class="action-icon icon-delete" 
                         title="Excluir" 
                         onclick="excluirFilme(, '')">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <!-- Modal de detalhes -->
    <div id="modalDetalhes" class="modal">
        <div class="modal-content">
            <span class="close" onclick="fecharModal()">&times;</span>
            <div id="modalBody"></div>
        </div>
    </div>

    <!-- Modal de Edição -->
    <div id="modalEdit" class="modal">
        <div class="modal-content modal-edit">
            <div class="modal-header">
                <h2 id="modalEditTitulo">EDITAR FILME</h2>
                <div class="modal-header-actions">
                    <button class="btn-icon" onclick="fecharModalEdit()" title="Fechar">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <button class="btn-icon" onclick="excluirFilmeModal()" title="Excluir">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="btn-save" onclick="salvarFilme()">SALVAR</button>
                </div>
            </div>
            
            <div class="modal-body">
                <div class="movie-edit-container">
                    <div class="movie-poster">
                        <img id="posterPreview" src="https://via.placeholder.com/200x300/3498db/ffffff?text=Poster" alt="Poster">
                        <button type="button" class="poster-edit-btn" onclick="document.getElementById('foto_filme_folder').click()">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <input type="file" id="foto_filme_folder" name="foto_filme_folder" accept="image/*" style="display:none" onchange="previewPoster(event)">
                    </div>
                    
                    <div class="movie-info-edit">
                        <form id="formFilme">
                            <input type="hidden" id="id_filme" name="id_filme">
                            
                            <div class="form-group-edit">
                                <label>Nome do Filme</label>
                                <input type="text" id="nome_filme" name="nome_filme" required>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group-edit">
                                    <label>Data de Lançamento</label>
                                    <input type="date" id="lancamento" name="lancamento" required>
                                </div>
                                <div class="form-group-edit">
                                    <label>Classificação</label>
                                    <select id="classificacao" name="classificacao">
                                        <option value="0">Livre</option>
                                        <option value="10">10 anos</option>
                                        <option value="12">12 anos</option>
                                        <option value="14">14 anos</option>
                                        <option value="16">16 anos</option>
                                        <option value="18">18 anos</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group-edit">
                                    <label>Nacionalidade</label>
                                    <input type="text" id="nacionalidade" name="nacionalidade" required>
                                </div>
                                <div class="form-group-edit">
                                    <label>Direção</label>
                                    <input type="text" id="diretor" name="diretor" required>
                                </div>
                            </div>
                            
                            <div class="form-group-edit">
                                <label>Orçamento (USD)</label>
                                <input type="number" id="orcamento" name="orcamento" required>
                            </div>
                            
                            <div class="form-group-edit">
                                <label>Trailer (URL)</label>
                                <input type="text" id="trailer" name="trailer" placeholder="videos/trailer.mp4">
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="reviews-section">
                    <h3>Avaliações</h3>
                    <div class="reviews-grid" id="reviewsGrid">
                        <!-- Avaliações serão carregadas aqui -->
                    </div>
                    <button class="btn-avaliacoes" onclick="verTodasAvaliacoes()">VER TODAS AVALIAÇÕES</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Dados dos filmes do PHP
        const filmesData = ;

        // Pesquisa em tempo real
        const searchInput = document.getElementById('searchInput');
        let searchTimeout;

        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const busca = e.target.value;
                window.location.href = `adm_filmes.htm?busca=${encodeURIComponent(busca)}&status=`;
            }, 500);
        });

        // Aplicar filtro
        function aplicarFiltro() {
            const filtro = document.getElementById('filterSelect').value;
            const busca = document.getElementById('searchInput').value;
            window.location.href = `adm_filmes.htm?filtro=${filtro}&busca=${encodeURIComponent(busca)}`;
        }

        // Visualizar filme
        function visualizarFilme(id) {
            const filme = filmesData.find(f => f.ID_Filme == id);
            if (filme) {
                const modalBody = document.getElementById('modalBody');
                modalBody.innerHTML = `
                    <h2>${filme.nome_filme}</h2>
                    <p><strong>ID:</strong> ${filme.ID_Filme}</p>
                    <p><strong>Diretor:</strong> ${filme.diretor_principal}</p>
                    <p><strong>Data de Lançamento:</strong> </p>
                    <p><strong>Gêneros:</strong> ${filme.generos || 'Não informado'}</p>
                    <p><strong>Nacionalidade:</strong> ${filme.nacionalidade}</p>
                    <p><strong>Classificação:</strong> ${filme.classificacao} anos</p>
                    <p><strong>Orçamento:</strong> $${filme.orcamento.toLocaleString()}</p>
                    <p><strong>Avaliação:</strong> ${parseFloat(filme.avaliacao_media).toFixed(1)} ?</p>
                `;
                document.getElementById('modalDetalhes').style.display = 'block';
            }
        }

        // Editar filme
        function editarFilme(id) {
            const filme = filmesData.find(f => f.ID_Filme == id);
            if (filme) {
                document.getElementById('id_filme').value = filme.ID_Filme;
                document.getElementById('nome_filme').value = filme.nome_filme;
                document.getElementById('lancamento').value = filme.lancamento;
                document.getElementById('classificacao').value = filme.classificacao;
                document.getElementById('nacionalidade').value = filme.nacionalidade;
                document.getElementById('diretor').value = filme.diretor_principal;
                document.getElementById('orcamento').value = filme.orcamento;
                document.getElementById('modalEditTitulo').textContent = filme.nome_filme;
                
                // Carregar foto do filme
                const posterPreview = document.getElementById('posterPreview');
                if (filme.foto_filme_folder) {
                    posterPreview.src = filme.foto_filme_folder;
                } else {
                    posterPreview.src = 'https://via.placeholder.com/200x300/3498db/ffffff?text=Sem+Poster';
                }
                
                // Carregar avaliações
                carregarAvaliacoes(id);
                
                document.getElementById('modalEdit').style.display = 'block';
            }
        }
        
        // Preview do poster
        function previewPoster(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('posterPreview').src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        }
        
        // Carregar avaliações do filme
        function carregarAvaliacoes(idFilme) {
            // fetch removido;
                    if (data.length > 0) {
                        reviewsGrid.innerHTML = data.slice(0, 3).map(av => `
                            <div class="review-card">
                                <div class="review-header">
                                    <div class="review-user">
                                        <div class="review-avatar"></div>
                                        <div class="review-stars">${'?'.repeat(av.estrelas)}${'?'.repeat(5-av.estrelas)}</div>
                                    </div>
                                    <div class="review-actions">
                                        <button title="Editar"><i class="fa-solid fa-pen"></i></button>
                                        <button title="Excluir" onclick="excluirAvaliacao(${av.ID_Avaliacao})"><i class="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                                <div class="review-text">${av.resenha || 'Sem comentário'}</div>
                                <div style="color: rgba(255,255,255,0.5); font-size: 11px;">Escrita por ${av.nome_perfil} em</div>
                            </div>
                        `).join('');
                    } else {
                        reviewsGrid.innerHTML = '<p style="color: rgba(255,255,255,0.6);">Nenhuma avaliação ainda.</p>';
                    }
                })
                .catch(error => {
                    console.error('Erro ao carregar avaliações:', error);
                    document.getElementById('reviewsGrid').innerHTML = '<p style="color: rgba(255,255,255,0.6);">Erro ao carregar avaliações.</p>';
                });
        }
        
        // Ver todas avaliações
        function verTodasAvaliacoes() {
            const idFilme = document.getElementById('id_filme').value;
            window.open(`avaliacoes.htm?id_filme=${idFilme}`, '_blank');
        }
        
        // Excluir avaliação
        function excluirAvaliacao(idAvaliacao) {
            if (confirm('Deseja realmente excluir esta avaliação?')) {
                const formData = new FormData();
                formData.append('acao', 'excluir_avaliacao');
                formData.append('id_avaliacao', idAvaliacao);

                // fetch removido;.value;
                        carregarAvaliacoes(idFilme);
                        alert(data.mensagem);
                    } else {
                        alert(data.mensagem);
                    }
                });
            }
        }
        
        // Excluir filme do modal
        function excluirFilmeModal() {
            const idFilme = document.getElementById('id_filme').value;
            const nomeFilme = document.getElementById('nome_filme').value;
            excluirFilme(idFilme, nomeFilme);
        }

        // Novo filme
        function novoFilme() {
            document.getElementById('formFilme').reset();
            document.getElementById('id_filme').value = '0';
            document.getElementById('modalEditTitulo').textContent = 'NOVO FILME';
            document.getElementById('modalEdit').style.display = 'block';
        }

        // Salvar filme
        function salvarFilme() {
            const form = document.getElementById('formFilme');
            const formData = new FormData(form);
            formData.append('acao', 'salvar');

            // fetch removido;
                    window.location.reload();
                } else {
                    alert(data.mensagem);
                }
            })
            .catch(error => {
                alert('Erro ao salvar filme');
                console.error(error);
            });
        }

        // Excluir filme
        function excluirFilme(id, titulo) {
            if (confirm(`Deseja realmente EXCLUIR PERMANENTEMENTE o filme "${titulo}"?\n\nEsta ação não pode ser desfeita!`)) {
                const formData = new FormData();
                formData.append('acao', 'excluir');
                formData.append('id_filme', id);

                // fetch removido;
                        window.location.reload();
                    } else {
                        alert(data.mensagem);
                    }
                })
                .catch(error => {
                    alert('Erro ao excluir filme');
                    console.error(error);
                });
            }
        }

        // Fechar modais
        function fecharModal() {
            document.getElementById('modalDetalhes').style.display = 'none';
        }

        function fecharModalEdit() {
            document.getElementById('modalEdit').style.display = 'none';
        }

        // Fechar modal ao clicar fora
        window.onclick = function(event) {
            const modal = document.getElementById('modalDetalhes');
            const modalEdit = document.getElementById('modalEdit');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
            if (event.target == modalEdit) {
                modalEdit.style.display = 'none';
            }
        }
    </script>
</body>
</html>
