const blueCardStyles=document.createElement('link');
blueCardStyles.rel='stylesheet';
blueCardStyles.href='studio-overrides.css';
document.head.appendChild(blueCardStyles);
const effectsStyles=document.createElement('link');
effectsStyles.rel='stylesheet';
effectsStyles.href='studio-effects.css';
document.head.appendChild(effectsStyles);
const depthStyles=document.createElement('link');
depthStyles.rel='stylesheet';
depthStyles.href='studio-depth.css';
document.head.appendChild(depthStyles);
const contrastStyles=document.createElement('link');
contrastStyles.rel='stylesheet';
contrastStyles.href='studio-contrast.css';
document.head.appendChild(contrastStyles);
const headerGlassCss=document.createElement('style');headerGlassCss.textContent=`:root{--glass:#10151ccc;--glass-edge:#ffffff1a;--glass-hi:#ffffff16}.site-header{position:absolute!important;top:16px!important;left:max(16px,2vw)!important;right:max(16px,2vw)!important;inset-block:auto!important;height:68px!important;padding:0 18px!important;border:1px solid var(--glass-edge);border-radius:18px;background:var(--glass)!important;backdrop-filter:blur(18px) saturate(125%);-webkit-backdrop-filter:blur(18px) saturate(125%);box-shadow:0 14px 40px #0003}.site-header:after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;box-shadow:inset 0 1px #ffffff12}.site-header .wordmark,.site-header nav,.site-header .menu-toggle{position:relative;z-index:1}.site-header nav.glass-nav{position:relative;gap:4px;padding:4px;border:1px solid #ffffff12;border-radius:14px;background:#00000018}.site-header nav.glass-nav a{position:relative;z-index:1;padding:9px 11px;border-radius:10px;color:#bcc3cd;transition:color .28s ease}.site-header nav.glass-nav a:hover,.site-header nav.glass-nav a[aria-current="page"]{color:#fff}.nav-bubble{position:absolute;z-index:0;top:4px;left:0;height:calc(100% - 8px);width:var(--bubble-w,0);border-radius:10px;background:var(--glass-hi);border:1px solid #ffffff1a;box-shadow:0 4px 12px #0002;transform:translateX(var(--bubble-x,0));opacity:0;transition:transform .5s cubic-bezier(.2,.9,.2,1),width .5s cubic-bezier(.2,.9,.2,1),opacity .2s}.nav-bubble.is-ready{opacity:1}.site-header nav.glass-nav a:last-child{background:#3779ff;color:#fff;border-radius:10px;padding-inline:15px;box-shadow:0 6px 18px #3779ff55}@media(max-width:800px){.site-header{top:12px!important;left:12px!important;right:12px!important;height:62px!important;border-radius:15px;padding:0 12px!important}.site-header nav.glass-nav{top:72px!important;left:0!important;right:0!important;border-radius:15px;background:#10151cf2!important;backdrop-filter:blur(18px)}.site-header nav.glass-nav a{padding:13px 14px}.site-header nav.glass-nav a:last-child{padding:13px 14px}.nav-bubble{display:none}}`;document.head.appendChild(headerGlassCss);
const headerScrollCss=document.createElement('style');headerScrollCss.textContent=`.site-header{position:fixed!important;top:12px!important;height:58px!important;transition:height .35s ease,top .35s ease,background .35s ease,box-shadow .35s ease}.site-header .wordmark{font-size:20px;transition:font-size .35s ease}.site-header .wordmark span{font-size:8px}.site-header nav.glass-nav a{font-size:10px;padding:8px 10px}.site-header.is-condensed{top:8px!important;height:48px!important;background:#0c1017e8!important;box-shadow:0 9px 28px #0005}.site-header.is-condensed .wordmark{font-size:16px}.site-header.is-condensed .wordmark span{display:none}.site-header.is-condensed nav.glass-nav{padding:3px}.site-header.is-condensed nav.glass-nav a{padding:6px 9px}@media(max-width:800px){.site-header{height:56px!important;top:10px!important}.site-header.is-condensed{height:50px!important;top:6px!important}.site-header .wordmark{font-size:18px}.site-header nav.glass-nav{top:66px!important}}`;document.head.appendChild(headerScrollCss);
if(document.querySelector('.fatec-hero')){const fatecStyles=document.createElement('link');fatecStyles.rel='stylesheet';fatecStyles.href='fatec-case.css';document.head.appendChild(fatecStyles);const fatecMotion=document.createElement('link');fatecMotion.rel='stylesheet';fatecMotion.href='fatec-motion.css';document.head.appendChild(fatecMotion);const fatecRestore=document.createElement('link');fatecRestore.rel='stylesheet';fatecRestore.href='fatec-restore.css';document.head.appendChild(fatecRestore);const fatecProduct=document.createElement('link');fatecProduct.rel='stylesheet';fatecProduct.href='fatec-product.css';document.head.appendChild(fatecProduct);const fatecFix=document.createElement('link');fatecFix.rel='stylesheet';fatecFix.href='fatec-fix.css';document.head.appendChild(fatecFix);const fatecPremium=document.createElement('link');fatecPremium.rel='stylesheet';fatecPremium.href='fatec-premium.css';document.head.appendChild(fatecPremium);}

const isHomePage=location.pathname==='/'||location.pathname.endsWith('/index.html');
let shouldShowLoader=false;
try{shouldShowLoader=isHomePage&&!sessionStorage.getItem('yb-loader-seen');if(shouldShowLoader)sessionStorage.setItem('yb-loader-seen','1');}catch{}
if(shouldShowLoader){const loader=document.createElement('div');loader.className='site-loader';loader.setAttribute('aria-hidden','true');loader.innerHTML='<span class="loader-mark">YB</span><span class="loader-line"><i></i></span>';document.body.prepend(loader);const dismiss=()=>loader.classList.add('is-hidden');if(document.readyState==='complete')setTimeout(dismiss,350);else window.addEventListener('load',()=>setTimeout(dismiss,350),{once:true});setTimeout(dismiss,1800);}

const heroImage=document.querySelector('.hero-image');
if(heroImage) {heroImage.src='assets/hero-tropical-sky.jpg?v=20260916';heroImage.alt='Ciel tropical encadré par des feuilles de bananier';}

const fatecHero=document.querySelector('.fatec-hero');
if(fatecHero){const evidence=document.createElement('section');evidence.className='section fatec-evidence';evidence.innerHTML='<div class="fatec-evidence-intro"><span class="eyebrow">Preuves produit</span><h2>Un geste simple : lire, décider, avancer.</h2><p>Le front Lovable transforme la veille en file de décisions. Le compteur rend la charge visible, la carte donne le contexte, et les deux actions suffisent.</p></div><div class="fatec-screens"><figure><img src="assets/fatec-veille-triage-01.jpg" alt="Carte de veille FATEC avec action garder"><figcaption>Une carte complète : source, date, catégorie, résumé et lien.</figcaption></figure><figure><img src="assets/fatec-veille-triage-02.jpg" alt="Carte de veille réglementaire FATEC"><figcaption>Le compteur et le geste garder / jeter réduisent la friction.</figcaption></figure><figure class="fatec-screen-wide"><img src="assets/fatec-veille-loader.jpg" alt="Écran de chargement de la veille FATEC"><figcaption>Une entrée éditoriale avant l’arrivée de la sélection du jour.</figcaption></figure></div>';document.querySelector('main').appendChild(evidence);}
if(fatecHero){const visual=document.createElement('div');visual.className='fatec-hero-visual';visual.innerHTML='<div class="fatec-live-pill"><i></i> VEILLE EN DIRECT <b>29</b></div><div class="fatec-card-back"><img src="assets/fatec-veille-triage-02.jpg" alt="Carte de veille réglementaire"></div><div class="fatec-card-front"><img src="assets/fatec-veille-triage-01.jpg" alt="Carte de veille FATEC"><span class="fatec-swipe-label">GARDER</span></div><div class="fatec-swipe-controls"><span>×</span><span>✓</span></div>';fatecHero.appendChild(visual);const front=visual.querySelector('.fatec-card-front');visual.addEventListener('pointermove',(event)=>{const r=visual.getBoundingClientRect();const x=(event.clientX-r.left)/r.width-.5;const y=(event.clientY-r.top)/r.height-.5;front.style.setProperty('--tilt-x',`${y*-4}deg`);front.style.setProperty('--tilt-y',`${x*4}deg`);});visual.addEventListener('pointerleave',()=>{front.style.setProperty('--tilt-x','0deg');front.style.setProperty('--tilt-y','0deg');});}
if(fatecHero){const impact=document.createElement('section');impact.className='section fatec-impact';impact.innerHTML='<div class="fatec-impact-head"><span class="eyebrow">Impact</span><h2>Une veille qui devient une décision.</h2></div><div class="fatec-impact-grid"><article><b>01</b><strong>Veille centralisée</strong><p>Les sources sont regroupées automatiquement.</p></article><article><b>02</b><strong>Tri assisté par IA</strong><p>Les contenus sont filtrés et résumés.</p></article><article><b>03</b><strong>Validation humaine</strong><p>Chaque contenu reste contrôlé avant diffusion.</p></article><article><b>04</b><strong>Diffusion automatisée</strong><p>La sélection alimente directement la newsletter.</p></article></div></section>';const evidence=document.querySelector('.fatec-evidence');evidence?.before(impact);}

document.querySelectorAll('.approach h2,.services h2,.contact-banner h2').forEach((heading)=>{
  heading.innerHTML=heading.textContent.split(/(\s+)/).map((part)=>part.trim()?'<span class="scroll-word">'+part+'</span>'+ (part.endsWith('.')?'':' '):part).join('');
});
const scrollWords=[...document.querySelectorAll('.scroll-word')];
const wordObserver=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{if(entry.isIntersecting) entry.target.classList.add('is-lit');});
},{threshold:.62});
scrollWords.forEach((word)=>wordObserver.observe(word));

const stackCards=[...document.querySelectorAll('.case-directory .case-tile')];
stackCards.forEach((card,index)=>{card.classList.add('stack-card');card.style.setProperty('--stack-index',index);});
const stackObserver=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{if(entry.isIntersecting) entry.target.classList.add('stack-in');});
},{threshold:.2});
stackCards.forEach((card)=>stackObserver.observe(card));

const logos=document.querySelector('.brand-row');
if(logos){
  logos.classList.add('logo-marquee');
  const originals=[...logos.children];
  originals.forEach((logo)=>{const clone=logo.cloneNode(true);clone.dataset.duplicate='true';logos.append(clone);});
}
const toggle=document.querySelector('.menu-toggle');
const menu=document.getElementById('navigation');
const siteHeader=document.querySelector('.site-header');
const updateHeader=()=>siteHeader?.classList.toggle('is-condensed',scrollY>28);
window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));menu.classList.toggle('is-open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true'){toggle.setAttribute('aria-expanded','false');menu.classList.remove('is-open');toggle.focus();}});
if(menu){
  menu.classList.add('glass-nav');
  const bubble=document.createElement('span');bubble.className='nav-bubble';bubble.setAttribute('aria-hidden','true');menu.prepend(bubble);
  const moveBubble=(link)=>{if(!link||innerWidth<=800)return;const navBox=menu.getBoundingClientRect();const linkBox=link.getBoundingClientRect();bubble.style.setProperty('--bubble-x',`${linkBox.left-navBox.left-7}px`);bubble.style.setProperty('--bubble-w',`${linkBox.width+14}px`);bubble.classList.add('is-ready');};
  const activeLink=menu.querySelector('[aria-current="page"]')||menu.querySelector('a');moveBubble(activeLink);
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>moveBubble(link)));
  window.addEventListener('resize',()=>moveBubble(menu.querySelector('[aria-current="page"]')||menu.querySelector('a')),{passive:true});
}

if(document.querySelector('.studio-hero')){
  document.querySelector('.hero-eyebrow').innerHTML='<span>✦</span> Yacin Bakadir · Acquisition, contenu & systèmes';
  document.querySelector('.studio-hero h1').innerHTML='Je pilote<br><span class="hero-rotating-word">l’acquisition</span><span class="red-dot">.</span>';
  document.querySelector('.hero-bottom p').textContent='Stratégie, communication et systèmes de croissance pour faire avancer votre entreprise avec clarté et produire des résultats mesurables.';
  document.querySelector('.references h2').innerHTML='Des systèmes pensés pour être utilisés, mesurés, améliorés<span>.</span>';
  document.querySelector('.section-heading h2').innerHTML='Des preuves de méthode<span>.</span><br>Pas seulement des rendus.';
  document.querySelector('.section-heading + p').textContent='Des projets où l’on voit le raisonnement : contexte, choix, exécution, outils et apprentissages.';
  document.querySelector('.contact-banner h2').innerHTML='Un problème à clarifier ?<br>Construisons la suite<span>.</span>';
}

/* Home: keep the page focused on trust, work and a direct conversation. */
if(document.querySelector('.studio-hero')){
  const references=document.querySelector('.references');
  references?.querySelector('.eyebrow')?.remove();
  const trustTitle=references?.querySelector('h2');
  if(trustTitle) trustTitle.innerHTML='Ils m’ont fait confiance<span>.</span>';
  references?.classList.add('trust-strip');

  const companyNotes={
    'FATEC':'Gestion de flotte et mobilité d’entreprise.',
    'Eco Impact':'Mesure et réduction de l’impact environnemental des produits.',
    'ACCEO':'Conseil technique, accessibilité et transport vertical.',
    'SOS Propreté':'Entretien et nettoyage professionnel des espaces de travail.',
    'Effet Home':'Solutions de décoration et rénovation intérieure.'
  };
  document.querySelectorAll('.brand-row > img').forEach((image)=>{
    const tile=document.createElement('div');
    tile.className='trust-logo';
    tile.dataset.tooltip=companyNotes[image.alt]||'Collaboration et projet sur mesure.';
    image.replaceWith(tile);
    tile.appendChild(image);
  });

  document.querySelector('.approach')?.remove();
  document.querySelector('.services')?.remove();

  const directory=document.querySelector('.case-directory');
  directory?.classList.add('wide-case-stack');
  directory?.querySelectorAll('.case-tile').forEach((card)=>{
    if(!card.querySelector('.case-see')){
      const see=document.createElement('span');
      see.className='case-see';
      see.innerHTML='Voir le projet <i>↗</i>';
      card.appendChild(see);
    }
  });

  const contact=document.querySelector('.contact-banner');
  const contactEyebrow=contact?.querySelector('.eyebrow');
  if(contactEyebrow) contactEyebrow.textContent='Disponible pour une mission, une collaboration ou un regard stratégique.';
  const contactTitle=contact?.querySelector('h2');
  if(contactTitle) contactTitle.innerHTML='Un projet, une idée,<br>un point de vue ?<span>.</span>';
  const contactAction=contact?.querySelector('.action');
  if(contactAction) contactAction.innerHTML='<i>↗</i> Parlons-en';
}

const homeRefinement=document.createElement('style');
homeRefinement.textContent=`
  .trust-strip{padding-block:76px!important;overflow:visible!important}
  .trust-strip h2{max-width:none!important;margin:0 0 34px!important;font-size:clamp(34px,4.2vw,62px)!important;letter-spacing:-.055em!important;text-align:left!important}
  .trust-strip .brand-row{display:flex!important;align-items:center;gap:14px!important;width:max-content!important;overflow:visible!important;animation:trustTicker 34s linear infinite!important}
  .trust-strip .brand-row:hover{animation-play-state:paused!important}
  .trust-logo{position:relative;display:grid;place-items:center;flex:0 0 184px;height:76px;padding:14px;border:1px solid #dedfe1;border-radius:12px;background:#fff;transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s ease,border-color .3s ease;isolation:isolate}
  .trust-logo img{display:block;max-width:122px;max-height:36px;object-fit:contain;filter:grayscale(1) contrast(.86);opacity:.72;transition:filter .28s ease,opacity .28s ease,transform .28s ease}
  .trust-logo:hover{z-index:4;transform:translateY(-6px) scale(1.1);border-color:#bfc7d3;box-shadow:0 16px 34px #10131d26}
  .trust-logo:hover img{filter:grayscale(0);opacity:1;transform:scale(1.06)}
  .trust-logo:after{content:attr(data-tooltip);position:absolute;z-index:5;left:50%;bottom:calc(100% + 10px);width:max-content;max-width:230px;padding:9px 11px;border-radius:8px;background:#101319;color:#fff;font:500 11px/1.35 Arial,sans-serif;letter-spacing:.01em;text-align:center;box-shadow:0 12px 28px #0004;opacity:0;pointer-events:none;transform:translate(-50%,7px);transition:opacity .2s ease,transform .2s ease}
  .trust-logo:hover:after{opacity:1;transform:translate(-50%,0)}
  .trust-strip .scroll-scrub{transform:none!important}.trust-strip .scroll-scrub:after{display:none!important}
  @keyframes trustTicker{to{transform:translateX(-50%)}}
  .wide-case-stack{display:block!important;max-width:1180px!important;margin-inline:auto!important}
  .wide-case-stack .case-tile{position:sticky;top:82px;display:grid!important;grid-template-columns:minmax(280px,.9fr) minmax(320px,1.1fr);grid-template-rows:auto 1fr auto;column-gap:clamp(24px,4vw,62px);align-items:center;min-height:410px;margin:0 0 16vh!important;padding:20px!important;overflow:hidden;border:1px solid #242a34!important;border-radius:18px!important;background:#0c0f14!important;box-shadow:0 24px 60px #0003!important}
  .wide-case-stack .case-cover{grid-row:1 / span 3;height:100%!important;min-height:368px;margin:0!important;border-radius:11px!important}
  .wide-case-stack .case-tile h2{margin:0!important;align-self:end;font-size:clamp(28px,3.1vw,48px)!important;color:#fff!important}
  .wide-case-stack .case-tile p{margin:16px 0!important;align-self:start;color:#bfc6d0!important;max-width:46ch!important}
  .case-see{display:inline-flex;align-items:center;gap:12px;align-self:end;justify-self:start;padding:11px 14px;border:1px solid #ffffff2a;border-radius:999px;color:#fff;font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;transition:background .25s ease,color .25s ease,transform .25s ease}
  .case-see i{font-style:normal;font-size:16px}.case-tile:hover .case-see{background:#fff;color:#080a0e;transform:translateX(4px)}
  .contact-banner .action:hover{background:#fff!important;color:#0b0d11!important;border-color:#fff!important;box-shadow:0 14px 30px #0003!important;transform:translateY(-3px)}
  .contact-banner .action:hover i{background:#101319!important;color:#fff!important}
  @media(max-width:720px){.trust-strip{padding-block:54px!important}.trust-logo{flex-basis:145px;height:64px}.trust-logo img{max-width:96px;max-height:28px}.trust-logo:after{display:none}.wide-case-stack .case-tile{position:relative;top:auto;grid-template-columns:1fr;grid-template-rows:auto;gap:18px;min-height:0;margin-bottom:28px!important}.wide-case-stack .case-cover{grid-row:auto;min-height:230px}.wide-case-stack .case-tile h2{font-size:30px!important}.wide-case-stack .case-tile p{margin:0!important}.case-see{margin-top:2px}}
`;
document.head.appendChild(homeRefinement);

const sectionMeta=[
  ['.studio-hero','01','Pilotage','Acquisition · stratégie · communication'],
  ['.references','02','Preuves','Des environnements réels'],
  ['.approach','03','Méthode','Du problème au système'],
  ['.services','04','Expertise','Contenu · data · acquisition'],
  ['.case-directory','05','Use cases','Les décisions derrière les rendus'],
  ['.contact-banner','06','Contact','Construisons la suite']
];
sectionMeta.forEach(([selector,number,title,description])=>{
  const section=document.querySelector(selector);
  if(section) section.setAttribute('data-cursor',`${number}|${title}|${description}`);
});
document.querySelectorAll('.section').forEach((section)=>{if(section.querySelector('.section-heading')) section.classList.add('case-section');});

const rotatingWord=document.querySelector('.hero-rotating-word');
if(rotatingWord && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const words=['l’acquisition','la communication','la stratégie','la croissance'];
  let wordIndex=0;
  window.setInterval(()=>{rotatingWord.classList.add('is-changing');window.setTimeout(()=>{wordIndex=(wordIndex+1)%words.length;rotatingWord.textContent=words[wordIndex];rotatingWord.classList.remove('is-changing');},220);},2600);
}

const smartCursor=document.createElement('div');
smartCursor.className='smart-cursor';
smartCursor.innerHTML='<b></b><i></i>';
document.body.appendChild(smartCursor);
if(window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  let cursorFrame=false;
  let cursorX=0,cursorY=0;
  window.addEventListener('pointermove',(event)=>{
    cursorX=event.clientX;cursorY=event.clientY;
    if(!cursorFrame){cursorFrame=true;requestAnimationFrame(()=>{cursorFrame=false;smartCursor.style.setProperty('--cursor-x',`${cursorX}px`);smartCursor.style.setProperty('--cursor-y',`${cursorY}px`);});}
    smartCursor.dataset.active='true';
  },{passive:true});
  document.addEventListener('mouseleave',()=>{smartCursor.dataset.active='false';});
}

const hero=document.querySelector('.studio-hero');
if(hero){const heroContent=hero.querySelector('.hero-content');if(heroContent){heroContent.classList.add('hero-content-left');heroContent.style.textAlign='left';const headline=heroContent.querySelector('h1');const copy=heroContent.querySelector('.hero-bottom p');if(headline) headline.style.margin='0 0 34px';if(copy) copy.style.margin='0';}}
if(hero && window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  hero.addEventListener('pointermove',(event)=>{
    const rect=hero.getBoundingClientRect();
    hero.style.setProperty('--hero-mx',((event.clientX-rect.left)/rect.width-.5).toFixed(3));
    hero.style.setProperty('--hero-my',((event.clientY-rect.top)/rect.height-.5).toFixed(3));
  });
  hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--hero-mx','0');hero.style.setProperty('--hero-my','0');});
}

if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const progress=document.createElement('div');
  progress.className='scroll-progress';
  document.body.appendChild(progress);
  const updateProgress=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.setProperty('--progress',`${max>0?(scrollY/max)*100:0}%`);};
  window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();

  document.querySelectorAll('.approach,.services,.contact-banner').forEach((section)=>section.classList.add('split-reveal'));
  const revealObserver=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting) entry.target.classList.add('revealed');}),{threshold:.18});
  document.querySelectorAll('.split-reveal').forEach((section)=>revealObserver.observe(section));

  document.querySelectorAll('.case-tile,.service-row,.project-ribbon a').forEach((card)=>{
    card.addEventListener('pointermove',(event)=>{const r=card.getBoundingClientRect();const x=(event.clientX-r.left)/r.width-.5;const y=(event.clientY-r.top)/r.height-.5;card.style.setProperty('--card-rx',`${y*-4}deg`);card.style.setProperty('--card-ry',`${x*4}deg`);card.style.setProperty('--card-lift','-5px');});
    card.addEventListener('pointerleave',()=>{card.style.setProperty('--card-rx','0deg');card.style.setProperty('--card-ry','0deg');card.style.setProperty('--card-lift','0px');});
  });
  document.querySelectorAll('.action').forEach((button)=>button.addEventListener('pointermove',(event)=>{const r=button.getBoundingClientRect();button.style.setProperty('--mag-x',`${(event.clientX-r.left-r.width/2)*.12}px`);button.style.setProperty('--mag-y',`${(event.clientY-r.top-r.height/2)*.12}px`);}));
  document.querySelectorAll('.action').forEach((button)=>button.addEventListener('pointerleave',()=>{button.style.setProperty('--mag-x','0px');button.style.setProperty('--mag-y','0px');}));

  const scrubHeading=document.querySelector('.references:not(.trust-strip) h2');
  if(scrubHeading){
    scrubHeading.classList.add('scroll-scrub');
    const updateScrub=()=>{const r=scrubHeading.getBoundingClientRect();const progress=Math.max(-1,Math.min(1,(innerHeight*.72-(r.top+r.height/2))/(innerHeight*.9)));scrubHeading.style.setProperty('--scrub-x',`${progress*80}px`);};
    window.addEventListener('scroll',updateScrub,{passive:true});updateScrub();
  }
}

const depthItems=[...document.querySelectorAll('.studio-hero,.approach,.services,.case-directory .case-tile,.project-ribbon a,.service-row')];
let depthTick=false;
const updateDepth=()=>{depthTick=false;depthItems.forEach((item)=>{const r=item.getBoundingClientRect();const center=r.top+r.height/2;const delta=(center-innerHeight/2)/innerHeight;item.style.setProperty('--depth-tilt',`${Math.max(-3,Math.min(3,delta*3))}deg`);item.style.setProperty('--depth-shift',`${Math.max(-10,Math.min(10,-delta*8))}px`);});};
window.addEventListener('scroll',()=>{if(!depthTick){depthTick=true;requestAnimationFrame(updateDepth);}}, {passive:true});
updateDepth();

// Shared, final layout fixes. Sticky cards require unclipped, untransformed ancestors.
document.querySelectorAll('.case-directory').forEach(directory=>{
  directory.classList.add('wide-case-stack');
  directory.closest('.case-section')?.classList.add('stack-section');
  directory.querySelectorAll('.case-tile').forEach((card,index)=>{
    card.style.zIndex=String(index+1);
    if(!card.querySelector('.case-see')){const cta=document.createElement('span');cta.className='case-see';cta.textContent='Voir le projet ↗';card.append(cta);}
  });
});
if(logos){
  const viewport=document.createElement('div');viewport.className='trust-viewport';logos.before(viewport);viewport.append(logos);
  logos.querySelectorAll('.trust-logo').forEach((tile,index)=>{
    const duplicate=tile.querySelector('[data-duplicate]');
    if(duplicate)tile.setAttribute('aria-hidden','true');
    else tile.tabIndex=0;
    tile.setAttribute('role','group');
    const label=tile.querySelector('img')?.alt||'';tile.setAttribute('aria-label',label);
    const tip=document.createElement('span');tip.className='trust-tooltip';tip.id='company-note-'+index;tip.setAttribute('role','tooltip');tip.textContent=tile.dataset.tooltip;viewport.parentElement.append(tip);tile.setAttribute('aria-describedby',tip.id);
    const showTip=()=>{const box=tile.getBoundingClientRect();const section=viewport.parentElement.getBoundingClientRect();const half=Math.min(205,innerWidth-32)/2;tip.style.left=Math.max(half+16,Math.min(section.width-half-16,box.left-section.left+box.width/2))+'px';tip.style.top=(box.bottom-section.top+8)+'px';tip.classList.add('is-visible');};
    const hideTip=()=>tip.classList.remove('is-visible');
    tile.addEventListener('pointerenter',showTip);tile.addEventListener('pointerleave',hideTip);tile.addEventListener('focus',showTip);tile.addEventListener('blur',hideTip);
    tile.addEventListener('keydown',event=>{if(event.key==='Escape')hideTip();});
  });
  const pause=document.createElement('button');pause.className='trust-pause';pause.type='button';pause.textContent='Pause';pause.setAttribute('aria-label','Mettre en pause le défilement des logos');pause.setAttribute('aria-pressed','false');viewport.after(pause);
  pause.addEventListener('click',()=>{const paused=viewport.classList.toggle('is-paused');pause.textContent=paused?'Reprendre':'Pause';pause.setAttribute('aria-pressed',String(paused));});
}
const polishStyles=document.createElement('link');polishStyles.rel='stylesheet';polishStyles.href='launch-polish.css?v=2';document.head.append(polishStyles);
document.querySelector('main')?.setAttribute('id','content');
document.querySelector('nav')?.setAttribute('aria-label','Navigation principale');
document.fonts?.ready.then(()=>window.dispatchEvent(new Event('resize')));

