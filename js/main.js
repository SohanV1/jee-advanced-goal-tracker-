const subjects={Physics:['Units, Dimensions and Errors','Kinematics','Laws of Motion','Work, Energy and Power','Centre of Mass and Collisions','Rotational Motion','Gravitation','Properties of Solids and Fluids','Thermal Physics','Kinetic Theory of Gases','Thermodynamics','Oscillations','Waves','Electrostatics','Current Electricity','Magnetic Effects of Current','Electromagnetic Induction and AC','Optics','Modern Physics'],Chemistry:['Some Basic Concepts of Chemistry','States of Matter','Atomic Structure','Chemical Bonding','Periodic Classification','Thermodynamics','Chemical Equilibrium','Ionic Equilibrium','Redox Reactions','Solutions','Electrochemistry','Chemical Kinetics','Surface Chemistry','Solid State','General Organic Chemistry','Hydrocarbons','Haloalkanes and Haloarenes','Alcohols, Phenols and Ethers','Aldehydes, Ketones and Carboxylic Acids','Amines','Biomolecules and Polymers','Coordination Compounds','d- and f-Block Elements','p-Block Elements','Metallurgy','Environmental Chemistry','Practical Chemistry','Qualitative Analysis'],Mathematics:['Sets, Relations and Functions','Complex Numbers','Quadratic Equations','Sequences and Series','Permutations and Combinations','Binomial Theorem','Mathematical Induction','Trigonometric Functions','Inverse Trigonometric Functions','Straight Lines','Circles','Conic Sections','Limits and Continuity','Differentiability','Application of Derivatives','Indefinite Integration','Definite Integration','Area Under Curves','Differential Equations','Matrices and Determinants','Vectors','Three-Dimensional Geometry','Probability','Statistics','Mathematical Reasoning','Linear Programming']};
const key='jee28-tracker-v1';let data=JSON.parse(localStorage.getItem(key)||'null')||{done:{},progress:{},backlog:[],plan:{},tests:[],theme:'dark'};let currentFilter='all';let currentVaultFilter='all';window.getTrackerData=()=>data;window.replaceTrackerData=next=>{let local=JSON.parse(localStorage.getItem(key)||'null')||{};data={done:{...(local.done||{}),...(next.done||{})},progress:{...(local.progress||{}),...(next.progress||{})},backlog:(next.backlog?.length?next.backlog:local.backlog)||[],plan:{...(local.plan||{}),...(next.plan||{})},tests:(next.tests?.length?next.tests:local.tests)||[],theme:next.theme||local.theme||'dark'};localStorage.setItem(key,JSON.stringify(data));renderAll()};
const all=Object.entries(subjects).flatMap(([subject,chapters])=>chapters.map(title=>({subject,title,id:`${subject}-${title}`})));function save(){localStorage.setItem(key,JSON.stringify(data));if(window.cloudSave)window.cloudSave(data);renderAll()}function toast(t){const el=document.querySelector('#toast');el.textContent=t;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}
function renderStats(){let done=all.filter(x=>isChapterDone(x)).length;document.querySelector('#stats').innerHTML=[['%','Overall progress',Math.round(done/all.length*100)+'%'],[all.length,'Total chapters',all.length],[done,'Completed',done],[data.backlog.length,'Backlog items',data.backlog.length]].map(x=>`<div class="stat"><b>${x[2]}</b><span>${x[1]}</span></div>`).join('');document.querySelector('#subjectPulse').innerHTML=Object.entries(subjects).map(([s,c])=>{let n=c.filter(t=>isChapterDone({subject:s,title:t,id:`${s}-${t}`})).length,p=Math.round(n/c.length*100);return `<div class="pulse"><b>${s}</b><i><span style="width:${p}%"></span></i><small>${p}%</small></div>`}).join('')}
function stages(x){return data.progress?.[x.id]||{theory:false,module:false,pyqs:false,r1:false,r2:false,r3:false}}function isChapterDone(x){let s=stages(x);return ['theory','module','pyqs','r1','r2','r3'].every(k=>s[k])}

const chapterResources={
  // Chemistry
  'Chemistry-Some Basic Concepts of Chemistry':[
    {title:'1st PU Assignment: Mole Concept & Organic',url:'resources/boards_puc/chemistry/1pu_basic_concepts_organic_principles.pdf'},
    {title:'Web Notes: Mole Concept',url:'https://jee-chem-notes.vercel.app/',isOnline:true}
  ],
  'Chemistry-Atomic Structure':[
    {title:'1st PU Exam: Structure of Atom & Bonding',url:'resources/boards_puc/chemistry/1pu_atom_structure_bonding_elements.pdf'},
    {title:'Web Notes: Atomic Structure',url:'https://jee-chem-notes.vercel.app/',isOnline:true}
  ],
  'Chemistry-Periodic Classification':[
    {title:'Periodic Table: Concepts & Questions',url:'resources/modules/periodic_table.pdf'},
    {title:'Inorganic Chemistry All Exceptions',url:'resources/jee/chemistry/inorganic_chemistry_all_exceptions.pdf'},
    {title:'Web Notes: Periodicity',url:'https://jee-chem-notes.vercel.app/',isOnline:true}
  ],
  'Chemistry-Chemical Bonding':[
    {title:'Chemical Bonding: Concepts & Questions',url:'resources/modules/chemical_bonding.pdf'},
    {title:'1st PU Exam Corner: Chemical Bonding',url:'resources/boards_puc/chemistry/1pu_atom_structure_bonding_elements.pdf'},
    {title:'Web Notes: Chemical Bonding',url:'https://jee-chem-notes.vercel.app/',isOnline:true}
  ],
  'Chemistry-General Organic Chemistry':[
    {title:'GOC I & II: Concepts & Questions',url:'resources/modules/goc_i_and_ii.pdf'},
    {title:'Isomerism: Concepts & Questions',url:'resources/modules/isomerism.pdf'},
    {title:'IUPAC Nomenclature Module',url:'resources/modules/iupac_nomenclature.pdf'},
    {title:'IUPAC Worksheet',url:'resources/jee/chemistry/iupac_worksheet.pdf'},
    {title:'Structural Isomerism Practice',url:'resources/jee/chemistry/structural_isomerism_practice.pdf'},
    {title:'Purification of Organic Compounds',url:'resources/modules/purification_organic_compounds.pdf'},
    {title:'The Organic Reagent Book (All Reactions)',url:'resources/jee/chemistry/the_organic_reagent_book.pdf'},
    {title:'Web Notes: Reaction Mechanisms',url:'https://jee-chem-notes.vercel.app/',isOnline:true}
  ],
  'Chemistry-Thermodynamics':[
    {title:'Thermodynamics: Concepts & Questions',url:'resources/modules/thermodynamics.pdf'},
    {title:'Web Notes: Thermodynamics',url:'https://jee-chem-notes.vercel.app/',isOnline:true}
  ],
  'Chemistry-Hydrocarbons':[
    {title:'The Organic Reagent Book',url:'resources/jee/chemistry/the_organic_reagent_book.pdf'},
    {title:'Web Notes: Hydrocarbons',url:'https://jee-chem-notes.vercel.app/',isOnline:true}
  ],
  'Chemistry-Alcohols, Phenols and Ethers':[
    {title:'Web Notes: Alcohols, Phenols & Ethers',url:'https://jee-chem-notes.vercel.app/',isOnline:true}
  ],
  'Chemistry-Haloalkanes and Haloarenes':[
    {title:'Web Notes: Haloalkanes & Haloarenes',url:'https://jee-chem-notes.vercel.app/',isOnline:true}
  ],
  'Chemistry-Aldehydes, Ketones and Carboxylic Acids':[
    {title:'Web Notes: Carbonyl Compounds',url:'https://jee-chem-notes.vercel.app/',isOnline:true}
  ],
  'Chemistry-Coordination Compounds':[
    {title:'Inorganic Chemistry All Exceptions',url:'resources/jee/chemistry/inorganic_chemistry_all_exceptions.pdf'},
    {title:'Web Notes: Coordination Chemistry',url:'https://jee-chem-notes.vercel.app/',isOnline:true}
  ],
  // Physics
  'Physics-Kinematics':[
    {title:'1D & 2D DPP (Problem Practice)',url:'resources/jee/physics/kinematics_1d_2d_dpp.pdf'},
    {title:'Class 11 Motion in Straight Line Notes',url:'resources/boards_puc/physics/class11_motion_straight_line_notes.pdf'},
    {title:'Motion in a Plane (PU Exam Notes)',url:'resources/boards_puc/physics/motion_in_a_plane_pu.pdf'}
  ],
  'Physics-Work, Energy and Power':[
    {title:'Work, Energy & Power (JEE Main Master Sheet)',url:'resources/jee/physics/work_energy_power_jee_main.pdf'}
  ],
  // Mathematics
  'Mathematics-Trigonometric Functions':[
    {title:'Trigonometric Functions: JEE Sheet',url:'resources/jee/mathematics/trigonometric_functions.pdf'},
    {title:'1st PUC Trigonometry Exam Corner',url:'resources/boards_puc/mathematics/1pu_trigonometry_exam_corner.pdf'}
  ],
  'Mathematics-Binomial Theorem':[
    {title:'Binomial Theorem Formula Sheet (Main & Adv)',url:'resources/jee/mathematics/binomial_theorem_formula_sheet.pdf'}
  ],
  'Mathematics-Conic Sections':[
    {title:'Conic Sections: Complete Advanced Module',url:'resources/jee/mathematics/conic_sections.pdf'}
  ]
};

const vaultResources=[
  {
    category:'formula',
    badge:'badge-chem',
    subject:'Chemistry',
    title:'Chemistry All Formula Book (11th & 12th)',
    desc:'Complete formula compendium covering Physical, Organic, and Inorganic Chemistry across both years.',
    url:'resources/jee/formula_books/chemistry_all_formula_book.pdf',
    type:'local'
  },
  {
    category:'formula',
    badge:'badge-phy',
    subject:'Physics',
    title:'Physics All Formula Book (11th & 12th)',
    desc:'Complete derivation and formula sheet covering Mechanics, Electromagnetism, Optics, and Modern Physics.',
    url:'resources/jee/formula_books/physics_all_formula_book.pdf',
    type:'local'
  },
  {
    category:'formula',
    badge:'badge-math',
    subject:'Mathematics',
    title:'Mathematics All Formula Book (11th & 12th)',
    desc:'Formula handbook with identity collections, coordinate geometry equations, and calculus cheat-sheets.',
    url:'resources/jee/formula_books/mathematics_all_formula_book.pdf',
    type:'local'
  },
  {
    category:'web',
    badge:'badge-tool',
    subject:'Interactive App',
    title:'JEE Chemistry Short Notes (Akash Jaiswal)',
    desc:'Interactive web revision app by IIT KGP alumnus. Features reaction maps, NCERT points, KaTeX formulas, and progress saving.',
    url:'https://jee-chem-notes.vercel.app/',
    type:'web'
  },
  {
    category:'notes',
    badge:'badge-chem',
    subject:'Chemistry',
    title:'The Organic Reagent Book',
    desc:'Master encyclopedia of organic reagents, reaction conditions, mechanisms, and key functional group transformations.',
    url:'resources/jee/chemistry/the_organic_reagent_book.pdf',
    type:'local'
  },
  {
    category:'notes',
    badge:'badge-chem',
    subject:'Chemistry',
    title:'Inorganic Chemistry: All Exceptions for JEE',
    desc:'High-yield compilation of anomalous trends, diagonal relationships, exceptions, and NCERT-tested inorganic facts.',
    url:'resources/jee/chemistry/inorganic_chemistry_all_exceptions.pdf',
    type:'local'
  },
  {
    category:'notes',
    badge:'badge-chem',
    subject:'Chemistry',
    title:'Competishun Chemistry Short Notes',
    desc:'High-density concise revision notes for fast recall before weekly and monthly test cycles.',
    url:'resources/jee/chemistry/competishun_short_notes_chemistry.pdf',
    type:'local'
  },
  {
    category:'notes',
    badge:'badge-chem',
    subject:'Chemistry',
    title:'Complete Chemistry JEE Notes (Comprehensive)',
    desc:'Full multi-volume master JEE notes archive covering core theoretical foundations.',
    url:'resources/jee/chemistry/chemistry_jee_notes_complete.pdf',
    type:'local'
  },
  {
    category:'notes',
    badge:'badge-phy',
    subject:'Physics',
    title:'Complete Physics JEE Notes (Comprehensive)',
    desc:'Master theoretical notes with deep illustrations and rigorous concept derivations.',
    url:'resources/jee/physics/physics_jee_notes_complete.pdf',
    type:'local'
  },
  {
    category:'notes',
    badge:'badge-math',
    subject:'Mathematics',
    title:'Complete Mathematics JEE Notes (Comprehensive)',
    desc:'Full theory and solved question compendium for JEE Advanced mathematics.',
    url:'resources/jee/mathematics/maths_jee_notes_complete.pdf',
    type:'local'
  },
  {
    category:'notes',
    badge:'badge-tool',
    subject:'Trackers & Tests',
    title:'GTA - 11 Question Papers (P1 & P2)',
    desc:'General Test Series (Papers 1 and 2) question papers for Class 11 full syllabus bench-marking.',
    url:'resources/jee/trackers/gta_11_paper1_qp.pdf',
    url2:'resources/jee/trackers/gta_11_paper2_qp.pdf',
    type:'double'
  },
  {
    category:'boards',
    badge:'badge-board',
    subject:'Boards / 1st PU',
    title:'1st PU Exam Corner: Trigonometry & Linear Inequality',
    desc:'Karnataka 1st PU board preparation questions, step-by-step proofs, and examination corner sets.',
    url:'resources/boards_puc/mathematics/1pu_trigonometry_exam_corner.pdf',
    type:'local'
  },
  {
    category:'boards',
    badge:'badge-board',
    subject:'Boards / 1st PU',
    title:'1st PU Midterm Solutions & Chapterwise Qs (2025)',
    desc:'Official midterm question papers, verified scoring schemes, and high-yield chapterwise model questions.',
    url:'resources/boards_puc/languages_general/1pu_midterm_solutions_2025.pdf',
    type:'local'
  }
];

function renderChapters(){
  let list=all.filter(x=>currentFilter==='all'||x.subject===currentFilter);
  document.querySelector('#chapterList').innerHTML=list.map(x=>{
    let s=stages(x);
    let res=chapterResources[x.id]||[];
    let resHtml=res.length?`<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;">${res.map(r=>`<a href="${r.url}" target="_blank" rel="noopener noreferrer" class="module-pdf-btn ${r.isOnline?'online-res-btn':''}">${r.isOnline?'🌐':'📄'} ${r.title} ↗</a>`).join('')}</div>`:'';
    return `<article class="chapter-card ${isChapterDone(x)?'done':''}"><span class="subject-tag">${x.subject.slice(0,3).toUpperCase()}</span><span><h3>${x.title}</h3><div class="stage-buttons">${[['theory','Theory'],['module','Module'],['pyqs','PYQs'],['r1','R1'],['r2','R2'],['r3','R3']].map(([k,l])=>`<button class="stage ${s[k]?'complete':''}" data-stage="${k}" data-id="${x.id}">${l}</button>`).join('')}</div>${resHtml}</span></article>`
  }).join('');
  document.querySelectorAll('[data-stage]').forEach(e=>e.onclick=()=>{
    data.progress=data.progress||{};
    data.progress[e.dataset.id]=stages(all.find(x=>x.id===e.dataset.id));
    data.progress[e.dataset.id][e.dataset.stage]=!data.progress[e.dataset.id][e.dataset.stage];
    data.done[e.dataset.id]=isChapterDone(all.find(x=>x.id===e.dataset.id));
    save();
    toast(e.classList.contains('complete')?'Progress updated':'Progress updated')
  })
}

function renderVault(){
  let list=vaultResources.filter(x=>currentVaultFilter==='all'||x.category===currentVaultFilter);
  document.querySelector('#vaultList').innerHTML=list.map(item=>{
    let linkHtml=item.type==='double'
      ? `<div class="vault-links"><a href="${item.url}" target="_blank" class="module-pdf-btn">📄 Paper 1 QP ↗</a><a href="${item.url2}" target="_blank" class="module-pdf-btn">📄 Paper 2 QP ↗</a></div>`
      : `<div class="vault-links"><a href="${item.url}" target="_blank" rel="noopener noreferrer" class="module-pdf-btn ${item.type==='web'?'online-res-btn':''}">${item.type==='web'?'🌐 Open Web App ↗':'📄 Open PDF ↗'}</a></div>`;
    return `
      <article class="vault-card">
        <div>
          <span class="vault-badge ${item.badge}">${item.subject}</span>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
        ${linkHtml}
      </article>
    `;
  }).join('');
}

function renderBacklog(){
  document.querySelector('#backlogList').innerHTML=data.backlog.length?data.backlog.map((x,i)=>`<div class="backlog-item"><input type="checkbox" data-backlog="${i}" ${x.done?'checked':''}><span>${x.title}</span><small>${x.action}</small><button class="icon-btn" data-remove="${i}">×</button></div>`).join(''):'<div class="panel"><p class="lede">Your backlog is clear. Protect that feeling.</p></div>';
  document.querySelectorAll('[data-backlog]').forEach(e=>e.onchange=()=>{data.backlog[e.dataset.backlog].done=e.checked;save()});
  document.querySelectorAll('[data-remove]').forEach(e=>e.onclick=()=>{data.backlog.splice(e.dataset.remove,1);save()})
}

function renderPlan(){
  document.querySelector('#intention').value=data.plan.intention||'';
  document.querySelector('#nonNegotiables').value=data.plan.nonNegotiables||'';
  document.querySelector('#weeklyChecks').innerHTML=['Plan 5 focused study blocks','Complete one mixed-subject test','Review mistakes notebook','Schedule next revision'].map((x,i)=>`<label><input type="checkbox" data-week="${i}" ${data.plan.checks?.[i]?'checked':''}>${x}</label>`).join('');
  document.querySelectorAll('[data-week]').forEach(e=>e.onchange=()=>{data.plan.checks=data.plan.checks||[];data.plan.checks[e.dataset.week]=e.checked;save()})
}

function renderAll(){
  renderStats();
  renderChapters();
  renderVault();
  renderBacklog();
  renderPlan();
}

document.querySelectorAll('nav button,[data-view]').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active-view'));
  document.querySelector('#'+b.dataset.view).classList.add('active-view');
  document.querySelectorAll('nav button').forEach(n=>n.classList.toggle('active',n.dataset.view===b.dataset.view));
  window.scrollTo({top:0,behavior:'smooth'})
});

document.querySelectorAll('.filter:not(.vault-filter)').forEach(b=>b.onclick=()=>{
  currentFilter=b.dataset.filter;
  document.querySelectorAll('.filter:not(.vault-filter)').forEach(x=>x.classList.toggle('active',x===b));
  renderChapters()
});

document.querySelectorAll('.vault-filter').forEach(b=>b.onclick=()=>{
  currentVaultFilter=b.dataset.vaultFilter;
  document.querySelectorAll('.vault-filter').forEach(x=>x.classList.toggle('active',x===b));
  renderVault();
});

document.querySelector('#addBacklog').onclick=()=>document.querySelector('#backlogDialog').showModal();
document.querySelector('#backlogForm').onsubmit=e=>{
  e.preventDefault();
  let f=new FormData(e.target);
  data.backlog.push({title:f.get('title'),action:f.get('action'),done:false});
  e.target.reset();
  document.querySelector('#backlogDialog').close();
  save();
  toast('Added to backlog')
};
document.querySelector('#savePlan').onclick=()=>{
  data.plan.intention=document.querySelector('#intention').value;
  data.plan.nonNegotiables=document.querySelector('#nonNegotiables').value;
  save();
  toast('Week saved')
};
document.querySelector('#exportData').onclick=()=>{
  let a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
  a.download='jee-advanced-2028-backup.json';
  a.click();
  toast('Backup exported')
};
document.querySelector('#importData').onchange=e=>{
  let r=new FileReader();
  r.onload=()=>{
    try{
      data=JSON.parse(r.result);
      save();
      toast('Backup imported')
    }catch{
      toast('That backup is not valid')
    }
  };
  r.readAsText(e.target.files[0])
};
document.querySelector('#themeToggle').onclick=()=>{
  document.body.classList.toggle('light');
  toast('Theme toggled')
};

renderAll();
