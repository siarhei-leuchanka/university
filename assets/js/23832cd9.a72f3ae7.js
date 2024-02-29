"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[240],{2495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(5893),a=t(1151),o=t(4866),i=t(5162);const s={title:"Import webhook",sidebar_position:3},l=void 0,c={id:"integrations/netsuite/import-webhook",title:"Import webhook",description:"Notice that each configuration has concurrency_limit configured. The best way how to determine the right number is to visit Setup > Integration > Integration Governance where you can see (and configure) not only the concurrency limits but also peak concurrency of all integrations allowing you to choose the best number.",source:"@site/docs/integrations/netsuite/import-webhook.md",sourceDirName:"integrations/netsuite",slug:"/integrations/netsuite/import-webhook",permalink:"/cookbook/docs/integrations/netsuite/import-webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/integrations/netsuite/import-webhook.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Import webhook",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/cookbook/docs/integrations/netsuite/configuration"},next:{title:"Export webhook",permalink:"/cookbook/docs/integrations/netsuite/export-webhook"}},u={},d=[{value:"Full data imports (weekly)",id:"full-data-imports-weekly",level:2},{value:"Differential data imports (daily)",id:"differential-data-imports-daily",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Notice that each configuration has ",(0,r.jsx)(n.code,{children:"concurrency_limit"})," configured. The best way how to determine the right number is to visit ",(0,r.jsx)(n.strong,{children:"Setup > Integration > Integration Governance"})," where you can see (and configure) not only the concurrency limits but also peak concurrency of all integrations allowing you to choose the best number."]}),"\n",(0,r.jsx)(n.h2,{id:"full-data-imports-weekly",children:"Full data imports (weekly)"}),"\n",(0,r.jsxs)(n.p,{children:["Schedule: ",(0,r.jsx)(n.code,{children:"0 0 * * 6"})]}),"\n",(0,r.jsxs)(o.Z,{groupId:"netsuite-flavor",queryString:!0,children:[(0,r.jsx)(i.Z,{value:"modern",label:"Modern",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{\n  // \ud83d\udea7 WORK IN PROGESS \ud83d\udea7\n}\n"})})}),(0,r.jsx)(i.Z,{value:"original",label:"Original",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "import_config": [\n    {\n      // Currencies\n      "ns_type": "Currency",\n      "search_type": "getAll",\n      "master_data_name": "sandbox_NS_Currency"\n    },\n    {\n      // Inventory items\n      "ns_type": "Item",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_InventoryItem",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_inventoryItem",\n            "attribute_name": "type"\n          },\n          {\n            "ns_type": "SearchBooleanField",\n            "searchValue": "false",\n            "attribute_name": "isInactive"\n          }\n        ]\n      }\n    },\n    {\n      // Item Receipts (GRNs)\n      "ns_type": "Transaction",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_ItemReceipt",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_itemReceipt",\n            "attribute_name": "type"\n          }\n        ]\n      }\n    },\n    {\n      // Locations\n      "ns_type": "Location",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_Location"\n    },\n    {\n      // Purchase Orders\n      "ns_type": "Transaction",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_PurchaseOrder",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_purchaseOrder",\n            "attribute_name": "type"\n          }\n        ]\n      }\n    },\n    {\n      // Subsidiaries\n      "ns_type": "Subsidiary",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_Subsidiary"\n    },\n    {\n      // Vendors\n      "ns_type": "Vendor",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_Vendor"\n    }\n  ],\n  "concurrency_limit": 4\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"differential-data-imports-daily",children:"Differential data imports (daily)"}),"\n",(0,r.jsxs)(n.p,{children:["Schedule: ",(0,r.jsx)(n.code,{children:"0 0 * * *"})]}),"\n",(0,r.jsxs)(o.Z,{groupId:"netsuite-flavor",queryString:!0,children:[(0,r.jsx)(i.Z,{value:"modern",label:"Modern",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{\n  // \ud83d\udea7 WORK IN PROGESS \ud83d\udea7\n}\n"})})}),(0,r.jsxs)(i.Z,{value:"original",label:"Original",children:[(0,r.jsxs)(n.p,{children:["The main idea is to add the following ",(0,r.jsx)(n.code,{children:"last_modified_date"})," search value to each import config. Note, however, that not all records support this differential search."]}),(0,r.jsx)(n.p,{children:"We typically configure the differential import for:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Inventory items"}),"\n",(0,r.jsx)(n.li,{children:"Purchase orders"}),"\n",(0,r.jsx)(n.li,{children:"Vendors"}),"\n",(0,r.jsx)(n.li,{children:"..."}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "run_async": true,\n  "import_config": [\n    {\n      "ns_type": "Item",\n      "search_type": "search",\n      "master_data_name": "sandbox_NS_InventoryItem",\n      "basic_search_config": {\n        "attributes": [\n          {\n            "ns_type": "SearchEnumMultiSelectField",\n            "operator": "anyOf",\n            "searchValue": "_inventoryItem",\n            "attribute_name": "type"\n          },\n          // highlight-start\n          {\n            "ns_type": "SearchDateField",\n            "operator": "onOrAfter",\n            "searchValue": "${last_modified_date}",\n            "attribute_name": "lastModifiedDate"\n          }\n          // highlight-end\n        ]\n      }\n    }\n  ],\n  "concurrency_limit": 4\n}\n'})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var r=t(512);const a={tabItem:"tabItem_Ymn6"};var o=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(7294),a=t(512),o=t(2466),i=t(6550),s=t(469),l=t(1980),c=t(7392),u=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=m({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),y=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=t(5893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=b(e);return(0,_.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,_.jsx)(g,{...e,...n}),(0,_.jsx)(v,{...e,...n})]})}function j(e){const n=(0,f.Z)();return(0,_.jsx)(x,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(7294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);