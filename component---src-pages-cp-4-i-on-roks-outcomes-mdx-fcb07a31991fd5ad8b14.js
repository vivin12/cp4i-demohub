(window.webpackJsonp=window.webpackJsonp||[]).push([[34,39,66,67,69,70,71],{"013z":function(e,t,a){"use strict";var o=a("q1tI"),i=a.n(o),c=a("NmYn"),n=a.n(c),s=a("Wbzz"),b=a("Xrax"),r=a("k4MR"),l=a("TSYQ"),m=a.n(l),p=a("QH2O"),d=a.n(p),g=a("qKvR"),u=function(e){var t,a=e.title,o=e.theme,i=e.tabs,c=void 0===i?[]:i;return Object(g.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=c.length,t[d.a.darkMode]="dark"===o,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:d.a.text},a)))))},A=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,o=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||o,c=i.baseUrl,n=i.subDirectory,b=c+"/edit/"+i.branch+n+"/src/pages"+t;return c?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:b},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),y=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,i=o.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),c=a===i,b=new RegExp(i+"/?(#.*)?$"),r=o.replace(b,a);return Object(g.b)("li",{key:e,className:m()((t={},t[y.selectedItem]=c,t),y.listItem)},Object(g.b)(s.Link,{className:y.link,to:""+r},e))}));return Object(g.b)("div",{className:y.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:y.list},c))))))},t}(i.a.Component),w=a("MjG9"),k=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,c=t.frontmatter,l=void 0===c?{}:c,m=t.relativePagePath,p=t.titleType,d=l.tabs,A=l.title,O=l.theme,y=l.description,N=l.keywords,x=Object(k.a)().interiorTheme,v=Object(s.useStaticQuery)("2456312558").site.pathPrefix,B=v?o.pathname.replace(v,""):o.pathname,E=d?B.split("/").filter(Boolean).slice(-1)[0]||n()(d[0],{lower:!0}):"",z=O||x;return Object(g.b)(r.a,{tabs:d,homepage:!1,theme:z,pageTitle:A,pageDescription:y,pageKeywords:N,titleType:p},Object(g.b)(u,{title:i?Object(g.b)(i,null):A,label:"label",tabs:d,theme:z}),d&&Object(g.b)(j,{title:A,slug:B,tabs:d,currentTab:E}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:m})),Object(g.b)(f.a,{pageContext:t,location:o,slug:B,tabs:d,currentTab:E}),Object(g.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},qulW:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var o=a("wx14"),i=a("zLVn"),c=(a("q1tI"),a("7ljp")),n=a("013z"),s=(a("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},r=b("AnchorLinks"),l=b("AnchorLink"),m={_frontmatter:s},p=n.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)(p,Object(o.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"IBM Cloud Pak for Integration brings together IBM’s market-leading\nmiddleware capabilities to support a broad range of integration styles\nand use cases. With powerful deployment, lifecycle management, and\nproduction services running on Red Hat OpenShift, it enables clients to\nleverage the latest agile integration practices, simplify the management\nof their integration architecture, and reduce cost. In this document you\nrequest access to a shared Cloud Pak for Integrations on ROKS, to be used in\nSales Demos. The environment is pre-installed with demo assets, and you just\nneed to follow the Demo Script. Remember, this is a shared environment, please\ndon’t customize or change anything there. If you need your own environment,\nfollow the directions from ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"/cp4i-demohub/cp4i-demohub/cp4i-on-roks/"}),"Request your own CP4I environment on ROKS"),"."),Object(c.b)("p",null,"You will complete the following high level tasks:"),Object(c.b)(r,{mdxType:"AnchorLinks"},Object(c.b)(l,{mdxType:"AnchorLink"},"Requesting Access to the shared Environment"),Object(c.b)(l,{mdxType:"AnchorLink"},"Accessing the Environment")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Requesting Access to the shared Environment"),Object(c.b)("p",null,"1.Access the ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://assetrepo.ibm.com/collection/cloud-pak-outcomes"}),"Cloud Pak Outcomes")," collection on IBM Asset Repo and log in using your IBM credentials."),Object(c.b)("p",null,"2.On the Outcomes Environments, select ",Object(c.b)("strong",{parentName:"p"},"Cloud Pak for Integration - Outcomes"),"."),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(o.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAACO0lEQVQoz51RW28SQRhdb/GWIqYaYOsltjEtAWOhtmprbWKpPuhTkyYi1koVtPGp8cVoTKMPJsZq0P9nQWApsLuws1uWy+7OcXaBljby4pecfPPdzpz5hgv6/ZicuolA8BrmZqbxKHIX89Nh3Ls9ganwOEZHhnHBcx6DbjeuB/x4cD+CyMICZljvJd4H3uuFNxAGH5qFZywEzuVy4SIrDA6cwhWfB6FhHvPBIdwZG4Jv4ASues+CP3Max48cxlw4iMnxIPwjl8Gfc8N17BBOjk7g6OwiuBsPcSv+Flz8+QrevEogubqCaPQJXi7H8Gk9iY3111iLL2PtWQwbH97j648UUt83kWDxanQJyaePkXgRR+zjN8Q+/8TSuy/YTP0Chz5mUfyHUXC6XoeiEFimCZPBsiy0mg0YrSarWyxu552auXfeBevvglJGaBgG6vV6m5+2ZdX0BjTdQMMAmgZt5+meZDumXX8A3L6mzpBWN1EmFiQN2Gk4o20CpogyAf3IHMJeol6V/16sCSOz5ayin3EHb7BN13VIkoRWqwV7JV2YrKwLOZDsH9TEMmrlkgO945uy5BB2XtA2+6xpGs1ms7RUKjkghFBtZ4flVSrnczTHakKhQEvFIi0yEEWhhM3UhDzlep+5u0NVRSaTgSiKqFQqkGUZEoOdrwp5p1Yqi6gSgqqiQK5UodZ0NJhKWyFhHMT27OsJYyVErZGyKLGLlX1QVZVI6TQp/N4iYj5HZEFgyDuobG8TLZMmfwFb9yT1Rv7ClgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"outcomes cp4i",title:"outcomes cp4i",src:"/cp4i-demohub/static/e4dee80c768327edf9d15b86bf91f5ec/3cbba/outcomes-cp4i.png",srcSet:["/cp4i-demohub/static/e4dee80c768327edf9d15b86bf91f5ec/7fc1e/outcomes-cp4i.png 288w","/cp4i-demohub/static/e4dee80c768327edf9d15b86bf91f5ec/a5df1/outcomes-cp4i.png 576w","/cp4i-demohub/static/e4dee80c768327edf9d15b86bf91f5ec/3cbba/outcomes-cp4i.png 1152w","/cp4i-demohub/static/e4dee80c768327edf9d15b86bf91f5ec/9e666/outcomes-cp4i.png 1416w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"3.Select your ",Object(c.b)("em",{parentName:"p"},"Reservation type"),"."),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(o.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB0ElEQVQoz52STW9SURCGj59p1KgJKSXAtbRpgwXTCK21iBiNWxM/Y9L/QoFiJFpMo7GJ9gaN0Y2Lhp/BD4AFC1ZsWJgQxcK99H49Xm5oIIi26SRzzpx3znln3skRidgqq7HbzMzMMjs3z9VgkOhiiGh4nvBCEK/fj8c9ieTzEZoLcHNlmVvxONFIxMbdSK5LBKanCYQjLEhTCMnjIXRtEZ/XS2JliYd3lnh69zqJsB9p8jJXplxcPHOSU0JwPxZl7fkznjx+RCIe48LpE5xzuZmI3OPsjQecDy4jkqk068kULzIZ3ubzvN98zc5Wju3NHNn1JNtvXvFyI002k+bbJxn54wfebeUdLJfNsLHzldSXXTKF76Q+7yKwzbBwzLBd1cHk+CYURaHTaWNZfVb6u302DQPLNDFtN+zY7MemaThnXddRuvv8+PmbVltxcqJUKiHLMsVikUKhQLVapV6vo6pqn9ca644im2Bf0/m112FPUR1cNBoNyuUytVqNSqVCs9mk1Wo51Q8Ih4mHMc2+07aJuprmxA7h/+YxGMO/cz2Zarc7IOwtg9mYf8kaRzqc773RhtSIUUlH9dFiB7g4TNphNlpEGIZ5rA7Hddz7Zn8AJtoyjRnVW+YAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"outcomes reservation type",title:"outcomes reservation type",src:"/cp4i-demohub/static/375ff63e0a111ea3ab9c516f56b5840e/3cbba/outcomes-reservation-type.png",srcSet:["/cp4i-demohub/static/375ff63e0a111ea3ab9c516f56b5840e/7fc1e/outcomes-reservation-type.png 288w","/cp4i-demohub/static/375ff63e0a111ea3ab9c516f56b5840e/a5df1/outcomes-reservation-type.png 576w","/cp4i-demohub/static/375ff63e0a111ea3ab9c516f56b5840e/3cbba/outcomes-reservation-type.png 1152w","/cp4i-demohub/static/375ff63e0a111ea3ab9c516f56b5840e/b8d10/outcomes-reservation-type.png 1434w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"4.Follow the ",Object(c.b)("strong",{parentName:"p"},"Create a reservation")," form to define the details of your ROKS Reservation."),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(o.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9UlEQVQoz5WS7UpbQRCGF8GiQku1qaBJNFXTJqnRBrTRYPMB/S0WfxR6QZoPMRgJgoVaEWzxl0npJeQqcgOeiKGenM1JTvbk7c7GU0JL0zrwsLOzs+/Ozi6Lr0WxEU9hwe/H/IIfL0NBrLxaRHQ5gHDoOWZ8Pky6nsA9PYXgvA8b61EkkknEYuvwyJh74hGeed2YDa8i4POCTcnkF4EQvB4P1iJLeJd6je3EEt5G5jDjeoi56adwjQ1jiDHEloP48H4bW1ubSCXeYGLsAUYfj2MkksRwdBOj4ThYOpPDzk4auXQGR4VDHB8WcFLM41PxALndrIwVUNjfR3o3g69npzg7PcHHoyLye1kcSPKfz5G5+I6980tkv3wDw2/WvaN/fh9jhtGApl2hVtNwfV2Drt+CYk3OJQbMphwlXPqcc4VhGDLWhOgImG0LtR8GbnQOYdtglmWpRRqJNtFuQwgBWyYI0YP8frrdroqbMlfnJm4ltowx2uycSLRaLYVpmgPpHWqDmy0lSoUoQdpcr9flVXWVSJX9L6rHUqQpNaxOR/mqwkajoaD+0NypchCUR0Z9IzFHXFVIYnRdurrTeKp2kCD1mwR+/QbpK8E/vo1qtug9EPXmL9A67kT6hVm1WkWpVEKlUkG5XAbNNU1TVf7LHCEanYf8CWaqMQlrvfPzAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"outcomes create reservation",title:"outcomes create reservation",src:"/cp4i-demohub/static/5dbc964729cb20d606d46a6356b6a7cd/3cbba/outcomes-create-reservation.png",srcSet:["/cp4i-demohub/static/5dbc964729cb20d606d46a6356b6a7cd/7fc1e/outcomes-create-reservation.png 288w","/cp4i-demohub/static/5dbc964729cb20d606d46a6356b6a7cd/a5df1/outcomes-create-reservation.png 576w","/cp4i-demohub/static/5dbc964729cb20d606d46a6356b6a7cd/3cbba/outcomes-create-reservation.png 1152w","/cp4i-demohub/static/5dbc964729cb20d606d46a6356b6a7cd/7df4c/outcomes-create-reservation.png 1414w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"5.After few seconds, your Cloud Pak for Integration Outcomes Demonstration is ready."),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(o.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVQoz5WS32tSYRjHz2BFxKhoaMs501YTXTHNWtNm1EVXQUTrIvafpMccFKWrCbUtWBG7imAX3Xa5/oi6WNBuolW6pWeeczzq0U/vqzDMFmwPfHnO+7zf5/v8eI8yOTHB5egVfD4fp4fP4PePED4fJDx6lmBgBJfbzYDTwdDgIIFhL+MXI0RjMcKhkIg7Geo/iveUB28wRMB9AsVzcoDRc2O4XS7i4xFuxSNMXRsjHnTjcRzD4zzOkQM99CoKN2IXmL53l6k7t7k6GaWvt4fD/Q4Oha5z8NJN+vwRlPtJlUQiyYyaIpfJsPD0CUu5x8xnH5FOJHg+m+FhOo2aUFlaXGThxTzPsllmUqqIqzx4uUzyzQqpV29Jvl5BQZjdYE9m74GjlEolNja+o+s69XqdWq1K1TKxKiYVU0B4y6pgmoY4GyJewTB0wbGo2zamVeNnUUczLBqNBoqmaRQKBQxdQyvm2dra5Ee+yK98AU0rIQtKjoRuCNGWoCEK14RAE6tW53fZZNu02h1KsS9ra6x/0/j0tczndZ3NUl0kV9odC0hv2/8OXBXxslkRorUWT3KU1dWP5OZmWf6wzcw7mHsPZnX3/TSbzb8gTY5pivGleGvkrpQddCd3inR+20JEdrfzKPJCKjdantZe2uT/i3YKd3evdF/s17qLKLK73fazX7T2KX7oP832LrtKlQ21AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"outcomes ready",title:"outcomes ready",src:"/cp4i-demohub/static/247a936051b2912a258418c71cf67d92/3cbba/outcomes-ready.png",srcSet:["/cp4i-demohub/static/247a936051b2912a258418c71cf67d92/7fc1e/outcomes-ready.png 288w","/cp4i-demohub/static/247a936051b2912a258418c71cf67d92/a5df1/outcomes-ready.png 576w","/cp4i-demohub/static/247a936051b2912a258418c71cf67d92/3cbba/outcomes-ready.png 1152w","/cp4i-demohub/static/247a936051b2912a258418c71cf67d92/b8d10/outcomes-ready.png 1434w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("hr",null),Object(c.b)("h2",null,"Accessing the Environment"),Object(c.b)("p",null,"1.Check, your email. There you should have the Environment URL, login and password. Open the ",Object(c.b)("strong",{parentName:"p"},"URL"),"."),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(o.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"952px"}}),"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACzUlEQVQoz3WR30uTURjHvUjIuel073z3Szfd3KZbKZSlgShhlLG6CLyru7qXLMoLbYoFkklUJIG4QiH8A0TS8scRtfmzwCTBLZ3z1/Y2pyC03Hm/nb1G6EUHHr6ch+f5nO/znKTW1lbo9To4HIUoKLAzdcBszkPt3Qe4Wu1CxU0PWtoGUd/chce1XlSVXkNd/UNcvlINk8kEp9Mp9dlsVtjtNiQ1NjYgOfkEeD4LajXHlIdSqYRKxYHjVLAXu3DryQAuuFfhLGuBVWtBBpcBNZfFalTQaDRSn0qVKdUnNTW5IZOlwGDQM6d6aPlM2EpuoNJ1B2pVOrJZ3lVzGxdr7iHPbIFCoYDFYkHd/QZk5xgZkJcmTKhWq0GS2+1GSspJ6HQ6ltAy1cKUZ0OhoxicWg0dKzbnGVFoNUkjWa1WFBUVoarqErsXIDc3l/Xx0oQJ6BGg9hDIXuH1PHIKzjJoBXI0einf19eP+fl5TE9Pw+v9jNHRUYRCIXg8HsjlqVL/MeChbQ4WeylOV7pgLz2PQss5lJRfh7O8DB8/DGBmdgZTU15MTEzA5/MhcXp7e5GaKvsfkEeaIgNpBgNM+aeQoz8DGWeCSp0p9vf3i5OTkxgbI+L4+LgoCILIeGJPT7f416H4D5j4lMRCjSYjnj5rQ8frV+h848Hbrm68fNEudnR0YNnnE4WfghgKhxOBbRaJ8545lKfKxKMOKQNStlRqy7fQiG+ZxrbDdDcQoHtrQforvEMPhAiNrgZEwb8iRv1+uutfjgtL3+PxjWC8q72NKtLTKNs9ZUD6zyHPHOYbsxH8toCd/RhCQhSb4R0sLgfgD2xgfX2Lbm6F6U4kGqcHccRivyWH7563Q66QH9shYUDCa3iSb84lP0Y+kf2FL2Tv6yyJzE2RNTJE1saGycrQ4BCL4eDYyEhkbpqEZrwkvrRIOpsfEYUynTCHhAHJH3yt1O+eN4MPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"outcomes email",title:"outcomes email",src:"/cp4i-demohub/static/5b0c23cb9123eed0faf7e4752cd3ab94/f26e3/outcomes-email.png",srcSet:["/cp4i-demohub/static/5b0c23cb9123eed0faf7e4752cd3ab94/7fc1e/outcomes-email.png 288w","/cp4i-demohub/static/5b0c23cb9123eed0faf7e4752cd3ab94/a5df1/outcomes-email.png 576w","/cp4i-demohub/static/5b0c23cb9123eed0faf7e4752cd3ab94/f26e3/outcomes-email.png 952w"],sizes:"(max-width: 952px) 100vw, 952px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"2.If necessary, accept the risks. On the ",Object(c.b)("em",{parentName:"p"},"Log in")," page, click on ",Object(c.b)("strong",{parentName:"p"},"Enterprise LDAP")," link."),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(o.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABRUlEQVQoz5WTa06DQBSFu4hCQSmhwjyBFpBaEkOq0R8mJroA97+O452hNEzaaPlxcueR+XLunJmFlBJCCJh6TeMe5xxBEMD3fXieh+VyaauZr1arc12MhwbReAIaZecjkJQkCdIss3WEOUBHE8hUjICHJAaP10jTFIIxbDYbC7lwKKWyICk4pMqR58VpjROcQdHYtByRuwM5OxY1moyT2/A6UPCMQCXyuoduP5E3z4OzfAdd7i3YAH06EIZ3iOMHRFGC8H592TJnGbqXD9TdG3TzSu40iqqFEhn0tkPRfUEp45A5ofi+54DOQHNfj/sntP03FLlRkmNXVSi2NXR1hGreySFzUh7bnMppmbOUYOSK7kaQE6ELlP0PFAGF1NS+mAccAmBDKKeADNiAbFhKzQX+r1nA6SN2Hrm4/lNuAs75en8BfwGqTk5qfoJcSgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"outcomes login",title:"outcomes login",src:"/cp4i-demohub/static/04d59565853db826b3e644a5f3a69fb6/3cbba/outcomes-login.png",srcSet:["/cp4i-demohub/static/04d59565853db826b3e644a5f3a69fb6/7fc1e/outcomes-login.png 288w","/cp4i-demohub/static/04d59565853db826b3e644a5f3a69fb6/a5df1/outcomes-login.png 576w","/cp4i-demohub/static/04d59565853db826b3e644a5f3a69fb6/3cbba/outcomes-login.png 1152w","/cp4i-demohub/static/04d59565853db826b3e644a5f3a69fb6/b8d10/outcomes-login.png 1434w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"3.Log in, using the username and password that you received in your email."),Object(c.b)("p",null,"  ",Object(c.b)("span",Object(o.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABoElEQVQoz31T207CQBDtJ2hiL9KyLdC906UFogZiYow+aEx8MP6mv3icXWgDCD6c7Ganc+bMzGmklIKUEv48hz4mhECWZUiSJCCO43CmaRrQ36M+acABUY9DwpRQVhWmdQ1WVoiJ6GZfZCA8ghRnFXtCnzBjY8wFR0PfWV5DTirwshyURsdEHNq2mDcOSuvdm6gprgfC1WyKjmINkTkidlTcv+W+7YGQEpVdwK6eYdZv0N02kCi7hFls6C4GwpbPqKCBNgbGWvpmjobaz33bnlBQpYenN6w2rzDtI6yWcN0KSkyh3R3m9x9BbZghJeiKg4k1xuUEjDHkrISkMQwK/by6rsX68RPGPUArasMt0Cy3MMtn6OULdcAhpEIWX6Frv6Dff1AxizK5xphIbD5C4R3Qt+xVKuOoDbebm7awm29SuN2No19KlqLKC9SkbsYmmBZjVLcZ4TaoP1gKzUvJPXZ3SbPqyQ5tc7O3ySlObHPO2PqPbYIPk3SwyCl8PDoy9T/gnIek/g+5hKhpGhiygCUL/AdNmy6KAqPR6CL81n8B+6VTq0HwDx0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(o.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"outcomes username",title:"outcomes username",src:"/cp4i-demohub/static/23445d0595b51ff8c6991ceeb9590899/3cbba/outcomes-username.png",srcSet:["/cp4i-demohub/static/23445d0595b51ff8c6991ceeb9590899/7fc1e/outcomes-username.png 288w","/cp4i-demohub/static/23445d0595b51ff8c6991ceeb9590899/a5df1/outcomes-username.png 576w","/cp4i-demohub/static/23445d0595b51ff8c6991ceeb9590899/3cbba/outcomes-username.png 1152w","/cp4i-demohub/static/23445d0595b51ff8c6991ceeb9590899/b8d10/outcomes-username.png 1434w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cp-4-i-on-roks-outcomes-mdx-fcb07a31991fd5ad8b14.js.map