const usuariosDemo = {
  '2026001': {
    senha: 'force123',
    nome: 'Homi',
    plano: 'Semestral',
    vencimento: '15/09/2026',
    frequencia: '13 check-ins no mês',
    treino: 'Treino A e B liberados',
    objetivo: 'Hipertrofia e condicionamento'
  },
  '2026002': {
    senha: 'aluno123',
    nome: 'Mulher',
    plano: 'Anual',
    vencimento: '04/10/2026',
    frequencia: '18 check-ins no mês',
    treino: 'Treino feminino + GAP',
    objetivo: 'Emagrecimento e definição'
  }
};

function salvarSessao(usuario) {
  sessionStorage.setItem('forcegymAuth', 'ok');
  sessionStorage.setItem('forcegymUser', JSON.stringify(usuario));
}

function obterSessao() {
  try { return JSON.parse(sessionStorage.getItem('forcegymUser') || 'null'); } catch(e) { return null; }
}

const formLogin = document.getElementById('formLogin');
if (formLogin) {
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const matricula = document.getElementById('matricula').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const aviso = document.getElementById('loginAviso');
    const usuario = usuariosDemo[matricula];
    if (!usuario || usuario.senha !== senha) {
      aviso.textContent = 'Matrícula ou senha inválidas. Use um dos acessos de demonstração ao lado.';
      aviso.style.color = '#ff8f8f';
      return;
    }
    salvarSessao({ matricula, ...usuario });
    window.location.href = 'student-treinos.html';
  });
}

const painel = document.getElementById('painelAluno');
if (painel) {
  const ok = sessionStorage.getItem('forcegymAuth') === 'ok';
  const usuario = obterSessao();
  if (!ok || !usuario) {
    window.location.href = 'login.html';
  } else {
    document.getElementById('nomeAluno').textContent = usuario.nome;
    document.getElementById('matriculaAluno').textContent = 'Matrícula ' + usuario.matricula;
    document.getElementById('planoAluno').textContent = usuario.plano;
    document.getElementById('vencimentoAluno').textContent = usuario.vencimento;
    document.getElementById('frequenciaAluno').textContent = usuario.frequencia;
    document.getElementById('objetivoAluno').textContent = usuario.objetivo;
    document.getElementById('treinoAluno').textContent = usuario.treino;
    document.getElementById('avatarAluno').textContent = usuario.nome.split(' ').map(p => p[0]).slice(0,2).join('');
  }
}

const sairBtn = document.getElementById('sairBtn');
if (sairBtn) {
  sairBtn.addEventListener('click', () => {
    sessionStorage.removeItem('forcegymAuth');
    sessionStorage.removeItem('forcegymUser');
    window.location.href = 'login.html';
  });
}
