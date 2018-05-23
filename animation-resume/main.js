var text = `/*
* 面试官你好！我是应忠彬
* 我将以动画的形式来介绍我自己
* 我就用代码来介绍吧
* 首先准备一些样式
*/

*{
transition:all .5s;
}
/*
* 白色的背景太单调了，我们来添加一个背景，如何？
*/
body{
   background-color: #3C5264;
   font-size:12px;
   padding:16px;
}
/*
* 代码就这样放在页面中，无处可去，给它一个家吧.
*/
#code{
  background-color:#363636;
  border:1px solid white;
  padding:16px;
}
`;
var n = 0;
var timer = setInterval(()=>{
  n++;
  code.innerHTML = text.substring(0,n);
  code.innerHTML = code.innerHTML.replace("body",'<span style="color:red;">body</span>');
  styleTag.innerText = text.substring(0,n);
  while(n>text.length){
    clearInterval(timer)
    
  }
},10);
