(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(t,e,n){t.exports=n("2f39")},"034f":function(t,e,n){"use strict";var r=n("306c"),o=n.n(r);o.a},"2f39":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"GET_LIST",(function(){return H}));var o={};n.r(o),n.d(o,"SET_LIST",(function(){return J}));var i={};n.r(i),n.d(i,"SET_LIST_ASYN",(function(){return C}));var a={};n.r(a),n.d(a,"GET_LIST",(function(){return z})),n.d(a,"GET_PHOTO",(function(){return G}));var u={};n.r(u),n.d(u,"SET_LIST",(function(){return K})),n.d(u,"SET_PHOTO",(function(){return Y}));var s={};n.r(s),n.d(s,"SET_LIST_ASYN",(function(){return j})),n.d(s,"SET_PHOTO_ASYN",(function(){return M}));var c={};n.r(c),n.d(c,"GET_LIST",(function(){return $}));var l={};n.r(l),n.d(l,"SET_LIST",(function(){return Q}));var m={};n.r(m),n.d(m,"SET_LIST_ASYN",(function(){return F}));var p={};n.r(p),n.d(p,"GET_LIST",(function(){return Z}));var f={};n.r(f),n.d(f,"SET_LIST",(function(){return tt}));var h={};n.r(h),n.d(h,"SET_LIST_ASYN",(function(){return et}));var T={};n.r(T),n.d(T,"GET_LIST",(function(){return ot})),n.d(T,"GET_LOOKUP",(function(){return it})),n.d(T,"GET_PHOTO",(function(){return at}));var d={};n.r(d),n.d(d,"SET_LIST",(function(){return ut})),n.d(d,"SET_LOOKUP",(function(){return st})),n.d(d,"SET_PHOTO",(function(){return ct}));var b={};n.r(b),n.d(b,"SET_LIST_ASYN",(function(){return lt})),n.d(b,"SET_LOOKUP_ASYN",(function(){return mt})),n.d(b,"SET_PHOTO_ASYN",(function(){return pt}));var S=n("967e"),g=n.n(S),_=(n("a481"),n("96cf"),n("fa84")),E=n.n(_),L=(n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),v=n("1f91"),O=n("42d2"),R=n("b178");L["a"].use(R["c"],{config:{},lang:v["a"],iconSet:O["a"]});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},I=[],w=L["a"].extend({name:"App"}),A=w,N=(n("034f"),n("2877")),x=Object(N["a"])(A,P,I,!1,null,null,null),k=x.exports,y=n("2f62"),D={list:[]};function H(t){return t.list}function J(t,e){t.list=e.list}function C(t,e){t.commit("SET_LIST",e)}var B={namespaced:!0,getters:r,mutations:o,actions:i,state:D},q={list:[],photo:""};function z(t){return t.list}function G(t){return t.photo}function K(t,e){t.list=e.list}function Y(t,e){t.photo=e.photo}function j(t,e){t.commit("SET_LIST",e)}function M(t,e){t.commit("SET_PHOTO",e)}var U={namespaced:!0,getters:a,mutations:u,actions:s,state:q},V={list:[]};function $(t){return t.list}function Q(t,e){t.list=e.list}function F(t,e){t.commit("SET_LIST",e)}var W={namespaced:!0,getters:c,mutations:l,actions:m,state:V},X={list:[]};function Z(t){return t.list}function tt(t,e){t.list=e.list}function et(t,e){t.commit("SET_LIST",e)}var nt={namespaced:!0,getters:p,mutations:f,actions:h,state:X},rt={list:[],photo:"",lookup:[]};function ot(t){return t.list}function it(t){return t.lookup}function at(t){return t.photo}function ut(t,e){t.list=e.list}function st(t,e){t.lookup=e.lookup}function ct(t,e){t.photo=e.photo}function lt(t,e){t.commit("SET_LIST",e)}function mt(t,e){t.commit("SET_LOOKUP",e)}function pt(t,e){t.commit("SET_PHOTO",e)}var ft={namespaced:!0,getters:T,mutations:d,actions:b,state:rt};L["a"].use(y["a"]);var ht=function(){const t=new y["a"].Store({modules:{JobStore:B,EmployeeStore:U,RegionStore:W,EquipmentRepairStore:nt,NightReportStore:ft},strict:!1});return t},Tt=n("8c4f");const dt=[{path:"",redirect:"/Login"},{path:"/Login",name:"Login",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"013f")),meta:{title:"Login"}},{path:"/Dashboard",name:"Dashboard",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{title:"Dashboard"}},{path:"/EmployeeTimesheetList",name:"EmployeeTimesheetList",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"7498")),meta:{title:"Employee"}},{path:"/EmployeeTimesheetDetail",name:"EmployeeTimesheetDetail",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"9d8e")),meta:{title:"Employee"}},{path:"/JobTimesheetList",name:"JobTimesheetList",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"b52c")),meta:{title:"Job"}},{path:"/JobTimesheetDetail/:PK/:JobNumber?/:DateTime?",name:"JobTimesheetDetail",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"2448")),meta:{title:"Job"}},{path:"/RegionTimesheetList",name:"RegionTimesheetList",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"3f3f")),meta:{title:"Region"}},{path:"/RegionTimesheetDetail",name:"RegionTimesheetDetail",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"43fca")),meta:{title:"Region"}},{path:"/EquipmentRepairList",name:"EquipmentRepairList",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"4fd3")),meta:{title:"Equipment Repair List"}},{path:"/EquipmentRepairDetail",name:"EquipmentRepairDetail",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"0573")),meta:{title:"Equipment Repair Detail"}},{path:"/NightReportList",name:"NightReportList",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"a6a0")),meta:{title:"Night Report List"}},{path:"/NightReportDetail",name:"NightReportDetail",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"e861")),meta:{title:"Night Report Detail"}}];dt.push({path:"*",component:()=>n.e(4).then(n.bind(null,"e51e"))});var bt=dt,St=n("d257");L["a"].use(Tt["a"]);var gt=function(){const t=new Tt["a"]({scrollBehavior:()=>({x:0,y:0}),routes:bt,mode:"hash",base:""});return t.beforeEach((t,e,n)=>{"/Login"==t.path&&sessionStorage.clear(),St["a"].hasAuthorization()||"/Login"==t.path?n():n({path:"/Login"})}),t},_t=function(){return Et.apply(this,arguments)};function Et(){return Et=E()(g.a.mark((function t(){var e,n,r;return g.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("function"!==typeof ht){t.next=6;break}return t.next=3,ht({Vue:L["a"]});case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=ht;case 7:if(e=t.t0,"function"!==typeof gt){t.next=14;break}return t.next=11,gt({Vue:L["a"],store:e});case 11:t.t1=t.sent,t.next=15;break;case 14:t.t1=gt;case 15:return n=t.t1,e.$router=n,r={el:"#q-app",router:n,store:e,render:function(t){return t(k)}},t.abrupt("return",{app:r,store:e,router:n});case 19:case"end":return t.stop()}}),t)}))),Et.apply(this,arguments)}var Lt=n("a925"),vt={message:{failed:"Action failed",success:"Action was successful"}},Ot={message:{failed:"失败了!",success:"成功了！"}},Rt={"en-us":vt,"es-us":Ot};L["a"].use(Lt["a"]);const Pt=new Lt["a"]({locale:"en-us",fallbackLocale:"en-us",messages:Rt});var It=({app:t})=>{t.i18n=Pt};function wt(){return At.apply(this,arguments)}function At(){return At=E()(g.a.mark((function t(){var e,n,r,o,i,a,u,s,c;return g.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_t();case 2:e=t.sent,n=e.app,r=e.store,o=e.router,i=!0,a=function(t){i=!1,window.location.href=t},u=window.location.href.replace(window.location.origin,""),s=[It],c=0;case 11:if(!(!0===i&&c<s.length)){t.next=29;break}if("function"===typeof s[c]){t.next=14;break}return t.abrupt("continue",26);case 14:return t.prev=14,t.next=17,s[c]({app:n,router:o,store:r,Vue:L["a"],ssrContext:null,redirect:a,urlPath:u});case 17:t.next=26;break;case 19:if(t.prev=19,t.t0=t["catch"](14),!t.t0||!t.t0.url){t.next=24;break}return window.location.href=t.t0.url,t.abrupt("return");case 24:return console.error("[Quasar] boot error:",t.t0),t.abrupt("return");case 26:c++,t.next=11;break;case 29:if(!1!==i){t.next=31;break}return t.abrupt("return");case 31:new L["a"](n);case 32:case"end":return t.stop()}}),t,null,[[14,19]])}))),At.apply(this,arguments)}wt()},"306c":function(t,e,n){},"31cd":function(t,e,n){},d257:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{static setJob(t){localStorage.setItem("BOETA_RCHub_job",JSON.stringify(t))}static getJob(){const t=localStorage.getItem("BOETA_RCHub_job")||"";if(t.length>0){const e=JSON.parse(t);return{jobNumber:e.jobNumber,regionName:e.regionName,regionPK:e.regionPK}}return{jobNumber:"",regionName:"",regionPK:""}}static setRemeberMe(t){localStorage.setItem("BOETA_RCHub_remeberMe",t)}static getRemeberMe(){return localStorage.getItem("BOETA_RCHub_remeberMe")||""}static clearRemeberMe(){localStorage.removeItem("BOETA_RCHub_remeberMe")}static setAuthorization(t){sessionStorage.setItem("BOETA_RCHub_authorization",t)}static getAuthorization(){return sessionStorage.getItem("BOETA_RCHub_authorization")||""}static clearAuthorization(){sessionStorage.removeItem("BOETA_RCHub_authorization")}static hasAuthorization(){const t=sessionStorage.getItem("BOETA_RCHub_authorization")||"";return t.length>0}static getTicks(){const t=621355968e9,e=1e4;return t+(new Date).getTime()*e}static encryptPassword(t,e){const n=[];for(let r=0;r<e.length;r++)if(r<t.length){const o=e.charCodeAt(r)+t.charCodeAt(r)-37;n.push(o.toString())}else{const t=e.charCodeAt(r)+7;n.push(t.toString())}return n.join(" ")+" "}}}},[[0,3,0]]]);