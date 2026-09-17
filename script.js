// En una apertura nueva, comenzar siempre por la portada, incluso si el enlace
// compartido traía #sellado o Safari intenta recuperar el scroll anterior.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (location.hash) history.replaceState(null, '', location.pathname + location.search);
let inicioPendiente = true;
function iniciarArriba() {
  if (!inicioPendiente) return;
  const html = document.documentElement;
  const previo = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  html.style.scrollBehavior = previo;
}
// En Safari iOS la restauración puede producirse después de DOMContentLoaded.
window.addEventListener('pageshow', iniciarArriba);
window.addEventListener('load', () => {
  iniciarArriba();
  requestAnimationFrame(() => requestAnimationFrame(iniciarArriba));
  setTimeout(() => { iniciarArriba(); inicioPendiente = false; }, 450);
});
// Si el usuario navega por los botones, respetar los enlaces internos.
document.addEventListener('click', e => {
  if (e.target.closest('a[href^="#"]')) inicioPendiente = false;
});
const menuButton=document.querySelector('.nav-toggle');
const menu=document.querySelector('.nav-links');
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú')}));
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.getElementById('service').value=link.dataset.service}));
document.getElementById('year').textContent=new Date().getFullYear();
