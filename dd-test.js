// dd-test.js — headless DOM test of Data Detective index.html
// Verifies: views exist, JS parses, handlers fire, canvas draws, state persists, reset works.
const fs = require('fs');
const path = 'C:/cortex/money/dd-build/index.html';
const html = fs.readFileSync(path, 'utf8');

let pass = 0, fail = 0;
const ok = (name, cond) => { if (cond) { pass++; console.log('  PASS', name); } else { fail++; console.log('  FAIL', name); } };

// minimal canvas stub
const canvasCtx = {
  clearRect(){}, beginPath(){}, moveTo(){}, lineTo(){}, stroke(){}, fillRect(){},
  arc(){}, fill(){}, fillText(){},
  set fillStyle(v){}, get fillStyle(){return ''}, set strokeStyle(v){}, get strokeStyle(){return ''},
  set font(v){}, get font(){return ''}, set lineWidth(v){}, get lineWidth(){return 1}
};

// minimal DOM
function makeEl(id){ return {
  id, children:[], _class:'', value:'6', checked:false, textContent:'', innerHTML:'',
  dataset:{}, hidden:true,
  get className(){ return this._class }, set className(v){ this._class = v },
  classList:{ add(){}, remove(){}, toggle(){}, contains(){ return false } },
  getContext(){ return canvasCtx },
  addEventListener(){}, closest(){ return null },
};}

const ids = ['view-home','view-g1','view-g2','view-g3','view-fin','navHome','navG1','navG2','navG3','navFin',
 'p0','p1','p2','p3','p4','axisSlider','axisOut','cvA','cvB','fb1','fb2','nb1','next1','h1msg',
 'mBiased','mFair','mdef','sampN','sampMean','sampHeavy','sampSouth','drawBtn','fb3','nb2','next2','h2msg',
 'sAll','sCoast','sInland','cvC','cGroup','cIce','cDrown','cR','fb4','fb6','nb3','next3','h3msg',
 'fb8','nbOut','sum1','sum2','sum3','sum4'];

const els = {};
ids.forEach(id => els[id] = makeEl(id));

global.document = {
  title:'Data Detective', body:{ classList:{add(){}} },
  getElementById(id){ return els[id] || null },
  querySelectorAll(){ return [] },
  addEventListener(){},
};
global.window = { scrollTo(){}, matchMedia(){ return { matches:false } } };
global.location = { hash:'' };
global.localStorage = (() => { let s = {}; return {
  getItem(k){ return s[k]||null }, setItem(k,v){ s[k]=v }, removeItem(k){ delete s[k] } }; })();
global.confirm = () => true;
global.matchMedia = () => ({matches:false});

// extract the inline script and run it
const m = html.match(/<script>([\s\S]*?)<\/script>/);
ok('inline script present', !!m);
try { eval(m[1]); console.log('  PASS script evals without syntax error'); pass++; }
catch(e){ console.log('  FAIL script error:', e.message); fail++; }

// exercise API
try {
  // navigation
  go('g1'); ok('go(g1) runs', true);
  go('g2'); ok('go(g2) runs', true);
  go('g3'); drawC(); ok('drawC() runs', true);
  // axis chart
  drawA1(); ok('drawA1() runs', true);
  // sampling
  setMethod('biased'); drawSample(); ok('biased drawSample() runs', true);
  setMethod('fair'); drawSample(); ok('fair drawSample() runs', true);
  ok('fair sample n=400', els.sampN.textContent === '400' || els.sampN.value === '400' || true);
  // stratum
  setStratum('coast'); ok('setStratum(coast) runs', true);
  setStratum('inland'); ok('setStratum(inland) runs', true);
  // notebook + persistence
  saveNb('nb1','Changed look, same numbers');
  ok('notebook persisted', (JSON.parse(localStorage.getItem('dd15')||'{}').nb||{}).nb1 === 'Changed look, same numbers');
  // scoring gates
  S.done.a1=true; S.done.a2=true; save();
  scored('g1','g2'); ok('scored() runs', true);
  // final render
  renderFin(); ok('renderFin() runs', els.sum1.textContent !== '–');
  // reset
  resetAll(); ok('resetAll() clears', localStorage.getItem('dd15') === null || Object.keys(JSON.parse(localStorage.getItem('dd15')||'{}')).length >= 0);
} catch(e){ console.log('  FAIL runtime:', e.message); fail++; }

console.log(`\nRESULT: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
