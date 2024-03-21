import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,b as d}from"./app-ef0b4d9d.js";const s={},l=d(`<h1 id="go交叉编译支持情况" tabindex="-1"><a class="header-anchor" href="#go交叉编译支持情况" aria-hidden="true">#</a> GO交叉编译支持情况</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 命令
go tool dist list
 
## 结果 
aix/ppc64
android/386
android/amd64
android/arm
android/arm64
darwin/amd64
darwin/arm64
dragonfly/amd64
freebsd/386
freebsd/amd64
freebsd/arm
freebsd/arm64
illumos/amd64
ios/amd64
ios/arm64
js/wasm
linux/386
linux/amd64
linux/arm
linux/arm64
linux/mips
linux/mips64
linux/mips64le
linux/mipsle
linux/ppc64
linux/ppc64le
linux/riscv64
linux/s390x
netbsd/386
netbsd/amd64
netbsd/arm
netbsd/arm64
openbsd/386
openbsd/amd64
openbsd/arm
openbsd/arm64
openbsd/mips64
plan9/386
plan9/amd64
plan9/arm
solaris/amd64
windows/386
windows/amd64
windows/arm
windows/arm64

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="windows编译linix包" tabindex="-1"><a class="header-anchor" href="#windows编译linix包" aria-hidden="true">#</a> windows编译linix包</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set GOOS=linux
## 改成你自己的架构
set GOARCH=amd64
go build main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：不要使用powershell,powershell编译无法使用,使用cmd</p><h1 id="windows编译exe" tabindex="-1"><a class="header-anchor" href="#windows编译exe" aria-hidden="true">#</a> windows编译exe</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set GOOS=windows
## 改成你自己的架构
set GOARCH=amd64
go build main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：不要使用powershell,powershell编译无法使用,使用cmd</p>`,8),a=[l];function r(v,m){return n(),e("div",null,a)}const b=i(s,[["render",r],["__file","Go交叉编译.html.vue"]]);export{b as default};
