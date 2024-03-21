import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as d,c as r,f as u,a as i,e,d as l,b as t}from"./app-ef0b4d9d.js";const v="/assets/100-6619cbc5.jpeg",o={},c=i("p",null,[i("img",{src:v,alt:"",loading:"lazy"})],-1),m=i("h2",{id:"概述",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),e(" 概述")],-1),b=t(`<ul><li><p>语法变化</p><ul><li>Lamada 表达式</li><li>Default 方法</li><li>重复注解</li><li>扩展注解支持</li></ul></li><li><p>集合</p><ul><li>新增 Stream 流</li><li>HashMap 性能提升</li></ul></li><li><p>安全方面</p><ul><li>客户端 TLS 1.2 默认启用；</li><li>Sha-224 消息摘要；</li><li>对高熵随机数生成的更好支持；</li><li>持 Kerberos 5 协议转换和受限代理。</li><li>...</li></ul></li><li><p>工具</p><ul><li>提供 jjs 命令来调用 Nashorn 引擎；</li><li>Jdeps 命令行工具用于分析类文件；</li><li>JMX 提供远程访问诊断命令。</li></ul></li><li><p>国际化</p><ul><li>Unicode 增强，包括对 Unicode 6.2.0 的支持；</li><li>新的日历和语言环境 API；</li><li>可安装自定义资源包。</li></ul></li><li><p>新增日期处理包</p></li><li><p>IO 和 NIO</p><ul><li>减小 &lt;JDK_HOME&gt;/jre/lib/charsets.jar 文件大小；</li><li>java.lang.String(byte[], *)和 java.lang.String.getBytes()性能提升。</li></ul></li><li><p>新增工具类</p><ul><li>并行数组排序；</li><li>Base64 编码解码；</li><li>无符号算术支持 。</li></ul></li><li><p>网络</p><ul><li>新增 java.net.URLPermission；</li><li>在 java. net 类中。 如果安装了安全管理器，则 HttpURLConnection 调用打开连接的请求需要权限。</li></ul></li><li><p>并发</p><ul><li>添加新的类和接口</li></ul></li></ul><h3 id="jdk8-之-default-关键字" tabindex="-1"><a class="header-anchor" href="#jdk8-之-default-关键字" aria-hidden="true">#</a> JDK8 之 default 关键字</h3><p>在 jdk1.8 以前接口里面是只能有抽象 ⽅法，不能有任何 ⽅法的实现。jdk1.8⾥ ⾯打破了这个规定，引入了新的关键字 default，使用 default 修饰方法，可以在接口里面定义具体的方法实现。</p><ul><li>默认方法：接口里面定义一个默认方法，这个接口的实现类实现了这个接口之后，不用管这个 default 修饰的方法就可以直接调调用，即接口方法的默认实现</li><li>静态方法: 接口名.静态方法来访问接口中的静态方法。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface StudentService {

    /**
     * JAVA8中新增default关键字
     */
    default void test()
    {
        System.out.print(&quot;hello world&quot;);
    }


    static void test1() {
        System.out.println(&quot;这是静态⽅法&quot;);
    }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk8-之-base64-加解密-api" tabindex="-1"><a class="header-anchor" href="#jdk8-之-base64-加解密-api" aria-hidden="true">#</a> JDK8 之 base64 加解密 API</h3><p>Jdk1.8 的 java.util 包中，新增了 Base64 的类。相比于传统 sun.misc 和 Apache Commons Codec 效率较高，不用导包。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Base64Demo {

    /**
     * java 8新增 base64编码解码
     * @param args
     * @throws UnsupportedEncodingException
     */
    public static void main(String[] args) throws UnsupportedEncodingException {
        Base64.Encoder encoder = Base64.getEncoder();
        Base64.Decoder decoder = Base64.getDecoder();

        byte[] src = &quot;hello world&quot;.getBytes();
        String encodeData = encoder.encodeToString(src);
        System.out.println(&quot;编码数据：&quot;+encodeData);

        System.out.println(&quot;解码数据:&quot;+ new String(decoder.decode(encodeData),&quot;UTF-8&quot;));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk8-之时间日期处理类" tabindex="-1"><a class="header-anchor" href="#jdk8-之时间日期处理类" aria-hidden="true">#</a> JDK8 之时间日期处理类</h3><p>JAVA8 新增 LocalDate、LocalTime、LocalDateTime 日期处理类，LocalDate 只精确到天、LocalTime 只包含具体时间（时分秒）、LocalDateTime 包含日期和时间。新增 DateTimeFormatter(线程安全)和 Duration 对时间的处理变得极为方便，具体使用如下。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class LocalDateDemo {

    public static void main(String[] args) throws InterruptedException {

        /**
         * LocalDate不包含具体时间（小时、分、秒），只有日期
         */
        LocalDate localDate = LocalDate.now();

        System.out.println(&quot;当前时间:&quot;+ localDate);
        System.out.println(&quot;当前月份&quot;+localDate.getMonthValue());

        //增加
        LocalDate newLocalDate = localDate.plusYears(2);
        System.out.println(&quot;增加的时间&quot;+newLocalDate);

        //减小
        LocalDate minLocalDate = localDate.minusYears(66);
        System.out.println(&quot;减小的时间&quot;+minLocalDate);

        //修改月份
        LocalDate localDate1 =localDate.withMonth(5);
        System.out.println(localDate1);

        LocalDateTime localDateTime = LocalDateTime.now();
        Thread.sleep(1111);
        System.out.println(localDateTime.isAfter(LocalDateTime.now()));


        //DateTimeFormatter线程安全
        LocalDateTime ldt = LocalDateTime.now();
        System.out.println(ldt);
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);
        String ldtStr = dtf.format(ldt);
        System.out.println(ldtStr);

        //时间比较
        LocalDateTime today = LocalDateTime.now();
        System.out.println(today);
        LocalDateTime changeDate = LocalDateTime.of(2020,10,1,10,40,30);
        System.out.println(changeDate);
        Duration duration = Duration.between( today,changeDate);//第⼆个参数减第⼀个参数

        System.out.println(duration.toDays());//两个时间差的天数
        System.out.println(duration.toHours());//两个时间差的⼩时数
        System.out.println(duration.toMinutes());//两个时间差的分钟数
        System.out.println(duration.toMillis());//两个时间差的毫秒数
        System.out.println(duration.toNanos());//两个时间差的纳秒数


    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk8-之-lambda-表达式" tabindex="-1"><a class="header-anchor" href="#jdk8-之-lambda-表达式" aria-hidden="true">#</a> JDK8 之 Lambda 表达式</h3><p>在 JDK8 之前，Java 是不志持函数式编程的，所谓的函数编程，即可理解是将一个函数（也称为“行为”）作为 ⼀个参数进 行传递， ⾯向对象编程是对数据的抽象，⽽函数式编程则是对 行为的抽象（将行为作为 ⼀个参数进行传递）。<br> lambda 表达式 使 ⽤场景(前提)：⼀个接 ⼝中只包含 ⼀个方法，则可以使 ⽤ Lambda 表达式，这样的接口称之为“函数接口” 语法： (params) -&gt; expression。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class LamadaDemo {

    public static void main(String[] args) {

        /**
         * JDK8之前创建线程
         */
        new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println(&quot;hello world&quot;);
            }
        });

        //JDK8
        new Thread(()-&gt;System.out.println(&quot;hello world&quot;));


        //JDK8之前排序
        List&lt;String&gt; list = Arrays.asList(&quot;aaa&quot;,&quot;ggg&quot;,&quot;ffff&quot;,&quot;ccc&quot;);
        Collections.sort(list, new Comparator&lt;String&gt;() {
                    @Override
                    public int compare(String a, String b) {
                        return b.compareTo(a);
                    }
                }
        );
        for (String string : list) {
            System.out.println(string);
        }

        //JDK8排序
        Collections.sort(list, (a,b)-&gt;b.compareTo(a)
        );
        for (String string : list) {
            System.out.println(string);
        }

        
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>自定义函数编程</strong><br> 定义一个函数式接口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//声明这是一个函数式接口
@FunctionalInterface
public interface MyLamada&lt;R,T&gt; {
    R operator(T t1,T t2);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class MyLamadaTest {

    public static void main(String[] args) throws Exception {
        System.out.println(operator(20, 5, (Integer x, Integer y) -&gt; {
            return x * y;
        }));
        System.out.println(operator(20, 5, (x, y) -&gt; x + y));
        System.out.println(operator(20, 5, (x, y) -&gt; x - y));
        System.out.println(operator(20, 5, (x, y) -&gt; x / y));
    }
    public static Integer operator(Integer x, Integer y,
                                   MyLamada&lt;Integer, Integer&gt; of) {
        return of.operator(x, y);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk8-函数式编程" tabindex="-1"><a class="header-anchor" href="#jdk8-函数式编程" aria-hidden="true">#</a> JDK8 函数式编程</h3><p>Lambda 表达式必须先定义接 ⼝，创建相关 ⽅法之后才可使 ⽤，这样做 ⼗分不便，其实 java8 已经内置了许多接 ⼝, 例如下 ⾯四个功能型接 ⼝，所以 ⼀般很少会由 ⽤户去定义新的函数式接 ⼝。Java8 内置的四 ⼤核 ⼼函数式接 ⼝：</p><ol><li><code>Consumer&lt;T&gt;</code> : 消费型接 ⼝：有 ⼊参，⽆返回值</li><li><code>Supplier&lt;T&gt;</code> : 供给型接 ⼝：⽆ ⼊参，有返回值</li><li><code>Function&lt;T, R&gt;</code> : 函数型接 ⼝：有 ⼊参，有返回值</li><li><code>Predicate&lt;T&gt;</code> : 断 ⾔型接 ⼝：有 ⼊参，有返回值，返回值类型确定是 boolean</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class FunctionDemo {

    public static void main(String[] args) {
        //声明function函数
        Function&lt;Integer,Integer&gt; function = p-&gt;p*10;
        System.out.println(function.apply(99));

        //自定义function函数，只能穿一个参数
        MyFunction&lt;String,String&gt; myFunction = new MyFunction&lt;&gt;();
        System.out.println(myFunction.apply(&quot;xw study&quot;));

        //BiFunction支持传两个参数
        BiFunction&lt;String,String,String&gt; biFunction = (a,b)-&gt;a+b;
        System.out.println(biFunction.apply(&quot;a&quot;,&quot;b&quot;));


    }
}


/**
 * @author by xw
 * @Description predicate有入参，有返回值，返回类型是boolean类型
 */
public class PredicateDemo {
    public static void main(String[] args) {
        List&lt;String&gt; list =
                Arrays.asList(&quot;awewrwe&quot;,&quot;vdssdsd&quot;,&quot;aoooo&quot;,&quot;psdddsd&quot;);
        List&lt;String&gt; results = filter(list,obj-&gt;obj.startsWith(&quot;a&quot;));
        System.out.println(results);
    }
    public static List&lt;String&gt; filter(List&lt;String&gt; list,
                                      Predicate&lt;String&gt; predicate) {
        List&lt;String&gt; results = new ArrayList&lt;&gt;();
        for (String str : list) {
            if (predicate.test(str)) {
                results.add(str);
            }
        }
        return results;
    }
}




/**
 * @author by xw
 * @Description supplier只有返回值，没有入参
 */
public class SupplierDemo {
    public static void main(String[] args) {
        //Student student = new Student();
        Student student = newStudent();
        System.out.println(student.getName());
    }
    public static Student newStudent(){
        Supplier&lt;Student&gt; supplier = ()-&gt; {
            Student student = new Student();
            student.setName(&quot;默认名称&quot;);
            return student;
        };
        return supplier.get();
    }

    static class Student{
        private String name;
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
    }
}

public class ConsumerDemo {

    public static void main(String[] args) throws Exception {
        Consumer&lt;String&gt; consumer = obj-&gt;{
            System.out.println(obj);
            System.out.println(&quot;调⽤短信接⼝发送短信，或者打印⽇志&quot;);
        };

        sendMsg(&quot;8888888&quot;,consumer);
    }
    public static void sendMsg(String phone, Consumer&lt;String&gt; consumer){
        consumer.accept(phone);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),p=i("br",null,null,-1),g={href:"https://github.com/2457081614/jdk-study.git",target:"_blank",rel:"noopener noreferrer"},h=t(`<h3 id="jdk8-之-stream-流" tabindex="-1"><a class="header-anchor" href="#jdk8-之-stream-流" aria-hidden="true">#</a> JDK8 之 Stream 流</h3><p>Stream 中 ⽂称为 “流”，通过将集合转换为这么 ⼀种叫做 “流”的元素队列，通过声明性方式， 能够对集合中的每个元素进 行一系列并行或串行的流水线操作。<br><strong>操作过程</strong></p><ol><li>数据元素便是原始集合，如 List、Set、Map 等</li><li>⽣成流，可以是串行流 stream() 或者并行流 parallelStream()<br> 3.中间操作，可以是 排序，聚合，过滤，转换等</li><li>终端操作，很多流操作本身就会返回一个流，所以多个操作可以直接连接起来，最后统一进行收集</li></ol><h4 id="map-函数" tabindex="-1"><a class="header-anchor" href="#map-函数" aria-hidden="true">#</a> map 函数</h4><ul><li>作用：将流中的每 ⼀个元素 T 映射为 R（类似类型转换）</li><li>应用场景: 开发中 Do 转 Dto</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private void mapTest()
    {
        List&lt;User&gt; list = Arrays.asList(new User(1,&quot;⼩东&quot;,&quot;123&quot;),new
                        User(21,&quot;jack&quot;,&quot;rawer&quot;),
                new User(155,&quot;tom&quot;,&quot;sadfsdfsdfsd&quot;),
                new User(231,&quot;marry&quot;,&quot;234324&quot;),new User(100,&quot;2222&quot;,&quot;122223&quot;));
        List&lt;UserDTO&gt; userDTOList = list.stream().map(obj-&gt;{
            UserDTO userDTO = new UserDTO(obj.getId(),obj.getName());
            return userDTO;
        }).collect(Collectors.toList());
        System.out.println(userDTOList);

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="filter-函数" tabindex="-1"><a class="header-anchor" href="#filter-函数" aria-hidden="true">#</a> filter 函数</h4><ul><li>作用：⽤于通过设置的条件过滤出元素</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 过滤长度大于5的
 private void filterTest() {
        List&lt;String&gt; list = Arrays.asList(&quot;springboot&quot;, &quot;springcloud&quot;,
                &quot;redis&quot;, &quot;git&quot;, &quot;netty&quot;, &quot;java&quot;, &quot;html&quot;, &quot;docker&quot;);
        List&lt;String&gt; resultList = list.stream().filter(obj -&gt; obj.length() &gt;
                5).collect(Collectors.toList());
        System.out.println(resultList);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sorted-函数" tabindex="-1"><a class="header-anchor" href="#sorted-函数" aria-hidden="true">#</a> sorted 函数</h4><p>作用：sorted() 对流进 ⾏排序, 其中的元素必须实现 Comparable 接 ⼝</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private void sortdTest() {
        //自然排序
        List&lt;String&gt; list = Arrays.asList(&quot;springboot&quot;, &quot;springcloud&quot;,
                &quot;redis&quot;, &quot;git&quot;, &quot;netty&quot;, &quot;java&quot;, &quot;html&quot;, &quot;docker&quot;);
        List&lt;String&gt; resultList =
                list.stream().sorted().collect(Collectors.toList());

        //根据⻓度顺序进⾏排序
        resultList =
                list.stream().sorted(Comparator.comparing(obj -&gt;
                        obj.length())).collect(Collectors.toList());
        //逆序排序
        resultList =
                list.stream().sorted(Comparator.comparing(obj -&gt;
                        obj.length(), Comparator.reverseOrder())).collect(Collectors.toList()
                );
        // 逆序排序，根据effective java规范一般来说在stream表达式中，引用优先于lamada表达式使用。
        resultList =
                list.stream().sorted(Comparator.comparing(String::length).reversed()
                ).collect(Collectors.toList());
        System.out.println(resultList);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="limit-函数" tabindex="-1"><a class="header-anchor" href="#limit-函数" aria-hidden="true">#</a> limit 函数</h4><p>作用：截断流使其最多只包含指定数量的元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private static void limitTest() {
        List&lt;String&gt; list = Arrays.asList(&quot;springboot&quot;, &quot;springcloud&quot;,
                &quot;redis&quot;, &quot;git&quot;, &quot;netty&quot;, &quot;java&quot;, &quot;html&quot;, &quot;docker&quot;);
        //limit截取
        List&lt;String&gt; resultList =
                list.stream().sorted(Comparator.comparing(String::length).reversed()
                ).limit(3).collect(Collectors.toList());

        // result  [springcloud, springboot, docker]
        System.out.println(resultList);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="allmatch-和-anymatch" tabindex="-1"><a class="header-anchor" href="#allmatch-和-anymatch" aria-hidden="true">#</a> allMatch 和 anyMatch</h4><p>allMatch 检查是否匹配所有元素，只有全部符合才返回 true。anyMatch 检查是否至少匹配一个元素。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private static void anyMatchAndAllMatchTest()
    {
        List&lt;String&gt; list = Arrays.asList(&quot;springboot&quot;, &quot;springcloud&quot;, &quot;redis&quot;,
                &quot;git&quot;, &quot;netty&quot;, &quot;java&quot;, &quot;html&quot;, &quot;docker&quot;);
        boolean flag = list.stream().allMatch(obj-&gt;obj.length()&gt;1);
        System.out.println(flag);

        flag = list.stream().anyMatch(obj-&gt;obj.length()&gt;18);
        System.out.println(flag);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="min-和-max-函数" tabindex="-1"><a class="header-anchor" href="#min-和-max-函数" aria-hidden="true">#</a> min 和 max 函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private static void minAndMaxTest() {
        List&lt;Student&gt; list = Arrays.asList(new Student(32), new
                Student(33), new Student(21), new Student(29), new Student(18));
        
        //求最大值
        Optional&lt;Student&gt; optional = list.stream().max(Comparator.comparingInt(Student::getAge));
        System.out.println(optional.get().getAge());
        
        //求最小值
        optional = list.stream().min(Comparator.comparingInt(Student::getAge));
        System.out.println(optional.get().getAge());
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk8-之-optional-类" tabindex="-1"><a class="header-anchor" href="#jdk8-之-optional-类" aria-hidden="true">#</a> JDK8 之 Optional 类</h3><ul><li><p>作用</p><ul><li>解决空指针异常</li></ul></li><li><p>创建</p><ul><li>of()方法，null 值作为参数传递进去,则会抛异常<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Optional opt = Optional.of(user);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>ofNullable() ，如果对象即可能是 null 也可能是 ⾮ null，应该使 ⽤ ofNullable() ⽅法<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Optional opt = Optional.ofNullable(user);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>orElse()如果有值则返回该值，否则返回传递给它的参数值</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package jdk8.optional;


import java.util.Optional;

public class Demo {

    public static void main(String[] args) {

        User user = null;

        // 如果user是null的话，下面这句话会报错。
        //Optional&lt;User&gt; opt = Optional.of(user);

        //  orElse()如果有值则返回该值，否则返回传递给它的参数值
        User user1 = new User(&quot;1&quot;);
        User user2 = new User(&quot;2&quot;);
        /*
        如果值存在则isPresent()⽅法会返回true，调⽤get()⽅法会返回该对象⼀般使⽤get之前需要
        先验证是否有值，不然还会报错*/
        Optional&lt;User&gt; opt = Optional.ofNullable(user);
        Optional&lt;User&gt; opt1 = Optional.ofNullable(user1);
        System.out.println(&quot;opt &quot; + opt.isPresent());          //false
        System.out.println(&quot;opt1 &quot; + opt1.isPresent());       //true
        System.out.println(Optional.ofNullable(user1).orElse(user2));  //user1
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reduce-函数" tabindex="-1"><a class="header-anchor" href="#reduce-函数" aria-hidden="true">#</a> reduce 函数</h4><p>作用：聚合函数，根据 ⼀定的规则将 Stream 中的元素进 ⾏计算后返回 ⼀个唯 ⼀的值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int value = Stream.of(1, 2, 3, 4, 5).reduce((item1, item2) -&gt; item1 + item2).get();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="foreach-函数" tabindex="-1"><a class="header-anchor" href="#foreach-函数" aria-hidden="true">#</a> foreach 函数</h4><p>作用：循环遍历集合</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>List results = Arrays.asList(new Student(32),new Student(33),new Student(21),new Student(29),new Student(18));
results.forEach(obj-&gt;{ System.out.println(obj.toString()); });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意点：</p><ul><li>不能修改包含外部的变量的值</li><li>不能 ⽤ break 或者 return 或者 continue 等关键词结束或者跳过循环</li></ul><h4 id="collector-收集器" tabindex="-1"><a class="header-anchor" href="#collector-收集器" aria-hidden="true">#</a> collector 收集器</h4><p>作用：⼀个终端操作, ⽤于对流中的数据进 ⾏归集操作。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> private static  void collectTest()
    {
        List&lt;Integer&gt; a =Arrays.asList(1,2,3);
        List&lt;Integer&gt; b = a.stream().collect(Collectors.toList());
        Set&lt;Integer&gt; c = a.stream().collect(Collectors.toSet());
        
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="joining-函数" tabindex="-1"><a class="header-anchor" href="#joining-函数" aria-hidden="true">#</a> joining 函数</h4><p>作用：拼接函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> /**
     * 该⽅法可以将Stream得到⼀个字符串， joining函数接受三个参数，分别表示 元素之间的连
     * 接符、前缀和后缀。
     */
    private static void joiningTest()
    {

        //3种重载⽅法
       /* Collectors.joining()
        Collectors.joining(&quot;param&quot;)
        Collectors.joining(&quot;param1&quot;, &quot;param2&quot;, &quot;param3&quot;)*/

        String result = Stream.of(&quot;springboot&quot;, &quot;mysql&quot;, &quot;html5&quot;,
                &quot;css3&quot;).collect(Collectors.joining(&quot;,&quot;, &quot;[&quot;, &quot;]&quot;));
        System.out.println(result); //[springboot,mysql,html5,css3]

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="partitioningby-分组" tabindex="-1"><a class="header-anchor" href="#partitioningby-分组" aria-hidden="true">#</a> partitioningBy 分组</h4><p>Collectors.partitioningBy 分组，key 是 boolean 类型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> private static void parttitionByTest()
    {
        List&lt;String&gt; list = Arrays.asList(&quot;java&quot;, &quot;springboot&quot;,
                &quot;HTML5&quot;,&quot;nodejs&quot;,&quot;CSS3&quot;);
        Map&lt;Boolean, List&lt;String&gt;&gt; result =
                list.stream().collect(partitioningBy(obj -&gt; obj.length() &gt; 4));
        System.out.println(result);
        
        //key是 false 和true
        //result 
       //{false=[java, CSS3], true=[springboot, HTML5, nodejs]}

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="group-by-分组" tabindex="-1"><a class="header-anchor" href="#group-by-分组" aria-hidden="true">#</a> group by 分组</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> private static void groupbyingTest()
    {
        List&lt;Student&gt; students = Arrays.asList(new Student(&quot;⼴东&quot;, 23), new
                Student(&quot;⼴东&quot;, 24), new Student(&quot;⼴东&quot;, 23),new Student(&quot;北京&quot;, 22), new
                Student(&quot;北京&quot;, 20), new Student(&quot;北京&quot;, 20),new Student(&quot;海南&quot;, 25));
        Map&lt;String, Long&gt; listMap =
                students.stream().collect(Collectors.groupingBy(Student::getProvince,
                        Collectors.counting()));
        listMap.forEach((key, value) -&gt; {System.out.println(key+&quot;省⼈数有&quot;+value);});
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="summarizing-集合统计" tabindex="-1"><a class="header-anchor" href="#summarizing-集合统计" aria-hidden="true">#</a> summarizing 集合统计</h4><p>summarizing 统计相关。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private static void summarizingTest() {
        List&lt;Student&gt; students = Arrays.asList(new Student(&quot;⼴东&quot;, 23), new
                Student(&quot;⼴东&quot;, 24), new Student(&quot;⼴东&quot;, 23), new Student(&quot;北京&quot;, 22), new
                Student(&quot;北京&quot;, 20), new Student(&quot;北京&quot;, 20), new Student(&quot;海南&quot;, 25));
        IntSummaryStatistics summaryStatistics =
                students.stream().collect(Collectors.summarizingInt(Student::getAge));
        System.out.println(&quot;平均值：&quot; + summaryStatistics.getAverage());
        System.out.println(&quot;⼈数：&quot; + summaryStatistics.getCount());
        System.out.println(&quot;最⼤值：&quot; + summaryStatistics.getMax());
        System.out.println(&quot;最⼩值：&quot; + summaryStatistics.getMin());
        System.out.println(&quot;总和：&quot; + summaryStatistics.getSum());
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk8-之新的内存空间" tabindex="-1"><a class="header-anchor" href="#jdk8-之新的内存空间" aria-hidden="true">#</a> JDK8 之新的内存空间</h3><h4 id="元空间-metaspace" tabindex="-1"><a class="header-anchor" href="#元空间-metaspace" aria-hidden="true">#</a> 元空间（Metaspace）</h4><p>在 JDK8 及版本，有个区域叫做“永久代(permanent generation)， 通过 在命令 ⾏设置参数-XX:MaxPermSize 来设定永久代最 ⼤可分配的内存空间。该块内存主要是被 JVM⽤来存放 class 和 mate 信息的，当 class 被加载 loader 的时候就会 被存储到该内存区中，如 ⽅法的编译信息及字节码、常量池和符号解析、类的层级信息，字段，名字等</p><p>在 JDK8 使用本地内存来存储类元数据信息，叫做元空间，另外将常量及静态变量移到堆中，元空间并不在虚拟机中，存储在本地内存里面，在默认的情况下 Metaspace 的大小只与本地内存有关。默认不设置元空间大小的话会自动扩张，设置带下命令<br> -XX: MaxPermSize</p><p>优点：</p><ul><li>原来的字符串存在永久代中，容易出现性能问题和内存溢出。</li><li>类及方法的信息难以确定，指定永久代的大小比较困难，太小导致出现永久代溢出，太大容易导致老年代溢出。</li><li>永久代 GC 效率低</li></ul><p>参考文档：</p>`,52),q={href:"https://wiki.openjdk.java.net/display/jdk8u/Main",target:"_blank",rel:"noopener noreferrer"};function S(x,y){const n=a("ExternalLinkIcon");return d(),r("div",null,[c,m,u("more"),b,i("p",null,[e("未完待续。。。。。"),p,e(" 项目地址："),i("a",g,[e("项目地址"),l(n)])]),h,i("ul",null,[i("li",null,[i("a",q,[e("open jdk8 updates wiki"),l(n)])])])])}const D=s(o,[["render",S],["__file","3.JDK8新特性.html.vue"]]);export{D as default};
