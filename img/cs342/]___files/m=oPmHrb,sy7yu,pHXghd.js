this._s=this._s||{};(function(_){var window=this;
try{
_.v("oPmHrb");
var sRq=function(a){return document.evaluate(`//div[@aria-owns="${a.id}"]`,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue},tRq=function(a){return a.filter(b=>{b=b.getBoundingClientRect();return b.width*b.height>1})},uRq=function(a){return a.getAttribute("data-rrhs")==="1"},vRq=function(a){var b=_.fm("H3wGC");b&&(a.Ea=b,b=_.fm("center_col"))&&(a.Aa=b,a.Ba=a.Aa.getElementsByClassName("A6K0A"),b=_.fm("rhs"))&&(a.oa=b,a.Na=a.oa.getElementsByClassName("A6K0A"),a.Da=Array.from(a.Ba).concat(Array.from(a.Na)).filter(uRq).sort((c,
d)=>Number(c.getAttribute("data-rpos"))-Number(d.getAttribute("data-rpos"))))},wRq=function(a,b=!0){let c=0,d;const e=(d=a.Da)==null?void 0:d.map(f=>{var g=sRq(f);if(g)return b&&g.insertAdjacentElement("beforebegin",f),f;if((g=f.getAttribute("data-rpos"))&&a.Ba){var h=Number(g);for(g=!1;c<a.Ba.length;c++){const k=a.Ba[c],l=k.getAttribute("data-rpos");if(l&&h<=Number(l)){b&&k.insertAdjacentElement("beforebegin",f);a.jK(k,"beforebegin",f);g=!0;break}}h=a.Ba[a.Ba.length-1];!g&&h&&(b&&h.insertAdjacentElement("afterend",
f),a.jK(h,"afterend",f))}return f});b&&(a.Aa&&e&&e.length>0&&(_.cg(a.Aa,"C6Hrtf"),_.cg(a.Aa,"O0JaK")),_.O_(_.P_.ekb),window.dispatchEvent(new Event("resize")))},xRq=function(a,b=!0){let c;const d=(c=a.Da)==null?void 0:c.map(e=>{sRq(e)||a.jK(e,"afterend",e);if(b){let f;(f=a.Ea)==null||f.insertAdjacentElement("beforebegin",e)}return e});b&&(d&&d.length>0&&(a.Aa&&_.cg(a.Aa,"Zea3Wc"),a.oa&&_.cg(a.oa,"mWTG5b")),_.O_(_.P_.ekb),window.dispatchEvent(new Event("resize")))},zRq=function(a){if(a.oa){var b=Array.from(a.oa.children),
c=_.fm("jOAHU");c&&(b=b.filter(e=>e!==c).concat(Array.from(c.children)));var d=tRq(b);d.some(e=>!uRq(e))||a.oa.classList.add("jBpNZc");d.some(e=>!uRq(e)||sRq(e)===null)||yRq(a,b)}},ARq=function(a,b){a.Aa&&a.oa&&a.Ea&&(b?a.Fa():a.Ka())},yRq=function(a,b){let c;(c=a.oa)==null||c.removeAttribute("role");b.filter(d=>d.tagName.toLowerCase()==="h2").forEach(d=>{d.remove()})},BRq=class extends _.Lg{constructor(a){super(a.Oa);vRq(this);this.Ma=_.$Qq;wRq(this,!1);xRq(this,!1);zRq(this);this.Fa=_.Cs(this).Fc(()=>
{wRq(this)}).build();this.Ka=_.Cs(this).Fc(()=>{xRq(this)}).build();const b=window.matchMedia(`(max-width: ${this.Ma-1}px)`);b.addEventListener("change",c=>{ARq(this,c.matches)});this.addOnDisposeCallback(()=>{b.removeEventListener("change",c=>{ARq(this,c.matches)})});a=_.gm("cnt");this.Ca=new MutationObserver(()=>{vRq(this)});this.Ca.observe(a,{childList:!0});ARq(this,b.matches)}Tb(){this.Ca&&this.Ca.disconnect();super.Tb()}jK(a,b,c){var d=this.getRoot().el().children;!_.ZQq||d.length<1||(this.eM("GuKejc").then(e=>
{for(const f of e)f instanceof _.mRq&&f.Aa()}),d=d[0],d.setAttribute("aria-owns",c.id),a.insertAdjacentElement(b,d))}};_.I(BRq.prototype,"k4Iseb",function(){return this.Tb});_.O(_.rRq,BRq);
_.w();
}catch(e){_._DumpException(e)}
try{
_.Ult=_.z("KvoW8",[]);
}catch(e){_._DumpException(e)}
try{
_.v("pHXghd");
var GrA;GrA=class extends _.WLa{initialize(){_.FrA()}};_.FrA=()=>{};_.mc().Ric(GrA);
_.FrA=()=>{_.oh(_.wf(_.WZa),_.Ult);_.oh(_.wf(_.$Za),_.YZa);_.oh(_.wf(_.ZZa),_.YZa)};
_.w();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
