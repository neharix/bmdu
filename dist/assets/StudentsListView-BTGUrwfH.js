import{k as p,ac as h,s as r,o as y,g as _,u as s,c as n,h as f,I as k,b as a}from"./index-CxU83Qru.js";import{_ as u}from"./TheBreadcrumb-DOlKxSwc.js";import{S as b}from"./StudentsDataTable-CqPXD4qx.js";import"./useModalWindow-YBdBHNYD.js";/* empty css                                                     */import"./useToast-BD7xrvgK.js";const A={class:"w-full"},x={__name:"StudentsListView",setup(S){const t=k(),d=p(),e=h(),{studentsAdditional:l}=r(e),{user:c}=r(d);y(()=>{Object.keys(t.query).length>0?e.getAllAdditionalWithQuery(Object.keys(t.query)[0],t.query[Object.keys(t.query)[0]]):e.getAllAdditional()});const i=[{path:"/students",name:"Talyplar"},{path:"/students/add",name:"Goşmak"}],m=[{path:"/students",name:"Talyplar"}];return(g,o)=>(a(),_("div",A,[s(c).is_superuser?(a(),n(u,{key:0,paths:i})):(a(),n(u,{key:1,paths:m})),f(b,{data:s(l),onUpdate:o[0]||(o[0]=q=>s(e).getAllAdditional())},null,8,["data"])]))}};export{x as default};
