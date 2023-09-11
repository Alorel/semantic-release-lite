!function(e,t,s,n,r,o,a,i,u,c,l){"use strict";const h=e("./output-mgr.js"),d=e("./exec.js"),p=e("./tag-parsing.js");const g="object"==typeof global&&global&&global.Object===n&&global;var f="object"==typeof self&&self&&self.Object===n&&self;const m=(g||f||Function("return this")()).Symbol;var y=n.prototype,x=y.hasOwnProperty,$=y.toString,C=m?m.toStringTag:c;var v=n.prototype.toString;var b="[object Null]",T="[object Undefined]",k=m?m.toStringTag:c;function I(e){return null==e?e===c?T:b:k&&k in n(e)?function(e){var t=x.call(e,C),s=e[C];try{e[C]=c;var n=!0}catch(e){}var r=$.call(e);return n&&(t?e[C]=s:delete e[C]),r}(e):function(e){return v.call(e)}(e)}var w="[object Symbol]";const A=Array.isArray;var E=1/0,S=m?m.prototype:c,H=S?S.toString:c;function M(e){if("string"==typeof e)return e;if(A(e))return function(e,t){for(var s=-1,n=null==e?0:e.length,r=Array(n);++s<n;)r[s]=t(e[s],s,e);return r}(e,M)+"";if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&I(e)==w}(e))return H?H.call(e):"";var t=e+"";return"0"==t&&1/e==-E?"-0":t}function O(e){return null==e?"":M(e)}var j;const R=(j={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},function(e){return null==j?c:j[e]});var L=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,N=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var U=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var z=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var G="\\ud800-\\udfff",V="\\u2700-\\u27bf",Z="a-z\\xdf-\\xf6\\xf8-\\xff",D="A-Z\\xc0-\\xd6\\xd8-\\xde",P="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",_="["+P+"]",B="\\d+",F="["+V+"]",Y="["+Z+"]",J="[^"+G+P+B+V+Z+D+"]",K="(?:\\ud83c[\\udde6-\\uddff]){2}",q="[\\ud800-\\udbff][\\udc00-\\udfff]",W="["+D+"]",Q="(?:"+Y+"|"+J+")",X="(?:"+W+"|"+J+")",ee="(?:['’](?:d|ll|m|re|s|t|ve))?",te="(?:['’](?:D|LL|M|RE|S|T|VE))?",se="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",ne="[\\ufe0e\\ufe0f]?",re=ne+se+("(?:\\u200d(?:"+["[^"+G+"]",K,q].join("|")+")"+ne+se+")*"),oe="(?:"+[F,K,q].join("|")+")"+re,ae=RegExp([W+"?"+Y+"+"+ee+"(?="+[_,W,"$"].join("|")+")",X+"+"+te+"(?="+[_,W+Q,"$"].join("|")+")",W+"?"+Q+"+"+ee,W+"+"+te,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",B,oe].join("|"),"g");function ie(e,t,s){return e=O(e),(t=s?c:t)===c?function(e){return z.test(e)}(e)?function(e){return e.match(ae)||[]}(e):function(e){return e.match(U)||[]}(e):e.match(t)||[]}var ue,ce=RegExp("['’]","g");const le=(ue=function(e,t,s){return e+(s?"-":"")+t.toLowerCase()},function(e){return function(e,t,s,n){var r=-1,o=null==e?0:e.length;for(n&&o&&(s=e[++r]);++r<o;)s=t(s,e[r],r,e);return s}(ie(function(e){return(e=O(e))&&e.replace(L,R).replace(N,"")}(e).replace(ce,"")),ue,"")});class he{#e;#t=0;constructor(e,t){this.#e=t,n.defineProperty(this,l.toStringTag,{value:`${e} formatter`})}static fmtId(e,t){return`${e}-${le(t)}`}[l.iterator](){return this}next(){if(this.#t>=this.#e.length)return{done:!0};const e=this.iter(this.#e[this.#t]);return++this.#t,{done:!1,value:e}}}class de extends he{#s;constructor(e,t){super(e.heading,e.commits),this.#s=t}iter({sha:e,scope:t,message:s,issuesClosed:n,breaking:r}){let o=`- ${e} `;if(r&&(o+=`[:exclamation:](#${he.fmtId(this.#s,"Breaking Changes")}-${e}) `),t&&(o+=`**${t}**: `),o+=s,n){const e=n[l.iterator]();o+=` [#${e.next().value}`;for(const t of e)o+=`, #${t}`;o+="]"}return o}}class pe extends he{#n;constructor(e,t){super("Breaking Changes",e),this.#n=he.fmtId(t,"Breaking Changes")}iter({message:e,sha:t}){return`<a name="${this.#n}-${t}"></a> ${e}`}}class ge extends Map{#r;constructor(e,t){super(t),this.#r=e}getOrInsert(e,...t){if(this.has(e))return this.get(e);const s=this.#r(e,...t);return this.set(e,s),s}}class fe{#o;#a;#i;#u;#c;constructor(e,t,s){this.#c=t.typeHeadingMap,this.#a=e,this.#o=s}get nextVersion(){return this.#i}get result(){return this.#u}get#l(){const e=this.#a.loader.totalCount,t=1===e?"":"s";return`${e.toLocaleString()} commit${t}`}get#h(){const e=new ge(((e,t)=>({...t,commits:[]}))),t="#".repeat(3);for(const s of this.#c.values())e.getOrInsert(`${t} ${s.heading}`,s).commits.push(...s.commits);return this.#a.unknownTypeCommits.length&&e.getOrInsert(" Others",{depth:0,heading:"Others"}).commits.push(...this.#a.unknownTypeCommits),e.values()}async generate(e){this.#u="",this.#i=p.SemVer.resolveNextRelease({lastTag:e,releaseType:this.#a.releaseType,stayAtZero:this.#o["stay-at-zero"]}),d.coreExports.info(`Next version resolved to ${this.#i}`);const t=this.#d();{const{done:e,value:s}=t.next();if(e)return;this.#u+=s.trimStart()}for(const e of t)this.#u+=e;if(this.#u+="\n\n-----\n\n",e){const{owner:t,repo:s}=h.context.repo,n=`https://github.com/${t}/${s}`;this.#u+=`[${this.#l}](${n}/compare/${e}...${this.#i} "Diff link") since the previous release, [${e}](${n}/releases/tag/${e} "Link to previous release").`}else this.#u+=`${this.#l} in this release.`;this.#u+=`\n\n${h.Strings.Signature}`}*#p(){for(const e of this.#h){const t={messages:new de(e,this.#i)};yield n.assign(e,t)}this.#a.breakingChanges.length&&(yield{depth:1,heading:"Breaking Changes",icon:":exclamation:",messages:new pe(this.#a.breakingChanges,this.#i),separatorLines:2})}*#d(){for(const e of this.#p())yield*new me(e,this.#i)}}h.__decorate([h.OutputGroup("Changelog generation")],fe.prototype,"generate",null);class me{#e;#s;constructor(e,t){this.#e=e,this.#s=t}*[l.iterator](){d.coreExports.debug(`Generating for ${this.#e.heading}`);const e=this.#e.messages[l.iterator]();{const{done:t,value:s}=e.next();if(t)return d.coreExports.info(`[skip: empty] ${this.#e.heading}`);const n=he.fmtId(this.#s,this.#e.heading),r=`<a name="${n}" href="#${n}">${this.#e.icon??":link:"}</a>`;if(this.#e.depth){const e="#".repeat(this.#e.depth);yield`\n\n${e} ${r} ${this.#e.heading}</a>\n\n${s}`}else yield`\n\n<details><summary>${r} ${this.#e.heading}</summary>\n\n${s}`}let t=1;const s="\n".repeat(this.#e.separatorLines??1);for(const n of e)yield`${s}${n}`,++t;this.#e.depth||(yield"\n\n</details>");const n=1===t?"y":"ies";d.coreExports.info(`Generated ${t.toLocaleString()} entr${n} for ${this.#e.heading}`)}}class ye{#g;#f;#m=0;constructor(e,t){this.#g=e?` ${e}..${t??"HEAD"}`:t?` ${t}^..HEAD`:""}get relevantCount(){return this.#f?.length??0}get totalCount(){return this.#m}[l.iterator](){return this.#f?.[l.iterator]()??h.NULL_ITERATOR}async load(){this.#m=0,this.#f=c;const e=await async function(e){return(await d.exec(`git log${e} --reverse --pretty=format:%H`,"getting commit SHAs")).split(/\r?\n/g).map((e=>e.trim()))}(this.#g);d.coreExports.info(`Resolved ${e.length.toLocaleString()} commit ${1===e.length?"SHA":"SHAs"}:\n`),this.#m=e.length;const t=(await Promise.all(e.map(xe))).filter(Boolean);t.length&&(this.#f=t);const s=this.relevantCount;d.coreExports.info(`\n${s.toLocaleString()} of which ${1===s?"is":"are"} relevant.`)}}async function xe(e){const t=await d.exec(`git log -1 --pretty=format:%B ${e}`,`getting commit message for ${e}`),s=t.split(/\r?\n/)[0].trim(),n=t.match(/^([^:(]+)(\(([^)]+)\))?:\s*([^\n]+)(\n\s+.+)?/);if(!n)return void d.coreExports.info(`[skip: format] ${s}`);let[,r,,o,a,i]=n;o=o?.trim(),i=i?.trim();const u={message:a.trim(),sha:e,type:r.trim()};return o&&(u.scope=o),i&&(u.extendedMessage=i),d.coreExports.info(`[ok] ${s}`),u}h.__decorate([h.OutputGroup("Commits load")],ye.prototype,"load",null);class $e{#y=[];#o;#x=!1;#$;#C;#c;#v=[];constructor(e,t,s){this.#c=t.typeHeadingMap,this.#$=e,this.#o=s}get breakingChanges(){return this.#y}get hasIssuesClosed(){return this.#x}get loader(){return this.#$}get releaseType(){return this.#C}set releaseType(e){switch(e){case"major":case c:this.#C=e;break;case"minor":"major"!==this.#C&&(this.#C=e);break;case"patch":this.#C||(this.#C=e)}}get unknownTypeCommits(){return this.#v}*issuesClosed(){if(!this.#x)return;const e=new Set;for(const{issuesClosed:t}of this.#a())if(t)for(const s of t)e.has(s)||(e.add(s),yield s)}parse(){for(const e of this.#$){const t=this.#c.get(e.type),s=this.#b(e);let n;t?(t.commits.push(s),n=[`OK type: ${s.type}`]):(n=[`Unknown type: ${s.type}`],this.#v.push(s)),s.issuesClosed&&(this.#x=!0,n.push(`issues closed: ${[...s.issuesClosed].join(", ")}`)),s.breaking?(this.releaseType="major",n.push("BREAKING"),this.#y.push({message:e.extendedMessage,sha:s.sha})):this.#o["minor-types"].has(s.type)?(this.releaseType="minor",n.push("MINOR")):this.#o["patch-types"].has(s.type)&&(n.push("PATCH"),this.releaseType="patch"),d.coreExports.info(`[${n.join("; ")}] ${s.message}`)}}*#a(){for(const e of this.#c.values())for(const t of e.commits)yield t;for(const e of this.#v)yield e}#b(e){let t=`${e.message} ${e.extendedMessage??""}`.match(/closes\s+([#\d, ]+)/gi);if(t){const s=new Set;for(const e of t)for(const t of e.match(/#\d+/g))s.add(Number(t.slice(1)));e.issuesClosed=s}return e.extendedMessage&&this.#o["breaking-change-keywords"].some((t=>e.extendedMessage.includes(t)))&&(e.breaking=!0),e}}h.__decorate([h.OutputGroup("Commits parse")],$e.prototype,"parse",null);class Ce{#c=new Map;get typeHeadingMap(){return this.#c}createParser(e){return()=>this.parseInput(e)}parseInput(e){const t=/^\s*([^:]+):\s*([^\n]+)$/,s=new Set;for(const[n,o]of d.coreExports.getMultilineInput(e).entries()){const a=o.match(t),i=a?.[1],u=a?.[2];if(!i||!u)throw new r(`[${e}] Error parsing line at index ${n}, "${o}": doesn't match regex ${t.source}`);if(this.#c.has(i))throw new r(`[${e}] Duplicate type "${i}" at ${e} index ${n}`);s.add(i),this.#c.set(i,{commits:[],depth:3,heading:u})}return s}}exports.ChangelogGenerator=fe,exports.CommitLoader=ye,exports.CommitParser=$e,exports.TypesInputParser=Ce,exports.commonConfigInit=function(e=new Ce){return{"breaking-change-keywords":[h.InputMgrImpl.ARRAY,{required:!0}],"minor-types":e.createParser("minor-types"),"patch-types":e.createParser("patch-types"),"trivial-types":e.createParser("trivial-types"),"stay-at-zero":Boolean}}}(require,Reflect,console,Object,Error,JSON,Math,process,TypeError,void 0,Symbol);
