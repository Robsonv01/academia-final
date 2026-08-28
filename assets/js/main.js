/* ============================================================
   FORCE GYM – Scripts principais do site
   Menu mobile, animações de scroll, contadores, formulário
   ============================================================ */

// ---------- Menu mobile ----------
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('aberto');
    menuToggle.textContent = menu.classList.contains('aberto') ? '✕' : '☰';
  });

  // Fecha o menu ao clicar em um link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('aberto');
      menuToggle.textContent = '☰';
    });
  });
}

// ---------- Ano automático no rodapé ----------
const elAno = document.getElementById('ano');
if (elAno) elAno.textContent = new Date().getFullYear();

// ---------- Botão voltar ao topo ----------
const btnTopo = document.getElementById('btnTopo');
window.addEventListener('scroll', () => {
  if (btnTopo) btnTopo.classList.toggle('visivel', window.scrollY > 500);
});
if (btnTopo) {
  btnTopo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ---------- Animações ao rolar (Intersection Observer) ----------
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
      observador.unobserve(entrada.target); // anima uma única vez
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observador.observe(el));

// ---------- Contadores animados (números da academia) ----------
function animarContador(el) {
  const alvo = parseInt(el.dataset.alvo, 10) || 0;
  const duracao = 1600; // ms
  const inicio = performance.now();

  function passo(agora) {
    const progresso = Math.min((agora - inicio) / duracao, 1);
    const valor = Math.floor(progresso * alvo);
    el.textContent = valor;
    if (progresso < 1) requestAnimationFrame(passo);
    else el.textContent = alvo;
  }
  requestAnimationFrame(passo);
}

const observadorNumeros = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      animarContador(entrada.target);
      observadorNumeros.unobserve(entrada.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.num[data-alvo]').forEach(el => observadorNumeros.observe(el));

// ---------- Formulário de contato → WhatsApp ----------
const formContato = document.getElementById('formContato');
if (formContato) {
  formContato.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !telefone) {
      alert('Por favor, preencha pelo menos nome e telefone.');
      return;
    }

    const texto = [
      'Olá! Vim pelo site da FORCE GYM. 🏋️',
      '',
      '👤 Nome: ' + nome,
      '📱 Telefone: ' + telefone,
      email ? '✉️ E-mail: ' + email : '',
      '📌 Assunto: ' + assunto,
      mensagem ? '📝 Mensagem: ' + mensagem : ''
    ].filter(Boolean).join('\n');

    // Abre o WhatsApp com a mensagem pronta
    const numero = '5554999990000';
    window.open('https://wa.me/' + numero + '?text=' + encodeURIComponent(texto), '_blank');
  });
}

// ---------- Painel admin: planos, treinos e alunos salvos na página inicial ----------
const adminModal = document.getElementById('adminModal');
const abrirAdmin = document.getElementById('abrirAdmin');
const STORAGE_KEY = 'forcegym_admin_v1';
const dadosAdmin = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"planos":[],"treinos":[],"alunos":[]}');
dadosAdmin.alunos = Array.isArray(dadosAdmin.alunos) ? dadosAdmin.alunos : [];
const salvarAdmin = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(dadosAdmin));
function escapar(valor) { return String(valor).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }
function renderizarPlanosAdmin() { const alvo = document.getElementById('planosDinamicos'); if (!alvo) return; alvo.innerHTML = dadosAdmin.planos.map(plano => `<article class="card-plano plano-admin reveal visivel"><span class="tag">Plano cadastrado</span><h3>${escapar(plano.nome)}</h3><div class="preco">R$ ${Number(plano.preco).toFixed(2).replace('.', ',')} <small>/mês</small></div><ul>${plano.beneficios.map(item => `<li>${escapar(item.trim())}</li>`).join('')}</ul><span class="metodo-pagamento">${escapar(plano.duracao)} · ${escapar(plano.pagamento)}</span><button type="button" class="btn btn-outline btn-checkout" data-plano="${escapar(plano.nome)}" data-preco="${Number(plano.preco).toFixed(2).replace('.', ',')}">Assinar plano</button></article>`).join(''); ativarCheckout(); }
function renderizarTreinosAdmin() { const alvo = document.getElementById('listaTreinosAdmin'); if (!alvo) return; alvo.innerHTML = dadosAdmin.treinos.length ? dadosAdmin.treinos.map(t => `<div class="admin-item"><strong>${escapar(t.nome)} · ${escapar(t.nivel)}</strong><p>${escapar(t.descricao)}</p></div>`).join('') : '<p style="color:var(--gray);font-size:.85rem">Nenhum treino cadastrado ainda.</p>'; }
function renderizarAlunosAdmin() { const alvo = document.getElementById('listaAlunosAdmin'); if (!alvo) return; alvo.innerHTML = dadosAdmin.alunos.length ? dadosAdmin.alunos.map(a => `<tr><td><strong>${escapar(a.nome)}</strong><small>${escapar(a.email)}<br>${escapar(a.telefone)}</small></td><td>${escapar(a.plano)}</td><td><span class="status-aluno ${a.status.toLowerCase()}">${escapar(a.status)}</span></td><td><button type="button" class="mini-btn" data-editar-aluno="${a.id}">Editar</button><button type="button" class="mini-btn excluir" data-excluir-aluno="${a.id}">Excluir</button></td></tr>`).join('') : '<tr><td colspan="4" class="tabela-vazia">Nenhum aluno cadastrado.</td></tr>'; document.getElementById('alunosSalvos').hidden = false; }
function abrirPainel() { if (adminModal) { adminModal.hidden = false; document.getElementById('senhaAdmin')?.focus(); } }
function fecharPainel() { if (adminModal) adminModal.hidden = true; }
if (abrirAdmin) abrirAdmin.addEventListener('click', abrirPainel);
document.querySelectorAll('[data-fechar-admin]').forEach(el => el.addEventListener('click', fecharPainel));
const entrarAdmin = document.getElementById('entrarAdmin');
if (entrarAdmin) entrarAdmin.addEventListener('click', () => { if (document.getElementById('senhaAdmin').value !== 'forcegym') { alert('Senha incorreta.'); return; } document.getElementById('adminLogin').hidden = true; document.getElementById('adminConteudo').hidden = false; renderizarTreinosAdmin(); renderizarAlunosAdmin(); });
const sairAdmin = document.getElementById('sairAdmin');
if (sairAdmin) sairAdmin.addEventListener('click', () => { document.getElementById('adminConteudo').hidden = true; document.getElementById('adminLogin').hidden = false; document.getElementById('senhaAdmin').value = ''; });
document.querySelectorAll('[data-admin-tab]').forEach(tab => tab.addEventListener('click', () => { const tipo = tab.dataset.adminTab; document.querySelectorAll('[data-admin-tab]').forEach(t => t.classList.toggle('ativo', t === tab)); document.getElementById('formPlanoAdmin').hidden = tipo !== 'plano'; document.getElementById('formTreinoAdmin').hidden = tipo !== 'treino'; document.getElementById('formAlunoAdmin').hidden = tipo !== 'aluno'; document.getElementById('alunosSalvos').hidden = tipo !== 'aluno' || !dadosAdmin.alunos.length; }));
const formPlanoAdmin = document.getElementById('formPlanoAdmin');
if (formPlanoAdmin) formPlanoAdmin.addEventListener('submit', e => { e.preventDefault(); dadosAdmin.planos.push({ nome: document.getElementById('planoNome').value.trim(), preco: document.getElementById('planoPreco').value, duracao: document.getElementById('planoDuracao').value, pagamento: document.getElementById('planoPagamento').value, beneficios: document.getElementById('planoBeneficios').value.split(',').map(x => x.trim()).filter(Boolean) }); salvarAdmin(); renderizarPlanosAdmin(); e.target.reset(); document.getElementById('planoFeedback').textContent = 'Plano salvo e publicado na página inicial.'; });
const formTreinoAdmin = document.getElementById('formTreinoAdmin');
if (formTreinoAdmin) formTreinoAdmin.addEventListener('submit', e => { e.preventDefault(); dadosAdmin.treinos.push({ id: crypto.randomUUID(), nome: document.getElementById('treinoNome').value.trim(), nivel: document.getElementById('treinoNivel').value, descricao: document.getElementById('treinoDescricao').value.trim() }); salvarAdmin(); renderizarTreinosAdmin(); e.target.reset(); document.getElementById('treinoFeedback').textContent = 'Treino salvo com sucesso.'; });
const formAlunoAdmin = document.getElementById('formAlunoAdmin');
if (formAlunoAdmin) formAlunoAdmin.addEventListener('submit', e => { e.preventDefault(); const email = document.getElementById('alunoEmail').value.trim(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { document.getElementById('alunoFeedback').textContent = 'Informe um e-mail válido.'; return; } const editId = formAlunoAdmin.dataset.editId; const aluno = { id: editId || crypto.randomUUID(), nome: document.getElementById('alunoNome').value.trim(), email, telefone: document.getElementById('alunoTelefone').value.trim(), plano: document.getElementById('alunoPlano').value, status: document.getElementById('alunoStatus').value }; const pos = dadosAdmin.alunos.findIndex(a => a.id === editId); if (pos >= 0) dadosAdmin.alunos[pos] = aluno; else dadosAdmin.alunos.push(aluno); delete formAlunoAdmin.dataset.editId; salvarAdmin(); renderizarAlunosAdmin(); e.target.reset(); document.getElementById('alunoFeedback').textContent = pos >= 0 ? 'Aluno atualizado.' : 'Aluno salvo com sucesso.'; });
document.addEventListener('click', e => { const editar = e.target.closest('[data-editar-aluno]'); const excluir = e.target.closest('[data-excluir-aluno]'); if (editar) { const aluno = dadosAdmin.alunos.find(a => a.id === editar.dataset.editarAluno); if (!aluno) return; ['nome','email','telefone','plano','status'].forEach(c => document.getElementById('aluno' + c[0].toUpperCase() + c.slice(1)).value = aluno[c]); formAlunoAdmin.dataset.editId = aluno.id; document.querySelector('[data-admin-tab="aluno"]').click(); document.getElementById('alunoNome').focus(); } if (excluir) { dadosAdmin.alunos = dadosAdmin.alunos.filter(a => a.id !== excluir.dataset.excluirAluno); salvarAdmin(); renderizarAlunosAdmin(); } });
// Checkout demonstrativo: não processa pagamentos reais.
const checkoutModal = document.getElementById('checkoutModal');
function ativarCheckout() { document.querySelectorAll('.btn-checkout').forEach(btn => btn.addEventListener('click', () => { document.getElementById('checkoutResumo').textContent = `${btn.dataset.plano} — R$ ${btn.dataset.preco}/mês`; checkoutModal.hidden = false; })); }
document.querySelectorAll('[data-fechar-checkout]').forEach(el => el.addEventListener('click', () => checkoutModal.hidden = true));
document.querySelectorAll('[data-metodo]').forEach(tab => tab.addEventListener('click', () => { const pix = tab.dataset.metodo === 'pix'; document.querySelectorAll('[data-metodo]').forEach(t => t.classList.toggle('ativo', t === tab)); document.getElementById('checkoutPix').hidden = !pix; document.getElementById('checkoutCartao').hidden = pix; }));
const copiarPix = document.getElementById('copiarPix'); if (copiarPix) copiarPix.addEventListener('click', async () => { await navigator.clipboard?.writeText(document.getElementById('pixChave').textContent); copiarPix.textContent = 'Chave copiada'; setTimeout(() => copiarPix.textContent = 'Copiar chave', 1800); });
const checkoutCartao = document.getElementById('checkoutCartao'); if (checkoutCartao) checkoutCartao.addEventListener('submit', e => { e.preventDefault(); const numero = document.getElementById('numeroCartao').value.replace(/\D/g, ''); const soma = numero.split('').reverse().reduce((acc, n, i) => { let v = +n; if (i % 2) v = v * 2 > 9 ? v * 2 - 9 : v * 2; return acc + v; }, 0); if (numero.length < 13 || soma % 10 !== 0) { document.getElementById('cartaoFeedback').textContent = 'Número de cartão inválido para esta simulação.'; return; } document.getElementById('cartaoFeedback').textContent = 'Pagamento simulado com sucesso. Nenhuma cobrança foi realizada.'; });
document.getElementById('numeroCartao')?.addEventListener('input', e => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim());
document.getElementById('validadeCartao')?.addEventListener('input', e => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4).replace(/(\d{2})(\d)/, '$1/$2'));
renderizarPlanosAdmin();
