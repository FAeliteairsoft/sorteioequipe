const jogadores = [];
const times = [];
const maxJogadoresPorTime = 100;
const maxTimes = 4;

// Função para cadastrar jogador
function cadastrarJogador() {
  const nomeJogador = document.getElementById('nome-jogador').value;
  if (nomeJogador !== '') {
    jogadores.push(nomeJogador);
    document.getElementById('nome-jogador').value = '';
    atualizarListaJogadoresCadastrados();
    console.log(`Jogador cadastrado: ${nomeJogador}`);
  }
}

// Função para atualizar lista de jogadores cadastrados
function atualizarListaJogadoresCadastrados() {
  const listaJogadoresCadastrados = document.getElementById('jogadores-cadastrados');
  listaJogadoresCadastrados.innerHTML = '';
  jogadores.forEach((jogador) => {
    const item = document.createElement('li');
    item.textContent = jogador;
    listaJogadoresCadastrados.appendChild(item);
  });
}

// Função para realizar sorteio
function realizarSorteio() {
  if (jogadores.length >= maxTimes * maxJogadoresPorTime) {
    // Embaralhar array de jogadores
    jogadores.sort(() => Math.random() - 0.5);

    // Criar times
    for (let i = 0; i < maxTimes; i++) {
      times.push([]);
    }

    // Distribuir jogadores nos times
    for (let i = 0; i < jogadores.length; i++) {
      const timeIndex = i % maxTimes;
      times[timeIndex].push(jogadores[i]);
    }

    // Exibir resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    for (let i = 0; i < times.length; i++) {
      resultadoDiv.innerHTML += `<h2>Time ${i + 1}</h2><ul>`;
      for (let j = 0; j < times[i].length; j++) {
        resultadoDiv.innerHTML += `<li>${times[i][j]}</li>`;
      }
      resultadoDiv.innerHTML += `</ul>`;
    }
  } else {
    console.log('Não há jogadores suficientes para realizar o sorteio');
  }
}

// Eventos
document.getElementById('cadastrar-btn').addEventListener('click', cadastrarJogador);
document.getElementById('sorteio-btn').addEventListener('click', realizarSorteio);
