//1.初始化数据
var context = canvas.getContext('2d');
var paint = false;
var using = false;


//设置画布尺寸
autoSetCanvasSize(canvas);

//监听用户事件
listenToMouse(canvas);



function listenToMouse(canvas){
  var eraserEnabled = false;
  var paint = false;
  var using = false;
  var lastPoint ={
    x:undefined,
    y:undefined
  };
  eraser.onclick = function(){
    eraserEnabled = !eraserEnabled;
    actions.className = "actions e";
  };
  brush.onclick = function(){
    eraserEnabled = !eraserEnabled;
    actions.className = "actions";
  };
  canvas.onmousedown = function(event){
    var x = event.clientX;
    var y = event.clientY;
    if(eraserEnabled){
      using = true;
    }else{
      paint = true;
      lastPoint = {x:x,y:y};
    }
  };

  canvas.onmousemove = function(){
    var x = event.clientX;
    var y = event.clientY;
    if(eraserEnabled){
      if(using){
        erase(x,y);
      }
    }else{
      if(paint){
         //划线
        var newPoint = {x:x,y:y};
      drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
        lastPoint = newPoint;
      }
    }
};

canvas.onmouseup = function(){
    paint = false;
    using = false;
  };
}

function autoSetCanvasSize(canvas){
  SetCanvasSize(canvas);
  window.onresize =function(){
    SetCanvasSize(canvas);
  };
}
function SetCanvasSize(canvas){
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}

function erase(x,y){
  context.clearRect(x-5,y-5,10,10);
}
function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}




