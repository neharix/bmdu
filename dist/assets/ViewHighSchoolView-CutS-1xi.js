import{D as h,K as y,o as b,s as c,A as _,f as k,d as s,h as a,w as n,g as o,L as l,M as x,N as f,F as p,B as C,J as B,b as r,c as M}from"./index-DnGSU1Bb.js";const S={class:"grid md:grid-cols-4 sm:grid-cols-2 gap-8"},H={class:"mt-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8"},j={class:"grid md:grid-cols-4 sm:grid-cols-2 gap-8"},V={__name:"ViewHighSchoolView",setup(A){const d=B(),i=h(),u=y();b(()=>{i.getAbout(d.params.id),u.getDiplomaRequestAdvancedByHighSchool(d.params.id)});const{diplomaRequestAdvanced:m}=c(u),{highSchoolAbout:t}=c(i),v=_(()=>{try{return m.value.spare_diplomas}catch{return 0}});return(D,e)=>(r(),k(p,null,[s("div",S,[a(l,{label:"Talyp sany","data-value":o(t).students_count,"icon-bg-class":"bg-sky-200 dark:bg-sky-500/75"},{default:n(()=>e[0]||(e[0]=[s("svg",{class:"w-6 h-8 stroke-sky-500 dark:stroke-sky-900",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),s("circle",{cx:"9",cy:"7",r:"4"}),s("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),s("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})],-1)])),_:1},8,["data-value"]),a(l,{label:"Oglanlar","data-value":o(t).male_students_count,"icon-bg-class":"bg-sky-200 dark:bg-sky-500/75"},{default:n(()=>e[1]||(e[1]=[s("svg",{class:"w-6 h-8 stroke-sky-500 dark:stroke-sky-900",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),s("circle",{cx:"9",cy:"7",r:"4"}),s("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),s("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})],-1)])),_:1},8,["data-value"]),a(l,{label:"Gyzlar","data-value":o(t).female_students_count,"icon-bg-class":"bg-sky-200 dark:bg-sky-500/75"},{default:n(()=>e[2]||(e[2]=[s("svg",{class:"w-6 h-8 stroke-sky-500 dark:stroke-sky-900",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),s("circle",{cx:"9",cy:"7",r:"4"}),s("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),s("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})],-1)])),_:1},8,["data-value"]),a(l,{label:"Ätiýaçdaky diplom sany","data-value":v.value,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:n(()=>e[3]||(e[3]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-8 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("polygon",{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"}),s("line",{x1:"8",y1:"2",x2:"8",y2:"18"}),s("line",{x1:"16",y1:"6",x2:"16",y2:"22"})],-1)])),_:1},8,["data-value"])]),s("div",H,[a(x,{admissions:o(t).admissions},null,8,["admissions"]),e[4]||(e[4]=s("div",null,null,-1)),a(f,{studentsCount:o(t).students_count,femaleCount:o(t).female_students_count,maleCount:o(t).male_students_count},null,8,["studentsCount","femaleCount","maleCount"])]),e[6]||(e[6]=s("h2",{class:"my-8 select-none"},"Welaýatlar boýunça talyp sany",-1)),s("div",j,[(r(!0),k(p,null,C(o(t).students_count_by_regions,(g,w)=>(r(),M(l,{key:w,label:g.region,"data-value":g.students_count,"icon-bg-class":"bg-green-200 dark:bg-green-500/75"},{default:n(()=>e[5]||(e[5]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-8 stroke-green-500 dark:stroke-green-900",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("polygon",{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"}),s("line",{x1:"8",y1:"2",x2:"8",y2:"18"}),s("line",{x1:"16",y1:"6",x2:"16",y2:"22"})],-1)])),_:2},1032,["label","data-value"]))),128))])],64))}};export{V as default};
