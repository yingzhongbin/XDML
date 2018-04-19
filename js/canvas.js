//初始化数据
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var onDown = false;//默认不按下
var usingEraser = false;//默认画画
var lastPoint = {x:-100,y:-100};
var canvaColor = "red";//默认画笔颜色
var lineWidth = 4;//默认画笔粗细
var eraser = document.getElementById("eraser");
var brush = document.getElementById("brush");
var del = document.getElementById("del");
var download = document.getElementById("download");
//设置画布尺寸
autoSetCanvasSize(canvas);
//设置画布背景
setCanvasBgc(context);
//监听用户事件
listenToUser(canvas);

function listenToUser(canvas){
  if(document.body.ontouchstart === undefined){
    canvas.onmousedown = function(e){
      var x = e.clientX;
      var y = e.clientY;
      onDown = true;
      if(!usingEraser){//默认画画
        drawArc(x,y,lineWidth/2-0.3,canvaColor);
        // console.log(usingEraser);
      }else{
        drawArc(x,y,10,"white");
        // console.log(usingEraser);
      }
      lastPoint = {x:x,y:y};
    };
    canvas.onmousemove = function(e){
      var x = e.clientX;
      var y = e.clientY;
      if(onDown){//按下了
        if(!usingEraser){//默认画画
          drawArc(x,y,lineWidth/2-0.1,canvaColor);
          drawLine(lastPoint.x,lastPoint.y,x,y,lineWidth,canvaColor);
        }else{
          drawArc(x,y,10,"white");
          drawLine(lastPoint.x,lastPoint.y,x,y,20,"white")
        }
      }
      lastPoint = {x:x,y:y};//更新最后一个点
    };
    canvas.onmouseup = function(e){
      onDown = false;
    };
  }else{
    canvas.ontouchstart = function(e){
      var x = e.touches[0].clientX;
      var y = e.touches[0].clientY;
      onDown = true;
      if(!usingEraser){//默认画画
        drawArc(x,y,lineWidth/2-0.3,canvaColor);
        // console.log(usingEraser);
      }else{
        drawArc(x,y,lineWidth/2-0.3,"white");
        // console.log(usingEraser);
      }
      lastPoint = {x:x,y:y};
    };
    canvas.ontouchmove = function(e){
      var x = e.touches[0].clientX;
      var y = e.touches[0].clientY;
      if(onDown){//按下了
        if(!usingEraser){//默认画画
          drawArc(x,y,lineWidth/2-0.1,canvaColor);
          drawLine(lastPoint.x,lastPoint.y,x,y,lineWidth,canvaColor);
        }else{
          drawArc(x,y,lineWidth/2-0.1,"white");
          drawLine(lastPoint.x,lastPoint.y,x,y,lineWidth,"white")
        }
      }
      lastPoint = {x:x,y:y};//更新最后一个点
    };
    canvas.ontouchend = function(e){
      onDown = false;
    };
  };
  eraser.onclick = function(){
    usingEraser = true;
    eraser.classList.add("active");
    brush.classList.remove("active");
  };
  brush.onclick = function(){
    usingEraser = false;
    brush.classList.add("active");
    eraser.classList.remove("active");
  };
  thin.onclick = function(){
    //直接切换到绘画模式
    usingEraser = false;
    brush.classList.add("active");
    eraser.classList.remove("active");
    //设置html的class
    thin.classList.add("active");
    medium.classList.remove("active");
    thick.classList.remove("active");
    //设置画笔粗细属性
    lineWidth = 4;
  };
  medium.onclick = function(){
    //直接切换到绘画模式
    usingEraser = false;
    brush.classList.add("active");
    eraser.classList.remove("active");
    //设置html的class
    thin.classList.remove("active");
    medium.classList.add("active");
    thick.classList.remove("active");
    //设置画笔粗细属性
    lineWidth = 8;
  };
  thick.onclick = function(){
    //直接切换到绘画模式
    usingEraser = false;
    brush.classList.add("active");
    eraser.classList.remove("active");
    //设置html的class
    thin.classList.remove("active");
    medium.classList.remove("active");
    thick.classList.add("active");
    //设置画笔粗细属性
    lineWidth = 12;
  };
  //点击清空按钮
  del.onclick = function(){
    setCanvasBgc(context);
  };
  //点击下载按钮
  download.onclick = function(){
    var a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    document.body.appendChild(a);
    a.download = "我的图画";
    a.target = "_blank";
    a.click();
  };
  //按压颜色按钮触发
  red.onclick = function(){
    //直接切换到绘画模式
    usingEraser = false;
    brush.classList.add("active");
    eraser.classList.remove("active");
    //设置html显示的class
    red.classList.add("active");
    green.classList.remove("active");
    blue.classList.remove("active");

    canvaColor = "red";
  };
  green.onclick = function(){
    //直接切换到绘画模式
    usingEraser = false;
    brush.classList.add("active");
    eraser.classList.remove("active");
    //设置html显示的class
    green.classList.add("active");
    red.classList.remove("active");
    blue.classList.remove("active");

    canvaColor = "green";
  };
  blue.onclick = function(){
    //直接切换到绘画模式
    usingEraser = false;
    brush.classList.add("active");
    eraser.classList.remove("active");
    //设置html显示的class
    green.classList.remove("active");
    red.classList.remove("active");
    blue.classList.add("active");

    canvaColor = "blue";
  };
}
function drawLine(x1,y1,x2,y2,lineWidth,drawColor){
  context.beginPath();
  context.strokeStyle = drawColor;
  context.lineWidth = lineWidth;
  context.moveTo(x1,y1);
  context.lineTo(x2,y2);
  context.stroke();
  context.closePath();
}
function drawArc(x,y,radius,drawColor){
  context.fillStyle = drawColor;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI*2);
  context.fill();
  context.closePath();
}
function autoSetCanvasSize(canvas){
    setCanvasSize(canvas);
    window.onresize =function(){
        setCanvasSize(canvas);
    };
}
//设置画布尺寸
function setCanvasSize(canvas){
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}
//设置画布背景
function setCanvasBgc(context){
  //画布背景全覆盖
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
}