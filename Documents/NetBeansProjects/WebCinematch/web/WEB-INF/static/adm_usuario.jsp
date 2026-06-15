<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CineMatch - Administração de Usuários</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/adm_usuario.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.${pageContext.request.contextPath}/assets/css/">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
    
    <style>
         /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
        }

        .modal-content {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            margin: 5% auto;
            padding: 30px;
            border-radius: 15px;
            width: 90%;
            max-width: 600px;
            color: white;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .close {
            color: #fff;
            float: right;
            font-size: 32px;
            font-weight: bold;
            cursor: pointer;
            line-height: 20px;
        }

        .close:hover {
            color: #ffc107;
        }

        #modalBody h2 {
            color: #fff;
            margin-bottom: 20px;
            font-size: 24px;
        }

        #modalBody p {
            margin: 12px 0;
            font-size: 15px;
            line-height: 1.6;
        }

        #modalBody strong {
            color: #b5ceff;
            margin-right: 10px;
        }

        /* Modal de Edição */
        .modal-edit {
            max-width: 800px;
            max-height: 85vh;
            overflow-y: auto;
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 25px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        .form-group.full-width {
            grid-column: 1 / -1;
        }

        .form-group label {
            color: #b5ceff;
            font-weight: 600;
            margin-bottom: 8px;
            font-size: 14px;
        }

        .form-group input,
        .form-group select {
            padding: 12px 15px;
            border: 2px solid rgba(181, 206, 255, 0.3);
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 14px;
            font-family: 'Poppins', sans-serif;
            transition: all 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: #ffc107;
            background-color: rgba(255, 255, 255, 0.15);
        }

        .form-group select {
            cursor: pointer;
        }

        .form-group select option {
            background-color: #1e3c72;
            color: white;
        }

        /* Checkbox personalizado para admin */
        .checkbox-group {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 15px;
            background-color: rgba(255, 193, 7, 0.1);
            border: 2px solid rgba(255, 193, 7, 0.3);
            border-radius: 8px;
        }

        .checkbox-group input[type="checkbox"] {
            width: 20px;
            height: 20px;
            cursor: pointer;
            accent-color: #ffc107;
        }

        .checkbox-group label {
            margin: 0 !important;
            cursor: pointer;
            color: #ffc107 !important;
        }

        .form-actions {
            display: flex;
            gap: 15px;
            justify-content: flex-end;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-cancel,
        .btn-save {
            padding: 12px 30px;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 15px;
            cursor: pointer;
            transition: all 0.3s;
            font-family: 'Poppins', sans-serif;
        }

        .btn-cancel {
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
        }

        .btn-cancel:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .btn-save {
            background-color: #ffc107;
            color: #1e3c72;
        }

        .btn-save:hover {
            background-color: #e6a800;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 193, 7, 0.4);
        }

        /* Menu Mobile Overlay */
        .nav-mobile {
            display: none;
        }

        @media (max-width: 1024px) {
            .menu-toggle {
                display: flex !important;
                width: 40px;
                height: 28px;
                flex-direction: column;
                justify-content: space-between;
                cursor: pointer;
                z-index: 1100;
            }

            .menu-toggle span {
                width: 100%;
                height: 4px;
                background: white;
                border-radius: 5px;
                transition: 0.3s;
            }

            .menu-toggle.active span:nth-child(1) {
                transform: translateY(12px) rotate(45deg);
            }
            .menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            .menu-toggle.active span:nth-child(3) {
                transform: translateY(-12px) rotate(-45deg);
            }

            .logo-desktop {
                display: none !important;
            }

            .logo-mobile {
                display: block !important;
                height: 45px;
            }

            .nav-desktop {
                display: none !important;
            }

            .icons-desktop {
                display: none !important;
            }

            #mobileMenu {
                position: fixed;
                top: 80px;
                left: -100%;
                width: 280px;
                height: calc(100vh - 80px);
                background: linear-gradient(180deg, rgba(19, 53, 118, 0.98) 0%, rgba(8, 6, 23, 0.98) 100%);
                padding: 30px 20px;
                display: flex;
                flex-direction: column;
                gap: 0;
                transition: left 0.4s ease;
                z-index: 2000;
            }

            #mobileMenu.active {
                left: 0;
            }

            #mobileMenu a {
                color: #b5ceff;
                text-decoration: none;
                font-weight: 600;
                font-size: 16px;
                padding: 18px 20px;
                border-bottom: 1px solid rgba(181, 206, 255, 0.1);
                transition: color 0.3s;
            }

            #mobileMenu a:hover,
            #mobileMenu a.active {
                color: #ffc107;
            }

            .menu-icons-mobile {
                display: flex;
                justify-content: space-around;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }

            .menu-icons-mobile i {
                font-size: 20px;
                color: #b5ceff;
                cursor: pointer;
                transition: color 0.3s;
            }

            .menu-icons-mobile i:hover {
                color: #ffc107;
            }
        }

        .logo-mobile {
            display: none;
        }

        .menu-toggle {
            display: none;
        }

        /* Responsividade adicional */
        @media (max-width: 768px) {
            .page-header {
                flex-direction: column;
                gap: 15px;
            }

            .page-header > div {
                width: 100%;
                flex-direction: column;
            }

            .search-bar {
                width: 100% !important;
            }

            .btn-add {
                width: 100%;
            }

            header {
                height: 70px;
                padding: 15px 20px;
            }

            #mobileMenu {
                top: 70px;
                height: calc(100vh - 70px);
            }
            
            .modal-edit {
                max-width: 95%;
                padding: 25px 20px;
            }

            .form-grid {
                grid-template-columns: 1fr;
                gap: 15px;
            }

            .form-actions {
                flex-direction: column;
            }

            .btn-cancel,
            .btn-save {
                width: 100%;
            }
        }

        @media (max-width: 480px) {
            header {
                height: 60px;
                padding: 10px 15px;
            }

            #mobileMenu {
                top: 60px;
                height: calc(100vh - 60px);
                width: 100%;
            }

            .table-container {
                overflow-x: auto;
            }

            table {
                font-size: 12px;
            }

            th, td {
                padding: 10px 8px;
                font-size: 12px;
            }

            .action-icon {
                width: 28px;
                height: 28px;
                font-size: 14px;
            }
        }

        /* Customização do scrollbar no modal */
        .modal-edit::-webkit-scrollbar {
            width: 8px;
        }

        .modal-edit::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }

        .modal-edit::-webkit-scrollbar-thumb {
            background: #ffc107;
            border-radius: 10px;
        }

        .modal-edit::-webkit-scrollbar-thumb:hover {
            background: #e6a800;
        }
    </style>
    
    
</head>
<body>
    <!-- Header -->
    <header>
        <div class="logo">
            <img src="${pageContext.request.contextPath}/assets/img//logo.png" class="logo-desktop" alt="Cinematch Logo">
        </div>

        <!-- MENU DESKTOP -->
        <nav class="nav-desktop">
            <a href="dashboard.htm" >DASHBOARD</a>
            <a href="adm_usuario.htm" id="selecionado" >USUÁRIOS</a>
            <a href="adm_filmes.htm">FILMES</a>

            
        </nav>
    </header>

    <!-- Main Content -->
    <div class="container">
        <div class="page-header">
          
            <div style="display: flex; gap: 15px; align-items: center;">
                <div class="search-container">
    <div class="search-wrapper">
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <input type="text" 
               id="searchInput" 
               class="search-input"
               placeholder="Busca por usuários..." 
               value="">
    </div>
    <button class="btn-add" onclick="novoUsuario()" title="Adicionar Novo Usuário">
        <i class="fa-solid fa-plus"></i>
    </button>
</div>
        </div>

        <!-- Tabs -->
        <div class="tabs">
            <div class="tab " 
                 onclick="filtrarStatus('todos')">Todos</div>
            <div class="tab " 
                 onclick="filtrarStatus('ativos')">Ativos</div>
            <div class="tab " 
                 onclick="filtrarStatus('inativos')">Inativos</div>
        </div>

        <!-- Table -->
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Status</th>
                        <th>Plano</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    
                    <tr data-id="">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <span class="status-badge ">
                                
                            </span>
                        </td>
                        <td></td>
                        <td>
    <div class="actions">
        <div class="action-icon icon-view" 
             title="Visualizar" 
             onclick="visualizarUsuario()">
            <i class="fa-solid fa-eye"></i>
        </div>
        <div class="action-icon icon-edit" 
             title="Editar" 
             onclick="editarUsuario()">
            <i class="fa-solid fa-pen"></i>
        </div>
        <div class="action-icon icon-delete" 
             title="Excluir" 
             onclick="excluirUsuario(, '')">
            <i class="fa-solid fa-trash"></i>
        </div>
        
    </div>
</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>

    <!-- Modal de detalhes -->
    <div id="modalDetalhes" class="modal">
        <div class="modal-content">
            <span class="close" onclick="fecharModal()">&times;</span>
            <div id="modalBody"></div>
        </div>
    </div>
    
    <!-- Modal de Adição de Usuário -->
    <div id="modalAdicionar" class="modal">
        <div class="modal-content modal-edit">
            <span class="close" onclick="fecharModalAdicionar()">&times;</span>
            <h2 style="color: #ffc107; margin-bottom: 25px; font-size: 24px;">Adicionar Novo Usuário</h2>
            
            <form id="formAdicionarUsuario" onsubmit="salvarNovoUsuario(event)">
                <div class="form-grid">
                    <!-- Nome Completo -->
                    <div class="form-group full-width">
                        <label for="add_nome">Nome Completo *</label>
                        <input type="text" id="add_nome" name="nome" required>
                    </div>

                    <!-- Email -->
                    <div class="form-group">
                        <label for="add_email">E-mail *</label>
                        <input type="email" id="add_email" name="email" required>
                    </div>

                    <!-- CPF -->
                    <div class="form-group">
                        <label for="add_cpf">CPF *</label>
                        <input type="text" id="add_cpf" name="cpf" maxlength="14" required>
                    </div>

                    <!-- Telefone -->
                    <div class="form-group">
                        <label for="add_telefone">Telefone *</label>
                        <input type="text" id="add_telefone" name="telefone" maxlength="15" required>
                    </div>

                    <!-- Data de Nascimento -->
                    <div class="form-group">
                        <label for="add_data_nascimento">Data de Nascimento *</label>
                        <input type="date" id="add_data_nascimento" name="data_nascimento" required>
                    </div>

                    <!-- Sexo -->
                    <div class="form-group">
                        <label for="add_sexo">Sexo *</label>
                        <select id="add_sexo" name="sexo" required>
                            <option value="">Selecione...</option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                            <option value="O">Outro</option>
                        </select>
                    </div>

                    <!-- Status -->
                    <div class="form-group">
                        <label for="add_status">Status *</label>
                        <select id="add_status" name="status_usuario" required>
                            <option value="1">Ativo</option>
                            <option value="0">Inativo</option>
                        </select>
                    </div>

                    <!-- Plano -->
                    <div class="form-group">
                        <label for="add_plano">Plano</label>
                        <select id="add_plano" name="id_plano">
                            <option value="">Sem plano</option>
                            <option value="1">Básico - R$ 19,90/mês</option>
                            <option value="2">Família - R$ 59,90/mês</option>
                            <option value="3">Premium - R$ 49,90/mês</option>
                        </select>
                    </div>

                    <!-- Tipo de Pagamento -->
                    <div class="form-group">
                        <label for="add_tipo_pagamento">Tipo de Pagamento</label>
                        <select id="add_tipo_pagamento" name="tipo_pagamento">
                            <option value="">Selecione...</option>
                            <option value="Cartão de Crédito">Cartão de Crédito</option>
                            <option value="Cartão de Débito">Cartão de Débito</option>
                            <option value="PIX">PIX</option>
                            <option value="Boleto">Boleto</option>
                        </select>
                    </div>

                    <!-- Senha -->
                    <div class="form-group full-width">
                        <label for="add_senha">Senha *</label>
                        <input type="password" id="add_senha" name="senha" minlength="6" required>
                        <small style="color: #b5ceff; font-size: 12px;">Mínimo de 6 caracteres</small>
                    </div>

                    <!-- Checkbox Admin -->
                    <div class="form-group full-width">
                        <div class="checkbox-group">
                            <input type="checkbox" id="add_is_admin" name="is_admin" value="1">
                            <label for="add_is_admin">Este usuário é um Administrador Geral</label>
                        </div>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="button" class="btn-cancel" onclick="fecharModalAdicionar()">Cancelar</button>
                    <button type="submit" class="btn-save">Criar Usuário</button>
                </div>
            </form>
        </div>
    </div>
    
    <!-- Modal de Edição -->
    <div id="modalEditar" class="modal">
        <div class="modal-content modal-edit">
            <span class="close" onclick="fecharModalEditar()">&times;</span>
            <h2 style="color: #ffc107; margin-bottom: 25px; font-size: 24px;">Editar Usuário</h2>
            
            <form id="formEditarUsuario" onsubmit="salvarEdicao(event)">
                <input type="hidden" id="edit_id_usuario" name="id_usuario">
                
                <div class="form-grid">
                    <!-- Nome Completo -->
                    <div class="form-group full-width">
                        <label for="edit_nome">Nome Completo *</label>
                        <input type="text" id="edit_nome" name="nome" required>
                    </div>

                    <!-- Email -->
                    <div class="form-group">
                        <label for="edit_email">E-mail *</label>
                        <input type="email" id="edit_email" name="email" required>
                    </div>

                    <!-- CPF -->
                    <div class="form-group">
                        <label for="edit_cpf">CPF *</label>
                        <input type="text" id="edit_cpf" name="cpf" maxlength="14" required>
                    </div>

                    <!-- Telefone -->
                    <div class="form-group">
                        <label for="edit_telefone">Telefone *</label>
                        <input type="text" id="edit_telefone" name="telefone" maxlength="15" required>
                    </div>

                    <!-- Data de Nascimento -->
                    <div class="form-group">
                        <label for="edit_data_nascimento">Data de Nascimento *</label>
                        <input type="date" id="edit_data_nascimento" name="data_nascimento" required>
                    </div>

                    <!-- Sexo -->
                    <div class="form-group">
                        <label for="edit_sexo">Sexo *</label>
                        <select id="edit_sexo" name="sexo" required>
                            <option value="">Selecione...</option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                            <option value="O">Outro</option>
                        </select>
                    </div>

                    <!-- Status -->
                    <div class="form-group">
                        <label for="edit_status">Status *</label>
                        <select id="edit_status" name="status_usuario" required>
                            <option value="1">Ativo</option>
                            <option value="0">Inativo</option>
                        </select>
                    </div>

                    <!-- Plano -->
                    <div class="form-group">
                        <label for="edit_plano">Plano</label>
                        <select id="edit_plano" name="id_plano">
                            <option value="">Sem plano</option>
                            <option value="1">Básico - R$ 19,90/mês</option>
                            <option value="2">Família - R$ 59,90/mês</option>
                            <option value="3">Premium - R$ 49,90/mês</option>
                        </select>
                    </div>

                    <!-- Tipo de Pagamento -->
                    <div class="form-group">
                        <label for="edit_tipo_pagamento">Tipo de Pagamento</label>
                        <select id="edit_tipo_pagamento" name="tipo_pagamento">
                            <option value="">Selecione...</option>
                            <option value="Cartão de Crédito">Cartão de Crédito</option>
                            <option value="Cartão de Débito">Cartão de Débito</option>
                            <option value="PIX">PIX</option>
                            <option value="Boleto">Boleto</option>
                        </select>
                    </div>

                    <!-- Senha (opcional para resetar) -->
                    <div class="form-group full-width">
                        <label for="edit_senha">Nova Senha (deixe em branco para manter a atual)</label>
                        <input type="password" id="edit_senha" name="nova_senha" minlength="6">
                        <small style="color: #b5ceff; font-size: 12px;">Mínimo de 6 caracteres</small>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="button" class="btn-cancel" onclick="fecharModalEditar()">Cancelar</button>
                    <button type="submit" class="btn-save">Salvar Alterações</button>
                </div>
            </form>
        </div>
    </div>

    <script>
        // Máscaras para CPF e Telefone
        function aplicarMascaras() {
            const cpfInputs = document.querySelectorAll('[id$="_cpf"]');
            const telefoneInputs = document.querySelectorAll('[id$="_telefone"]');

            cpfInputs.forEach(cpfInput => {
                if (cpfInput) {
                    cpfInput.addEventListener('input', function(e) {
                        let value = e.target.value.replace(/\D/g, '');
                        if (value.length <= 11) {
                            value = value.replace(/(\d{3})(\d)/, '$1.$2');
                            value = value.replace(/(\d{3})(\d)/, '$1.$2');
                            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                        }
                        e.target.value = value;
                    });
                }
            });

            telefoneInputs.forEach(telefoneInput => {
                if (telefoneInput) {
                    telefoneInput.addEventListener('input', function(e) {
                        let value = e.target.value.replace(/\D/g, '');
                        if (value.length <= 11) {
                            value = value.replace(/(\d{2})(\d)/, '($1) $2');
                            value = value.replace(/(\d{5})(\d)/, '$1-$2');
                        }
                        e.target.value = value;
                    });
                }
            });
        }

        // Aplicar máscaras ao carregar a página
        document.addEventListener('DOMContentLoaded', function() {
            aplicarMascaras();
        });

        // Menu mobile toggle
        const menuToggle = document.getElementById("menuToggle");
        const mobileMenu = document.getElementById("mobileMenu");

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener("click", () => {
                mobileMenu.classList.toggle("active");
                menuToggle.classList.toggle("active");
            });
        }

        // Pesquisa em tempo real
        const searchInput = document.getElementById('searchInput');
        let searchTimeout;

        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const busca = e.target.value;
                window.location.href = `adm_usuario.htm?busca=${encodeURIComponent(busca)}&status=`;
            }, 500);
        });

        // Filtrar por status
        function filtrarStatus(status) {
            const busca = searchInput.value;
            window.location.href = `adm_usuario.htm?status=${status}&busca=${encodeURIComponent(busca)}`;
        }

        // Visualizar usuário
        function visualizarUsuario(id) {
            // fetch removido; {
                    const usuario = data.dados;
                    const modalBody = document.getElementById('modalBody');
                    modalBody.innerHTML = `
                        <h2>Detalhes do Usuário</h2>
                        <p><strong>ID:</strong> ${usuario.ID_Usuario}</p>
                        <p><strong>Nome:</strong> ${usuario.nome}</p>
                        <p><strong>Email:</strong> ${usuario.email}</p>
                        <p><strong>CPF:</strong> ${usuario.CPF}</p>
                        <p><strong>Telefone:</strong> ${usuario.telefone}</p>
                        <p><strong>Data de Nascimento:</strong> ${usuario.data_nascimento}</p>
                        <p><strong>Sexo:</strong> ${usuario.sexo}</p>
                        <p><strong>Status:</strong> ${usuario.status_usuario ? 'Ativo' : 'Inativo'}</p>
                        <p><strong>Tipo:</strong> ${usuario.descricao_usuario || 'N/A'}</p>
                        <p><strong>Plano:</strong> ${usuario.tipo_plano || 'Sem plano'}</p>
                        <p><strong>Data Assinatura:</strong> ${usuario.data_assinatura || 'N/A'}</p>
                        <p><strong>Tipo Pagamento:</strong> ${usuario.tipo_pagamento || 'N/A'}</p>
                        <p><strong>Total de Perfis:</strong> ${usuario.total_perfis}</p>
                    `;
                    document.getElementById('modalDetalhes').style.display = 'block';
                }
            });
        }

        // Novo usuário
        function novoUsuario() {
            document.getElementById('formAdicionarUsuario').reset();
            document.getElementById('modalAdicionar').style.display = 'block';
            document.body.style.overflow = 'hidden';
            aplicarMascaras();
        }

        // Salvar novo usuário
        function salvarNovoUsuario(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            formData.append('acao', 'adicionar_usuario');
            
            // Desabilita botão para evitar múltiplos envios
            const btnSave = event.target.querySelector('.btn-save');
            btnSave.disabled = true;
            btnSave.textContent = 'Criando...';
            
            // fetch removido;
                    fecharModalAdicionar();
                    location.reload();
                } else {
                    alert('Erro ao criar usuário: ' + data.mensagem);
                    btnSave.disabled = false;
                    btnSave.textContent = 'Criar Usuário';
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao criar usuário');
                btnSave.disabled = false;
                btnSave.textContent = 'Criar Usuário';
            });
        }

        // Fechar modal de adição
        function fecharModalAdicionar() {
            document.getElementById('modalAdicionar').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Editar usuário
        function editarUsuario(id) {
            // fetch removido; {
                    const usuario = data.dados;
                    
                    // Preencher o formulário
                    document.getElementById('edit_id_usuario').value = usuario.ID_Usuario;
                    document.getElementById('edit_nome').value = usuario.nome || '';
                    document.getElementById('edit_email').value = usuario.email || '';
                    document.getElementById('edit_cpf').value = usuario.CPF || '';
                    document.getElementById('edit_telefone').value = usuario.telefone || '';
                    document.getElementById('edit_data_nascimento').value = usuario.data_nascimento || '';
                    document.getElementById('edit_sexo').value = usuario.sexo || '';
                    document.getElementById('edit_status').value = usuario.status_usuario || '1';
                    
                    // Definir o plano baseado no ID_Plano retornado
                    document.getElementById('edit_plano').value = usuario.ID_Plano || '';
                    document.getElementById('edit_tipo_pagamento').value = usuario.tipo_pagamento || '';
                    
                    // Aplicar máscaras
                    aplicarMascaras();
                    
                    // Mostrar o modal
                    document.getElementById('modalEditar').style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao carregar dados do usuário');
            });
        }

        // Salvar edição
        function salvarEdicao(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            formData.append('acao', 'editar_usuario');
            
            // fetch removido;
                    fecharModalEditar();
                    location.reload();
                } else {
                    alert('Erro ao atualizar usuário: ' + data.mensagem);
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao salvar alterações');
            });
        }

        // Excluir usuário
        function excluirUsuario(id, nome) {
            if (confirm(`Deseja realmente desativar o usuário ${nome}?`)) {
                // fetch removido;
                    if (data.sucesso) {
                        location.reload();
                    }
                });
            }
        }

        // Fechar modal de detalhes
        function fecharModal() {
            document.getElementById('modalDetalhes').style.display = 'none';
        }

        // Fechar modal de edição
        function fecharModalEditar() {
            document.getElementById('modalEditar').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Fechar modal ao clicar fora
        window.onclick = function(event) {
            const modalDetalhes = document.getElementById('modalDetalhes');
            const modalEditar = document.getElementById('modalEditar');
            const modalAdicionar = document.getElementById('modalAdicionar');
            
            if (event.target == modalDetalhes) {
                modalDetalhes.style.display = 'none';
            }
            if (event.target == modalEditar) {
                fecharModalEditar();
            }
            if (event.target == modalAdicionar) {
                fecharModalAdicionar();
            }
        }
    </script>
</body>
</html>
