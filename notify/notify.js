!function(e,t,s,i,r,n,o,a,l,c,h){"use strict";const u=e("../_common/output-mgr.js"),m=e("../_common/input-mgr.js"),g=e("../_common/sync-check.js");e("child_process"),e("os"),e("fs"),e("path"),e("http"),e("https"),e("net"),e("tls"),e("events"),e("assert"),e("util"),e("stream"),e("url"),e("punycode"),e("zlib");class d extends u.OutputMgr{#e;#t;constructor(e,t){super(),this.#t=e,this.#e=t}*virtualIter(){this.#t.wasUsed&&(yield["ratelimit-seconds",this.#t.millisUntilReset/1e3],yield["ratelimit-reset-at",this.#t.resetIso]),this.#e.issues.size&&(yield["failed-issues",[...this.#e.issues].join(",")])}}class p{#s=0;#i;#r;constructor(e,t=30){this.#i=e,this.#r=o.max(0,o.floor(t))}get done(){return this.#s}set done(e){e>this.#i?(u.coreExports.warning(`Progress done value (${e}) exceeds total (${this.#i})`),this.#s=this.#i):e<0?(u.coreExports.warning(`Progress done value (${e}) is below 0`),this.#s=0):this.#s=e}get pctDone(){return parseFloat((this.done/this.#i).toFixed(3))}get total(){return this.#i}get#n(){return this.pctDone*this.#r}limitedProgress(e){return new w(this,e)}log(e){u.coreExports.info(`[${this}] ${e}`)}toString(){const e=this.#n;return"█".repeat(o.floor(e))+function(e){if(e>=.875)return"▇";if(e>=.75)return"▆";if(e>=.625)return"▅";if(e>=.5)return"▄";if(e>=.375)return"▃";if(e>=.25)return"▂";return"▁"}(e%1)+"░".repeat(30-o.ceil(e))}warn(e){u.coreExports.warning(`[${this}] ${e}`)}}class w{#o;#a;constructor(e,t){this.#a=t,this.#o=e}get remaining(){return this.#a}get satisfiable(){return this.#a<=this.#o.total}decrement(e){return this.#a?(this.#l(1),this.#o.log(e),this.satisfiable):(u.coreExports.warning("Tried to decrement `LimitedProgress` below 0"),!1)}drain(){this.#a?this.#l(this.#a):u.coreExports.warning("Tried to drain `LimitedProgress` that's already empty")}#l(e){this.#a-=e,this.#o.done+=e}}class f{#a=Number.MAX_SAFE_INTEGER;#c=new Date;get humanisedWait(){return new Date(this.millisUntilReset).toISOString().slice(11,19)}get millisUntilReset(){return o.max(o.ceil(this.#c.getTime()-Date.now()),0)}get resetIso(){return this.#c.toISOString()}get wasUsed(){return this.#a!==Number.MAX_SAFE_INTEGER}async process(e){return this.updateFromHeaders((await e).headers)}updateFromHeaders(e){return this.#a=parseInt(e["x-ratelimit-remaining"]),this.#c=new Date(1e3*parseInt(e["x-ratelimit-reset"])),this.#a}}var b;class E{inputs;static#h=g.context.repo;#u;#m;#g;#d;#t=new f;#p=!1;constructor(e){this.inputs=e,this.#d=new p(2*e.issues.size),this.#u=g.getOctokit_1(e["gh-token"]).rest.issues,this.#g=`${e.labels.join(", ")} label${e.labels.length>1?"s":""}`;const t=e.comment.replaceAll("{{releaseUrl}}","{{baseUrl}}/releases/tag/{{tag}}").replaceAll("{{baseUrl}}","https://github.com/{{owner}}/{{repo}}").replaceAll("{{tag}}",e.tag).replaceAll("{{owner}}",b.#h.owner).replaceAll("{{repo}}",b.#h.repo);this.#m=t.includes("{{issueNumber}}")?e=>t.replaceAll("{{issueNumber}}",e):u.constant(t)}async process(){for(const e of this.inputs.issues){try{await this.#w(e,this.#d.limitedProgress(2))}catch(e){let t;if(e instanceof x)t=e;else{if(!$(e))throw e;this.#t.updateFromHeaders(e.response.headers),t=new x(this.#t,e)}if(this.inputs["error-on-ratelimit"])throw t;u.coreExports.warning(t.message);break}this.inputs.issues.delete(e)}}async#w(e,t){if(!t.satisfiable)throw new x(this.#t);if(!/^\d+$/.test(e))return t.drain(),void this.#d.warn(`Invalid issue number: ${e}`);const s={...b.#h,issue_number:Number(e)};if(await this.#t.process(this.#u.addLabels({...s,labels:this.inputs.labels})),!t.decrement(`[#${e}] Added ${this.#g}`))throw new x(this.#t);await this.#t.process(this.#u.createComment({...s,body:`${this.#m(e)}\n\n${u.Strings.Signature}`})),t.decrement(`[#${e}] Added comment`),this.#p&&t.remaining&&(this.#p=!1,u.coreExports.warning(`Still got ${t.remaining} permit(s) remaining.`))}}b=E,u.__decorate([u.OutputGroup((function(){return`Processing ${this.inputs.issues.size.toLocaleString()} issues.`}))],E.prototype,"process",null);class x extends r{constructor(e,t){super(`GitHub API rate limit exceeded for this token. Resets in ${e.humanisedWait} (${e.resetIso})`),this.name="RatelimitError",t&&(this.cause=t)}}function $(e){return e?.response?.headers!==c}(async function(){const e=new m.InputMgrImpl({comment:[String,{required:!0}],"error-on-ratelimit":Boolean,"error-on-out-of-sync":Boolean,"gh-token":[String,{required:!0}],issues(){const e=u.coreExports.getInput("issues",{required:!0}).split(/\s*,\s*/gm);if(!e.length||1===e.length&&""===e[0])return;const t=new Set(e);return e.length!==t.size&&u.coreExports.notice(`Removed ${e.length-t.size} duplicate issue numbers from the input.`),t},labels:[m.InputMgrImpl.ARRAY,{required:!0}],tag:[String,{required:!0}]});if(e.load(),!e.issues?.size)return u.coreExports.warning("No issues provided - exiting");try{await g.OutOfSyncError.check()}catch(t){const s=t.message;return e["error-on-out-of-sync"]?u.coreExports.setFailed(s):u.coreExports.warning(`${s} Skipping the step.`)}const t=new f,s=new d(t,e);await new E(e).process(),s.log().flush()})().catch((e=>{u.coreExports.setFailed(u.coreExports.isDebug()?e.stack??e.message:e.message)}))}(require,Reflect,console,0,Error,JSON,Math,process,TypeError,void 0,Symbol);
