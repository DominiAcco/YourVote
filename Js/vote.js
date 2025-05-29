const user = JSON.parse(localStorage.getItem("user"));
const idVot = parseInt(localStorage.getItem("votacaoSelecionada"), 10);
const votacoes = JSON.parse(localStorage.getItem("votacoes") || "[]");
const votacao = votacoes.find(v => v.id === idVot);
const form = document.getElementById("formVotacao");
const msg = document.getElementById("msg");

if (!user || !votacao) {
  window.location.href = "register.html";
}

// Checa se expirou ou foi encerrada
if (!votacao.active || Date.now() > votacao.endTime) {
  form.innerHTML = "<p>Esta votação está encerrada.</p>";
} else if ((votacao.votantes || []).includes(user.userId)) {
  form.innerHTML = "<p>Você já votou nesta votação.</p>";
} else {
  document.getElementById("tituloVotacao").textContent = votacao.title;
  votacao.candidatos.forEach((c, i) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="voto" value="${i}" required />
      ${c.nome}
    `;
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
  });
  const btn = document.createElement("button");
  btn.type = "submit";
  btn.textContent = "Votar";
  form.appendChild(btn);

  form.addEventListener("submit", e => {
    e.preventDefault();
    const escolha = parseInt(document.querySelector('input[name="voto"]:checked').value, 10);
    votacao.candidatos[escolha].votos++;
    votacao.votantes.push(user.userId);
    localStorage.setItem("votacoes", JSON.stringify(votacoes));
    msg.style.color = "green";
    msg.textContent = "Voto registrado com sucesso!";
    form.remove();
  });
}