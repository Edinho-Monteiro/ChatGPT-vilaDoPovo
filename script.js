document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerOffset = 100; // Ajuste conforme o tamanho do cabeçalho fixo
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('active'); // Alterna entre abrir e fechar o menu
});

document.getElementById("openPdfBtn").addEventListener("click", function() {
  var pdfContainer = document.getElementById("pdfContainer");
  var pdfFrame = document.getElementById("pdfFrame");

  // Define o caminho para o PDF
  pdfFrame.src = "./manual/manual.pdf";

  // Mostra o container
  pdfContainer.style.display = "block";
});

// Solicitação de senha  

function abrirCampoSenha() {
  // Exibe o campo de senha
  document.getElementById("campoSenha").style.display = "block";
  
  // Foca automaticamente no campo de senha
  document.getElementById("senha").focus();
  
  // Adiciona o evento de "Enter" ao campo de senha
  document.getElementById("senha").addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
          event.preventDefault(); // Evita o comportamento padrão
          verificarSenha(); // Chama a função de verificação da senha
      }
  });
}

function verificarSenha() {
  const senha = document.getElementById("senha").value;
  const senhaCorreta = "flatplana"; // Defina a senha correta aqui

  if (senha === senhaCorreta) {
      // alert("Acesso permitido!");
      location.href = './acessoRestrito.html';
  } else {
      // alert("Senha incorreta!");
      location.href = './index.html';
  }
}

// Seleciona todas as imagens clicáveis
const images = document.querySelectorAll('.clickable-image');

// Função para criar o efeito de clique
images.forEach(image => {
    image.addEventListener('click', () => {
        const modalImage = document.createElement('img');
        modalImage.src = image.src;
        modalImage.classList.add('image-modal');

        // Adiciona o modal ao corpo do documento
        document.body.appendChild(modalImage);

        // Remove o modal ao clicar na imagem expandida
        modalImage.addEventListener('click', () => {
            modalImage.classList.add('hidden');
            setTimeout(() => modalImage.remove(), 300); // Espera pela transição antes de remover
        });
    });
});

