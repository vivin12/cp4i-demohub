(window.webpackJsonp=window.webpackJsonp||[]).push([[42,64,65,67,68,69],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),A=a("NmYn"),o=a.n(A),c=a("Wbzz"),r=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),l=a.n(b),p=a("QH2O"),d=a.n(p),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,A=void 0===i?[]:i;return Object(m.b)("div",{className:l()(d.a.pageHeader,(t={},t[d.a.withTabs]=A.length,t[d.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},a)))))},u=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,A=i.baseUrl,o=i.subDirectory,r=A+"/edit/"+i.branch+o+"/src/pages"+t;return A?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:r},"Edit this page on GitHub"))):null},f=a("FCXl"),j=a("dI71"),w=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],A=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),A=a===i,r=new RegExp(i+"/?(#.*)?$"),s=n.replace(r,a);return Object(m.b)("li",{key:e,className:l()((t={},t[w.selectedItem]=A,t),w.listItem)},Object(m.b)(c.Link,{className:w.link,to:""+s},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:w.list},A))))))},t}(i.a.Component),O=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,A=t.frontmatter,b=void 0===A?{}:A,l=t.relativePagePath,p=t.titleType,d=b.tabs,u=b.title,j=b.theme,w=b.description,v=b.keywords,E=Object(y.a)().interiorTheme,k=Object(c.useStaticQuery)("2456312558").site.pathPrefix,N=k?n.pathname.replace(k,""):n.pathname,B=d?N.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",T=j||E;return Object(m.b)(s.a,{tabs:d,homepage:!1,theme:T,pageTitle:u,pageDescription:w,pageKeywords:v,titleType:p},Object(m.b)(g,{title:i?Object(m.b)(i,null):u,label:"label",tabs:d,theme:T}),d&&Object(m.b)(x,{title:u,slug:N,tabs:d,currentTab:B}),Object(m.b)(O.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:l})),Object(m.b)(f.a,{pageContext:t,location:n,slug:N,tabs:d,currentTab:B}),Object(m.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UN7B:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return g}));var n=a("wx14"),i=a("zLVn"),A=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),function(){return Object(A.b)("span",null,"Cognitive API Demo - Preparing your Environment")}),r={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(A.b)("div",t)}},b=s("FeatureCard"),l=s("AnchorLinks"),p=s("AnchorLink"),d={Title:c,_frontmatter:r},m=o.a;function g(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(A.b)(m,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(A.b)(b,{title:"Preparing your Environment",color:"dark",mdxType:"FeatureCard"},Object(A.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(A.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.430555555555557%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAFABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBP/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHLImqAn//EABgQAQEAAwAAAAAAAAAAAAAAAAECAAMT/9oACAEBAAEFAikzpVmwJr//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAgEBPwGn/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAECITFB/9oACAEBAAY/ApNF8MP/xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhQWH/2gAIAQEAAT8hv12qmg79bCADQZ//2gAMAwEAAgADAAAAEIPf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EBQC2//EABYRAQEBAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxCVOf/EABkQAQADAQEAAAAAAAAAAAAAAAEAETEhUf/aAAgBAQABPxBkotJlj3Ys9FnLLxyIAWq+pP/Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/cp4i-demohub/static/08ee05dd764e2ae9843eaafb61949cf1/2e753/preparation.jpg",srcSet:["/cp4i-demohub/static/08ee05dd764e2ae9843eaafb61949cf1/69549/preparation.jpg 288w","/cp4i-demohub/static/08ee05dd764e2ae9843eaafb61949cf1/473e3/preparation.jpg 576w","/cp4i-demohub/static/08ee05dd764e2ae9843eaafb61949cf1/2e753/preparation.jpg 1152w","/cp4i-demohub/static/08ee05dd764e2ae9843eaafb61949cf1/74f4b/preparation.jpg 1728w","/cp4i-demohub/static/08ee05dd764e2ae9843eaafb61949cf1/cbe2c/preparation.jpg 2000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(A.b)(l,{mdxType:"AnchorLinks"},Object(A.b)(p,{mdxType:"AnchorLink"},"Introduction"),Object(A.b)(p,{mdxType:"AnchorLink"},"Setting up Watson Tone Analyzer"),Object(A.b)(p,{mdxType:"AnchorLink"},"Setting up Salesforce"),Object(A.b)(p,{mdxType:"AnchorLink"},"Connecting CP4I to your endpoints")),Object(A.b)("hr",null),Object(A.b)("h2",null,"Introduction"),Object(A.b)("p",null,"You are going to integrate with Salesforce and IBM Watson Tone Analyzer service. You need to have these services and endpoints created and all the credentials necessary to integrate to them securely in the demo."),Object(A.b)("p",null,"IBM Watson can tell if someone is happy or sad or angry or many other emotions! If your customer is angry, you want to know so you can make them happy – you’ll use this to look at the customer’s description of the damage/problem and put the tone into our Salesforce case so that when we call them, we know what to expect."),Object(A.b)("p",null,"Salesforce is a CRM system provided as a SaaS i.e. it is hosted in the cloud. In this scenario, we as a car repair company will use Salesforce to create and store our car repair claims."),Object(A.b)("hr",null),Object(A.b)("h2",null,"Setting up Watson Tone Analyzer"),Object(A.b)("p",null,"Great! Now you will start by setting up IBM Watson services. You will need an IBM Cloud account to do this. Once you have an account, all of the Watson services have ‘lite’ plans which allow you to use them for free. Let’see how to do it!"),Object(A.b)("p",null,"1.Open ",Object(A.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/catalog"}),"IBM Cloud Catalog")," again, now with your personal account. Now, search and select the ",Object(A.b)("strong",{parentName:"p"},"Tone Analyzer"),"."),Object(A.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(A.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUElEQVQoz02PW08TQRTHZ3droRdCui1ILzb2xnZrkwLaYjUEpahtClHxjQ9g4kcw8SPoFzDRBzVGE59MTDAhCgYhraYaW+EBjPHNhbbbZbu73Z3Z1kOJ0f+cTObMOb9zQbFYLBQKBQIBf19er3fsr7xe3+iImx3xe8YLnvGim7s1wi95uEU2WmDDV07F59GZRGKc48LhMOt2g7lY1uVynbBaGZDFSiFEhe/Qc1vM7Hvm0gfq4mv6/At6+glK3nem7qLMdHZyYoLnE8NDTufgwLDDbhuwor5ohrHZBii7n8m+tOS3LblNy8wbJvvcknmE4veGErdROp2J83w0dHrm7PRS8TrYzavF3LViYeHG1LkLUIIaHKMyz6iZFXpuk778kZ5dp3MlNPnQEVtGPCiR8J8cffX4KVYMpXmID8QOJr1eb2V1DWBnaNGxUHXMr9pzb23za/Z8yZ7fsk49YPllxHFcNBpNpVLfvnwlmko0rWeSbtcEWBD2361vbHze3agdbtZa5e+Nck0o1fbLtd/lyvanSu0IjkQi6XT6x89fGBNFVYl5RIIkWRFEVVKxpHQUHWNDJVgzsUYMjWCdYOMfXK1WG41GvV5vt9uqqpqmaRg6nKbY0g3DNLvwI0ptsSURAqN1DeM/uFKpAAl8W5abzaaiKEZf8BZFESoCI8ttQRDAPY6ieDwOOwO8t7cHYUjq6NDHhNpwY4xhik6no2kaRMEFRtdhBwxpKBgM+ny+ZDK5s7MDSZIkHdTFVqt1PDkw0Bkwsy9ZloGEwr1et7RL/gATqG+GDAKrHgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"search tone",title:"search tone",src:"/cp4i-demohub/static/896947f9935813d9f515b9258e625d8f/3cbba/search-tone.png",srcSet:["/cp4i-demohub/static/896947f9935813d9f515b9258e625d8f/7fc1e/search-tone.png 288w","/cp4i-demohub/static/896947f9935813d9f515b9258e625d8f/a5df1/search-tone.png 576w","/cp4i-demohub/static/896947f9935813d9f515b9258e625d8f/3cbba/search-tone.png 1152w","/cp4i-demohub/static/896947f9935813d9f515b9258e625d8f/0b3f2/search-tone.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(A.b)("p",null,"2.Select the free ",Object(A.b)("em",{parentName:"p"},"Lite")," plan and click ",Object(A.b)("em",{parentName:"p"},"Create")," to provision the service."),Object(A.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(A.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB6ElEQVQoz3WSXWvaUBjH8y3GDKx2dcTY+AKV3Q022FXnB2kZaNFp17tdbBcdpShlTIY36yfqWtoRzYnZhca8GHNyzEnMm3t0hc7Bfvx5zp/n8Oe8MkdH9cO31YODw1ardXLy/vi41Ww2360B02g0qtVqrVaDWq/XK5XK1pp0Os1ns0wcxw6hGJM4Tpb/J4oiqL1eTxCEfD6fyWTK5TIzsx3dnFk20XRDVScAIU4YhsEmvu9DuNvtQhhiHMeVSiXGmk4NQ3fnc+oCc+B+2ARjDOF2u82ybC6Xg5WLxSJD1vie5//FQ56Qf8KpVIrn+fvw1LImum5a1gzjlWwbZNn2agOUup63qpQ6hEC40+lshLGmkfHYHo2c8ZjqumcYIDC+abq6TlQVDAg6S9dtn5+nWPYhPBFFBaG+KP64uvp5ezsQRRCSpKEso8HgjxkiGCVdUc4+fUyxj3hu59nTJ6XCLmMpiobQqN+Xb27Q9TXo192dKkmaLIMmCIGHOpYkqo4uPp/tbO/lC6/SwsvC89cMwTjwvIXrmpqGp9MFpUkUJUGQhCFoNUVptFgkQQhn/vrlO//itLj/7fH+5e6bUwbeELqO4wxhC3BIQuCm4OqhHycJ/BtQtPo/kTJbtj5c5LPbJSHLZbbKe8Xfv5fjI90PJGIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tone lite",title:"tone lite",src:"/cp4i-demohub/static/e15122e8481978e6b5d29a22a8d6ee1a/3cbba/tone-lite.png",srcSet:["/cp4i-demohub/static/e15122e8481978e6b5d29a22a8d6ee1a/7fc1e/tone-lite.png 288w","/cp4i-demohub/static/e15122e8481978e6b5d29a22a8d6ee1a/a5df1/tone-lite.png 576w","/cp4i-demohub/static/e15122e8481978e6b5d29a22a8d6ee1a/3cbba/tone-lite.png 1152w","/cp4i-demohub/static/e15122e8481978e6b5d29a22a8d6ee1a/0b3f2/tone-lite.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(A.b)("p",null,"3.When the service is ",Object(A.b)("em",{parentName:"p"},"active"),", click on the ",Object(A.b)("strong",{parentName:"p"},"Manage")," tab."),Object(A.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(A.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRElEQVQoz32P207CQBCG+7CEQ0WqzyNKIgle4xtwFCTGW269kMQ2lHZnz4eu0xoCiPhlNplM9vt3NqiH1/VGs1arRVF0W3GzB3schmF4VYFNu93GptFstVph1OkEsE3TOCYAXDIphda6cAeste4UbRyTZQllg4/X1Wa9xgTGFBWF0s5YizeMdcURvyJwIqUMNnEcJwkA7Aj9TLI4JTmINGc5FUprLKmUMcafgTsGFIDREsY5HsaFrBBScC5wCJSify5jYkD3SKkyQrdZDpTlBDBFa4Pr+QucyHg7SfOvygYosxDczVQU/8vAmNBGucJdfu1vmbHy48Pn4V23270/8NDr9fuPg8HTLstQOP7FsUxx2+XqfTSeTeaL8WwxnsxHk/l4+jKaLmeLN875RRkIIVQQboX1ynluvDCe67K33jusU37kb87vUrjrZTaGAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tone active",title:"tone active",src:"/cp4i-demohub/static/cc1100de8e70851f8edcd375aa5b2167/3cbba/tone-active.png",srcSet:["/cp4i-demohub/static/cc1100de8e70851f8edcd375aa5b2167/7fc1e/tone-active.png 288w","/cp4i-demohub/static/cc1100de8e70851f8edcd375aa5b2167/a5df1/tone-active.png 576w","/cp4i-demohub/static/cc1100de8e70851f8edcd375aa5b2167/3cbba/tone-active.png 1152w","/cp4i-demohub/static/cc1100de8e70851f8edcd375aa5b2167/0b3f2/tone-active.png 1607w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-salesdemos-carrepair-new-prepare-mdx-96c69bc6d9b45d7d16b8.js.map