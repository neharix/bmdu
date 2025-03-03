import{F as s,a as R}from"./vee-validate-9c6OnnXl.js";import{ah as j,s as B,r as i,W as N,x as V,z as D,g as M,h as t,e as a,w as $,u as d,F as G,b as q,n,t as r,y as H,j as I}from"./index-CxU83Qru.js";import{c as Q,b as u}from"./index.esm-CwhLbS5k.js";import{_ as W}from"./TheBreadcrumb-DOlKxSwc.js";const O={class:"tile"},P={class:"w-full"},Y={class:"invalid-feedback select-none text-red-500 my-2 text-sm"},J={class:"w-full"},K={class:"invalid-feedback select-none text-red-500 my-2 text-sm"},L={class:"text-center md:text-end select-none mx-2"},X={class:"w-full grid grid-cols-1 md:grid-cols-2 gap-4"},Z={class:"invalid-feedback select-none text-red-500 my-2 text-sm"},ee={class:"invalid-feedback select-none text-red-500 my-2 text-sm"},ae={class:"invalid-feedback select-none text-red-500 my-2 text-sm"},oe={class:"invalid-feedback select-none text-red-500 my-2 text-sm"},le=["title"],te={class:"flex flex-wrap justify-center md:justify-end items-center"},ne=["disabled"],re={key:0,class:"text-center text-red-500 mt-3 mb-0 text-sm select-none"},pe={__name:"NewRequestView",setup(de){const g=j(),{diplomaRequestAdvanced:m}=B(g),E=[{path:"/diplomas",name:"Diplomlar"},{path:"/diplomas/new-request",name:"Hasabaty täzelemek",current:!0}],b=i(0),c=i(0),f=i(0),y=i(0),v=i(0),_=i(0);let x=0,h=0;N(()=>{g.getDiplomaRequestAdvanced().then(()=>{m.value.null||(x=new Date(m.value.allowed_until).getTime(),h=new Date().getTime()),(m.value.verdict!=="C"||x<=h)&&V.push("/diplomas")})});const S=Q().shape({simple_diploma_count:u().typeError("Adaty diplom sany hökman girizilmeli").min(0,"San otrisatel bolup bilmez").required("Adaty diplom sany hökman girizilmeli"),honor_diploma_count:u().typeError('"Tapawutlanan" diplom sany hökman girizilmeli').min(0,"San otrisatel bolup bilmez").required('"Tapawutlanan" diplom sany hökman girizilmeli'),two_year_work_off:u().typeError("Meýdança boş bolup bilmez").min(0,"San otrisatel bolup bilmez").required("Meýdança boş bolup bilmez"),died:u().typeError("Meýdança boş bolup bilmez").min(0,"San otrisatel bolup bilmez").required("Meýdança boş bolup bilmez"),went_abroad:u().typeError("Meýdança boş bolup bilmez").min(0,"San otrisatel bolup bilmez").required("Meýdança boş bolup bilmez"),other_reasons:u().typeError("Meýdança boş bolup bilmez").min(0,"San otrisatel bolup bilmez").required("Meýdança boş bolup bilmez")});function T(z,{setErrors:e}){const{simple_diploma_count:o,honor_diploma_count:p,two_year_work_off:l,died:A,went_abroad:U,other_reasons:C}=z;return g.update(m.value.id,{simple_diploma_count:o,honor_diploma_count:p,two_year_work_off:l,died:A,went_abroad:U,other_reasons:C}).then(()=>{V.push("/diplomas")}).catch(F=>e({apiError:F}))}const k=D(()=>m.value.spare_diplomas+(b.value?b.value:0)+(c.value?c.value:0)),w=D(()=>k.value-(f.value?f.value:0)-(y.value?y.value:0)-(v.value?v.value:0)-(_.value?_.value:0));return(z,e)=>(q(),M(G,null,[t(W,{paths:E}),a("div",O,[e[13]||(e[13]=a("h3",{class:"text-xl font-bold mx-2 select-none"},"Täze diplom talap etmek",-1)),t(d(R),{onSubmit:T,"validation-schema":d(S),"initial-values":{simple_diploma_count:0,honor_diploma_count:0,two_year_work_off:0,died:0,went_abroad:0,other_reasons:0},class:"space-y-4 my-4"},{default:$(({errors:o,isSubmitting:p})=>[a("div",P,[e[6]||(e[6]=a("label",{class:"info-label",for:"simple-diploma-count"},"Adaty diplom sany",-1)),t(d(s),{name:"simple_diploma_count",type:"number",id:"simple-diploma-count",modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=l=>b.value=l),modelModifiers:{number:!0},class:n(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":o.simple_diploma_count}]),placeholder:"Adaty diplom sany"},null,8,["modelValue","class"]),a("div",Y,r(o.simple_diploma_count),1)]),a("div",J,[e[7]||(e[7]=a("label",{class:"info-label",for:"honor-diploma-count"},'"Tapawutlanan" diplom sany',-1)),t(d(s),{name:"honor_diploma_count",type:"number",id:"honor-diploma-count",modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=l=>c.value=l),modelModifiers:{number:!0},class:n(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":o.honor_diploma_count}]),placeholder:'"Tapawutlanan" diplom sany'},null,8,["modelValue","class"]),a("div",K,r(o.honor_diploma_count),1)]),a("p",L,"Diplom sany: "+r(k.value),1),e[12]||(e[12]=a("h3",{class:"text-xl font-bold mx-2 select-none"},"Diplom sebäpleri",-1)),a("div",X,[a("div",null,[e[8]||(e[8]=a("label",{class:"info-label",for:"two-year-work-off"},"Iki ýyl iş",-1)),t(d(s),{name:"two_year_work_off",type:"number",id:"two-year-work-off",modelValue:f.value,"onUpdate:modelValue":e[2]||(e[2]=l=>f.value=l),modelModifiers:{number:!0},class:n(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":o.two_year_work_off}]),placeholder:"Iki ýyl iş"},null,8,["modelValue","class"]),a("div",Z,r(o.two_year_work_off),1)]),a("div",null,[e[9]||(e[9]=a("label",{class:"info-label",for:"died"},"Ýogalan",-1)),t(d(s),{name:"died",type:"number",id:"died",modelValue:y.value,"onUpdate:modelValue":e[3]||(e[3]=l=>y.value=l),modelModifiers:{number:!0},class:n(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":o.died}]),placeholder:"Ýogalan"},null,8,["modelValue","class"]),a("div",ee,r(o.died),1)]),a("div",null,[e[10]||(e[10]=a("label",{class:"info-label",for:"went-abroad"},"Daşary ýurda giden",-1)),t(d(s),{name:"went_abroad",type:"number",id:"went-abroad",modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=l=>v.value=l),modelModifiers:{number:!0},class:n(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":o.went_abroad}]),placeholder:"Daşary ýurda giden"},null,8,["modelValue","class"]),a("div",ae,r(o.went_abroad),1)]),a("div",null,[e[11]||(e[11]=a("label",{class:"info-label",for:"other-reasons"},"Gaýry sebäpler",-1)),t(d(s),{name:"other_reasons",type:"number",id:"other-reasons",modelValue:_.value,"onUpdate:modelValue":e[5]||(e[5]=l=>_.value=l),modelModifiers:{number:!0},class:n(["w-full dark:text-gray-300 bg-transparent px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring focus:ring-blue-200 focus:outline-none",{"is-invalid":o.other_reasons}]),placeholder:"Gaýry sebäpler"},null,8,["modelValue","class"]),a("div",oe,r(o.other_reasons),1)])]),a("p",{class:n(["text-center md:text-end select-none mx-2",{"text-red-500":w.value<0}]),title:w.value<0?"Diplom sany ýeterlik däl":""}," Ätiýaçdaky diplom sany: "+r(w.value),11,le),a("div",te,[a("button",{disabled:p,class:"flex w-50 px-4 py-2 my-2 justify-center rounded-lg border-none dark:border-violet-500/50 border-1 bg-gradient-to-r from-blue-400 to-blue-500 dark:from-violet-600 dark:to-violet-500 text-white hover:shadow-lg hover:shadow-blue-300/50 hover:ease-in ease-out duration-200 dark:hover:shadow-violet-500/50 select-none"},[t(H,{class:n({hidden:!p})},null,8,["class"]),a("span",{class:n({hidden:p})},"Hasaba al",2)],8,ne)]),o.apiError?(q(),M("div",re,r(o.apiError),1)):I("",!0)]),_:1},8,["validation-schema"])])],64))}};export{pe as default};
