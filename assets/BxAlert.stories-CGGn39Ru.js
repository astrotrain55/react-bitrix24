import{f as $}from"./index-M-tjR7DQ.js";import{j as r,g as w,S as l}from"./getClassName-BzrhRKf7.js";import"./index-CDs2tPxN.js";const o={sizes:["md","xs"],colors:["default","primary","success","warning","danger"],icons:["","warning","danger","info"]},e={title:"Внимание!",size:o.sizes[0],color:o.colors[0],icon:o.icons[0],center:!1,inline:!1,closing:!1};function s({children:C,...N}){const{onClose:L=()=>null,title:p=e.title,size:d=e.size,color:u=e.color,icon:a=e.icon,center:P=e.center,inline:T=e.inline,closing:V=e.closing}=N,_={[`ui-alert-${d}`]:o.sizes.includes(d),[`ui-alert-${u}`]:o.colors.includes(u),[`ui-alert-icon-${a}`]:!!a&&o.icons.includes(a),"ui-alert-text-center":P,"ui-alert-inline":T};return r.jsxs("div",{className:w("ui-alert",_),children:[r.jsxs("span",{className:"ui-alert-message",children:[p?r.jsx("strong",{children:p}):""," ",C]}),V?r.jsx("span",{className:"ui-alert-close-btn",onClick:I=>L(I)}):""]})}s.__docgenInfo={description:"",methods:[],displayName:"BxAlert"};const v={title:"BxAlert",args:{children:"",onClose:$(),title:e.title,size:e.size,color:e.color,icon:e.icon,center:e.center,inline:e.inline,closing:e.closing},argTypes:{children:{control:{type:"text"}},title:{control:{type:"text"}},size:{options:o.sizes,control:{type:"inline-radio"}},color:{options:o.colors,control:{type:"inline-radio"}},icon:{options:o.icons,control:{type:"inline-radio"}},center:{control:{type:"boolean"}},inline:{control:{type:"boolean"}},closing:{control:{type:"boolean"}}}},t=l(s).bind({}),i=l(s,"size",o.sizes),n=l(s,"color",o.colors),c=l(s,"icon",o.icons);var m,g,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"Story(BxAlert).bind({})",...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,z,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:"Story<TypesPropsList>(BxAlert, 'size', propsValues.sizes)",...(f=(z=i.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var S,B,A;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:"Story<TypesPropsList>(BxAlert, 'color', propsValues.colors)",...(A=(B=n.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var b,h,j;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:"Story<TypesPropsList>(BxAlert, 'icon', propsValues.icons)",...(j=(h=c.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const O=["Default","Sizes","Colors","Icons"];export{n as Colors,t as Default,c as Icons,i as Sizes,O as __namedExportsOrder,v as default};