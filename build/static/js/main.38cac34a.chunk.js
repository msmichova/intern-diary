(this["webpackJsonpintern-diary"]=this["webpackJsonpintern-diary"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(50),i=n.n(a),c=n(55),o=(n(131),n(97)),s=n(98),l=n(109),j=n(108),d=n(58),b=n(46),u=(n(132),n(95)),h=n(156),O=n(99),x=n(42),p=(n(80),n(60)),m=(n(155),n(154),n(134),n(59));x.a.initializeApp({apiKey:"AIzaSyBofzgGY8U6Htz2Nn5VpoASsmBp3st6bKg",authDomain:"intern-diary.firebaseapp.com",projectId:"intern-diary",storageBucket:"intern-diary.appspot.com",messagingSenderId:"524723505945",appId:"1:524723505945:web:173dd0877a43cc9bfb9388",measurementId:"G-VGTPRL3Y91"});var g,v=x.a.auth(),f=x.a.firestore(),y=(x.a.analytics(),n(82)),w=n(85),P=n(86),k=n(96),S=n(87),I=n(165),C=n(88),T=n(89),F=n(90),D=n(91),A=n(92),E=n(93),W=n(162),U=n(6),G=p.a.img(g||(g=Object(d.a)(["\n  border-radius: 50%;\n"]))),N=function(e){var t=e.user;return Object(U.jsx)(y.a,{render:function(e){var n=e.isSideNavExpanded,r=e.onClickSideNavExpand;return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(w.a,{"aria-label":"Carbon Tutorial",children:[Object(U.jsx)(P.a,{}),Object(U.jsx)(k.a,{"aria-label":"Open menu",onClick:r,isActive:n}),Object(U.jsx)(S.a,{element:c.b,to:"/",prefix:"Intern Diary"}),Object(U.jsx)(I.a,{"aria-label":"Carbon Tutorial"}),Object(U.jsx)(C.a,{"aria-label":"Side navigation",expanded:n,isPersistent:!1,children:Object(U.jsx)(T.a,{children:Object(U.jsxs)(F.a,{children:[Object(U.jsx)(D.a,{href:"/entries",children:"Entries"}),Object(U.jsx)(D.a,{href:"/questions",children:"Submit a New Report"})]})})}),Object(U.jsx)(A.a,{children:t&&Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(E.a,{"aria-label":"User Avatar",children:t.photoURL?Object(U.jsx)(G,{src:t.photoURL,width:"20",alt:"user"}):Object(U.jsx)(W.a,{})})})})]})})}})},q=function(){var e=v.currentUser;return console.log(e),Object(U.jsx)(U.Fragment,{children:e?Object(U.jsxs)("h1",{children:["Welcome to Intern Diary, ",e.displayName,"!"]}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("h1",{children:"Welcome to Intern Diary!"})," ",Object(U.jsx)("p",{children:"Please log in for better experience."})]})})},B=n(49),L=n(53),R=n(164),z=n(69),H=n(71),J=n(72),K=n(73),M=n(70),V=n(45);var Y=function(){var e=v.currentUser,t=null!=(null===e||void 0===e?void 0:e.email)?e.email:"",n="msmichova1@gmail.com",r=t===n?Object(m.a)(f.collection("entries"),{idField:"id"}):Object(m.a)(f.collection("entries").where("userEmail","==",t),{idField:"id"}),a=Object(L.a)(r,1)[0];return console.log(a),Object(U.jsxs)("div",{children:[t===n?Object(U.jsx)("h1",{children:"All Students' Diary Entries"}):Object(U.jsx)("h1",{children:"My Diary Entries"}),Object(U.jsx)("br",{}),!e&&Object(U.jsx)("p",{children:"Please log in to view diary entries"}),Object(U.jsx)("br",{}),e&&a&&Object(U.jsx)(R.a,{rows:a,headers:[{key:"answer1",header:"What did you work on today?"},{key:"answer2",header:"What are you planning to do tomorrow?"},{key:"answer3",header:"Have you had any issues?"}],children:function(e){var t=e.rows,n=e.headers,r=e.getTableProps,a=e.getHeaderProps,i=e.getRowProps;return Object(U.jsxs)(z.a,Object(B.a)(Object(B.a)({},r()),{},{children:[Object(U.jsx)(H.a,{children:Object(U.jsx)(J.a,{children:n.map((function(e){return Object(U.jsx)(K.a,Object(B.a)(Object(B.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(U.jsx)(M.a,{children:t.map((function(e){return Object(U.jsx)(J.a,Object(B.a)(Object(B.a)({},i({row:e})),{},{children:e.cells.map((function(e){return Object(U.jsx)(V.a,{children:e.value},e.id)}))}))}))})]}))}})]})},Q=n(163),X=n(166);var Z,$=function(){var e=v.currentUser,t=null!=(null===e||void 0===e?void 0:e.email)?e.email:"",n=Object(r.useState)(""),a=Object(L.a)(n,2),i=a[0],c=a[1],o=Object(r.useState)(""),s=Object(L.a)(o,2),l=s[0],j=s[1],d=Object(r.useState)(""),b=Object(L.a)(d,2),u=b[0],O=b[1];return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("h1",{children:"Submit a New Diary Entry"}),Object(U.jsx)("br",{}),e?Object(U.jsxs)(Q.a,{onSubmit:function(e){e.preventDefault(),f.collection("entries").add({answer1:i,answer2:l,answer3:u,userEmail:t}).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)})),c(""),j(""),O("")},children:[Object(U.jsx)(X.a,{labelText:"What did you work on today?",placeholder:"I worked on...",value:i,onChange:function(e){return c(e.target.value)},invalidText:"Please answer this question."}),Object(U.jsx)("br",{}),Object(U.jsx)(X.a,{labelText:"What are you planning to do tomorrow?",placeholder:"I will...",value:l,onChange:function(e){return j(e.target.value)},invalidText:"Please answer this question."}),Object(U.jsx)("br",{}),Object(U.jsx)(X.a,{labelText:"Have you had any issues?",placeholder:"I came across a...",value:u,onChange:function(e){return O(e.target.value)},invalidText:"Please answer this question."}),Object(U.jsx)("br",{}),Object(U.jsx)(h.a,{type:"submit",children:"Submit"})]}):"Please log in to submit a report."]})},_=p.a.footer(Z||(Z=Object(d.a)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n"]))),ee=v,te={googleProvider:new x.a.auth.GoogleAuthProvider,microsoftProvider:new x.a.auth.OAuthProvider("microsoft.com")},ne=function(){ee.signInWithPopup(te.microsoftProvider).then((function(e){var t=e.credential;t.accessToken,t.idToken})).catch((function(e){}))},re=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.signOut,r=e.signInWithGoogle;e.signInWithPopup;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(N,{user:t}),Object(U.jsx)(u.a,{children:Object(U.jsxs)(b.c,{children:[Object(U.jsx)(b.a,{exact:!0,path:"/",component:q}),Object(U.jsx)(b.a,{path:"/questions",component:$}),Object(U.jsx)(b.a,{path:"/entries",component:Y})]})}),Object(U.jsx)(_,{children:t?Object(U.jsx)(h.a,{type:"button",onClick:n,children:"Sign out"}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(h.a,{type:"button",onClick:r,children:"Sign in with Google"}),Object(U.jsx)(h.a,{type:"button",kind:"tertiary",onClick:ne,children:"Sign in with Microsoft"})]})})]})}}]),n}(r.Component),ae=Object(O.a)({providers:te,firebaseAppAuth:ee})(re),ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,167)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};i.a.render(Object(U.jsx)(c.a,{children:Object(U.jsx)(ae,{})}),document.getElementById("root")),ie()}},[[153,1,2]]]);
//# sourceMappingURL=main.38cac34a.chunk.js.map