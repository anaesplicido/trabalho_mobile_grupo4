// Exibe uma mensagem no console e na tela quando a página carrega
window.onload = function () {
    console.log("Página carregada com sucesso!");
    alert("Bem-vindo à página!");
  };
  
  // Manipula o clique no botão
  document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("meuBotao");
    const mensagem = document.getElementById("mensagem");
  
    botao.addEventListener("click", function () {
      mensagem.textContent = "Você clicou no botão!";
    });
  });
  