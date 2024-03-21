const e=JSON.parse('{"key":"v-6ad75867","path":"/interview/01.%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8/06.MQ%E9%9D%A2%E8%AF%95%E9%A2%98.html","title":"MQ面试题","lang":"zh-CN","frontmatter":{"title":"MQ面试题","date":"2022-05-03T00:00:00.000Z","category":["面试题","面试题大全"],"author":{"name":"xw","link":"https://github.com/2457081614"},"description":"MQ 有哪些常见问题？如何解决这些问题？ 消息顺序消费。保证生产者 - MQServer - 消费者是一对一对一的关系可以保证消息顺序消费。 消息重复。消费端处理消息的业务逻辑保持幂等性。只要保持幂等性，不管来多少条重复消息，最后处理的结果都 一样。保证每条消息都有唯一编号且保证消息处理成功与去重表的日志同时出现。利用一张日志表来记 录已经处理成功的消...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/interview/01.%E9%9D%A2%E8%AF%95%E9%A2%98%E5%A4%A7%E5%85%A8/06.MQ%E9%9D%A2%E8%AF%95%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"向往@"}],["meta",{"property":"og:title","content":"MQ面试题"}],["meta",{"property":"og:description","content":"MQ 有哪些常见问题？如何解决这些问题？ 消息顺序消费。保证生产者 - MQServer - 消费者是一对一对一的关系可以保证消息顺序消费。 消息重复。消费端处理消息的业务逻辑保持幂等性。只要保持幂等性，不管来多少条重复消息，最后处理的结果都 一样。保证每条消息都有唯一编号且保证消息处理成功与去重表的日志同时出现。利用一张日志表来记 录已经处理成功的消..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"xw"}],["meta",{"property":"article:published_time","content":"2022-05-03T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MQ面试题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-03T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xw\\",\\"link\\":\\"https://github.com/2457081614\\"}]}"]]},"headers":[{"level":2,"title":"MQ 有哪些常见问题？如何解决这些问题？","slug":"mq-有哪些常见问题-如何解决这些问题","link":"#mq-有哪些常见问题-如何解决这些问题","children":[]},{"level":2,"title":"RabbitMQ基本概念","slug":"rabbitmq基本概念","link":"#rabbitmq基本概念","children":[]},{"level":2,"title":"如何保证RabbitMQ消息的顺序性？","slug":"如何保证rabbitmq消息的顺序性","link":"#如何保证rabbitmq消息的顺序性","children":[]},{"level":2,"title":"消息基于什么传输？","slug":"消息基于什么传输","link":"#消息基于什么传输","children":[]},{"level":2,"title":"如何保证消息消费时的幂等性？","slug":"如何保证消息消费时的幂等性","link":"#如何保证消息消费时的幂等性","children":[]},{"level":2,"title":"如何保证消息的可靠性","slug":"如何保证消息的可靠性","link":"#如何保证消息的可靠性","children":[]},{"level":2,"title":"RabbitMQ如何保证高可用","slug":"rabbitmq如何保证高可用","link":"#rabbitmq如何保证高可用","children":[]},{"level":2,"title":"集群模式下，镜像数量怎么设置是最佳的？","slug":"集群模式下-镜像数量怎么设置是最佳的","link":"#集群模式下-镜像数量怎么设置是最佳的","children":[]},{"level":2,"title":"如何解决消息队列的延时以及过期失效问题？消息队列满了以后 该怎么处理？有几百万消息持续积压几小时，说说怎么解决？","slug":"如何解决消息队列的延时以及过期失效问题-消息队列满了以后-该怎么处理-有几百万消息持续积压几小时-说说怎么解决","link":"#如何解决消息队列的延时以及过期失效问题-消息队列满了以后-该怎么处理-有几百万消息持续积压几小时-说说怎么解决","children":[{"level":3,"title":"消息积压解决方案","slug":"消息积压解决方案","link":"#消息积压解决方案","children":[]},{"level":3,"title":"消息过期","slug":"消息过期","link":"#消息过期","children":[]}]},{"level":2,"title":"消息如何刷到磁盘？","slug":"消息如何刷到磁盘","link":"#消息如何刷到磁盘","children":[]},{"level":2,"title":"rabbitmq消费消息是推还是拉模式","slug":"rabbitmq消费消息是推还是拉模式","link":"#rabbitmq消费消息是推还是拉模式","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.37,"words":2812},"filePathRelative":"interview/01.面试题大全/06.MQ面试题.md","localizedDate":"2022年5月3日","autoDesc":true}');export{e as data};
