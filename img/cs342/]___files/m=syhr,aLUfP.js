this._s=this._s||{};(function(_){var window=this;
try{
_.ICb=class{constructor(a){this.Bl=a}};
}catch(e){_._DumpException(e)}
try{
_.v("aLUfP");
var KCb;_.JCb=!1;KCb=function(){return _.sa()&&_.me.ZD()&&!navigator.userAgent.includes("GSA")};
_.To(_.uXa,class extends _.Ro{static Ra(){return{service:{window:_.So}}}constructor(a){super();this.window=a.service.window.get();this.Ba=this.Bl();this.Aa=window.orientation;this.oa=()=>{const b=this.Bl();var c=this.zTb()&&Math.abs(window.orientation)===90&&this.Aa===-1*window.orientation;this.Aa=window.orientation;if(b!==this.Ba||c){this.Ba=b;for(const d of this.listeners){c=new _.ICb(b);try{d(c)}catch(e){_.ea(e)}}}};this.listeners=new Set;this.window.addEventListener("resize",this.oa);this.zTb()&&
this.window.addEventListener("orientationchange",this.oa)}addListener(a){this.listeners.add(a)}removeListener(a){this.listeners.delete(a)}Bl(){if(KCb()){var a=_.nm(this.window);a=new _.em(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.Hc()||(_.sa()?KCb():this.window.visualViewport)?_.nm(this.window):new _.em(this.window.innerWidth,this.window.innerHeight);return a.height<a.width}destroy(){this.window.removeEventListener("resize",this.oa);this.window.removeEventListener("orientationchange",
this.oa)}Hc(){return _.JCb}zTb(){return"orientation"in window}});
_.JCb=!0;
_.w();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
