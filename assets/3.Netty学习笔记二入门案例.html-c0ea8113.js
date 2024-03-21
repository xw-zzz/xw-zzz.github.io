import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c as v,a as n,e,d as l,f as t,b as s}from"./app-ef0b4d9d.js";const c={},o=n("hr",null,null,-1),u=n("h2",{id:"echo案例代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#echo案例代码","aria-hidden":"true"},"#"),e(" Echo案例代码")],-1),m={href:"https://netty.io/",target:"_blank",rel:"noopener noreferrer"},b=s(`<p>1、编写EchoServer</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package echo;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;

import java.net.InetAddress;
import java.net.UnknownHostException;

/**
 * @Author: 向往
 * @Contact: 2457081614@qq.com
 * @Date: 2019/11/17 0017 23:54
 * @Version: 1.0
 * @Description:
 */
public class EchoServer {

    private Integer port;

    public EchoServer(Integer port) {
        this.port = port;
    }

    public EchoServer() {
    }

    public void run() throws InterruptedException, UnknownHostException {
        EventLoopGroup bossGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();

      try
      {
          ServerBootstrap serverBootstrap = new ServerBootstrap();
          serverBootstrap.group(bossGroup,workerGroup)
                  //设置通道类型
                  .channel(NioServerSocketChannel.class)
                  //设置新建立的channel tcp参数
                  .option(ChannelOption.TCP_NODELAY,true)
                  //每个通道的数据处理
                  .childHandler(new ChannelInitializer&lt;SocketChannel&gt;() {
                      protected void initChannel(SocketChannel socketChannel) throws Exception {
                             socketChannel.pipeline().addLast(new EchoServerHandle());
                      }
                  });
          System.out.println(&quot;echo server 启动成功,ip地址&quot;+InetAddress.getLocalHost().getHostAddress());
          //绑定端口
          ChannelFuture channelFuture = serverBootstrap.bind(8080).sync();

          channelFuture.channel().closeFuture().sync();
      }
      finally {
          bossGroup.shutdownGracefully();
          workerGroup.shutdownGracefully();
      }

    }
    public static void main(String[] args) throws InterruptedException, UnknownHostException {
      new EchoServer(8080).run();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、编辑对应handle类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package echo;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.channel.ChannelOutboundHandlerAdapter;
import io.netty.util.CharsetUtil;

import java.nio.charset.Charset;

/**
 * @Author: 向往
 * @Contact: 2457081614@qq.com
 * @Date: 2019/11/18 0018 0:03
 * @Version: 1.0
 * @Description:
 */

public class EchoServerHandle extends ChannelInboundHandlerAdapter {

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        ByteBuf byteBuf = (ByteBuf) msg;
        System.out.println(byteBuf.toString(CharsetUtil.UTF_8));
        ctx.writeAndFlush(msg);
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
        super.channelReadComplete(ctx);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        super.exceptionCaught(ctx, cause);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=n("li",null,[n("p",null,"EventLoop好比一个线程，1个EventLoop可以服务多个Channel，1个Channel只有一个EventLoop可以创建多个 EventLoop 来优化资源利用，也就是EventLoopGroup")],-1),h=n("p",null,"EventLoopGroup 负责分配 EventLoop 到新创建的 Channel，里面包含多个EventLoop",-1),C=n("li",null,"EventLoopGroup -> 多个 EventLoop ,EventLoop -> 维护一个 Selector",-1),x={href:"http://ifeve.com/selectors/",target:"_blank",rel:"noopener noreferrer"},g=s(`<h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><p>启动后使用 telnet ipaddress port命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ telnet 192.168.0.196 8080
Trying 192.168.0.196...
Connected to 192.168.0.196.
Escape character is &#39;^]&#39;.
s
s
hello world
hello world

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="demo2-服务端推送服务" tabindex="-1"><a class="header-anchor" href="#demo2-服务端推送服务" aria-hidden="true">#</a> demo2-服务端推送服务</h2><p>服务端主动推送时间给客户端，客户端打印输出，废话少说直接上代码。<br><strong>客户端代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package time;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;

public class TimeClient {
    public static void main(String[] args) throws Exception {

        EventLoopGroup workerGroup = new NioEventLoopGroup();

        try {
            Bootstrap b = new Bootstrap(); // (1)
            b.group(workerGroup); // (2)
            b.channel(NioSocketChannel.class); // (3)
            b.option(ChannelOption.SO_KEEPALIVE, true); // (4)
            b.handler(new ChannelInitializer&lt;SocketChannel&gt;() {
                @Override
                public void initChannel(SocketChannel ch) throws Exception {
                    ch.pipeline().addLast(new TimeClientHandler());
                }
            });

            // Start the client.
            ChannelFuture f = b.connect(&quot;127.0.0.1&quot;, 8080).sync(); // (5)

            // Wait until the connection is closed.
            f.channel().closeFuture().sync();
            System.out.println(&quot;客户端关闭&quot;);
        } finally {
            workerGroup.shutdownGracefully();
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package time;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;

import java.util.Date;

public class TimeClientHandler extends ChannelInboundHandlerAdapter {
    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) {
        ByteBuf m = (ByteBuf) msg; // (1)
        try {
            long currentTimeMillis = (m.readUnsignedInt() - 2208988800L) * 1000L;
            System.out.println(new Date(currentTimeMillis));
            ctx.close();
        } finally {
            m.release();
        }
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        cause.printStackTrace();
        ctx.close();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>服务端代码</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package time;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;

import java.net.InetAddress;
import java.net.UnknownHostException;

/**
 * @Author: 向往
 * @Contact: 2457081614@qq.com
 * @Date: 2019/11/17 0017 23:54
 * @Version: 1.0
 * @Description:
 */
public class TimeServer {

    private Integer port;

    public TimeServer(Integer port) {
        this.port = port;
    }

    public TimeServer() {
    }

    public void run() throws InterruptedException, UnknownHostException {
        EventLoopGroup bossGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();

      try
      {
          ServerBootstrap serverBootstrap = new ServerBootstrap();
          serverBootstrap.group(bossGroup,workerGroup)
                  .channel(NioServerSocketChannel.class)
                  .childHandler(new ChannelInitializer&lt;SocketChannel&gt;() {
                      protected void initChannel(SocketChannel socketChannel) throws Exception {
                             socketChannel.pipeline().addLast(new TimeServerHandler());
                      }
                  });
          System.out.println(&quot;time server 启动成功,ip地址&quot;+InetAddress.getLocalHost().getHostAddress());
          //绑定端口
          ChannelFuture channelFuture = serverBootstrap.bind(8080).sync();

          channelFuture.channel().closeFuture().sync();
      }
      finally {
          bossGroup.shutdownGracefully();
          workerGroup.shutdownGracefully();
      }

    }
    public static void main(String[] args) throws InterruptedException, UnknownHostException {
      new TimeServer(8080).run();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package time;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;


public class TimeServerHandler extends ChannelInboundHandlerAdapter {
    @Override
    public void channelActive(final ChannelHandlerContext ctx) { // (1)
        //为了发送消息，分配4个字节
        final ByteBuf time = ctx.alloc().buffer(4); // (2)
        time.writeInt((int) (System.currentTimeMillis() / 1000L + 2208988800L));

        final ChannelFuture f = ctx.writeAndFlush(time); // (3)
        f.addListener(new ChannelFutureListener() {
            public void operationComplete(ChannelFuture future) {
                assert f == future;
                System.out.println(&quot;监听器监听到操作已经完成，关闭&quot;);
                ctx.close();
            }
        }); // (4)
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        cause.printStackTrace();
        ctx.close();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-1" tabindex="-1"><a class="header-anchor" href="#测试-1" aria-hidden="true">#</a> 测试</h3><p>先启动服务端，再启动客户端，输出相关信息。<br><img src="https://img.hacpai.com/file/2019/11/image-d2a1dbb1.png" alt="image.png" loading="lazy"></p><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><p><img src="https://img.hacpai.com/file/2019/11/image-9faa008d.png" alt="image.png" loading="lazy"></p>`,14);function y(f,E){const i=r("ExternalLinkIcon");return a(),v("div",null,[o,u,n("p",null,[e("根据 "),n("a",m,[e("Netty"),l(i)]),e("官网编写入门案例，编写一个简单的echo服务。直接上代码")]),t("more"),b,n("ul",null,[p,n("li",null,[h,n("ul",null,[C,n("li",null,[e("学习资料："),n("a",x,[e("http://ifeve.com/selectors/"),l(i)])])])])]),g])}const k=d(c,[["render",y],["__file","3.Netty学习笔记二入门案例.html.vue"]]);export{k as default};
