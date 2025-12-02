    const childTemplates = {
      'Tá com Elas': `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Tá com Elas</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"><style>:root{--font-family:'Open Sans',sans-serif;--font-size-body:14px;--font-weight-bold:600;--color-background:#BE99DF;--color-card-bg:#fff;--color-card-border:#dbdfe7;--color-card-shadow:rgba(99,77,255,.06);--color-header:#525356;--color-label:#5C3875;--color-input-border:#dbdfe7;--color-input-text:#71747A;--color-focus-border:rgb(90,76,194);}html,body{margin:0;padding:0;overflow:auto;width:100%;box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}body{font-family:var(--font-family);font-size:var(--font-size-body);background-color:transparent;}label{color:var(--color-label);font-weight:var(--font-weight-bold);}form{padding:1rem;} .form-control,.form-select{border:1px solid var(--color-input-border);border-radius:6px;padding:12px;font-size:14px;color:var(--color-input-text);} .form-control:focus,.form-select:focus{border-color:var(--color-focus-border);box-shadow:none;} .section-title{font-size:20px;margin-top:8px;text-align:center;color:var(--color-header);} </style></head><body><div><form id="formFilho"><div id="secaoFormulario"><h2 class="section-title">Informações do Negócio</h2><div class="mb-3"><label for="nomenegocio" class="form-label">Nome do Negócio ou Projeto*</label><input type="text" id="nomenegocio" name="nomenegocio" class="form-control" required></div><div class="mb-3"><label for="anodonegocio" class="form-label">Ano de criação do negócio</label><input type="number" id="anodonegocio" name="anodonegocio" class="form-control" placeholder="Ex: 2018" /></div><div class="mb-3"><label class="form-label">Tem conta bancária própria?</label><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="temcontabancaria" value="Sim" id="contaSim"><label class="form-check-label" for="contaSim">Sim</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="temcontabancaria" value="Não" id="contaNao"><label class="form-check-label" for="contaNao">Não</label></div></div><div class="mb-3"><label class="form-label">Já fez curso de empreendedorismo?</label><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="jafezcurso" value="Sim" id="cursoSim"><label class="form-check-label" for="cursoSim">Sim</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="jafezcurso" value="Não" id="cursoNao"><label class="form-check-label" for="cursoNao">Não</label></div></div><div class="mb-3"><label class="form-label">É MEI?</label><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="mei" value="Sim" id="meiSim"><label class="form-check-label" for="meiSim">Sim</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="mei" value="Não" id="meiNao"><label class="form-check-label" for="meiNao">Não</label></div></div><div class="mb-3"><label for="instagram" class="form-label">Instagram</label><input type="text" id="instagram" name="instagram" class="form-control" placeholder="@usuario"></div><div class="mb-3"><label for="resumodescricao" class="form-label">Resumo / Descrição*</label><textarea id="resumodescricao" name="resumodescricao" class="form-control" rows="5" required></textarea></div><div class="mb-3"><label class="form-label">Quais suas maiores dificuldades? (Marque quantas precisar)</label><div class="row"><div class="col-md-6"><div class="form-check"><label class="form-check-label"><input type="checkbox" name="dificuldades[]" value="Marketing" class="form-check-input">Dificuldade com Marketing</label></div><div class="form-check"><label class="form-check-label"><input type="checkbox" name="dificuldades[]" value="Precificação" class="form-check-input">Dificuldade com Precificação</label></div><div class="form-check"><label class="form-check-label"><input type="checkbox" name="dificuldades[]" value="Fidelização de clientes" class="form-check-input">Dificuldade com fidelização de clientes</label></div><div class="form-check"><label class="form-check-label"><input type="checkbox" name="dificuldades[]" value="Estabelecer diferenciais" class="form-check-input">Dificuldade para estabelecer diferenciais</label></div><div class="form-check"><label class="form-check-label"><input type="checkbox" name="dificuldades[]" value="Investimento e capital de giro" class="form-check-input">Dificuldade com investimento e capital de giro</label></div><div class="form-check"><label class="form-check-label"><input type="checkbox" name="dificuldades[]" value="Redes sociais" class="form-check-input">Dificuldade com redes sociais</label></div><div class="form-check"><label class="form-check-label"><input type="checkbox" name="dificuldades[]" value="Infraestrutura" class="form-check-input">Dificuldade com infraestrutura</label></div></div><div class="col-md-6"><div class="form-check"><label class="form-check-label"><input type="checkbox" name="dificuldades[]" value="Financeiras" class="form-check-input">Dificuldades financeiras</label></div><div class="form-check"><label class="form-check-label"><input type="checkbox" name="dificuldades[]" value="Materiais e produção" class="form-check-input">Dificuldade com materiais e produção</label></div><div class="form-check"><label class="form-check-label"><input type="checkbox" name="dificuldades[]" value="Gestão e organização" class="form-check-input">Dificuldade com gestão e organização</label></div><div class="form-check"><label class="form-check-label"><input type="checkbox" name="dificuldades[]" value="Vendas e captação" class="form-check-input">Dificuldade com vendas e captação</label></div><div class="form-check"><label class="form-check-label"><input type="checkbox" name="dificuldades[]" value="Operacionais" class="form-check-input">Dificuldades operacionais</label></div><div class="form-check"><label class="form-check-label"><input type="checkbox" name="dificuldades[]" value="Mídia e publicidade" class="form-check-input">Dificuldade com mídia e publicidade</label></div></div></div></div><div class="mb-3"><label for="horariomentoria" class="form-label">Melhor horário para mentoria</label><select id="horariomentoria" name="horariomentoria" class="form-select"><option value="">Selecione</option><option value="Manhã">Manhã</option><option value="Tarde">Tarde</option><option value="Noite">Noite</option><option value="Manhã ou Tarde">Manhã ou Tarde</option><option value="Manhã ou Noite">Manhã ou Noite</option><option value="Tarde ou Noite">Tarde ou Noite</option><option value="Todos">Todos</option></select></div></div></form></div><script>window.addEventListener('load',()=>{const ajustarAltura=()=>{parent.postMessage({tipo:'ajusteAltura',altura:document.documentElement.scrollHeight},'*');};const ro=new ResizeObserver(ajustarAltura);ro.observe(document.documentElement);ajustarAltura();});async function receberDadosEEnviar(event){if(event.data?.tipo!=='enviarDados')return;const dadosPai=event.data.dadosPai;const fdFilho=new FormData(document.getElementById('formFilho'));const dadosFilho={};fdFilho.forEach((value,key)=>{if(key.endsWith('[]')){const cleanKey=key.slice(0,-2);if(!dadosFilho[cleanKey])dadosFilho[cleanKey]=[];dadosFilho[cleanKey].push(value);}else{dadosFilho[key]=value;}});const dadosCompletos={...dadosPai,...dadosFilho};try{const r=await fetch('https://webhook-n8n-dev-conectarecife.recife.pe.gov.br/webhook/receber-inscricao',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(dadosCompletos)}).then(r=>r.text());parent.postMessage({tipo:'envioConcluido',status:'sucesso',mensagem:r},'*');}catch(e){parent.postMessage({tipo:'envioConcluido',status:'erro',mensagem:e.message},'*');}}window.addEventListener('message',receberDadosEEnviar);</script>
</body>

</html>`,
'Centro Marta Almeida': buildChildTemplate('Centro Marta Almeida', `
<div class="mb-3">
  <label for="cursoInteresse" class="form-label">Curso de interesse*</label>
  <select id="cursoInteresse" name="cursoInteresse" class="form-select" required>
    <option value="">Selecione</option>
    <option value="Tecnologia e Inovação">Tecnologia e Inovação</option>
    <option value="Beleza e Bem-estar">Beleza e Bem-estar</option>
    <option value="Gastronomia">Gastronomia</option>
    <option value="Gestão e Administração">Gestão e Administração</option>
  </select>
</div>
<div class="row g-3 mb-3">
  <div class="col-md-6">
    <label for="escolaridade" class="form-label">Escolaridade</label>
    <select id="escolaridade" name="escolaridade" class="form-select">
      <option value="">Selecione</option>
      <option value="Fundamental completo">Fundamental completo</option>
      <option value="Médio completo">Médio completo</option>
      <option value="Superior em andamento">Superior em andamento</option>
      <option value="Superior completo">Superior completo</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="disponibilidade" class="form-label">Disponibilidade de horário</label>
    <select id="disponibilidade" name="disponibilidade" class="form-select">
      <option value="">Selecione</option>
      <option value="Manhã">Manhã</option>
      <option value="Tarde">Tarde</option>
      <option value="Noite">Noite</option>
      <option value="Final de semana">Final de semana</option>
    </select>
  </div>
</div>
<div class="mb-3">
  <label for="objetivoCurso" class="form-label">O que espera conquistar com o curso?</label>
  <textarea id="objetivoCurso" name="objetivoCurso" class="form-control" rows="4"></textarea>
</div>
`),
'Rede de Artesãs': buildChildTemplate('Rede de Artesãs', `
<div class="mb-3">
  <label for="tipoArtesanato" class="form-label">Tipo de artesanato*</label>
  <input type="text" id="tipoArtesanato" name="tipoArtesanato" class="form-control" required />
</div>
<div class="row g-3 mb-3">
  <div class="col-md-6">
    <label for="tempoAtuacao" class="form-label">Tempo de atuação</label>
    <select id="tempoAtuacao" name="tempoAtuacao" class="form-select">
      <option value="">Selecione</option>
      <option value="Até 1 ano">Até 1 ano</option>
      <option value="2 a 3 anos">2 a 3 anos</option>
      <option value="4 a 5 anos">4 a 5 anos</option>
      <option value="Mais de 5 anos">Mais de 5 anos</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="canaisVenda" class="form-label">Canais de venda atuais</label>
    <select id="canaisVenda" name="canaisVenda" class="form-select" multiple>
      <option value="Feiras locais">Feiras locais</option>
      <option value="Loja própria">Loja própria</option>
      <option value="Redes sociais">Redes sociais</option>
      <option value="Marketplaces">Marketplaces</option>
      <option value="Exportação">Exportação</option>
    </select>
  </div>
</div>
<div class="mb-3">
  <label for="materiais" class="form-label">Principais materiais usados</label>
  <input type="text" id="materiais" name="materiais" class="form-control" />
</div>
<div class="mb-3">
  <label for="historiaMarca" class="form-label">Conte um pouco da sua marca</label>
  <textarea id="historiaMarca" name="historiaMarca" class="form-control" rows="4"></textarea>
</div>
`)
};

const overlay = document.getElementById('programOverlay');
const openButtons = document.querySelectorAll('[data-programa]');
const closeButtons = [document.getElementById('closeOverlay'), document.getElementById('fecharForm')];
const form = document.getElementById('formInscricao');
const selectPrograma = document.getElementById('tipodeinscricao');
const iframe = document.getElementById('iframeTipoInscricao');
const resp = document.getElementById('responseMessage');
const btnSubmit = document.getElementById('btnSubmit');
const divMentoria = document.getElementById('divLocalMentoria');
const divEndNegocio = document.getElementById('divEndNegocio');
const endNegocioCheck = document.getElementById('endnegocio');
const modalProgramTitle = document.getElementById('modalProgramTitle');
const fileInput = document.getElementById('comprovres');

const cpf = document.getElementById('cpf');
const datanasc = document.getElementById('datanasc');
const tel = document.getElementById('telefone');
const tel2 = document.getElementById('telefone2');
const cep = document.getElementById('cep');
const logra = document.getElementById('logradouro');
const bairro = document.getElementById('bairro');

function buildChildTemplate(title, content) {
return `
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      margin: 0;
      padding: 12px;
      background: transparent;
    }

    label {
      font-weight: 700;
      color: #003a73;
    }

    .form-control,
    .form-select {
      border: 1px solid #d0d7e2;
      border-radius: 8px;
      padding: 12px;
      box-shadow: none;
    }

    .form-control:focus,
    .form-select:focus {
      border-color: #0053a4;
      box-shadow: none;
    }

    .section-title {
      text-align: center;
      color: #003a73;
      font-weight: 800;
      margin: 8px 0 18px;
    }

    .card-soft {
      background: #fff;
      border: 1px solid #eef2f7;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
      padding: 16px;
    }
  </style>
</head>

<body>
  <div class="card-soft">
    <h2 class="section-title">${title}</h2>
    <form id="formFilho">${content}</form>
  </div>
  <script>window.addEventListener('load',()=>{const ajustarAltura=()=>parent.postMessage({tipo:'ajusteAltura',altura:document.documentElement.scrollHeight},'*');new ResizeObserver(ajustarAltura).observe(document.documentElement);ajustarAltura();});async function receberDadosEEnviar(event){if(event.data?.tipo!=='enviarDados')return;const dadosPai=event.data.dadosPai;const fdFilho=new FormData(document.getElementById('formFilho'));const dadosFilho={};fdFilho.forEach((value,key)=>{if(key.endsWith('[]')){const cleanKey=key.slice(0,-2);if(!dadosFilho[cleanKey])dadosFilho[cleanKey]=[];dadosFilho[cleanKey].push(value);}else{dadosFilho[key]=value;}});const dadosCompletos={...dadosPai,...dadosFilho};try{const r=await fetch('https://webhook-n8n-dev-conectarecife.recife.pe.gov.br/webhook/receber-inscricao',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(dadosCompletos)}).then(r=>r.text());parent.postMessage({tipo:'envioConcluido',status:'sucesso',mensagem:r},'*');}catch(e){parent.postMessage({tipo:'envioConcluido',status:'erro',mensagem:e.message},'*');}}window.addEventListener('message',receberDadosEEnviar);</script>
</body>

</html>`;
}

function aplicarMascaraCPF(v) {
let d = v.replace(/\D/g, '').slice(0, 11);
return d.replace(/(\d{3})(\d{3})(\d{3})(\d{2})?/, '$1.$2.$3-$4').replace(/[-.]$/, '');
}
function aplicarMascaraData(v) {
return v.replace(/\D/g, '').slice(0, 8).replace(/(\d{2})(\d{2})(\d{4})?/, '$1/$2/$3').replace(/\/$/, '');
}
function aplicarMascaraTelefone(v) {
let d = v.replace(/\D/g, '').slice(0, 11);
return d.replace(/(\d{2})(\d{5})(\d{4})?/, '($1) $2-$3').replace(/[- ]$/, '');
}
function aplicarMascaraCEP(v) {
return v.replace(/\D/g, '').slice(0, 8).replace(/(\d{5})(\d{3})?/, '$1-$2').replace(/-$/, '');
}

async function buscarCEP() {
const raw = cep.value.replace(/\D/g, '');
if (raw.length !== 8) return;
try {
const d = await fetch(`https://viacep.com.br/ws/${raw}/json/`).then(r => r.json());
if (!d.erro) {
logra.value = d.logradouro || '';
bairro.value = d.bairro || '';
}
} catch (e) {
console.error('CEP não encontrado', e);
}
}

function toggleProgramaCampos(tipo) {
const isTaComElas = tipo === 'Tá com Elas';
divMentoria.style.display = isTaComElas ? 'block' : 'none';
divEndNegocio.style.display = isTaComElas ? 'block' : 'none';
if (!isTaComElas) {
endNegocioCheck.checked = false;
document.querySelectorAll('input[name="localmentoria"]').forEach(r => (r.checked = false));
}
}

function atualizarIframe(tipo) {
const html = childTemplates[tipo] || '';
if (!html) {
iframe.style.display = 'none';
iframe.src = '';
iframe.style.height = '0px';
return;
}
iframe.style.display = 'block';
iframe.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(html);
}

function openOverlay(programa) {
overlay.classList.add('is-open');
overlay.setAttribute('aria-hidden', 'false');
document.body.style.overflow = 'hidden';
resp.textContent = '';
form.classList.remove('was-validated');
if (programa) {
selectPrograma.value = programa;
modalProgramTitle.textContent = programa;
toggleProgramaCampos(programa);
atualizarIframe(programa);
}
}

function closeOverlay() {
overlay.classList.remove('is-open');
overlay.setAttribute('aria-hidden', 'true');
document.body.style.overflow = '';
form.reset();
atualizarIframe('');
modalProgramTitle.textContent = 'Selecionar programa';
}

function limparFeedback() {
resp.textContent = '';
}

async function blobToBase64(file) {
return new Promise(resolve => {
const reader = new FileReader();
reader.onloadend = () => resolve(reader.result.split(',')[1]);
reader.readAsDataURL(file);
});
}

async function enviarInscricao(event) {
event.preventDefault();
if (!form.checkValidity()) {
event.stopPropagation();
form.classList.add('was-validated');
return;
}

btnSubmit.disabled = true;
resp.textContent = 'Preparando envio...';
form.classList.add('was-validated');

let base64 = '';
if (fileInput.files.length) {
const f = fileInput.files[0];
if (f.size > 25 * 1024 * 1024) {
resp.textContent = 'O arquivo excede o limite de 25MB.';
btnSubmit.disabled = false;
return;
}
base64 = await blobToBase64(f);
}

const fd = new FormData(form);
const dadosPai = {};
fd.forEach((value, key) => {
if (key.endsWith('[]')) {
const cleanKey = key.slice(0, -2);
if (!dadosPai[cleanKey]) dadosPai[cleanKey] = [];
dadosPai[cleanKey].push(value);
} else {
dadosPai[key] = value;
}
});
dadosPai.comprovres_base64 = base64;
delete dadosPai.comprovres;

if (iframe && iframe.contentWindow && iframe.style.display !== 'none') {
resp.textContent = 'Enviando dados específicos...';
iframe.contentWindow.postMessage({ tipo: 'enviarDados', dadosPai }, '*');
} else {
try {
const r = await fetch('https://webhook-n8n-dev-conectarecife.recife.pe.gov.br/webhook/receber-inscricao', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(dadosPai)
}).then(r => r.text());
resp.textContent = r;
form.reset();
} catch (e) {
resp.textContent = 'Erro ao enviar inscrição: ' + e.message;
}
}

btnSubmit.disabled = false;
}

window.addEventListener('message', event => {
if (!event.data) return;
if (event.data.tipo === 'ajusteAltura') {
iframe.style.height = event.data.altura + 'px';
} else if (event.data.tipo === 'envioConcluido') {
resp.textContent = event.data.mensagem;
if (event.data.status === 'sucesso') {
form.reset();
atualizarIframe('');
modalProgramTitle.textContent = 'Selecionar programa';
}
btnSubmit.disabled = false;
}
});

openButtons.forEach(btn => {
btn.addEventListener('click', e => {
e.preventDefault();
const programa = btn.getAttribute('data-programa');
openOverlay(programa);
});
});

closeButtons.forEach(btn => btn?.addEventListener('click', closeOverlay));
overlay.addEventListener('click', e => {
if (e.target === overlay) closeOverlay();
});

selectPrograma.addEventListener('change', e => {
toggleProgramaCampos(e.target.value);
atualizarIframe(e.target.value);
modalProgramTitle.textContent = e.target.value || 'Selecionar programa';
});

form.addEventListener('submit', enviarInscricao);
form.addEventListener('input', limparFeedback);
fileInput.addEventListener('change', limparFeedback);

cpf.addEventListener('input', e => (e.target.value = aplicarMascaraCPF(e.target.value)));
datanasc.addEventListener('input', e => (e.target.value = aplicarMascaraData(e.target.value)));
tel.addEventListener('input', e => (e.target.value = aplicarMascaraTelefone(e.target.value)));
tel2.addEventListener('input', e => (e.target.value = aplicarMascaraTelefone(e.target.value)));
cep.addEventListener('input', e => (e.target.value = aplicarMascaraCEP(e.target.value)));
cep.addEventListener('blur', buscarCEP);
