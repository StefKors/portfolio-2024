import{u as b,R as u,c as D,S as B,U as O,V as M,e as R,B as S,W as p,X as V,A as E,N as H,Y as z}from"./Bp7PlYzF.js";const N=s=>s==="defer"||s===!1;function U(...s){var v;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[t,d,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof d!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=b(),g=d,P=()=>u.value,C=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??P,a.getCachedData=a.getCachedData??C,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??u.deep,a.dedupe=a.dedupe??"cancel";const f=a.getCachedData(t,e),_=f!=null;if(!e._asyncData[t]||!a.immediate){(v=e.payload._errors)[t]??(v[t]=u.errorValue);const o=a.deep?D:B;e._asyncData[t]={data:o(_?f:a.default()),pending:D(!_),error:O(e.payload._errors,t),status:D("idle"),_default:a.default}}const r={...e._asyncData[t]};delete r._default,r.refresh=r.execute=(o={})=>{if(e._asyncDataPromises[t]){if(N(o.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if(o._initial||e.isHydrating&&o._initial!==!1){const c=o._initial?f:a.getCachedData(t,e);if(c!=null)return Promise.resolve(c)}r.pending.value=!0,r.status.value="pending";const l=new Promise((c,i)=>{try{c(g(e))}catch(y){i(y)}}).then(async c=>{if(l.cancelled)return e._asyncDataPromises[t];let i=c;a.transform&&(i=await a.transform(c)),a.pick&&(i=K(i,a.pick)),e.payload.data[t]=i,r.data.value=i,r.error.value=u.errorValue,r.status.value="success"}).catch(c=>{if(l.cancelled)return e._asyncDataPromises[t];r.error.value=V(c),r.data.value=E(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=l,e._asyncDataPromises[t]},r.clear=()=>j(e,t);const h=()=>r.refresh({_initial:!0}),w=a.server!==!1&&e.payload.serverRendered;{const o=H();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;M(()=>{i.forEach(y=>{y()}),i.splice(0,i.length)}),R(()=>i.splice(0,i.length))}w&&e.isHydrating&&(r.error.value||f!=null)?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):o&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(h):a.immediate&&h();const l=z();if(a.watch){const i=S(a.watch,()=>r.refresh());l&&p(i)}const c=e.hook("app:data:refresh",async i=>{(!i||i.includes(t))&&await r.refresh()});l&&p(c)}const m=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(m,r),m}function j(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=u.errorValue),s._asyncData[n]&&(s._asyncData[n].data.value=s._asyncData[n]._default(),s._asyncData[n].error.value=u.errorValue,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n]&&(s._asyncDataPromises[n].cancelled=!0),s._asyncDataPromises[n]=void 0)}function K(s,n){const t={};for(const d of n)t[d]=s[d];return t}export{U as u};
