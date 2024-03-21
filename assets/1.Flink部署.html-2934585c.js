import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,b as l,a,e as s}from"./app-ef0b4d9d.js";const p="/assets/20220912093634-027a03db.png",i={},r=l(`<h2 id="docker方式" tabindex="-1"><a class="header-anchor" href="#docker方式" aria-hidden="true">#</a> Docker方式</h2><p>采用docker部署，taskmanager可部署一到多个。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">FLINK_PROPERTIES</span><span class="token operator">=</span><span class="token string">&quot;jobmanager.rpc.address: jobmanager&quot;</span>
<span class="token comment">## 创建网络</span>
<span class="token function">docker</span> network create flink-network

<span class="token comment">## 启动jobmanager</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span><span class="token operator">=</span>jobmanager <span class="token punctuation">\\</span>
    <span class="token parameter variable">--network</span> flink-network <span class="token punctuation">\\</span>
    <span class="token parameter variable">--publish</span> <span class="token number">8081</span>:8081 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--env</span> <span class="token assign-left variable">FLINK_PROPERTIES</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${FLINK_PROPERTIES}</span>&quot;</span> <span class="token punctuation">\\</span>
    flink:1.13.1 jobmanager

<span class="token comment">## 启动taskmanager-1</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span><span class="token operator">=</span>taskmanager-1 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--network</span> flink-network <span class="token punctuation">\\</span>
    <span class="token parameter variable">--env</span> <span class="token assign-left variable">FLINK_PROPERTIES</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${FLINK_PROPERTIES}</span>&quot;</span> <span class="token punctuation">\\</span>
    flink:1.13.1 taskmanager    

<span class="token comment">## 启动taskmanager-2</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span><span class="token operator">=</span>taskmanager-2 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--network</span> flink-network <span class="token punctuation">\\</span>
    <span class="token parameter variable">--env</span> <span class="token assign-left variable">FLINK_PROPERTIES</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${FLINK_PROPERTIES}</span>&quot;</span> <span class="token punctuation">\\</span>
    flink:1.13.1 taskmanager  

<span class="token comment">## 启动taskmanager-3  </span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span><span class="token operator">=</span>taskmanager-3 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--network</span> flink-network <span class="token punctuation">\\</span>
    <span class="token parameter variable">--env</span> <span class="token assign-left variable">FLINK_PROPERTIES</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${FLINK_PROPERTIES}</span>&quot;</span> <span class="token punctuation">\\</span>
    flink:1.13.1 taskmanager       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=a("p",null,[s("访问 ["),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mrow",null,[a("mi",null,"i"),a("mi",null,"p")]),a("mo",null,":"),a("mn",null,"8081"),a("mo",{stretchy:"false"},"]"),a("mo",{stretchy:"false"},"("),a("mi",null,"h"),a("mi",null,"t"),a("mi",null,"t"),a("mi",null,"p"),a("mo",null,":"),a("mi",{mathvariant:"normal"},"/"),a("mi",{mathvariant:"normal"},"/")]),a("annotation",{encoding:"application/x-tex"},"{ip}:8081](http://")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.854em","vertical-align":"-0.1944em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathnormal"},"i"),a("span",{class:"mord mathnormal"},"p")]),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},":"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"8081"),a("span",{class:"mclose"},"]"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"h"),a("span",{class:"mord mathnormal"},"ttp"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},":"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"//")])])]),s("{ip}:8081/).")],-1),o=a("p",null,[a("img",{src:p,alt:"",loading:"lazy"})],-1),m=[r,c,o];function u(d,k){return e(),t("div",null,m)}const g=n(i,[["render",u],["__file","1.Flink部署.html.vue"]]);export{g as default};
