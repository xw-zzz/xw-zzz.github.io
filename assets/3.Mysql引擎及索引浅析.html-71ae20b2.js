const e=JSON.parse('{"key":"v-3d72dca8","path":"/db/1.Mysql/3.Mysql%E5%BC%95%E6%93%8E%E5%8F%8A%E7%B4%A2%E5%BC%95%E6%B5%85%E6%9E%90.html","title":"Mysql引擎及索引浅析","lang":"zh-CN","frontmatter":{"title":"Mysql引擎及索引浅析","date":"2022-07-15T00:00:00.000Z","img":"https://tuchuang-1254256192.cos.ap-nanjing.myqcloud.com/typora/20220719105044.png","order":5,"category":["Mysql"],"author":{"name":"xw","link":"https://github.com/2457081614"},"tag":["Mysql"],"description":"[TOC] 概述 索引是一种特殊的文件，包含着对数据表里面所有记录的引用指针，索引的目的在于提高查询效率，将原始的随机全表扫描变成快速顺序锁定数据。 常见索引 常见索引分类： 普通索引：基本索引，没有使用闲置，一般命名为idx_xxx; 唯一索引: 引列的值必须唯一，允许有空值; 组合索引: 多个数据列组成的索引，遵守最左匹配原则; 索引底层数据结构 ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/db/1.Mysql/3.Mysql%E5%BC%95%E6%93%8E%E5%8F%8A%E7%B4%A2%E5%BC%95%E6%B5%85%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"向往@"}],["meta",{"property":"og:title","content":"Mysql引擎及索引浅析"}],["meta",{"property":"og:description","content":"[TOC] 概述 索引是一种特殊的文件，包含着对数据表里面所有记录的引用指针，索引的目的在于提高查询效率，将原始的随机全表扫描变成快速顺序锁定数据。 常见索引 常见索引分类： 普通索引：基本索引，没有使用闲置，一般命名为idx_xxx; 唯一索引: 引列的值必须唯一，允许有空值; 组合索引: 多个数据列组成的索引，遵守最左匹配原则; 索引底层数据结构 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-26T02:20:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Mysql引擎及索引浅析"}],["meta",{"property":"article:author","content":"xw"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:published_time","content":"2022-07-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-26T02:20:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql引擎及索引浅析\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/\\"],\\"datePublished\\":\\"2022-07-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-26T02:20:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xw\\",\\"link\\":\\"https://github.com/2457081614\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"常见索引","slug":"常见索引","link":"#常见索引","children":[]},{"level":2,"title":"索引底层数据结构","slug":"索引底层数据结构","link":"#索引底层数据结构","children":[]},{"level":2,"title":"InnoDB引擎","slug":"innodb引擎","link":"#innodb引擎","children":[]},{"level":2,"title":"myIsam引擎","slug":"myisam引擎","link":"#myisam引擎","children":[]},{"level":2,"title":"InnoDB和Mylsam区别","slug":"innodb和mylsam区别","link":"#innodb和mylsam区别","children":[]}],"git":{"createdTime":1695694844000,"updatedTime":1695694844000,"contributors":[{"name":"yangliu@tiduyun.com","email":"2457081614@qq.com","commits":1}]},"readingTime":{"minutes":3.57,"words":1070},"filePathRelative":"db/1.Mysql/3.Mysql引擎及索引浅析.md","localizedDate":"2022年7月15日","autoDesc":true}');export{e as data};
