import{F as c,a as b}from"./vee-validate-QwZFMH8h.js";import{c as v,a as m}from"./index.esm-CwhLbS5k.js";import{y as w,r as _,o as S,f as u,d as e,g as o,h as l,w as j,F as z,k as L,z as I,b as g,n,t as d,x as E,j as F}from"./index-CYldoNyA.js";import{S as T}from"./SiteTools-LaavECaT.js";import"./ConfirmModal-BpMle2rX.js";/* empty css                                                     *//* empty css                                                                  */const D="/assets/login-0MjPROMg.svg",V={class:"hidden lg:flex w-2/3 bg-gray-200 dark:bg-[#1b1829] justify-center items-center"},A=["src"],B={class:"flex flex-col justify-center px-8 lg:px-16 bg-white dark:bg-[#171131ef] w-full lg:w-1/3"},C={class:"invalid-feedback text-red-500 my-2 text-sm select-none"},M={class:"invalid-feedback text-red-500 my-2 text-sm select-none"},N={class:"flex flex-wrap justify-center"},$=["disabled"],q={key:0,class:"text-center text-red-500 mt-3 mb-0 text-sm"},Q={__name:"LoginView",setup(U){const p=w(),y=v().shape({username:m().trim().required("Ulanyjy ady hökmany şekilde girizilmeli"),password:m().required("Açar sözi hökmany şekilde girizilmeli")});function f(s,{setErrors:t}){const a=L(),{username:r,password:x}=s;return a.login({username:r,password:x}).then(()=>{I.push("/")}).catch(k=>t({apiError:k}))}const i=_(null);function h(){const s=document.documentElement,t=s.classList.contains("dark")?"dark":"light";s.classList.remove(t),s.classList.add(t==="dark"?"light":"dark"),localStorage.setItem("theme",s.classList.contains("dark")?"dark":"light");const a=localStorage.getItem("theme");s.classList.add(a),s.classList.remove(a==="dark"?"light":"dark"),i.value=a==="dark"}return S(()=>{p.clearData();const s=localStorage.getItem("theme");i.value=s==="dark"}),(s,t)=>(g(),u(z,null,[e("div",V,[e("img",{src:o(D),alt:"Left Section Image",class:"max-w-[80%] max-h-[80%] object-contain dark:opacity-75"},null,8,A)]),e("div",B,[l(T,{class:"absolute top-5 right-5","is-dark":i.value,onToggleTheme:h,notifications:!1},null,8,["is-dark"]),t[2]||(t[2]=e("h2",{class:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center lg:text-left select-none"},"Hoş geldiňiz! 👋",-1)),t[3]||(t[3]=e("p",{class:"text-gray-600 dark:text-gray-300 mb-6 text-center lg:text-left select-none"},"Içeri girmek üçin şahsyňyzy tassyklaň",-1)),l(o(b),{onSubmit:f,"validation-schema":o(y),class:"space-y-4"},{default:j(({errors:a,isSubmitting:r})=>[e("div",null,[t[0]||(t[0]=e("label",{for:"username",class:"block text-gray-700 dark:text-gray-300 text-sm py-2 select-none"},"Ulanyjy adyňyz",-1)),l(o(c),{name:"username",type:"text",id:"username",class:n(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":a.username}])},null,8,["class"]),e("div",C,d(a.username),1)]),e("div",null,[t[1]||(t[1]=e("label",{for:"password",class:"block text-gray-700 dark:text-gray-300 text-sm py-2 select-none"},"Açar sözi",-1)),l(o(c),{name:"password",type:"password",id:"password",class:n(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":a.password}])},null,8,["class"]),e("div",M,d(a.password),1)]),e("div",N,[e("button",{disabled:r,class:"flex justify-center w-50 px-4 py-2 my-2 rounded-lg border-none dark:border-violet-500/50 border-1 bg-gradient-to-r from-blue-400 to-blue-500 dark:from-violet-600 dark:to-violet-500 text-white hover:shadow-lg hover:shadow-blue-300/50 hover:ease-in ease-out duration-200 dark:hover:shadow-violet-500/50"},[l(E,{class:n({hidden:!r})},null,8,["class"]),e("span",{class:n(["select-none",{hidden:r}])},"Giriş",2)],8,$)]),a.apiError?(g(),u("div",q,d(a.apiError),1)):F("",!0)]),_:1},8,["validation-schema"])])],64))}};export{Q as default};
