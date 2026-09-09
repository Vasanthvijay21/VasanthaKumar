const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const counters=document.querySelectorAll('[data-count]');
let counted=false;
const countObserver=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting&&!counted){
    counted=true;
    counters.forEach(el=>{
      const target=+el.dataset.count; let n=0; const step=Math.max(1,Math.ceil(target/35));
      const timer=setInterval(()=>{n+=step;if(n>=target){n=target;clearInterval(timer)}el.textContent=n},35);
    });
  }
},{threshold:.4});
if(counters.length) countObserver.observe(counters[0]);

document.querySelector('.menu')?.addEventListener('click',()=>{
  const nav=document.querySelector('.nav nav');
  const open=nav.dataset.open==='1';
  nav.dataset.open=open?'0':'1';
  nav.style.display=open?'none':'flex';
  nav.style.position='absolute';nav.style.top='76px';nav.style.left='0';nav.style.right='0';
  nav.style.padding='20px';nav.style.background='#0b0b0f';nav.style.flexDirection='column';
});
