"use strict";(self["webpackChunkfront_end_hidon"]=self["webpackChunkfront_end_hidon"]||[]).push([[443],{112:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});var l=t(3396);const r={class:"about"};function n(e,a,t,n,o,s){const i=(0,l.up)("tebleUsers");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(i)])}function o(e,a,t,r,n,o){const s=(0,l.up)("ag-grid-vue");return(0,l.wg)(),(0,l.j4)(s,{style:{height:"500px"},class:"ag-theme-alpine-auto-dark",rowData:r.rowData,columnDefs:r.colDefs,undoRedoCellEditing:!0,undoRedoCellEditingLimit:20,editType:"fullRow",enableRtl:"true"},null,8,["rowData","columnDefs"])}var s=t(4870),i=t(6732),u={name:"App",components:{AgGridVue:i.n},setup(){const e=(0,s.iH)([]),a=async()=>{const a=await fetch("http://localhost:3000/users/",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).catch((e=>console.log(e)));console.log(a),e.value=await a.json(),console.log(e.value)};a();const t=(0,s.iH)([{field:"userFirstName",filter:"agSetColumnFilter",editable:!0,headerComponentParams:{displayName:"שם פרטי"},valueSetter:e=>(e.data.userFirstName=e.newValue,l(e.data),!0)},{field:"userLastName",filter:"agSetColumnFilter",editable:!0,headerComponentParams:{displayName:"שם משפחה"},valueSetter:e=>(e.data.userLastName=e.newValue,l(e.data),!0)},{field:"userPhone",filter:"agSetColumnFilter",editable:!0,headerComponentParams:{displayName:"טלפון"},valueSetter:e=>(e.data.userPhone=e.newValue,l(e.data),!0)},{field:"userEmail",filter:"agSetColumnFilter",editable:!0,headerComponentParams:{displayName:"מייל"},valueSetter:e=>(e.data.userEmail=e.newValue,l(e.data),!0)},{field:"userCity",filter:"agSetColumnFilter",editable:!0,headerComponentParams:{displayName:"עיר"},valueSetter:e=>(e.data.userCity=e.newValue,l(e.data),!0)},{field:"userAddress",filter:"agNumberColumnFilter",editable:!0,headerComponentParams:{displayName:"כתובת"},valueSetter:e=>(e.data.userAddress=e.newValue,l(e.data),!0)},{field:"userContact",filter:"agNumberColumnFilter",editable:!0,headerComponentParams:{displayName:"רכז"},valueSetter:e=>(e.data.userContact=e.newValue,l(e.data),!0)},{field:"userScore",filter:"agNumberColumnFilter",editable:!0,headerComponentParams:{displayName:"ניקוד"},valueSetter:e=>(e.data.userScore=e.newValue,l(e.data),!0)},{field:"userLevel",filter:"agNumberColumnFilter",editable:!0,headerComponentParams:{displayName:"שלב"},valueSetter:e=>(e.data.userLevel=e.newValue,l(e.data),!0)},{field:"userBirthDate",filter:"agNumberColumnFilter",editable:!0,headerComponentParams:{displayName:"תאריך לידה"},valueSetter:e=>(e.data.userBirthDate=e.newValue,l(e.data),!0)},{field:"userRole",filter:"agNumberColumnFilter",editable:!0,headerComponentParams:{displayName:"סוג משתמש"},valueSetter:e=>(e.data.userRole=e.newValue,l(e.data),!0)}]);let l=async e=>{const a=await fetch(`http://localhost:3000/users/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},body:JSON.stringify(e)}),t=await a.json();console.log(t)};return{rowData:e,colDefs:t}}},d=t(89);const m=(0,d.Z)(u,[["render",o]]);var c=m,p={name:"AboutView",components:{tebleUsers:c}};const f=(0,d.Z)(p,[["render",n]]);var h=f}}]);
//# sourceMappingURL=about.6107d7be.js.map