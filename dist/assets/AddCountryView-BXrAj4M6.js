import{Y as p,g as l,h as r,e,w as b,u as o,F as _,x as y,b as i,n,t as c,y as x,j as g}from"./index-CxU83Qru.js";import{_ as v}from"./TheBreadcrumb-DOlKxSwc.js";import{F as k,a as w}from"./vee-validate-9c6OnnXl.js";import{c as j,a as C}from"./index.esm-CwhLbS5k.js";const F={class:"w-full rounded-lg shadow-lg p-4 bg-white dark:bg-[#171131ef]"},E={class:"w-full"},V={class:"invalid-feedback select-none text-red-500 my-2 text-sm"},$={class:"flex flex-wrap justify-center md:justify-end lg:justify-end"},z=["disabled"],B={key:0,class:"text-center text-red-500 mt-3 mb-0 text-sm select-none"},G={__name:"AddCountryView",setup(N){const u=p(),m=j().shape({name:C().trim().required("Ýurdyň ady hökman girizilmeli")});function h(d,{setErrors:s}){const{name:a}=d;return u.create({name:a}).then(()=>{y.push("/countries")}).catch(t=>s({apiError:t}))}const f=[{path:"/countries",name:"Ýurtlar"},{path:"/countries/add",name:"Goşmak"}];return(d,s)=>(i(),l(_,null,[r(v,{paths:f}),e("div",F,[s[0]||(s[0]=e("h3",{class:"text-xl font-bold mx-2 select-none"},"Täze ýurdy hasaba almak",-1)),r(o(w),{onSubmit:h,"validation-schema":o(m),class:"space-y-4 my-4"},{default:b(({errors:a,isSubmitting:t})=>[e("div",E,[r(o(k),{name:"name",type:"text",id:"name",class:n(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":a.name}]),placeholder:"Ýurdyň ady"},null,8,["class"]),e("div",V,c(a.name),1)]),e("div",$,[e("button",{disabled:t,class:"flex w-50 px-4 py-2 my-2 justify-center rounded-lg border-none dark:border-violet-500/50 border-1 bg-gradient-to-r from-blue-400 to-blue-500 dark:from-violet-600 dark:to-violet-500 text-white hover:shadow-lg hover:shadow-blue-300/50 hover:ease-in ease-out duration-200 dark:hover:shadow-violet-500/50 select-none"},[r(x,{class:n({hidden:!t})},null,8,["class"]),e("span",{class:n({hidden:t})},"Hasaba al",2)],8,z)]),a.apiError?(i(),l("div",B,c(a.apiError),1)):g("",!0)]),_:1},8,["validation-schema"])])],64))}};export{G as default};
