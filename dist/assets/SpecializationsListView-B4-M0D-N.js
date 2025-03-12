import{_ as pe,p as W,k as te,S as re,s as E,r as c,A as L,o as oe,b as a,f as s,h as T,g as i,d as r,t as u,w as Z,l as X,v as ye,F as w,B as A,T as me,n as l,C as he,E as xe,G as we,i as _,j as v,z as ee,c as K,H as _e,I as Ce,u as Me,x as Se}from"./index-DnGSU1Bb.js";import{_ as $e}from"./TheBreadcrumb-B0lWjjPw.js";import{u as ze,_ as Le}from"./useModalWindow-Bwp873Hd.js";import{u as Ae,T as Te}from"./useToast-DKLkbWQx.js";/* empty css                                                     */const Pe={class:"w-full rounded-lg shadow-lg"},Be={class:"pt-1 rounded-t-lg dark:bg-[#171131ef] bg-white"},Re={class:"flex items-center justify-between space-x-2 py-3 px-4"},He={class:"flex items-center"},je={id:"dropdown",class:"relative inline-block text-left"},De={class:"absolute left-0 z-10 mt-2 w-24 origin-top-left rounded-md bg-white dark:bg-[#171131ef] shadow-lg ring-1 ring-white dark:ring-gray-800 ring-opacity-5"},Ge={class:"py-1"},Ie=["value","onClick"],Ne={class:"lg:w-1/3 md:w-1/3 w-2/3 flex items-center space-x-2"},Oe=["disabled"],Ve={class:"w-full overflow-x-auto rounded-b-lg"},Ee={class:"w-full min-w-full table-auto bg-white dark:bg-[#171131ef]"},Ke={class:"bg-gray-200 dark:bg-[#211849ef]"},Fe={key:1,class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-center text-[0.8rem]"},Ue={class:"border-y border-gray-300 dark:border-[#32237cef] px-4 py-2 break-words text-[0.8rem]"},Ye={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},qe={key:0,class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Je={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Qe={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},We={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Ze={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Xe={key:1,class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},et={class:"w-full flex items-center justify-center"},tt={class:"inline-flex rounded-md shadow-xs",role:"group"},rt=["onClick"],ot=["onClick"],at=["onClick"],st={class:"flex justify-center items-center mt-4 space-x-2 overflow-x-auto"},nt={key:2,class:"px-2 select-none"},lt=["onClick"],it=["onClick"],dt={key:4,class:"px-2 select-none"},ut={class:"toast-container w-5/6 fixed top-25 md:top-auto md:bottom-5 right-5 md:w-1/4 flex flex-col-reverse space-y-2"},ct={__name:"SpecializationsDataTable",props:["data"],emits:["update"],setup(F,{emit:I}){const g=F,N=I;W(g,(o,t)=>{p.value=o.data,S.value=[...p.value]});const{isModalOpen:C,openModal:M,header:O,context:U}=ze(),{toasts:y,addToast:k}=Ae(),P=te(),Y=re(),{deleteStatus:q,updateStatus:B,createStatus:R}=E(Y),p=c([]),S=c([]),H=c(null);g.data.length>0&&(p.value=g.data,S.value=[...p.value]);const V=c("p-4 py-2 my-2 rounded-full border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"),j=c("p-4 py-2 my-2 rounded-full border-none bg-gray-200 dark:bg-[#261953]"),d=c("name"),f=c("asc"),n=c(1),$=c(10),ae=[10,20,50,100],D=c(""),G=c(!1),se=()=>{S.value=p.value.filter(o=>o.name.toLowerCase().includes(D.value.toLowerCase())),n.value=1,G.value=!0},ne=()=>{D.value="",S.value=[...p.value],n.value=1,G.value=!1},J=L(()=>d.value?[...S.value].sort((o,t)=>o[d.value]<t[d.value]?f.value==="asc"?-1:1:o[d.value]>t[d.value]?f.value==="asc"?1:-1:0):p.value),le=L(()=>{const o=(n.value-1)*$.value;return J.value.slice(o,o+$.value)}),b=L(()=>Math.ceil(J.value.length/$.value)),m=o=>{o>=1&&o<=b.value&&(n.value=o)},ie=o=>{$.value=parseInt(o,10),n.value=1,z.value=!1},de=L(()=>{const o=Math.max(2,n.value-2);return Array.from({length:Math.max(0,n.value-o)},(t,e)=>o+e)}),ue=L(()=>{const o=Math.min(b.value-1,n.value+2);return Array.from({length:Math.max(0,o-n.value)},(t,e)=>n.value+e+1)}),h=o=>{d.value===o?f.value=f.value==="asc"?"desc":"asc":(d.value=o,f.value="asc")},z=c(!1);function ce(){z.value=!z.value}function ve(){z.value=!1}function fe(o){o.target.closest("#dropdown")||ve()}function be(o,t,e){M(o,t),H.value=e}function ge(){C.value=!1,H.value=null}function ke(){C.value=!1,Y.delete(H.value).then(()=>{N("update")}),H.value=null}return W(q,(o,t)=>{o&&(o==="success"?k("Hünar üstünlikli ýok edildi","success"):o==="error"&&k("Ýok etme prosesinde ýalňyşlyk ýüze çykdy","error")),q.value=null}),oe(()=>{B.value&&(B.value==="success"?k("Hünär üstünlikli üýtgedildi","success"):B.value==="error"&&k("Üýtgetme prosesinde ýalňyşlyk ýüze çykdy","error")),B.value=null,R.value&&(R.value==="success"?k("Hünär üstünlikli hasaba alyndy","success"):R.value==="error"&&k("Hasaba alma prosesinde ýalňyşlyk ýüze çykdy","error")),R.value=null}),window.addEventListener("click",fe),(o,t)=>(a(),s(w,null,[T(Le,{"is-open":i(C),onClose:ge,onSubmit:ke,header:i(O),context:`"${i(U)}" ýok edilmegini tassyklaýarsyňyzmy?`},null,8,["is-open","header","context"]),r("div",Pe,[r("div",Be,[r("div",Re,[r("div",He,[r("div",je,[r("div",null,[r("button",{onClick:ce,type:"button",class:"inline-flex transition duration-200 ease-in w-full justify-center rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#171131ef] dark:text-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-[#32237cef] focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-[#32237cef] focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-[#32237cef] select-none"}," Setir sany: "+u($.value),1)]),T(me,{name:"fade-scale",onBeforeEnter:t[0]||(t[0]=e=>e.style.display="block"),onAfterLeave:t[1]||(t[1]=e=>e.style.display="none")},{default:Z(()=>[X(r("div",De,[r("div",Ge,[(a(),s(w,null,A(ae,e=>r("button",{key:e,value:e,onClick:x=>ie(e),class:"w-full text-start text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#32237cef] select-none"},u(e)+" setir ",9,Ie)),64))])],512),[[ye,z.value]])]),_:1})])]),r("div",Ne,[r("button",{onClick:ne,class:l([{"opacity-0":!G.value},"p-2 text-sm rounded-xl shadow-md border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"]),disabled:!G.value},t[13]||(t[13]=[he('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 24 24" version="1.1" data-v-c6bc31f2><title data-v-c6bc31f2>Reload</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-c6bc31f2><g id="Reload" data-v-c6bc31f2><rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24" data-v-c6bc31f2></rect><path d="M4,13 C4,17.4183 7.58172,21 12,21 C16.4183,21 20,17.4183 20,13 C20,8.58172 16.4183,5 12,5 C10.4407,5 8.98566,5.44609 7.75543,6.21762" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-c6bc31f2></path><path d="M9.2384,1.89795 L7.49856,5.83917 C7.27552,6.34441 7.50429,6.9348 8.00954,7.15784 L11.9508,8.89768" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-c6bc31f2></path></g></g></svg>',1)]),10,Oe),X(r("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>D.value=e),type:"text",onKeyup:we(se,["enter"]),placeholder:"Gözleg",class:"w-full dark:text-gray-300 transition duration-200 ease-in bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"},null,544),[[xe,D.value]])])])]),r("div",Ve,[r("table",Ee,[r("thead",Ke,[r("tr",null,[t[20]||(t[20]=r("th",{class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-left text-[0.8rem]"}," T/B ",-1)),r("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:t[3]||(t[3]=e=>h("name"))},[t[14]||(t[14]=_(" HÜNÄR ")),r("span",{class:l([d.value==="name"?f.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),!i(P).role==="root"?(a(),s("th",{key:0,class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:t[4]||(t[4]=e=>h("department"))},[t[15]||(t[15]=_(" KAFEDRASY ")),r("span",{class:l([d.value==="department"?f.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)])):v("",!0),r("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:t[5]||(t[5]=e=>h("classificator"))},[t[16]||(t[16]=_(" KLASSIFIKATORY ")),r("span",{class:l([d.value==="classificator"?f.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),r("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:t[6]||(t[6]=e=>h("students_count"))},[t[17]||(t[17]=_(" JEMI ")),r("span",{class:l([d.value==="students_count"?f.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),r("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:t[7]||(t[7]=e=>h("male_count"))},[t[18]||(t[18]=_(" OGLAN ")),r("span",{class:l([d.value==="male_count"?f.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),r("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:t[8]||(t[8]=e=>h("female_count"))},[t[19]||(t[19]=_(" GYZ ")),r("span",{class:l([d.value==="female_count"?f.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),i(P).role==="root"?(a(),s("th",Fe," GURALLAR ")):v("",!0)])]),r("tbody",null,[(a(!0),s(w,null,A(le.value,(e,x)=>(a(),s("tr",{key:e.id,class:"transition ease-in hover:ease-out duration-200 hover:bg-gray-100 dark:hover:bg-[#261953]"},[r("td",Ue,u(x+1),1),r("td",Ye,u(e.name),1),!i(P).role==="root"?(a(),s("td",qe,u(e.department),1)):v("",!0),r("td",Je,[r("div",{class:l(["w-max py-2 px-3 transition duration-200 ease-out select-none rounded-lg",{"hover:bg-red-500 dark:hover:bg-pink-900 hover:text-white":e.classificator==="Ýok","hover:bg-emerald-500 dark:hover:bg-emerald-700 hover:text-white":e.classificator!=="Ýok"}])},u(e.classificator),3)]),r("td",Qe,u(e.students_count),1),r("td",We,u(e.male_count),1),r("td",Ze,u(e.female_count),1),i(P).role==="root"?(a(),s("td",Xe,[r("div",et,[r("div",tt,[(a(),s("button",{type:"button",key:e.id,onClick:Q=>i(ee).push(`/specializations/edit/${e.id}`),class:"px-4 py-2 text-[0.8rem] font-medium bg-emerald-400 hover:bg-emerald-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-emerald-700 border border-gray-200 rounded-s-lg focus:z-10 focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 select-none"}," Üýtgetmek ",8,rt)),(a(),s("button",{type:"button",key:e.id,onClick:Q=>i(ee).push({name:"students-list",query:{specialization:e.id}}),class:"px-4 py-2 text-[0.8rem] font-medium bg-violet-400 hover:bg-violet-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-violet-700 border border-gray-200 focus:z-10 focus:ring-2 focus:ring-violet-500 dark:border-gray-700 select-none"}," Görmek ",8,ot)),(a(),s("button",{type:"button",key:e.id,onClick:Q=>be("Ýok etmek",e.name,e.id),class:"px-4 py-2 text-[0.8rem] font-medium bg-red-400 hover:bg-red-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-pink-900 dark:hover:bg-pink-600 border border-gray-200 rounded-e-lg focus:z-10 focus:ring-2 focus:ring-red-500 dark:border-gray-700 dark:focus:ring-pink-500 select-none"}," Pozmak ",8,at))])])])):v("",!0)]))),128))])])])]),r("div",st,[n.value!==1?(a(),s("button",{key:0,class:l(["select-none",V.value]),onClick:t[9]||(t[9]=e=>m(n.value-1))},t[21]||(t[21]=[r("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):v("",!0),n.value>3?(a(),s("button",{key:1,class:l(["select-none",j.value]),onClick:t[10]||(t[10]=e=>m(1))}," 1 ",2)):v("",!0),n.value>4?(a(),s("span",nt,"...")):v("",!0),(a(!0),s(w,null,A(de.value,e=>(a(),s("button",{class:l(["select-none",j.value]),key:"before-"+e,onClick:x=>m(e)},u(e),11,lt))),128)),b.value!==0?(a(),s("button",{key:3,class:l(["select-none",V.value])},u(n.value),3)):v("",!0),(a(!0),s(w,null,A(ue.value,e=>(a(),s("button",{class:l(["select-none",j.value]),key:"after-"+e,onClick:x=>m(e)},u(e),11,it))),128)),n.value<b.value-3?(a(),s("span",dt,"...")):v("",!0),n.value<b.value-2?(a(),s("button",{key:5,class:l(j.value),onClick:t[11]||(t[11]=e=>m(b.value))},u(b.value),3)):v("",!0),n.value!==b.value&&b.value!==0?(a(),s("button",{key:6,class:l(["select-none",V.value]),onClick:t[12]||(t[12]=e=>m(n.value+1))},t[22]||(t[22]=[r("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):v("",!0)]),(a(),K(Ce,{to:"body"},[r("div",ut,[T(_e,{name:"toast"},{default:Z(()=>[(a(!0),s(w,null,A(i(y),e=>(a(),K(Te,{key:e.id,message:e.message,type:e.type,duration:e.duration,onClose:()=>y.value=i(y).filter(x=>x.id!==e.id)},null,8,["message","type","duration","onClose"]))),128))]),_:1})])]))],64))}},vt=pe(ct,[["__scopeId","data-v-c6bc31f2"]]),ft={class:"w-full"},bt={key:1,class:"flex w-full h-[58vh] items-center justify-center dark:bg-[#171131ef] bg-white rounded-lg border border-gray-200 dark:border-[#36314e]"},gt={key:2},xt={__name:"SpecializationsListView",setup(F){const I=te(),g=re(),{specializationsAdditional:N}=E(g),{role:C}=E(I),M=Me();oe(()=>{M.isLoading=!0,g.getAllAdditional().then(()=>{M.isLoading=!1})});const O=[{path:"/specializations",name:"Hünärler"},{path:"/specializations/add",name:"Goşmak"}];return(U,y)=>(a(),s("div",ft,[i(C)==="root"?(a(),K($e,{key:0,paths:O})):v("",!0),i(M).isLoading?(a(),s("div",bt,[T(Se,{class:"w-24"})])):(a(),s("div",gt,[T(vt,{data:i(N),onUpdate:y[0]||(y[0]=k=>i(g).getAllAdditional())},null,8,["data"])]))]))}};export{xt as default};
