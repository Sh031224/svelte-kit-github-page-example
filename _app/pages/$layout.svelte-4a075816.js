import{D as s,S as a,i as e,s as t,e as r,k as c,E as l,t as i,c as n,a as o,d as v,n as h,g as u,b as d,F as f,f as g,G as p,H as b,I as x,J as w,j as $,m as E,o as m,K as y,v as k,r as I,w as L}from"../chunks/vendor-aa021d46.js";const _={subscribe:a=>(()=>{const a=s("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}})().page.subscribe(a)};function A(s){let a,e,t,x,w,$,E,m,y,k,I,L,_,A,B,D,H,M,V;return{c(){a=r("header"),e=r("div"),t=r("a"),x=r("img"),$=c(),E=r("nav"),m=l("svg"),y=l("path"),k=c(),I=r("ul"),L=r("li"),_=r("a"),A=i("Home"),B=c(),D=l("svg"),H=l("path"),M=c(),V=r("div"),this.h()},l(s){a=n(s,"HEADER",{class:!0});var r=o(a);e=n(r,"DIV",{class:!0});var c=o(e);t=n(c,"A",{href:!0,class:!0});var l=o(t);x=n(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(v),c.forEach(v),$=h(r),E=n(r,"NAV",{class:!0});var i=o(E);m=n(i,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var d=o(m);y=n(d,"path",{d:!0,class:!0},1),o(y).forEach(v),d.forEach(v),k=h(i),I=n(i,"UL",{class:!0});var f=o(I);L=n(f,"LI",{class:!0});var g=o(L);_=n(g,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var p=o(_);A=u(p,"Home"),p.forEach(v),g.forEach(v),f.forEach(v),B=h(i),D=n(i,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var b=o(D);H=n(b,"path",{d:!0,class:!0},1),o(H).forEach(v),b.forEach(v),i.forEach(v),M=h(r),V=n(r,"DIV",{class:!0}),o(V).forEach(v),r.forEach(v),this.h()},h(){x.src!==(w="/svelte-kit-github-page/_app/assets/svelte-logo.87df40b8.svg")&&d(x,"src","/svelte-kit-github-page/_app/assets/svelte-logo.87df40b8.svg"),d(x,"alt","SvelteKit"),d(x,"class","svelte-s25wxy"),d(t,"href","https://kit.svelte.dev"),d(t,"class","svelte-s25wxy"),d(e,"class","corner svelte-s25wxy"),d(y,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),d(y,"class","svelte-s25wxy"),d(m,"viewBox","0 0 2 3"),d(m,"aria-hidden","true"),d(m,"class","svelte-s25wxy"),d(_,"sveltekit:prefetch",""),d(_,"href","/"),d(_,"class","svelte-s25wxy"),d(L,"class","svelte-s25wxy"),f(L,"active","/"===s[0].path),d(I,"class","svelte-s25wxy"),d(H,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),d(H,"class","svelte-s25wxy"),d(D,"viewBox","0 0 2 3"),d(D,"aria-hidden","true"),d(D,"class","svelte-s25wxy"),d(E,"class","svelte-s25wxy"),d(V,"class","corner svelte-s25wxy"),d(a,"class","svelte-s25wxy")},m(s,r){g(s,a,r),p(a,e),p(e,t),p(t,x),p(a,$),p(a,E),p(E,m),p(m,y),p(E,k),p(E,I),p(I,L),p(L,_),p(_,A),p(E,B),p(E,D),p(D,H),p(a,M),p(a,V)},p(s,[a]){1&a&&f(L,"active","/"===s[0].path)},i:b,o:b,d(s){s&&v(a)}}}function B(s,a,e){let t;return x(s,_,(s=>e(0,t=s))),[t]}class D extends a{constructor(s){super(),e(this,s,B,A,t,{})}}function H(s){let a,e,t,l;a=new D({});const i=s[1].default,u=w(i,s,s[0],null);return{c(){$(a.$$.fragment),e=c(),t=r("main"),u&&u.c(),this.h()},l(s){E(a.$$.fragment,s),e=h(s),t=n(s,"MAIN",{class:!0});var r=o(t);u&&u.l(r),r.forEach(v),this.h()},h(){d(t,"class","svelte-u5b7rb")},m(s,r){m(a,s,r),g(s,e,r),g(s,t,r),u&&u.m(t,null),l=!0},p(s,[a]){u&&u.p&&(!l||1&a)&&y(u,i,s,s[0],a,null,null)},i(s){l||(k(a.$$.fragment,s),k(u,s),l=!0)},o(s){I(a.$$.fragment,s),I(u,s),l=!1},d(s){L(a,s),s&&v(e),s&&v(t),u&&u.d(s)}}}function M(s,a,e){let{$$slots:t={},$$scope:r}=a;return s.$$set=s=>{"$$scope"in s&&e(0,r=s.$$scope)},[r,t]}export default class extends a{constructor(s){super(),e(this,s,M,H,t,{})}}
