import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as t,c as a,f as v,a as i,e,d as l,b as r}from"./app-ef0b4d9d.js";const u={},c=i("h2",{id:"概览",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#概览","aria-hidden":"true"},"#"),e(" 概览")],-1),m=r(`<ul><li>模块系统 <ul><li>引入了一个新的可选阶段，即链接时间(link time) ，它位于编译时和运行时之间，在此期间可以将一组模块组装并优化为一个定制的运行时映像;</li><li></li></ul></li><li>版本控制<br> 提供一种简化的版本字符串格式，有助于明确区分主版本、次版本、安全版本和修补程序更新版本。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$MAJOR.$MINOR.$SECURITY.$PATCH

MAJOR 主版本号
MINOR 小更新版本号
SECURITY 针对安全更新的版本号
PATCH 补丁版本号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>安装包新特性</p><ul><li>Windows版本提供在安装程序的欢迎页中启用或禁用 web 部署的选项。</li><li>macOs提供关于卸载当前 CPU 版本后下一个 CPU 可用性的通知,在更新 JRE 时增强用户体验。</li></ul></li><li><p>工具新特性</p><ul><li>jshell</li><li>添加更多诊断命令</li><li>删除启动时的 JRE 版本选择</li><li>支持多版本JAR文件</li><li>移除 hprof agent</li><li>移除jhat</li><li>jlink（作用:将一组模块及其依赖关系组装并优化为自定义的运行时映像）</li></ul></li><li><p>安全方面</p><ul><li>数据传输层加密</li><li>TLS 应用层协议协商扩展</li><li>支持 SHA-3加密散列函数</li><li>将默认密钥存储类型从 JKS 转换为 PKCS12。</li><li>禁止SHA-1证书</li><li>GHASH and RSA性能提升</li></ul></li><li><p>Javadoc 新功能</p><ul><li>简化 Doclet API</li><li>支持HTML5</li><li>javaDoc查询</li><li>支持模块</li></ul></li><li><p>JVM新特性</p><ul><li>分段代码缓存（将代码缓存划分为不同的段，每个段包含特定类型的已编译代码，以提高性能并启用未来的扩展）</li><li>删除不推荐的GC组合</li><li>G1作为默认垃圾回收器</li><li>不推荐使用CMS</li></ul></li></ul><h3 id="jshell" tabindex="-1"><a class="header-anchor" href="#jshell" aria-hidden="true">#</a> Jshell</h3><h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h4><p>JShell 是 Java 9 新增的一个交互式的编程环境工具。它允许你无需使用类或者方法包装来执行 Java 语句。它与 Python 的解释器类似，可以直接 输入表达式并查看其执行结果。</p><h4 id="使用-jshell" tabindex="-1"><a class="header-anchor" href="#使用-jshell" aria-hidden="true">#</a> 使用 Jshell</h4><p>常用命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jshell&gt; /help
|  键入 Java 语言表达式, 语句或声明。
|  或者键入以下命令之一:
|  /list [&lt;名称或 id&gt;|-all|-start]
|       列出您键入的源
|  /edit &lt;名称或 id&gt;
|       编辑按名称或 id 引用的源条目
|  /drop &lt;名称或 id&gt;
|       删除按名称或 id 引用的源条目
|  /save [-all|-history|-start] &lt;文件&gt;
|       将片段源保存到文件。
|  /open &lt;file&gt;
|       打开文件作为源输入
|  /vars [&lt;名称或 id&gt;|-all|-start]
|       列出已声明变量及其值
|  /methods [&lt;名称或 id&gt;|-all|-start]
|       列出已声明方法及其签名
|  /types [&lt;名称或 id&gt;|-all|-start]
|       列出已声明的类型
|  /imports
|       列出导入的项
|  /exit
|       退出 jshell
|  /env [-class-path &lt;路径&gt;] [-module-path &lt;路径&gt;] [-add-modules &lt;模块&gt;] ...
|       查看或更改评估上下文
|  /reset [-class-path &lt;路径&gt;] [-module-path &lt;路径&gt;] [-add-modules &lt;模块&gt;]...
|       重启 jshell
|  /reload [-restore] [-quiet] [-class-path &lt;路径&gt;] [-module-path &lt;路径&gt;]...
|       重置和重放相关历史记录 -- 当前历史记录或上一个历史记录 (-restore)
|  /history
|       您键入的内容的历史记录
|  /help [&lt;command&gt;|&lt;subject&gt;]
|       获取 jshell 的相关信息
|  /set editor|start|feedback|mode|prompt|truncation|format ...
|       设置 jshell 配置信息
|  /? [&lt;command&gt;|&lt;subject&gt;]
|       获取 jshell 的相关信息
|  /!
|       重新运行上一个片段
|  /&lt;id&gt;
|       按 id 重新运行片段
|  /-&lt;n&gt;
|       重新运行前面的第 n 个片段
|
|  有关详细信息, 请键入 &#39;/help&#39;, 后跟
|  命令或主题的名称。
|  例如 &#39;/help /list&#39; 或 &#39;/help intro&#39;。主题:
|
|  intro
|       jshell 工具的简介
|  shortcuts
|       片段和命令输入提示, 信息访问以及
|       自动代码生成的按键说明
|  context
|       /env /reload 和 /reset 的评估上下文选项

jshell&gt; /help
|  键入 Java 语言表达式, 语句或声明。
|  或者键入以下命令之一:
|  /list [&lt;名称或 id&gt;|-all|-start]
|       列出您键入的源
|  /edit &lt;名称或 id&gt;
|       编辑按名称或 id 引用的源条目
|  /drop &lt;名称或 id&gt;
|       删除按名称或 id 引用的源条目
|  /save [-all|-history|-start] &lt;文件&gt;
|       将片段源保存到文件。
|  /open &lt;file&gt;
|       打开文件作为源输入
|  /vars [&lt;名称或 id&gt;|-all|-start]
|       列出已声明变量及其值
|  /methods [&lt;名称或 id&gt;|-all|-start]
|       列出已声明方法及其签名
|  /types [&lt;名称或 id&gt;|-all|-start]
|       列出已声明的类型
|  /imports
|       列出导入的项
|  /exit
|       退出 jshell
|  /env [-class-path &lt;路径&gt;] [-module-path &lt;路径&gt;] [-add-modules &lt;模块&gt;] ...
|       查看或更改评估上下文
|  /reset [-class-path &lt;路径&gt;] [-module-path &lt;路径&gt;] [-add-modules &lt;模块&gt;]...
|       重启 jshell
|  /reload [-restore] [-quiet] [-class-path &lt;路径&gt;] [-module-path &lt;路径&gt;]...
|       重置和重放相关历史记录 -- 当前历史记录或上一个历史记录 (-restore)
|  /history
|       您键入的内容的历史记录
|  /help [&lt;command&gt;|&lt;subject&gt;]
|       获取 jshell 的相关信息
|  /set editor|start|feedback|mode|prompt|truncation|format ...
|       设置 jshell 配置信息
|  /? [&lt;command&gt;|&lt;subject&gt;]
|       获取 jshell 的相关信息
|  /!
|       重新运行上一个片段
|  /&lt;id&gt;
|       按 id 重新运行片段
|  /-&lt;n&gt;
|       重新运行前面的第 n 个片段
|
|  有关详细信息, 请键入 &#39;/help&#39;, 后跟
|  命令或主题的名称。
|  例如 &#39;/help /list&#39; 或 &#39;/help intro&#39;。主题:
|
|  intro
|       jshell 工具的简介
|  shortcuts
|       片段和命令输入提示, 信息访问以及
|       自动代码生成的按键说明
|  context
|       /env /reload 和 /reset 的评估上下文选项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
jshell&gt; 1+2
$1 ==&gt; 3

##创建方法
jshell&gt; int add(int a,int b){return a+b;}
|  已创建 方法 a(int,int)

jshell&gt; int aaa(int a,int b){return a+b;}
|  已创建 方法 aaa(int,int)

## 调用方法
jshell&gt; a(1,2)
$4 ==&gt; 3

jshell&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口使用私有方法" tabindex="-1"><a class="header-anchor" href="#接口使用私有方法" aria-hidden="true">#</a> 接口使用私有方法</h3><p>接口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package jdk9;

/**
 * @author by xw
 * @Description JDK9接口私有方案测试
 */
public interface InterfacePrivateMethod {

    void hello();

    /**
     * JDK8 允许接口有default方法
     */
    default void test()
    {
        privateMethod();
    }

    /**
     * JDK9 允许接口私有的实现方法
     */
    private void privateMethod() {
        System.out.println(&quot;interface private method test&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现类:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package jdk9;

/**
 * @author by xw
 * @Description TODO
 */
public class InterfacePrivateMethodImpl implements InterfacePrivateMethod{
    @Override
    public void hello() {

    }

    public static void main(String[] args) {
        InterfacePrivateMethod interfacePrivateMethod = new InterfacePrivateMethodImpl();
        interfacePrivateMethod.test();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：<br> 正常运行，输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface private method test
Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增加-try-with-resources" tabindex="-1"><a class="header-anchor" href="#增加-try-with-resources" aria-hidden="true">#</a> 增加 try-with-resources</h3><p>在 JDK7 中，新增了 try-with-rsources 语句，可以在 try 的括号中初始化资源，可以实现资源自动关闭。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> /**
     * JDK7使用try-with-resources语句需要在try中初始化资源，
     * 可以实现自动释放
     *
     * @param filepath 路径
     * @throws FileNotFoundException
     */
    private void jdk7TryWithResource(String filepath) throws FileNotFoundException {
        OutputStream out = new FileOutputStream(filepath);
        try(OutputStream temp = out;)
        {
            temp.write((filepath+&quot;可以学习java架构课程&quot;).getBytes()); }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在JDK9中，改进了try-with-resources语句，在try外进⾏初始化，在括号内引⽤，即可实现 资源⾃动关闭，多个变量则⽤分号进⾏分割，不需要声明资源 out 就可以使⽤它，并得到相同的结果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> /**
     * JDK9增强
     *
     *
     * @param filepath
     * @throws FileNotFoundException
     */
    private static void test(String filepath) throws FileNotFoundException {
        OutputStream out = new FileOutputStream(filepath);
        try (out) {
            out.write((filepath + &quot;java9 try-with-resources test&quot;).getBytes());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新增集合api" tabindex="-1"><a class="header-anchor" href="#新增集合api" aria-hidden="true">#</a> 新增集合API</h3><p>JDK9新增快速创建只读集合。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package jdk9;

import java.util.*;

/**
 * @author by xw
 * @Description 快速创建只读集合
 */
public class UnmodifiableListTest {

    public static void main(String[] args) {
        List&lt;String&gt; list = new ArrayList&lt;&gt;();
        list.add(&quot;1&quot;);
        list.add(&quot;2&quot;);
        list.add(&quot;3&quot;);
        //设置为只读List集合
        list = Collections.unmodifiableList(list);
        System.out.println(list);
        Set&lt;String&gt; set = new HashSet&lt;&gt;();
        set.add(&quot;1&quot;);
        set.add(&quot;2&quot;);
        set.add(&quot;3&quot;);
        //设置为只读Set集合
        set = Collections.unmodifiableSet(set);
        System.out.println(set);
        Map&lt;String, String&gt; map = new HashMap&lt;&gt;();
        map.put(&quot;key1&quot;, &quot;1&quot;);
        map.put(&quot;key2&quot;, &quot;2&quot;);
        //设置为只读Map集合
        map = Collections.unmodifiableMap(map);
        System.out.println(map);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新增strean-api" tabindex="-1"><a class="header-anchor" href="#新增strean-api" aria-hidden="true">#</a> 新增Strean API</h3><p>1、takeWhile与dropWhile</p><ul><li>在有序的集合中，takeWhile从 Stream 中获取⼀部分数据, 返回从头开始的尽可能多的元素, 直到遇到第⼀ 个false结果，如果第⼀个值不满⾜断⾔条件，将返回⼀个空的 Stream，dropWhile效果与其相反</li><li>在无序集合中，好像没什么实际的应用场景。。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package jdk9;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author by xw
 * @Description TODO
 */
public class AddStreamApi {

    public static void main(String[] args) {

        // 有序集合
        List&lt;String&gt; takeWhilelist =
                List.of(&quot;springboot&quot;, &quot;java&quot;, &quot;html&quot;, &quot;&quot;, &quot;git&quot;).stream().takeWhile(obj -&gt; !obj.isEmpty()).collect(Collectors.toList());

        System.out.println(&quot;takewhile list &quot; + takeWhilelist);

        // 无序集合
        Set&lt;String&gt; takewhileSet = List.of(&quot;springboot&quot;, &quot;java&quot;, &quot;html&quot;, &quot;&quot;, &quot;git&quot;).stream().takeWhile(obj -&gt; !obj.isEmpty()).collect(Collectors.toSet());
        System.out.println(&quot;takewhile set&quot; + takewhileSet);


        List&lt;String&gt; dropWhileList = List.of(&quot;springboot&quot;, &quot;java&quot;, &quot;html&quot;, &quot;&quot;, &quot;git&quot;).stream().dropWhile(obj -&gt; !obj.isEmpty())
                .collect(Collectors.toList());
        System.out.println(&quot;dropwhile list&quot; + dropWhileList);

        Set&lt;String&gt; dropWhileSet = List.of(&quot;springboot&quot;, &quot;java&quot;, &quot;html&quot;, &quot;&quot;, &quot;git&quot;).stream().dropWhile(obj -&gt; !obj.isEmpty())
                .collect(Collectors.toSet());
        System.out.println(&quot;dropwhile set&quot; + dropWhileSet);

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>takewhile list [springboot, java, html]
takewhile set[java, html, springboot]
dropwhile list[, git]
dropwhile set[, git]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="去掉jhat工具" tabindex="-1"><a class="header-anchor" href="#去掉jhat工具" aria-hidden="true">#</a> 去掉jhat工具</h3><p>jhat也是jdk内置的工具之一。主要是用来分析java堆的命令，可以将堆中的对象以html的形式显示出来,JDK9中已经移除该功能。</p><h3 id="垃圾回收器更改" tabindex="-1"><a class="header-anchor" href="#垃圾回收器更改" aria-hidden="true">#</a> 垃圾回收器更改</h3><p>JDK9移除了下面回收器组合：</p><ul><li>DefNew + CMS</li><li>ParNew + SerialOld</li><li>Incremental CMS</li></ul><p>删除的命令行：</p><ul><li><code>-Xincgc</code></li><li><code>-XX:+CMSIncrementalMode</code></li><li><code>-XX:+UseCMSCompactAtFullCollection</code></li><li><code>-XX:+CMSFullGCsBeforeCompaction</code></li><li><code>-XX:+UseCMSCollectionPassing</code></li></ul><p><strong>G1作为默认垃圾回收器，同时不推荐CMS并发标记进行垃圾回收</strong></p>`,40),o=i("br",null,null,-1),b={href:"https://docs.oracle.com/javase/9/whatsnew/toc.htm#JSNEW-GUID-C23AFD78-C777-460B-8ACE-58BE5EA681F6",target:"_blank",rel:"noopener noreferrer"},h=i("br",null,null,-1),p={href:"https://github.com/2457081614/jdk-study",target:"_blank",rel:"noopener noreferrer"};function g(q,x){const n=d("ExternalLinkIcon");return t(),a("div",null,[c,v("more"),m,i("p",null,[e("参考文档："),o,i("a",b,[e("JDK9新特性官方文档"),l(n)]),h,i("a",p,[e("代码地址"),l(n)])])])}const f=s(u,[["render",g],["__file","4.JDK9新特性.html.vue"]]);export{f as default};
