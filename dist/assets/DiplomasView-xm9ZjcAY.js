import{_ as Ve}from"./TheBreadcrumb-B0lWjjPw.js";import{_ as oe,p as Z,K as Q,s as W,k as ne,r as c,A as D,b as t,f as s,h as w,g as d,d as e,t as p,w as P,l as ee,F as H,B as j,v as de,T as ie,n as k,C as ue,E as Me,G as Ce,i as X,z as ce,j as V,c as T,H as se,I as ae,Y as $e,x as te,u as He,o as Ae,L as z}from"./index-DnGSU1Bb.js";import{u as ve,_ as Pe}from"./useModalWindow-Bwp873Hd.js";import{u as re,T as le}from"./useToast-DKLkbWQx.js";/* empty css                                                     */const Be={class:"w-full rounded-lg shadow-lg"},je={class:"pt-1 rounded-t-lg dark:bg-[#171131ef] bg-white"},De={class:"flex items-center justify-between space-x-2 py-3 px-4"},Te={class:"flex items-center"},qe={id:"dropdown",class:"relative inline-block text-left"},Le={class:"absolute left-0 z-10 mt-2 w-24 origin-top-left rounded-md bg-white dark:bg-[#171131ef] shadow-lg ring-1 ring-white dark:ring-gray-800 ring-opacity-5"},Se={class:"py-1"},Re=["value","onClick"],ze={class:"lg:w-1/3 md:w-1/3 w-2/3 flex items-center space-x-2"},Ee=["disabled"],Ge={class:"w-full overflow-x-auto rounded-b-lg"},Ue={class:"w-full min-w-full table-auto bg-white dark:bg-[#171131ef]"},Oe={class:"bg-gray-200 dark:bg-[#211849ef]"},Ie={class:"border-y border-gray-300 dark:border-[#32237cef] px-4 py-2 break-words text-[0.8rem]"},Fe={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Ye={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Ke={class:"w-full flex items-center justify-center"},Ne={class:"inline-flex rounded-md shadow-xs",role:"group"},Je=["onClick"],We=["onClick"],Qe={class:"flex justify-center items-center mt-4 space-x-2 overflow-x-auto"},Xe={key:2,class:"px-2 select-none"},Ze=["onClick"],et=["onClick"],tt={key:4,class:"px-2 select-none"},st={class:"toast-container w-5/6 fixed top-25 md:top-auto md:bottom-5 right-5 md:w-1/4 flex flex-col-reverse space-y-2"},at={__name:"DiplomaRequestsDataTable",props:["data"],emits:["update"],setup(O,{emit:M}){const m=O,B=M;Z(m,(i,n)=>{A.value=i.data,E.value=[...A.value]});const{isModalOpen:u,openModal:f,header:C,context:h}=ve(),{toasts:_,addToast:l}=re(),y=Q(),{deactivateStatus:g}=W(y);ne();const A=c([]),E=c([]),G=c(null);m.data.length>0&&(A.value=m.data,E.value=[...A.value]);const K=c("p-4 py-2 my-2 rounded-full border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"),$=c("p-4 py-2 my-2 rounded-full border-none bg-gray-200 dark:bg-[#261953]"),x=c("sender"),S=c("asc"),b=c(1),U=c(10),N=[10,20,50,100],q=c(""),I=c(!1),v=()=>{E.value=A.value.filter(i=>i.sender.toLowerCase().includes(q.value.toLowerCase())),b.value=1,I.value=!0},o=()=>{q.value="",E.value=[...A.value],b.value=1,I.value=!1},a=D(()=>x.value?[...E.value].sort((i,n)=>i[x.value]<n[x.value]?S.value==="asc"?-1:1:i[x.value]>n[x.value]?S.value==="asc"?1:-1:0):A.value),R=D(()=>{const i=(b.value-1)*U.value;return a.value.slice(i,i+U.value)}),L=D(()=>Math.ceil(a.value.length/U.value)),F=i=>{i>=1&&i<=L.value&&(b.value=i)},ge=i=>{U.value=parseInt(i,10),b.value=1,J.value=!1},pe=D(()=>{const i=Math.max(2,b.value-2);return Array.from({length:Math.max(0,b.value-i)},(n,r)=>i+r)}),fe=D(()=>{const i=Math.min(L.value-1,b.value+2);return Array.from({length:Math.max(0,i-b.value)},(n,r)=>b.value+r+1)}),be=i=>{x.value===i?S.value=S.value==="asc"?"desc":"asc":(x.value=i,S.value="asc")},J=c(!1);function ke(){J.value=!J.value}function ye(){J.value=!1}function we(i){i.target.closest("#dropdown")||ye()}function he(i,n,r){f(i,n),G.value=r}function me(){u.value=!1,G.value=null}function _e(){u.value=!1,y.deactivate(G.value).then(()=>{B("update")}),G.value=null}return Z(g,(i,n)=>{i&&(i==="success"?l("Hasabat üstünlikli arhiwleşdirildi","success"):i==="error"&&l("Arhiwleşdirme prosesinde ýalňyşlyk ýüze çykdy","error")),g.value=null}),window.addEventListener("click",we),(i,n)=>(t(),s(H,null,[w(Pe,{"is-open":d(u),onClose:me,onSubmit:_e,header:d(C),context:`${d(h)} arzasynyň arhiwleşdirilmegini tassyklaýarsyňyzmy?`},null,8,["is-open","header","context"]),e("div",Be,[e("div",je,[e("div",De,[e("div",Te,[e("div",qe,[e("div",null,[e("button",{onClick:ke,type:"button",class:"inline-flex transition duration-200 ease-in w-full justify-center rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#171131ef] dark:text-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-[#32237cef] focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-[#32237cef] focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-[#32237cef] select-none"}," Setir sany: "+p(U.value),1)]),w(ie,{name:"fade-scale",onBeforeEnter:n[0]||(n[0]=r=>r.style.display="block"),onAfterLeave:n[1]||(n[1]=r=>r.style.display="none")},{default:P(()=>[ee(e("div",Le,[e("div",Se,[(t(),s(H,null,j(N,r=>e("button",{key:r,value:r,onClick:Y=>ge(r),class:"w-full text-start text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#32237cef] select-none"},p(r)+" setir ",9,Re)),64))])],512),[[de,J.value]])]),_:1})])]),e("div",ze,[e("button",{onClick:o,class:k([{"opacity-0":!I.value},"p-2 text-sm rounded-xl shadow-md border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"]),disabled:!I.value},n[8]||(n[8]=[ue('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 24 24" version="1.1" data-v-ddd46c75><title data-v-ddd46c75>Reload</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-ddd46c75><g id="Reload" data-v-ddd46c75><rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24" data-v-ddd46c75></rect><path d="M4,13 C4,17.4183 7.58172,21 12,21 C16.4183,21 20,17.4183 20,13 C20,8.58172 16.4183,5 12,5 C10.4407,5 8.98566,5.44609 7.75543,6.21762" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-ddd46c75></path><path d="M9.2384,1.89795 L7.49856,5.83917 C7.27552,6.34441 7.50429,6.9348 8.00954,7.15784 L11.9508,8.89768" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-ddd46c75></path></g></g></svg>',1)]),10,Ee),ee(e("input",{"onUpdate:modelValue":n[2]||(n[2]=r=>q.value=r),type:"text",onKeyup:Ce(v,["enter"]),placeholder:"Gözleg",class:"w-full dark:text-gray-300 transition duration-200 ease-in bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"},null,544),[[Me,q.value]])])])]),e("div",Ge,[e("table",Ue,[e("thead",Oe,[e("tr",null,[n[10]||(n[10]=e("th",{class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-left text-[0.8rem]"}," T/B ",-1)),e("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:n[3]||(n[3]=r=>be("sender"))},[n[9]||(n[9]=X(" UGRADYJY ")),e("span",{class:k([x.value==="sender"?S.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),n[11]||(n[11]=e("th",{class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-center text-[0.8rem]"}," GURALLAR ",-1))])]),e("tbody",null,[(t(!0),s(H,null,j(R.value,(r,Y)=>(t(),s("tr",{key:r.id,class:"transition ease-in hover:ease-out duration-200 hover:bg-gray-100 dark:hover:bg-[#261953]"},[e("td",Ie,p(Y+1),1),e("td",Fe,p(r.sender),1),e("td",Ye,[e("div",Ke,[e("div",Ne,[(t(),s("button",{type:"button",key:r.id,onClick:xe=>d(ce).push(`/diplomas/view/${r.id}`),class:"px-4 py-2 text-[0.8rem] font-medium rounded-l-lg bg-violet-400 hover:bg-violet-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-violet-700 border border-gray-200 focus:z-10 focus:ring-2 focus:ring-violet-500 dark:border-gray-700 select-none"}," Görmek ",8,Je)),e("button",{type:"button",onClick:xe=>he("Arhiwleşdirmek",r.sender,r.id),class:"px-4 py-2 text-[0.8rem] font-medium bg-red-400 hover:bg-red-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-pink-900 dark:hover:bg-pink-600 border border-gray-200 rounded-e-lg focus:z-10 focus:ring-2 focus:ring-red-500 dark:border-gray-700 dark:focus:ring-pink-500 select-none"}," Arhiwleşdirmek ",8,We)])])])]))),128))])])])]),e("div",Qe,[b.value!==1?(t(),s("button",{key:0,class:k(["select-none",K.value]),onClick:n[4]||(n[4]=r=>F(b.value-1))},n[12]||(n[12]=[e("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):V("",!0),b.value>3?(t(),s("button",{key:1,class:k(["select-none",$.value]),onClick:n[5]||(n[5]=r=>F(1))}," 1 ",2)):V("",!0),b.value>4?(t(),s("span",Xe,"...")):V("",!0),(t(!0),s(H,null,j(pe.value,r=>(t(),s("button",{class:k(["select-none",$.value]),key:"before-"+r,onClick:Y=>F(r)},p(r),11,Ze))),128)),L.value!==0?(t(),s("button",{key:3,class:k(["select-none",K.value])},p(b.value),3)):V("",!0),(t(!0),s(H,null,j(fe.value,r=>(t(),s("button",{class:k(["select-none",$.value]),key:"after-"+r,onClick:Y=>F(r)},p(r),11,et))),128)),b.value<L.value-3?(t(),s("span",tt,"...")):V("",!0),b.value<L.value-2?(t(),s("button",{key:5,class:k($.value),onClick:n[6]||(n[6]=r=>F(L.value))},p(L.value),3)):V("",!0),b.value!==L.value&&L.value!==0?(t(),s("button",{key:6,class:k(["select-none",K.value]),onClick:n[7]||(n[7]=r=>F(b.value+1))},n[13]||(n[13]=[e("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):V("",!0)]),(t(),T(ae,{to:"body"},[e("div",st,[w(se,{name:"toast"},{default:P(()=>[(t(!0),s(H,null,j(d(_),r=>(t(),T(le,{key:r.id,message:r.message,type:r.type,duration:r.duration,onClose:()=>_.value=d(_).filter(Y=>Y.id!==r.id)},null,8,["message","type","duration","onClose"]))),128))]),_:1})])]))],64))}},rt=oe(at,[["__scopeId","data-v-ddd46c75"]]),lt={class:"w-full rounded-lg shadow-lg"},ot={class:"pt-1 rounded-t-lg dark:bg-[#171131ef] bg-white"},nt={class:"flex items-center justify-between space-x-2 py-3 px-4"},dt={class:"flex items-center"},it={id:"dropdown",class:"relative inline-block text-left"},ut={class:"absolute left-0 z-10 mt-2 w-24 origin-top-left rounded-md bg-white dark:bg-[#171131ef] shadow-lg ring-1 ring-white dark:ring-gray-800 ring-opacity-5"},ct={class:"py-1"},vt=["value","onClick"],gt={class:"w-full overflow-x-auto rounded-b-lg"},pt={class:"w-full min-w-full table-auto bg-white dark:bg-[#171131ef]"},ft={class:"bg-gray-200 dark:bg-[#211849ef]"},bt={class:"border-y border-gray-300 dark:border-[#32237cef] px-4 py-2 break-words text-[0.8rem]"},kt={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},yt={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem] text-center"},wt={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},ht={class:"flex justify-center items-center mt-4 space-x-2 overflow-x-auto"},mt={key:2,class:"px-2 select-none"},_t=["onClick"],xt=["onClick"],Vt={key:4,class:"px-2 select-none"},Mt={class:"toast-container w-5/6 fixed top-25 md:top-auto md:bottom-5 right-5 md:w-1/4 flex flex-col-reverse space-y-2"},Ct={__name:"DiplomaActionsDataTable",props:["data"],emits:["update"],setup(O,{emit:M}){const m=O;Z(m,(v,o)=>{f.value=v.data,C.value=[...f.value]}),ve();const{toasts:B,addToast:u}=re();Q();const f=c([]),C=c([]);c(null),m.data.length>0&&(f.value=m.data,C.value=[...f.value]);const h=c("p-4 py-2 my-2 rounded-full border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"),_=c("p-4 py-2 my-2 rounded-full border-none bg-gray-200 dark:bg-[#261953]"),l=c("verdict_date"),y=c("asc"),g=c(1),A=c(10),E=[10,20,50,100],G=D(()=>l.value?[...C.value].sort((v,o)=>v[l.value]<o[l.value]?y.value==="asc"?-1:1:v[l.value]>o[l.value]?y.value==="asc"?1:-1:0):f.value),K=D(()=>{const v=(g.value-1)*A.value;return G.value.slice(v,v+A.value)}),$=D(()=>Math.ceil(G.value.length/A.value)),x=v=>{v>=1&&v<=$.value&&(g.value=v)},S=v=>{A.value=parseInt(v,10),g.value=1,q.value=!1},b=D(()=>{const v=Math.max(2,g.value-2);return Array.from({length:Math.max(0,g.value-v)},(o,a)=>v+a)}),U=D(()=>{const v=Math.min($.value-1,g.value+2);return Array.from({length:Math.max(0,v-g.value)},(o,a)=>g.value+a+1)}),N=v=>{l.value===v?y.value=y.value==="asc"?"desc":"asc":(l.value=v,y.value="asc")},q=c(!1);function I(){q.value=!q.value}return(v,o)=>(t(),s(H,null,[e("div",lt,[e("div",ot,[e("div",nt,[e("div",dt,[e("div",it,[e("div",null,[e("button",{onClick:I,type:"button",class:"inline-flex transition duration-200 ease-in w-full justify-center rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#171131ef] dark:text-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-[#32237cef] focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-[#32237cef] focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-[#32237cef] select-none"}," Setir sany: "+p(A.value),1)]),w(ie,{name:"fade-scale",onBeforeEnter:o[0]||(o[0]=a=>a.style.display="block"),onAfterLeave:o[1]||(o[1]=a=>a.style.display="none")},{default:P(()=>[ee(e("div",ut,[e("div",ct,[(t(),s(H,null,j(E,a=>e("button",{key:a,value:a,onClick:R=>S(a),class:"w-full text-start text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#32237cef] select-none"},p(a)+" setir ",9,vt)),64))])],512),[[de,q.value]])]),_:1})])]),o[9]||(o[9]=e("div",null,[e("h3",{class:"select-none font-bold"},"HEREKETLER")],-1))])]),e("div",gt,[e("table",pt,[e("thead",ft,[e("tr",null,[o[13]||(o[13]=e("th",{class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-left text-[0.8rem]"}," T/B ",-1)),e("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:o[2]||(o[2]=a=>N("sender"))},[o[10]||(o[10]=X(" UGRADYJY ")),e("span",{class:k([l.value==="sender"?y.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),e("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:o[3]||(o[3]=a=>N("count"))},[o[11]||(o[11]=X(" HEREKET ")),e("span",{class:k([l.value==="count"?y.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),e("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:o[4]||(o[4]=a=>N("verdict_date"))},[o[12]||(o[12]=X(" WAGTY ")),e("span",{class:k([l.value==="verdict_date"?y.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)])])]),e("tbody",null,[(t(!0),s(H,null,j(K.value,(a,R)=>(t(),s("tr",{key:a.id,class:"transition ease-in hover:ease-out duration-200 hover:bg-gray-100 dark:hover:bg-[#261953]"},[e("td",bt,p(R+1),1),e("td",kt,p(a.sender),1),e("td",yt,[e("span",{class:k(["py-2 px-3 select-none rounded-lg",{"bg-red-500 dark:bg-pink-900 text-white":a.type==="down","bg-emerald-500 dark:bg-emerald-700 text-white":a.type==="up"}])},p(a.type==="up"?`+${a.count}`:`-${a.count}`),3)]),e("td",wt,p(a.verdict_date),1)]))),128))])])])]),e("div",ht,[g.value!==1?(t(),s("button",{key:0,class:k(["select-none",h.value]),onClick:o[5]||(o[5]=a=>x(g.value-1))},o[14]||(o[14]=[e("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):V("",!0),g.value>3?(t(),s("button",{key:1,class:k(["select-none",_.value]),onClick:o[6]||(o[6]=a=>x(1))}," 1 ",2)):V("",!0),g.value>4?(t(),s("span",mt,"...")):V("",!0),(t(!0),s(H,null,j(b.value,a=>(t(),s("button",{class:k(["select-none",_.value]),key:"before-"+a,onClick:R=>x(a)},p(a),11,_t))),128)),$.value!==0?(t(),s("button",{key:3,class:k(["select-none",h.value])},p(g.value),3)):V("",!0),(t(!0),s(H,null,j(U.value,a=>(t(),s("button",{class:k(["select-none",_.value]),key:"after-"+a,onClick:R=>x(a)},p(a),11,xt))),128)),g.value<$.value-3?(t(),s("span",Vt,"...")):V("",!0),g.value<$.value-2?(t(),s("button",{key:5,class:k(_.value),onClick:o[7]||(o[7]=a=>x($.value))},p($.value),3)):V("",!0),g.value!==$.value&&$.value!==0?(t(),s("button",{key:6,class:k(["select-none",h.value]),onClick:o[8]||(o[8]=a=>x(g.value+1))},o[15]||(o[15]=[e("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):V("",!0)]),(t(),T(ae,{to:"body"},[e("div",Mt,[w(se,{name:"toast"},{default:P(()=>[(t(!0),s(H,null,j(d(B),a=>(t(),T(le,{key:a.id,message:a.message,type:a.type,duration:a.duration,onClose:()=>B.value=d(B).filter(R=>R.id!==a.id)},null,8,["message","type","duration","onClose"]))),128))]),_:1})])]))],64))}},$t=oe(Ct,[["__scopeId","data-v-e3316276"]]),Ht={class:"grid grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 gap-x-0 gap-y-8"},At={class:"col-span-2"},Pt={key:1,class:"flex w-full h-[58vh] items-center justify-center dark:bg-[#171131ef] bg-white rounded-lg border border-gray-200 dark:border-[#36314e]"},Bt={class:"col-span-2 lg:col-span-1"},jt={key:1,class:"flex w-full h-[58vh] items-center justify-center dark:bg-[#171131ef] bg-white rounded-lg border border-gray-200 dark:border-[#36314e]"},Dt={__name:"DiplomasViewForAdmin",setup(O){const M=Q(),{diplomaRequests:m,diplomaActions:B}=W(M),u=c(!1),f=c(!1);return $e(()=>{u.value=!0,f.value=!0,M.getAllForTable().then(()=>{u.value=!1}),M.getActions().then(()=>{f.value=!1})}),(C,h)=>(t(),s("div",Ht,[e("div",At,[u.value?(t(),s("div",Pt,[w(te,{class:"w-24"})])):(t(),T(rt,{key:0,data:d(m),onUpdate:h[0]||(h[0]=_=>d(M).getAllForTable())},null,8,["data"]))]),e("div",Bt,[f.value?(t(),s("div",jt,[w(te,{class:"w-24"})])):(t(),T($t,{key:0,data:d(B),onUpdate:h[1]||(h[1]=_=>d(M).getActions())},null,8,["data"]))])]))}},Tt={key:0,class:"flex w-full h-[58vh] items-center justify-center dark:bg-[#171131ef] bg-white rounded-lg border border-gray-200 dark:border-[#36314e]"},qt={key:1},Lt={key:0,class:"bg-yellow-200/50 p-4 rounded-xl border border-yellow-500 dark:border-yellow-300 mb-8"},St={key:1,class:"grid md:grid-cols-4 sm:grid-cols-2 gap-8"},Rt={class:"bg-white dark:bg-[#171131ef] shadow-md rounded-lg flex justify-between items-center p-4 md:col-span-2 sm:col-span-1"},zt={key:0,class:"mt-2 select-none font-bold text-lg"},Et={key:1,class:"mt-2 select-none"},Gt={class:"text-base"},Ut={class:"font-bold text-lg"},Ot={key:2,class:"flex w-full h-[58vh] items-center justify-center border-dashed border-4 rounded-2xl border-gray-400 bg-gray-200 dark:border-gray-700 dark:bg-[#242035]"},It={class:"flex justify-center my-4"},Ft={class:"toast-container w-5/6 fixed top-25 md:top-auto md:bottom-5 right-5 md:w-1/4 flex flex-col-reverse space-y-2"},Yt={__name:"DiplomasViewForStuff",setup(O){const{toasts:M,addToast:m}=re(),B=Q(),{diplomaRequestAdvanced:u,createStatus:f,updateStatus:C}=W(B),h=He();return Ae(()=>{f.value&&(f.value==="success"?m("Arza üstünlikli hasaba alyndy","success"):f.value==="error"&&m("Hasaba alma prosesinde ýalňyşlyk ýüze çykdy","error")),f.value=null,C.value&&(C.value==="success"?m("Hasabat üstünlikli täzelendi. Üýtgeşmeler dolandyryjy tassyklandan soňra işe girer","success"):C.value==="error"&&m("Prosesde ýalňyşlyk ýüze çykdy","error")),C.value=null,h.isLoading=!0,B.getDiplomaRequestAdvanced().then(()=>{h.isLoading=!1})}),(_,l)=>(t(),s(H,null,[d(h).isLoading?(t(),s("div",Tt,[w(te,{class:"w-24"})])):(t(),s("div",qt,[!d(u).null&&!d(u).verdict?(t(),s("div",Lt,l[1]||(l[1]=[e("h4",{class:"text-yellow-500 dark:text-yellow-300 select-none"},"Arza heniz dolandyryjy tarapyndan tassyklanylmady ",-1)]))):V("",!0),d(u).null?(t(),s("div",Ot,[e("div",null,[l[12]||(l[12]=e("h2",{class:"text-lg md:text-2xl font-semibold text-center select-none"},"Hasabat heniz döredilmedi",-1)),e("div",It,[e("button",{onClick:l[0]||(l[0]=y=>d(ce).push("/diplomas/add")),class:"link-active px-4 py-2 rounded-lg"},"Hasabat döretmek")])])])):(t(),s("div",St,[w(z,{label:"Başdaky talap edilen diplom sany","custom-classes":"md:col-span-2 sm:col-span-1","data-value":d(u).original_requested_quantity,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:P(()=>l[2]||(l[2]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),e("div",Rt,[e("div",null,[l[3]||(l[3]=e("div",{class:"text-sm my-2 select-none"}," Umumy talap edilen diplom sany ",-1)),d(u).original_requested_quantity===d(u).total_requested_quantity?(t(),s("div",zt,p(d(u).total_requested_quantity),1)):(t(),s("div",Et,[e("span",Gt,p(d(u).original_requested_quantity)+" + "+p(d(u).total_requested_quantity-d(u).original_requested_quantity)+" = ",1),e("span",Ut,p(d(u).total_requested_quantity),1)]))]),l[4]||(l[4]=ue('<div><div class="w-12 h-12 rounded-full flex justify-center items-center bg-green-200 dark:bg-green-500/75"><svg class="w-6 stroke-green-500 dark:stroke-green-900" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_901_948)"><path d="M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_901_948"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg></div></div>',1))]),w(z,{label:'"Tapawutlanan" diplom sany',"custom-classes":"md:col-span-2 sm:col-span-1","data-value":d(u).honor_diplomas_quantity,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:P(()=>l[5]||(l[5]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),w(z,{label:"Adaty diplom sany","custom-classes":"md:col-span-2 sm:col-span-1","data-value":d(u).simple_diplomas_quantity,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:P(()=>l[6]||(l[6]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),w(z,{label:"Iki ýyl iş","data-value":d(u).two_year_work_off,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:P(()=>l[7]||(l[7]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),w(z,{label:"Ýogalan","data-value":d(u).died,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:P(()=>l[8]||(l[8]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),w(z,{label:"Daşary ýurda giden","data-value":d(u).went_abroad,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:P(()=>l[9]||(l[9]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),w(z,{label:"Gaýry sebäpler","data-value":d(u).other_reasons,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:P(()=>l[10]||(l[10]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),w(z,{label:"Ätiýaçdaky diplomlar","whole-line":!0,"data-value":d(u).spare_diplomas,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:P(()=>l[11]||(l[11]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"])]))])),(t(),T(ae,{to:"body"},[e("div",Ft,[w(se,{name:"toast"},{default:P(()=>[(t(!0),s(H,null,j(d(M),y=>(t(),T(le,{key:y.id,message:y.message,type:y.type,duration:y.duration,onClose:()=>M.value=d(M).filter(g=>g.id!==y.id)},null,8,["message","type","duration","onClose"]))),128))]),_:1})])]))],64))}},Kt={class:"w-full"},Zt={__name:"DiplomasView",setup(O){const M=ne(),{role:m}=W(M),B=Q(),{diplomaRequestAdvanced:u}=W(B),f=c([{path:"/diplomas",name:"Diplomlar"}]);let C=0,h=0;return Z(u,_=>{user.value.is_superuser||(_.null?f.value=[{path:"/diplomas",name:"Diplomlar"}]:(C=new Date(u.value.allowed_until).getTime(),h=new Date().getTime(),_.verdict==="C"&&C>h?f.value=[{path:"/diplomas",name:"Diplomlar"},{path:"/diplomas/new-request/",name:"Hasabaty täzelemek"}]:f.value=[{path:"/diplomas",name:"Diplomlar"}]))}),(_,l)=>(t(),s("div",Kt,[w(Ve,{paths:f.value},null,8,["paths"]),d(m)==="root"?(t(),T(Dt,{key:0})):(t(),T(Yt,{key:1}))]))}};export{Zt as default};
