import{b as t,g as r,e as o,t as B,u as p,x as S,j as l,_ as T,k as $,s as A,r as x,z as f,n as C,h as D,w as z,l as N,v as j,F as v,A as h,c as g,T as E,B as O}from"./index-CxU83Qru.js";/* empty css                                                                  */const F={class:"select-none text-wrap text-start"},y={__name:"DropdownNotification",props:{notification:Object,redirectTo:String,types:Array},setup(n){return(m,d)=>n.types.includes(n.notification.type)?(t(),r("button",{key:0,onClick:d[0]||(d[0]=a=>p(S).push(n.redirectTo)),class:"bg-none w-full flex items-center text-gray-600 dark:text-gray-200 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#261c52ef] transition duration-300 ease-out"},[d[1]||(d[1]=o("span",{class:"px-2 select-none"},[o("svg",{class:"w-6",viewBox:"0 -0.5 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M11.75 9.874C11.75 10.2882 12.0858 10.624 12.5 10.624C12.9142 10.624 13.25 10.2882 13.25 9.874H11.75ZM13.25 4C13.25 3.58579 12.9142 3.25 12.5 3.25C12.0858 3.25 11.75 3.58579 11.75 4H13.25ZM9.81082 6.66156C10.1878 6.48991 10.3542 6.04515 10.1826 5.66818C10.0109 5.29121 9.56615 5.12478 9.18918 5.29644L9.81082 6.66156ZM5.5 12.16L4.7499 12.1561L4.75005 12.1687L5.5 12.16ZM12.5 19L12.5086 18.25C12.5029 18.25 12.4971 18.25 12.4914 18.25L12.5 19ZM19.5 12.16L20.2501 12.1687L20.25 12.1561L19.5 12.16ZM15.8108 5.29644C15.4338 5.12478 14.9891 5.29121 14.8174 5.66818C14.6458 6.04515 14.8122 6.48991 15.1892 6.66156L15.8108 5.29644ZM13.25 9.874V4H11.75V9.874H13.25ZM9.18918 5.29644C6.49843 6.52171 4.7655 9.19951 4.75001 12.1561L6.24999 12.1639C6.26242 9.79237 7.65246 7.6444 9.81082 6.66156L9.18918 5.29644ZM4.75005 12.1687C4.79935 16.4046 8.27278 19.7986 12.5086 19.75L12.4914 18.25C9.08384 18.2892 6.28961 15.5588 6.24995 12.1513L4.75005 12.1687ZM12.4914 19.75C16.7272 19.7986 20.2007 16.4046 20.2499 12.1687L18.7501 12.1513C18.7104 15.5588 15.9162 18.2892 12.5086 18.25L12.4914 19.75ZM20.25 12.1561C20.2345 9.19951 18.5016 6.52171 15.8108 5.29644L15.1892 6.66156C17.3475 7.6444 18.7376 9.79237 18.75 12.1639L20.25 12.1561Z",fill:"currentColor"})])],-1)),o("span",F,B(n.notification.sender)+"-den arza goýberilen arza",1)])):l("",!0)}},R={class:"flex items-center space-x-2"},G={class:"relative inline-block text-left"},I={class:"absolute overflow-y-auto right-0 z-10 mt-2 w-56 max-h-[40vh] origin-top-right rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#171131ef] shadow-lg ring-1 ring-white dark:ring-gray-800 ring-opacity-5"},U={key:0,class:"px-2 pt-2 select-none"},Y={key:1,class:"py-1"},_={key:2,class:"px-2 pt-2 select-none"},q={key:4,class:"px-2 pt-2 select-none"},J={key:5,class:"py-1"},K={__name:"SiteTools",props:{isDark:Boolean,isMobile:Boolean,notifications:Boolean},emits:["toggle-theme"],setup(n,{emit:m}){const d=$(),{user:a}=A(d),b=x(null),w=f(()=>{try{let s=!1;for(let e of a.value.notifications)(e.type==="expulsion"||e.type==="reinstate")&&(s=!0);return s}catch{return!1}}),M=f(()=>{try{let s=!1;for(let e of a.value.notifications)e.type==="diploma"&&(s=!0);return s}catch{return!1}}),k=f(()=>{try{let s=!1;for(let e of a.value.notifications)e.type==="teacher"&&(s=!0);return s}catch{return!1}}),u=x(!1);function L(){u.value=!u.value,console.log(a.value.notifications)}function Z(){u.value=!1}function V(s){s.target.closest("#dropdown")||Z()}window.addEventListener("click",V);const H=m;return(s,e)=>(t(),r("div",R,[o("div",G,[o("div",null,[n.notifications?(t(),r("button",{key:0,class:C({"lg:hidden":n.isMobile}),id:"dropdown",onClick:L},e[3]||(e[3]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-8 mt-1",viewBox:"0 0 24 24",fill:"none"},[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.07046 10.26C7.96453 7.86801 9.19303 7.03601 11.2132 7.03601C13.2334 7.03601 14.4619 7.86801 15.356 10.26C15.3728 10.3055 15.3862 10.3524 15.396 10.4L16.5543 15.917C16.6155 16.2008 16.5485 16.4978 16.3719 16.7251C16.1953 16.9525 15.928 17.0858 15.6446 17.088H13.3173C13.37 17.6989 13.1737 18.3048 12.7751 18.7618C12.3764 19.2188 11.811 19.4861 11.2132 19.5C10.6151 19.4861 10.0494 19.2186 9.65063 18.7611C9.25191 18.3037 9.05587 17.6972 9.10918 17.086H6.78186C6.49847 17.0838 6.2312 16.9505 6.0546 16.7231C5.878 16.4958 5.81096 16.1988 5.87218 15.915L7.03048 10.4C7.04027 10.3524 7.05363 10.3055 7.07046 10.26Z",stroke:"currentColor","stroke-width":"1.2","stroke-linejoin":"round"}),o("path",{d:"M9.10921 16.336C8.69499 16.336 8.35921 16.6718 8.35921 17.086C8.35921 17.5002 8.69499 17.836 9.10921 17.836V16.336ZM13.3173 17.836C13.7315 17.836 14.0673 17.5002 14.0673 17.086C14.0673 16.6718 13.7315 16.336 13.3173 16.336V17.836ZM9.62888 4.75C9.21467 4.75 8.87888 5.08579 8.87888 5.5C8.87888 5.91421 9.21467 6.25 9.62888 6.25V4.75ZM12.7976 6.25C13.2118 6.25 13.5476 5.91421 13.5476 5.5C13.5476 5.08579 13.2118 4.75 12.7976 4.75V6.25ZM9.10921 17.836H13.3173V16.336H9.10921V17.836ZM9.62888 6.25H12.7976V4.75H9.62888V6.25Z",fill:"currentColor"})],-1)]),2)):l("",!0),D(E,{name:"fade-scale",onBeforeEnter:e[0]||(e[0]=i=>i.style.display="block"),onAfterLeave:e[1]||(e[1]=i=>i.style.display="none")},{default:z(()=>[N(o("div",I,[w.value?(t(),r("div",U,e[4]||(e[4]=[o("h3",{class:"uppercase text-center"}," Arzalar",-1)]))):l("",!0),w.value?(t(),r("div",Y,[(t(!0),r(v,null,h(p(a).notifications,(i,c)=>(t(),g(y,{types:["expulsion","reinstate"],"redirect-to":`/statements/${i.id}/${i.type}`,notification:i,key:c},null,8,["redirect-to","notification"]))),128))])):l("",!0),M.value?(t(),r("div",_,e[5]||(e[5]=[o("h3",{class:"uppercase text-center"},"Diplomlar",-1)]))):l("",!0),M.value?(t(),r("div",{key:3,class:"py-1",ref_key:"diplomas",ref:b},[(t(!0),r(v,null,h(p(a).notifications,(i,c)=>(t(),g(y,{types:["diploma"],"redirect-to":`/diplomas/view/${i.id}`,notification:i,key:c},null,8,["redirect-to","notification"]))),128))],512)):l("",!0),k.value?(t(),r("div",q,e[6]||(e[6]=[o("h3",{class:"uppercase text-center"}," MUGALLYMLAR",-1)]))):l("",!0),k.value?(t(),r("div",J,[(t(!0),r(v,null,h(p(a).notifications,(i,c)=>(t(),g(y,{types:["teacher"],"redirect-to":`/teachers/view/${i.id}`,notification:i,key:c},null,8,["redirect-to","notification"]))),128))])):l("",!0)],512),[[j,u.value]])]),_:1})])]),o("button",{id:"themeToggle",class:C([{"lg:hidden":n.isMobile},"flex items-center px-4 py-2 dark:text-gray-100 rounded"]),onClick:e[2]||(e[2]=i=>H("toggle-theme"))},[(t(),r("svg",{viewBox:"0 0 24 24",class:C(["w-6 h-6 m-0",{hidden:n.isDark}]),fill:"none",xmlns:"http://www.w3.org/2000/svg"},e[7]||(e[7]=[O('<path d="M11 1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1Z" fill="currentColor" data-v-79c1e3ba></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12ZM8.06167 12C8.06167 14.1751 9.82492 15.9383 12 15.9383C14.1751 15.9383 15.9383 14.1751 15.9383 12C15.9383 9.82492 14.1751 8.06167 12 8.06167C9.82492 8.06167 8.06167 9.82492 8.06167 12Z" fill="currentColor" data-v-79c1e3ba></path><path d="M20.4853 3.51472C20.0947 3.12419 19.4616 3.12419 19.0711 3.51472L17.6568 4.92893C17.2663 5.31946 17.2663 5.95262 17.6568 6.34315C18.0474 6.73367 18.6805 6.73367 19.0711 6.34315L20.4853 4.92893C20.8758 4.53841 20.8758 3.90524 20.4853 3.51472Z" fill="currentColor" data-v-79c1e3ba></path><path d="M1 13C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1Z" fill="currentColor" data-v-79c1e3ba></path><path d="M3.51472 3.51472C3.1242 3.90524 3.1242 4.53841 3.51472 4.92893L4.92894 6.34315C5.31946 6.73367 5.95263 6.73367 6.34315 6.34315C6.73368 5.95262 6.73368 5.31946 6.34315 4.92893L4.92894 3.51472C4.53841 3.12419 3.90525 3.12419 3.51472 3.51472Z" fill="currentColor" data-v-79c1e3ba></path><path d="M11 21C11 20.4477 11.4477 20 12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21Z" fill="currentColor" data-v-79c1e3ba></path><path d="M6.34315 17.6569C5.95263 17.2663 5.31946 17.2663 4.92894 17.6569L3.51473 19.0711C3.1242 19.4616 3.1242 20.0948 3.51473 20.4853C3.90525 20.8758 4.53842 20.8758 4.92894 20.4853L6.34315 19.0711C6.73368 18.6805 6.73368 18.0474 6.34315 17.6569Z" fill="currentColor" data-v-79c1e3ba></path><path d="M21 13C20.4477 13 20 12.5523 20 12C20 11.4477 20.4477 11 21 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21Z" fill="currentColor" data-v-79c1e3ba></path><path d="M17.6568 17.6569C17.2663 18.0474 17.2663 18.6805 17.6568 19.0711L19.0711 20.4853C19.4616 20.8758 20.0947 20.8758 20.4853 20.4853C20.8758 20.0948 20.8758 19.4616 20.4853 19.0711L19.0711 17.6569C18.6805 17.2663 18.0474 17.2663 17.6568 17.6569Z" fill="currentColor" data-v-79c1e3ba></path>',9)]),2)),(t(),r("svg",{viewBox:"0 0 24 24",class:C(["w-6 h-6 m-0",{hidden:!n.isDark}]),fill:"none",xmlns:"http://www.w3.org/2000/svg"},e[8]||(e[8]=[o("path",{d:"M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]),2))],2)]))}},W=T(K,[["__scopeId","data-v-79c1e3ba"]]);export{W as S};
