import{C as j,r as u,o as A,g as k,h as t,e,w as F,u as r,F as E,I as N,x as U,b as f,n as i,t as n,y as $,j as q}from"./index-CxU83Qru.js";import{_ as C}from"./TheBreadcrumb-DOlKxSwc.js";import{F as m,a as B}from"./vee-validate-9c6OnnXl.js";import{c as H,a as c}from"./index.esm-CwhLbS5k.js";const D={class:"w-full rounded-lg shadow-lg p-4 bg-white dark:bg-[#171131ef]"},I={class:"grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4"},M={class:"lg:col-span-2 md:col-span-2 lg:col-span-1"},P={class:"invalid-feedback select-none text-red-500 my-2 text-sm"},R={class:"invalid-feedback select-none text-red-500 my-2 text-sm"},G={class:"grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4"},L={class:"invalid-feedback select-none text-red-500 my-2 text-sm"},O={class:"invalid-feedback select-none text-red-500 my-2 text-sm"},T={class:"flex flex-wrap justify-center md:justify-end lg:justify-end"},W=["disabled"],J={key:0,class:"text-center text-red-500 mt-3 mb-0 text-sm select-none"},_=8,ee={__name:"EditHighSchoolView",setup(K){const v=N(),l=j(),h=u(""),g=u(""),p=u(""),b=u(""),x=H().shape({high_school_name:c().trim().required("Ýokary okuw mekdebiniň ady hökman girizilmeli"),abbreviation:c().trim().required("Ýokary okuw mekdebiniň gysgaltmasy hökman girizilmeli"),username:c().trim().lowercase().required("Ulanyjy ady hökmany şekilde girizilmeli"),password:c().required("Açar sözi hökmany şekilde girizilmeli").min(_,`Açar sözi ${_} simwoldan az bolmaly däldir`)});function w(y,{setErrors:a}){const{high_school_name:o,abbreviation:d,username:s,password:S}=y;return console.log(y),l.put(v.params.id,{high_school_name:o,abbreviation:d,username:s,password:S}).then(()=>{l.getAllAdditional(),U.push("/high-schools")}).catch(z=>a({apiError:z}))}const V=[{path:"/high-schools",name:"Ýokary okuw mekdepleri"},{path:"/high-schools/edit",name:"Üýtgetmek",current:!0}];return A(()=>{l.get(v.params.id).then(()=>{h.value=l.highSchool.name,g.value=l.highSchool.abbreviation,p.value=l.highSchool.manager.user.username,b.value=l.highSchool.manager.password})}),(y,a)=>(f(),k(E,null,[t(C,{paths:V}),e("div",D,[a[4]||(a[4]=e("h3",{class:"text-xl font-bold mx-2 select-none"},"Ýokary okuw mekdebini üýtgetmek",-1)),t(r(B),{onSubmit:w,"validation-schema":r(x),class:"space-y-4 my-4"},{default:F(({errors:o,isSubmitting:d})=>[e("div",I,[e("div",M,[t(r(m),{name:"high_school_name",type:"text",id:"high_school_name",modelValue:h.value,"onUpdate:modelValue":a[0]||(a[0]=s=>h.value=s),class:i(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":o.name}]),placeholder:"Ýokary okuw mekdebiniň ady"},null,8,["modelValue","class"]),e("div",P,n(o.name),1)]),e("div",null,[t(r(m),{name:"abbreviation",type:"text",id:"abbreviation",modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=s=>g.value=s),class:i(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":o.abbreviation}]),placeholder:"Ýokary okuw mekdebiniň gysgaltmasy"},null,8,["modelValue","class"]),e("div",R,n(o.abbreviation),1)])]),e("div",G,[e("div",null,[t(r(m),{name:"username",type:"text",id:"username",modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=s=>p.value=s),class:i(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":o.username}]),placeholder:"Ulanyjy ady"},null,8,["modelValue","class"]),e("div",L,n(o.username),1)]),e("div",null,[t(r(m),{name:"password",type:"text",id:"password",modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=s=>b.value=s),class:i(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":o.password}]),placeholder:"Açar sözi"},null,8,["modelValue","class"]),e("div",O,n(o.password),1)])]),e("div",T,[e("button",{disabled:d,class:"flex w-50 px-4 py-2 my-2 justify-center rounded-lg border-none dark:border-violet-500/50 border-1 bg-gradient-to-r from-blue-400 to-blue-500 dark:from-violet-600 dark:to-violet-500 text-white hover:shadow-lg hover:shadow-blue-300/50 hover:ease-in ease-out duration-200 dark:hover:shadow-violet-500/50"},[t($,{class:i({hidden:!d})},null,8,["class"]),e("span",{class:i({hidden:d})},"Üýtget",2)],8,W)]),o.apiError?(f(),k("div",J,n(o.apiError),1)):q("",!0)]),_:1},8,["validation-schema"])])],64))}};export{ee as default};
