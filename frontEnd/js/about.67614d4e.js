"use strict";(self["webpackChunkfront_end_hidon"]=self["webpackChunkfront_end_hidon"]||[]).push([[443],{112:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});var r=t(3396);const l={class:"about"};function n(e,a,t,n,o,i){const s=(0,r.up)("tebleUsers");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(s)])}function o(e,a,t,l,n,o){const i=(0,r.up)("ag-grid-vue");return(0,r.wg)(),(0,r.j4)(i,{style:{height:"500px"},class:"ag-theme-alpine-auto-dark",rowData:l.rowData,columnDefs:l.colDefs,undoRedoCellEditing:!0,undoRedoCellEditingLimit:20,editType:"fullRow",enableRtl:"true"},null,8,["rowData","columnDefs"])}var i=t(4870),s=t(6732),d={name:"App",components:{AgGridVue:s.n},setup(){const e=(0,i.iH)([]),a=async()=>{const a=await fetch("https://hidon-halha.onrender.com/users/",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).catch((e=>console.log(e)));console.log(a),e.value=await a.json(),console.log(e.value)};a();const t=(0,i.iH)([{field:"userFirstName",filter:"agSetColumnFilter",editable:!0,headerComponentParams:{displayName:"שם פרטי"},valueSetter:e=>(e.data.userFirstName=e.newValue,r(e.data),!0)},{field:"userLastName",filter:"agSetColumnFilter",editable:!0,headerComponentParams:{displayName:"שם משפחה"},valueSetter:e=>(e.data.userLastName=e.newValue,r(e.data),!0)},{field:"userPhone",filter:"agSetColumnFilter",editable:!0,headerComponentParams:{displayName:"טלפון"},valueSetter:e=>(e.data.userPhone=e.newValue,r(e.data),!0)},{field:"userEmail",filter:"agSetColumnFilter",editable:!0,headerComponentParams:{displayName:"מייל"},valueSetter:e=>(e.data.userEmail=e.newValue,r(e.data),!0)},{field:"userCity",filter:"agSetColumnFilter",editable:!0,headerComponentParams:{displayName:"עיר"},valueSetter:e=>(e.data.userCity=e.newValue,r(e.data),!0)},{field:"userAddress",filter:"agNumberColumnFilter",editable:!0,headerComponentParams:{displayName:"כתובת"},valueSetter:e=>(e.data.userAddress=e.newValue,r(e.data),!0)},{field:"userContact",filter:"agNumberColumnFilter",editable:!0,headerComponentParams:{displayName:"רכז"},valueSetter:e=>(e.data.userContact=e.newValue,r(e.data),!0)},{field:"userScore",filter:"agNumberColumnFilter",editable:!0,headerComponentParams:{displayName:"ניקוד"},valueSetter:e=>(e.data.userScore=e.newValue,r(e.data),!0)},{field:"userLevel",filter:"agNumberColumnFilter",editable:!0,headerComponentParams:{displayName:"שלב"},valueSetter:e=>(e.data.userLevel=e.newValue,r(e.data),!0)},{field:"userBirthDate",filter:"agNumberColumnFilter",editable:!0,headerComponentParams:{displayName:"תאריך לידה"},valueSetter:e=>(e.data.userBirthDate=e.newValue,r(e.data),!0)},{field:"userRole",filter:"agNumberColumnFilter",editable:!0,headerComponentParams:{displayName:"סוג משתמש"},valueSetter:e=>(e.data.userRole=e.newValue,r(e.data),!0)}]);let r=async e=>{const a=await fetch(`https://hidon-halha.onrender.com/users/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify(e)}),t=await a.json();console.log(t)};return{rowData:e,colDefs:t}}},u=t(89);const m=(0,u.Z)(d,[["render",o]]);var c=m,p={name:"AboutView",components:{tebleUsers:c}};const f=(0,u.Z)(p,[["render",n]]);var h=f}}]);
//# sourceMappingURL=about.67614d4e.js.map