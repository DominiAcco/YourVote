const form = document.getElementById("form-votacao");
const candidatosContainer = document.getElementById("candidatos-container");
const addBtn = document.getElementById("add-candidato");
const msg = document.getElementById("msg");

addBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.name = "candidato";
    input.placeholder = "Nome do candidato";
    input.required = true;
    candidatosContainer.appendChild(input);
});

form.addEventListener("submit", e => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value.trim();
    const minutos = parseInt(document.getElementById("encerramento").value, 10);
    const inputs = document.querySelectorAll("input[name='candidato']");
    const candidatos = Array.from(inputs)
        .map(i => i.value.trim())
        .filter(n => n)
        .map(n => ({ nome: n, votos: 0 }));
    if (!titulo || candidatos.length < 2 || isNaN(minutos) || minutos < 1) {
        msg.style.color = "red";
        msg.textContent = "Preencha título, tempo >=1 min e ao menos 2 candidatos.";
        return;
    }
    const user = JSON.parse(localStorage.getItem("user"));
    const now = Date.now();
    const nova = {
        id: now,
        title: titulo,
        candidatos,
        votantes: [],
        creator: user.userId,
        createdAt: now,
        endTime: now + minutos * 60000,
        active: true
    };
    const votacoes = JSON.parse(localStorage.getItem("votacoes") || "[]");
    votacoes.push(nova);
    localStorage.setItem("votacoes", JSON.stringify(votacoes));
    localStorage.setItem("mensagemSucesso", "Votação criada com sucesso!");
    window.location.href = "home.html";
});