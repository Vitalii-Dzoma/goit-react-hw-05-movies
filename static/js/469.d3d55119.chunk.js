"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[469],{4469:function(n,t,e){e.r(t);var r=e(8152),a=e(2791),u=e(6871),c=e(4948),i=e(3504),o=e(4697),s=e(184);t.default=function(n){var t=n.goBack,e=(0,a.useState)(""),p=(0,r.Z)(e,2),f=p[0],d=p[1],l=(0,a.useState)(null),h=(0,r.Z)(l,2),b=h[0],v=h[1],x=(0,u.s0)(),m=function(){d("")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=f.toLowerCase();return o.z1(t).then(v),x("../movies?query=".concat(f),{replace:!1}),m(),f},children:[(0,s.jsx)("input",{type:"text",name:"",value:f,onChange:function(n){var t=n.currentTarget.value;d(t)},autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),(0,s.jsx)(u.j3,{}),b&&(0,s.jsxs)("ul",{children:[(0,s.jsx)("button",{type:"button",onClick:t,children:"Go Back"}),(0,s.jsx)(c.C,{children:"Results"}),b.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(i.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))]})]})}},4948:function(n,t,e){e.d(t,{C:function(){return i}});var r,a=e(168),u=e(6031).ZP.h1(r||(r=(0,a.Z)(["\n  padding: 8px;\n  margin-top: 0;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: 500;\n  text-align: center;\n  background-image: repeating-linear-gradient(\n    -45deg,\n    #606dbc,\n    #606dbc 15px,\n    #465298 15px,\n    #465298 30px\n  );\n"]))),c=e(184),i=function(n){var t=n.children;return(0,c.jsx)(u,{children:t})}},4697:function(n,t,e){e.d(t,{Bt:function(){return h},Mc:function(){return p},l2:function(){return d},wr:function(){return o},z1:function(){return v}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),i=e.n(c);function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/day?api_key=3c97a1babd597f31c1fa5b3567357dfb");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=3c97a1babd597f31c1fa5b3567357dfb"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits?api_key=3c97a1babd597f31c1fa5b3567357dfb"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=3c97a1babd597f31c1fa5b3567357dfb"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie/?api_key=3c97a1babd597f31c1fa5b3567357dfb&&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=469.d3d55119.chunk.js.map