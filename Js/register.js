document.addEventListener("DOMContentLoaded", () => {
  const formRegister  = document.getElementById("registerForm");
  const loginSection  = document.getElementById("loginSection");
  const btnLogin      = document.getElementById("btnLogin");
  const msg           = document.getElementById("msg");
  const backBtn       = document.getElementById("backBtn");

  btnLogin.addEventListener("click",  () => window.location.href = "home.html");
  backBtn.addEventListener("click",  () => window.location.href = "index.html");

  formRegister.addEventListener("submit", e => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const userId   = document.getElementById("userId").value.trim();

    if (!username || !userId) {
      msg.textContent = "Preencha todos os campos.";
      msg.style.color = "red";
      return;
    }

    // Pega todos os usuários registrados (ou inicia vazio)
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Verifica se o ID já existe com nome diferente
    const existing = users.find(u => u.userId === userId);

    if (existing && existing.username !== username) {
      msg.textContent = "Este ID já está em uso por outro nome.";
      msg.style.color = "red";
      return;
    }

    if (!existing) {
      // Adiciona novo usuário
      users.push({ username, userId });
      localStorage.setItem("users", JSON.stringify(users));
      msg.textContent = "Usuário registrado com sucesso!";
    } else {
      msg.textContent = "Usuário já registrado. Clique em 'Fazer Login'.";
    }

    // Armazena o usuário atual logado
    localStorage.setItem("user", JSON.stringify({ username, userId }));

    loginSection.style.display = "block";
    msg.style.color = "blue";
  });
});
