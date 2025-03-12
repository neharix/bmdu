import{_ as ye,p as W,Z as te,s as O,k as oe,r as i,A as z,o as re,b as a,f as s,h as S,g as l,d as o,t as c,w as Y,l as X,v as pe,F as x,B as L,T as me,n as d,C as he,E as xe,G as we,i as D,j as v,z as ee,c as H,H as _e,I as Ce,u as Me,x as $e}from"./index-DnGSU1Bb.js";import{_ as ze}from"./TheBreadcrumb-B0lWjjPw.js";import{u as Le,_ as Se}from"./useModalWindow-Bwp873Hd.js";import{u as Te,T as Ae}from"./useToast-DKLkbWQx.js";/* empty css                                                     */const Pe={class:"w-full rounded-lg shadow-lg"},Be={class:"pt-1 rounded-t-lg dark:bg-[#171131ef] bg-white"},Ne={class:"flex items-center justify-between space-x-2 py-3 px-4"},je={class:"flex items-center"},Ge={id:"dropdown",class:"relative inline-block text-left"},De={class:"absolute left-0 z-10 mt-2 w-24 origin-top-left rounded-md bg-white dark:bg-[#171131ef] shadow-lg ring-1 ring-white dark:ring-gray-800 ring-opacity-5"},Re={class:"py-1"},Ve=["value","onClick"],Ee={class:"lg:w-1/3 md:w-1/3 w-2/3 flex items-center space-x-2"},Ie=["disabled"],Oe={class:"w-full overflow-x-auto rounded-b-lg"},He={class:"w-full min-w-full table-auto bg-white dark:bg-[#171131ef]"},Ue={class:"bg-gray-200 dark:bg-[#211849ef]"},Fe={key:0,class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-center text-[0.8rem]"},Ke={class:"border-y border-gray-300 dark:border-[#32237cef] px-4 py-2 break-words text-[0.8rem]"},Ze={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},qe={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Je={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Qe={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},We={key:0,class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Ye={class:"w-full flex items-center justify-center"},Xe={class:"inline-flex rounded-md shadow-xs",role:"group"},et=["onClick"],tt=["onClick"],ot=["onClick"],rt={class:"flex justify-center items-center mt-4 space-x-2 overflow-x-auto"},at={key:2,class:"px-2 select-none"},st=["onClick"],nt=["onClick"],lt={key:4,class:"px-2 select-none"},it={class:"toast-container w-5/6 fixed top-25 md:top-auto md:bottom-5 right-5 md:w-1/4 flex flex-col-reverse space-y-2"},dt={__name:"NationalizationsDataTable",props:["data"],emits:["update"],setup(U,{emit:R}){const g=U,V=R;W(g,(r,t)=>{y.value=r.data,C.value=[...y.value]});const{isModalOpen:w,openModal:_,header:E,context:F}=Le(),{toasts:p,addToast:k}=Te(),K=te(),{deleteStatus:Z,updateStatus:T,createStatus:A}=O(K),q=oe(),y=i([]),C=i([]),P=i(null);g.data.length>0&&(y.value=g.data,C.value=[...y.value]);const I=i("p-4 py-2 my-2 rounded-full border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"),B=i("p-4 py-2 my-2 rounded-full border-none bg-gray-200 dark:bg-[#261953]"),u=i("name"),f=i("asc"),n=i(1),M=i(10),ae=[10,20,50,100],N=i(""),j=i(!1),se=()=>{C.value=y.value.filter(r=>r.name.toLowerCase().includes(N.value.toLowerCase())),n.value=1,j.value=!0},ne=()=>{N.value="",C.value=[...y.value],n.value=1,j.value=!1},J=z(()=>u.value?[...C.value].sort((r,t)=>r[u.value]<t[u.value]?f.value==="asc"?-1:1:r[u.value]>t[u.value]?f.value==="asc"?1:-1:0):y.value),le=z(()=>{const r=(n.value-1)*M.value;return J.value.slice(r,r+M.value)}),b=z(()=>Math.ceil(J.value.length/M.value)),m=r=>{r>=1&&r<=b.value&&(n.value=r)},ie=r=>{M.value=parseInt(r,10),n.value=1,$.value=!1},de=z(()=>{const r=Math.max(2,n.value-2);return Array.from({length:Math.max(0,n.value-r)},(t,e)=>r+e)}),ue=z(()=>{const r=Math.min(b.value-1,n.value+2);return Array.from({length:Math.max(0,r-n.value)},(t,e)=>n.value+e+1)}),G=r=>{u.value===r?f.value=f.value==="asc"?"desc":"asc":(u.value=r,f.value="asc")},$=i(!1);function ce(){$.value=!$.value}function ve(){$.value=!1}function fe(r){r.target.closest("#dropdown")||ve()}function be(r,t,e){_(r,t),P.value=e}function ge(){w.value=!1,P.value=null}function ke(){w.value=!1,K.delete(P.value).then(()=>{V("update")}),P.value=null}return W(Z,(r,t)=>{r&&(r==="success"?k("Millet üstünlikli ýok edildi","success"):r==="error"&&k("Ýok etme prosesinde ýalňyşlyk ýüze çykdy","error")),Z.value=null}),re(()=>{T.value&&(T.value==="success"?k("Millet üstünlikli üýtgedildi","success"):T.value==="error"&&k("Üýtgetme prosesinde ýalňyşlyk ýüze çykdy","error")),T.value=null,A.value&&(A.value==="success"?k("Millet üstünlikli hasaba alyndy","success"):A.value==="error"&&k("Hasaba alma prosesinde ýalňyşlyk ýüze çykdy","error")),A.value=null}),window.addEventListener("click",fe),(r,t)=>(a(),s(x,null,[S(Se,{"is-open":l(w),onClose:ge,onSubmit:ke,header:l(E),context:`"${l(F)}" ýok edilmegini tassyklaýarsyňyzmy?`},null,8,["is-open","header","context"]),o("div",Pe,[o("div",Be,[o("div",Ne,[o("div",je,[o("div",Ge,[o("div",null,[o("button",{onClick:ce,type:"button",class:"inline-flex transition duration-200 ease-in w-full justify-center rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#171131ef] dark:text-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-[#32237cef] focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-[#32237cef] focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-[#32237cef] select-none"}," Setir sany: "+c(M.value),1)]),S(me,{name:"fade-scale",onBeforeEnter:t[0]||(t[0]=e=>e.style.display="block"),onAfterLeave:t[1]||(t[1]=e=>e.style.display="none")},{default:Y(()=>[X(o("div",De,[o("div",Re,[(a(),s(x,null,L(ae,e=>o("button",{key:e,value:e,onClick:h=>ie(e),class:"w-full text-start text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#32237cef] select-none"},c(e)+" setir ",9,Ve)),64))])],512),[[pe,$.value]])]),_:1})])]),o("div",Ee,[o("button",{onClick:ne,class:d([{"opacity-0":!j.value},"p-2 text-sm rounded-xl shadow-md border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"]),disabled:!j.value},t[11]||(t[11]=[he('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 24 24" version="1.1" data-v-875f2b96><title data-v-875f2b96>Reload</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-875f2b96><g id="Reload" data-v-875f2b96><rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24" data-v-875f2b96></rect><path d="M4,13 C4,17.4183 7.58172,21 12,21 C16.4183,21 20,17.4183 20,13 C20,8.58172 16.4183,5 12,5 C10.4407,5 8.98566,5.44609 7.75543,6.21762" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-875f2b96></path><path d="M9.2384,1.89795 L7.49856,5.83917 C7.27552,6.34441 7.50429,6.9348 8.00954,7.15784 L11.9508,8.89768" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-875f2b96></path></g></g></svg>',1)]),10,Ie),X(o("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>N.value=e),type:"text",onKeyup:we(se,["enter"]),placeholder:"Gözleg",class:"w-full dark:text-gray-300 transition duration-200 ease-in bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"},null,544),[[xe,N.value]])])])]),o("div",Oe,[o("table",He,[o("thead",Ue,[o("tr",null,[t[16]||(t[16]=o("th",{class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-left text-[0.8rem]"}," T/B ",-1)),o("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:t[3]||(t[3]=e=>G("name"))},[t[12]||(t[12]=D(" MILLET ")),o("span",{class:d([u.value==="name"?f.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),o("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:t[4]||(t[4]=e=>G("students_count"))},[t[13]||(t[13]=D(" JEMI ")),o("span",{class:d([u.value==="students_count"?f.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),o("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:t[5]||(t[5]=e=>G("male_count"))},[t[14]||(t[14]=D(" OGLAN ")),o("span",{class:d([u.value==="male_count"?f.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),o("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:t[6]||(t[6]=e=>G("female_count"))},[t[15]||(t[15]=D(" GYZ ")),o("span",{class:d([u.value==="female_count"?f.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),l(q).user.is_superuser?(a(),s("th",Fe," GURALLAR ")):v("",!0)])]),o("tbody",null,[(a(!0),s(x,null,L(le.value,(e,h)=>(a(),s("tr",{key:e.id,class:"transition ease-in hover:ease-out duration-200 hover:bg-gray-100 dark:hover:bg-[#261953]"},[o("td",Ke,c(h+1),1),o("td",Ze,c(e.name),1),o("td",qe,c(e.students_count),1),o("td",Je,c(e.male_count),1),o("td",Qe,c(e.female_count),1),l(q).user.is_superuser?(a(),s("td",We,[o("div",Ye,[o("div",Xe,[(a(),s("button",{type:"button",key:e.id,onClick:Q=>l(ee).push(`/nationalizations/edit/${e.id}`),class:"px-4 py-2 text-[0.8rem] font-medium bg-emerald-400 hover:bg-emerald-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-emerald-700 border border-gray-200 rounded-s-lg focus:z-10 focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 select-none"}," Üýtgetmek ",8,et)),(a(),s("button",{type:"button",key:e.id,onClick:Q=>l(ee).push({name:"students-list",query:{nationality:e.id}}),class:"px-4 py-2 text-[0.8rem] font-medium bg-violet-400 hover:bg-violet-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-violet-700 border border-gray-200 focus:z-10 focus:ring-2 focus:ring-violet-500 dark:border-gray-700 select-none"}," Görmek ",8,tt)),(a(),s("button",{type:"button",key:e.id,onClick:Q=>be("Ýok etmek",e.name,e.id),class:"px-4 py-2 text-[0.8rem] font-medium bg-red-400 hover:bg-red-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-pink-900 dark:hover:bg-pink-600 border border-gray-200 rounded-e-lg focus:z-10 focus:ring-2 focus:ring-red-500 dark:border-gray-700 dark:focus:ring-pink-500 select-none"}," Pozmak ",8,ot))])])])):v("",!0)]))),128))])])])]),o("div",rt,[n.value!==1?(a(),s("button",{key:0,class:d(["select-none",I.value]),onClick:t[7]||(t[7]=e=>m(n.value-1))},t[17]||(t[17]=[o("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):v("",!0),n.value>3?(a(),s("button",{key:1,class:d(["select-none",B.value]),onClick:t[8]||(t[8]=e=>m(1))}," 1 ",2)):v("",!0),n.value>4?(a(),s("span",at,"...")):v("",!0),(a(!0),s(x,null,L(de.value,e=>(a(),s("button",{class:d(["select-none",B.value]),key:"before-"+e,onClick:h=>m(e)},c(e),11,st))),128)),b.value!==0?(a(),s("button",{key:3,class:d(["select-none",I.value])},c(n.value),3)):v("",!0),(a(!0),s(x,null,L(ue.value,e=>(a(),s("button",{class:d(["select-none",B.value]),key:"after-"+e,onClick:h=>m(e)},c(e),11,nt))),128)),n.value<b.value-3?(a(),s("span",lt,"...")):v("",!0),n.value<b.value-2?(a(),s("button",{key:5,class:d(B.value),onClick:t[9]||(t[9]=e=>m(b.value))},c(b.value),3)):v("",!0),n.value!==b.value&&b.value!==0?(a(),s("button",{key:6,class:d(["select-none",I.value]),onClick:t[10]||(t[10]=e=>m(n.value+1))},t[18]||(t[18]=[o("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):v("",!0)]),(a(),H(Ce,{to:"body"},[o("div",it,[S(_e,{name:"toast"},{default:Y(()=>[(a(!0),s(x,null,L(l(p),e=>(a(),H(Ae,{key:e.id,message:e.message,type:e.type,duration:e.duration,onClose:()=>p.value=l(p).filter(h=>h.id!==e.id)},null,8,["message","type","duration","onClose"]))),128))]),_:1})])]))],64))}},ut=ye(dt,[["__scopeId","data-v-875f2b96"]]),ct={class:"w-full"},vt={key:1,class:"flex w-full h-[58vh] items-center justify-center dark:bg-[#171131ef] bg-white rounded-lg border border-gray-200 dark:border-[#36314e]"},ft={key:2},mt={__name:"NationalizationsListView",setup(U){const R=oe(),g=te(),{nationalizationsAdditional:V}=O(g),{user:w}=O(R),_=Me();re(()=>{_.isLoading=!0,g.getAllAdditional().then(()=>{_.isLoading=!1})});const E=[{path:"/nationalizations",name:"Milletler"},{path:"/nationalizations/add",name:"Goşmak"}];return(F,p)=>(a(),s("div",ct,[l(w).is_superuser?(a(),H(ze,{key:0,paths:E})):v("",!0),l(_).isLoading?(a(),s("div",vt,[S($e,{class:"w-24"})])):(a(),s("div",ft,[S(ut,{data:l(V),onUpdate:p[0]||(p[0]=k=>l(g).getAllAdditional())},null,8,["data"])]))]))}};export{mt as default};
