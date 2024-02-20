(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{18:function(e,s,t){},21:function(e,s,t){},41:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(11),r=t.n(a),i=(t(18),t(8)),n=t(12),l=t.n(n),j=(t(21),t(3)),d=t.n(j),o=t(0);class h extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.project,s=this.props.data.github,t=this.props.data.name,c=this.props.data.description;return Object(o.jsxs)("header",{id:"home",children:[Object(o.jsxs)("nav",{id:"nav-wrap",children:[Object(o.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(o.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(o.jsxs)("ul",{id:"nav",className:"nav",children:[Object(o.jsx)("li",{className:"current",children:Object(o.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(o.jsx)("div",{className:"row banner",children:Object(o.jsxs)("div",{className:"banner-text",children:[Object(o.jsx)(d.a,{bottom:!0,children:Object(o.jsx)("h1",{className:"responsive-headline",children:t})}),Object(o.jsx)(d.a,{bottom:!0,duration:1200,children:Object(o.jsxs)("h3",{children:[c,"."]})}),Object(o.jsx)("hr",{}),Object(o.jsx)(d.a,{bottom:!0,duration:2e3,children:Object(o.jsxs)("ul",{className:"social",children:[Object(o.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(o.jsx)("i",{className:"fa fa-book"}),"Project"]}),Object(o.jsxs)("a",{href:s,className:"button btn github-btn",children:[Object(o.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(o.jsx)("p",{className:"scrolldown",children:Object(o.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(o.jsx)("i",{className:"icon-down-circle"})})})]})}}var b=h;class m extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.social.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:e.url,children:Object(o.jsx)("i",{className:e.className})})},e.name)}));return Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(d.a,{bottom:!0,children:Object(o.jsxs)("div",{className:"twelve columns",children:[Object(o.jsx)("ul",{className:"social-links",children:e}),Object(o.jsx)("ul",{className:"copyright",children:Object(o.jsx)("li",{children:"\xa9 Copyright 2021 Nordic Giant"})})]})}),Object(o.jsx)("div",{id:"go-top",children:Object(o.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(o.jsx)("i",{className:"icon-up-open"})})})]})})}}var x=m;class O extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,c=this.props.data.address.street,a=this.props.data.address.city,r=this.props.data.address.state,i=this.props.data.address.zip,n=this.props.data.phone,l=this.props.data.email,j=this.props.data.resumedownload;return Object(o.jsx)("section",{id:"about",children:Object(o.jsx)(d.a,{duration:1e3,children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"three columns",children:Object(o.jsx)("img",{className:"profile-pic",src:s,alt:"Felix Jr Lazarte"})}),Object(o.jsxs)("div",{className:"nine columns main-col",children:[Object(o.jsx)("h2",{children:"About Me"}),Object(o.jsx)("p",{children:t}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"columns contact-details",children:[Object(o.jsx)("h2",{children:"Contact Details"}),Object(o.jsxs)("p",{className:"address",children:[Object(o.jsx)("span",{children:e}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{children:[c,Object(o.jsx)("br",{}),a," ",r,", ",i]}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:n}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:l})]})]}),Object(o.jsx)("div",{className:"columns download",children:Object(o.jsx)("p",{children:Object(o.jsxs)("a",{href:j,className:"button",children:[Object(o.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}var u=O,p=t(7),N=t.n(p);class f extends c.Component{getRandomColor(){let e="#";for(let s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}render(){if(!this.props.data)return null;const e=this.props.data.education.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.school}),Object(o.jsxs)("p",{className:"info",children:[e.degree," ",Object(o.jsx)("span",{children:"\u2022"}),Object(o.jsx)("em",{className:"date",children:e.graduated})]}),Object(o.jsx)("p",{children:e.description}),Object(o.jsx)("p",{children:"Achievements"}),e.achievements.map((e=>{let{title:s,dateIssued:t}=e;return Object(o.jsxs)("p",{className:"achievements",children:[Object(o.jsx)("span",{children:"\u2022"}),s," ",Object(o.jsx)("span",{children:"\u2022"}),Object(o.jsx)("em",{className:"date",children:t})]})}))]},e.school)})),s=this.props.data.work.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.company}),Object(o.jsxs)("p",{className:"info",children:[e.title,Object(o.jsx)("span",{children:"\u2022"})," ",Object(o.jsx)("em",{className:"date",children:e.years})]}),e.description&&e.description.map((e=>Object(o.jsx)("p",{className:"workdescription",children:e})))]},e.company)})),t=this.props.data.skills.map((e=>{let s="images/skills/"+e.image;return Object(o.jsxs)("div",{children:[Object(o.jsx)(N.a,{alt:e.name,src:s,width:50}),Object(o.jsx)("div",{children:e.name})]})}));return Object(o.jsxs)("section",{id:"resume",children:[Object(o.jsx)(d.a,{left:!0,duration:1300,children:Object(o.jsxs)("div",{className:"row education",children:[Object(o.jsx)("div",{className:"three columns header-col",children:Object(o.jsx)("h1",{children:Object(o.jsx)("span",{children:"Education"})})}),Object(o.jsx)("div",{className:"nine columns main-col",children:Object(o.jsx)("div",{className:"row item",children:Object(o.jsx)("div",{className:"twelve columns",children:e})})})]})}),Object(o.jsx)(d.a,{left:!0,duration:1300,children:Object(o.jsxs)("div",{className:"row work",children:[Object(o.jsx)("div",{className:"three columns header-col",children:Object(o.jsx)("h1",{children:Object(o.jsx)("span",{children:"Work"})})}),Object(o.jsx)("div",{className:"nine columns main-col",children:s})]})}),Object(o.jsx)(d.a,{left:!0,duration:1300,children:Object(o.jsxs)("div",{className:"row skill",children:[Object(o.jsx)("div",{className:"three columns header-col",children:Object(o.jsx)("h1",{children:Object(o.jsx)("span",{children:"Skills"})})}),Object(o.jsx)("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",padding:"20px"},children:t})]})})]})}}var v=f,g=t(13);var w=e=>{const s=Object(c.useRef)(),[t,a]=Object(c.useState)(""),[r,i]=Object(c.useState)(!1);if(!e.data)return null;const{name:n,phone:l,contactmessage:d}=e.data,{street:h,city:b,state:m,zip:x}=e.data.address;return Object(o.jsxs)("section",{id:"contact",children:[Object(o.jsx)(j.Fade,{bottom:!0,duration:1e3,children:Object(o.jsxs)("div",{className:"row section-head",children:[Object(o.jsx)("div",{className:"two columns header-col",children:Object(o.jsx)("h1",{children:Object(o.jsx)("span",{children:"Get In Touch."})})}),Object(o.jsx)("div",{className:"ten columns",children:Object(o.jsx)("p",{className:"lead",children:d})})]})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(j.Slide,{left:!0,duration:1e3,children:Object(o.jsxs)("div",{className:"eight columns",children:[Object(o.jsx)("form",{id:"contact-form",ref:s,onSubmit:e=>{e.preventDefault(),i(!0),g.a.sendForm("service_fjl07151997","template_fjl07151997",s.current,"DQgUOYc2Jp-I3qeKX").then((e=>{document.getElementById("contact-form").reset(),a("success"),i(!1)}),(e=>{a("error"),document.getElementById("contact-form").reset(),i(!1)}))},children:Object(o.jsxs)("fieldset",{children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(o.jsx)("span",{className:"required",children:"*"})]}),Object(o.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"from_name",required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(o.jsx)("span",{className:"required",children:"*"})]}),Object(o.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"user_email",required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(o.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject"})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(o.jsx)("span",{className:"required",children:"*"})]}),Object(o.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"message",required:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"submit",disabled:r,children:"Submit"}),r&&Object(o.jsx)("span",{id:"image-loader",children:Object(o.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),"error"===t&&Object(o.jsx)("div",{id:"message-warning",children:" Error sending your email! Please try again later"}),"success"===t&&Object(o.jsxs)("div",{id:"message-success",children:[Object(o.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(o.jsx)("br",{})]})]})}),Object(o.jsx)(j.Slide,{right:!0,duration:1e3,children:Object(o.jsx)("aside",{className:"four columns footer-widgets",children:Object(o.jsxs)("div",{className:"widget widget_contact",children:[Object(o.jsx)("h4",{children:"Address and Phone"}),Object(o.jsxs)("p",{className:"address",children:[n,Object(o.jsx)("br",{}),h," ",Object(o.jsx)("br",{}),b,", ",m," ",x,Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:l})]})]})})})]})]})};let y=0;class k extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.projects.map((function(e){let s="images/portfolio/"+e.image;return Object(o.jsx)("div",{className:"columns portfolio-item",children:Object(o.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(o.jsxs)("div",{className:"item-wrap",children:[Object(o.jsx)(N.a,{alt:e.title,src:s}),Object(o.jsx)("div",{style:{textAlign:"center"},children:e.title})]})})},y++)}));return Object(o.jsx)("section",{id:"portfolio",children:Object(o.jsx)(d.a,{left:!0,duration:1e3,distance:"40px",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"twelve columns collapsed",children:[Object(o.jsx)("h1",{children:"Check Out Some of My Works."}),Object(o.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}var D=k;class S extends c.Component{constructor(e){super(e),this.state={foo:"bar",resumeData:{}},i.a.initialize("UA-110570651-1"),i.a.pageview(window.location.pathname)}getResumeData(){l.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}componentDidMount(){this.getResumeData()}render(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{data:this.state.resumeData.main}),Object(o.jsx)(u,{data:this.state.resumeData.main}),Object(o.jsx)(v,{data:this.state.resumeData.resume}),Object(o.jsx)(D,{data:this.state.resumeData.portfolio}),Object(o.jsx)(w,{data:this.state.resumeData.main}),Object(o.jsx)(x,{data:this.state.resumeData.main})]})}}var C=S;var F=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((s=>{let{getCLS:t,getFID:c,getFCP:a,getLCP:r,getTTFB:i}=s;t(e),c(e),a(e),r(e),i(e)}))};r.a.render(Object(o.jsx)(C,{}),document.getElementById("root")),F()}},[[41,1,2]]]);
//# sourceMappingURL=main.7a412a8e.chunk.js.map