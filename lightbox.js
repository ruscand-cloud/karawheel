document.addEventListener('DOMContentLoaded', ()=>{
  const cards = document.querySelectorAll('.img-card, .img-card--exec');
  if(!cards.length) return;

  const lb = document.createElement('div');
  lb.className = 'lb';
  lb.innerHTML = '<img alt=""><button class="close" aria-label="Închide">×</button>';
  document.body.appendChild(lb);

  const big = lb.querySelector('img');
  const close = lb.querySelector('.close');
  const open = (src)=>{ big.src = src; lb.classList.add('open'); };
  const hide = ()=>{ lb.classList.remove('open'); big.src=''; };

  cards.forEach(card=>{
    const img = card.querySelector('img');
    if(!img) return;
    card.addEventListener('click', ()=> open(img.src));
  });

  close.addEventListener('click', hide);
  lb.addEventListener('click', e=>{ if(e.target === lb) hide(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') hide(); });
});
