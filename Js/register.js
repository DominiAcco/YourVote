// js/register.js

document.addEventListener("DOMContentLoaded", () => {
  const formRegister  = document.getElementById("registerForm");
  const loginSection  = document.getElementById("loginSection");
  const btnLogin      = document.getElementById("btnLogin");
  const msg           = document.getElementById("msg");
  const backBtn       = document.getElementById("backBtn");

  // 1) Se já existe um usuário, mostra imediatamente a seção de login
  const storedRaw = localStorage.getItem("user");
  if (storedRaw) {
    loginSection.style.display = "block";
    msg.textContent = "Você já está cadastrado! Clique em 'Fazer Login'.";
    msg.style.color = "blue";
  }

  // 2) Botões de navegação
  btnLogin.addEventListener("click",  () => window.location.href = "home.html");
  backBtn.addEventListener("click",  () => window.location.href = "home.html");

  // 3) No submit, apenas cadastra se ainda não houver user; senão só mostra loginSection
  formRegister.addEventListener("submit", e => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const userId   = document.getElementById("userId").value.trim();

    if (!username || !userId) {
      msg.textContent = "Preencha todos os campos.";
      msg.style.color = "red";
      return;
    }

    // Recheca a storage
    const stored = JSON.parse(localStorage.getItem("user") || "null");
    if (stored) {
      // Já cadastrado → só mostra o login
      msg.textContent = "Usuário já cadastrado! Clique em 'Fazer Login'.";
      msg.style.color = "blue";
      loginSection.style.display = "block";
      return;
    }

    // Se não tinha, registra e vai pra home
    localStorage.setItem("user", JSON.stringify({ username, userId }));
    window.location.href = "home.html";
  });
});
