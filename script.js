(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
// theme
const root=document.documentElement,saved=localStorage.getItem('theme');
if(saved)root.dataset.theme=saved;else if(matchMedia('(prefers-color-scheme: dark)').matches)root.dataset.theme='dark';
$('#theme').onclick=()=>{const t=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=t;localStorage.setItem('theme',t)};
// mobile menu
const b=$('#burger'),m=$('#menu');
b.onclick=()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)};
$$('#menu a').forEach(a=>a.onclick=()=>{m.classList.remove('open');b.setAttribute('aria-expanded',false)});
// reveal + count-up
const fmt=n=>n.toLocaleString('ko-KR');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');
 $$('[data-n]',e.target).forEach(c=>{const t=+c.dataset.n;let s=null;const f=ts=>{s??=ts;const p=Math.min((ts-s)/1200,1);c.textContent=fmt(Math.round(t*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)});
 io.unobserve(e.target)}),{threshold:.15});
$$('.reveal').forEach(el=>io.observe(el));
// scrollspy
const links=$$('#menu a[href^="#"]:not(.cta)');
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
$$('main section[id]').forEach(s=>so.observe(s));
// tabs (keyboard accessible)
function tabs(list,onSel){const t=$$('[role=tab]',list);
 const sel=x=>{t.forEach(y=>{const on=y===x;y.setAttribute('aria-selected',on);y.tabIndex=on?0:-1});onSel(x)};
 t.forEach((x,i)=>{x.onclick=()=>sel(x);x.onkeydown=e=>{const k={ArrowRight:1,ArrowLeft:-1}[e.key];if(k){const n=t[(i+k+t.length)%t.length];n.focus();sel(n)}}})}
tabs($('#design .tabs'),x=>$$('#design .panel').forEach(p=>p.hidden=p.id!==x.getAttribute('aria-controls')));
// unit plans (self-made schematic data)
const U={
59:{t:'59㎡ 타입',d:'2~3인 가구를 위한 효율적 구성(더미).',l:['방 2 · 욕실 1','알파룸 옵션','남향 단면 거실'],r:[[20,20,150,110,'거실'],[170,20,80,110,'침실1'],[250,20,90,110,'침실2'],[20,130,90,110,'주방'],[110,130,70,110,'욕실'],[180,130,160,110,'발코니']]},
84:{t:'84㎡ 타입',d:'4베이 판상형 가족 평면(더미).',l:['방 3 · 욕실 2','드레스룸','4Bay 전면 발코니'],r:[[20,20,170,100,'거실'],[190,20,70,100,'침실1'],[260,20,80,100,'침실2'],[20,120,80,120,'주방'],[100,120,70,120,'욕실'],[170,120,90,120,'침실3'],[260,120,80,120,'드레스']]},
101:{t:'101㎡ 타입',d:'넓은 거실과 분리형 주방(더미).',l:['방 4 · 욕실 2','대형 팬트리','와이드 거실'],r:[[20,20,200,100,'거실'],[220,20,60,100,'침실1'],[280,20,60,100,'침실2'],[20,120,90,120,'주방'],[110,120,60,120,'욕실'],[170,120,90,120,'침실3'],[260,120,80,120,'침실4']]},
120:{t:'120㎡ 타입',d:'프리미엄 대형 평면(더미).',l:['방 4 · 욕실 3','마스터 스위트','서재'],r:[[20,20,200,100,'거실'],[220,20,120,100,'마스터'],[20,120,80,120,'주방'],[100,120,60,120,'욕실'],[160,120,90,120,'서재'],[250,120,90,120,'침실']]}};
function plan(k){const u=U[k];$('#uTitle').textContent=u.t;$('#uDesc').textContent=u.d;$('#uList').innerHTML=u.l.map(x=>`<li>${x}</li>`).join('');
 $('#plan').innerHTML=u.r.map(([x,y,w,h,n])=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="currentColor" stroke-width="2"/><text x="${x+w/2}" y="${y+h/2+4}" text-anchor="middle" font-size="13" fill="currentColor">${n}</text>`).join('')}
plan(59);tabs($('#unitTabs'),x=>plan(x.dataset.u));
// form demo
const f=$('#form');f.addEventListener('submit',e=>{if(f.access_key.value==='YOUR_ACCESS_KEY'){e.preventDefault();$('#fmsg').textContent='데모입니다. 실제로 전송되지 않았습니다.'}});
})();
