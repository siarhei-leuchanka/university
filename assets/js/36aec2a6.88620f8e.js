"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[1480],{2860:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(5893),s=a(1151);const i={sidebar_position:1,sidebar_label:"Configuration examples",title:"Find & Replace Values: Configuration examples"},t="Configuration examples",o={id:"extensions/find-replace-values/configuration-examples",title:"Find & Replace Values: Configuration examples",description:"The following examples are showing commonly used configurations when building applications using Rossum.ai platform.",source:"@site/docs/extensions/find-replace-values/configuration-examples.md",sourceDirName:"extensions/find-replace-values",slug:"/extensions/find-replace-values/configuration-examples",permalink:"/docs/extensions/find-replace-values/configuration-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/extensions/find-replace-values/configuration-examples.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Configuration examples",title:"Find & Replace Values: Configuration examples"},sidebar:"extensionsSidebar",previous:{title:"Find & Replace Values",permalink:"/docs/extensions/find-replace-values/"},next:{title:"Generic REST API export",permalink:"/docs/extensions/generic-rest-api-export/"}},l={},p=[{value:"Normalize Values",id:"normalize-values",level:2},{value:"Prepend and Append Values",id:"prepend-and-append-values",level:2},{value:"Using named capturing groups in replace",id:"using-named-capturing-groups-in-replace",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configuration-examples",children:"Configuration examples"}),"\n",(0,r.jsx)(n.p,{children:"The following examples are showing commonly used configurations when building applications using Rossum.ai platform."}),"\n",(0,r.jsx)(n.h2,{id:"normalize-values",children:"Normalize Values"}),"\n",(0,r.jsxs)(n.p,{children:["The following snippet removes all non-alphanumeric characters. The source datapoint ID is ",(0,r.jsx)(n.code,{children:"sender_vat_id"})," and the result has to be written to a different datapoint ID ",(0,r.jsx)(n.code,{children:"sender_vat_id_normalized"})," not to affect the AI model."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "transformations": [\n        {\n          "pattern_to_replace": "[^a-zA-Z\\\\d]",\n          "value_to_replace_with": ""\n        }\n      ],\n      "source_target_mappings": [\n        {\n          "source": "sender_vat_id",\n          "target": "sender_vat_id_normalized"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Consider turning ",(0,r.jsx)(n.code,{children:"sender_vat_id_normalized"})," into formula field instead where the same functionality can be rewritten as:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"''.join(filter(str.isalnum, fields.order_id.strip()))\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"prepend-and-append-values",children:"Prepend and Append Values"}),"\n",(0,r.jsxs)(n.p,{children:["The regular expressions use Python flavor which allows us to write references to capture groups as ",(0,r.jsx)(n.code,{children:"\\g<0>"}),", ",(0,r.jsx)(n.code,{children:"\\g<1>"}),", etc. The following example transforms order ID from ",(0,r.jsx)(n.code,{children:"123"})," to ",(0,r.jsx)(n.code,{children:"PO123/000"})," as an example (first prepend, later append):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "transformations": [\n        {\n          "pattern_to_replace": "^(?!(PO|$))(.+)$",\n          "value_to_replace_with": "PO\\\\g<2>",\n          "replace_if_this_pattern_matches": "^(?!(PO|$)).+$"\n        },\n        {\n          "pattern_to_replace": "^(.+)(?<!/000)$",\n          "value_to_replace_with": "\\\\g<1>/000",\n          "replace_if_this_pattern_matches": "^.+(?<!/000)$"\n        }\n      ],\n      "source_target_mappings": [\n        {\n          "source": "order_id",\n          "target": "order_id_normalized"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"It prepends/appends values only if they are not already present, and it handles empty values gracefully (no prepend/append)."}),"\n",(0,r.jsxs)(n.p,{children:["Consider combining this approach with ",(0,r.jsx)(n.a,{href:"#using-named-capturing-groups-in-replace",children:"named capturing groups"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"using-named-capturing-groups-in-replace",children:"Using named capturing groups in replace"}),"\n",(0,r.jsxs)(n.p,{children:["Sometimes it is necessary to capture part of the input and either ",(0,r.jsx)(n.a,{href:"#prepend-and-append-values",children:"append/prepend"})," it or simply remove everything else. For these purposes, it can be quite handy to use ",(0,r.jsx)(n.strong,{children:"named"})," ",(0,r.jsx)(n.a,{href:"https://docs.python.org/3/howto/regex.html#non-capturing-and-named-groups",children:"capturing groups"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "transformations": [\n        {\n          "pattern_to_replace": "^[0-9]+-(?P<SKU>[0-9]+)$",\n          "value_to_replace_with": "\\\\g<SKU>",\n          "replace_if_this_pattern_matches": "^[0-9]+-[0-9]+$"\n        }\n      ],\n      "source_target_mappings": [\n        {\n          "source": "item_code",\n          "target": "item_code_norm"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Such pattern allows us to capture the SKU precisely and reference it later in ",(0,r.jsx)(n.code,{children:"value_to_replace_with"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>t});var r=a(7294);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);