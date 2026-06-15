// Funções para controlar os popups

// Abrir popup
function openPopup(planType) {
  const popup = document.getElementById(`popup${capitalize(planType)}`);
  if (popup) {
    popup.classList.add('active');
    // Prevenir scroll do body quando popup está aberto
    document.body.style.overflow = 'hidden';
  }
}

// Fechar popup
function closePopup(planType) {
  const popup = document.getElementById(`popup${capitalize(planType)}`);
  if (popup) {
    popup.classList.remove('active');
    // Restaurar scroll do body
    document.body.style.overflow = 'auto';
  }
}

// Fechar popup ao clicar fora dele
function closePopupOnOverlay(event, planType) {
  // Verificar se o clique foi no overlay (fundo escuro) e não no popup
  if (event.target.classList.contains('popup-overlay')) {
    closePopup(planType);
  }
}

// Função auxiliar para capitalizar primeira letra
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Função para lidar com a confirmação de assinatura
function handleConfirm(planName) {
  // Aqui você pode adicionar a lógica para processar a assinatura
  // Por exemplo, redirecionar para página de pagamento
  
  alert(`Você selecionou o ${planName}!\n\nVocê será redirecionado para finalizar o pagamento.`);
  
  // Exemplo de redirecionamento (descomente e ajuste conforme necessário):
  // window.location.href = 'pagamento.php?plano=' + encodeURIComponent(planName);
}

// Fechar popup com tecla ESC
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Fechar todos os popups abertos
    const popups = document.querySelectorAll('.popup-overlay.active');
    popups.forEach(popup => {
      popup.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
  }
});

// Prevenir scroll dentro do popup de afetar o body
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('wheel', function(e) {
    // Verificar se chegou no topo ou fim do popup
    const atTop = this.scrollTop === 0;
    const atBottom = this.scrollHeight - this.scrollTop === this.clientHeight;
    
    // Prevenir propagação do scroll para o body
    if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
      e.preventDefault();
    }
  });
});

// Console log para debug
console.log('Script de planos carregado com sucesso!');