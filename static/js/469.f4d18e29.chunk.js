"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[469],{4469:function(t,n,e){e.r(n);var r=e(8152),a=e(2791),u=e(6871),c=e(4948),i=e(3504),o=e(4697),s=e(184);n.default=function(t){var n=t.goBack,e=(0,a.useState)(""),p=(0,r.Z)(e,2),f=p[0],d=p[1],l=(0,a.useState)(null),h=(0,r.Z)(l,2),b=h[0],v=h[1],x=(0,u.s0)(),m=function(){d("")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{type:"button",onClick:n,children:"Go Back"}),(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=f.toLowerCase();return o.z1(n).then(v),x("../movies?query=".concat(f),{replace:!1}),m(),f},children:[(0,s.jsx)("input",{type:"text",name:"",value:f,onChange:function(t){var n=t.currentTarget.value;d(n)},autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),(0,s.jsx)(u.j3,{}),b&&(0,s.jsxs)("ul",{children:[(0,s.jsx)(c.C,{children:"Results"}),b.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(i.rU,{to:"/movies/".concat(t.id),children:t.title})},t.id)}))]})]})}},4948:function(t,n,e){e.d(n,{C:function(){return i}});var r,a=e(168),u=e(6031).ZP.h1(r||(r=(0,a.Z)(["\n  padding: 8px;\n  margin-top: 0;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: 500;\n  text-align: center;\n  background-image: repeating-linear-gradient(\n    -45deg,\n    #606dbc,\n    #606dbc 15px,\n    #465298 15px,\n    #465298 30px\n  );\n"]))),c=e(184),i=function(t){var n=t.children;return(0,c.jsx)(u,{children:n})}},4697:function(t,n,e){e.d(n,{Bt:function(){return h},Mc:function(){return p},l2:function(){return d},wr:function(){return o},z1:function(){return v}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),i=e.n(c);function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/day?api_key=3c97a1babd597f31c1fa5b3567357dfb");case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"?api_key=3c97a1babd597f31c1fa5b3567357dfb"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits?api_key=3c97a1babd597f31c1fa5b3567357dfb"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews?api_key=3c97a1babd597f31c1fa5b3567357dfb"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie/?api_key=3c97a1babd597f31c1fa5b3567357dfb&query=".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=469.f4d18e29.chunk.js.map