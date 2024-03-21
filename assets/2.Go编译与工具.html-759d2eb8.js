import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as d,b as a}from"./app-ef0b4d9d.js";const r={},i=a(`<h1 id="go-build" tabindex="-1"><a class="header-anchor" href="#go-build" aria-hidden="true">#</a> go build</h1><table><thead><tr><th>附加参数</th><th>备注</th></tr></thead><tbody><tr><td>-v</td><td>编译时显示包名</td></tr><tr><td>-p n</td><td>开启并发编译</td></tr><tr><td>-a</td><td>强制重新构建</td></tr><tr><td>-race</td><td>开启静态监测</td></tr></tbody></table><h1 id="go-run" tabindex="-1"><a class="header-anchor" href="#go-run" aria-hidden="true">#</a> go run</h1><p>go run会编译源码，并且执行源码的main()函数。</p><h1 id="go-install" tabindex="-1"><a class="header-anchor" href="#go-install" aria-hidden="true">#</a> go install</h1><p>go install的功能和go build类似，附加参数绝大多数都可以与go build通用。goinstall只是将编译的中间文件放在GOPATH的pkg目录下，以及固定地将编译结果放在GOPATH的bin目录下。</p><h1 id="go-get" tabindex="-1"><a class="header-anchor" href="#go-get" aria-hidden="true">#</a> go get</h1><p>获取源码并编译，格式如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get github.com/gin-contrib/sse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相关参数：</p><table><thead><tr><th>参数</th><th>备注</th></tr></thead><tbody><tr><td>-v</td><td>显示操作流程的日志及信息，方便检查错误</td></tr><tr><td>-u</td><td>下载丢失的包，但不会更新已经存在的包</td></tr><tr><td>-d</td><td>只下载，不安装</td></tr><tr><td>-insecure</td><td>允许使用不安全的HTTP方式进行下载操作</td></tr></tbody></table><h1 id="go-test" tabindex="-1"><a class="header-anchor" href="#go-test" aria-hidden="true">#</a> go test</h1><p>要开始一个单元测试，需要准备一个go源码文件，在命名文件时需要让文件必须以_test结尾。单元测试源码文件可以由多个测试用例组成，每个测试用例函数需要以Test为前缀要开始一个单元测试，需要准备一个go源码文件，在命名文件时需要让文件必须以_test结尾。单元测试源码文件可以由多个测试用例组成，每个测试用例函数需要以Test为前缀，例如：，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func TestXXX(t *testing.T)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go test xxx_test.go

##运行指定方法,TestA为方法名
go test -run TestA xxx_test.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),s=[i];function n(o,l){return e(),d("div",null,s)}const g=t(r,[["render",n],["__file","2.Go编译与工具.html.vue"]]);export{g as default};
