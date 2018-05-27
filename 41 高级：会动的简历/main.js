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
/*
* 来点代码高亮吧
*/
.token.selector{
  color:#690;
}
.token.property{
  color:#905;
}
.token.punctuation{
  color:#999;
}
/*
*  加点3D效果
*/
#code{
  transform:rotate(360deg);
}
/*
* 不玩了，我来介绍一下我自己吧
* 我需要一张白纸
*/
#code{
  width:44%;
  height:100vh;
  position:fixed;
  left:0;
}
`;
var text2 = `#paper{
  width:44%;
  height:100vh;
  position:fixed;
  right:0;
}`;
var md = `# 自我介绍
---------        
     
###   &nbsp;&nbsp;我叫 应忠彬
###   &nbsp;&nbsp;1992 年 5 月出生
###   &nbsp;&nbsp;中国计量大学 毕业
###   &nbsp;&nbsp;自学前端半年
###   &nbsp;&nbsp;希望应聘前端开发岗位
# 技能介绍
---------        
    

###   &nbsp;&nbsp;熟悉 JavaScript CSS
# 项目介绍
---------       
     

###   &nbsp;&nbsp;轮播
###   &nbsp;&nbsp;简历
###   &nbsp;&nbsp;画板
# 联系方式
---------  
    

###  &nbsp;&nbsp;QQ 1067339571
###  &nbsp;&nbsp;Email 1067339571@qq.com
###  &nbsp;&nbsp;手机 15757166472
`;
var text3 = `#paper hr{
  width: 100px;
  margin-bottom: 20px;
}
#paper h1{
  margin-top: 20px;
}
#paper h3{
  line-height: 20px;
}`;
writeCode("",text,()=>{
  createPaper(text,()=>{
    writeCode(text,text2,()=>{
      writeMarkDown("",md,()=>{
        writeCode(text+text2,text3,()=>{
        })
      })
    }) 
  })
}) 

/* 把code写到#code和style标签里 */
function writeCode(prefix,text,fn) {

  let domCode = document.querySelector("#code"); 
  let n = 0;
  let timerId = setInterval(() => {
    n++;
    domCode.innerHTML = Prism.highlight(prefix + text.substring(0, n), Prism.languages.css, 'css');
    styleTag.innerText = prefix + text.substring(0, n);
    domCode.scrollTop = domCode.scrollHeight;
    if (n >= text.length) {
      window.clearInterval(timerId)
       fn();
    }
  }, 10);
}
function writeMarkDown(prefix,text,fn) {
  let domPaper = document.querySelector("#paper"); 
  let n = 0;
  let timerId = setInterval(() => {
    n++;
    domPaper.innerHTML = marked(prefix + text.substring(0, n));
    domPaper.scrollTop = domPaper.scrollHeight;
    if (n >= text.length) {
      window.clearInterval(timerId)
       fn();
    }
  }, 10);
}
function createPaper(preResult,fn) {
  var paper = document.createElement("div")
  paper.id = "paper"
  document.body.appendChild(paper)
  fn()
}

