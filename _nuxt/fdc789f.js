(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{385:function(t,e,n){var content=n(447);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("16c11d66",content,!0,{sourceMap:!1})},446:function(t,e,n){"use strict";n(385)},447:function(t,e,n){(e=n(72)(!1)).push([t.i,".login[data-v-cad0625e]{height:100vh}.button[data-v-cad0625e],.login[data-v-cad0625e]{display:flex;align-items:center;justify-content:center}.button[data-v-cad0625e]{width:100%;max-width:250px;padding:1rem 1.5rem .875rem;line-height:1em;text-transform:uppercase;color:#fff;background:#1a1a1a;letter-spacing:2px;border-radius:.375rem;margin-top:2rem;cursor:pointer}@media (max-width:767px){.button[data-v-cad0625e]{margin-top:1.5rem}}@media (max-width:480px){.button[data-v-cad0625e]{margin-top:1rem}}",""]),t.exports=e},518:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{window:{x:0,y:0},mouse:{x:0,y:0},style:{backgroundColor:"hsl(15, 54%, 85%)"}}},methods:{updateCoordinates:function(){this.mouse.x=event.clientX,this.mouse.y=event.clientY,this.window.x=window.innerHeight,this.window.y=window.innerWidth;var t=360/this.window.x*this.mouse.x,e=100/this.window.y*this.mouse.y;this.style.backgroundColor="hsl(".concat(t,", ").concat(e,"%, ",85,"%)")}}},r=n(42),c={components:{MouseColor:Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"color",style:this.style,on:{mousemove:this.updateCoordinates}},[this._t("default")],2)}),[],!1,null,null,null).exports},middleware:[function(t){var e=t.redirect;t.$auth.loggedIn&&e("/bizz")}],methods:{login:function(){this.$auth.loginWith("google")}}},d=(n(446),Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MouseColor",[n("div",{staticClass:"login"},[n("div",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Login")])])])}),[],!1,null,"cad0625e",null));e.default=d.exports}}]);