(this["webpackJsonpcommunity-front"]=this["webpackJsonpcommunity-front"]||[]).push([[0],{71:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(17),s=n.n(r),o=(n(66),n(7)),i=n(86),l=n(94),j=n(85),u=n(60),d=n(92),b=n(59),h=n(84),O="http://localhost:8080",f="refresh_token",x="access_token",m="POST",g=function(){localStorage.removeItem(f),localStorage.removeItem("username"),localStorage.removeItem(x)},p=function(e){var t=e.headers.get(x);null!==t?localStorage.setItem(x,t):g()},y=function(){return{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8",refresh_token:localStorage.getItem(f),access_token:localStorage.getItem(x)}}},v=function(e){return{method:m,headers:{"Content-Type":"application/json; charset=utf-8",refresh_token:localStorage.getItem(f),access_token:localStorage.getItem(x)},body:JSON.stringify(e)}},w=function(e){return("0"+e).slice(-2)};function k(e){var t=new Date(Date.parse(e)),n=Date.now()-t,c="".concat(w(t.getFullYear()),"-").concat(w(t.getMonth()),"-").concat(w(t.getDate())),a="".concat(w(t.getHours()),":").concat(w(t.getMinutes()),":").concat(w(t.getSeconds()));return n<864e5?a:c}var S=n(13),C=n(8),I=n(91),N=n(83),z=n(1),F=function(e){var t=e.show,n=e.move,a=e.close,r=Object(c.useState)({username:"",password:"",passwordCheck:""}),s=Object(o.a)(r,2),i=s[0],l=s[1],j=function(e){l(Object(C.a)(Object(C.a)({},i),{},Object(S.a)({},e.target.name,e.target.value)))};return Object(z.jsxs)(I.a,{size:"md","aria-labelledby":"contained-modal-title-lg",centered:!0,show:t,onHide:a,children:[Object(z.jsx)(I.a.Header,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(z.jsx)(I.a.Title,{style:{background:"#212529",color:"white"},id:"contained-modal-title-vcenter",children:"\ud68c\uc6d0\uac00\uc785"})}),Object(z.jsxs)(I.a.Body,{children:[Object(z.jsxs)(N.a,{size:"lg",children:[Object(z.jsx)(N.a.Text,{id:"inputGroup-sizing-lg",style:{background:"#212529",color:"white"},children:"\uc720 \uc800 \uc544 \uc774 \ub514"}),Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},name:"username",onChange:j,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]}),Object(z.jsx)("hr",{}),Object(z.jsxs)(N.a,{size:"lg",children:[Object(z.jsx)(N.a.Text,{id:"inputGroup-sizing-lg",style:{background:"#212529",color:"white"},children:"\ube44\ubc00\ubc88\ud638\uc785\ub825"}),Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},type:"password",name:"password",onChange:j,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]}),Object(z.jsx)("hr",{}),Object(z.jsxs)(N.a,{size:"lg",children:[Object(z.jsx)(N.a.Text,{id:"inputGroup-sizing-lg",style:{background:"#212529",color:"white"},children:"\ube44\ubc00\ubc88\ud638\ud655\uc778"}),Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},type:"password",name:"passwordCheck",onChange:j,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]})]}),Object(z.jsxs)(I.a.Footer,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(z.jsx)(h.a,{size:"lg",variant:"outline-light",type:"submit",onClick:function(e){e.preventDefault();fetch("".concat(O+"/join"),v(i)).then((function(e){return e.json()})).then((function(e){200===e?alert("\uc544\uc774\ub514\uac00 \uc774\ubbf8 \uc874\uc7ac\ud569\ub2c8\ub2e4"):201===e&&(alert("\ud68c\uc6d0\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),g(),n())})).catch((function(e){alert("".concat(e,"\uc758\ubb38\uc81c \ub54c\ubb38\uc5d0 ").concat("\ud68c\uc6d0\uac00\uc785","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))},children:"\ud68c\uc6d0\uac00\uc785"}),Object(z.jsx)(h.a,{size:"lg",variant:"outline-light",onClick:n,children:"\uc774\uc804"})]})]})},T=function(e){var t=e.show,n=e.move,a=e.close,r=Object(c.useContext)(te),s=Object(c.useState)({username:"",password:""}),i=Object(o.a)(s,2),l=i[0],j=i[1],u=function(e){j(Object(C.a)(Object(C.a)({},l),{},Object(S.a)({},e.target.name,e.target.value)))};return Object(z.jsxs)(I.a,{size:"md","aria-labelledby":"contained-modal-title-lg",centered:!0,show:t,onHide:a,children:[Object(z.jsx)(I.a.Header,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(z.jsx)(I.a.Title,{style:{background:"#212529",color:"white"},id:"contained-modal-title-vcenter",children:"\ub85c\uadf8\uc778"})}),Object(z.jsxs)(I.a.Body,{children:[Object(z.jsxs)(N.a,{size:"lg",children:[Object(z.jsx)(N.a.Text,{id:"inputGroup-sizing-lg",style:{background:"#212529",color:"white"},children:"\uc720\uc800\uc544\uc774\ub514"}),Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},name:"username",onChange:u,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]}),Object(z.jsx)("hr",{}),Object(z.jsxs)(N.a,{size:"lg",children:[Object(z.jsx)(N.a.Text,{id:"inputGroup-sizing-lg",style:{background:"#212529",color:"white"},children:"\ube44 \ubc00 \ubc88 \ud638"}),Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},type:"password",name:"password",onChange:u,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]})]}),Object(z.jsxs)(I.a.Footer,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(z.jsx)(h.a,{size:"lg",variant:"outline-light",type:"submit",onClick:function(e){e.preventDefault();fetch("".concat(O+"/login"),v(l)).then((function(e){200===e.status&&(localStorage.setItem(x,e.headers.get(x)),localStorage.setItem(f,e.headers.get(f)),localStorage.setItem("username",l.username),a(),r.setUser({username:localStorage.getItem("username"),active:!0}))})).catch((function(e){alert("".concat(e,"\uc758\ubb38\uc81c \ub54c\ubb38\uc5d0 ").concat("\ub85c\uadf8\uc778","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))},children:"\ub85c\uadf8\uc778"}),Object(z.jsx)(h.a,{size:"lg",variant:"outline-light",onClick:n,children:"\ud68c\uc6d0\uac00\uc785"})]})]})},G=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),i=s[0],O=s[1],f=Object(c.useContext)(te),x=Object(c.useState)(""),m=Object(o.a)(x,2),p=m[0],y=m[1],v=function(){a(!1),O(!1)},w=function(){a(!0),O(!1)};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(l.a,{className:"row justify-content-center",sticky:"top",expand:"lg",bg:"dark",variant:"dark",children:Object(z.jsxs)(j.a,{className:"d-flex-row justify-content-center",children:[Object(z.jsx)(u.a,{className:"d-flex justify-content-center",children:Object(z.jsx)(l.a.Brand,{href:"/",children:"Portfolio"})}),Object(z.jsx)(u.a,{className:"col-6",children:Object(z.jsxs)(d.a,{className:"d-flex",children:[Object(z.jsx)(b.a,{size:"lg",type:"search",name:"keyword",className:"md-6",placeholder:"Search","aria-label":"Search",style:{background:"#212529",color:"white"},onChange:function(e){y("".concat(e.target.value))}}),Object(z.jsx)(h.a,{onClick:function(){f.setKeyword(p)},size:"lg",variant:"outline-secondary",children:"Search"})]})}),Object(z.jsx)(u.a,{className:"d-flex justify-content-center",children:f.user.active?Object(z.jsx)(h.a,{variant:"outline-secondary",onClick:function(){g(),f.setUser({username:null,active:!1})},children:"\ub85c\uadf8\uc544\uc6c3"}):Object(z.jsx)(h.a,{variant:"outline-secondary",onClick:w,children:"\ub85c\uadf8\uc778"})})]})}),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(T,{show:n,move:function(){a(!1),O(!0)},close:v}),Object(z.jsx)(F,{show:i,move:w,close:v})]})]})},D=(n(71),n(21)),B=n(98),H=n(87),_=n(97),U=function(e){var t=e.item;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(_.a,{boarder:"info",bg:"dark",text:"white",style:{position:"center"},className:"text-center",children:[Object(z.jsxs)(_.a.Header,{className:"d-flex justify-content-between",children:[Object(z.jsxs)("strong",{children:["\ucd94\ucc9c\uc218:",t.recommend]}),Object(z.jsxs)("span",{children:[" \uc791\uc815\uc790: ",t.user.username]})]}),Object(z.jsxs)(_.a.Header,{className:"d-flex justify-content-between",children:[Object(z.jsx)("span",{children:t.interest.name}),Object(z.jsxs)("span",{children:["\ub313\uae00\uc218: ",t.replys.length]})]}),Object(z.jsx)("br",{}),Object(z.jsx)(_.a.Title,{children:Object(z.jsx)("h4",{children:t.title})}),Object(z.jsx)(_.a.Body,{children:Object(z.jsxs)(D.Link,{to:"/board/"+t.id,children:[Object(z.jsx)(_.a.Text,{children:t.content}),t.boardFiles.map((function(e){return Object(z.jsx)(_.a.Img,{src:"".concat(O+"/"+e.filePath)},e.id)}))]})}),Object(z.jsxs)(_.a.Footer,{className:"d-flex justify-content-between text-muted",children:[Object(z.jsxs)("span",{children:["\uc870\ud68c\uc218:",t.count]}),Object(z.jsxs)("span",{children:["\uc791\uc131\ub0a0\uc9dc:",k(t.createTime)]})]})]},t.id),Object(z.jsx)("br",{})]})},E="outline-light",R=n(29),L=n(58),P=n(88),K=function(e){var t=e.userInterests,n=e.show,a=e.setShow,r=e.getBoardList,s=Object(c.useContext)(te),l=Object(c.useState)(1),m=Object(o.a)(l,2),g=m[0],y=m[1],v=Object(c.useState)({title:"",content:"",interest:{}}),w=Object(o.a)(v,2),k=w[0],N=w[1],F=Object(c.useState)([{}]),T=Object(o.a)(F,2),G=T[0],D=T[1],B=Object(c.useState)([]),_=Object(o.a)(B,2),U=_[0],K=_[1],A=function(e){N(Object(C.a)(Object(C.a)({},k),{},Object(S.a)({},e.target.name,e.target.value))),console.log(k)},J=function(e){console.log(e),N(Object(C.a)(Object(C.a)({},k),{},{interest:e})),y(e.id)},W=function(){var e=new FormData;U&&Object.values(U).forEach((function(t){e.append("files",t)})),t.map((function(e){g===e.id+""&&N(Object(C.a)(Object(C.a)({},k),{},{interest:e}))})),console.log("\uac8c\uc2dc\ud310:"+k),console.log(k),e.append("board",new Blob([JSON.stringify(k)],{type:"application/json"})),fetch("".concat(O+"/api/board/write"),{method:"POST",headers:{refresh_token:localStorage.getItem(f),access_token:localStorage.getItem(x)},body:e}).then((function(e){403===e.status&&(s.setUser({username:localStorage.getItem("username"),active:null!==localStorage.getItem("username")}),alert("\ub2e4\uc2dc \ub85c\uadf8\uc778\ud558\uc5ec \uc8fc\uc138\uc694")),p(e),D([]),K([]),r(),a(!1)})).catch((function(e){alert("".concat(e,"\uc758\ubb38\uc81c \ub54c\ubb38\uc5d0 ").concat("\uae00\uc4f0\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))};return Object(z.jsxs)(I.a,{size:"lg",onHide:function(){return a(!1)},show:n,style:{max_width:'"max-width": "1000px"'},backdrop:"static",keyboard:!1,centered:!0,children:[Object(z.jsx)(I.a.Header,{className:"justify-content-between",closeButton:!0,children:Object(z.jsxs)("h5",{children:["\uae00\uc4f4\uc774 : ",s.user.username]})}),Object(z.jsx)(i.a,{children:Object(z.jsx)(i.a,{children:Object(z.jsx)(H.a,{className:"mb-2",children:Object(z.jsx)(i.a,{children:t.map((function(e){return g===e.id?Object(z.jsx)(h.a,{variant:"secondary",id:e.id,value:e.id,type:"radio",name:"interest",active:!0,onClick:function(){return J(e)},children:e.name},e.id):Object(z.jsx)(h.a,{variant:"outline-secondary",id:e.id,value:e,onClick:function(){return J(e)},type:"radio",name:"interest",children:e.name},e.id)}))})})})}),Object(z.jsx)(I.a.Body,{children:Object(z.jsxs)(d.a,{children:[Object(z.jsxs)(d.a.Group,{controlId:"formBasic",className:"mb-3",children:["\uc81c\ubaa9",Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},name:"title",onChange:A,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]}),Object(z.jsxs)(d.a.Group,{controlId:"formTextArea",className:"mb-3",children:["\ub0b4\uc6a9",Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},name:"content",onChange:A,as:"textarea","aria-label":"With textarea",rows:15})]}),"\ud30c\uc77c\ucca8\ubd80",Object(z.jsx)(d.a.Group,{controlId:"formFile",className:"mb-3",children:Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},name:"files",onChange:function(e){for(var t=function(t){if(e.target.files[t]){console.log(e.target.files[t]),K([].concat(Object(R.a)(U),[e.target.files[t]]));var n=new FileReader;n.readAsDataURL(e.target.files[t]),n.onloadend=function(){var c=n.result;if(c){var a=e.target.files[t].name,r=c.toString();D((function(e){return[].concat(Object(R.a)(e),[{id:t,name:a,img:r}])}))}}}},n=0;n<e.target.files.length;n++)t(n)},type:"file",size:"lg"})}),Object(z.jsx)(j.a,{children:G.map((function(e){return Object(z.jsxs)(u.a,{xs:6,md:4,children:[Object(z.jsx)(L.a,{"aria-label":"Hide",onClick:function(){return function(e){var t=[];G.map((function(n){n.name===e||t.push(n)})),D(t);var n=[];U.map((function(t){t.name===e||n.push(t)})),K(n)}(e.name)}}),Object(z.jsx)(P.a,{className:"d-block w-100",src:e.img,rounded:!0},e.id)]})}))})]})}),Object(z.jsx)(I.a.Footer,{children:Object(z.jsx)(h.a,{variant:E,onClick:function(e){e.preventDefault(),""===k.title||""===k.content?alert("\uc81c\ubaa9\uacfc \uae00\uc744 \uc785\ub825\ud558\uc5ec\uc8fc\uc138\uc694"):W()},children:"\uae00\uc4f0\uae30"})})]})},A=n(95),J=n(93),W=function(e){var t=e.show,n=e.setShow,a=e.userInterests,r=e.setUserInterests,s=Object(c.useContext)(te),l=Object(c.useState)({password:"",passwordCheck:""}),j=Object(o.a)(l,2),u=j[0],g=j[1],w=Object(c.useState)(""),k=Object(o.a)(w,2),F=k[0],T=k[1],G=Object(c.useState)([]),D=Object(o.a)(G,2),B=D[0],_=D[1],U=function(e){g(Object(C.a)(Object(C.a)({},u),{},Object(S.a)({},e.target.name,e.target.value)))},L=function(e){var t,n="".concat(O,"/api/user/interest/delete");fetch(n,(t=e,{method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8",refresh_token:localStorage.getItem(f),access_token:localStorage.getItem(x)},body:JSON.stringify(t)})).then((function(t){if(p(t),console.log(t.status),200===t.status){var n=[];a.map((function(t){e.id===t.id||n.push(t)})),r(n)}})).catch((function(e){alert("".concat(e,"\ub54c\ubb38\uc5d0 ").concat("\uc720\uc800\uad00\uc2ec\uc0ac \uc0ad\uc81c\ud558\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))},P=function(e){var t="".concat(O,"/interest/list");fetch(t,y()).then((function(e){return p(e),e.json()})).then((function(e){e&&_(e)})).catch((function(e){alert("".concat(e,"\ub54c\ubb38\uc5d0 ").concat("\uad00\uc2ec\uc0ac \uac00\uc838\uc624\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))};return Object(c.useEffect)((function(){P(),function(e){var t="".concat(O,"/api/user/interest/list");fetch(t,y()).then((function(e){return p(e),e.json()})).then((function(e){e&&(e.status||r(e))})).catch((function(e){alert("".concat(e,"\ub54c\ubb38\uc5d0 ").concat("\uc720\uc800\uad00\uc2ec\uc0ac \uac00\uc838\uc624\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))}()}),[]),Object(z.jsx)(I.a,{onHide:function(){return n(!1)},show:t,backdrop:"static",keyboard:!1,size:"md","aria-labelledby":"contained-modal-title-lg",centered:!0,children:Object(z.jsxs)(A.a.Container,{id:"left-tabs-example",defaultActiveKey:"mypage",children:[Object(z.jsxs)(I.a.Header,{style:{display:"flex",justifyContent:"center",alignItems:"center"},className:"justify-content-between",closeButton:!0,children:[Object(z.jsx)(J.a.Item,{children:Object(z.jsx)(J.a.Link,{eventKey:"mypage",children:Object(z.jsx)(I.a.Title,{style:{background:"#212529",color:"white"},id:"contained-modal-title-vcenter",children:"\ud68c\uc6d0\uc815\ubcf4"})})}),Object(z.jsx)(J.a.Item,{children:Object(z.jsx)(J.a.Link,{eventKey:"interest",children:Object(z.jsx)(I.a.Title,{style:{background:"#212529",color:"white"},id:"contained-modal-title-vcenter",children:"\uad00\uc2ec\uc0ac"})})})]}),Object(z.jsxs)(A.a.Content,{children:[Object(z.jsxs)(A.a.Pane,{eventKey:"mypage",children:[Object(z.jsxs)(I.a.Body,{children:[Object(z.jsxs)(N.a,{size:"lg",children:[Object(z.jsx)(N.a.Text,{id:"inputGroup-sizing-lg",style:{background:"#212529",color:"white"},children:"\uc720 \uc800 \uc544 \uc774 \ub514"}),Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},name:"username",onChange:U,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",disabled:!0,value:s.user.username})]}),Object(z.jsx)("hr",{}),Object(z.jsxs)(N.a,{size:"lg",children:[Object(z.jsx)(N.a.Text,{id:"inputGroup-sizing-lg",style:{background:"#212529",color:"white"},children:"\ube44\ubc00\ubc88\ud638\uc218\uc815"}),Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},type:"password",name:"passwordCheck",onChange:U,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]}),Object(z.jsx)("hr",{}),Object(z.jsxs)(N.a,{size:"lg",children:[Object(z.jsx)(N.a.Text,{id:"inputGroup-sizing-lg",style:{background:"#212529",color:"white"},children:"\ube44\ubc00\ubc88\ud638\ud655\uc778"}),Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},type:"password",name:"password",onChange:U,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]})]}),Object(z.jsx)(I.a.Footer,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(z.jsx)(h.a,{size:"lg",variant:"outline-light",type:"submit",onClick:function(){},children:"\ud68c\uc6d0\uc815\ubcf4\uc218\uc815"})})]}),Object(z.jsxs)(A.a.Pane,{eventKey:"interest",children:[Object(z.jsxs)(I.a.Body,{children:[Object(z.jsx)(H.a,{siza:"lg",children:Object(z.jsx)(i.a,{style:{"overflow-y":"auto","max-height":"200px"},children:a.map((function(e){return Object(z.jsx)(h.a,{onClick:function(){return L(e)},variant:E,children:Object(z.jsx)("h5",{children:e.name})})}))})}),Object(z.jsx)("hr",{}),Object(z.jsxs)(i.a,{children:[Object(z.jsxs)(d.a,{className:"d-flex",children:[Object(z.jsx)(b.a,{size:"lg",type:"search",name:"keyword",className:"md-6",placeholder:"Search","aria-label":"Search",style:{background:"#212529",color:"white"},onChange:U}),Object(z.jsx)(h.a,{size:"lg",variant:"outline-secondary",children:"Search"})]}),Object(z.jsx)(i.a,{className:"d-grid gap-0",style:{"overflow-y":"auto","max-height":"200px"},children:B.map((function(e){return Object(z.jsx)(h.a,{onClick:function(){return function(e){var t="".concat(O,"/api/user/interest/write");e&&fetch(t,v(e)).then((function(e){return p(e),e.json()})).then((function(e){e&&(e.status?alert("\uc774\ubbf8 \ub4f1\ub85d\ud558\uc168\uc2b5\ub2c8\ub2e4."):r([].concat(Object(R.a)(a),[e])))})).catch((function(e){alert("".concat(e,"\ub54c\ubb38\uc5d0 ").concat("\uc720\uc800\uad00\uc2ec\uc0ac \ub4f1\ub85d\ud558\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))}(e)},variant:E,children:Object(z.jsx)("h5",{children:e.name})})}))})]})]}),Object(z.jsx)(I.a.Footer,{children:Object(z.jsxs)(i.a,{children:[Object(z.jsx)("h5",{children:"\uad00\uc2ec\uc0ac \ub4f1\ub85d"}),Object(z.jsxs)(d.a,{className:"d-flex",children:[Object(z.jsx)(b.a,{size:"lg",type:"search",name:"keyword",className:"md-6",placeholder:"Search","aria-label":"Search",style:{background:"#212529",color:"white"},onChange:function(e){T(e.target.value),console.log(F)}}),Object(z.jsx)(h.a,{onClick:function(e){e.preventDefault();var t="".concat(O,"/api/interest/wirte");F&&fetch(t,{method:m,headers:{"Content-Type":"application/json; charset=utf-8",refresh_token:localStorage.getItem(f),access_token:localStorage.getItem(x)},body:F}).then((function(e){switch(p(e),e.status){case 500:alert("".concat(F,"\uac00 \uc774\ubbf8 \uc874\uc7ac\ud569\ub2c8\ub2e4."));break;default:alert("".concat(F,"\ub4f1\ub85d\uc5d0 \uc131\uacf5\ud558\uc600\uc2b5\ub2c8\ub2e4.")),P()}})).catch((function(e){alert("".concat(e,"\ub54c\ubb38\uc5d0 ").concat("\uad00\uc2ec\uc0ac \ub4f1\ub85d\ud558\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))},size:"lg",variant:"outline-secondary",children:"Enroll"})]})]})})]})]})]})})},M=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),l=Object(o.a)(s,2),j=l[0],u=l[1],d=Object(c.useState)({page:0,total:0,pages:[],boards:[]}),b=Object(o.a)(d,2),m=b[0],g=b[1],w=Object(c.useState)([]),k=Object(o.a)(w,2),S=k[0],C=k[1],I=Object(c.useContext)(te),N=e.location.search.slice(1),F=function(e){var t="/board/list?page=".concat(e,"&").concat(N);fetch("".concat(O+t),{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8",refresh_token:localStorage.getItem(f),access_token:localStorage.getItem(x)}}).then((function(e){return p(e),e.json()})).then((function(e){console.log(e),g(e)})).catch((function(e){alert("".concat(e,"\uc758\ubb38\uc81c \ub54c\ubb38\uc5d0 ").concat("\uae00\ubaa9\ub85d\uac00\uc838\uc624\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))};return Object(c.useEffect)((function(){!0===I.user.active?function(e){var t="".concat(O,"/api/user/interest/list");fetch(t,y()).then((function(e){return p(e),e.json()})).then((function(e){console.log(e),e&&(e.status||C(e))})).catch((function(e){alert("".concat(e,"\ub54c\ubb38\uc5d0 ").concat("\uc720\uc800\uad00\uc2ec\uc0ac \uac00\uc838\uc624\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))}():function(e){var t="".concat(O,"/interest/list");fetch(t,y()).then((function(e){return p(e),e.json()})).then((function(e){e&&C(e)})).catch((function(e){alert("".concat(e,"\ub54c\ubb38\uc5d0 ").concat("\uad00\uc2ec\uc0ac \uac00\uc838\uc624\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))}(),F(0)}),[N]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(K,{show:a,setShow:r,getBoardList:F,userInterests:S}),Object(z.jsx)(W,{show:j,setShow:u,userInterests:S,setUserInterests:C}),Object(z.jsxs)(i.a,{style:{marginLeft:0},className:"col-10",children:[m.boards.map((function(e){return Object(z.jsx)(U,{item:e},e.id)})),Object(z.jsx)(i.a,{className:"d-flex justify-content-center",children:Object(z.jsxs)(B.a,{children:[Object(z.jsx)(B.a.First,{onClick:function(){return F(0)}}),m.pages.map((function(e){return e===m.page?Object(z.jsx)(B.a.Item,{active:!0,onClick:function(){return F(e)},children:e+1},e):Object(z.jsx)(B.a.Item,{onClick:function(){return F(e)},children:e+1},e)})),Object(z.jsx)(B.a.Last,{onClick:function(){return F(m.total-1)}})]})})]}),Object(z.jsxs)(i.a,{className:"col-3 d-flex fixed-top flex-column align-items-start bd-highlight",style:{marginLeft:"78%",marginTop:"3%"},children:[Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),!0===I.user.active?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(h.a,{onClick:function(){return u(!0)},username:I.user.username,variant:E,children:Object(z.jsx)("h5",{children:"\ub9c8\uc774\ud398\uc774\uc9c0"})}),Object(z.jsx)("br",{}),Object(z.jsx)(h.a,{onClick:function(){return r(!0)},variant:E,children:Object(z.jsx)("h5",{children:"\uae00\uc4f0\uae30"})})]}):Object(z.jsx)(z.Fragment,{}),Object(z.jsx)("br",{}),Object(z.jsxs)(H.a,{siza:"lg",vertical:!0,children:[Object(z.jsx)(h.a,{onClick:function(){return F(0)},variant:E,children:Object(z.jsx)("h5",{children:"\ucd5c\uc2e0"})}),Object(z.jsx)(h.a,{onClick:function(){return function(e){var t="/board/list/recommend?page".concat(e);fetch("".concat(O+t),y()).then((function(e){return p(e),e.json()})).then((function(e){g(e)})).catch((function(e){alert("".concat(e,"\uc758\ubb38\uc81c \ub54c\ubb38\uc5d0 ").concat("\ucd94\ucc9c\uc21c\uae00\ubaa9\ub85d\uac00\uc838\uc624\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))}(0)},variant:E,children:Object(z.jsx)("h5",{children:"\ud654\uc81c"})}),S.map((function(e){return Object(z.jsx)(h.a,{onClick:function(){return function(e,t){var n="/board/list/interest?page".concat(e);fetch("".concat(O+n),v(t)).then((function(e){return p(e),e.json()})).then((function(e){g(e)})).catch((function(e){alert("".concat(e,"\uc758\ubb38\uc81c \ub54c\ubb38\uc5d0 ").concat("\uad00\uc2ec\uc0ac\uae00\ubaa9\ub85d\uac00\uc838\uc624\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))}(0,e)},variant:E,children:Object(z.jsx)("h5",{children:e.name})},e.id)}))]}),Object(z.jsx)("br",{}),Object(z.jsx)("br",{})]})]})},Y=n(89),q=function(e){var t=e.boardId,n=e.getReply,a=e.page,r=(e.history,Object(c.useContext)(te)),s=Object(c.useState)({boardId:t,content:""}),i=Object(o.a)(s,2),l=i[0],j=i[1],u=function(){fetch("".concat(O+"/api/board/reply/write"),v(l)).then((function(e){return 403===e.status?(r.setUser({username:localStorage.getItem("username"),active:null!==localStorage.getItem("username")}),alert("\ub2e4\uc2dc \ub85c\uadf8\uc778\ud558\uc5ec \uc8fc\uc138\uc694")):p(e),e.json()})).then((function(e){e&&(j({boardId:t,content:""}),n(a))})).catch((function(e){alert("".concat(e,"\uc758\ubb38\uc81c \ub54c\ubb38\uc5d0 ").concat("\ub313\uae00\uc4f0\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},name:"content",onChange:function(e){j(Object(C.a)(Object(C.a)({},l),{},Object(S.a)({},e.target.name,e.target.value)))},as:"textarea","aria-label":"With textarea",rows:3,value:l.content}),Object(z.jsx)(h.a,{className:"d-flex-rows",onClick:function(e){e.preventDefault(),""===l.content?alert("\ub313\uae00\uc744 \uc785\ub825\ud558\uc5ec\uc8fc\uc138\uc694"):u()},variant:E,children:Object(z.jsx)("span",{children:"\ub4f1 \ub85d"})})]})},Q=n(90),V=n(96),X=function(e){var t=Object(c.useContext)(te),n=e.reply,a=n.id,r=n.board,s=n.content,i=n.page,l=n.user,j=n.parent,u=n.groupId,d=Object(c.useState)(!1),f=Object(o.a)(d,2),x=f[0],m=f[1],g=function(){return m(!1)},y=Object(c.useState)({parentId:a,boardId:r.id,groupId:u,content:""}),w=Object(o.a)(y,2),k=w[0],I=w[1],N=function(){fetch("".concat(O+"/api/board/reply/writeto"),v(k)).then((function(e){return g(),p(e),e.json()})).then((function(t){201===t&&(I(Object(C.a)(Object(C.a)({},k),{},{content:""})),e.getReply(i))})).catch((function(e){alert("".concat(e,"\uc758\ubb38\uc81c \ub54c\ubb38\uc5d0 ").concat("\ub300\ub313\uae00\uc4f0\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))};return Object(z.jsx)(_.a,{size:"sm",boarder:"info",bg:"dark",text:"white",style:{position:"center"},children:Object(z.jsxs)(_.a.Body,{children:[!0===t.user.active&&t.user.username!==l.username?Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(Q.a,{trigger:"click",rootClose:!0,onToggle:g,placement:"right",show:x,onHide:g,overlay:Object(z.jsxs)(V.a,{style:{background:"#212529",color:"white",opacity:"0.9","max-width":"700px"},name:"content",id:"popover-basic",children:[Object(z.jsx)(V.a.Title,{style:{background:"#212529",color:"white"},name:"id",as:"h3",className:"d-flex justify-content-between",children:Object(z.jsxs)(z.Fragment,{children:[l.username,"\ub2d8\uc5d0\uac8c \ub313\uae00\uc4f0\uae30"]})}),Object(z.jsxs)(V.a.Content,{className:"d-flex justify-content-between",children:[Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},name:"content",onChange:function(e){I(Object(C.a)(Object(C.a)({},k),{},Object(S.a)({},e.target.name,e.target.value)))},as:"textarea","aria-label":"With textarea",rows:3,value:k.content},a),Object(z.jsx)(h.a,{className:"d-flex-rows",onClick:function(e){e.preventDefault(),""===k.content?alert("\ub313\uae00\uc744 \uc785\ub825\ud558\uc5ec\uc8fc\uc138\uc694"):N()},variant:E,children:Object(z.jsx)("span",{children:"\ub4f1 \ub85d"})})]})]}),children:Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(h.a,{onClick:function(){return m(!0)},variant:"link",children:l.username})})})}):Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(h.a,{disabled:!0,variant:"link",children:l.username})}),null===j?"":" @ ".concat(j.user.username),Object(z.jsx)(_.a.Text,{children:s})]})})},Z=function(e){var t=e.match.params.id,n=Object(c.useContext)(te),a=Object(c.useState)(!1),r=Object(o.a)(a,2),s=(r[0],r[1],Object(c.useState)({id:t,username:"",title:"",user:{},content:"",count:0,createTime:"",boardFiles:[]})),l=Object(o.a)(s,2),j=l[0],u=l[1],d=Object(c.useState)({page:0,pages:[],replys:[]}),b=Object(o.a)(d,2),m=b[0],g=b[1],v=Object(c.useState)(0),w=Object(o.a)(v,2),S=w[0],C=w[1],I=function(e){var n="/board/".concat(t,"/reply/list?page=").concat(e);fetch("".concat(O+n),y()).then((function(e){return p(e),e.json()})).then((function(e){g(e)})).catch((function(e){alert("".concat(e,"\uc758\ubb38\uc81c \ub54c\ubb38\uc5d0 ").concat("\ub313\uae00\uac00\uc838\uc624\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))};return Object(c.useEffect)((function(){fetch("".concat(O+"/board/"+t),y()).then((function(e){return p(e),e.json()})).then((function(e){u(e),C(e.recommend)})).catch((function(e){alert("".concat(e,"\uc758\ubb38\uc81c \ub54c\ubb38\uc5d0 ").concat("\uae00\uac00\uc838\uc624\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))})),I(m.page)}),[]),Object(z.jsx)(i.a,{className:"col-10",children:Object(z.jsxs)(_.a,{boarder:"info",bg:"dark",text:"white",style:{position:"center"},children:[Object(z.jsx)(_.a.Header,{children:Object(z.jsxs)(_.a.Title,{className:"d-flex justify-content-between",children:[Object(z.jsx)("strong",{children:j.title}),Object(z.jsx)("strong",{children:j.username})]})}),Object(z.jsx)(_.a.Header,{children:Object(z.jsxs)(_.a.Subtitle,{className:"d-flex justify-content-between",children:[Object(z.jsxs)("small",{children:["\uc870\ud68c\uc218: ",j.count]}),Object(z.jsxs)("small",{children:["\uc791\uc131\ub0a0\uc9dc: ",k(j.createTime)]})]})}),Object(z.jsxs)(_.a.Body,{children:[Object(z.jsx)(_.a.Text,{children:j.content}),j.boardFiles.map((function(e){return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(_.a.Img,{src:"".concat(O+"/"+e.filePath)},e.id)})})),Object(z.jsx)("hr",{}),Object(z.jsx)(_.a.Subtitle,{className:"d-flex justify-content-center",children:Object(z.jsxs)(h.a,{disabled:!n.user.active,variant:"outline-primary",onClick:function(){fetch("".concat(O+("/api/board/recommend/"+t)),y()).then((function(e){return 403===e.status?(n.setUser({username:localStorage.getItem("username"),active:null!==localStorage.getItem("username")}),alert("\ub2e4\uc2dc \ub85c\uadf8\uc778\ud558\uc5ec \uc8fc\uc138\uc694")):p(e),e.json()})).then((function(e){C(e)})).catch((function(e){alert("".concat(e," \uadf8\ub9ac\ud558\uc5ec ").concat("\ucd94\ucc9c\ud558\uae30","\uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4."))}))},children:["\ucd94\ucc9c ",S]})}),n.user.username===j.username?Object(z.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(z.jsx)(D.Link,{to:"/board/modify/"+t,children:Object(z.jsx)(h.a,{variant:"outline-secondary",children:"\uc218\uc815"})}),Object(z.jsx)(h.a,{onClick:function(){fetch("".concat(O+("/api/board/delete/"+t)),{method:"DELETE",headers:{"Content-Type":"application/json; charset=utf-8",refresh_token:localStorage.getItem(f),access_token:localStorage.getItem(x)}}).then((function(t){403===t.status?(n.setUser({username:localStorage.getItem("username"),active:null!==localStorage.getItem("username")}),alert("\ub2e4\uc2dc \ub85c\uadf8\uc778\ud558\uc5ec \uc8fc\uc138\uc694")):p(t),200===t.status&&(alert("\uc0ad\uc81c\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.history.push("/"))})).catch((function(e){403===e.statusCode?alert("\ub85c\uadf8\uc544\uc6c3\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694."):alert("".concat(e.statusCode," \uadf8\ub9ac\ud558\uc5ec ").concat("\uc0ad\uc81c\ud558\uae30","\uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4."))}))},variant:"outline-secondary",children:"\uc0ad\uc81c"})]}):Object(z.jsx)(z.Fragment,{})]}),Object(z.jsx)("hr",{}),Object(z.jsx)(_.a.Body,{children:m.replys.map((function(e){return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(X,{reply:e,getReply:I},e.id)})}))}),Object(z.jsxs)(_.a.Footer,{children:[Object(z.jsx)(Y.a,{className:"justify-content-center","aria-label":"Toolbar with button groups",children:Object(z.jsx)(H.a,{className:"me-2","aria-label":"First group",children:m.pages.map((function(e){return Object(z.jsx)(h.a,{onClick:function(){return I(e)},variant:E,children:e+1},e)}))})}),Object(z.jsx)("br",{})]}),!0===n.user.active?Object(z.jsx)(_.a.Footer,{className:"d-flex",children:Object(z.jsx)(q,{boardId:t,getReply:I,page:m.page})}):Object(z.jsx)(z.Fragment,{}),Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(_.a.Footer,{className:"d-flex justify-content-between",children:Object(z.jsx)(h.a,{onClick:function(){return e.history.push("/")},variant:E,children:"\ub3cc\uc544\uac00\uae30"})})}),Object(z.jsx)("br",{})]})})},$=function(e){var t=e.match.params.id,n=Object(c.useContext)(te),a=Object(c.useState)({id:t,username:"",title:"",user:{},content:"",count:0,createTime:"",boardFiles:[],interest:""}),r=Object(o.a)(a,2),s=r[0],l=r[1],m=Object(c.useState)([]),g=Object(o.a)(m,2),v=g[0],w=g[1],I=Object(c.useState)([]),N=Object(o.a)(I,2),F=N[0],T=N[1],G=function(e){l(Object(C.a)(Object(C.a)({},s),{},Object(S.a)({},e.target.name,e.target.value)))},D=function(e){var t=s.boardFiles;t.map((function(n){n.id===e||(t.pop(n),l(Object(C.a)(Object(C.a)({},s),{},{boardFiles:t})))}))};return Object(c.useEffect)((function(){fetch("".concat(O+"/board/"+t),y()).then((function(c){return 403===c.status&&(n.setUser({username:localStorage.getItem("username"),active:null!==localStorage.getItem("username")}),alert("\ub2e4\uc2dc \ub85c\uadf8\uc778\ud558\uc5ec \uc8fc\uc138\uc694"),e.history.push("/board/".concat(t))),p(c),c.json()})).then((function(e){l(e)})).catch((function(e){alert("".concat(e,"\uc758\ubb38\uc81c \ub54c\ubb38\uc5d0 ").concat("\uae00\uac00\uc838\uc624\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))}),[]),Object(z.jsx)(i.a,{className:"col-10",children:Object(z.jsxs)(_.a,{boarder:"info",bg:"dark",text:"white",style:{position:"center"},children:[Object(z.jsxs)(d.a,{children:[Object(z.jsxs)(_.a.Header,{children:[Object(z.jsxs)("strong",{children:["\uc791\uc131\uc790 : ",s.username]}),Object(z.jsxs)(_.a.Subtitle,{className:"d-flex justify-content-between",children:[Object(z.jsxs)("small",{children:["\uc870\ud68c\uc218: ",s.count]}),Object(z.jsxs)("small",{children:["\uc791\uc131\ub0a0\uc9dc: ",k(s.createTime)]})]})]}),Object(z.jsx)(_.a.Header,{children:Object(z.jsxs)(d.a.Group,{children:["\uc81c\ubaa9",Object(z.jsx)(d.a.Control,{style:{background:"#212529",color:"white"},name:"title",value:s.title,onChange:G,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})]})}),Object(z.jsxs)(_.a.Body,{children:[Object(z.jsxs)(d.a.Group,{controlId:"formTextArea",className:"mb-3",children:["\ub0b4\uc6a9",Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},name:"content",value:s.content,onChange:G,as:"textarea","aria-label":"With textarea",rows:15})]}),"\ud30c\uc77c\ucca8\ubd80",Object(z.jsx)(d.a.Group,{controlId:"formFile",className:"mb-3",children:Object(z.jsx)(b.a,{style:{background:"#212529",color:"white"},name:"files",onChange:function(e){for(var t=function(t){if(e.target.files[t]){console.log(e.target.files[t]),T([].concat(Object(R.a)(F),[e.target.files[t]]));var n=new FileReader;n.readAsDataURL(e.target.files[t]),n.onloadend=function(){var c=n.result;if(c){var a=e.target.files[t].name,r=c.toString();w((function(e){return[].concat(Object(R.a)(e),[{id:t,name:a,img:r}])}))}}}},n=0;n<e.target.files.length;n++)t(n)},type:"file",size:"lg"})}),Object(z.jsxs)(j.a,{children:[Object(z.jsx)(z.Fragment,{children:s.boardFiles.map((function(e){return Object(z.jsxs)(u.a,{xs:6,md:4,children:[Object(z.jsx)(L.a,{"aria-label":"Hide",onClick:D}),Object(z.jsx)(P.a,{className:"d-block w-100",src:"".concat(O,"/").concat(e.filePath),rounded:!0},e.id)]})}))}),Object(z.jsx)(z.Fragment,{children:v.map((function(e){return Object(z.jsxs)(u.a,{xs:6,md:4,children:[Object(z.jsx)(L.a,{"aria-label":"Hide",onClick:function(){return function(e){var t=[];v.map((function(n){n.name===e||t.push(n)})),w(t);var n=[];F.map((function(t){t.name===e||n.push(t)})),T(n)}(e.name)}}),Object(z.jsx)(P.a,{className:"d-block w-100",src:e.img,rounded:!0},e.id)]})}))})]})]}),Object(z.jsxs)(_.a.Footer,{className:"d-flex justify-content-between",children:[Object(z.jsx)(h.a,{onClick:function(){return function(){var c=new FormData;c.append("board",new Blob([JSON.stringify(s)],{type:"application/json"})),F&&Object.values(F).forEach((function(e){c.append("files",e)})),fetch("".concat(O+"/api/board/modify"),{method:"PUT",headers:{refresh_token:localStorage.getItem(f),access_token:localStorage.getItem(x)},body:c}).then((function(c){return 403===c.status&&(n.setUser({username:localStorage.getItem("username"),active:null!==localStorage.getItem("username")}),alert("\ub2e4\uc2dc \ub85c\uadf8\uc778\ud558\uc5ec \uc8fc\uc138\uc694"),e.history.push("/board/".concat(t))),p(c),w([]),T([]),c.json()})).then((function(n){e.history.push("/board/".concat(t))})).catch((function(e){e.status,alert("".concat(e,"\uc758\ubb38\uc81c \ub54c\ubb38\uc5d0 ").concat("\uae00\uc218\uc815\ud558\uae30","\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4."))}))}()},variant:"outline-secondary",children:"\uc218\uc815"}),Object(z.jsx)(h.a,{onClick:function(){return e.history.push("/board/".concat(t))},variant:E,children:"\ub3cc\uc544\uac00\uae30"})]})]}),Object(z.jsx)("br",{})]})})},ee=function(){return Object(z.jsxs)(D.BrowserRouter,{children:[Object(z.jsx)(D.Route,{path:"/",exact:!0,component:M}),Object(z.jsx)(D.Route,{path:"/?keyword=:keyword",component:M}),Object(z.jsx)(D.Route,{path:"/board/:id",exact:!0,component:Z}),Object(z.jsx)(D.Route,{path:"/board/modify/:id",exact:!0,component:$})]})},te=Object(c.createContext)(null),ne=function(){var e=Object(c.useState)({username:localStorage.getItem("username"),active:null!==localStorage.getItem("username")}),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),l=s[0],j=s[1];return Object(z.jsx)(te.Provider,{value:{user:n,setUser:a,keyword:l,setKeyword:j},children:Object(z.jsxs)(i.a,{children:[Object(z.jsx)(G,{user:n}),Object(z.jsx)("br",{}),Object(z.jsx)(ee,{})]})})};var ce=function(){return Object(z.jsx)("div",{className:"App",style:{opacity:.9,backgroundColor:"transparent"},children:Object(z.jsx)(ne,{})})};s.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(ce,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.434299ab.chunk.js.map