"use strict";(self.webpackChunkexpense_tracker_app=self.webpackChunkexpense_tracker_app||[]).push([[336],{6306:function(e,n,r){r.d(n,{s:function(){return o}});var a=r(9439),s=r(2791),t=r(2927),i={containerImg:"BgImageWrapper_containerImg__2XDcO",containerSvg:"BgImageWrapper_containerSvg__wChVN",icon:"BgImageWrapper_icon__Y-tXs",containerText:"BgImageWrapper_containerText__dogbM",moveBox:"BgImageWrapper_moveBox__FESZv",containerBalance:"BgImageWrapper_containerBalance__+jgEq",text:"BgImageWrapper_text__fXYZe",balance:"BgImageWrapper_balance__6EXKP",containerPercent:"BgImageWrapper_containerPercent__ovNOW",percent:"BgImageWrapper_percent__8LxOt"},c=r(3329),o=function(){var e=(0,s.useState)(1),n=(0,a.Z)(e,2),r=n[0],o=n[1],m=(0,s.useState)(15),l=(0,a.Z)(m,1)[0],u=(0,s.useState)(0),d=(0,a.Z)(u,2),_=d[0],g=d[1],p=(0,s.useState)(0),h=(0,a.Z)(p,2),x=h[0],v=h[1],f=(0,s.useRef)(null),j=(0,s.useRef)(null),N=(0,s.useRef)(window.innerWidth);(0,s.useEffect)((function(){g((899*Math.random()+100).toFixed(3)),v(99*Math.random()+1)}),[r]);var I=function e(){var n=(performance.now()-j.current)/(1e3*l)*100;N.current!==window.innerWidth&&window.innerWidth<768||(w(n),f.current=requestAnimationFrame(e))},w=function(e){o((function(n){var r=Math.ceil(e/12.5);return r!==n?r:n}))};return(0,c.jsx)("div",{className:i.containerImg,children:(0,c.jsxs)("div",{className:i.containerText,onAnimationStart:function(){var e=window.innerWidth;N.current=e,e<768||(j.current=performance.now(),f.current=requestAnimationFrame(I))},children:[(0,c.jsx)("div",{className:i.containerSvg,children:(0,c.jsx)(t.J,{name:"arrow-up",className:i.icon,size:"18"})}),(0,c.jsxs)("div",{className:i.containerBalance,children:[(0,c.jsx)("p",{className:i.text,children:"Your balance"}),(0,c.jsx)("p",{className:i.balance,children:"$".concat(_)})]}),(0,c.jsx)("div",{className:i.containerPercent,children:(0,c.jsx)("p",{className:i.percent,children:"+".concat(x.toFixed(2),"%")})}),(0,c.jsx)("p",{className:i.dynamicText})]})})}},1160:function(e,n,r){r.d(n,{Z:function(){return N}});var a=r(1413),s=r(4942),t=r(9439),i=r(2791),c=r(1134),o=r(4420),m=r(7689),l=r(1087),u=r(4695),d=r(1418),_=r.n(d),g=r(5985),p=r(6306),h=r(2927),x=r(6476),v=r(1755),f={container:"RegisterForm_container__w0Atp",containerImg:"RegisterForm_containerImg__NqqMr",containerTitle:"RegisterForm_containerTitle__yYLbM",title:"RegisterForm_title__EvDyW",text:"RegisterForm_text__cFC0o",form:"RegisterForm_form__Tv43W",containerForm:"RegisterForm_containerForm__OE-P+",input:"RegisterForm_input__FsgBz",containerIcon:"RegisterForm_containerIcon__sm6ah",icon:"RegisterForm_icon__Xn6st",button:"RegisterForm_button__B3hFq",containerLink:"RegisterForm_containerLink__P82tD",link:"RegisterForm_link__xu2eW",span:"RegisterForm_span__L8jVb",successInput:"RegisterForm_successInput__CuHET",errorInput:"RegisterForm_errorInput__LuqSs",successIcon:"RegisterForm_successIcon__J33Wc",errorIcon:"RegisterForm_errorIcon__HFULE",messageErr:"RegisterForm_messageErr__-+9wz",messageSec:"RegisterForm_messageSec__nVTAy"},j=r(3329),N=function(e){var n,r,d,N,I=e.signUp,w=(0,i.useState)(!1),b=(0,t.Z)(w,2),F=b[0],q=b[1],S=(0,c.cI)({mode:"onChange",resolver:(0,u.X)(I?v.JJ:v.wL)}),R=S.register,Z=S.reset,y=S.handleSubmit,W=S.formState,B=W.errors,E=W.dirtyFields,k=(0,m.s0)(),M=(0,o.I0)(),A=function(e){var n,r,a;return _()((a={},(0,s.Z)(a,"".concat(f.input),!0),(0,s.Z)(a,"".concat(f.errorInput),(null===(n=B[e])||void 0===n?void 0:n.message)&&E[e]),(0,s.Z)(a,"".concat(f.successInput),!(null!==(r=B[e])&&void 0!==r&&r.message)&&E[e]),a))},J=function(e){var n,r,a;return null!==(n=B[e])&&void 0!==n&&n.message&&E[e]?(0,j.jsx)("p",{className:f.messageErr,children:null===(a=B[e])||void 0===a?void 0:a.message}):(0,j.jsx)("p",{className:f.messageSec,children:null!==(r=B[e])&&void 0!==r&&r.message||!E[e]?"":"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)," is entered correct")})};return(0,j.jsxs)("div",{className:f.container,children:[(0,j.jsx)("div",{className:f.containerImg,children:(0,j.jsx)(p.s,{})}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:f.containerTitle,children:[(0,j.jsx)("h2",{className:f.title,children:I?"Sign Up":"Sign In"}),(0,j.jsx)("p",{className:f.text,children:I?"Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.":"Welcome back to effortless expense tracking! Your financial dashboard awaits."})]}),(0,j.jsx)("div",{className:f.containerForm,children:(0,j.jsx)("div",{className:f.container,children:(0,j.jsxs)("form",{onSubmit:y((function(e){var n=e.name,r={email:e.email,password:e.password};I&&(r.name=n),M(I?(0,x.a$)(r):(0,x.Ib)(r)).unwrap().then((function(e){Z(),g.Am.success("Welcome, ".concat(I?e.name:e.user.name,"!")),I&&k("/login")})).catch((function(e){400===e.response.status?g.Am.error("Invalid data. Please check your input."):409===e.response.status?g.Am.error("User already exists. Please choose a different email."):403===e.response.status?g.Am.error("Invalid password."):g.Am.error("An error occurred. Please try again later.")}))})),className:f.form,children:[I&&(0,j.jsxs)("div",{className:f.containerIcon,children:[(0,j.jsx)("input",(0,a.Z)({name:"name",type:"text",placeholder:"Name",className:A("name")},R("name"))),!(null!==(n=B.name)&&void 0!==n&&n.message)&&E.name&&(0,j.jsx)(h.J,{name:"success",size:"16",className:f.successIcon}),(null===(r=B.name)||void 0===r?void 0:r.message)&&E.name&&(0,j.jsx)(h.J,{name:"error",size:"16",className:f.errorIcon}),J("name")]}),(0,j.jsxs)("div",{className:f.containerIcon,children:[(0,j.jsx)("input",(0,a.Z)({name:"email",type:"text",placeholder:"Email",className:A("email")},R("email"))),!(null!==(d=B.email)&&void 0!==d&&d.message)&&E.email&&(0,j.jsx)(h.J,{name:"success",size:"16",className:f.successIcon}),(null===(N=B.email)||void 0===N?void 0:N.message)&&E.email&&(0,j.jsx)(h.J,{name:"error",size:"16",className:f.errorIcon}),J("email")]}),(0,j.jsx)("div",{children:(0,j.jsxs)("div",{className:f.containerIcon,children:[(0,j.jsx)("input",(0,a.Z)({name:"password",type:F?"text":"password",placeholder:"Password",className:A("password")},R("password"))),(0,j.jsx)("button",{type:"button",onClick:function(){return q((function(e){return!e}))},children:F?(0,j.jsx)(h.J,{name:"eye",className:f.icon,size:"16"}):(0,j.jsx)(h.J,{name:"eye-off",className:f.icon,size:"16"})}),J("password")]})}),(0,j.jsx)("div",{className:f.containerButton,children:(0,j.jsx)("button",{type:"submit",className:f.button,children:I?"Sign Up":"Sign In"})})]})})}),(0,j.jsx)("div",{className:f.containerLink,children:(0,j.jsxs)(l.OL,{className:f.link,to:I?"/login":"/register",children:[I?"Already have an account?":"Don't have an account?"," ",(0,j.jsx)("span",{className:f.span,children:I?"Sign In":"Sign Up"})]})})]})]})}},6336:function(e,n,r){r.r(n),r.d(n,{default:function(){return i}});var a=r(1160),s="Login_container__-h4N5",t=r(3329),i=function(){return(0,t.jsx)("div",{className:s,children:(0,t.jsx)(a.Z,{signIn:!0})})}},1755:function(e,n,r){r.d(n,{DT:function(){return i},JJ:function(){return s},wL:function(){return t}});var a=r(8007),s=a.Ry({name:a.Z_().required("Name is required").min(2,"Min length must be more than 2 chars").max(32,"Max length must be less than 32 chars"),email:a.Z_().email("Enter a valid Email").required("Email is required").max(64,"Max length must be less than 64 chars"),password:a.Z_().required("Password is required").min(8,"Min length must be more than 8 chars").max(64,"Max length must be less than 64 chars")}),t=a.Ry().shape({email:a.Z_().email("Enter a valid Email").required("Email is required").max(64,"Max length must be less than 64 chars"),password:a.Z_().required("Password is required").min(8,"Min length must be more than 8 chars").max(64,"Max length must be less than 64 chars")}),i=a.Ry({date:a.Z_().required("Date is required"),time:a.Z_().required("Time is required"),category:a.Z_().required("Category is required"),sum:a.Z_().matches(/^[1-9][0-9]*$/,"Sum must be greater than 0").test("max","Sum must be less than or equal to 1000000",(function(e){if(!e)return!0;var n=parseInt(e,10);return!isNaN(n)&&n<=1e6})).required("Sum is required"),comment:a.Z_().required("Comment is required").min(3,"Comment length must be at least 3 characters long")})}}]);
//# sourceMappingURL=336.ee5daf03.chunk.js.map