// Home.js

function isExpired(votacao) {
  return votacao.endTime && Date.now() > votacao.endTime;
}

function updateExpired(votacoes) {
  let changed = false;
  votacoes.forEach(v => {
    if (!v.active) return;
    if (isExpired(v)) {
      v.active = false;
      changed = true;
    }
  });
  if (changed) localStorage.setItem("votacoes", JSON.stringify(votacoes));
}

document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || !user.username) {
    window.location.href = "register.html";
    return;
  }
  document.getElementById("user-name").textContent = user.username;

  document.getElementById("btnCreate").addEventListener("click", () => {
    window.location.href = "createVote.html";
  });

  document.getElementById("btnLogout").addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "register.html";
  });

  const voteList = document.getElementById("voteList");
  const votacoes = JSON.parse(localStorage.getItem("votacoes") || "[]");

  updateExpired(votacoes);

  if (votacoes.length === 0) {
    voteList.innerHTML = "<p>Nenhuma votação criada ainda.</p>";
  } else {
    votacoes.forEach(votacao => {
      const totalVotes = (votacao.candidatos || []).reduce((sum, c) => sum + (c.votos || 0), 0);
      const div = document.createElement("div");
      div.className = "votacao";

      let html = `<h4>${votacao.title}</h4>`;
      html += `<p>Criação: ${new Date(votacao.createdAt).toLocaleString()}</p>`;
      html += `<p>Encerra em: ${new Date(votacao.endTime).toLocaleString()}</p>`;

      if (!votacao.active) {
        html += "<p style='color:red'>Votação encerrada</p>";
      }

      if (totalVotes === 0) {
        html += "<p>Ainda não há votos.</p>";
      } else {
        votacao.candidatos.forEach(c => {
          const pct = ((c.votos || 0) / totalVotes * 100).toFixed(1);
          html += `
            <p><strong>${c.nome}</strong>: ${pct}% (${c.votos} votos)</p>
            <div class="barra">
              <div class="preenchimento" style="width: ${pct}%;">
                <span>${pct}%</span>
              </div>
            </div>
          `;
        });
      }

      if (votacao.creator === user.userId && votacao.active) {
        html += `<button class="btn-end" id="end-${votacao.id}">Encerrar</button>`;
      }
      const buttonId = `btnVotar-${votacao.id}`;
      html += `<button class="btn-votar" id="${buttonId}" ${(!votacao.active || (votacao.votantes || []).includes(user.userId)) ? "disabled" : ""}>
                ${(votacao.votantes || []).includes(user.userId) ? "Já votou" : "Votar"}
              </button>`;

      div.innerHTML = html;
      voteList.appendChild(div);

      if (votacao.creator === user.userId && votacao.active) {
        document.getElementById(`end-${votacao.id}`).addEventListener("click", () => {
          votacao.active = false;
          localStorage.setItem("votacoes", JSON.stringify(votacoes));
          location.reload();
        });
      }

      document.getElementById(buttonId).addEventListener("click", () => {
        localStorage.setItem("votacaoSelecionada", votacao.id);
        window.location.href = "vote.html";
      });
    });
  }
});
