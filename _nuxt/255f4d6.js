(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{315:function(t,e,r){var content=r(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("62d6e664",content,!0,{sourceMap:!1})},317:function(t,e,r){var content=r(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("2d0742ad",content,!0,{sourceMap:!1})},318:function(t,e,r){"use strict";r(315)},319:function(t,e,r){var o=r(74)(!1);o.push([t.i,'.logo[data-v-49e31973]{width:100%;height:0;position:-webkit-sticky;position:sticky;align-self:flex-start;top:2rem;font-size:3.25rem;font-family:"Nova-Regular",sans-serif;line-height:1em;padding-bottom:100%;border:1px solid;border-radius:50%;background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center}@media (max-width:767px){.logo[data-v-49e31973]{width:100%;height:auto;top:0;border:0;border-bottom:1px solid;border-radius:0;padding:1rem 0 .5rem}}@media (max-width:480px){.logo[data-v-49e31973]{font-size:3rem;padding:.5rem 0}}.logo .logo-o[data-v-49e31973]{width:50%;top:50%;position:absolute;transform:translateY(-50%)}@media (max-width:767px){.logo .logo-o[data-v-49e31973]{display:none}}@media (min-width:767px){.logo span[data-v-49e31973]{display:none}}',""]),t.exports=o},320:function(t,e,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("d82ee350",content,!0,{sourceMap:!1})},321:function(t,e,r){var content=r(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("70b18b10",content,!0,{sourceMap:!1})},322:function(t,e,r){var content=r(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("1a1e5a40",content,!0,{sourceMap:!1})},323:function(t,e,r){"use strict";var o={name:"LetterSVG"},c=r(45),n={name:"LogoCircle",components:{LetterSVG:Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"logo-o",staticStyle:{"enable-background":"new 0 0 250 295.7"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 250 295.7","xml:space":"preserve"}},[e("g",[e("path",{attrs:{d:"M243.7,50.8c2,1.7,3.5,4.1,4.7,7.2c1.1,3.1,1.7,5.8,1.7,8v141.3c0,2.3-0.6,4.9-1.7,8c-1.1,3.1-2.7,5.5-4.7,7.2l-66.8,66.8\n  \t\tc-1.7,1.7-4,3.2-7,4.4c-3,1.3-5.7,1.9-8.2,1.9H88.8c-2.5,0-5.4-0.6-8.5-1.9c-3.1-1.3-5.5-2.7-7.2-4.4L6.3,222.5\n  \t\tc-1.7-1.7-3.2-4.1-4.4-7.2c-1.3-3.1-1.9-5.8-1.9-8V66c0-2.3,0.6-4.9,1.9-8c1.3-3.1,2.7-5.5,4.4-7.2l44-44c2-2,4.4-3.6,7.4-4.9\n  \t\tC60.7,0.6,63.5,0,66,0h118c2.5,0,5.4,0.6,8.5,1.9c3.1,1.3,5.5,2.9,7.2,4.9L243.7,50.8z M227.6,49.1c0-3.1-0.8-6.2-2.3-9.3\n  \t\tc-1.6-3.1-3.6-5.9-6.1-8.5c-2.5-2.5-5.4-4.6-8.5-6.1c-3.1-1.5-6.2-2.3-9.3-2.3H49.1c-6.5,0-12.5,2.7-18,8.2\n  \t\tc-5.5,5.5-8.2,11.5-8.2,18v175.1c0,2.5,0.6,5.3,1.9,8.2c1.3,3,2.8,5.4,4.4,7.4l27.1,26.6c1.7,2,4.1,3.6,7.2,4.9\n  \t\tc3.1,1.3,5.8,1.9,8,1.9h107c2.5,0,5.3-0.6,8.2-1.9c3-1.3,5.4-2.9,7.4-4.9l26.6-26.6c2-2,3.6-4.4,4.9-7.4c1.3-3,1.9-5.7,1.9-8.2\n  \t\tV49.1z"}})])])}),[],!1,null,"5f49f322",null).exports}},d=(r(318),Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[r("LetterSVG"),t._v(" "),r("span",[t._v("oneacre.online")])],1)}),[],!1,null,"49e31973",null));e.a=d.exports},324:function(t,e,r){"use strict";var o={props:{product:{type:Object,required:!0}},methods:{addShopItem:function(t){this.$store.commit("addShopItem",this.product),this.$router.push({path:"/more/payment"})}}},c=(r(325),r(45)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shop-purchase"},[r("p",[t._v("Price")]),t._v(" "),r("p",{staticClass:"price"},[t._v("€"+t._s(t.product.price))]),t._v(" "),r("div",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.addShopItem(e)}}},[t._v("Purchase")])])}),[],!1,null,"9f88a802",null);e.a=component.exports},325:function(t,e,r){"use strict";r(317)},326:function(t,e,r){var o=r(74)(!1);o.push([t.i,'.shop-purchase[data-v-9f88a802]{border-top:1px solid;padding-top:.75rem;margin-top:4rem;display:flex;justify-content:space-between;flex-wrap:wrap}@media (max-width:767px){.shop-purchase[data-v-9f88a802]{width:100%;position:fixed;left:50%;bottom:0;transform:translateX(-50%);padding:1rem 2rem 2rem;border-top:0;background:#fff}}@media (max-width:767px) and (max-width:480px){.shop-purchase[data-v-9f88a802]{padding:1rem 1rem 2rem}}@media (max-width:767px){.shop-purchase[data-v-9f88a802]:before{content:"";width:calc(100% - 4rem);height:1px;background:#1a1a1a;position:absolute;top:0}}@media (max-width:767px) and (max-width:480px){.shop-purchase[data-v-9f88a802]:before{width:calc(100% - 2rem)}}.shop-purchase p[data-v-9f88a802]{color:rgba(26,26,26,.4);font-size:1.375rem}.shop-purchase p.price[data-v-9f88a802]{color:#1a1a1a}.shop-purchase .button[data-v-9f88a802]{width:100%;padding:1rem 1.5rem .875rem;line-height:1em;text-transform:uppercase;color:#fff;background:#1a1a1a;letter-spacing:2px;border-radius:.375rem;margin-top:2rem;cursor:pointer;display:flex;align-items:center;justify-content:center}@media (max-width:767px){.shop-purchase .button[data-v-9f88a802]{margin-top:1.5rem}}@media (max-width:480px){.shop-purchase .button[data-v-9f88a802]{margin-top:1rem}}',""]),t.exports=o},329:function(t,e,r){"use strict";r(320)},330:function(t,e,r){var o=r(74)(!1);o.push([t.i,".product-description[data-v-109e6c90]{font-size:2rem;line-height:1.25em}@media (max-width:1200px){.product-description[data-v-109e6c90]{font-size:1.75rem}}@media (max-width:992px){.product-description[data-v-109e6c90]{font-size:1.75rem}}@media (max-width:480px){.product-description[data-v-109e6c90]{font-size:1.5rem;line-height:1.375em}}.product-description p[data-v-109e6c90]:not(:last-child){margin-bottom:1.25em}",""]),t.exports=o},331:function(t,e,r){"use strict";r(321)},332:function(t,e,r){var o=r(74)(!1);o.push([t.i,".product-images .image-content[data-v-14d1e1b9]{display:grid;grid-auto-rows:auto;grid-gap:1rem}.product-images .image-content.portrait[data-v-14d1e1b9]{grid-template-columns:1fr 1fr}@media (max-width:767px){.product-images .image-content.portrait[data-v-14d1e1b9]{grid-template-columns:1fr}}.product-images figure[data-v-14d1e1b9]{width:100%;margin:0;background:#d9d9d9}.product-images figure[data-v-14d1e1b9]:nth-of-type(2n){justify-self:flex-end}.product-images figure img[data-v-14d1e1b9]{width:100%;display:block}",""]),t.exports=o},333:function(t,e,r){"use strict";r(322)},334:function(t,e,r){var o=r(74)(!1);o.push([t.i,".product-specs .info-section[data-v-4d31ac2a]{font-size:1.375rem;display:grid;grid-template-columns:1fr 1fr;grid-gap:0 1.5rem;list-style:none;padding:0;margin:0;align-items:flex-end}@media (max-width:992px){.product-specs .info-section[data-v-4d31ac2a]{font-size:1.25rem}}@media (max-width:767px){.product-specs .info-section[data-v-4d31ac2a]{grid-template-columns:1fr;grid-gap:1.5rem}}.product-specs .info-section li[data-v-4d31ac2a]{padding:2rem 0 .25rem;border-bottom:1px solid #d9d9d9}@media (max-width:767px){.product-specs .info-section li[data-v-4d31ac2a]{padding:0 0 .25rem}}.product-specs .info-section li p[data-v-4d31ac2a]:first-of-type{color:rgba(26,26,26,.5)}",""]),t.exports=o},337:function(t,e,r){"use strict";var o={name:"ProductDescription"},c=(r(329),r(45)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"product-description"},[t._t("default")],2)}),[],!1,null,"109e6c90",null);e.a=component.exports},338:function(t,e,r){"use strict";var o={name:"ProductImages"},c=(r(331),r(45)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"product-images"},[t._t("default")],2)}),[],!1,null,"14d1e1b9",null);e.a=component.exports},339:function(t,e,r){"use strict";var o={name:"ProductSpecs"},c=(r(333),r(45)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"product-specs"},[t._t("default")],2)}),[],!1,null,"4d31ac2a",null);e.a=component.exports},398:function(t,e,r){var content=r(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("1c5d5b6a",content,!0,{sourceMap:!1})},471:function(t,e,r){t.exports=r.p+"img/concrete-flux-01.4656cfd.jpg"},472:function(t,e,r){t.exports=r.p+"img/concrete-flux-02.d8019c4.jpg"},473:function(t,e,r){t.exports=r.p+"img/concrete-flux-03.7e31d4f.jpg"},474:function(t,e,r){"use strict";r(398)},475:function(t,e,r){var o=r(74)(!1);o.push([t.i,'.shop-wrapper[data-v-bcc22c7c]{width:100%;max-width:1600px;padding:2rem 2rem 4rem;margin:0 auto;display:grid;grid-template-columns:fit-content(15rem) fit-content(80rem);grid-gap:4rem;align-items:flex-start;justify-content:center}@media (max-width:1200px){.shop-wrapper[data-v-bcc22c7c]{grid-gap:3rem}}@media (max-width:992px){.shop-wrapper[data-v-bcc22c7c]{grid-template-columns:fit-content(12.5rem) fit-content(80rem)}}@media (max-width:767px){.shop-wrapper[data-v-bcc22c7c]{grid-template-columns:1fr;padding:0 2rem 10rem}}@media (max-width:480px){.shop-wrapper[data-v-bcc22c7c]{padding:0 1rem 10rem}}.shop-wrapper .shop-side[data-v-bcc22c7c]{height:calc(100vh - 2rem);position:-webkit-sticky;position:sticky;display:flex;flex-direction:column;justify-content:space-between;top:2rem;padding:0 0 2rem}@media (max-width:767px){.shop-wrapper .shop-side[data-v-bcc22c7c]{top:0;height:auto}}.shop-wrapper .product[data-v-bcc22c7c]{display:grid;grid-auto-rows:auto;grid-gap:6rem;padding-top:1rem;border-top:1px solid}@media (max-width:767px){.shop-wrapper .product[data-v-bcc22c7c]{border-top:0;padding-top:15vh;grid-gap:4rem}}.shop-wrapper .product h1[data-v-bcc22c7c]{width:100%;font-size:6rem;font-family:"Nova-Regular",sans-serif;line-height:1em;padding-bottom:4rem;text-transform:lowercase;display:flex;flex-direction:column;flex-wrap:wrap;color:rgba(26,26,26,.25);margin:0}@media (max-width:1200px){.shop-wrapper .product h1[data-v-bcc22c7c]{font-size:5.5rem}}@media (max-width:992px){.shop-wrapper .product h1[data-v-bcc22c7c]{font-size:5rem}}@media (max-width:767px){.shop-wrapper .product h1[data-v-bcc22c7c]{padding-bottom:0}}@media (max-width:480px){.shop-wrapper .product h1[data-v-bcc22c7c]{font-size:4rem}}.shop-wrapper .product h1 span[data-v-bcc22c7c]{color:#1a1a1a}.shop-wrapper .product section[data-v-bcc22c7c]{border-top:1px solid;padding-top:.75rem;padding-bottom:2rem}.shop-wrapper .product section h4[data-v-bcc22c7c]{margin:0;font-size:1rem;line-height:1em;text-transform:uppercase;letter-spacing:2px;padding-bottom:2rem}@media (max-width:480px){.shop-wrapper .product section h4[data-v-bcc22c7c]{padding-bottom:2.5rem}}',""]),t.exports=o},530:function(t,e,r){"use strict";r.r(e);var o=r(323),c=r(337),n=r(338),d=r(339),l=r(324),m={components:{ProductDescription:c.a,ProductImages:n.a,ProductSpecs:d.a,LogoCircle:o.a,PurchaseButton:l.a},data:function(){return{product:{name:"Concrete Flux: Issue 5 Aesthetic Journalism",price:3,quantity:1}}}},f=(r(474),r(45)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shop-wrapper"},[o("div",{staticClass:"shop-side"},[o("LogoCircle"),t._v(" "),o("PurchaseButton",{attrs:{product:t.product}})],1),t._v(" "),o("div",{staticClass:"product"},[t._m(0),t._v(" "),o("ProductDescription",[o("h4",[t._v("Description")]),t._v(" "),o("p",[t._v("Since 2013, Concrete Flux 流泥 has been a platform for self-determined and unsolicited investigations into urban spaces across China. For Issue 5 we shift focus from the region to explore the possibilities of aesthetic journalism. The\n        micro-issue inaugurates a new direction for the publishing project, towards a sustained investigation into experimental documentary practices that address new visualities and vocabularies. Around this theme, we have gathered dissatisfied\n        journalists, amateur filmmakers, former student leaders, poets and community activists. The resulting articles are experiments in aesthetic journalism as media activism – through a restructuring of the “sensuous parameters of reality\n        itself”. (Bulter, 2010)")])]),t._v(" "),o("ProductImages",[o("h4",[t._v("Images")]),t._v(" "),o("div",{staticClass:"image-content"},[o("figure",[o("img",{attrs:{src:r(471)}})]),t._v(" "),o("figure",[o("img",{attrs:{src:r(472)}})]),t._v(" "),o("figure",[o("img",{attrs:{src:r(473)}})])])]),t._v(" "),o("ProductSpecs",[o("h4",[t._v("Information")]),t._v(" "),o("ul",{staticClass:"info-section"},[o("li",[o("p",[t._v("Title")]),t._v(" "),o("p",[t._v("Concrete Flux: Issue 5 Aesthetic Journalism")])]),t._v(" "),o("li",[o("p",[t._v("Size")]),t._v(" "),o("p",[t._v("210 x 297 mm")])]),t._v(" "),o("li",[o("p",[t._v("Languague")]),t._v(" "),o("p",[t._v("Simplified Chinese/English")])]),t._v(" "),o("li",[o("p",[t._v("Contributors")]),t._v(" "),o("p",[t._v("Franco ‘Bifo’ Berardi, Alfredo Cramerotti, Ana Naomi de Sousa and Twist Qu")])]),t._v(" "),o("li",[o("p",[t._v("Editors")]),t._v(" "),o("p",[t._v("Sophie Dyer and Solveig Suess")])]),t._v(" "),o("li",[o("p",[t._v("Special Editors")]),t._v(" "),o("p",[t._v("Ifor Duncan and Yugong 宫羽")])]),t._v(" "),o("li",[o("p",[t._v("Translation")]),t._v(" "),o("p",[t._v("Ceres Shi 时苒析, Yugong 宫羽 and Jennifer Zhang 张萃")])]),t._v(" "),o("li",[o("p",[t._v("Proofing")]),t._v(" "),o("p",[t._v("Miranda Johnson, Nicola Locatelli and Kevin Xing 邢凯新")])]),t._v(" "),o("li",[o("p",[t._v("Price")]),t._v(" "),o("p",[t._v("€3 / £3 / 30元 + VAT + Shipping")])]),t._v(" "),o("li",[o("p",[t._v("More info")]),t._v(" "),o("p",[o("a",{attrs:{target:"_blank",href:"http://concreteflux.com"}},[t._v("http://concreteflux.com")])])]),t._v(" "),o("li",[o("p",[t._v("Image credit")]),t._v(" "),o("p",[t._v("Concrete Flux 流泥 CC BY")])])])])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",[t._v("More by "),r("span",[t._v("Sophie Dyer")])])}],!1,null,"bcc22c7c",null);e.default=component.exports}}]);