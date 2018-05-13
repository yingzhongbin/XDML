index2.html server2.js     无获取数据库
index3.html server3.js     有获取数据库
index4.html server4.js     使用form的POST方法
index5.html server5.js     修改页面数据
index6.html server6.js     有获取数据库
index6.html server6.js     删除script标签
index7.html server7.js     添加响应函数
index8.html server8.js     添加随机响应函数
index9.html server9.js     使用jQuery的JSONP函数
index10.html server10.js   用代码实现 frank.com:8001 和 jack.com:8002 之间的 JSONP 请求
第一步：在/etc/hosts里添加
127.0.0.1	jack.com
127.0.0.1	frank.com
第二步：命令行
node server10.js 8001
再开一个界面
node server10.js 8002
浏览器打开
页面1：http://jack.com:8001/
页面2：http://frank.com:8002/
在页面1中调用http://frank.com的响应