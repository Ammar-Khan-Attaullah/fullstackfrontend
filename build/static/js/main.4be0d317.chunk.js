(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),o=a.n(r),l=(a(78),a(41),a(79),a(128)),i=(a(120),a(38)),s=a.n(i);a(53),a(80),a(81);var m=a(29);a(86),a(54);a(87),a(43),a(90);var u=a(55),d=a(56),p=a(67),E=a(66);n.Component;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(46),a(23),Object(n.createContext)(),a(92);var v=a(57).initializeApp({apiKey:"AIzaSyDJM01JK-G5VmNq__WKym51LCgfYD20v_A",authDomain:"twitter-clone-one-one.firebaseapp.com",databaseURL:"https://twitter-clone-one-one.firebaseio.com",projectId:"twitter-clone-one-one",storageBucket:"twitter-clone-one-one.appspot.com",messagingSenderId:"63948883961",appId:"1:63948883961:web:e23a54ffd76bf9bde31f28",measurementId:"G-EHRW56LMXG"}).firestore(),f=a(121);a(103);var _=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(m.a)(o,2),s=i[0],u=i[1];return c.a.createElement("div",{className:"tweetBox"},c.a.createElement("form",null,c.a.createElement("div",{className:"tweetBox__input"},c.a.createElement(l.a,{src:"https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c0.33.200.200a/p200x200/51099653_766820610355014_8315780769297465344_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=c1qBHkwAgVsAX8KynKU&_nc_ht=scontent-bom1-1.xx&oh=340b05bea693dd1671296e0c2d004bb3&oe=5F84CA62"}),c.a.createElement("input",{value:a,onChange:function(e){return r(e.target.value)},placeholder:"What's happening?",type:"text"})),c.a.createElement("input",{placeholder:"Optional: Enter image URL",value:s,onChange:function(e){return u(e.target.value)},type:"text",className:"tweetBox__imageInput"}),c.a.createElement(f.a,{onClick:function(e){e.preventDefault(),v.collection("posts").add({username:"happystark",displayName:"Atharva Deosthale",avatar:"https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c0.33.200.200a/p200x200/51099653_766820610355014_8315780769297465344_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=c1qBHkwAgVsAX8KynKU&_nc_ht=scontent-bom1-1.xx&oh=340b05bea693dd1671296e0c2d004bb3&oe=5F84CA62",verified:!0,text:a,image:s}),r(""),u("")},type:"submit",className:"tweetBox__button"},"Tweet")))},h=a(122),b=a(123),x=a(124),g=a(125),N=a(126);a(104);var w=function(e){var t=e.displayName,a=e.username,n=e.verified,r=e.text,o=e.image,i=e.avatar;return c.a.createElement("div",{className:"post"},c.a.createElement("div",{className:"post__avatar"},c.a.createElement(l.a,{src:i})),c.a.createElement("div",{className:"post__body"},c.a.createElement("div",{className:"post__header"},c.a.createElement("div",{className:"post__headerText"},c.a.createElement("h3",null,t," ",c.a.createElement("span",{className:"post__headerSpecial"},n&&c.a.createElement(h.a,{className:"post__badge"})," @",a))),c.a.createElement("div",{className:"post__headerDescription"},c.a.createElement("p",null,r))),c.a.createElement("img",{src:o,alt:""}),c.a.createElement("div",{className:"post__footer"},c.a.createElement(b.a,{fontSize:"small"}),c.a.createElement(x.a,{fontSize:"small"}),c.a.createElement(g.a,{fontSize:"small"}),c.a.createElement(N.a,{fontSize:"small"}))))};var I=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){v.collection("posts").onSnapshot((function(e){r(e.docs.map((function(e){return e.data()})))}))}),[]),c.a.createElement("div",{className:"feed"},c.a.createElement("div",{className:"feed__header"},c.a.createElement("h2",null,"Home")),c.a.createElement(_,null),a.map((function(e){return c.a.createElement(w,{displayName:e.displayName,username:e.username,verified:e.verified,text:e.text,avatar:e.avatar,image:e.image})})))};a(105),a(106);var y=function(e){var t=e.text,a=e.Icon,n=e.active;return c.a.createElement("div",{className:"sidebarOption  ".concat(n&&"sidebarOption--active")},c.a.createElement(a,null),c.a.createElement("h2",null,t))},S=a(58),j=a.n(S),k=a(59),O=a.n(k),A=a(60),B=a.n(A),C=a(61),D=a.n(C),K=a(62),W=a.n(K),z=a(63),H=a.n(z),L=a(64),T=a.n(L),J=a(65),M=a.n(J);var R=function(){return c.a.createElement("div",{className:"sidebar"},c.a.createElement(j.a,{className:"sidebar__twitterIcon"}),c.a.createElement(y,{Icon:O.a,text:"Home",active:!0}),c.a.createElement(y,{Icon:s.a,text:"Explore"}),c.a.createElement(y,{Icon:B.a,text:"Notifications"}),c.a.createElement(y,{Icon:D.a,text:"Messages"}),c.a.createElement(y,{Icon:W.a,text:"Bookmarks"}),c.a.createElement(y,{Icon:H.a,text:"Lists"}),c.a.createElement(y,{Icon:T.a,text:"Profile"}),c.a.createElement(y,{Icon:M.a,text:"More"}),c.a.createElement(f.a,{variant:"outlined",className:"sidebar__tweet",fullWidth:!0},"Tweet"))},U=a(127),q=a(40);a(107);var G=function(){return c.a.createElement("div",{className:"widgets"},c.a.createElement("div",{className:"widgets__input"},c.a.createElement(U.a,{className:"widgets__searchIcon"}),c.a.createElement("input",{placeholder:"Search Twitter",type:"text"})),c.a.createElement("div",{className:"widgets__widgetContainer"},c.a.createElement("h2",null,"What's happening"),c.a.createElement(q.c,{tweetId:"1307046632517664771"}),c.a.createElement(q.b,{sourceType:"profile",screenName:"atharvabrand",options:{height:400}}),c.a.createElement(q.a,{url:"https://atharvadeosthale.com",options:{text:"React Developer"}})))};var V=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(R,null),c.a.createElement(I,null),c.a.createElement(G,null))};o.a.render(c.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,a){},73:function(e,t,a){e.exports=a(108)},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},86:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.4be0d317.chunk.js.map