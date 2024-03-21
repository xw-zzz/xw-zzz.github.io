import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as l,f as a,a as e,e as n,d as o,b as i}from"./app-ef0b4d9d.js";const c="/assets/image-20221208093449597-4d67ad7a.png",g="/assets/image-20221208093431911-a1f94a69.png",v="/assets/image-20221208093439788-423a2823.png",m="/assets/image-20221208093502080-8fbd0e80.png",p="/assets/image-20221208093511676-e9e0f3a7.png",u={},b=e("p",null,"Spring Boot Actuator 提供了对单个 Spring Boot 应⽤的监控，信息包含应⽤状态、内存、线程、堆栈等，⽐较全⾯的监控了 Spring Boot 应⽤的整个⽣命周期。Spring Boot Admin是对不同实例的actuator信息的一个汇总、友好展示。",-1),_=e("h2",{id:"spring-boot-admin使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#spring-boot-admin使用","aria-hidden":"true"},"#"),n(" Spring Boot Admin使用")],-1),x=i(`<p>1.引入依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;de.codecentric&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-admin-starter-server&lt;/artifactId&gt;
            &lt;version&gt;2.1.0&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;de.codecentric&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-admin-server-ui&lt;/artifactId&gt;
            &lt;version&gt;2.1.0&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.应用主类添加注解</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@SpringBootApplication
// 说明这是一个服务端
@EnableAdminServer
public class SbaServer20Application {
    public static void main(String[] args) {
        SpringApplication.run(SbaServer20Application.class, args);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;de.codecentric&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-admin-starter-client&lt;/artifactId&gt;
            &lt;version&gt;2.1.0&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>applition.properties配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server.port=8081
spring.application.name=Spring Boot Client
# 配置Admin Server地址
spring.boot.admin.client.url=http://localhost:8080
# 打开客户端 Actuator 的监控
management.endpoints.web.exposure.include=*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="界面介绍" tabindex="-1"><a class="header-anchor" href="#界面介绍" aria-hidden="true">#</a> 界面介绍</h2>`,9),h={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),I=e("img",{src:c,alt:"image-20221208093449597",loading:"lazy"},null,-1),S=e("br",null,null,-1),B=e("br",null,null,-1),y=e("img",{src:g,alt:"image-20221208093431911",loading:"lazy"},null,-1),A=e("br",null,null,-1),k=e("br",null,null,-1),q=e("img",{src:v,alt:"image-20221208093439788",loading:"lazy"},null,-1),w=e("br",null,null,-1),z=e("br",null,null,-1),N=i('<p>查看接口信息<br><img src="'+m+`" alt="image-20221208093502080" loading="lazy"></p><h2 id="邮件报警" tabindex="-1"><a class="header-anchor" href="#邮件报警" aria-hidden="true">#</a> 邮件报警</h2><p>Spring Boot Admin 将微服务中所有应⽤信息在后台进⾏了展示，⾮常⽅便我们对微服务整体的监控和治理。<br> 但是我们的运营⼈员也不可能⼀天 24 ⼩时盯着监控后台，因此如果服务有异常的时候，有对应的邮件告警<br> 就太好了，其实 Spring Boot Admin 也给出了⽀持。</p><p>1、添加依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
 &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
 &lt;artifactId&gt;spring-boot-starter-mail&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、邮箱配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring.mail.host=smtp.qq.com
spring.mail.username=xxx@qq.com
spring.mail.password=xxx
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.smtp.starttls.required=true
spring.boot.admin.notify.mail.from=xxxxxx@qq.com
spring.boot.admin.notify.mail.to=xxxxxxxxxx@qq.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在配置⽂件中添加邮件发送相关信息：邮件的发送者、接受者、协议、移动授权码等。手动停掉config_server,收到邮箱。<br><img src="`+p+'" alt="image-20221208093511676" loading="lazy"><br> 这只是最基本的邮件监控，在实际的使⽤过程中，需要根据情况对邮件告警内容进⾏⾃定义，⽐如监控<br> 堆内存和现场的使⽤情况，当到达⼀定⽐例的时候进⾏告警等。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>Spring Boot Admin 解决了我们对⼤规模 Spring Boot 应⽤监控的需求，Spring Boot Admin 充分利⽤了Actuator 开放的相关接⼝，采⽤优秀的图形界⾯将这些信息进⾏了展示，⽅便我们更加直观的查看集群中应⽤的状态。Spring Boot Admin 不仅可以监控单个 Spring Boot 应⽤，也可以结合 Spring Cloud 监控注册到<br> 服务中⼼的所有应⽤状态，再结合报警系统的使⽤就可以随时感知到应⽤的状态变化。在实际⼯作中 SpringBoot Admin 是我们在后期运营中频繁⽤到的⼀个组件，应该作为重点关注。</p>',10);function V(C,E){const t=r("ExternalLinkIcon");return s(),l("div",null,[b,_,a("more"),x,e("p",null,[n("当我们启动Springboot admin后，访问 "),e("a",h,[n("http://localhost:8080"),o(t)]),n("。在这里我监控了两个2个应用，config_server和eureka_server，每个应用有两个实例。"),f,I,S,n(" journal记录日志信息。"),B,y,A,n(" Spring Boot Admin 以图形化的形式展示了应⽤的各项信息，这些信息⼤多都来⾃于Spring Boot Actuator 提供的接⼝。利⽤图形化的形式很容易看到应⽤的各项参数变化，甚⾄有些⻚⾯还可以进⾏⼀些操作，⽐如改变打印⽇志的级别等."),k,q,n("Spring Boot Admin 以图形化的形式展示了应⽤的各项信息，这些信息⼤多都来⾃于"),w,n(" Spring Boot Actuator 提供的接⼝。利⽤图形化的形式很容易看到应⽤的各项参数变化，甚⾄有些⻚⾯还可以"),z,n(" 进⾏⼀些操作，⽐如改变打印⽇志的级别等")]),N])}const T=d(u,[["render",V],["__file","1.springbootadmin使用.html.vue"]]);export{T as default};
