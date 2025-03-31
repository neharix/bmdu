import{_ as ye,p as q,Z as re,s as O,k as oe,r as u,C as S,o as se,b as s,f as a,h as A,g as d,d as r,t as c,w as Q,l as X,v as me,F as w,D as T,T as he,n as l,H as ee,I as we,J as xe,i as j,j as g,z as te,c as I,K as Ce,L as _e,u as Me,x as Le}from"./index-m5t8ScRE.js";import{_ as $e}from"./TheBreadcrumb-BhR2fDCA.js";import{u as Se,_ as Te}from"./ConfirmModal-BKKkJeJh.js";import{u as je,T as Ae}from"./useToast-bDPrQYN3.js";/* empty css                                                     */const Be={class:"w-full rounded-lg shadow-lg"},De={class:"pt-1 rounded-t-lg dark:bg-[#171131ef] bg-white"},He={class:"flex items-center justify-between space-x-2 py-3 px-4"},Pe={class:"flex items-center"},ze={id:"dropdown",class:"relative inline-block text-left"},Ve={class:"absolute left-0 z-10 mt-2 w-24 origin-top-left rounded-md bg-white dark:bg-[#171131ef] shadow-lg ring-1 ring-white dark:ring-gray-800 ring-opacity-5"},Re={class:"py-1"},Ge=["value","onClick"],Ee={class:"lg:w-1/3 md:w-1/3 w-2/3 flex items-center space-x-2"},Ne=["disabled"],Oe={class:"w-full overflow-x-auto rounded-b-lg"},Ie={class:"w-full min-w-full table-auto bg-white dark:bg-[#171131ef]"},Ze={class:"bg-gray-200 dark:bg-[#211849ef]"},Ue={key:0,class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-center text-[0.8rem]"},Ye={class:"border-y border-gray-300 dark:border-[#32237cef] px-4 py-2 break-words text-[0.8rem]"},Je={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Ke={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Fe={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},We={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},qe={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Qe={key:0,class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Xe={class:"w-full flex items-center justify-center"},et={class:"inline-flex rounded-md shadow-xs",role:"group"},tt=["onClick"],rt=["onClick"],ot=["onClick"],st={class:"flex justify-center items-center mt-4 space-x-2 overflow-x-auto"},at={key:2,class:"px-2 select-none"},nt=["onClick"],lt=["onClick"],dt={key:4,class:"px-2 select-none"},it={class:"toast-container w-5/6 fixed top-25 md:top-auto md:bottom-5 right-5 md:w-1/4 flex flex-col-reverse space-y-2"},ut={__name:"DegreesDataTable",props:["data"],emits:["update"],setup(Z,{emit:R}){const b=Z,G=R;q(b,(o,e)=>{p.value=o.data,_.value=[...p.value]});const{isModalOpen:x,openModal:C,header:E,context:U}=Se(),{toasts:y,addToast:k}=je(),Y=re(),{deleteStatus:J,updateStatus:B,createStatus:D}=O(Y),K=oe(),p=u([]),_=u([]),H=u(null);b.data.length>0&&(p.value=b.data,_.value=[...p.value]);const N=u("p-4 py-2 my-2 rounded-full border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"),P=u("p-4 py-2 my-2 rounded-full border-none bg-gray-200 dark:bg-[#261953]"),i=u("name"),v=u("asc"),n=u(1),M=u(10),ae=[10,20,50,100],z=u(""),V=u(!1),ne=()=>{_.value=p.value.filter(o=>o.name.toLowerCase().includes(z.value.toLowerCase())),n.value=1,V.value=!0},le=()=>{z.value="",_.value=[...p.value],n.value=1,V.value=!1},F=S(()=>i.value?[..._.value].sort((o,e)=>o[i.value]<e[i.value]?v.value==="asc"?-1:1:o[i.value]>e[i.value]?v.value==="asc"?1:-1:0):p.value),de=S(()=>{const o=(n.value-1)*M.value;return F.value.slice(o,o+M.value)}),f=S(()=>Math.ceil(F.value.length/M.value)),m=o=>{o>=1&&o<=f.value&&(n.value=o)},ie=o=>{M.value=parseInt(o,10),n.value=1,$.value=!1},ue=S(()=>{const o=Math.max(2,n.value-2);return Array.from({length:Math.max(0,n.value-o)},(e,t)=>o+t)}),ce=S(()=>{const o=Math.min(f.value-1,n.value+2);return Array.from({length:Math.max(0,o-n.value)},(e,t)=>n.value+t+1)}),L=o=>{i.value===o?v.value=v.value==="asc"?"desc":"asc":(i.value=o,v.value="asc")},$=u(!1);function ve(){$.value=!$.value}function ge(){$.value=!1}function fe(o){o.target.closest("#dropdown")||ge()}function be(o,e,t){C(o,e),H.value=t}function ke(){x.value=!1,H.value=null}function pe(){x.value=!1,Y.delete(H.value).then(()=>{G("update")}),H.value=null}return q(J,(o,e)=>{o&&(o==="success"?k("Hünär derejesi üstünlikli ýok edildi","success"):o==="error"&&k("Ýok etme prosesinde ýalňyşlyk ýüze çykdy","error")),J.value=null}),se(()=>{B.value&&(B.value==="success"?k("Hünär derejesi üstünlikli üýtgedildi","success"):B.value==="error"&&k("Üýtgetme prosesinde ýalňyşlyk ýüze çykdy","error")),B.value=null,D.value&&(D.value==="success"?k("Hünär derejesi üstünlikli hasaba alyndy","success"):D.value==="error"&&k("Hasaba alma prosesinde ýalňyşlyk ýüze çykdy","error")),D.value=null}),window.addEventListener("click",fe),(o,e)=>(s(),a(w,null,[A(Te,{"is-open":d(x),onClose:ke,onSubmit:pe,header:d(E),context:`"${d(U)}" ýok edilmegini tassyklaýarsyňyzmy?`},null,8,["is-open","header","context"]),r("div",Be,[r("div",De,[r("div",He,[r("div",Pe,[r("div",ze,[r("div",null,[r("button",{onClick:ve,type:"button",class:"inline-flex transition duration-200 ease-in w-full justify-center rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#171131ef] dark:text-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-[#32237cef] focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-[#32237cef] focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-[#32237cef] select-none"}," Setir sany: "+c(M.value),1)]),A(he,{name:"fade-scale",onBeforeEnter:e[0]||(e[0]=t=>t.style.display="block"),onAfterLeave:e[1]||(e[1]=t=>t.style.display="none")},{default:Q(()=>[X(r("div",Ve,[r("div",Re,[(s(),a(w,null,T(ae,t=>r("button",{key:t,value:t,onClick:h=>ie(t),class:"w-full text-start text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#32237cef] select-none"},c(t)+" setir ",9,Ge)),64))])],512),[[me,$.value]])]),_:1})])]),r("div",Ee,[r("button",{onClick:le,class:l([{"opacity-0":!V.value},"p-2 text-sm rounded-xl shadow-md border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"]),disabled:!V.value},e[12]||(e[12]=[ee('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 24 24" version="1.1" data-v-a2254a35><title data-v-a2254a35>Reload</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-a2254a35><g id="Reload" data-v-a2254a35><rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24" data-v-a2254a35></rect><path d="M4,13 C4,17.4183 7.58172,21 12,21 C16.4183,21 20,17.4183 20,13 C20,8.58172 16.4183,5 12,5 C10.4407,5 8.98566,5.44609 7.75543,6.21762" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-a2254a35></path><path d="M9.2384,1.89795 L7.49856,5.83917 C7.27552,6.34441 7.50429,6.9348 8.00954,7.15784 L11.9508,8.89768" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-a2254a35></path></g></g></svg>',1)]),10,Ne),X(r("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>z.value=t),type:"text",onKeyup:xe(ne,["enter"]),placeholder:"Gözleg",class:"w-full dark:text-gray-300 transition duration-200 ease-in bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"},null,544),[[we,z.value]])])])]),r("div",Oe,[r("table",Ie,[r("thead",Ze,[r("tr",null,[e[18]||(e[18]=r("th",{class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-left text-[0.8rem]"}," T/B ",-1)),r("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:e[3]||(e[3]=t=>L("name"))},[e[13]||(e[13]=j(" HÜNÄR DEREJESI ")),r("span",{class:l([i.value==="name"?v.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),r("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:e[4]||(e[4]=t=>L("duration"))},[e[14]||(e[14]=j(" DOWAMLYLYGY ")),r("span",{class:l([i.value==="duration"?v.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),r("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:e[5]||(e[5]=t=>L("students_count"))},[e[15]||(e[15]=j(" JEMI ")),r("span",{class:l([i.value==="students_count"?v.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),r("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:e[6]||(e[6]=t=>L("male_count"))},[e[16]||(e[16]=j(" OGLAN ")),r("span",{class:l([i.value==="male_count"?v.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),r("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:e[7]||(e[7]=t=>L("female_count"))},[e[17]||(e[17]=j(" GYZ ")),r("span",{class:l([i.value==="female_count"?v.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),d(K).user.is_superuser?(s(),a("th",Ue," GURALLAR ")):g("",!0)])]),r("tbody",null,[(s(!0),a(w,null,T(de.value,(t,h)=>(s(),a("tr",{key:t.id,class:"transition ease-in hover:ease-out duration-200 hover:bg-gray-100 dark:hover:bg-[#261953]"},[r("td",Ye,c(h+1),1),r("td",Je,c(t.name),1),r("td",Ke,c(t.duration)+" ýyl ",1),r("td",Fe,c(t.students_count),1),r("td",We,c(t.male_count),1),r("td",qe,c(t.female_count),1),d(K).user.is_superuser?(s(),a("td",Qe,[r("div",Xe,[r("div",et,[(s(),a("button",{type:"button",key:t.id,onClick:W=>d(te).push(`/degrees/edit/${t.id}`),title:"Üýtgetmek",class:"px-4 py-2 text-[0.8rem] font-medium bg-emerald-400 hover:bg-emerald-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-emerald-700 border border-gray-200 rounded-s-lg focus:z-10 focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 select-none"},e[19]||(e[19]=[ee('<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24" data-v-a2254a35><title data-v-a2254a35></title><g id="Complete" data-v-a2254a35><g id="edit" data-v-a2254a35><g data-v-a2254a35><path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-a2254a35></path><polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-a2254a35></polygon></g></g></g></svg>',1)]),8,tt)),(s(),a("button",{type:"button",key:t.id,onClick:W=>d(te).push({name:"students-list",query:{degree:t.id}}),class:"px-4 py-2 text-[0.8rem] font-medium bg-violet-400 hover:bg-violet-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-violet-700 border border-gray-200 focus:z-10 focus:ring-2 focus:ring-violet-500 dark:border-gray-700 select-none",title:"Görmek"},e[20]||(e[20]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5",viewBox:"0 0 24 24",fill:"none"},[r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z",fill:"currentColor"}),r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z",fill:"currentColor"})],-1)]),8,rt)),(s(),a("button",{type:"button",key:t.id,onClick:W=>be("Ýok etmek",t.name,t.id),class:"px-4 py-2 text-[0.8rem] font-medium bg-red-400 hover:bg-red-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-pink-900 dark:hover:bg-pink-600 border border-gray-200 rounded-e-lg focus:z-10 focus:ring-2 focus:ring-red-500 dark:border-gray-700 dark:focus:ring-pink-500 select-none",title:"Pozmak"},e[21]||(e[21]=[r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5",viewBox:"0 0 24 24",fill:"none"},[r("path",{d:"M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),8,ot))])])])):g("",!0)]))),128))])])])]),r("div",st,[n.value!==1?(s(),a("button",{key:0,class:l(["select-none",N.value]),onClick:e[8]||(e[8]=t=>m(n.value-1))},e[22]||(e[22]=[r("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):g("",!0),n.value>3?(s(),a("button",{key:1,class:l(["select-none",P.value]),onClick:e[9]||(e[9]=t=>m(1))}," 1 ",2)):g("",!0),n.value>4?(s(),a("span",at,"...")):g("",!0),(s(!0),a(w,null,T(ue.value,t=>(s(),a("button",{class:l(["select-none",P.value]),key:"before-"+t,onClick:h=>m(t)},c(t),11,nt))),128)),f.value!==0?(s(),a("button",{key:3,class:l(["select-none",N.value])},c(n.value),3)):g("",!0),(s(!0),a(w,null,T(ce.value,t=>(s(),a("button",{class:l(["select-none",P.value]),key:"after-"+t,onClick:h=>m(t)},c(t),11,lt))),128)),n.value<f.value-3?(s(),a("span",dt,"...")):g("",!0),n.value<f.value-2?(s(),a("button",{key:5,class:l(P.value),onClick:e[10]||(e[10]=t=>m(f.value))},c(f.value),3)):g("",!0),n.value!==f.value&&f.value!==0?(s(),a("button",{key:6,class:l(["select-none",N.value]),onClick:e[11]||(e[11]=t=>m(n.value+1))},e[23]||(e[23]=[r("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):g("",!0)]),(s(),I(_e,{to:"body"},[r("div",it,[A(Ce,{name:"toast"},{default:Q(()=>[(s(!0),a(w,null,T(d(y),t=>(s(),I(Ae,{key:t.id,message:t.message,type:t.type,duration:t.duration,onClose:()=>y.value=d(y).filter(h=>h.id!==t.id)},null,8,["message","type","duration","onClose"]))),128))]),_:1})])]))],64))}},ct=ye(ut,[["__scopeId","data-v-a2254a35"]]),vt={class:"w-full"},gt={key:1,class:"flex w-full h-[58vh] items-center justify-center dark:bg-[#171131ef] bg-white rounded-lg border border-gray-200 dark:border-[#36314e]"},ft={key:2},ht={__name:"DegreesListView",setup(Z){const R=oe(),b=re(),{degreesAdditional:G}=O(b),{user:x}=O(R),C=Me();se(()=>{C.isLoading=!0,b.getAllAdditional().then(()=>{C.isLoading=!1})});const E=[{path:"/degrees",name:"Hünär derejeleri"},{path:"/degrees/add",name:"Goşmak"}];return(U,y)=>(s(),a("div",vt,[d(x).is_superuser?(s(),I($e,{key:0,paths:E})):g("",!0),d(C).isLoading?(s(),a("div",gt,[A(Le,{class:"w-24"})])):(s(),a("div",ft,[A(ct,{data:d(G),onUpdate:y[0]||(y[0]=k=>d(b).getAllAdditional())},null,8,["data"])]))]))}};export{ht as default};
