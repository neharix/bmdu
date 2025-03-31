import{Q as _,r as f,o as w,f as p,h as l,d as e,w as F,g as n,F as V,E,z as j,b as g,n as i,t as c,x as z,j as N}from"./index-m5t8ScRE.js";import{_ as $}from"./TheBreadcrumb-BhR2fDCA.js";import{F as v,a as B}from"./vee-validate-eju0K1H7.js";import{c as C,a as h}from"./index.esm-CwhLbS5k.js";const S={class:"w-full rounded-lg shadow-lg p-4 bg-white dark:bg-[#171131ef]"},q={class:"grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4"},U={class:"lg:col-span-2 md:col-span-2 lg:col-span-1"},A={class:"invalid-feedback select-none text-red-500 my-2 text-sm"},D={class:"invalid-feedback select-none text-red-500 my-2 text-sm"},M={class:"flex flex-wrap justify-center md:justify-end lg:justify-end"},P=["disabled"],Q={key:0,class:"text-center text-red-500 mt-3 mb-0 text-sm select-none"},K={__name:"EditFacultyView",setup(R){const m=E(),r=_(),d=f(""),u=f(""),y=C().shape({name:h().trim().required("Fakultetiň ady hökman girizilmeli"),abbreviation:h().trim().required("Fakultetiň gysgaltmasy hökman girizilmeli")});function x(b,{setErrors:a}){const{name:t,abbreviation:s}=b;return r.put(m.params.id,{name:t,abbreviation:s}).then(()=>{j.go(-1)}).catch(o=>a({apiError:o}))}const k=[{path:"/faculties",name:"Fakultetler"},{path:"/faculties/edit",name:"Üýtgetmek",current:!0}];return w(()=>{r.get(m.params.id).then(()=>{d.value=r.faculty.name,u.value=r.faculty.abbreviation})}),(b,a)=>(g(),p(V,null,[l($,{paths:k}),e("div",S,[a[2]||(a[2]=e("h3",{class:"text-xl font-bold mx-2 select-none"},"Fakulteti üýtgetmek",-1)),l(n(B),{onSubmit:x,"validation-schema":n(y),class:"space-y-4 my-4"},{default:F(({errors:t,isSubmitting:s})=>[e("div",q,[e("div",U,[l(n(v),{name:"name",type:"text",id:"name",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=o=>d.value=o),class:i(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":t.name}]),placeholder:"Fakultetiň ady"},null,8,["modelValue","class"]),e("div",A,c(t.name),1)]),e("div",null,[l(n(v),{name:"abbreviation",type:"text",id:"abbreviation",modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=o=>u.value=o),class:i(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":t.abbreviation}]),placeholder:"Fakultetiň gysgaltmasy"},null,8,["modelValue","class"]),e("div",D,c(t.abbreviation),1)])]),e("div",M,[e("button",{disabled:s,class:"flex w-50 px-4 py-2 my-2 justify-center rounded-lg border-none dark:border-violet-500/50 border-1 bg-gradient-to-r from-blue-400 to-blue-500 dark:from-violet-600 dark:to-violet-500 text-white hover:shadow-lg hover:shadow-blue-300/50 hover:ease-in ease-out duration-200 dark:hover:shadow-violet-500/50"},[l(z,{class:i({hidden:!s})},null,8,["class"]),e("span",{class:i({hidden:s})},"Üýtget",2)],8,P)]),t.apiError?(g(),p("div",Q,c(t.apiError),1)):N("",!0)]),_:1},8,["validation-schema"])])],64))}};export{K as default};
