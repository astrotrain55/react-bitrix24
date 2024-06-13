import{f as p}from"./index-M-tjR7DQ.js";import{j as r,g as l,S as c}from"./getClassName-BzrhRKf7.js";import"./index-CDs2tPxN.js";const e={sizes:["md","lg","sm","xs"],colors:["","success","warning","danger"],icons:["","search","calendar","dots","phone","mail","clock","angle","clear","loader"],tagColors:["default","light","light-blue"]},o={value:"",placeholder:"",disabled:!1,size:e.sizes[0],color:e.colors[0],inline:!1,noBorder:!1,underline:!1,noPadding:!1,round:!1,tag:"",tagColor:e.tagColors[0],beforeIcon:e.icons[0],beforeExt:!1,beforeButton:!1,afterIcon:e.icons[0],afterExt:!1,afterButton:!1},S={"bx-input":"_bx-input_1rxi7_1","bx-input-before":"_bx-input-before_1rxi7_5"};function n(G){const{onInput:H=()=>null,onChange:J=()=>null,onClickBefore:K=()=>null,onClickAfter:M=()=>null,value:Q=o.value,placeholder:U=o.placeholder,disabled:W=o.disabled,size:I=o.size,color:B=o.color,inline:X=o.inline,noBorder:Y=o.noBorder,underline:Z=o.underline,noPadding:oo=o.noPadding,round:eo=o.round,tag:y=o.tag,tagColor:C=o.tagColor,beforeIcon:s=o.beforeIcon,beforeExt:i=o.beforeExt,beforeButton:to=o.beforeButton,afterIcon:a=o.afterIcon,afterExt:u=o.afterExt,afterButton:ro=o.afterButton}=G,no={[`ui-ctl-${I}`]:e.sizes.includes(I),[`ui-ctl-${B}`]:!!B&&e.colors.includes(B),"ui-ctl-before-icon":!!s&&!i,"ui-ctl-ext-before-icon":!!s&&i,"ui-ctl-after-icon":!!a&&!u,"ui-ctl-ext-after-icon":!!a&&u,"ui-ctl-inline":X,"ui-ctl-no-border":Y,"ui-ctl-underline":Z,"ui-ctl-no-padding":oo,"ui-ctl-round":eo,[S["bx-input"]]:!0},h={"ui-ctl-before":!i,"ui-ctl-ext-before":i,[`ui-ctl-icon-${s}`]:!!s&&e.icons.includes(s),[S["bx-input-before"]]:!0},z={"ui-ctl-after":!u,"ui-ctl-ext-after":u,[`ui-ctl-icon-${a}`]:!!a&&e.icons.includes(a)},so={"--tag_light":C==="light","--tag_light-blue":C==="light-blue"},ao=to?r.jsx("button",{className:l("",h),onClick:t=>K(t)}):r.jsx("div",{className:l("",h)}),lo=ro?r.jsx("button",{className:l("",z),onClick:t=>M(t)}):r.jsx("div",{className:l("",z)}),co=r.jsx("div",{className:l("ui-ctl-tag",so),children:y});return r.jsxs("div",{className:l("ui-ctl ui-ctl-textbox",no),children:[s?ao:"",a?lo:"",y?co:"",r.jsx("input",{type:"text",className:"ui-ctl-element",value:Q,placeholder:U,disabled:W,onInput:t=>H(t),onChange:t=>J(t)})]})}n.__docgenInfo={description:"",methods:[],displayName:"BxInput"};const fo={title:"Form/BxInput",args:{onInput:p(),onChange:p(),onClickBefore:p(),onClickAfter:p(),value:o.value,placeholder:o.placeholder,disabled:o.disabled,size:o.size,color:o.color,inline:o.inline,noBorder:o.noBorder,underline:o.underline,noPadding:o.noPadding,round:o.round,tag:o.tag,tagColor:o.tagColor,beforeIcon:o.beforeIcon,beforeExt:o.beforeExt,beforeButton:o.beforeButton,afterIcon:o.afterIcon,afterExt:o.afterExt,afterButton:o.afterButton},argTypes:{value:{control:{type:"text"}},placeholder:{control:{type:"text"}},disabled:{control:{type:"boolean"}},size:{options:e.sizes,control:{type:"inline-radio"}},color:{options:e.colors,control:{type:"inline-radio"}},inline:{control:{type:"boolean"}},noBorder:{control:{type:"boolean"}},underline:{control:{type:"boolean"}},noPadding:{control:{type:"boolean"}},round:{control:{type:"boolean"}},tag:{control:{type:"text"}},tagColor:{options:e.tagColors,control:{type:"inline-radio"}},beforeIcon:{options:e.icons,control:{type:"select"}},beforeExt:{control:{type:"boolean"}},beforeButton:{control:{type:"boolean"}},afterIcon:{options:e.icons,control:{type:"select"}},afterExt:{control:{type:"boolean"}},afterButton:{control:{type:"boolean"}}}},d=c(n).bind({}),f=c(n,"color",e.colors),b=c(n,"size",e.sizes),g=c(n,"beforeIcon",e.icons),x=c(n,"afterIcon",e.icons),m=c(n,"tagColor",e.tagColors);var E,P,_;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:"Story(BxInput).bind({})",...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var v,T,j;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:"Story<TypesPropsList>(BxInput, 'color', propsValues.colors)",...(j=(T=f.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var L,N,k;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:"Story<TypesPropsList>(BxInput, 'size', propsValues.sizes)",...(k=(N=b.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var A,V,$;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:"Story<TypesPropsList>(BxInput, 'beforeIcon', propsValues.icons)",...($=(V=g.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var D,w,F;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:"Story<TypesPropsList>(BxInput, 'afterIcon', propsValues.icons)",...(F=(w=x.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var O,R,q;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:"Story<TypesPropsList>(BxInput, 'tagColor', propsValues.tagColors)",...(q=(R=m.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const bo=["Default","Colors","Sizes","BeforeIcons","AfterIcons","TagColors"];export{x as AfterIcons,g as BeforeIcons,f as Colors,d as Default,b as Sizes,m as TagColors,bo as __namedExportsOrder,fo as default};
