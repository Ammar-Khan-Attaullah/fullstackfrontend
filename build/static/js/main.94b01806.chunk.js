(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{146:function(e,t,a){e.exports=a.p+"static/media/camera.91a960a0.png"},154:function(e,t,a){e.exports=a(267)},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},166:function(e,t,a){},169:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},246:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){},267:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),s=(a(159),a(77),a(160),a(301));a(280),a(71),a(127),a(161),a(162);var o=a(6);a(166),a(128);a(167);var u=a(36),i=(a(169),a(129)),m=a(130),p=a(148),d=a(147);n.Component;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(63),v=(a(31),Object(n.createContext)(),a(171),a(172),a(75));v.initializeApp({apiKey:"AIzaSyDJM01JK-G5VmNq__WKym51LCgfYD20v_A",authDomain:"twitter-clone-one-one.firebaseapp.com",databaseURL:"https://twitter-clone-one-one.firebaseio.com",projectId:"twitter-clone-one-one",storageBucket:"twitter-clone-one-one.appspot.com",messagingSenderId:"63948883961",appId:"1:63948883961:web:e23a54ffd76bf9bde31f28",measurementId:"G-EHRW56LMXG"}).firestore(),v.auth(),new v.auth.GoogleAuthProvider,a(281),a(183);var E=a(282),b=a(283),g=a(284),h=a(285),j=a(286);a(184),Object(n.forwardRef)((function(e,t){var a=e.displayName,n=e.username,c=e.verified,l=e.text,o=e.image,u=e.avatar;return r.a.createElement("div",{className:"post",ref:t},r.a.createElement("div",{className:"post__avatar"},r.a.createElement(s.a,{src:u})),r.a.createElement("div",{className:"post__body"},r.a.createElement("div",{className:"post__header"},r.a.createElement("div",{className:"post__headerText"},r.a.createElement("h3",null,a," ",r.a.createElement("span",{className:"post__headerSpecial"},c&&r.a.createElement(E.a,{className:"post__badge"})," @",n))),r.a.createElement("div",{className:"post__headerDescription"},r.a.createElement("p",null,l))),r.a.createElement("img",{src:o,alt:""}),r.a.createElement("div",{className:"post__footer"},r.a.createElement(b.a,{fontSize:"small"}),r.a.createElement(g.a,{fontSize:"small"}),r.a.createElement(h.a,{fontSize:"small"}),r.a.createElement(j.a,{fontSize:"small"}))))})),a(131);a(185),a(186);a(132),a(133),a(134),a(135),a(136),a(137),a(138),a(139);a(287),a(76),a(187);a(188);var O=a(288),y=a(16),w=a(10),S=a.n(w),x=a(19),k=a(140),N=a.n(k).a.create({baseURL:"https://fullstackbackend-api.herokuapp.com/"}),C=a(289),_=a(290),I=a(291),T=a(141),D=a(302),R=Object(n.createContext)(),L=function(e){var t=Object(n.useState)(!!localStorage.getItem("user")),a=Object(o.a)(t,2),c={isLoggedIn:a[0],setIsloggedIn:a[1]};return r.a.createElement(R.Provider,{value:c}," ",e.children," ")};function P(e){var t=e.history,a=Object(n.useContext)(R).setIsloggedIn,c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],u=l[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),p=m[0],d=m[1],f=Object(n.useState)(!1),v=Object(o.a)(f,2),E=v[0],b=v[1],g=Object(n.useState)("false"),h=Object(o.a)(g,2),j=h[0],y=h[1],w=function(){var e=Object(x.a)(S.a.mark((function e(n){var r,c,l,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,N.post("/login",{email:s,password:p});case 3:r=e.sent,c=r.data.user_id||!1,l=r.data.user||!1;try{l&&c?(localStorage.setItem("user",l),localStorage.setItem("user_id",c),a(!0),t.push("/")):(o=r.data.message,b(!0),y(o),setTimeout((function(){b(!1),y("")}),2e3))}catch(E){b(!0),y("Error, the server returned an error")}case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(O.a,null,r.a.createElement("h2",null,"Login:"),r.a.createElement("p",null,"Please ",r.a.createElement("strong",null,"Login")," into your account"),r.a.createElement(C.a,{onSubmit:w},r.a.createElement("div",{className:"input-group"},r.a.createElement(_.a,{className:"form-group-"}),r.a.createElement(_.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(I.a,{type:"email",name:"email",id:"email",placeholder:"Your email",onChange:function(e){return u(e.target.value)}})),r.a.createElement(_.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(I.a,{type:"password",name:"password",id:"password",placeholder:"Your password",onChange:function(e){return d(e.target.value)}}))),r.a.createElement(_.a,null,r.a.createElement(T.a,{className:"submit-btn"},"Submit")),r.a.createElement(_.a,null,r.a.createElement(T.a,{className:"secondary-btn",onClick:function(){return t.push("/register")}},"New Account"))),E?r.a.createElement(D.a,{className:"event-validation",color:"danger"}," ",j):"")}function A(e){var t=e.history,a=Object(n.useContext)(R).setIsloggedIn,c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],u=l[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),p=m[0],d=m[1],f=Object(n.useState)(""),v=Object(o.a)(f,2),E=v[0],b=v[1],g=Object(n.useState)(""),h=Object(o.a)(g,2),j=h[0],y=h[1],w=Object(n.useState)(!1),k=Object(o.a)(w,2),L=k[0],P=k[1],A=Object(n.useState)(""),q=Object(o.a)(A,2),Y=q[0],z=q[1],F=function(){var e=Object(x.a)(S.a.mark((function e(n){var r,c,l,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""===s||""===p||""===E||""===j){e.next=10;break}return e.next=4,N.post("/user/register",{email:s,password:p,firstName:E,lastName:j});case 4:r=e.sent,c=r.data.user||!1,l=r.data.user_id||!1,c&&l?(localStorage.setItem("user",c),localStorage.setItem("user_id",l),a(!0),t.push("/dashboard")):(o=r.data.message,P(!0),z(o),setTimeout((function(){P(!1),z("")}),2e3)),e.next=13;break;case 10:P(!0),z("You need to fill all the Inputs"),setTimeout((function(){P(!1),z("")}),2e3);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(O.a,null,r.a.createElement("h2",null,"Register:"),r.a.createElement("p",null,"Please ",r.a.createElement("strong",null,"Register")," for a new account"),r.a.createElement(C.a,{onSubmit:F},r.a.createElement("div",{className:"input-group"},r.a.createElement(_.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(I.a,{type:"text",name:"firstName",id:"firstName",placeholder:"Your first name",onChange:function(e){return b(e.target.value)}})),r.a.createElement(_.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(I.a,{type:"text",name:"lastName",id:"lastName",placeholder:"Your last name",onChange:function(e){return y(e.target.value)}})),r.a.createElement(_.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(I.a,{type:"email",name:"email",id:"email",placeholder:"Your email",onChange:function(e){return u(e.target.value)}})),r.a.createElement(_.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(I.a,{type:"password",name:"password",id:"password",placeholder:"Your password",onChange:function(e){return d(e.target.value)}}))),r.a.createElement(_.a,null,r.a.createElement(T.a,{className:"submit-btn"},"Submit")),r.a.createElement(_.a,null,r.a.createElement(T.a,{className:"secondary-btn",onClick:function(){return t.push("/login")}},"Login instead?"))),L?r.a.createElement(D.a,{className:"event-validation",color:"danger"},Y):"")}var q=a(74),Y=a.n(q),z=a(292),F=a(143),M=a(303),U=a(304),W=a(293),G=a(142),J=a.n(G);a(246);function B(e){var t=e.history,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],s=c[1],u=localStorage.getItem("user"),i=localStorage.getItem("user_id"),m=Object(n.useState)(null),p=Object(o.a)(m,2),d=p[0],v=p[1],E=Object(n.useState)(!1),b=Object(o.a)(E,2),g=b[0],h=b[1],j=Object(n.useState)(!1),O=Object(o.a)(j,2),y=O[0],w=O[1],k=Object(n.useState)(""),C=Object(o.a)(k,2),_=C[0],I=C[1],R=Object(n.useState)([]),L=Object(o.a)(R,2),P=L[0],A=L[1],q=Object(n.useState)(!1),G=Object(o.a)(q,2),B=G[0],K=G[1],H=Object(n.useState)(""),V=Object(o.a)(H,2),X=V[0],$=V[1],Q=Object(n.useState)(!1),Z=Object(o.a)(Q,2),ee=Z[0],te=Z[1];Object(n.useEffect)((function(){ce()}),[]);var ae=Object(n.useMemo)((function(){return J()("http://localhost:8000/",{query:{user:i}})}),[i]);Object(n.useEffect)((function(){ae.on("registration_request",(function(e){return A([].concat(Object(f.a)(P),[e]))}))}),[P,ae]);var ne=function(e){v(e),ce(e)},re=function(){var e=Object(x.a)(S.a.mark((function e(){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v("myevents"),e.next=4,N.get("/user/events",{headers:{user:u}});case 4:a=e.sent,s(a.data.events),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.push("/login");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(x.a)(S.a.mark((function e(a){var n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=a?"/dashboard/".concat(a):"/dashboard",e.next=4,N.get(n,{headers:{user:u}});case 4:r=e.sent,s(r.data.events),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.push("/login");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(x.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.delete("/event/".concat(t),{headers:{user:u}});case 3:w(!0),I("The event was deleted successfully!"),setTimeout((function(){w(!1),ne(null),I("")}),2500),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),h(!0),I("Error when deleting event!"),setTimeout((function(){h(!1),I("")}),2e3);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(x.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/registration/".concat(t.id),{},{headers:{user:u}});case 3:w(!0),I("The request for the event ".concat(t.title," was successfully!")),setTimeout((function(){w(!1),ne(null),I("")}),2500),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),h(!0),I("The request for the event ".concat(t.title," wasn't successfully!")),setTimeout((function(){h(!1),I("")}),2e3);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(x.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/registration/".concat(t,"/approvals"),{},{headers:{user:u}});case 3:te(!0),$("Event approved successfully!"),ie(t),setTimeout((function(){te(!1),$("")}),2e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(x.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/registration/".concat(t,"/rejections"),{},{headers:{user:u}});case 3:te(!0),$("Event rejected successfully!"),ie(t),setTimeout((function(){te(!1),$("")}),2e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(e){var t=P.filter((function(t){return t._id!==e}));A(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"notifications"},P.map((function(e){return console.log(e),r.a.createElement("li",{key:e.id},r.a.createElement("div",null,r.a.createElement("strong",null,e.user.email," ")," is requesting to register to your Event ",r.a.createElement("strong",null,e.event.title)),r.a.createElement(z.a,null,r.a.createElement(T.a,{color:"secondary",onClick:function(){return oe(e._id)}},"Accept"),r.a.createElement(T.a,{color:"danger",onClick:function(){return ue(e._id)}},"Reject")))}))),ee?r.a.createElement(D.a,{color:"success"}," ",X):"",r.a.createElement("div",{className:"filter-panel"},r.a.createElement(F.a,{isOpen:B,toggle:function(){return K(!B)}},r.a.createElement(M.a,{color:"primary",caret:!0},"Filter"),r.a.createElement(U.a,null,r.a.createElement(W.a,{onClick:function(){return ne(null)},active:null===d},"All Sports"),r.a.createElement(W.a,{onClick:re,active:"myevents"===d},"My Events"),r.a.createElement(W.a,{onClick:function(){return ne("running")},active:"running"===d},"Running"),r.a.createElement(W.a,{onClick:function(){return ne("cycling")},active:"cycling"===d},"Cycling"),r.a.createElement(W.a,{color:"primary",onClick:function(){return ne("swimming")},active:"swimming"===d},"Swimming")))),r.a.createElement("ul",{className:"events-list"},l.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("header",{style:{backgroundImage:'url("'.concat(e.thumbnail_url,'")')}},e.user===i?r.a.createElement("div",null,r.a.createElement(T.a,{color:"danger",size:"sm",onClick:function(){return le(e._id)}},"Delete")):""),r.a.createElement("strong",null,e.title),r.a.createElement("span",null,"Event Date: ",Y()(e.date).format("l")),r.a.createElement("span",null,"Event Price: ",parseFloat(e.price).toFixed(2)),r.a.createElement("span",null,"Event Description: ",e.description),r.a.createElement(T.a,{color:"primary",onClick:function(){return se(e)}},"Registration Request"))}))),g?r.a.createElement(D.a,{className:"event-validation",color:"danger"}," ",_," "):"",y?r.a.createElement(D.a,{className:"event-validation",color:"success"}," ",_):"")}var K=a(146),H=a.n(K),V=a(294),X=a(295);a(264);function $(e){var t=e.history,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],s=c[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),m=i[0],p=i[1],d=Object(n.useState)(""),f=Object(o.a)(d,2),v=f[0],E=f[1],b=Object(n.useState)(null),g=Object(o.a)(b,2),h=g[0],j=g[1],y=Object(n.useState)("Sport"),w=Object(o.a)(y,2),k=w[0],R=w[1],L=Object(n.useState)(""),P=Object(o.a)(L,2),A=P[0],q=P[1],Y=Object(n.useState)(!1),z=Object(o.a)(Y,2),F=z[0],G=z[1],J=Object(n.useState)(!1),B=Object(o.a)(J,2),K=B[0],$=B[1],Q=Object(n.useState)(!1),Z=Object(o.a)(Q,2),ee=Z[0],te=Z[1],ae=localStorage.getItem("user");Object(n.useEffect)((function(){ae||t.push("/login")}),[]);var ne=Object(n.useMemo)((function(){return h?URL.createObjectURL(h):null}),[h]),re=function(){var e=Object(x.a)(S.a.mark((function e(a){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),(n=new FormData).append("thumbnail",h),n.append("sport",k),n.append("title",l),n.append("price",v),n.append("description",m),n.append("date",A),e.prev=8,""===l||""===m||""===v||"Sport"===k||""===A||null===h){e.next=16;break}return e.next=12,N.post("/event",n,{headers:{user:ae}});case 12:$(!0),setTimeout((function(){$(!1),t.push("/")}),2e3),e.next=18;break;case 16:G(!0),setTimeout((function(){G(!1)}),2e3);case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(8),Promise.reject(e.t0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[8,20]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(e){return R(e)};return r.a.createElement(O.a,null,r.a.createElement("h2",null,"Create your Event"),r.a.createElement(C.a,{onSubmit:re},r.a.createElement("div",{className:"input-group"},r.a.createElement(_.a,null,r.a.createElement(V.a,null,"Upload Image: "),r.a.createElement(V.a,{id:"thumbnail",style:{backgroundImage:"url(".concat(ne,")")},className:h?"has-thumbnail":""},r.a.createElement(I.a,{type:"file",onChange:function(e){return j(e.target.files[0])}}),r.a.createElement("img",{src:H.a,style:{maxWidth:"50px"},alt:"upload icon image"}))),r.a.createElement(_.a,null,r.a.createElement(V.a,null,"Title: "),r.a.createElement(I.a,{id:"title",type:"text",value:l,placeholder:"Event Title",onChange:function(e){return s(e.target.value)}})),r.a.createElement(_.a,null,r.a.createElement(V.a,null,"Event description: "),r.a.createElement(I.a,{id:"description",type:"text",value:m,placeholder:"Event Description",onChange:function(e){return p(e.target.value)}})),r.a.createElement(_.a,null,r.a.createElement(V.a,null,"Event price: "),r.a.createElement(I.a,{id:"price",type:"text",value:v,placeholder:"Event Price \xa30.00",onChange:function(e){return E(e.target.value)}})),r.a.createElement(_.a,null,r.a.createElement(V.a,null,"Event date: "),r.a.createElement(I.a,{id:"date",type:"date",value:A,onChange:function(e){return q(e.target.value)}})),r.a.createElement(_.a,null,r.a.createElement(X.a,{isOpen:ee,toggle:function(){return te(!ee)}},r.a.createElement(T.a,{id:"caret",value:k,disabled:!0},k),r.a.createElement(M.a,{caret:!0}),r.a.createElement(U.a,null,r.a.createElement(W.a,{onClick:function(){return ce("running")}},"running"),r.a.createElement(W.a,{onClick:function(){return ce("cycling")}},"cycling"),r.a.createElement(W.a,{onClick:function(){return ce("swimming")}},"swimming"))))),r.a.createElement(_.a,null,r.a.createElement(T.a,{className:"submit-btn"},"Submit")),r.a.createElement(_.a,null,r.a.createElement(T.a,{className:"secondary-btn",onClick:function(){return t.push("/")}},"Cancel"))),F?r.a.createElement(D.a,{className:"event-validation",color:"danger"}," ","Missing required information"):"",K?r.a.createElement(D.a,{className:"event-validation",color:"success"}," ","The event was created successfully!"):"")}var Q=a(296),Z=a(297),ee=a(298),te=a(299),ae=a(300),ne=function(e){var t=Object(n.useContext)(R),a=t.isLoggedIn,c=t.setIsloggedIn,l=Object(n.useState)(!0),s=Object(o.a)(l,2),i=s[0],m=s[1];return a?r.a.createElement("div",null,r.a.createElement(Q.a,{color:"faded",light:!0},r.a.createElement(Z.a,{onClick:function(){return m(!i)}}),r.a.createElement(u.b,{to:"/login",onClick:function(){localStorage.removeItem("user"),localStorage.removeItem("user_id"),c(!1)}},"Logout"),r.a.createElement(ee.a,{isOpen:!i,navbar:!0},r.a.createElement(te.a,{navbar:!0},r.a.createElement(ae.a,null,r.a.createElement(u.b,{to:"/events"},"Events"))," ",r.a.createElement(ae.a,null,r.a.createElement(u.b,{to:"/dashboard"},"Dashboard"))," ",r.a.createElement(ae.a,null,r.a.createElement(u.b,{to:"/myregisterations"},"My Registerations"))," ")," ")," ")," "):""};a(265);function re(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=localStorage.getItem("user");Object(n.useEffect)((function(){s()}),[]);var s=function(){var e=Object(x.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.get("/registration",{headers:{user:l}});case 3:t=e.sent,console.log(t.data),c(t.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(e){return!0===e?"Approved":"Rejected"},i=function(){var e=Object(x.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/registration/".concat(t,"/approvals"),{},{headers:{user:l}});case 3:s(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(x.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/registration/".concat(t,"/rejections"),{},{headers:{user:l}});case 3:s(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("ul",{className:"events"},a.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("div",null,r.a.createElement("strong",null,e.eventTitle)),r.a.createElement("div",{className:"events-details"},r.a.createElement("span",null,"Event Date: ",Y()(e.eventDate).format("l")),r.a.createElement("span",null,"Event Price: \xa3",parseFloat(e.eventPrice).toFixed(2)),r.a.createElement("span",null,"User Email: ",e.userEmail),r.a.createElement("span",null,"Status:",r.a.createElement("span",{className:void 0!==e.approved?u(e.approved):"Pending"},void 0!==e.approved?u(e.approved):"Pending"))),r.a.createElement(z.a,null,r.a.createElement(T.a,{disabled:!0===e.approved||!1===e.approved,color:"secondary",onClick:function(){return i(e._id)}},"Accept"),r.a.createElement(T.a,{disabled:!0===e.approved||!1===e.approved,color:"danger",onClick:function(){return m(e._id)}},"Reject")))})))}function ce(){return r.a.createElement(u.a,null,r.a.createElement(ne,null),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/login",exact:!0,component:P})," ",r.a.createElement(y.a,{path:"/myregisterations",exact:!0,component:re}),r.a.createElement(y.a,{path:"/register",exact:!0,component:A})," ",r.a.createElement(y.a,{path:"/events",component:$})," ",r.a.createElement(y.a,{path:"/",component:B})," ")," ")}var le=function(){return r.a.createElement(L,null,r.a.createElement(O.a,null,r.a.createElement("h1",null,"Sport's App"),r.a.createElement("div",{className:"content"},r.a.createElement(ce,null))))};a(266);l.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){}},[[154,1,2]]]);
//# sourceMappingURL=main.94b01806.chunk.js.map