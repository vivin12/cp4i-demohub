(window.webpackJsonp=window.webpackJsonp||[]).push([[35,59,61,62],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),b=a("NmYn"),r=a.n(b),o=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),m=a.n(p),g=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,i=e.tabs,b=void 0===i?[]:i;return Object(g.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},A=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,b=i.baseUrl,r=i.subDirectory,c=b+"/edit/"+i.branch+r+"/src/pages"+t;return b?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),j=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),b=a===i,c=new RegExp(i+"/?(#.*)?$"),l=n.replace(c,a);return Object(g.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(g.b)(o.Link,{className:f.link,to:""+l},e))}));return Object(g.b)("div",{className:f.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:f.list},b))))))},t}(i.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,p=t.titleType,m=s.tabs,A=s.title,j=s.theme,f=s.description,x=s.keywords,v=Object(y.a)().interiorTheme,I=Object(o.useStaticQuery)("2456312558").site.pathPrefix,k=I?n.pathname.replace(I,""):n.pathname,T=m?k.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",P=j||v;return Object(g.b)(l.a,{tabs:m,homepage:!1,theme:P,pageTitle:A,pageDescription:f,pageKeywords:x,titleType:p},Object(g.b)(u,{title:i?Object(g.b)(i,null):A,label:"label",tabs:m,theme:P}),m&&Object(g.b)(N,{title:A,slug:k,tabs:m,currentTab:T}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(O,{relativePagePath:d})),Object(g.b)(h.a,{pageContext:t,location:n,slug:k,tabs:m,currentTab:T}),Object(g.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},r3Y1:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return o})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a("wx14"),i=a("zLVn"),b=(a("q1tI"),a("7ljp")),r=a("013z"),o=(a("qKvR"),function(){return Object(b.b)("span",null,"Car Crash Repair - Demo Script")}),c={},l={Title:o,_frontmatter:c},s=r.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(b.b)(s,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"1 - Accessing your Environment"),Object(b.b)("details",null,Object(b.b)("summary",null,"1.1 - Log in CP4I"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"th"},"Log in CP4I")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Open CP4I and click IBM provided credentials (admin only) and log in.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"Talking Points")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"In the road to digital transformation, every organization seeks to move faster than before. But going fast without the right approach, guided by real-world operational data, has caused 70% of digital transformations to fail. A new approach with automation and continuous improvement fed by AI algorithms is required. IBM Cloud Pak for Integration is a hybrid integration solution that provides an automated and closed-loop lifecycle across multiple styles of enterprise integration. With IBM Cloud Pak for Integration, companies can speed integration development, reduce costs and maintain enhanced security, governance and availability. Let’s see IBM Cloud Pak for Integration in action. Here I have a cloud version of the product on IBM Cloud. Let me log in here.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"Screenshots")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})," ","  ",Object(b.b)("br",null)," ",Object(b.b)("span",Object(n.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/0lEQVQoz52S707DIBTF+xJtAeOKQrn3wtiQbnObf2I0usSYqO//MrLWD9jMmnhD+ML9Xc45UOBkAQDnvOqrLMu011kVP5vpJMwYk1LqVjdS5nyRYYBGpe580AALzrVSrdbNbDaGwRg0Gt2C4uMyrr8HQTvAjDPDRbgA3yjPz86rusrhELt59+A3ry7cYtgiAS33/vrNEh1vFoJXNatZWkcDued0fPfyEXfP6MLcmhgjGWn92q4OSLaXLUY55bLJWQj7d7fYJPHWX/mbT9sdKNwn5SmBIe3f4OQveWuxjwrIUnxKKtBc4iB7Gh49EhjVD6T8nafhPz7JaZiI/g1/Ab+0WAxMhTAmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"login1",title:"login1",src:"/cp4i-demohub/static/c82ba52cf21a7eb0e009eb0464424f5c/3cbba/demoscript-login1.png",srcSet:["/cp4i-demohub/static/c82ba52cf21a7eb0e009eb0464424f5c/7fc1e/demoscript-login1.png 288w","/cp4i-demohub/static/c82ba52cf21a7eb0e009eb0464424f5c/a5df1/demoscript-login1.png 576w","/cp4i-demohub/static/c82ba52cf21a7eb0e009eb0464424f5c/3cbba/demoscript-login1.png 1152w","/cp4i-demohub/static/c82ba52cf21a7eb0e009eb0464424f5c/0b3f2/demoscript-login1.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," ",Object(b.b)("br",null)," ",Object(b.b)("span",Object(n.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMklEQVQoz52Si07DIBSG9wpeOjhrO7puBQ70gnR3nRoXXWJM1HfzgT3rFq3aGOMJISHw/fz8h57+tZRSANBvKggCmlmrel8PYyfMOBdJMsmyoRDnJPEDJkxpOabTbSFacoCUcy2EjOMsilKAEWP9D1hJqeVE2xL9XeVnRyGVHTQ4Z0aIup7m1tIo81yF4cH/Hna+zuvbYv5o3ZV2S40Kq3WxeDKI+5s55MNoU+HKVbOyXFaViaLgANP25uHFr+61dbmR3nuUiSlmZrrTaOgRwM7Go0V68zYKDQQnA8ah9Wa0Rrn1sy3nZN4UF8Xlq6l36K7JOQUAnMVhmqhtHE8oue9pq30wmW6iUmjQb8mFlqlubAMMqE2sf9qQvLNVn01SctwIYrvPrKt6f/wk3TAi/ht+B+d1W63WXZmxAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"login2",title:"login2",src:"/cp4i-demohub/static/a097570c3d517839a1bdaa35428e06ad/3cbba/demoscript-login2.png",srcSet:["/cp4i-demohub/static/a097570c3d517839a1bdaa35428e06ad/7fc1e/demoscript-login2.png 288w","/cp4i-demohub/static/a097570c3d517839a1bdaa35428e06ad/a5df1/demoscript-login2.png 576w","/cp4i-demohub/static/a097570c3d517839a1bdaa35428e06ad/3cbba/demoscript-login2.png 1152w","/cp4i-demohub/static/a097570c3d517839a1bdaa35428e06ad/0b3f2/demoscript-login2.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))),Object(b.b)("details",null,Object(b.b)("summary",null,"1.2 - CP4I Home"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"th"},"CP4I Home")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show the Home Page and click on Integration Capabilities.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"Talking Points")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Welcome to IBM Cloud Pak for Integration! We’re now at the home screen showing all the capabilities of the pak, brought together in one place.  Specialized integration capabilities —for API management, application integration, messaging and more —are built on top of powerful automation services. Let’s see the Integration Capabilities available in this Cloud Pak for Integration.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"Screenshots")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})," ","  ",Object(b.b)("br",null)," ",Object(b.b)("span",Object(n.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtUlEQVQozz1SzQ6UMBDmFdalLdCWtpTSFii7yO4a4yYme/Fg4s3zRo8evPpIvoNP5wfoTpqhLfP9zEBW17VSilLKGCuKYs97sFdQwuiRkSPLj6zYymjedSEzxlhru66TUuZ5vlZSSgjZ6bYglFvaXEvTV/GUk2NOyYHpWsmsba0xmnOutW6aBnKiltY5pfV/PC2EJUVNv/y2P/+4doz+rt//CpevmW3XEJw31vb9wIXwtbr4YKQk/8AFZUXXOXL74W7f3s2fXbuE4dP94/esErLiAm0gc6HwaIrSV4Jvuq/mTetNLTijShqrO6fD9fwhg2G8OxwO21yIVkoq9Ybku+irecyBsRKrYGVZcmTXdhmG5L1/Pp97UUppPp/7vkf/mOUwDJ33xjT7cRzHYRwwYKUVUCsYpY/HY7fXD2OI0Tm3TsLadJrH09WHiM+Bi8vlcr/fb7cbWIDKYAJMMF9VFcDL8hYLYBDjPqUxxh6bZtNOaYK1bcTtChZCAP/6HUII05RCiNgAM88zdJAhBbp+TLHvgQRTjDGTW+xI+B5T8mGVap1DxTRNy7LAM7ysRlbhVRlH0P0FIf1YRXkQan4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"home",title:"home",src:"/cp4i-demohub/static/99a8602e8238279385835dfd6dbb848d/3cbba/demoscript-home.png",srcSet:["/cp4i-demohub/static/99a8602e8238279385835dfd6dbb848d/7fc1e/demoscript-home.png 288w","/cp4i-demohub/static/99a8602e8238279385835dfd6dbb848d/a5df1/demoscript-home.png 576w","/cp4i-demohub/static/99a8602e8238279385835dfd6dbb848d/3cbba/demoscript-home.png 1152w","/cp4i-demohub/static/99a8602e8238279385835dfd6dbb848d/0b3f2/demoscript-home.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))),Object(b.b)("details",null,Object(b.b)("summary",null,"1.3 - Integration Capabilities"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"th"},"Integration Capabilities")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"Actions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Show the Integration Capabilities page and open the Designer.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"Talking Points")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"As you can see, through a single interface you are able to access all the integration capabilities your team needs. Including API Lifecycle Management, Application & Data Integration, Enterprise Messaging, Events and High Speed Transfer. In this Demo, we will explore App Connect for Application Integration, API Connect for API Management and Asset Repository as our centralized hub for allowing our teams to work together with Integration assets. Let’s open our App Connect Designer.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"Screenshots")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})," "," ",Object(b.b)("br",null)," ",Object(b.b)("span",Object(n.a)({parentName:"td"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLUlEQVQoz5WRTU7DQAyF58BILYtWAokdV+AQ7JE4ABJbNogDIJGGNtNpOv/j+eFlhlaRWKB+C+vFeXZsh61Wq/V6fVW5PrH8j8VieXN7x6y1WmvnnPe+XAhTSrVKRDQyxkAQUYyRTpx1ICo5fu7C8xu9fBDbbPqB831lu90iCiEQu64bhgGCc973fTPsYN19v74P94/7h6c9E4ejcaEhpcQgvoJdEJFsuhmcDwfpI4VSQsmeCTEal2PM2AE+jA0TNEY974ZMzpMh5qR8SrnEVChmprqN+uKBC7xzFQhYUZxPoHjqlQuloD0aTYaUEhtHqS3k1LgdrBXjPO2z0OiYcoKmREcX6hBlKlZKaxzY/p4a2MpZzLWxRs/y069SSqoLkRU2fzhW5B/myaZa1Q/Z6lwbjZ1L7wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"integration capabilities",title:"integration capabilities",src:"/cp4i-demohub/static/adeebe8b19b8c12686f0db02e89c1341/3cbba/demoscript-integration.png",srcSet:["/cp4i-demohub/static/adeebe8b19b8c12686f0db02e89c1341/7fc1e/demoscript-integration.png 288w","/cp4i-demohub/static/adeebe8b19b8c12686f0db02e89c1341/a5df1/demoscript-integration.png 576w","/cp4i-demohub/static/adeebe8b19b8c12686f0db02e89c1341/3cbba/demoscript-integration.png 1152w","/cp4i-demohub/static/adeebe8b19b8c12686f0db02e89c1341/0b3f2/demoscript-integration.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-salesdemos-carrepair-new-demoscript-mdx-993bb049c174728d6eb9.js.map