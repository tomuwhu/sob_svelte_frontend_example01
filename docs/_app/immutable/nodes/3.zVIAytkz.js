import{s as W,n as G,r as X}from"../chunks/scheduler.BvLojk_z.js";import{S as Y,i as Z,e as u,s as C,b as E,c,m as k,h as x,d as J,f as g,g as q,n as r,j as T,k as a,o as L,p as A,q as Q,l as M}from"../chunks/index.dN8aW_9l.js";import{b as $}from"../chunks/paths.D00-irXj.js";function tt(n){let o,p="SOB SvelteKit Példaprogramok",_,s,y="1. oldal: Változók, Input, Output",b,e,h,D="Vissza a menühöz",P,z,U,v,K="-",j,i,B,d,R="+",I,f,H,m,w="2",N,O,V,F;return{c(){o=u("h1"),o.textContent=p,_=C(),s=u("h3"),s.textContent=y,b=C(),e=u("div"),h=u("a"),h.textContent=D,P=C(),z=u("hr"),U=C(),v=u("button"),v.textContent=K,j=C(),i=u("input"),B=C(),d=u("button"),d.textContent=R,I=C(),f=u("h2"),H=E(n[0]),m=u("sup"),m.textContent=w,N=E(" = "),O=E(n[1]),this.h()},l(l){o=c(l,"H1",{class:!0,"data-svelte-h":!0}),k(o)!=="svelte-1qy4hcz"&&(o.textContent=p),_=x(l),s=c(l,"H3",{class:!0,"data-svelte-h":!0}),k(s)!=="svelte-434hme"&&(s.textContent=y),b=x(l),e=c(l,"DIV",{class:!0});var t=J(e);h=c(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),k(h)!=="svelte-107r8vv"&&(h.textContent=D),P=x(t),z=c(t,"HR",{class:!0}),U=x(t),v=c(t,"BUTTON",{class:!0,"data-svelte-h":!0}),k(v)!=="svelte-1s0dtuj"&&(v.textContent=K),j=x(t),i=c(t,"INPUT",{type:!0,class:!0}),B=x(t),d=c(t,"BUTTON",{class:!0,"data-svelte-h":!0}),k(d)!=="svelte-9r1in1"&&(d.textContent=R),I=x(t),f=c(t,"H2",{class:!0});var S=J(f);H=g(S,n[0]),m=c(S,"SUP",{class:!0,"data-svelte-h":!0}),k(m)!=="svelte-1nsjm82"&&(m.textContent=w),N=g(S," = "),O=g(S,n[1]),S.forEach(q),t.forEach(q),this.h()},h(){r(o,"class","svelte-1dq7cfe"),r(s,"class","svelte-1dq7cfe"),r(h,"href",$+"/"),r(h,"class","svelte-1dq7cfe"),r(z,"class","svelte-1dq7cfe"),r(v,"class","svelte-1dq7cfe"),r(i,"type","number"),r(i,"class","svelte-1dq7cfe"),r(d,"class","svelte-1dq7cfe"),r(m,"class","svelte-1dq7cfe"),r(f,"class","svelte-1dq7cfe"),r(e,"class","svelte-1dq7cfe")},m(l,t){T(l,o,t),T(l,_,t),T(l,s,t),T(l,b,t),T(l,e,t),a(e,h),a(e,P),a(e,z),a(e,U),a(e,v),a(e,j),a(e,i),L(i,n[0]),a(e,B),a(e,d),a(e,I),a(e,f),a(f,H),a(f,m),a(f,N),a(f,O),V||(F=[A(v,"click",n[2]),A(i,"input",n[3]),A(d,"click",n[4])],V=!0)},p(l,[t]){t&1&&Q(i.value)!==l[0]&&L(i,l[0]),t&1&&M(H,l[0]),t&2&&M(O,l[1])},i:G,o:G,d(l){l&&(q(o),q(_),q(s),q(b),q(e)),V=!1,X(F)}}}function et(n,o,p){let _;var s=10;const y=()=>p(0,s--,s);function b(){s=Q(this.value),p(0,s)}const e=()=>p(0,s++,s);return n.$$.update=()=>{n.$$.dirty&1&&p(1,_=s*s)},[s,_,y,b,e]}class nt extends Y{constructor(o){super(),Z(this,o,et,tt,W,{})}}export{nt as component};