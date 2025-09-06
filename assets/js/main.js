const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}
const form = document.getElementById('contactForm');
if (form){
  const status = document.getElementById('formStatus');
  const fields = ['name','email','message'];
  const validators = {
    name: val => val.trim().length >= 2 || 'Veuillez entrer au moins 2 caractères.',
    email: val => /.+@.+\..+/.test(val) || 'Veuillez entrer un email valide.',
    message: val => val.trim().length >= 10 || 'Votre message doit contenir au moins 10 caractères.'
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    fields.forEach(id => {
      const el = document.getElementById(id);
      const small = el.parentElement.querySelector('.error');
      const rule = validators[id];
      const res = rule(el.value);
      if (res !== true){
        ok = false;
        small.textContent = res;
      } else {
        small.textContent = '';
      }
    });
    if (ok){
      status.textContent = 'Message prêt à être envoyé (simulation).';
      form.reset();
      setTimeout(()=> status.textContent = '', 3000);
    } else {
      status.textContent = 'Veuillez corriger les champs en rouge.';
    }
  });
}