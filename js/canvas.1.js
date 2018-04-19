//1.初始化数据
var context = canvas.getContext('2d');
var paint = false;//是否选中绘画(默认绘画状态)
var using = false;//是否选中橡皮檫
var drawColor = "red";



//设置临时的canvas颜色style和宽度width
var style = {
  lineWidth:undefined
}
//设置画布尺寸
autoSetCanvasSize(canvas);
//设置画布背景
setCanvasBgc(canvas);
//监听用户事件
listenToUser(canvas);

function listenToUser(canvas){
  //默认画笔状态
  var eraserEnabled = false;
  var lastPoint = {};
  

  //初始设置颜色属性为red
  context.fillStyle = "red";
  context.strokeStyle = "red";
  //初始设置宽度为2
  context.lineWidth = 2;

  //绘画监听
  if(document.body.ontouchstart === undefined){
    
    canvas.onmousedown = function(event){
      var x = event.clientX;
      var y = event.clientY;
      if(eraserEnabled){//开启橡皮檫状态
        using = true;
        paint = false;
        drawArc(x,y,8,"white");
      }else{//开启画笔状态(默认)
        using = false;
        paint = true;
        drawArc(x,y,context.lineWidth/2,context.fillStyle);
      }
        lastPoint = {x:x,y:y};//设置开始点
    };
    canvas.onmousemove = function(event){
      var x = event.clientX;
      var y = event.clientY;
      var newPoint = {x:x,y:y};//滑动产生的新的点
      // console.log("newPoint",newPoint);
      if(eraserEnabled && using){//开启橡皮檫状态
           //已按下鼠标
          erase(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
          console.log((!eraserEnabled) && paint);
      }
      if((!eraserEnabled) && paint){//开启画笔状态
          drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y,context.strokeStyle,context.lineWidth);
          drawArc(newPoint.x,newPoint.y,context.lineWidth/2);
      }
      lastPoint = newPoint;
    };
    canvas.onmouseup = function(event){
      paint = false;
      using = false;
      lastPoint = {};
      newPoint = {};
    };
  // }else{
 

  //   canvas.ontouchstart = function(event){
  //     var x = event.touches[0].clientX;
  //     var y = event.touches[0].clientY;
  //     if(eraserEnabled){
  //       using = true;
  //       // lastPointForEraser = {x:x,y:y};
  //     }else{
  //       paint = true;
  //       lastPointForPaint = {x:x,y:y};
  //       // drawArc(x,y,context.lineWidth/2);
  //     }
  //   }
  //   canvas.ontouchmove = function(event){
  //     var x = event.touches[0].clientX;
  //     var y = event.touches[0].clientY;
  //     var newPoint = {x:x,y:y};
  //     if(eraserEnabled){
  //       if(using){
  //         if(lastPointForEraser.x ===undefined){
  //           lastPointForEraser = {x:x,y:y};
  //         }
  //         erase(lastPointForEraser.x,lastPointForEraser.y,newPoint.x,newPoint.y);
  //         lastPointForEraser = newPoint;
  //       }
  //     }else{
  //       if(paint){
  //          //划线
  //         // var newPoint = {x:x,y:y};
  //         console.log("我出现了");
  //         drawLine(lastPointForPaint.x,lastPointForPaint.y,newPoint.x,newPoint.y);
  //         drawArc(newPoint.x,newPoint.y,context.lineWidth/2);
  //         lastPointForPaint = newPoint;
  //       }
  //     }
  //   }
  //   canvas.ontouchend = function(event){
  //     paint = false;
  //     using = false;
  //     //清空最后一个点的位置信息
  //     lastPointForEraser ={
  //       x:undefined,
  //       y:undefined
  //     };
  //     lastPointForPaint ={
  //       x:undefined,
  //       y:undefined
  //     };
  //   }
  };
  //点击橡皮檫
  eraser.onclick = function(){
    //设置橡皮檫模式
    eraserEnabled = true;

    //设置html的class属性
    eraser.classList.add("active");
    brush.classList.remove("active");
  };
  //点击画笔
  brush.onclick = function(){
    //设置画笔模式
    eraserEnabled = false;
    //设置html的class属性
    brush.classList.add("active");
    eraser.classList.remove("active");
  };
  //点击绘笔不同粗细
  thin.onclick = function(){
    //设置html的class
    thin.classList.add("active");
    medium.classList.remove("active");
    thick.classList.remove("active");
    //设置画笔粗细属性
    context.lineWidth = 2;
  };
  medium.onclick = function(){
    //设置html的class
    thin.classList.remove("active");
    medium.classList.add("active");
    thick.classList.remove("active");
    //设置画笔粗细属性
    context.lineWidth = 5;
  };
  thick.onclick = function(){
    //设置html的class
    thin.classList.remove("active");
    medium.classList.remove("active");
    thick.classList.add("active");
    //设置画笔粗细属性
    context.lineWidth = 10;
  };
  //点击清空按钮
  del.onclick = function(){
    context.clearRect(0,0,canvas.width,canvas.height);
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
    //设置画布颜色
    context.fillStyle = "red";
    context.strokeStyle = "red";
    //设置html显示的class
    red.classList.add("active");
    green.classList.remove("active");
    blue.classList.remove("active");
    //直接切换到绘画模式
    eraserEnabled = false;
    brush.classList.add("active");
    eraser.classList.remove("active");
  };
  green.onclick = function(){
    //设置画布颜色
    context.fillStyle = "green";
    context.strokeStyle = "green";
    //设置html显示的class
    green.classList.add("active");
    red.classList.remove("active");
    blue.classList.remove("active");
    eraserEnabled = false;
    brush.classList.add("active");
    eraser.classList.remove("active");
    //换到绘画模式
    eraserEnabled = false;
    brush.classList.add("active");
    eraser.classList.remove("active");
  };
  blue.onclick = function(){
    //设置画布颜色
    context.fillStyle = "blue";
    context.strokeStyle = "blue";
    blue.classList.add("active");
    red.classList.remove("active");
    //设置html显示的class
    green.classList.remove("active");
    eraserEnabled = false;
    brush.classList.add("active");
    eraser.classList.remove("active");
    //换到绘画模式
    eraserEnabled = false;
    brush.classList.add("active");
    eraser.classList.remove("active");
  };
}

//自动设置画布尺寸
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
function setCanvasBgc(canvas){
  //临时保存画布属性
  style.fillStyle = context.fillStyle;
  style.strokeStyle = context.strokeStyle;
  //设置画布覆盖颜色属性
  context.fillStyle = "white";
  context.strokeStyle = "white";
  //画布背景全覆盖
  context.fillRect(0, 0, canvas.width, canvas.height);
  //更新为原来的画布颜色属性
  context.fillStyle = context.fillStyle;
  context.strokeStyle = context.fillStyle;
}
function erase(lastPointX,lastPointY,newPointX,newPointY){
  //擦除内容
  drawArc(newPointX,newPointY,8,"white");
  drawLine(lastPointX,lastPointY,newPointX,newPointY,"white",16);
}
function drawLine(x1,y1,x2,y2,drawColor,lineWidth){
    context.beginPath();
    context.strokeStyle = drawColor;
    context.lineWidth = lineWidth
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}
function drawArc(x,y,radius,drawColor){
  context.arc(x, y, radius, 0, Math.PI*2);
  context.fillStyle = drawColor;
  context.fill();
  context.closePath();
}