"use strict";(self.webpackChunkto_do=self.webpackChunkto_do||[]).push([[450],{2531:function(n,t,e){e.d(t,{Z:function(){return a}});var r=e(4165),o=e(5861),i=e(2791),a=function(){var n=function(){var n=(0,i.useCallback)(function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){var e,o,i,a,c,s=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:null,i=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},n.prev=3,n.next=6,fetch(t,{method:e,body:o,headers:i});case 6:if((a=n.sent).ok){n.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 9:return n.next=11,a.json();case 11:return c=n.sent,n.abrupt("return",c);case 15:throw n.prev=15,n.t0=n.catch(3),n.t0;case 18:case"end":return n.stop()}}),n,null,[[3,15]])})));return function(t){return n.apply(this,arguments)}}(),[]);return{request:n}}(),t=n.request,e="https://fakestoreapi.com/products/",a=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t("".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(o){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t("".concat(e).concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return{getAllProducts:a,getProduct:c}}},7309:function(n,t,e){e.r(t),e.d(t,{default:function(){return hn}});var r,o,i,a,c,s,u,l,p,d,x,f=e(2791),h=e(3433),g=e(4165),m=e(5861),Z=e(9439),v=e(1087),j=e(9704),b=e(3427),w=e(2531),k=e(168),z=e(5867),y=z.zo.div(r||(r=(0,k.Z)(["\n  width: 100%;\n"]))),C=z.zo.div(o||(o=(0,k.Z)(["\n  margin-left: auto;\n  margin-top: 50px;\n  margin-bottom:35px;\n  & > div {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 300px);\n    justify-content:center;\n    grid-gap: 60px 15px;\n  }\n"]))),P=(0,z.F4)(i||(i=(0,k.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(-360deg);\n  }\n"]))),F=z.zo.button(a||(a=(0,k.Z)(["\n  display: ",";\n  padding-inline: 22px;\n  padding-block: 5px;\n  border-radius: 30px;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  margin: 0 auto;\n  margin-top: 60px;\n  & img {\n    width: 35px;\n    height: 35px;\n  }\n  &:hover& > img {\n    animation: "," 2s linear infinite;\n    transform-origin: 50% 50%;\n  }\n"])),(function(n){return n.lastFetch?"none":"flex"}),P),S=z.zo.span(c||(c=(0,k.Z)(["\n  padding-left: 10px;\n"]))),_=z.ZP.div(s||(s=(0,k.Z)(["\n  display:flex; \n  justify-content: center;\n  align-items:center;\n  padding:20px 10px 30px 10px ;\n  background-color:#ffffff;\n  max-width:300px;\n  margin-bottom:20px;\n"]))),E=z.ZP.img(u||(u=(0,k.Z)(["\n  max-width:100%;\n  height:220px;\n  object-fit: contain;\n"]))),L=e(184),T=function(n){var t=n.image;return(0,L.jsx)(_,{children:(0,L.jsx)(E,{src:t,alt:"Product"})})},$=z.zo.div(l||(l=(0,k.Z)(["\n  cursor: pointer;\n  background-color: #202020;\n  transition:all 0.4s linear;\n  &:hover{\n    transform:translateY(-5px);\n  }\n  \n"]))),q=z.zo.h4(p||(p=(0,k.Z)(["\n    font-size: 20px;\n    width: 300px;\n    word-break: break-word;\n    font-weight: 400;\n    margin-bottom: 10px;\n    line-height: 130%;\n"]))),A=z.zo.span(d||(d=(0,k.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  line-height:  130% ;\n  text-transform: capitalize;\n"]))),D=z.zo.div(x||(x=(0,k.Z)(["\n  padding: 10px 0px 30px 10px;\n"]))),Y=function(n){var t=n.product;return(0,L.jsxs)($,{children:[(0,L.jsx)(T,{image:t.image}),(0,L.jsxs)(D,{children:[(0,L.jsx)(q,{children:"".concat(t.title.slice(0,20))}),(0,L.jsx)(A,{children:"$"+t.price})]})]})};var G,J,M,N,U,B,H,I,K,O=e.p+"static/media/loadingList.fc79130064dfcfcd736449a8c4b34460.svg",Q=e(509),R=e(7741),V=function(){var n=(0,w.Z)().getAllProducts,t=(0,f.useContext)(Q._),e=t.setProducts,r=t.visibleProducts,o=t.data,i=t.setData,a=t.lastFetch,c=t.setLastFetch,s=(0,f.useState)(9),u=(0,Z.Z)(s,2),l=u[0],p=u[1],d=(0,f.useState)(!1),x=(0,Z.Z)(d,2),k=x[0],z=x[1];(0,f.useEffect)((function(){(0,m.Z)((0,g.Z)().mark((function t(){var r;return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return z(!0),t.next=3,n();case 3:r=t.sent,i(r),e(r.slice(0,9)),z(!1);case 7:case"end":return t.stop()}}),t)})))()}),[]);var P=k?(0,L.jsx)(R.Z,{}):null,_=P?null:r.length?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(j.Z,{children:r.map((function(n){return(0,L.jsx)(b.Z,{timeout:500,classNames:"item",children:(0,L.jsx)(v.rU,{to:"/product/".concat(n.id),children:(0,L.jsx)(Y,{product:n})})},n.id)}))}),(0,L.jsxs)(F,{lastFetch:a,onClick:function(){o.length<=l+9?(e((function(n){return[].concat((0,h.Z)(n),(0,h.Z)(o.slice(l,o.length)))})),c(!0)):(p((function(n){return n+9})),e((function(n){return[].concat((0,h.Z)(n),(0,h.Z)(o.slice(l,l+9)))})))},children:[(0,L.jsx)("img",{src:O,alt:"loading"}),(0,L.jsx)(S,{children:"More"})]})]}):(0,L.jsx)("p",{children:"\u0422\u0430\u043a\u043e\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u0443 \u043d\u0435\u043c\u0430\u0454 \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456, \u0432\u0438\u0431\u0430\u0447\u0442\u0435."});return(0,L.jsx)(y,{children:(0,L.jsxs)(C,{children:[P,_]})})},W=z.zo.aside(G||(G=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  min-height: 100vh;\n"]))),X=z.zo.h3(J||(J=(0,k.Z)(["\n  font-size: 33px;\n  font-weight: 500;\n  line-height: 130.303%;\n  margin-bottom:50px;\n"]))),nn=e(4899),tn=(e(5262),z.zo.div(M||(M=(0,k.Z)(["\n  max-width: 220px;\n"])))),en=z.zo.span(N||(N=(0,k.Z)(["\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 157.143%;\n  color: #fbfad3;\n\n"]))),rn=z.zo.div(U||(U=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),on=z.zo.button(B||(B=(0,k.Z)(["\n  font-size: 17px;\n  font-weight: 400;\n  line-height: 157.143%;\n  padding:15px 10px;\n  background-color:transparent;\n  color: #c0bc5a;\n\n  cursor: pointer;\n  transition: all 0.2s linear;\n  &:hover{\n    color:#cea51c;\n  }\n"]))),an=function(){var n=(0,f.useState)([0,1e3]),t=(0,Z.Z)(n,2),e=t[0],r=t[1],o=(0,f.useContext)(Q._).filterProducts;return(0,L.jsxs)(tn,{children:[(0,L.jsx)(nn.Z,{range:!0,min:0,max:1e3,value:e,onChange:r,allowCross:!1}),(0,L.jsxs)(rn,{children:[(0,L.jsx)(en,{children:"Price: ".concat(e[0],"$ - ").concat(e[1],"$")}),(0,L.jsx)(on,{onClick:function(){return o(e)},children:"Filter"})]})]})},cn=z.zo.div(H||(H=(0,k.Z)(["\n  display: inline-block;\n  position: relative;\n max-width:220px;\n margin-bottom:40px;\n"]))),sn=z.zo.button(I||(I=(0,k.Z)(["\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  top: 0;\n  right: 0;\n  padding: 8px;\n   transition: all 0.25s linear;\n   &:hover{\n    transform:translateY(-2px);\n   }\n  background-color: transparent;\n"]))),un=z.zo.input(K||(K=(0,k.Z)(["\n    font-size: 16px;\n    border-bottom: 1px solid #ffffff;\n    color: #fbfae6;\n    outline: none;\n    padding: 10px 0px 10px 0px;\n    padding-inline: 10px 31px;\n    width: 100%;\n    transition: all ease 0.3s;\n    background-color: transparent;\n    box-shadow: 0px 0px 0.5px 0px #000;\n    cursor: pointer;\n    &::placeholder{\n      color: #bdbcad;\n    }\n"]))),ln=e(3844),pn=e(4377),dn=function(){var n=(0,f.useState)(""),t=(0,Z.Z)(n,2),e=t[0],r=t[1],o=(0,f.useContext)(Q._).searchProduct;return(0,L.jsx)(cn,{children:(0,L.jsxs)("form",{onSubmit:function(n){n.preventDefault(),o(e)},children:[(0,L.jsx)(un,{placeholder:"Search...",autoComplete:"off",name:"text",type:"text",value:e,onChange:function(n){return r(n.target.value)}}),(0,L.jsx)(sn,{onClick:function(){return o(e)},children:(0,L.jsx)(ln.J,{src:pn.Z,alt:"Search"})})]})})},xn=function(){return(0,L.jsxs)(W,{children:[(0,L.jsx)(X,{children:"Shop The Latest"}),(0,L.jsx)(dn,{}),(0,L.jsx)(an,{})]})},fn=e(538),hn=function(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(fn.Z,{children:(0,L.jsx)(xn,{})}),(0,L.jsx)(fn.Z,{children:(0,L.jsx)(V,{})})]})}}}]);
//# sourceMappingURL=450.226ac098.chunk.js.map