
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
});
const menuButton=document.querySelector('.nav-toggle');
const menu=document.querySelector('.nav-links');
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú')}));
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.getElementById('service').value=link.dataset.service}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('quote-form').addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const data=new FormData(form);const subject=`Cotización MuGonza - ${data.get('service')}`;const body=`Hola MuGonza,\n\nMe gustaría solicitar una cotización.\n\nNombre / empresa: ${data.get('name')}\nCorreo: ${data.get('email')}\nÁrea: ${data.get('service')}\n\nDetalle del requerimiento:\n${data.get('message')}\n\nAdjuntaré planos o fotografías si corresponde.\n\nSaludos.`;window.location.href=`mailto:ventas@mugonza.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`});
