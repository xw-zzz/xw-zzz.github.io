import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as s,b as e}from"./app-ef0b4d9d.js";const d="/assets/100-1663224910088-175-ad4709ed.jpeg",l="/assets/image-08e067a4-17da9c7c.png",m={},r=e('<p><img src="'+d+`" alt="" loading="lazy"></p><h3 id="jpackage-命令帮助" tabindex="-1"><a class="header-anchor" href="#jpackage-命令帮助" aria-hidden="true">#</a> jpackage 命令帮助</h3><p>在 Jdk14 中，新增 jpackage 特性。借助 jpackage，可以在特定平台上以用户习惯的方式安装或卸载 Java 应用程序，并且，它支持 Windows 上的 msi 和 exe 格式、MacOS 上的 pkg 和 dmg 格式、Linux 上的 deb 和 rpm 格式。在安装用 jpackage 构建的应用程序时，最终用户应该不会注意到任何不同。进入 JDK 的 bin 目录，在该目录下打开 CMD 窗口，查看 jpackage 使用帮助。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> .\\jpackage --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),t=e(`<h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>生成适合主机系统的应用程序包：
    对于模块化应用程序：
        jpackage -n name -p modulePath -m moduleName/className
    对于非模块化应用程序：
        jpackage -i inputDir -n name \\
            --main-class className --main-jar myJar.jar
    从预构建的应用程序映像：
        jpackage -n name --app-image appImageDir
生成应用程序映像：
    对于模块化应用程序：
        jpackage --type app-image -n name -p modulePath \\
            -m moduleName/className
    对于非模块化应用程序：
        jpackage --type app-image -i inputDir -n name \\
            --main-class className --main-jar myJar.jar
    要为 jlink 提供您自己的选项，请单独运行 jlink：
        jlink --output appRuntimeImage -p modulePath -m moduleName \\
            --no-header-files [&lt;additional jlink options&gt;...]
        jpackage --type app-image -n name \\
            -m moduleName/className --runtime-image appRuntimeImage
生成 Java 运行时程序包：
    jpackage -n name --runtime-image &lt;runtime-image&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实战-打包成-exe" tabindex="-1"><a class="header-anchor" href="#实战-打包成-exe" aria-hidden="true">#</a> 实战（打包成 exe）：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> .\\jpackage --type exe -i G:\\project\\demo1\\target -n demo -d  G:\\project\\demo1\\target --main-class com.example.demo.DemoApplication --main-jar demo-0.0.1-SNAPSHOT.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用上打包命令报错。信息如下：</p><p><img src="`+l+'" alt="" title="image.png" loading="lazy"></p><p>安装打包工具 wixtool。<a href="%22%E4%B8%8B%E8%BD%BD%E9%93%BE%E6%8E%A5%22">https://wixtoolset.org/releases/</a></p>',7);function c(p,o){return i(),n("div",null,[r,s("more"),t])}const g=a(m,[["render",c],["__file","10.Jdk14.html.vue"]]);export{g as default};
