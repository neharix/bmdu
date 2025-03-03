import{_ as se,I as X,M as oe,R as Y,r as u,s as W,z as H,o as Z,N as _e,p as K,b as s,g as r,c as N,e,h as D,w as G,F as g,A as M,u as k,G as re,H as le,l as Q,S as Ce,t as f,i as J,O as ae,D as ne,n as v,j as S,T as de,y as Se,P as Me,v as $e,B as De,E as Te,x as Le}from"./index-CxU83Qru.js";/* empty css                                                     */import{u as ue,T as ie}from"./useToast-BD7xrvgK.js";/* empty css                                                                             *//* empty css                                                                                       */import{u as ze,_ as He}from"./useModalWindow-YBdBHNYD.js";const Pe={class:"toast-container w-5/6 fixed top-25 md:top-auto md:bottom-5 right-5 md:w-1/4 flex flex-col-reverse space-y-2"},Ae={class:"tile mb-6"},Be={class:"my-3"},Fe=["value"],Oe={class:"relative w-full multi-select"},je=["onClick"],Ee={key:0,class:"absolute z-10 w-full bg-white dark:bg-[#171131] border border-gray-300 dark:border-gray-800 rounded-md shadow-md max-h-48 overflow-y-auto"},Re=["onMousedown"],Ie={key:0,class:"px-3 py-2 text-gray-500 select-none"},Ue={class:"flex flex-wrap justify-center md:justify-end lg:justify-end mt-3"},Ve=["disabled"],Ke={__name:"AddFacultyDepartment",emits:["update"],setup(q,{emit:$}){const j=$,{toasts:m,addToast:x}=ue(),P=X(),E=oe(),R=Y(),w=u(null);E.getHighSchoolFaculties(P.params.id),R.getHighSchoolExcDepartments(P.params.id);const b=u(!1),{highSchoolFaculties:T}=W(E),{highSchoolExcDepartments:I,createFacultyDepartmentsStatus:L}=W(R),y=u(""),c=u(new Set),_=u(!1),A=H(()=>{const n=y.value.toLowerCase();return I.value.filter(i=>i.name.toLowerCase().includes(n))}),B=async n=>{c.value.has(n.id)?c.value.delete(n.id):c.value.add(n.id),y.value="",await Me(),_.value=!1},p=H(()=>I.value.filter(n=>c.value.has(n.id))),h=n=>{n.target.closest(".multi-select")||(_.value=!1)};Z(()=>{T.value.length>0&&(w.value=T.value[0].id),document.addEventListener("mousedown",h)}),_e(()=>{document.removeEventListener("mousedown",h)});const d=()=>{_.value=!0},z=()=>{const n=Array.from(c.value);n.length!==0&&(console.log(n),b.value=!0,R.createFacultyDepartment({high_school:parseInt(P.params.id),faculty:w.value,departments:n}).then(()=>{j("update"),c.value.clear(),b.value=!1}))};return K(L,(n,i)=>{n&&(n==="success"?x("Kafedra üstünlikli hasaba alyndy","success"):n==="error"&&x("Hasaba alma prosesinde ýalňyşlyk ýüze çykdy","error")),L.value=null}),K(T,(n,i)=>{n.length>0&&(w.value=n[0].id)}),(n,i)=>(s(),r(g,null,[(s(),N(le,{to:"body"},[e("div",Pe,[D(re,{name:"toast"},{default:G(()=>[(s(!0),r(g,null,M(k(m),l=>(s(),N(ie,{key:l.id,message:l.message,type:l.type,duration:l.duration,onClose:()=>m.value=k(m).filter(U=>U.id!==l.id)},null,8,["message","type","duration","onClose"]))),128))]),_:1})])])),e("div",Ae,[i[2]||(i[2]=e("h3",{class:"text-xl font-bold mx-2 select-none my-3"},"Täze kafedra goşmak",-1)),e("div",Be,[Q(e("select",{class:"w-full border border-gray-300 rounded-md p-2 focus:outline-none","onUpdate:modelValue":i[0]||(i[0]=l=>w.value=l)},[(s(!0),r(g,null,M(k(T),l=>(s(),r("option",{class:"text-gray-600 dark:bg-[#171131ef] dark:text-white",key:l.id,value:l.id},f(l.name)+" fakulteti",9,Fe))),128))],512),[[Ce,w.value]])]),e("div",null,[e("div",Oe,[e("div",{class:"flex flex-wrap items-center gap-2 border border-gray-300 rounded-md px-2 py-1 cursor-text",onClick:d},[(s(!0),r(g,null,M(p.value,l=>(s(),r("div",{key:l.id,class:"flex items-center bg-blue-100 dark:bg-violet-600 text-blue-700 dark:text-white rounded-md px-2 py-1 text-sm select-none cursor-default"},[J(f(l.name)+" ",1),e("button",{onClick:ae(U=>c.value.delete(l.id),["stop","prevent"]),class:"ml-1 text-blue-700 dark:text-white focus:outline-none select-none"}," ✕ ",8,je)]))),128)),Q(e("input",{"onUpdate:modelValue":i[1]||(i[1]=l=>y.value=l),type:"text",placeholder:"",class:"flex-1 py-1 focus:outline-none"},null,512),[[ne,y.value]])]),D(de,{name:"dropdown"},{default:G(()=>[_.value?(s(),r("ul",Ee,[(s(!0),r(g,null,M(A.value,l=>(s(),r("li",{key:l.id,onMousedown:ae(U=>B(l),["prevent"]),class:v({"px-3 py-2 cursor-pointer select-none transition ease-in duration-200":!0,"bg-blue-100 text-blue-700 dark:bg-violet-600/25 dark:text-white":c.value.has(l.id),"hover:bg-blue-50 dark:hover:bg-[#261c52]":!c.value.has(l.id)})},f(l.name),43,Re))),128)),A.value.length===0?(s(),r("li",Ie," Maglumat gorunda kafedra tapylmady ")):S("",!0)])):S("",!0)]),_:1})])]),e("div",Ue,[e("button",{disabled:b.value,onClick:z,class:"flex w-50 px-4 py-2 my-2 justify-center rounded-lg border-none dark:border-violet-500/50 border-1 bg-gradient-to-r from-blue-400 to-blue-500 dark:from-violet-600 dark:to-violet-500 text-white hover:shadow-lg hover:shadow-blue-300/50 hover:ease-in ease-out duration-200 dark:hover:shadow-violet-500/50 select-none"},[D(Se,{class:v({hidden:!b.value})},null,8,["class"]),e("span",{class:v({hidden:b.value})},"Hasaba al",2)],8,Ve)])])],64))}},Ne=se(Ke,[["__scopeId","data-v-4fe298a1"]]),Ge={class:"w-full rounded-lg shadow-lg"},Qe={class:"pt-1 rounded-t-lg dark:bg-[#171131ef] bg-white"},qe={class:"flex items-center justify-between space-x-2 py-3 px-4"},We={class:"flex items-center"},Je={id:"dropdown",class:"relative inline-block text-left"},Xe={class:"absolute left-0 z-10 mt-2 w-24 origin-top-left rounded-md bg-white dark:bg-[#171131ef] shadow-lg ring-1 ring-white dark:ring-gray-800 ring-opacity-5"},Ye={class:"py-1"},Ze=["value","onClick"],et={class:"lg:w-1/3 md:w-1/3 w-2/3 flex items-center space-x-2"},tt=["disabled"],at={class:"w-full overflow-x-auto rounded-b-lg"},st={class:"w-full min-w-full table-auto bg-white dark:bg-[#171131ef]"},ot={class:"bg-gray-200 dark:bg-[#211849ef]"},rt={class:"border-y border-gray-300 dark:border-[#32237cef] px-4 py-2 break-words text-[0.8rem]"},lt={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},nt={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},dt={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},ut={class:"w-full flex items-center justify-center"},it={class:"inline-flex rounded-md shadow-xs",role:"group"},ct=["onClick"],vt=["onClick"],ft={class:"flex justify-center items-center mt-4 space-x-2 overflow-x-auto"},gt={key:2,class:"px-2 select-none"},pt=["onClick"],mt=["onClick"],bt={key:4,class:"px-2 select-none"},yt={class:"toast-container w-5/6 fixed top-25 md:top-auto md:bottom-5 right-5 md:w-1/4 flex flex-col-reverse space-y-2"},ht={__name:"HighSchoolDepartmentsDataTable",props:["data"],emits:["update"],setup(q,{emit:$}){X();const j=q,m=$;K(j,(o,a)=>{y.value=o.data,c.value=[...y.value]});const{isModalOpen:x,openModal:P,header:E,context:R}=ze(),{toasts:w,addToast:b}=ue(),T=Y(),{removeStatus:I,updateStatus:L}=W(T),y=u([]),c=u([]),_=u(null),A=u("p-4 py-2 my-2 rounded-full border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"),B=u("p-4 py-2 my-2 rounded-full border-none bg-gray-200 dark:bg-[#261953]"),p=u("name"),h=u("asc"),d=u(1),z=u(10),n=[10,20,50,100],i=u(""),l=u(!1),U=()=>{c.value=y.value.filter(o=>o.name.toLowerCase().includes(i.value.toLowerCase())),d.value=1,l.value=!0},ce=()=>{i.value="",c.value=[...y.value],d.value=1,l.value=!1},ee=H(()=>p.value?[...c.value].sort((o,a)=>o[p.value]<a[p.value]?h.value==="asc"?-1:1:o[p.value]>a[p.value]?h.value==="asc"?1:-1:0):y.value),ve=H(()=>{const o=(d.value-1)*z.value;return ee.value.slice(o,o+z.value)}),C=H(()=>Math.ceil(ee.value.length/z.value)),F=o=>{o>=1&&o<=C.value&&(d.value=o)},fe=o=>{z.value=parseInt(o,10),d.value=1,V.value=!1},ge=H(()=>{const o=Math.max(2,d.value-2);return Array.from({length:Math.max(0,d.value-o)},(a,t)=>o+t)}),pe=H(()=>{const o=Math.min(C.value-1,d.value+2);return Array.from({length:Math.max(0,o-d.value)},(a,t)=>d.value+t+1)}),te=o=>{p.value===o?h.value=h.value==="asc"?"desc":"asc":(p.value=o,h.value="asc")},V=u(!1);function me(){V.value=!V.value}function be(){V.value=!1}function ye(o){o.target.closest("#dropdown")||be()}function he(o,a,t){P(o,a),_.value=t}function ke(){x.value=!1,_.value=null}function xe(){x.value=!1,T.removeDepartment(_.value).then(()=>{m("update")}),_.value=null}return K(I,(o,a)=>{o&&(o==="success"?b("Kafedra ÝOM-dan üstünlikli ýok edildi","success"):o==="error"&&b("Ýok etme prosesinde ýalňyşlyk ýüze çykdy","error")),I.value=null}),Z(()=>{L.value&&(L.value==="success"?b("Kafedra üstünlikli üýtgedildi","success"):L.value==="error"&&b("Üýtgetme prosesinde ýalňyşlyk ýüze çykdy","error")),L.value=null}),window.addEventListener("click",ye),(o,a)=>(s(),r(g,null,[D(He,{"is-open":k(x),onClose:ke,onSubmit:xe,header:k(E),context:`"${k(R)}" ýok edilmegini tassyklaýarsyňyzmy?`},null,8,["is-open","header","context"]),e("div",Ge,[e("div",Qe,[e("div",qe,[e("div",We,[e("div",Je,[e("div",null,[e("button",{onClick:me,type:"button",class:"inline-flex transition duration-200 ease-in w-full justify-center rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#171131ef] dark:text-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-[#32237cef] focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-[#32237cef] focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-[#32237cef] select-none"}," Setir sany: "+f(z.value),1)]),D(de,{name:"fade-scale",onBeforeEnter:a[0]||(a[0]=t=>t.style.display="block"),onAfterLeave:a[1]||(a[1]=t=>t.style.display="none")},{default:G(()=>[Q(e("div",Xe,[e("div",Ye,[(s(),r(g,null,M(n,t=>e("button",{key:t,value:t,onClick:O=>fe(t),class:"w-full text-start text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#32237cef] select-none"},f(t)+" setir ",9,Ze)),64))])],512),[[$e,V.value]])]),_:1})])]),e("div",et,[e("button",{onClick:ce,class:v([{"opacity-0":!l.value},"p-2 text-sm rounded-xl shadow-md border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"]),disabled:!l.value},a[9]||(a[9]=[De('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 24 24" version="1.1" data-v-796b4781><title data-v-796b4781>Reload</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-796b4781><g id="Reload" data-v-796b4781><rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24" data-v-796b4781></rect><path d="M4,13 C4,17.4183 7.58172,21 12,21 C16.4183,21 20,17.4183 20,13 C20,8.58172 16.4183,5 12,5 C10.4407,5 8.98566,5.44609 7.75543,6.21762" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-796b4781></path><path d="M9.2384,1.89795 L7.49856,5.83917 C7.27552,6.34441 7.50429,6.9348 8.00954,7.15784 L11.9508,8.89768" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-796b4781></path></g></g></svg>',1)]),10,tt),Q(e("input",{"onUpdate:modelValue":a[2]||(a[2]=t=>i.value=t),type:"text",onKeyup:Te(U,["enter"]),placeholder:"Gözleg",class:"w-full dark:text-gray-300 transition duration-200 ease-in bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"},null,544),[[ne,i.value]])])])]),e("div",at,[e("table",st,[e("thead",ot,[e("tr",null,[a[12]||(a[12]=e("th",{class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-left text-[0.8rem]"}," T/B ",-1)),e("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:a[3]||(a[3]=t=>te("name"))},[a[10]||(a[10]=J(" KAFEDRA ")),e("span",{class:v([p.value==="name"?h.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),e("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:a[4]||(a[4]=t=>te("faculty"))},[a[11]||(a[11]=J(" FAKULTETI ")),e("span",{class:v([p.value==="faculty"?h.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),a[13]||(a[13]=e("th",{class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-center text-[0.8rem]"}," GURALLAR ",-1))])]),e("tbody",null,[(s(!0),r(g,null,M(ve.value,(t,O)=>(s(),r("tr",{key:t.id,class:"transition ease-in hover:ease-out duration-200 hover:bg-gray-100 dark:hover:bg-[#261953]"},[e("td",rt,f(O+1),1),e("td",lt,f(t.name),1),e("td",nt,f(t.faculty),1),e("td",dt,[e("div",ut,[e("div",it,[(s(),r("button",{type:"button",key:t.id,onClick:we=>k(Le).push(`/departments/edit/${t.id}`),class:"px-4 py-2 text-[0.8rem] font-medium bg-emerald-400 hover:bg-emerald-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-emerald-700 border border-gray-200 rounded-s-lg focus:z-10 focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 select-none"}," Üýtgetmek ",8,ct)),(s(),r("button",{type:"button",key:t.id,onClick:we=>he("Ýok etmek",t.name,t.instance_id),class:"px-4 py-2 text-[0.8rem] font-medium bg-red-400 hover:bg-red-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-pink-900 dark:hover:bg-pink-600 border border-gray-200 rounded-e-lg focus:z-10 focus:ring-2 focus:ring-red-500 dark:border-gray-700 dark:focus:ring-pink-500 select-none"}," Pozmak ",8,vt))])])])]))),128))])])])]),e("div",ft,[d.value!==1?(s(),r("button",{key:0,class:v(["select-none",A.value]),onClick:a[5]||(a[5]=t=>F(d.value-1))},a[14]||(a[14]=[e("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):S("",!0),d.value>3?(s(),r("button",{key:1,class:v(["select-none",B.value]),onClick:a[6]||(a[6]=t=>F(1))}," 1 ",2)):S("",!0),d.value>4?(s(),r("span",gt,"...")):S("",!0),(s(!0),r(g,null,M(ge.value,t=>(s(),r("button",{class:v(["select-none",B.value]),key:"before-"+t,onClick:O=>F(t)},f(t),11,pt))),128)),C.value!==0?(s(),r("button",{key:3,class:v(["select-none",A.value])},f(d.value),3)):S("",!0),(s(!0),r(g,null,M(pe.value,t=>(s(),r("button",{class:v(["select-none",B.value]),key:"after-"+t,onClick:O=>F(t)},f(t),11,mt))),128)),d.value<C.value-3?(s(),r("span",bt,"...")):S("",!0),d.value<C.value-2?(s(),r("button",{key:5,class:v(["select-none",B.value]),onClick:a[7]||(a[7]=t=>F(C.value))},f(C.value),3)):S("",!0),d.value!==C.value&&C.value!==0?(s(),r("button",{key:6,class:v(["select-none",A.value]),onClick:a[8]||(a[8]=t=>F(d.value+1))},a[15]||(a[15]=[e("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):S("",!0)]),(s(),N(le,{to:"body"},[e("div",yt,[D(re,{name:"toast"},{default:G(()=>[(s(!0),r(g,null,M(k(w),t=>(s(),N(ie,{key:t.id,message:t.message,type:t.type,duration:t.duration,onClose:()=>w.value=k(w).filter(O=>O.id!==t.id)},null,8,["message","type","duration","onClose"]))),128))]),_:1})])]))],64))}},kt=se(ht,[["__scopeId","data-v-796b4781"]]),xt={class:"w-full"},wt={class:"w-full"},Tt={__name:"HighSchoolDepartmentsView",setup(q){const $=X(),j=oe(),m=Y();Z(()=>{j.getHighSchoolFaculties($.params.id),m.getHighSchoolDepartments($.params.id)});const x=()=>{m.getHighSchoolDepartments($.params.id),m.getHighSchoolExcDepartments($.params.id)};return(P,E)=>(s(),r(g,null,[e("div",xt,[D(Ne,{onUpdate:x})]),e("div",wt,[D(kt,{data:k(m).highSchoolDepartments,onUpdate:x},null,8,["data"])])],64))}};export{Tt as default};
