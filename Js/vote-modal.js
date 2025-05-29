// vote-modal.js

document.addEventListener("DOMContentLoaded", () => {
  const openBtn    = document.getElementById("openVoteModal");
  const overlay    = document.getElementById("voteModal");
  const closeBtn   = overlay.querySelector(".modal-close");
  const titleEl    = document.getElementById("modalTitle");
  const form       = document.getElementById("modalForm");
  const msgEl      = document.getElementById("modalMsg");
  const submitBtn  = document.getElementById("modalSubmit");

  let votacaoData = null; // dados da votação carregados do localStorage

  // Função para abrir e preencher o modal
  function openModal(votacao) {
    votacaoData = votacao;
    titleEl.textContent = votacao.title;
    form.innerHTML = ""; // limpa antigos

    votacao.candidatos.forEach((c, i) => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="voto" value="${i}" required />
        ${c.nome}
      `;
      form.appendChild(label);
    });

    msgEl.textContent = "";
    overlay.style.display = "flex";
  }

  // Fechar o modal
  function closeModal() {
    overlay.style.display = "none";
  }

  // Ao clicar em “Votar nesta votação”
  openBtn.addEventListener("click", () => {
    // carregar dados da votação selecionada (exemplo: do localStorage)
    const id = parseInt(localStorage.getItem("votacaoSelecionada"), 10);
    const all = JSON.parse(localStorage.getItem("votacoes") || "[]");
    const vot = all.find(v => v.id === id);
    if (!vot) return alert("Votação não encontrada.");
    openModal(vot);
  });

  // Fechar
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
  });

  // Submeter voto
  submitBtn.addEventListener("click", () => {
    const choice = form.querySelector("input[name='voto']:checked");
    if (!choice) {
      msgEl.textContent = "Escolha um candidato.";
      msgEl.style.color = "red";
      return;
    }
    const idx = parseInt(choice.value, 10);
    votacaoData.candidatos[idx].votos++;
    votacaoData.votantes.push(JSON.parse(localStorage.getItem("user")).userId);
    // salva de volta
    const all = JSON.parse(localStorage.getItem("votacoes") || "[]");
    const updated = all.map(v => v.id === votacaoData.id ? votacaoData : v);
    localStorage.setItem("votacoes", JSON.stringify(updated));

    msgEl.textContent = "Voto registrado com sucesso!";
    msgEl.style.color = "green";
    // opcional: fechar após 1.5s
    setTimeout(closeModal, 1500);
  });
});
