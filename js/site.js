(function () {
  'use strict';
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.header-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const opened = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(opened));
      menuBtn.textContent = opened ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); menuBtn.textContent='☰';
    }));
  }
  const observer = window.IntersectionObserver ? new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) {e.target.classList.add('visible'); observer.unobserve(e.target);} });
  },{threshold:.09}) : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubs = [...document.querySelectorAll('.publication')];
  const moreBtn = document.querySelector('.pub-more');
  const pubCount = document.querySelector('.pub-count');
  let activeFilter = 'all'; let expanded = false;
  function renderPubs(){
    const matches = pubs.filter(p => activeFilter === 'all' || (p.dataset.category||'').split(' ').includes(activeFilter));
    pubs.forEach(p => {
      const matched = matches.includes(p);
      p.hidden = !matched;
      p.classList.toggle('is-collapsed', matched && !expanded && (activeFilter === 'all' ? p.dataset.featured !== 'true' : matches.indexOf(p) >= 6));
    });
    if(moreBtn){moreBtn.hidden=matches.length<=6;moreBtn.textContent = expanded?'Show fewer publications ↑':'View all '+matches.length+' publications ↓';}
    if(pubCount) pubCount.textContent=matches.length+' publications';
  }
  filterBtns.forEach(btn=>btn.addEventListener('click',()=>{
    activeFilter=btn.dataset.filter;expanded=false;
    filterBtns.forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn));});
    renderPubs();
  }));
  if(moreBtn) moreBtn.addEventListener('click',()=>{expanded=!expanded;renderPubs();});
  if(pubs.length) renderPubs();
  const modal=document.querySelector('.figure-modal');
  const openZoom=document.querySelector('.zoom-figure');
  function closeModal(){if(modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}}
  if(modal && openZoom){
    openZoom.addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';});
    modal.addEventListener('click',closeModal);
    modal.querySelector('.modal-close')?.addEventListener('click',closeModal);
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
  }
  document.querySelectorAll('.network-overlay').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.add('active')));
  const sections=[...document.querySelectorAll('main section[id]')];
  if(sections.length && window.IntersectionObserver){
    const navObserver=new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){document.querySelectorAll('.header-nav a[href^="#"]').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}});
    },{rootMargin:'-25% 0px -60% 0px'});
    sections.forEach(s=>navObserver.observe(s));
  }
})();
