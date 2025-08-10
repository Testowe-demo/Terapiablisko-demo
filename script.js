
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  });
});

// reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
}, {threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

function handleSubmit(e){
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true; btn.textContent = 'Wysyłanie...';
  setTimeout(()=>{ btn.textContent='Wysłano — dziękuję!'; e.target.reset(); }, 900);
}
