// RAT.RP Frontend interactions
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}

// Copy IP buttons
function copyIP(ip) {
  navigator.clipboard.writeText(ip).then(()=>{
    alert('IP скопирован: ' + ip);
  }).catch(()=>{
    prompt('Скопируйте IP вручную:', ip);
  });
}

document.getElementById('copyIpBtn')?.addEventListener('click', (e)=>{
  copyIP(e.currentTarget.dataset.ip || 'rat-rp.ru:7777');
});
document.getElementById('copyIpBtn2')?.addEventListener('click', ()=> copyIP('rat-rp.ru:7777'));

// Fake online counter (nice animation)
const onlineEl = document.getElementById('onlineCount');
if (onlineEl){
  const base = 620 + Math.floor(Math.random()*180);
  let value = base;
  onlineEl.textContent = value;
  setInterval(()=>{
    const delta = Math.floor(Math.random()*7) - 3; // -3..+3
    value = Math.max(400, value + delta);
    onlineEl.textContent = value;
  }, 2000);
}

// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      nav?.classList.remove('open');
    }
  });
});

// Discord placeholder buttons (user will add link later)
function setDiscord(url){
  document.querySelectorAll('#discordBtn,#discordBtn2,#discordFooter').forEach(el=>{
    el.setAttribute('href', url);
    el.setAttribute('title', 'Discord');
  });
}
// TODO: Замените ссылку ниже на реальную ссылку вашего дискорда
setDiscord('#');

// Header shrink on scroll
const header = document.querySelector('.header');
let last = 0;
addEventListener('scroll', ()=>{
  const y = window.scrollY || document.documentElement.scrollTop;
  if (!header) return;
  header.style.backdropFilter = y > 10 ? 'blur(16px)' : 'blur(12px)';
  if (y > last && y > 120) header.classList.add('hide'); else header.classList.remove('hide');
  last = y;
});

// Animate hamburger icon
if (hamburger){
  hamburger.addEventListener('click', ()=>{
    const spans = hamburger.querySelectorAll('span');
    const active = hamburger.classList.contains('active');
    spans[0].style.transform = active ? 'none' : 'rotate(45deg) translateY(8px)';
    spans[1].style.opacity = active ? '1' : '0';
    spans[2].style.transform = active ? 'none' : 'rotate(-45deg) translateY(-8px)';
  });
}
