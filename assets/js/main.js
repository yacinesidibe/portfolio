const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.getElementById('formStatus');
  const fields = ['name','email','message'];
  const validators = {
    name: val => val.trim().length >= 2 || 'Veuillez entrer au moins 2 caractères.',
    email: val => /.+@.+\..+/.test(val) || 'Veuillez entrer un email valide.',
    message: val => val.trim().length >= 10 || 'Votre message doit contenir au moins 10 caractères.'
  };

  form.addEventListener('submit', (e) => {
    let ok = true;
    fields.forEach(id => {
      const el = document.getElementById(id);
      const small = el.parentElement.querySelector('.error');
      const res = validators[id](el.value);
      if (res !== true) { ok = false; small.textContent = res; }
      else { small.textContent = ''; }
    });

    if (!ok) {
      e.preventDefault();            
      if (status) status.textContent = 'Veuillez corriger les champs en rouge.';
    }
  
  });
});
