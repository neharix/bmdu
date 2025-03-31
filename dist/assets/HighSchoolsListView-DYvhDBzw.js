import{_ as be,p as J,G as ee,s as te,r as l,C as S,o as oe,b as s,f as a,h as m,g as c,d as o,t as u,w as W,l as Y,v as pe,F as h,D as B,T as ye,n as d,H as Q,I as he,J as me,i as G,z as q,j as k,c as X,K as we,L as xe,u as Ce,x as _e}from"./index-m5t8ScRE.js";import{u as Me,_ as $e}from"./ConfirmModal-BKKkJeJh.js";import{u as Le,T as Se}from"./useToast-bDPrQYN3.js";import{_ as Be}from"./TheBreadcrumb-BhR2fDCA.js";/* empty css                                                     */const Te={class:"w-full rounded-lg shadow-lg"},Pe={class:"pt-1 rounded-t-lg dark:bg-[#171131ef] bg-white"},ze={class:"flex items-center justify-between space-x-2 py-3 px-4"},Ae={class:"flex items-center"},He={id:"dropdown",class:"relative inline-block text-left"},je={class:"absolute left-0 z-10 mt-2 w-24 origin-top-left rounded-md bg-white dark:bg-[#171131ef] shadow-lg ring-1 ring-white dark:ring-gray-800 ring-opacity-5"},Ve={class:"py-1"},De=["value","onClick"],Ge={class:"lg:w-1/3 md:w-1/3 w-2/3 flex items-center space-x-2"},Oe=["disabled"],Re={class:"w-full overflow-x-auto rounded-b-lg"},Ee={class:"w-full min-w-full table-auto bg-white dark:bg-[#171131ef]"},Ie={class:"bg-gray-200 dark:bg-[#211849ef]"},Ke={class:"border-y border-gray-300 dark:border-[#32237cef] px-4 py-2 break-words text-[0.8rem]"},Ne={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Ue={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Ze={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Fe={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Je={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},We={class:"w-full flex items-center justify-center"},Ye={class:"inline-flex rounded-md shadow-xs",role:"group"},Qe=["onClick"],qe=["onClick"],Xe=["onClick"],et={class:"flex justify-center items-center mt-4 space-x-2 overflow-x-auto"},tt={key:2,class:"px-2 select-none"},ot=["onClick"],rt=["onClick"],st={key:4,class:"px-2 select-none"},at={class:"toast-container w-5/6 fixed top-25 md:top-auto md:bottom-5 right-5 md:w-1/4 flex flex-col-reverse space-y-2"},nt={__name:"HighSchoolsDataTable",props:["data"],emits:["update"],setup(E,{emit:w}){const x=E,C=w;J(x,(r,e)=>{f.value=r.data,M.value=[...f.value]});const{isModalOpen:_,openModal:I,header:T,context:K}=Me(),{toasts:O,addToast:b}=Le(),N=ee(),{deleteStatus:U,updateStatus:P,createStatus:z}=te(N),f=l([]),M=l([]),A=l(null);x.data.length>0&&(f.value=x.data,M.value=[...f.value]);const R=l("p-4 py-2 my-2 rounded-full border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"),H=l("p-4 py-2 my-2 rounded-full border-none bg-gray-200 dark:bg-[#261953]"),i=l("name"),v=l("asc"),n=l(1),$=l(10),re=[10,20,50,100],j=l(""),V=l(!1),se=()=>{M.value=f.value.filter(r=>r.name.toLowerCase().includes(j.value.toLowerCase())),n.value=1,V.value=!0},ae=()=>{j.value="",M.value=[...f.value],n.value=1,V.value=!1},Z=S(()=>i.value?[...M.value].sort((r,e)=>r[i.value]<e[i.value]?v.value==="asc"?-1:1:r[i.value]>e[i.value]?v.value==="asc"?1:-1:0):f.value),ne=S(()=>{const r=(n.value-1)*$.value;return Z.value.slice(r,r+$.value)}),g=S(()=>Math.ceil(Z.value.length/$.value)),p=r=>{r>=1&&r<=g.value&&(n.value=r)},le=r=>{$.value=parseInt(r,10),n.value=1,L.value=!1},de=S(()=>{const r=Math.max(2,n.value-2);return Array.from({length:Math.max(0,n.value-r)},(e,t)=>r+t)}),ie=S(()=>{const r=Math.min(g.value-1,n.value+2);return Array.from({length:Math.max(0,r-n.value)},(e,t)=>n.value+t+1)}),D=r=>{i.value===r?v.value=v.value==="asc"?"desc":"asc":(i.value=r,v.value="asc")},L=l(!1);function ue(){L.value=!L.value}function ce(){L.value=!1}function ve(r){r.target.closest("#dropdown")||ce()}function ge(r,e,t){I(r,e),A.value=t}function fe(){_.value=!1,A.value=null}function ke(){_.value=!1,N.delete(A.value).then(()=>{C("update")}),A.value=null}return J(U,(r,e)=>{r&&(r==="success"?b("Ýokary okuw mekdebi üstünlikli ýok edildi","success"):r==="error"&&b("Ýok etme prosesinde ýalňyşlyk ýüze çykdy","error")),U.value=null}),oe(()=>{P.value&&(P.value==="success"?b("Ýokary okuw mekdebi üstünlikli üýtgedildi","success"):P.value==="error"&&b("Üýtgetme prosesinde ýalňyşlyk ýüze çykdy","error")),P.value=null,z.value&&(z.value==="success"?b("Ýokary okuw mekdebi üstünlikli hasaba alyndy","success"):z.value==="error"&&b("Hasaba alma prosesinde ýalňyşlyk ýüze çykdy","error")),z.value=null}),window.addEventListener("click",ve),(r,e)=>(s(),a(h,null,[m($e,{"is-open":c(_),onClose:fe,onSubmit:ke,header:c(T),context:`"${c(K)}" ýok edilmegini tassyklaýarsyňyzmy?`},null,8,["is-open","header","context"]),o("div",Te,[o("div",Pe,[o("div",ze,[o("div",Ae,[o("div",He,[o("div",null,[o("button",{onClick:ue,type:"button",class:"inline-flex transition duration-200 ease-in w-full justify-center rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#171131ef] dark:text-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-[#32237cef] focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-[#32237cef] focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-[#32237cef] select-none"}," Setir sany: "+u($.value),1)]),m(ye,{name:"fade-scale",onBeforeEnter:e[0]||(e[0]=t=>t.style.display="block"),onAfterLeave:e[1]||(e[1]=t=>t.style.display="none")},{default:W(()=>[Y(o("div",je,[o("div",Ve,[(s(),a(h,null,B(re,t=>o("button",{key:t,value:t,onClick:y=>le(t),class:"w-full text-start text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#32237cef] select-none"},u(t)+" setir ",9,De)),64))])],512),[[pe,L.value]])]),_:1})])]),o("div",Ge,[o("button",{onClick:ae,class:d([{"opacity-0":!V.value},"p-2 text-sm rounded-xl shadow-md border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"]),disabled:!V.value},e[11]||(e[11]=[Q('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 24 24" version="1.1" data-v-8c851850><title data-v-8c851850>Reload</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-8c851850><g id="Reload" data-v-8c851850><rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24" data-v-8c851850></rect><path d="M4,13 C4,17.4183 7.58172,21 12,21 C16.4183,21 20,17.4183 20,13 C20,8.58172 16.4183,5 12,5 C10.4407,5 8.98566,5.44609 7.75543,6.21762" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8c851850></path><path d="M9.2384,1.89795 L7.49856,5.83917 C7.27552,6.34441 7.50429,6.9348 8.00954,7.15784 L11.9508,8.89768" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8c851850></path></g></g></svg>',1)]),10,Oe),Y(o("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>j.value=t),type:"text",onKeyup:me(se,["enter"]),placeholder:"Gözleg",class:"w-full dark:text-gray-300 transition duration-200 ease-in bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"},null,544),[[he,j.value]])])])]),o("div",Re,[o("table",Ee,[o("thead",Ie,[o("tr",null,[e[16]||(e[16]=o("th",{class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-left text-[0.8rem]"}," T/B ",-1)),o("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:e[3]||(e[3]=t=>D("name"))},[e[12]||(e[12]=G(" ÝOKARY OKUW MEKDEBI ")),o("span",{class:d([i.value==="name"?v.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),o("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:e[4]||(e[4]=t=>D("students_count"))},[e[13]||(e[13]=G(" JEMI ")),o("span",{class:d([i.value==="students_count"?v.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),o("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:e[5]||(e[5]=t=>D("male_count"))},[e[14]||(e[14]=G(" OGLAN ")),o("span",{class:d([i.value==="male_count"?v.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),o("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:e[6]||(e[6]=t=>D("female_count"))},[e[15]||(e[15]=G(" GYZ ")),o("span",{class:d([i.value==="female_count"?v.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),e[17]||(e[17]=o("th",{class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-center text-[0.8rem]"}," GURALLAR ",-1))])]),o("tbody",null,[(s(!0),a(h,null,B(ne.value,(t,y)=>(s(),a("tr",{key:t.id,class:"transition ease-in hover:ease-out duration-200 hover:bg-gray-100 dark:hover:bg-[#261953]"},[o("td",Ke,u(y+1),1),o("td",Ne,u(t.name),1),o("td",Ue,u(t.students_count),1),o("td",Ze,u(t.male_count),1),o("td",Fe,u(t.female_count),1),o("td",Je,[o("div",We,[o("div",Ye,[(s(),a("button",{type:"button",key:t.id,onClick:F=>c(q).push(`/high-schools/edit/${t.id}`),class:"px-4 py-2 text-[0.8rem] font-medium bg-emerald-400 hover:bg-emerald-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-emerald-700 border border-gray-200 rounded-s-lg focus:z-10 focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 select-none",title:"Üýtgetmek"},e[18]||(e[18]=[Q('<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24" data-v-8c851850><title data-v-8c851850></title><g id="Complete" data-v-8c851850><g id="edit" data-v-8c851850><g data-v-8c851850><path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-8c851850></path><polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-8c851850></polygon></g></g></g></svg>',1)]),8,Qe)),(s(),a("button",{type:"button",key:t.id,onClick:F=>c(q).push(`/high-schools/view/${t.id}`),class:"px-4 py-2 text-[0.8rem] font-medium bg-violet-400 hover:bg-violet-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-violet-700 border border-gray-200 focus:z-10 focus:ring-2 focus:ring-violet-500 dark:border-gray-700 select-none",title:"Görmek"},e[19]||(e[19]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5",viewBox:"0 0 24 24",fill:"none"},[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z",fill:"currentColor"}),o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z",fill:"currentColor"})],-1)]),8,qe)),(s(),a("button",{type:"button",key:t.id,onClick:F=>ge("Ýok etmek",t.name,t.id),class:"px-4 py-2 text-[0.8rem] font-medium bg-red-400 hover:bg-red-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-pink-900 dark:hover:bg-pink-600 border border-gray-200 rounded-e-lg focus:z-10 focus:ring-2 focus:ring-red-500 dark:border-gray-700 dark:focus:ring-pink-500 select-none",title:"Pozmak"},e[20]||(e[20]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5",viewBox:"0 0 24 24",fill:"none"},[o("path",{d:"M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),8,Xe))])])])]))),128))])])])]),o("div",et,[n.value!==1?(s(),a("button",{key:0,class:d(["select-none",R.value]),onClick:e[7]||(e[7]=t=>p(n.value-1))},e[21]||(e[21]=[o("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):k("",!0),n.value>3?(s(),a("button",{key:1,class:d(["select-none",H.value]),onClick:e[8]||(e[8]=t=>p(1))}," 1 ",2)):k("",!0),n.value>4?(s(),a("span",tt,"...")):k("",!0),(s(!0),a(h,null,B(de.value,t=>(s(),a("button",{class:d(["select-none",H.value]),key:"before-"+t,onClick:y=>p(t)},u(t),11,ot))),128)),g.value!==0?(s(),a("button",{key:3,class:d(["select-none",R.value])},u(n.value),3)):k("",!0),(s(!0),a(h,null,B(ie.value,t=>(s(),a("button",{class:d(["select-none",H.value]),key:"after-"+t,onClick:y=>p(t)},u(t),11,rt))),128)),n.value<g.value-3?(s(),a("span",st,"...")):k("",!0),n.value<g.value-2?(s(),a("button",{key:5,class:d(["select-none",H.value]),onClick:e[9]||(e[9]=t=>p(g.value))},u(g.value),3)):k("",!0),n.value!==g.value&&g.value!==0?(s(),a("button",{key:6,class:d(["select-none",R.value]),onClick:e[10]||(e[10]=t=>p(n.value+1))},e[22]||(e[22]=[o("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):k("",!0)]),(s(),X(xe,{to:"body"},[o("div",at,[m(we,{name:"toast"},{default:W(()=>[(s(!0),a(h,null,B(c(O),t=>(s(),X(Se,{key:t.id,message:t.message,type:t.type,duration:t.duration,onClose:()=>O.value=c(O).filter(y=>y.id!==t.id)},null,8,["message","type","duration","onClose"]))),128))]),_:1})])]))],64))}},lt=be(nt,[["__scopeId","data-v-8c851850"]]),dt={class:"w-full"},it={key:0,class:"flex w-full h-[58vh] items-center justify-center dark:bg-[#171131ef] bg-white rounded-lg border border-gray-200 dark:border-[#36314e]"},ut={key:1},bt={__name:"HighSchoolsListView",setup(E){const w=ee(),{highSchools:x}=te(w),C=Ce();oe(()=>{C.isLoading=!0,w.getAllAdditional().then(()=>{C.isLoading=!1})});const _=[{path:"/high-schools",name:"Ýokary okuw mekdepleri"},{path:"/high-schools/add",name:"Goşmak"}];return(I,T)=>(s(),a("div",dt,[m(Be,{paths:_}),c(C).isLoading?(s(),a("div",it,[m(_e,{class:"w-24"})])):(s(),a("div",ut,[m(lt,{data:c(x),onUpdate:T[0]||(T[0]=K=>c(w).getAllAdditional())},null,8,["data"])]))]))}};export{bt as default};
