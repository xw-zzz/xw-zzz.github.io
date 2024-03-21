import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,f as l,a as i,e as s,b as r}from"./app-ef0b4d9d.js";const t="/assets/100-1663224899857-172-5a88b5d1.jpeg",d={},v=i("hr",null,null,-1),u=i("p",null,[i("img",{src:t,alt:"",loading:"lazy"})],-1),c=i("h2",{id:"局部变量类型推断var",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#局部变量类型推断var","aria-hidden":"true"},"#"),s(" 局部变量类型推断var")],-1),o=i("p",null,"JDK10 可以使⽤var作为局部变量类型推断标识符。 Local-Variable Type Inference（局部变量类型推断），顾名思义只能⽤做为局部变量 。",-1),m=r(`<p><strong>注意：</strong></p><ul><li>仅适⽤于局部变量增强for循环的索引，传统for循环局部变量</li><li>不能使⽤于⽅法形参、构造函数形参、⽅法返回类型或任何其他类型的变量声明</li><li>标识符var不是关键字，⽽是⼀个保留类型名称，⽽且不⽀持类或接⼝叫var,也不符合命名规范</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package jdk10;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.stream.Stream;

/**
 * @author by xw
 * @Description JDK10新特性 之 var
 */
public class VarDemo {

    public static void main(String[] args) {
        //根据推断为 字符串类型
        var strVar = &quot;springboot&quot;;
        // true
        System.out.println(strVar instanceof String); 

        //根据10L 推断long 类型
        var longVar = 10L;
        //根据 true推断 boolean 类型
        var flag = true;
        //var flag = Boolean.valueOf(&quot;true&quot;);
        //System.out.println(flag instanceof Boolean);
        // 推断 ArrayList&lt;String&gt;
        var listVar = new ArrayList&lt;String&gt;();
        // true
        System.out.println(listVar instanceof ArrayList);

        // 推断 Stream&lt;String&gt;
        var streamVar = Stream.of(&quot;aa&quot;, &quot;bb&quot;, &quot;cc&quot;);
        //true 
        System.out.println(streamVar instanceof Stream);
        if(flag){
            System.out.println(&quot;这个是 flag 变量，值为true&quot;);
        }
        for (var i = 0; i &lt; 10; i++) {
            System.out.println(i);
        }

        
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="并行、完整的-g1-垃圾收集器" tabindex="-1"><a class="header-anchor" href="#并行、完整的-g1-垃圾收集器" aria-hidden="true">#</a> 并行、完整的 G1 垃圾收集器</h2><p>G1垃圾收集器的设计目的是避免，但是当并发收集无法以足够快的速度回收内存时，就会发生回退的完全 GC旧的 G1 FULL GC 实现使用单线程标记-扫描-压缩算法。 在JDK10中，FULL GC 被并行化。</p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><ul><li><p>将 JDK 的多个存储库合并成一个，简化开发。目前的代码库被分解成了多个库，容易出现源代码的管理问题。</p></li><li><p>应用程序数据共享，通过跨进程共享通用类的元数据，减少空间占用及启动时长。</p></li><li><p>线程本地握手，不执行全局 VM 安全点也能对线程执行回调，同时实现单线程停止回调。</p></li><li><p>JDK 提供了一组默认证书，开源 Java SE 的 CA程序，对开发人员更具吸引力。</p></li></ul>`,7);function b(p,g){return e(),a("div",null,[v,u,c,o,l("more"),m])}const h=n(d,[["render",b],["__file","5.JDK10新特性.html.vue"]]);export{h as default};
