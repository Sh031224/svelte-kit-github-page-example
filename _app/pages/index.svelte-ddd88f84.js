import{S as s,i as a,s as t,e,t as c,k as l,c as r,a as o,g as n,d as h,n as i,b as u,f as v,F as f,H as p,h as m,G as d,I as $,j as E,J as g,m as w,o as k,v as T,r as b,w as x}from"../chunks/vendor-e4c20a4f.js";function S(s){let a,t,E,g,w,k,T,b,x,S,G,H,I,N,O;return{c(){a=e("section"),t=e("h1"),E=c("Svelte kit + Github Page"),g=l(),w=e("p"),k=c(s[0]),T=l(),b=e("article"),x=e("button"),S=c("+"),G=l(),H=e("button"),I=c("-"),this.h()},l(e){a=r(e,"SECTION",{class:!0});var c=o(a);t=r(c,"H1",{class:!0});var l=o(t);E=n(l,"Svelte kit + Github Page"),l.forEach(h),g=i(c),w=r(c,"P",{class:!0});var u=o(w);k=n(u,s[0]),u.forEach(h),T=i(c),b=r(c,"ARTICLE",{});var v=o(b);x=r(v,"BUTTON",{class:!0});var f=o(x);S=n(f,"+"),f.forEach(h),G=i(v),H=r(v,"BUTTON",{class:!0});var p=o(H);I=n(p,"-"),p.forEach(h),v.forEach(h),c.forEach(h),this.h()},h(){u(t,"class","svelte-12vpwl5"),u(w,"class","svelte-12vpwl5"),u(x,"class","svelte-12vpwl5"),u(H,"class","svelte-12vpwl5"),u(a,"class","svelte-12vpwl5")},m(e,c){v(e,a,c),f(a,t),f(t,E),f(a,g),f(a,w),f(w,k),f(a,T),f(a,b),f(b,x),f(x,S),f(b,G),f(b,H),f(H,I),N||(O=[p(x,"click",s[1]),p(H,"click",s[2])],N=!0)},p(s,[a]){1&a&&m(k,s[0])},i:d,o:d,d(s){s&&h(a),N=!1,$(O)}}}function G(s,a,t){let{count:e}=a;return s.$$set=s=>{"count"in s&&t(0,e=s.count)},[e,()=>{t(0,e+=1)},()=>{t(0,e+=1)}]}class H extends s{constructor(s){super(),a(this,s,G,S,t,{count:0})}}function I(s){let a,t,e;return t=new H({props:{count:O}}),{c(){a=l(),E(t.$$.fragment),this.h()},l(s){g('[data-svelte="svelte-n3ior8"]',document.head).forEach(h),a=i(s),w(t.$$.fragment,s),this.h()},h(){document.title="Home"},m(s,c){v(s,a,c),k(t,s,c),e=!0},p:d,i(s){e||(T(t.$$.fragment,s),e=!0)},o(s){b(t.$$.fragment,s),e=!1},d(s){s&&h(a),x(t,s)}}}const N=!0;let O=0;export default class extends s{constructor(s){super(),a(this,s,null,I,t,{})}}export{N as prerender};
