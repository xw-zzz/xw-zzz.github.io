import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as s,f as l,a as n,e as d,b as t}from"./app-ef0b4d9d.js";const a={},r=n("h2",{id:"使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),d(" 使用")],-1),c=n("p",null,"添加注解 @EnableAsync",-1),v=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootApplication
@EnableAsync
public class SpringBootAsyncApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootAsyncApplication.class, args);
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异步方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
public class AsynDemo {

    @Async
    public  void test() throws InterruptedException {
        Thread.sleep(5000);
        System.out.println(&quot;异步任务&quot;);
    }

    @Async
    public Future&lt;String&gt; test1() throws InterruptedException {
        TimeUnit.SECONDS.sleep(5);
        return new AsyncResult&lt;&gt;(&quot;return value&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
public class AsynTest implements CommandLineRunner {

    @Autowired
    private ApplicationContext applicationContext;

    @Autowired
    private AsynDemo asynDemo;

    @Override
    public void run(String... args) throws Exception {
        AsynTest proxyAsyTest = applicationContext.getBean(AsynTest.class);
        System.out.println(&quot;start&quot;);
        asynDemo.test();
        System.out.println(&quot;end&quot;);
        Future future = asynDemo.test1();
        System.out.println(future.get());
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意项" tabindex="-1"><a class="header-anchor" href="#注意项" aria-hidden="true">#</a> 注意项</h2><ol><li>@Async方法必须声明为public</li><li>在spring中，@Async注解方法在同本类对象调用无效，因为@Async通过aop实现，在同一类调用没有走AOP，如果需要在同一个类调用，可以通过获取代理对象调用实现。<br> 3.Async所修饰的函数不要定义为static类型，这样异步调用不会生效</li></ol>`,7);function u(o,m){return i(),s("div",null,[r,c,l("more"),v])}const g=e(a,[["render",u],["__file","11.springboot通过Async异步任务.html.vue"]]);export{g as default};
