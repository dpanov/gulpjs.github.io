(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(10),i=(n(0),n(174)),l={id:"explaining-globs",title:"Explaining Globs",hide_title:!0,sidebar_label:"Explaining Globs"},o={id:"getting-started/explaining-globs",title:"Explaining Globs",description:"# Explaining Globs",source:"@site/docs/getting-started/6-explaining-globs.md",permalink:"/docs/en/getting-started/explaining-globs",sidebar_label:"Explaining Globs",sidebar:"docs",previous:{title:"Working with Files",permalink:"/docs/en/getting-started/working-with-files"},next:{title:"Using Plugins",permalink:"/docs/en/getting-started/using-plugins"}},s=[{value:"Segments and separators",id:"segments-and-separators",children:[]},{value:"Special character: * (single-star)",id:"special-character--single-star",children:[]},{value:"Special character: ** (double-star)",id:"special-character--double-star",children:[]},{value:"Special character: ! (negative)",id:"special-character--negative",children:[]},{value:"Overlapping globs",id:"overlapping-globs",children:[]},{value:"Advanced resources",id:"advanced-resources",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"explaining-globs"},"Explaining Globs"),Object(i.b)("p",null,"A glob is a string of literal and/or wildcard characters used to match filepaths. Globbing is the act of locating files on a filesystem using one or more globs."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"src()")," method expects a single glob string or an array of globs to determine which files your pipeline will operate on. At least one match must be found for your glob(s) otherwise ",Object(i.b)("inlineCode",{parentName:"p"},"src()")," will error. When an array of globs is used, they are matched in array order - especially useful for negative globs."),Object(i.b)("h2",{id:"segments-and-separators"},"Segments and separators"),Object(i.b)("p",null,"A segment is everything between separators. The separator in a glob is always the ",Object(i.b)("inlineCode",{parentName:"p"},"/")," character - regardless of the operating system - even in Windows where the path separator is ",Object(i.b)("inlineCode",{parentName:"p"},"\\\\"),".  In a glob, ",Object(i.b)("inlineCode",{parentName:"p"},"\\\\")," is reserved as the escape character."),Object(i.b)("p",null,"Here, the * is escaped, so it is treated as a literal instead of a wildcard character."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"'glob_with_uncommon_\\\\*_character.js'\n")),Object(i.b)("p",null,"Avoid using Node's ",Object(i.b)("inlineCode",{parentName:"p"},"path")," methods, like ",Object(i.b)("inlineCode",{parentName:"p"},"path.join"),", to create globs. On Windows, it produces an invalid glob because Node uses ",Object(i.b)("inlineCode",{parentName:"p"},"\\\\")," as the separator. Also avoid the ",Object(i.b)("inlineCode",{parentName:"p"},"__dirname")," global, ",Object(i.b)("inlineCode",{parentName:"p"},"__filename")," global, or ",Object(i.b)("inlineCode",{parentName:"p"},"process.cwd()")," for the same reasons."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const invalidGlob = path.join(__dirname, 'src/*.js');\n")),Object(i.b)("h2",{id:"special-character--single-star"},"Special character: * (single-star)"),Object(i.b)("p",null,"Matches any amount - including none - of characters within a single segment. Useful for globbing files within one directory."),Object(i.b)("p",null,"This glob will match files like ",Object(i.b)("inlineCode",{parentName:"p"},"index.js"),", but not files like ",Object(i.b)("inlineCode",{parentName:"p"},"scripts/index.js")," or ",Object(i.b)("inlineCode",{parentName:"p"},"scripts/nested/index.js")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"'*.js'\n")),Object(i.b)("h2",{id:"special-character--double-star"},"Special character: ** (double-star)"),Object(i.b)("p",null,"Matches any amount - including none - of characters across segments. Useful for globbing files in nested directories. Make sure to appropriately restrict your double-star globs, to avoid matching large directories unnecessarily."),Object(i.b)("p",null,"Here, the glob is appropriately restricted to the ",Object(i.b)("inlineCode",{parentName:"p"},"scripts/")," directory. It will match files like ",Object(i.b)("inlineCode",{parentName:"p"},"scripts/index.js"),", ",Object(i.b)("inlineCode",{parentName:"p"},"scripts/nested/index.js"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"scripts/nested/twice/index.js"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"'scripts/**/*.js'\n")),Object(i.b)("small",null,"In the previous example, if `scripts/` wasn't prefixed, all dependencies in `node_modules` or other directories would also be matched."),Object(i.b)("h2",{id:"special-character--negative"},"Special character: ! (negative)"),Object(i.b)("p",null,"Since globs are matched in array order, a negative glob must follow at least one non-negative glob in an array. The first finds a set of matches, then the negative glob removes a portion of those results. When excluding all files within a directory, you must add ",Object(i.b)("inlineCode",{parentName:"p"},"/**")," after the directory name, which the globbing library optimizes internally."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"['scripts/**/*.js', '!scripts/vendor/**']\n")),Object(i.b)("p",null,"If any non-negative globs follow a negative, nothing will be removed from the later set of matches."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"['scripts/**/*.js', '!scripts/vendor/**', 'scripts/vendor/react.js']\n")),Object(i.b)("p",null,"Negative globs can be used as an alternative for restricting double-star globs."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"['**/*.js', '!node_modules/**']\n")),Object(i.b)("small",null,"In the previous example, if the negative glob was `!node_modules/**/*.js`, the globbing library wouldn't optimize the negation and every match would have to be compared against the negative glob, which would be extremely slow. To ignore all files in a directory, only add the `/**` glob after the directory name."),Object(i.b)("h2",{id:"overlapping-globs"},"Overlapping globs"),Object(i.b)("p",null,"Two or more globs that (un)intentionally match the same file are considered overlapping. When overlapping globs are used within a single ",Object(i.b)("inlineCode",{parentName:"p"},"src()"),", gulp does its best to remove the duplicates, but doesn't attempt to deduplicate across separate ",Object(i.b)("inlineCode",{parentName:"p"},"src()")," calls."),Object(i.b)("h2",{id:"advanced-resources"},"Advanced resources"),Object(i.b)("p",null,"Most of what you'll need to work with globs in gulp is covered here. If you'd like to get more in depth, here are a few resources."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/micromatch/micromatch"}),"Micromatch Documentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/isaacs/node-glob#glob-primer"}),"node-glob's Glob Primer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/begin/globbing#what-is-globbing"}),"Begin's Globbing Documentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Glob_(programming)"}),"Wikipedia's Glob Page"))))}b.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),g=a,u=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?r.a.createElement(u,o({ref:t},c,{components:n})):r.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);