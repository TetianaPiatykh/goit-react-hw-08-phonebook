"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[96],{4096:function(n,e,o){o.r(e),o.d(e,{default:function(){return J}});var t,r,a,i,c,s,d,l,x,p,u,f,b=o(2791),h=o(9434),m=o(4270),g=o(168),Z=o(6444),j=Z.ZP.li(t||(t=(0,g.Z)(["\n  display: flex;\n//   flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n   border: 1px solid ;\n    border-color: #cdedff;\n    margin-bottom: 5px;\n  \n"]))),w=Z.ZP.ul(r||(r=(0,g.Z)(["\nwidth: 100%;\n"]))),v=Z.ZP.p(a||(a=(0,g.Z)(["\npadding-left: 5px;\nfont-size: 18px;\nfont-weight: 700;\ncolor: #295a7a;\n"]))),y=Z.ZP.button(i||(i=(0,g.Z)(["\nbackground-color: #85a4b9;\n    border: none;\n    color: white;\n    padding: 10px 20px;\n    text-decoration: none;\n    margin: 4px 2px;\n    cursor: pointer;\n    font-size: 12px;\n         &:hover {\n    border: 3px solid ;\n    border-color: #93a0a9;\n    font-size: 16px;\n    padding: 6px 12px;\n     box-shadow: 1px 1px 2px 3px #85a4b9;\n     }\n"]))),C=o(9135),P=o(3634),k=o(3329),z=function(n){var e=n.id,o=n.name,t=n.number,r=(0,h.I0)();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(v,{children:[(0,k.jsx)(C.BKo,{})," ",o," : ",t]}),(0,k.jsx)(y,{type:"button",onClick:function(){return r((0,P.GK)(e))},children:"Delete"})]})},_=function(n){return n.contacts.contacts.items},L=function(n){return n.contacts.contacts.isLoading},A=function(n){return n.contacts.contacts.error},q=function(n){return n.contacts.filter},I=function(){var n=(0,h.v9)(_),e=(0,h.v9)(q);console.log(n),console.log(e);return(0,k.jsx)(w,{children:function(){var o=e.toLowerCase();return console.log(e.toLowerCase()),n.filter((function(n){return n.name.toLocaleLowerCase().includes(o)}))}().map((function(n){var e=n.id,o=n.name,t=n.number;return(0,k.jsx)(j,{children:(0,k.jsx)(z,{id:e,name:o,number:t})},e)}))})},N=o(885),S=Z.ZP.form(c||(c=(0,g.Z)(["\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n    border-radius: 1px;\n    border: 3px solid;\n    border-color: #a4d7f9;\n    width: 100%;\n"]))),D=Z.ZP.label(s||(s=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 20px;\n  // width: 100%;\n  width: 300px;\n  \n"]))),F=Z.ZP.span(d||(d=(0,g.Z)(["\nmargin-bottom: 5px;\nfont-size: 25px;\ncolor: #295a7a;\nwidth: 100%;\n"]))),K=Z.ZP.button(l||(l=(0,g.Z)(["\n    background-color: #85a4b9;\n    border: none;\n    color: white;\n    padding: 12px 24px;\n    text-decoration: none;\n    margin: 10px 4px 15px 4px;\n    cursor: pointer;\n    font-size: 18px;\n         &:hover {\n    border: 3px solid ;\n    margin-top: 7px;\n    margin-bottom: 9px;\n    border-color: #93a0a9;\n    font-size: 24px;\n    padding: 10px 20px;\n     box-shadow: 1px 1px 2px 3px #85a4b9;\n     }\n"]))),T=Z.ZP.input(x||(x=(0,g.Z)(["\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px auto;\n    outline: none;\n    // box-sizing: border-box;\n    border-radius: 4px;\n    border: 3px solid;\n    border-color: #a4d7f9;\n\n     &:focus {\n    border: 3px solid ;\n    border-color: #d6efff;\n     background-color: #f8fcff;\n     box-shadow: 1px 1px 2px 3px #d6efff;\n     }\n"]))),B=function(){var n=(0,h.v9)(_),e=(0,h.I0)(),o=(0,b.useState)(""),t=(0,N.Z)(o,2),r=t[0],a=t[1],i=(0,b.useState)(""),c=(0,N.Z)(i,2),s=c[0],d=c[1],l=function(n){switch(n.currentTarget.name){case"name":a(n.currentTarget.value);break;case"number":d(n.currentTarget.value)}},x=function(){a(""),d("")};return(0,k.jsxs)(S,{onSubmit:function(o){if(o.preventDefault(),n.some((function(n){return n.name.toLowerCase()===r.toLowerCase()})))return alert(r+" is already in contacts!");console.log(n);var t={contactName:r,number:s};console.log(t),e((0,P.uK)(t)),x()},children:[(0,k.jsxs)(D,{children:[(0,k.jsx)(F,{children:"Name"}),(0,k.jsx)(T,{type:"text",name:"name",value:r,onChange:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)(D,{children:[(0,k.jsx)(F,{children:"Number"}),(0,k.jsx)(T,{type:"tel",name:"number",value:s,onChange:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be at least 7 digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,k.jsx)(K,{type:"submit",children:"add contact"})]})},E=(Z.ZP.div(p||(p=(0,g.Z)(["\nwidth: 800px;\nmargin: 0 auto;\n"]))),Z.ZP.h1(u||(u=(0,g.Z)(["\n color: #082c43;\n"])))),G=Z.ZP.h2(f||(f=(0,g.Z)(["\n color: #082c43;\n"])));function J(){var n=(0,h.I0)(),e=(0,h.v9)(L),o=(0,h.v9)(A),t=(0,h.v9)(_);return(0,b.useEffect)((function(){n((0,P.yF)())}),[n]),(0,k.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:28,width:"100%",color:"#010101"},children:[(0,k.jsx)(m.q,{children:(0,k.jsx)("title",{children:"Contacts"})}),(0,k.jsx)(E,{children:"Phonebook"}),(0,k.jsx)(B,{}),(0,k.jsx)(G,{children:"Contacts"}),e&&!o&&(0,k.jsx)("b",{children:"Request in progress..."}),t&&!e&&(0,k.jsx)(I,{})]})}}}]);
//# sourceMappingURL=96.15f8d6d6.chunk.js.map