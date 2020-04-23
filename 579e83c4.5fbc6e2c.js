(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(10),c=(n(0),n(174)),i={id:"quick-start",title:"Quick Start",hide_title:!0,sidebar_label:"Quick Start"},l={id:"getting-started/quick-start",title:"Quick Start",description:"# Quick Start",source:"@site/docs/getting-started/1-quick-start.md",permalink:"/docs/en/getting-started/quick-start",sidebar_label:"Quick Start",sidebar:"docs",next:{title:"JavaScript and Gulpfiles",permalink:"/docs/en/getting-started/javascript-and-gulpfiles"}},o=[{value:"Check for node, npm, and npx",id:"check-for-node-npm-and-npx",children:[]},{value:"Install the gulp command line utility",id:"install-the-gulp-command-line-utility",children:[]},{value:"Create a project directory and navigate into it",id:"create-a-project-directory-and-navigate-into-it",children:[]},{value:"Create a package.json file in your project directory",id:"create-a-packagejson-file-in-your-project-directory",children:[]},{value:"Install the gulp package in your devDependencies",id:"install-the-gulp-package-in-your-devdependencies",children:[]},{value:"Verify your gulp versions",id:"verify-your-gulp-versions",children:[]},{value:"Create a gulpfile",id:"create-a-gulpfile",children:[]},{value:"Test it",id:"test-it",children:[]},{value:"Result",id:"result",children:[]}],p={rightToc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"quick-start"},"Quick Start"),Object(c.b)("p",null,"If you've previously installed gulp globally, run ",Object(c.b)("inlineCode",{parentName:"p"},"npm rm --global gulp")," before following these instructions. For more information, read this ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/gulpjs/gulp-sips-command-line-interface-e53411d4467"}),"Sip"),"."),Object(c.b)("h2",{id:"check-for-node-npm-and-npx"},"Check for node, npm, and npx"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"node --version\n")),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://gulpjs.com/img/docs-node-version-command.png",alt:"Output: v8.11.1"}))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm --version\n")),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://gulpjs.com/img/docs-npm-version-command.png",alt:"Output: 5.6.0"}))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx --version\n")),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://gulpjs.com/img/docs-npx-version-command.png",alt:"Output: 9.7.1"}))),Object(c.b)("p",null,"If they are not installed, follow the instructions ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"here"),"."),Object(c.b)("h2",{id:"install-the-gulp-command-line-utility"},"Install the gulp command line utility"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install --global gulp-cli\n")),Object(c.b)("h2",{id:"create-a-project-directory-and-navigate-into-it"},"Create a project directory and navigate into it"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx mkdirp my-project\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"cd my-project\n")),Object(c.b)("h2",{id:"create-a-packagejson-file-in-your-project-directory"},"Create a package.json file in your project directory"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm init\n")),Object(c.b)("p",null,"This will guide you through giving your project a name, version, description, etc."),Object(c.b)("h2",{id:"install-the-gulp-package-in-your-devdependencies"},"Install the gulp package in your devDependencies"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev gulp\n")),Object(c.b)("h2",{id:"verify-your-gulp-versions"},"Verify your gulp versions"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gulp --version\n")),Object(c.b)("p",null,"Ensure the output matches the screenshot below or you might need to restart the steps in this guide."),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://gulpjs.com/img/docs-gulp-version-command.png",alt:"Output: CLI version 2.0.1 & Local version 4.0.0"}))),Object(c.b)("h2",{id:"create-a-gulpfile"},"Create a gulpfile"),Object(c.b)("p",null,"Using your text editor, create a file named gulpfile.js in your project root with these contents:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function defaultTask(cb) {\n  // place code for your default task here\n  cb();\n}\n\nexports.default = defaultTask\n")),Object(c.b)("h2",{id:"test-it"},"Test it"),Object(c.b)("p",null,"Run the gulp command in your project directory:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gulp\n")),Object(c.b)("p",null,"To run multiple tasks, you can use ",Object(c.b)("inlineCode",{parentName:"p"},"gulp <task> <othertask>"),"."),Object(c.b)("h2",{id:"result"},"Result"),Object(c.b)("p",null,"The default task will run and do nothing.\n",Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"https://gulpjs.com/img/docs-gulp-command.png",alt:"Output: Starting default & Finished default"}))))}u.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,g=s["".concat(i,".").concat(d)]||s[d]||b[d]||c;return n?a.a.createElement(g,l({ref:t},p,{components:n})):a.a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);