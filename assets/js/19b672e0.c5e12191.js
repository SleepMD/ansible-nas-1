"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[2571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"DDNS Updater"},i=void 0,s={unversionedId:"applications/system-tools/ddns_updater",id:"applications/system-tools/ddns_updater",title:"DDNS Updater",description:"Lightweight universal DDNS Updater with a web UI.",source:"@site/docs/applications/system-tools/ddns_updater.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/ddns_updater",permalink:"/docs/applications/system-tools/ddns_updater",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/system-tools/ddns_updater.md",tags:[],version:"current",frontMatter:{title:"DDNS Updater"},sidebar:"tutorialSidebar",previous:{title:"Cloudflare DDNS",permalink:"/docs/applications/system-tools/cloudflare_ddns"},next:{title:"Duplicacy",permalink:"/docs/applications/system-tools/duplicacy"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Lightweight universal DDNS Updater with a web UI."),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/qdm12/ddns-updater"},"https://github.com/qdm12/ddns-updater")),(0,a.kt)("p",null,"Light container updating DNS A and/or AAAA records periodically for multiple DNS providers."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"ddns_updater_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/group_vars/nas.yml")," file."),(0,a.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,a.kt)("p",null,"Ensure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ddns_updater_config")," variable is set with your DDNS Updater configuration. The configuration is converted from YAML into JSON, required by the DDNS Updater application. Use ",(0,a.kt)("a",{parentName:"p",href:"https://www.json2yaml.com/"},"json2yaml")," to check your configuration format."),(0,a.kt)("p",null,"The following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'ddns_updater_config:\n  settings:\n    - provider: namecheap\n      domain: example.com\n      host: "@"\n      password: e5322165c1d74692bfa6d807100c0310\n')),(0,a.kt)("p",null,"...will be serialised to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "settings": [\n        {\n            "provider": "namecheap",\n            "domain": "example.com",\n            "host": "@",\n            "password": "e5322165c1d74692bfa6d807100c0310"\n        }\n    ]\n}\n')))}u.isMDXComponent=!0}}]);