"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{4948:function(n,t,e){e.d(t,{C:function(){return i}});var r,a=e(168),c=e(6031).ZP.h1(r||(r=(0,a.Z)(["\n  padding: 8px;\n  margin-top: 0;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: 500;\n  text-align: center;\n  background-image: repeating-linear-gradient(\n    -45deg,\n    #606dbc,\n    #606dbc 15px,\n    #465298 15px,\n    #465298 30px\n  );\n"]))),u=e(184),i=function(n){var t=n.children;return(0,u.jsx)(c,{children:t})}},4697:function(n,t,e){e.d(t,{Bt:function(){return b},Mc:function(){return f},l2:function(){return d},wr:function(){return s},z1:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u);function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/day?api_key=3c97a1babd597f31c1fa5b3567357dfb");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"?api_key=3c97a1babd597f31c1fa5b3567357dfb"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/credits?api_key=3c97a1babd597f31c1fa5b3567357dfb"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(t,"/reviews?api_key=3c97a1babd597f31c1fa5b3567357dfb"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie/?api_key=3c97a1babd597f31c1fa5b3567357dfb&&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3"},4884:function(n,t,e){e.r(t);var r=e(8152),a=e(2791),c=e(3504),u=e(6871),i=e(4697),s=e(4948),o=e(184);t.default=function(){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),e=t[0],f=t[1];return(0,a.useEffect)((function(){i.wr().then(f)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.C,{children:"Trending today"}),e&&(0,o.jsx)("ul",{children:e.map((function(n){return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))}),(0,o.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=884.959967f6.chunk.js.map