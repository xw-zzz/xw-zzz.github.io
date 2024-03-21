import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,b as t}from"./app-ef0b4d9d.js";const r="/assets/image-20230724144852984-4f775f62.png",n={},s=t('<h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h1><p>对于提高性能，首先要设计良好的库表结构及索引，在此基础上要合理的设计查询语句，如果查询写得很糟糕，即使库表结构再合理、索引再合适，也无法实现高性能。</p><h1 id="查询语句执行流程" tabindex="-1"><a class="header-anchor" href="#查询语句执行流程" aria-hidden="true">#</a> 查询语句执行流程</h1><p>如下图所示，大致执行过程如下所示：</p><ol><li>客户端给服务端发送SQL查询语句</li><li>服务端对SQL语句进行解析、预处理，再由优化器生成对应的执行计划</li><li>根据执行计划，调用存储引擎执行查询返回</li></ol><p><img src="'+r+'" alt="" loading="lazy"></p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>上图摘自《高性能MySql》</p></div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h1>',9),c=[s];function h(d,l){return e(),i("div",null,c)}const p=a(n,[["render",h],["__file","Mysql查询性能优化.html.vue"]]);export{p as default};
