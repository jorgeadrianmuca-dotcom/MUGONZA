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

// Envío asincrónico: permanece en MuGonza sin redirigir a FormSubmit.
const quoteForm = document.getElementById('quote-form');
const quoteStatus = document.getElementById('quote-status');
if (quoteForm && quoteStatus) {
  quoteForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!quoteForm.reportValidity()) return;
    const button = quoteForm.querySelector('button[type="submit"]');
    const data = Object.fromEntries(new FormData(quoteForm).entries());
    if (data._honey) return;
    button.disabled = true;
    button.textContent = 'Enviando solicitud…';
    quoteStatus.hidden = false;
    quoteStatus.className = 'quote-status';
    quoteStatus.textContent = 'Enviando tu solicitud…';
    try {
      const response = await fetch('https://formsubmit.co/ajax/ventas@mugonza.cl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error('El servidor no confirmó el envío.');
      }
      quoteStatus.classList.add('success');
      quoteStatus.textContent = 'Solicitud enviada. ¡Gracias! Nos pondremos en contacto contigo.';
      quoteForm.reset();
    } catch (error) {
      quoteStatus.classList.add('error');
      quoteStatus.textContent = 'No pudimos confirmar el envío. Inténtalo otra vez o escríbenos a ventas@mugonza.cl.';
    } finally {
      button.disabled = false;
      button.textContent = 'Enviar solicitud de cotización ↗';
    }
  });
}
