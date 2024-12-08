let screenHistory = []; // Histórico das telas visitadas

// Função para mostrar a tela desejada e registrar no histórico
function showScreen(screenClass) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach(screen => screen.style.display = "none");
  
  const targetScreen = document.querySelector(`.${screenClass}`);
  targetScreen.style.display = "block";

  // Adiciona a tela atual ao histórico, se não for a tela inicial
  if (screenHistory.length === 0 || screenHistory[screenHistory.length - 1] !== screenClass) {
    screenHistory.push(screenClass);
  }
}

// Função para voltar para a tela anterior
function goBack() {
  if (screenHistory.length > 1) {
    screenHistory.pop(); // Remove a tela atual
    const previousScreen = screenHistory[screenHistory.length - 1];
    showScreen(previousScreen);
  }
}

// Inicialização da tela de splash
document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.querySelector(".splash-screen");
  const loginScreen = document.querySelector(".login-screen");

  // Simula a tela de splash por 2 segundos
  setTimeout(() => {
    splashScreen.style.display = "none";
    loginScreen.style.display = "block";
    screenHistory.push("login-screen"); // Tela inicial para o histórico
  }, 2000);
});
