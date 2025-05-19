// Seleciona o botão de alternância de tema
const toggleButton = document.querySelector('.theme-toggle');

// Função para alternar o modo escuro
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  // Verifica se o modo escuro está ativado
  const darkModeEnabled = document.body.classList.contains('dark-mode');

  // Salva a preferência no localStorage
  localStorage.setItem('theme', darkModeEnabled ? 'dark' : 'light');
}

// Adiciona o evento de clique ao botão
toggleButton.addEventListener('click', toggleDarkMode);

// Aplica o tema salvo ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
