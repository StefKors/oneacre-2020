(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{286:function(t,e,r){var content=r(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("3f8554b2",content,!0,{sourceMap:!1})},294:function(t,e,r){"use strict";r(286)},295:function(t,e,r){(e=r(62)(!1)).push([t.i,'.oa_payment_wrapper[data-v-70b68425]{width:100%;max-width:800px;border:1px solid var(--font-color);box-sizing:border-box;font-size:24px;font-family:"NEXTBook-Regular",sans-serif;text-align:center;margin:50px auto;color:var(--font-color);background-color:var(--bg-color);position:relative}.oa_payment_wrapper a[data-v-70b68425]{color:var(--primary);font-weight:700}.oa_p_label[data-v-70b68425]{padding:15px;border-bottom:1px solid var(--font-color)}.oa_p_content[data-v-70b68425]{padding:30px 30px 35px;font-size:19px;font-family:"NEXTBook-Regular",serif;line-height:1.35em;text-align:left}.oa_p_content[data-v-70b68425]:after{content:" ";display:block;height:0;clear:both}.oa_left[data-v-70b68425]{width:50%;padding-right:30px;float:left}.oa_left img[data-v-70b68425]{width:100%;display:block}.oa_right[data-v-70b68425]{width:50%;float:right;padding-left:30px;border-left:1px solid var(--primary)}.oa_mid[data-v-70b68425]{width:100%;margin:0 auto}.oa_small_font[data-v-70b68425]{font-size:14px;line-height:18px}.oa_p_content form[data-v-70b68425]{margin:0}.oa_p_content .oa_input[data-v-70b68425]{width:100%;padding:5px 10px;margin-top:20px;font-family:"Alverata-Regular",sans-serif;height:30px;font-size:16px;color:var(--font-color);border:1px solid var(--font-color);box-sizing:border-box}.oa_p_content .oa_input[data-v-70b68425]:placeholder{color:rgba(25,25,25,.4)}.oa_p_content #oa_submit[data-v-70b68425]{border:1px solid var(--primary);background-color:var(--primary);color:var(--bg-color);height:35px;cursor:pointer;transition:.15s;line-height:1.1em;box-shadow:inset 0 -2px 0 rgba(0,0,0,.1)}.oa_p_content #oa_submit[data-v-70b68425]:hover{box-shadow:none}.horizontal_slider[data-v-70b68425]{margin:20px 0 15px;background-color:var(--font-color);color:var(--bg-color);padding:10px 0;width:100%;outline:none}.horizontal_slider[data-v-70b68425]:focus{outline:none}.horizontal_slider[type=range][data-v-70b68425]::-moz-focus-outer{border:0}.horizontal_slider[type=range][data-v-70b68425]{-webkit-appearance:none;width:100%;background:transparent;outline:none}.horizontal_slider[type=range][data-v-70b68425]::-webkit-slider-thumb{-webkit-appearance:none;border:1px solid var(--font-color);height:25px;width:36px;background:var(--bg-color);border-radius:0;cursor:pointer;margin-top:-14px;outline:none}.horizontal_slider[type=range][data-v-70b68425]::-moz-range-thumb{border:1px solid var(--font-color);height:25px;width:36px;border-radius:0;background:var(--bg-color);cursor:pointer;outline:none}.horizontal_slider[type=range][data-v-70b68425]::-ms-thumb{border:1px solid var(--font-color);height:25px;width:36px;border-radius:0;background:var(--bg-color);cursor:pointer;outline:none}.horizontal_slider[type=range][data-v-70b68425]:focus{outline:none}.horizontal_slider[type=range][data-v-70b68425]::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;background:var(--font-color);outline:none}.horizontal_slider[type=range][data-v-70b68425]::-moz-range-track{width:100%;height:1px;cursor:pointer;background:var(--font-color);outline:none}.horizontal_slider[type=range][data-v-70b68425]::-ms-track{width:100%;height:1px;cursor:pointer;background:transparent;border-color:transparent;border-width:16px 0;color:transparent;outline:none}@media only screen and (max-width:768px){body[data-v-70b68425]{padding:0}.oa_payment_wrapper[data-v-70b68425]{margin-top:0;font-size:24px}.oa_p_content[data-v-70b68425]{font-size:16px;line-height:1.45em;padding:20px 15px}.oa_left[data-v-70b68425]{float:none;text-align:center;position:relative;display:table;margin:auto auto 40px}.oa_left img[data-v-70b68425]{max-width:350px}.oa_right[data-v-70b68425]{float:none;max-width:none;padding-left:0;border-left:0}.oa_p_content[data-v-70b68425]:after{clear:none;height:auto}}',""]),t.exports=e},297:function(t,e,r){"use strict";var o=r(31),n=r(86),l={props:{publication:{type:String,required:!0},customer:{type:Object,required:!0},artist:{type:Object,required:!0}},methods:{getPublicationId:function(){var t=o.values(this.customer.works).pop().url;return"?id=".concat(t)},getBaseUrl:function(){return Object(n.a)(this.publication)},getUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.getBaseUrl()+this.getPublicationId(this.customer);return t?window.location.origin+e:e}}},c=(r(294),r(30)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"oa_payment_wrapper",attrs:{id:t.publication}},[r("div",{staticClass:"oa_p_label"},[t._v("payment complete")]),t._v(" "),r("div",{staticClass:"oa_p_content"},[r("span",[t._v("You have completed your payment. "),r("br"),r("br"),t._v("\n      We have sent email confirmation to:\n      "),r("span",{staticClass:"emphasis"},[t._v(t._s(t.customer.email))]),t._v(" with your personal\n      link. Your personal link is:\n      "),r("span",{staticClass:"emphasis"},[r("NuxtLink",{attrs:{to:t.getUrl()}},[t._v("\n          "+t._s(t.getUrl())+"\n        ")])],1),t._v(". "),r("br"),r("br"),t._v("\n      Please feel free to share your link with friends, family and the\n      internet. Thank you for supporting\n      "),t._m(0),t._v("\n      and\n      "),r("span",{staticClass:"emphasis"},[t._v(t._s(t.artist.name))]),t._v(".")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"emphasis"},[e("a",{attrs:{href:"https:www.oneacre.online"}},[this._v("oneacre.online")])])}],!1,null,"70b68425",null);e.a=component.exports},326:function(t,e,r){var content=r(373);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("45a0495c",content,!0,{sourceMap:!1})},372:function(t,e,r){"use strict";r(326)},373:function(t,e,r){(e=r(62)(!1)).push([t.i,".lisa{--primary:#ff4713;--secondary:#fff;--bg-color:#fff;--font-color:#000;background-image:url(/images/lisa/msa_bg.svg);background-size:1500px;background-repeat:repeat}",""]),t.exports=e},404:function(t,e,r){"use strict";r.r(e);r(87),r(21),r(22),r(12),r(64);var o=r(48),n=(r(17),r(3)),l=r(297),c=r(86);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=c.c.lisa,v={components:{Confirmation:l.a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,t.error,o=t.query,e.prev=1,e.next=4,r.$post("/shop/catalog/order-information",{id:o.id});case 4:return n=e.sent,e.abrupt("return",{customer:n});case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},data:function(){return h(h({},f),{},{artist:f,description:"oneacre.online is an experimental publication project, of size exactly equal to the area of 1 chain by 1 furlong that aims to utilise the omnidirectional website space to seed works."})},head:function(){return{title:this.title,meta:Object(c.d)(this.title,this.description,this.image),bodyAttrs:{class:this.dir}}}},m=(r(372),r(30)),component=Object(m.a)(v,(function(){var t=this.$createElement;return(this._self._c||t)("Confirmation",{attrs:{publication:this.artist.dir,artist:this.artist,customer:this.customer}})}),[],!1,null,null,null);e.default=component.exports}}]);