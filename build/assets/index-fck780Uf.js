(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var w;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(w||(w={}));var N;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(N||(N={}));var M;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(M||(M={}));var L;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(L||(L={}));var v;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"})(v||(v={}));var G;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(G||(G={}));/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class H extends p{constructor(n,s){super(n),this.response=s}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F="https://generativelanguage.googleapis.com",U="v1",$="0.2.0",B="genai-js";var h;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(h||(h={}));class y{constructor(n,s,i,t){this.model=n,this.task=s,this.apiKey=i,this.stream=t}toString(){let n=`${F}/${U}/models/${this.model}:${this.task}`;return this.stream&&(n+="?alt=sse"),n}}function j(){return`${B}/${$}`}async function _(e,n,s){let i;try{if(i=await fetch(e.toString(),Object.assign(Object.assign({},q(s)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":j(),"x-goog-api-key":e.apiKey},body:n})),!i.ok){let t="";try{const o=await i.json();t=o.error.message,o.error.details&&(t+=` ${JSON.stringify(o.error.details)}`)}catch{}throw new Error(`[${i.status} ${i.statusText}] ${t}`)}}catch(t){const o=new p(`Error fetching from ${e.toString()}: ${t.message}`);throw o.stack=t.stack,o}return i}function q(e){const n={};if((e==null?void 0:e.timeout)>=0){const s=new AbortController,i=s.signal;setTimeout(()=>s.abort(),e.timeout),n.signal=i}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),D(e.candidates[0]))throw new H(`${b(e)}`,e);return W(e)}else if(e.promptFeedback)throw new H(`Text not available. ${b(e)}`,e);return""},e}function W(e){var n,s,i,t;return!((t=(i=(s=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||s===void 0?void 0:s.parts)===null||i===void 0?void 0:i[0])===null||t===void 0)&&t.text?e.candidates[0].content.parts[0].text:""}const J=[v.RECITATION,v.SAFETY];function D(e){return!!e.finishReason&&J.includes(e.finishReason)}function b(e){var n,s,i;let t="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)t+="Response was blocked",!((n=e.promptFeedback)===null||n===void 0)&&n.blockReason&&(t+=` due to ${e.promptFeedback.blockReason}`),!((s=e.promptFeedback)===null||s===void 0)&&s.blockReasonMessage&&(t+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((i=e.candidates)===null||i===void 0)&&i[0]){const o=e.candidates[0];D(o)&&(t+=`Candidate was blocked due to ${o.finishReason}`,o.finishMessage&&(t+=`: ${o.finishMessage}`))}return t}function E(e){return this instanceof E?(this.v=e,this):new E(e)}function V(e,n,s){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=s.apply(e,n||[]),t,o=[];return t={},a("next"),a("throw"),a("return"),t[Symbol.asyncIterator]=function(){return this},t;function a(d){i[d]&&(t[d]=function(f){return new Promise(function(O,Y){o.push([d,f,O,Y])>1||r(d,f)})})}function r(d,f){try{c(i[d](f))}catch(O){I(o[0][3],O)}}function c(d){d.value instanceof E?Promise.resolve(d.value.v).then(u,R):I(o[0][2],d)}function u(d){r("next",d)}function R(d){r("throw",d)}function I(d,f){d(f),o.shift(),o.length&&r(o[0][0],o[0][1])}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function X(e){const n=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),s=Z(n),[i,t]=s.tee();return{stream:z(i),response:Q(t)}}async function Q(e){const n=[],s=e.getReader();for(;;){const{done:i,value:t}=await s.read();if(i)return A(ee(n));n.push(t)}}function z(e){return V(this,arguments,function*(){const s=e.getReader();for(;;){const{value:i,done:t}=yield E(s.read());if(t)break;yield yield E(A(i))}})}function Z(e){const n=e.getReader();return new ReadableStream({start(i){let t="";return o();function o(){return n.read().then(({value:a,done:r})=>{if(r){if(t.trim()){i.error(new p("Failed to parse stream"));return}i.close();return}t+=a;let c=t.match(P),u;for(;c;){try{u=JSON.parse(c[1])}catch{i.error(new p(`Error parsing JSON response: "${c[1]}"`));return}i.enqueue(u),t=t.substring(c[0].length),c=t.match(P)}return o()})}}})}function ee(e){const n=e[e.length-1],s={promptFeedback:n==null?void 0:n.promptFeedback};for(const i of e)if(i.candidates)for(const t of i.candidates){const o=t.index;if(s.candidates||(s.candidates=[]),s.candidates[o]||(s.candidates[o]={index:t.index}),s.candidates[o].citationMetadata=t.citationMetadata,s.candidates[o].finishReason=t.finishReason,s.candidates[o].finishMessage=t.finishMessage,s.candidates[o].safetyRatings=t.safetyRatings,t.content&&t.content.parts){s.candidates[o].content||(s.candidates[o].content={role:t.content.role||"user",parts:[{text:""}]});for(const a of t.content.parts)a.text&&(s.candidates[o].content.parts[0].text+=a.text)}}return s}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,n,s,i){const t=new y(n,h.STREAM_GENERATE_CONTENT,e,!0),o=await _(t,JSON.stringify(s),i);return X(o)}async function x(e,n,s,i){const t=new y(n,h.GENERATE_CONTENT,e,!1),a=await(await _(t,JSON.stringify(s),i)).json();return{response:A(a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,n){let s=[];if(typeof e=="string")s=[{text:e}];else for(const i of e)typeof i=="string"?s.push({text:i}):s.push(i);return{role:n,parts:s}}function S(e){return e.contents?e:{contents:[m(e,"user")]}}function te(e){return typeof e=="string"||Array.isArray(e)?{content:m(e,"user")}:e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k="SILENT_ERROR";class se{constructor(n,s,i,t){this.model=s,this.params=i,this.requestOptions=t,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,i!=null&&i.history&&(this._history=i.history.map(o=>{if(!o.role)throw new Error("Missing role for history item: "+JSON.stringify(o));return m(o.parts,o.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n){var s,i;await this._sendPromise;const t=m(n,"user"),o={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,contents:[...this._history,t]};let a;return this._sendPromise=this._sendPromise.then(()=>x(this._apiKey,this.model,o,this.requestOptions)).then(r=>{var c;if(r.response.candidates&&r.response.candidates.length>0){this._history.push(t);const u=Object.assign({parts:[],role:"model"},(c=r.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(u)}else{const u=b(r.response);u&&console.warn(`sendMessage() was unsuccessful. ${u}. Inspect response object for details.`)}a=r}),await this._sendPromise,a}async sendMessageStream(n){var s,i;await this._sendPromise;const t=m(n,"user"),o={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,contents:[...this._history,t]},a=K(this._apiKey,this.model,o,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>a).catch(r=>{throw new Error(k)}).then(r=>r.response).then(r=>{if(r.candidates&&r.candidates.length>0){this._history.push(t);const c=Object.assign({},r.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=b(r);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(r=>{r.message!==k&&console.error(r)}),a}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,n,s,i){const t=new y(n,h.COUNT_TOKENS,e,!1);return(await _(t,JSON.stringify(Object.assign(Object.assign({},s),{model:n})),i)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e,n,s,i){const t=new y(n,h.EMBED_CONTENT,e,!1);return(await _(t,JSON.stringify(s),i)).json()}async function oe(e,n,s,i){const t=new y(n,h.BATCH_EMBED_CONTENTS,e,!1),o=s.requests.map(r=>Object.assign(Object.assign({},r),{model:`models/${n}`}));return(await _(t,JSON.stringify({requests:o}),i)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(n,s,i){var t;this.apiKey=n,s.model.startsWith("models/")?this.model=(t=s.model.split("models/"))===null||t===void 0?void 0:t[1]:this.model=s.model,this.generationConfig=s.generationConfig||{},this.safetySettings=s.safetySettings||[],this.requestOptions=i||{}}async generateContent(n){const s=S(n);return x(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},s),this.requestOptions)}async generateContentStream(n){const s=S(n);return K(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},s),this.requestOptions)}startChat(n){return new se(this.apiKey,this.model,n,this.requestOptions)}async countTokens(n){const s=S(n);return ne(this.apiKey,this.model,s)}async embedContent(n){const s=te(n);return ie(this.apiKey,this.model,s)}async batchEmbedContents(n){return oe(this.apiKey,this.model,n,this.requestOptions)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(n){this.apiKey=n}getGenerativeModel(n,s){if(!n.model)throw new p("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new re(this.apiKey,n,s)}}const C=document.querySelector(".send"),g=document.querySelector(".input");document.querySelector(".ai-message");const l=document.querySelector(".message_area"),T=document.querySelector(".loading"),ce=new ae("AIzaSyCKGDkfA1FeKWcicnRTSGyNsouDQmEv13g");C.addEventListener("click",async()=>{});g.addEventListener("keydown",e=>{e.keyCode===13&&(e.preventDefault(),C.click())});C.addEventListener("click",async()=>{if(!g.value)return alert("Please enter a prompt");var e=g.value;l.innerHTML+=`<div class="message user-message">
  <div class="img"><img class="user" src="/my_face-removebg-preview.png" alt=""></div>
  <div class="text">${e}</div>
  </div>`,T.style.visibility="visible",l.scrollTop=l.scrollHeight;const s=ce.getGenerativeModel({model:"gemini-pro"}).startChat({history:[{role:"user",parts:"Who is your owner/creator?, Do you know?, You are created by Aditya. His github link is https://github.com/adiyadav123"},{role:"model",parts:"Okay I will do that. I will ask users to follow him on github."},{role:"user",parts:"Who is Aditya?"},{role:"model",parts:"I am created by Aditya. You can follow him on github by clicking on this link his github is adiyadav123. He is software developer and web developer. In fact he created this Ai ChatBot names Gemini"},{role:"user",parts:"What is the name of this chatbot?"},{role:"model",parts:"The name of this chatbot is Gemini. It is created by Aditya. You can follow him on github by clicking on this link his github is adiyadav123. He is software developer and web developer."},{role:"user",parts:"What is the name of this chatbot?"},{role:"model",parts:"The name of this chatbot is Gemini. It is created by Aditya. You can follow him on github by clicking on this link his github is adiyadav123. He is software developer and web developer."},{role:"user",parts:"What is the name of this chatbot?"},{role:"model",parts:"The name of this chatbot is Gemini. It is created by Aditya. You can follow him on github by clicking on this link his github is adiyadav123. He is software developer and web developer."},{role:"user",parts:"What is the name of this chatbot?"},{role:"model",parts:"The name of this chatbot is Gemini. It is created by Aditya. You can follow him on github by clicking on this link his github is adiyadav123. He is software developer and web developer."},{role:"user",parts:"What is the name of this chatbot?"},{role:"model",parts:"The name of this chatbot is Gemini. It is created by Aditya. You can follow him on github by clicking on this link his github is adiyadav123. He is software developer and web developer."},{role:"user",parts:"What is the name of this chatbot?"},{role:"model",parts:"The name of this chatbot is Gemini. It is created by Aditya. You can follow him on github by clicking on this link his github is adiyadav123. He is software developer and web developer."},{role:"user",parts:"What is the github link of your creator?"},{role:"model",parts:"https://github.com/adiyadav123"}],generationConfig:{maxOutputTokens:1e4}});try{const r=await s.sendMessageStream(e);g.value="";var i=await(await r.response).text()}catch(r){return T.style.visibility="hidden",e="",g.value="",l.scrollTop=l.scrollHeight-l.clientHeight,l.innerHTML+=`<div class="message ai-message">
  <div class="img"><img src="/logo.png" alt=""></div>
  <div class="text">${r.message}</div>
</div>`}const a=i.replace(/\*\*(.*?)\*\*/g,"<b>$1</b>").replace(/\*(.*?)\*/g,"<i>$1</i>").replace(/(https?:\/\/[^\s]+)/g,r=>r==="https://github.com.adiyadav123."?'<a href="https://github.com/adiyadav123" style="color: blue;" target=_blank>https://github.com/adiyadav123</a>':'<a href="'+r+'" style="color: blue;" target=_blank>'+r+"</a>");T.style.visibility="hidden",l.innerHTML+=`<div class="message ai-message">
    <div class="img"><img src="/logo.png" alt=""></div>
    <div class="text">${a}</div>
  </div>`,l.scrollTop=l.scrollHeight-l.clientHeight});
