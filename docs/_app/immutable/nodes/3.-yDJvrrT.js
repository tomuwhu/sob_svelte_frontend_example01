import{s as W,n as G,r as X}from"../chunks/scheduler.BvLojk_z.js";import{S as Y,i as Z,e as o,s as C,b as V,c as i,m as g,h as k,d as J,f as E,g as x,n as u,j as S,k as a,o as L,p as A,q as Q,l as M}from"../chunks/index.dN8aW_9l.js";function $(n){let r,f="SOB SvelteKit Példaprogramok",d,s,T="1. oldal: Változók, Input, Output",q,e,v,D="Vissza a menühöz",H,j,O,p,K="-",P,c,U,_,R="+",B,h,y,m,w="2",I,z,N,F;return{c(){r=o("h1"),r.textContent=f,d=C(),s=o("h3"),s.textContent=T,q=C(),e=o("div"),v=o("a"),v.textContent=D,H=C(),j=o("hr"),O=C(),p=o("button"),p.textContent=K,P=C(),c=o("input"),U=C(),_=o("button"),_.textContent=R,B=C(),h=o("h2"),y=V(n[0]),m=o("sup"),m.textContent=w,I=V(" = "),z=V(n[1]),this.h()},l(l){r=i(l,"H1",{class:!0,"data-svelte-h":!0}),g(r)!=="svelte-1qy4hcz"&&(r.textContent=f),d=k(l),s=i(l,"H3",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-434hme"&&(s.textContent=T),q=k(l),e=i(l,"DIV",{class:!0});var t=J(e);v=i(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),g(v)!=="svelte-12mirja"&&(v.textContent=D),H=k(t),j=i(t,"HR",{class:!0}),O=k(t),p=i(t,"BUTTON",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-1s0dtuj"&&(p.textContent=K),P=k(t),c=i(t,"INPUT",{type:!0,class:!0}),U=k(t),_=i(t,"BUTTON",{class:!0,"data-svelte-h":!0}),g(_)!=="svelte-9r1in1"&&(_.textContent=R),B=k(t),h=i(t,"H2",{class:!0});var b=J(h);y=E(b,n[0]),m=i(b,"SUP",{class:!0,"data-svelte-h":!0}),g(m)!=="svelte-1nsjm82"&&(m.textContent=w),I=E(b," = "),z=E(b,n[1]),b.forEach(x),t.forEach(x),this.h()},h(){u(r,"class","svelte-1qurkg7"),u(s,"class","svelte-1qurkg7"),u(v,"href","/"),u(v,"class","svelte-1qurkg7"),u(j,"class","svelte-1qurkg7"),u(p,"class","svelte-1qurkg7"),u(c,"type","number"),u(c,"class","svelte-1qurkg7"),u(_,"class","svelte-1qurkg7"),u(m,"class","svelte-1qurkg7"),u(h,"class","svelte-1qurkg7"),u(e,"class","svelte-1qurkg7")},m(l,t){S(l,r,t),S(l,d,t),S(l,s,t),S(l,q,t),S(l,e,t),a(e,v),a(e,H),a(e,j),a(e,O),a(e,p),a(e,P),a(e,c),L(c,n[0]),a(e,U),a(e,_),a(e,B),a(e,h),a(h,y),a(h,m),a(h,I),a(h,z),N||(F=[A(p,"click",n[2]),A(c,"input",n[3]),A(_,"click",n[4])],N=!0)},p(l,[t]){t&1&&Q(c.value)!==l[0]&&L(c,l[0]),t&1&&M(y,l[0]),t&2&&M(z,l[1])},i:G,o:G,d(l){l&&(x(r),x(d),x(s),x(q),x(e)),N=!1,X(F)}}}function tt(n,r,f){let d;var s=10;const T=()=>f(0,s--,s);function q(){s=Q(this.value),f(0,s)}const e=()=>f(0,s++,s);return n.$$.update=()=>{n.$$.dirty&1&&f(1,d=s*s)},[s,d,T,q,e]}class lt extends Y{constructor(r){super(),Z(this,r,tt,$,W,{})}}export{lt as component};