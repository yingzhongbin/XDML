!function(){
    $buttons = $("button");
    let duration = 50;
    $buttons.on("click",function(e){
        $btn = $(e.currentTarget);
        speed = $btn.attr("data-speed");
        switch(speed){
            case "slow":duration = 100;break;
            case "normal":duration = 50;break;
            case "fast":duration = 10;break;
        }
        $btn.addClass("active").siblings(".active").removeClass("active");
        console.log(duration)
    });
    
    
    function writeCode(prefix,code,fn){
        let styleTag = document.querySelector("#styleTag");
        let container = document.querySelector("#code");
        var n = 1;

        let timer = setTimeout(function run(){
            n++;
            styleTag.innerHTML = code.substring(0,n);
            container.innerHTML = code.substring(0,n);
            //important 如果设置了超出这个容器可滚动的值, scrollTop 会被设为最大值.
            container.scrollTop = container.scrollHeight;
            if(n<code.length){
                setTimeout(run,duration)
            }
        },duration);
    }

    let code = `/* 
    首先，先画皮卡丘的皮！
*/
.preview-wrapper{
    background-color: #FFEC00;
}
#pikachu{
    width: 450px;
    height: 350px;
    background-color: #FFEC00;
    position: relative;
    overflow: hidden;
    margin-top: -60px;
}
/* 
画个小鼻子
 */
.nose{
    position: absolute;
    display: block;
    border:10px solid transparent;
    border-top: 10px black solid;
    margin-top: 134px;
    left: 50%;
    margin-left: -11px;
}
.nose:before{
    content: "";
    width: 22px;
    height: 5px;
    display: block;
    border-top-left-radius: 11px 5px;
    border-top-right-radius: 11px 5px; 
    background-color: black;
    top: -15px;
    left: -11px;
    position: absolute;
}
/* 
画出眼睛和眼珠
 */
.eye{
    width: 60px;
    height: 60px;
    border: 3px solid black;
    background-color: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    top:100px;
    z-index:1;
}
.eye.left{
    left:50%;
    margin-left: -141px;
}
.eye.right{
    right:50%;
    margin-right: -141px;
}
.eye:after{
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    border: 3px solid black;
    background-color: #fff;
    border-radius: 50%;
    left:6px;
}
/* 
画出小腮红
 */
.cheek{
    width: 82px;
    height: 82px;
    border: 3px solid black;
    background-color: #F00;
    position: absolute;
    border-radius: 50%;
    top:200px;
}
.cheek.left{
    left:50%;
    margin-left: -198px;
}
.cheek.right{
    right:50%;
    margin-right: -198px;
}
/* 
画出上嘴唇
 */
.ridiculousMouth{
    width: 228px;
    height: 180px;
    position: absolute;
    left: 50%;
    margin-left: -114px;
    margin-top: 165px;
    overflow: hidden;
    background-color: #FFEC00;
}
.ridiculousMouth .lip.left{
    /* content: ""; */
    width: 80px;
    height: 25px;
    border: 3px solid black;
    border-top:none;
    border-right: none;
    border-bottom-left-radius: 66px 24px;
    background-color: #FFEC00;
    position: absolute;
    transform: rotate(-25deg);
    left:50%;
    margin-left: -83px;
    z-index: 1;
    top:-4px;
}
.ridiculousMouth .lip.right{
    content: "";
    width: 80px;
    height: 25px;
    border: 3px solid black;
    border-top:none;
    border-left: none;
    border-bottom-right-radius: 66px 24px;
    background-color: #FFEC00;
    position: absolute;
    transform: rotate(25deg);
    right:50%;
    margin-right: -83px;
    z-index: 1;
    top:-4px;
}
.ridiculousMouth .lip.left:before{
    content: "";
    width: 40px;
    height: 20px;
    display: block;
    background-color: #FFEC00;
    position: absolute;
    top: -16px;
    left: 0px;
}
.ridiculousMouth .lip.right:before{
    content: "";
    width: 40px;
    height: 20px;
    display: block;
    background-color: #FFEC00;
    position: absolute;
    top: -16px;
    right: 0px;
}
/* 
画出下巴
*/
.ridiculousMouth .inner{
    width: 228px;
    height: 800px;
    position: absolute;
    background-color: #A80000;
    margin-top:-645px;
    border-bottom-left-radius: 118px 800px;
    border-bottom-right-radius: 118px 800px;
    border: 4px solid black;
    overflow: hidden;
    margin-left:-4px;
}
/* 
画出舌头
*/
.ridiculousMouth .inner:after{
    content: '';
    position: absolute;
    display: block;
    width: 130px;
    height: 140px;
    top: 673px;
    background-color: #FF485F;
    left: 50%;
    margin-left:-65px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
}`;
    writeCode("",code,"");

}.call();