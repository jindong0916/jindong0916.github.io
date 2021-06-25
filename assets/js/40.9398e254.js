(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{542:function(a,s,n){"use strict";n.r(s);var t=n(6),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("brew "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nginx\n\nDocroot is: /usr/local/var/www\n\nnginx will load all files "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" /usr/local/etc/nginx/servers/.\n\nbrew services start nginx\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('对 nginx.conf 文件进行配置：\n----------\n# 在配置文件的顶级main部分，代表worker角色的工作进程的个数\nworker_processes  1;\n# 错误日志\nerror_log       /usr/local/var/log/nginx/error.log warn;\n# 进程文件\npid        /usr/local/var/run/nginx.pid;\nevents {\n    # 写在events部分。每一个worker进程能并发处理（发起）的最大连接数\n    worker_connections  256;\n}\nhttp {\n    # 文件扩展名与文件类型映射表\n    include       mime.types;\n    # 设定默认文件类型\n    default_type  application/octet-stream;\n    # 为Nginx服务器设置详细的日志格式\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n    \'$status $body_bytes_sent "$http_referer" \'\n    \'"$http_user_agent" "$http_x_forwarded_for"\';\n    #access log 记录了哪些用户，哪些页面以及用户浏览器、ip和其他的访问信息\n    # access log 路径\n    access_log      /usr/local/var/log/nginx/access.log main;\n    # 如果port_in_redirect为off时，那么始终按照默认的80端口；如果该指令打开，那么将会返回当前正在监听的端口。\n    port_in_redirect off;\n    # 开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。\n    sendfile        on;\n    # 配置信息文件夹，如 Nginx 安装目录不同请自行修改\n    include /usr/local/etc/nginx/conf.d/*.conf;\n}\n')])])]),n("h2",{attrs:{id:"启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" nginx\n")])])]),n("h2",{attrs:{id:"停止"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#停止"}},[a._v("#")]),a._v(" 停止")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" nginx -s stop\n")])])]),n("p",[a._v("/usr/local/var/www")]),a._v(" "),n("h2",{attrs:{id:"卸载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[a._v("#")]),a._v(" 卸载")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("brew uninstall nginx\n")])])]),n("p",[a._v("手动删除 www、etc 目录")]),a._v(" "),n("p",[a._v("/usr/local/etc/nginx 目录")]),a._v(" "),n("h2",{attrs:{id:"linux-安装-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装-nginx"}},[a._v("#")]),a._v(" Linux 安装 Nginx")]),a._v(" "),n("p",[a._v("1、切换 root")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" - root\nWelc0me1\n")])])]),n("p",[a._v("2、从一台 Linux 复制文件到另一台 Linux")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" root@ip:/root/nginx-1.14.0-tar.gz /root\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" root@ip:/root/pcre-8.38-tar.gz /root\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" root@ip:/root/zlib-1.2.11-tar.gz /root\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" root@ip:/root/openssl-1.1.1-tar.gz /root\n")])])]),n("p",[a._v("3、解压")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf pcre-8.38-tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" pcre-8.38\n\n./configure\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),n("p",[a._v("同样的解压")]),a._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[a._v("zlib-1.2.11-tar.gz\n\nopenssl-1.1.1-tar.gz\n\nnginx-1.14.0-tar.gz\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);