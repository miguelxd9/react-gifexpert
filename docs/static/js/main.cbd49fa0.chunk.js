(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),i=n(7),a=n.n(i),s=(n(15),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),i(t),a(t)}))}),o=n(2),u=n(9),j=n(0),l=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(o.a)(n,2),i=r[0],a=r[1];return Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>0&&(e((function(t){return[i].concat(Object(u.a)(t))})),a(""))},children:Object(j.jsx)("input",{type:"text",value:i,onChange:function(t){a(t.target.value)}})})},d=n(10),b=function(t){var e=t.id,n=t.title,c=t.url;return console.log(e,n,c),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:c,alt:n}),Object(j.jsx)("p",{children:n})]})},p=n(6),f=n.n(p),O=n(8),h=function(){var t=Object(O.a)(f.a.mark((function t(e){var n,c,r,i,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=xv61yVU9NoQrznm4ZKnKl770XOiZBOQu&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,i=r.data,a=i.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(o.a)(e,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){h(t).then((function(t){setTimeout((function(){console.log(t),i({data:t,loading:!1})}),3e3)}))}),[t]),r}(e),r=n.data,i=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:e}),i&&Object(j.jsx)("div",{class:"spinner-border text-primary",role:"status",children:Object(j.jsx)("span",{class:"visually-hidden",children:"Loading..."})}),Object(j.jsx)("div",{className:"card-grid",children:Object(j.jsx)("ol",{children:r.map((function(t){return Object(j.jsx)(b,Object(d.a)({},t),t.id)}))})})]})},g=function(){var t=Object(c.useState)(["Goku"]),e=Object(o.a)(t,2),n=e[0],r=e[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GiftExpertApp"}),Object(j.jsx)(l,{setCategories:r}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(t,e){return Object(j.jsx)(x,{category:t},t)}))})]})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),s()}},[[18,1,2]]]);
//# sourceMappingURL=main.cbd49fa0.chunk.js.map