(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={contacts:"List_contacts__16sbc",listItem:"List_listItem__1_6O4",button:"List_button__2n2nO"}},20:function(t,e,n){t.exports={labelStyle:"Filter_labelStyle__2Fq66"}},49:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(9),l=n.n(o),s=n(12),i=n(3),u=n(4),b=n(18),j=n.n(b),d=n(7),h=n(2),O=n(23),m=n.n(O),f={addContact:Object(i.b)("contacts/Add",(function(t,e){return{payload:{id:m.a.generate(),name:t,number:e}}})),deleteContact:Object(i.b)("contacts/Delete"),ChangeFilter:Object(i.b)("contacts/ChangeFilter")},p=Object(i.c)([],(a={},Object(d.a)(a,f.addContact,(function(t,e){var n=e.payload;return[].concat(Object(s.a)(t),[n])})),Object(d.a)(a,f.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),C=Object(i.c)("",Object(d.a)({},f.ChangeFilter,(function(t,e){return e.payload}))),x=Object(h.c)({contacts:p,filter:C}),v=n(24),y=n.n(v),_=(j.a,[].concat(Object(s.a)(Object(i.d)({serializableCheck:{ignoredActions:[u.a,u.f,u.b,u.c,u.d,u.e]}})),[y.a])),g={key:"contacts",storage:j.a,blacklist:["filter "]},S=Object(i.a)({reducer:{contacts:Object(u.g)(g,x)},middleware:_,devTools:!1}),N={store:S,persistor:Object(u.h)(S)},T=n(5),k=n(26),w=n(10),F=n(11),L=n(14),A=n(13),D=n(6),I=n.n(D),z=n(1),J=function(t){Object(L.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(w.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.name,t.state.number),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(F.a)(n,[{key:"render",value:function(){return Object(z.jsxs)("div",{className:I.a.titleText,children:[Object(z.jsx)("h1",{children:"Phonebook"}),Object(z.jsxs)("form",{onSubmit:this.handleSubmit,className:I.a.headStyle,children:[Object(z.jsxs)("label",{className:I.a.labelStyle,children:["Name",Object(z.jsx)("input",{className:I.a.inputStyle,name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(z.jsxs)("label",{className:I.a.labelStyle,children:["Number",Object(z.jsx)("input",{className:I.a.inputStyle,name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(z.jsx)("button",{type:"submit",className:I.a.button,children:"Add contact"})]})]})}}]),n}(c.Component),P=Object(T.b)(null,(function(t){return{onSubmit:function(e,n){return t(f.addContact(e,n))}}}))(J),X=n(15),q=n.n(X),B=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},E=Object(T.b)((function(t){var e=t.contacts,n=e.contacts,a=e.filter;return{contacts:B(n,a)}}),(function(t){return{onDeleteContact:function(e){return t(f.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(z.jsx)("ul",{className:q.a.contacts,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(z.jsxs)("li",{className:q.a.listItem,children:[Object(z.jsxs)("p",{children:[a,": ",c]}),Object(z.jsx)("button",{type:"button",className:q.a.button,onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})})),K=n(20),M=n.n(K),R=function(t){var e=t.value,n=t.onChange;return Object(z.jsxs)("div",{className:M.a.filterTitle,children:[Object(z.jsx)("h2",{children:"Contacts"}),Object(z.jsxs)("label",{className:M.a.labelStyle,children:["Find contacts by name",Object(z.jsx)("input",{type:"text",value:e,onChange:n})]})]})};R.defaultProps={filterValue:""};var V=Object(T.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(f.ChangeFilter(e.target.value))}}}))(R),Y=function(t){Object(L.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(w.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={},t}return Object(F.a)(n,[{key:"render",value:function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(P,{}),Object(z.jsx)(V,{}),Object(z.jsx)(E,{})]})}}]),n}(c.Component);l.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(T.a,{store:N.store,children:Object(z.jsx)(k.a,{loading:null,persistor:N.persistor,children:Object(z.jsx)(Y,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={headStyle:"TodoContact_headStyle__226YT",labelStyle:"TodoContact_labelStyle__2uzbT",inputStyle:"TodoContact_inputStyle__v7LkN",button:"TodoContact_button__3KXg3",titleText:"TodoContact_titleText__1RsXt"}}},[[49,1,2]]]);
//# sourceMappingURL=main.8362e8a7.chunk.js.map