import{_ as we}from"./TheBreadcrumb-B0lWjjPw.js";import{_ as be,p as X,aj as F,s as E,r as y,A as h,b as a,f as u,h as v,g as d,d as e,t as n,w as k,l as Z,F as C,B,v as Ve,T as me,n as P,C as Me,E as ye,G as _e,i as xe,z as ee,j as T,c as S,H as J,I as K,u as te,Y as Ce,x as le,o as He,L as w,k as $e}from"./index-DnGSU1Bb.js";import{u as je,_ as Pe}from"./useModalWindow-Bwp873Hd.js";import{u as W,T as Q}from"./useToast-DKLkbWQx.js";/* empty css                                                     */const Te={class:"w-full rounded-lg shadow-lg"},Be={class:"pt-1 rounded-t-lg dark:bg-[#171131ef] bg-white"},Se={class:"flex items-center justify-between space-x-2 py-3 px-4"},Le={class:"flex items-center"},ze={id:"dropdown",class:"relative inline-block text-left"},Ae={class:"absolute left-0 z-10 mt-2 w-24 origin-top-left rounded-md bg-white dark:bg-[#171131ef] shadow-lg ring-1 ring-white dark:ring-gray-800 ring-opacity-5"},De={class:"py-1"},Ye=["value","onClick"],Ie={class:"lg:w-1/3 md:w-1/3 w-2/3 flex items-center space-x-2"},Re=["disabled"],Ue={class:"w-full overflow-x-auto rounded-b-lg"},Ge={class:"w-full min-w-full table-auto bg-white dark:bg-[#171131ef]"},Oe={class:"bg-gray-200 dark:bg-[#211849ef]"},Ne={class:"border-y border-gray-300 dark:border-[#32237cef] px-4 py-2 break-words text-[0.8rem]"},Ee={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Fe={class:"border-y border-gray-300 dark:border-[#32237cef] p-2 break-words text-[0.8rem]"},Je={class:"w-full flex items-center justify-center"},Ke={class:"inline-flex rounded-md shadow-xs",role:"group"},We=["onClick"],Qe=["onClick"],qe={class:"flex justify-center items-center mt-4 space-x-2 overflow-x-auto"},Xe={key:2,class:"px-2 select-none"},Ze=["onClick"],et=["onClick"],tt={key:4,class:"px-2 select-none"},lt={class:"toast-container w-5/6 fixed top-25 md:top-auto md:bottom-5 right-5 md:w-1/4 flex flex-col-reverse space-y-2"},rt={__name:"TeachersDataTable",props:["data"],emits:["update"],setup(z,{emit:c}){const b=z,V=c;X(b,(i,o)=>{H.value=i.data,L.value=[...H.value]});const{isModalOpen:M,openModal:g,header:$,context:_}=je(),{toasts:m,addToast:t}=W(),x=F(),{deactivateStatus:A}=E(x),H=y([]),L=y([]),D=y(null);b.data.length>0&&(H.value=b.data,console.log(H.value),L.value=[...H.value]);const R=y("p-4 py-2 my-2 rounded-full border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"),l=y("p-4 py-2 my-2 rounded-full border-none bg-gray-200 dark:bg-[#261953]"),s=y("sender"),p=y("asc"),f=y(1),U=y(10),re=[10,20,50,100],O=y(""),N=y(!1),se=()=>{L.value=H.value.filter(i=>i.sender.toLowerCase().includes(O.value.toLowerCase())),f.value=1,N.value=!0},ae=()=>{O.value="",L.value=[...H.value],f.value=1,N.value=!1},q=h(()=>s.value?[...L.value].sort((i,o)=>i[s.value]<o[s.value]?p.value==="asc"?-1:1:i[s.value]>o[s.value]?p.value==="asc"?1:-1:0):H.value),oe=h(()=>{const i=(f.value-1)*U.value;return q.value.slice(i,i+U.value)}),j=h(()=>Math.ceil(q.value.length/U.value)),Y=i=>{i>=1&&i<=j.value&&(f.value=i)},ne=i=>{U.value=parseInt(i,10),f.value=1,G.value=!1},de=h(()=>{const i=Math.max(2,f.value-2);return Array.from({length:Math.max(0,f.value-i)},(o,r)=>i+r)}),ie=h(()=>{const i=Math.min(j.value-1,f.value+2);return Array.from({length:Math.max(0,i-f.value)},(o,r)=>f.value+r+1)}),ue=i=>{s.value===i?p.value=p.value==="asc"?"desc":"asc":(s.value=i,p.value="asc")},G=y(!1);function ce(){G.value=!G.value}function ge(){G.value=!1}function ve(i){i.target.closest("#dropdown")||ge()}function pe(i,o,r){g(i,o),D.value=r}function fe(){M.value=!1,D.value=null}function he(){M.value=!1,x.deactivate(D.value).then(()=>{V("update")}),D.value=null}return X(A,(i,o)=>{i&&(i==="success"?t("Hasabat üstünlikli arhiwleşdirildi","success"):i==="error"&&t("Arhiwleşdirme prosesinde ýalňyşlyk ýüze çykdy","error")),A.value=null}),window.addEventListener("click",ve),(i,o)=>(a(),u(C,null,[v(Pe,{"is-open":d(M),onClose:fe,onSubmit:he,header:d($),context:`${d(_)} arzasynyň arhiwleşdirilmegini tassyklaýarsyňyzmy?`},null,8,["is-open","header","context"]),e("div",Te,[e("div",Be,[e("div",Se,[e("div",Le,[e("div",ze,[e("div",null,[e("button",{onClick:ce,type:"button",class:"inline-flex transition duration-200 ease-in w-full justify-center rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#171131ef] dark:text-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-[#32237cef] focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-[#32237cef] focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-[#32237cef] select-none"}," Setir sany: "+n(U.value),1)]),v(me,{name:"fade-scale",onBeforeEnter:o[0]||(o[0]=r=>r.style.display="block"),onAfterLeave:o[1]||(o[1]=r=>r.style.display="none")},{default:k(()=>[Z(e("div",Ae,[e("div",De,[(a(),u(C,null,B(re,r=>e("button",{key:r,value:r,onClick:I=>ne(r),class:"w-full text-start text-gray-700 dark:text-gray-200 block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#32237cef] select-none"},n(r)+" setir ",9,Ye)),64))])],512),[[Ve,G.value]])]),_:1})])]),e("div",Ie,[e("button",{onClick:ae,class:P([{"opacity-0":!N.value},"p-2 text-sm rounded-xl shadow-md border-none dark:border-violet-500/50 border-1 bg-blue-500 dark:bg-violet-600 text-white"]),disabled:!N.value},o[8]||(o[8]=[Me('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 24 24" version="1.1" data-v-0a4bdd04><title data-v-0a4bdd04>Reload</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-0a4bdd04><g id="Reload" data-v-0a4bdd04><rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24" data-v-0a4bdd04></rect><path d="M4,13 C4,17.4183 7.58172,21 12,21 C16.4183,21 20,17.4183 20,13 C20,8.58172 16.4183,5 12,5 C10.4407,5 8.98566,5.44609 7.75543,6.21762" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-0a4bdd04></path><path d="M9.2384,1.89795 L7.49856,5.83917 C7.27552,6.34441 7.50429,6.9348 8.00954,7.15784 L11.9508,8.89768" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-0a4bdd04></path></g></g></svg>',1)]),10,Re),Z(e("input",{"onUpdate:modelValue":o[2]||(o[2]=r=>O.value=r),type:"text",onKeyup:_e(se,["enter"]),placeholder:"Gözleg",class:"w-full dark:text-gray-300 transition duration-200 ease-in bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"},null,544),[[ye,O.value]])])])]),e("div",Ue,[e("table",Ge,[e("thead",Oe,[e("tr",null,[o[10]||(o[10]=e("th",{class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-left text-[0.8rem]"}," T/B ",-1)),e("th",{class:"transition duration-200 ease-in border-y border-gray-300 dark:border-[#171131ef] dark:hover:bg-[#32237cef] p-3 select-none cursor-pointer hover:bg-gray-300 text-left text-[0.8rem]",onClick:o[3]||(o[3]=r=>ue("sender"))},[o[9]||(o[9]=xe(" UGRADYJY ")),e("span",{class:P([s.value==="sender"?p.value==="asc"?"rotate-180":"":"opacity-50","ml-2 transition-transform duration-200 inline-block"])}," ▲ ",2)]),o[11]||(o[11]=e("th",{class:"border-y border-gray-300 dark:border-[#171131ef] p-3 select-none text-center text-[0.8rem]"}," GURALLAR ",-1))])]),e("tbody",null,[(a(!0),u(C,null,B(oe.value,(r,I)=>(a(),u("tr",{key:r.id,class:"transition ease-in hover:ease-out duration-200 hover:bg-gray-100 dark:hover:bg-[#261953]"},[e("td",Ne,n(I+1),1),e("td",Ee,n(r.sender),1),e("td",Fe,[e("div",Je,[e("div",Ke,[(a(),u("button",{type:"button",key:r.id,onClick:ke=>d(ee).push(`/teachers/view/${r.id}`),class:"px-4 py-2 text-[0.8rem] font-medium rounded-l-lg bg-violet-400 hover:bg-violet-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-violet-700 border border-gray-200 focus:z-10 focus:ring-2 focus:ring-violet-500 dark:border-gray-700 select-none"}," Görmek ",8,We)),e("button",{type:"button",onClick:ke=>pe("Arhiwleşdirmek",r.sender,r.id),class:"px-4 py-2 text-[0.8rem] font-medium bg-red-400 hover:bg-red-500 transition ease-in hover:ease-out duration-200 text-white dark:bg-pink-900 dark:hover:bg-pink-600 border border-gray-200 rounded-e-lg focus:z-10 focus:ring-2 focus:ring-red-500 dark:border-gray-700 dark:focus:ring-pink-500 select-none"}," Arhiwleşdirmek ",8,Qe)])])])]))),128))])])])]),e("div",qe,[f.value!==1?(a(),u("button",{key:0,class:P(["select-none",R.value]),onClick:o[4]||(o[4]=r=>Y(f.value-1))},o[12]||(o[12]=[e("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):T("",!0),f.value>3?(a(),u("button",{key:1,class:P(["select-none",l.value]),onClick:o[5]||(o[5]=r=>Y(1))}," 1 ",2)):T("",!0),f.value>4?(a(),u("span",Xe,"...")):T("",!0),(a(!0),u(C,null,B(de.value,r=>(a(),u("button",{class:P(["select-none",l.value]),key:"before-"+r,onClick:I=>Y(r)},n(r),11,Ze))),128)),j.value!==0?(a(),u("button",{key:3,class:P(["select-none",R.value])},n(f.value),3)):T("",!0),(a(!0),u(C,null,B(ie.value,r=>(a(),u("button",{class:P(["select-none",l.value]),key:"after-"+r,onClick:I=>Y(r)},n(r),11,et))),128)),f.value<j.value-3?(a(),u("span",tt,"...")):T("",!0),f.value<j.value-2?(a(),u("button",{key:5,class:P(l.value),onClick:o[6]||(o[6]=r=>Y(j.value))},n(j.value),3)):T("",!0),f.value!==j.value&&j.value!==0?(a(),u("button",{key:6,class:P(["select-none",R.value]),onClick:o[7]||(o[7]=r=>Y(f.value+1))},o[13]||(o[13]=[e("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),2)):T("",!0)]),(a(),S(K,{to:"body"},[e("div",lt,[v(J,{name:"toast"},{default:k(()=>[(a(!0),u(C,null,B(d(m),r=>(a(),S(Q,{key:r.id,message:r.message,type:r.type,duration:r.duration,onClose:()=>m.value=d(m).filter(I=>I.id!==r.id)},null,8,["message","type","duration","onClose"]))),128))]),_:1})])]))],64))}},st=be(rt,[["__scopeId","data-v-0a4bdd04"]]),at={class:"w-full mt-8"},ot={class:"w-full overflow-x-auto border border-gray-300 dark:border-[#32237cef]"},nt={class:"t-base table-auto w-full bg-white dark:bg-[#171131ef]"},dt={class:"text-wrap"},it={__name:"TotalTeachersDataTable",props:["data"],setup(z){const c=z,b=h(()=>{let l=0;for(let s of c.data)l+=s.workload_1_25;return l}),V=h(()=>{let l=0;for(let s of c.data)l+=s.workload_1_00;return l}),M=h(()=>{let l=0;for(let s of c.data)l+=s.workload_0_75;return l}),g=h(()=>{let l=0;for(let s of c.data)l+=s.workload_0_50;return l}),$=h(()=>{let l=0;for(let s of c.data)l+=s.doctor_degree;return l}),_=h(()=>{let l=0;for(let s of c.data)l+=s.candidate_degree;return l}),m=h(()=>{let l=0;for(let s of c.data)l+=s.professor;return l}),t=h(()=>{let l=0;for(let s of c.data)l+=s.docent;return l}),x=h(()=>{let l=0;for(let s of c.data)l+=s.department_head;return l}),A=h(()=>{let l=0;for(let s of c.data)l+=s.professor_job;return l}),H=h(()=>{let l=0;for(let s of c.data)l+=s.docent_job;return l}),L=h(()=>{let l=0;for(let s of c.data)l+=s.senior_teachers;return l}),D=h(()=>{let l=0;for(let s of c.data)l+=s.teachers;return l}),R=h(()=>{let l=0;for(let s of c.data)l+=s.intern_teachers;return l});return(l,s)=>(a(),u("div",at,[e("div",ot,[e("table",nt,[s[1]||(s[1]=e("thead",null,[e("tr",null,[e("th",{colspan:"1",col:"1"},"ÝOM"),e("th",{colspan:"4",col:"2"},"Iş ýüki"),e("th",{colspan:"2",col:"3"}," Ylmy derejesi"),e("th",{colspan:"2",col:"3"}," Ylmy ady"),e("th",{colspan:"6",col:"3"}," Wezipesi")]),e("tr",{class:"lr"},[e("th",null,[e("span",null,"Ýokary okuw mekdebi")]),e("th",null,[e("span",null,"1.25")]),e("th",null,[e("span",null,"1")]),e("th",null,[e("span",null,"0.75")]),e("th",null,[e("span",null,"0.5")]),e("th",null,[e("span",null,"Ylymlaryň doktory")]),e("th",null,[e("span",null,"Ylymlaryň kandidaty")]),e("th",null,[e("span",null,"Professor")]),e("th",null,[e("span",null,"Dosent")]),e("th",null,[e("span",null,"Kafedra müdiri, professor")]),e("th",null,[e("span",null,"Professor")]),e("th",null,[e("span",null,"Dosent")]),e("th",null,[e("span",null,"Uly mugallym")]),e("th",null,[e("span",null,"Mugallym")]),e("th",null,[e("span",null,"Mugallym-öwreniji")])])],-1)),e("tbody",null,[(a(!0),u(C,null,B(c.data,p=>(a(),u("tr",{key:p.id},[e("th",dt,n(p.sender_abbr),1),e("td",null,n(p.workload_1_25),1),e("td",null,n(p.workload_1_00),1),e("td",null,n(p.workload_0_75),1),e("td",null,n(p.workload_0_50),1),e("td",null,n(p.doctor_degree),1),e("td",null,n(p.candidate_degree),1),e("td",null,n(p.professor),1),e("td",null,n(p.docent),1),e("td",null,n(p.department_head),1),e("td",null,n(p.professor_job),1),e("td",null,n(p.docent_job),1),e("td",null,n(p.senior_teachers),1),e("td",null,n(p.teachers),1),e("td",null,n(p.intern_teachers),1)]))),128)),e("tr",null,[s[0]||(s[0]=e("th",null,[e("strong",null,"Jemi")],-1)),e("td",null,[e("strong",null,n(b.value),1)]),e("td",null,[e("strong",null,n(V.value),1)]),e("td",null,[e("strong",null,n(M.value),1)]),e("td",null,[e("strong",null,n(g.value),1)]),e("td",null,[e("strong",null,n($.value),1)]),e("td",null,[e("strong",null,n(_.value),1)]),e("td",null,[e("strong",null,n(m.value),1)]),e("td",null,[e("strong",null,n(t.value),1)]),e("td",null,[e("strong",null,n(x.value),1)]),e("td",null,[e("strong",null,n(A.value),1)]),e("td",null,[e("strong",null,n(H.value),1)]),e("td",null,[e("strong",null,n(L.value),1)]),e("td",null,[e("strong",null,n(D.value),1)]),e("td",null,[e("strong",null,n(R.value),1)])])])])])]))}},ut={class:"w-full"},ct={key:0,class:"flex w-full h-[58vh] items-center justify-center dark:bg-[#171131ef] bg-white rounded-lg border border-gray-200 dark:border-[#36314e]"},gt={key:1},vt={class:"toast-container w-5/6 fixed top-25 md:top-auto md:bottom-5 right-5 md:w-1/4 flex flex-col-reverse space-y-2"},pt={__name:"TeachersViewForAdmin",setup(z){const{toasts:c,addToast:b}=W(),V=F(),{teacherStatements:M}=E(V),g=te();return Ce(()=>{g.isLoading=!0,V.getAll().then(()=>{g.isLoading=!1})}),($,_)=>(a(),u(C,null,[e("div",ut,[d(g).isLoading?(a(),u("div",ct,[v(le,{class:"w-24"})])):(a(),u("div",gt,[v(st,{data:d(M),onUpdate:_[0]||(_[0]=m=>d(V).getAll())},null,8,["data"]),v(it,{data:d(M)},null,8,["data"])]))]),(a(),S(K,{to:"body"},[e("div",vt,[v(J,{name:"toast"},{default:k(()=>[(a(!0),u(C,null,B(d(c),m=>(a(),S(Q,{key:m.id,message:m.message,type:m.type,duration:m.duration,onClose:()=>c.value=d(c).filter(t=>t.id!==m.id)},null,8,["message","type","duration","onClose"]))),128))]),_:1})])]))],64))}},ft={key:0,class:"flex w-full h-[58vh] items-center justify-center dark:bg-[#171131ef] bg-white rounded-lg border border-gray-200 dark:border-[#36314e]"},ht={key:1},kt={key:0,class:"bg-yellow-200/50 p-4 rounded-xl border border-yellow-500 dark:border-yellow-300 mb-8"},wt={key:1},bt={class:"grid md:grid-cols-4 sm:grid-cols-2 gap-8"},Vt={class:"grid md:grid-cols-4 sm:grid-cols-2 gap-8"},mt={class:"grid md:grid-cols-4 sm:grid-cols-2 gap-8"},Mt={class:"grid md:grid-cols-4 sm:grid-cols-2 gap-8"},yt={key:2,class:"flex w-full h-[58vh] items-center justify-center border-dashed border-4 rounded-2xl border-gray-400 bg-gray-200 dark:border-gray-700 dark:bg-[#242035]"},_t={class:"flex justify-center my-4"},xt={class:"toast-container w-5/6 fixed top-25 md:top-auto md:bottom-5 right-5 md:w-1/4 flex flex-col-reverse space-y-2"},Ct={__name:"TeachersViewForStuff",setup(z){const{toasts:c,addToast:b}=W(),V=te(),M=F(),{teacherStatement:g,createStatus:$,updateStatus:_}=E(M);return He(()=>{$.value&&($.value==="success"?b("Arza üstünlikli hasaba alyndy","success"):$.value==="error"&&b("Hasaba alma prosesinde ýalňyşlyk ýüze çykdy","error")),$.value=null,_.value&&(_.value==="success"?b("Hasabat üstünlikli täzelendi. Üýtgeşmeler dolandyryjy tassyklandan soňra işe girer","success"):_.value==="error"&&b("Prosesde ýalňyşlyk ýüze çykdy","error")),_.value=null,V.isLoading=!0,M.getTeacherStatementByUser().then(()=>{V.isLoading=!1})}),(m,t)=>(a(),u(C,null,[d(V).isLoading?(a(),u("div",ft,[v(le,{class:"w-24"})])):(a(),u("div",ht,[!d(g).null&&!d(g).verdict?(a(),u("div",kt,t[1]||(t[1]=[e("h4",{class:"text-yellow-500 dark:text-yellow-300 select-none"},"Arza heniz dolandyryjy tarapyndan tassyklanylmady ",-1)]))):T("",!0),d(g).null?(a(),u("div",yt,[e("div",null,[t[20]||(t[20]=e("h2",{class:"text-lg md:text-2xl font-semibold text-center select-none"},"Hasabat heniz döredilmedi",-1)),e("div",_t,[e("button",{onClick:t[0]||(t[0]=x=>d(ee).push("/teachers/add")),class:"link-active px-4 py-2 rounded-lg"},"Hasabat döretmek")])])])):(a(),u("div",wt,[t[16]||(t[16]=e("h3",{class:"text-xl font-bold mx-2 my-4 select-none"},"Professor-mugallymlaryň ýerine ýetirýän iş ýükleriniň möçberi barada maglumat",-1)),e("div",bt,[v(w,{label:"Iş ýüki 1.25","data-value":d(g).workload_1_25,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[2]||(t[2]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),v(w,{label:"Iş ýüki 1.00","data-value":d(g).workload_1_00,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[3]||(t[3]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),v(w,{label:"Iş ýüki 0.75","data-value":d(g).workload_0_75,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[4]||(t[4]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),v(w,{label:"Iş ýüki 0.50","data-value":d(g).workload_0_50,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[5]||(t[5]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"])]),t[17]||(t[17]=e("h3",{class:"text-xl font-bold mx-2 my-4 select-none"},"Ylmy derejeleri boýunça",-1)),e("div",Vt,[v(w,{label:"Ylymlaryň doktory","custom-classes":"md:col-span-2 sm:col-span-1","data-value":d(g).doctor_degree,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[6]||(t[6]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),v(w,{label:"Ylymlaryň kandidaty","custom-classes":"md:col-span-2 sm:col-span-1","data-value":d(g).candidate_degree,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[7]||(t[7]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"])]),t[18]||(t[18]=e("h3",{class:"text-xl font-bold mx-2 my-4 select-none"},"Ylmy atlary boýunça",-1)),e("div",mt,[v(w,{label:"Professor","custom-classes":"md:col-span-2 sm:col-span-1","data-value":d(g).professor,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[8]||(t[8]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),v(w,{label:"Dosent","custom-classes":"md:col-span-2 sm:col-span-1","data-value":d(g).docent,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[9]||(t[9]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"])]),t[19]||(t[19]=e("h3",{class:"text-xl font-bold mx-2 my-4 select-none"},"Wezipeler boýunça",-1)),e("div",Mt,[v(w,{label:"Kafedra müdiri, professor","data-value":d(g).department_head,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[10]||(t[10]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),v(w,{label:"Professor","custom-classes":"md:col-span-2 sm:col-span-1","data-value":d(g).professor_job,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[11]||(t[11]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),v(w,{label:"Dosent","data-value":d(g).docent_job,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[12]||(t[12]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),v(w,{label:"Uly mugallym","data-value":d(g).senior_teachers,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[13]||(t[13]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),v(w,{label:"Mugallym","custom-classes":"md:col-span-2 sm:col-span-1","data-value":d(g).teachers,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[14]||(t[14]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"]),v(w,{label:"Mugallym-öwreniji","data-value":d(g).intern_teachers,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:k(()=>t[15]||(t[15]=[e("svg",{class:"w-6 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{"clip-path":"url(#clip0_901_948)"},[e("path",{d:"M21 28V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V31H8V25H14V31H31V8C31 8 31 7 30 7H24M16 6V8M26 12V14M26 18V20M11 6V8M6 6V8M16 12V14M11 12V14M6 12V14M16 18V20M11 18V20M6 18V20","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),e("defs",null,[e("clipPath",{id:"clip0_901_948"},[e("rect",{width:"32",height:"32",fill:"white"})])])],-1)])),_:1},8,["data-value"])])]))])),(a(),S(K,{to:"body"},[e("div",xt,[v(J,{name:"toast"},{default:k(()=>[(a(!0),u(C,null,B(d(c),x=>(a(),S(Q,{key:x.id,message:x.message,type:x.type,duration:x.duration,onClose:()=>c.value=d(c).filter(A=>A.id!==x.id)},null,8,["message","type","duration","onClose"]))),128))]),_:1})])]))],64))}},Ht={class:"w-full"},St={__name:"TeachersView",setup(z){const c=$e(),{user:b}=E(c),V=[{path:"/teachers",name:"Mugallymlar"}];return(M,g)=>(a(),u("div",Ht,[v(we,{paths:V}),d(b).is_superuser?(a(),S(pt,{key:0})):(a(),S(Ct,{key:1}))]))}};export{St as default};
