//1.初始化数据
var context = canvas.getContext('2d');
var paint = false;
var using = false;
var style = {
  fillStyle:undefined,
  strokeStyle:undefined
}

//设置画布尺寸
autoSetCanvasSize(canvas);
//设置画布背景
setCanvasBgc(canvas);

//监听用户事件
listenToUser(canvas);



function listenToUser(canvas){
  var eraserEnabled = false;
  var paint = false;
  var using = false;
  var lastPoint ={
    x:undefined,
    y:undefined
  };

  context.fillStyle = "red";
  context.strokeStyle = "red";

  red.onclick = function(){
    context.fillStyle = "red";
    context.strokeStyle = "red";
    red.classList.add("active");
    green.classList.remove("active");
    blue.classList.remove("active");
  };
  green.onclick = function(){
    context.fillStyle = "green";
    context.strokeStyle = "green";
    green.classList.add("active");
    red.classList.remove("active");
    blue.classList.remove("active");
  };
  blue.onclick = function(){
    context.fillStyle = "blue";
    context.strokeStyle = "blue";
    blue.classList.add("active");
    red.classList.remove("active");
    green.classList.remove("active");
  };
  thin.onclick = function(){
    thin.classList.add("active");
    medium.classList.remove("active");
    thick.classList.remove("active");
    context.lineWidth = 1;
  };
  medium.onclick = function(){
    thin.classList.remove("active");
    medium.classList.add("active");
    thick.classList.remove("active");
    context.lineWidth = 3;
  };
  thick.onclick = function(){
    thin.classList.remove("active");
    medium.classList.remove("active");
    thick.classList.add("active");
    context.lineWidth = 5;
  };
  del.onclick = function(){
    context.clearRect(0,0,canvas.width,canvas.height);
  };
  download.onclick = function(){
    var a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    document.body.appendChild(a);
    a.download = "我的图画";
    a.target = "_blank";
    a.click();
  };
  if(document.body.ontouchstart === undefined){
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
  
    canvas.onmousemove = function(event){
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
  
    canvas.onmouseup = function(event){
      paint = false;
      using = false;
    };
  }else{
    canvas.ontouchstart = function(event){
      var x = event.touches[0].clientX;
      var y = event.touches[0].clientY;
      if(eraserEnabled){
        using = true;
      }else{
        paint = true;
        lastPoint = {x:x,y:y};
      }
    }
    canvas.ontouchmove = function(event){
      var x = event.touches[0].clientX;
      var y = event.touches[0].clientY;
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
    }
    canvas.ontouchend = function(event){
      paint = false;
      using = false;
    }
  }
  eraser.onclick = function(){
    
      eraserEnabled = true;
    eraser.classList.add("active");
    brush.classList.remove("active");
  };
  brush.onclick = function(){
      eraserEnabled = false;
    brush.classList.add("active");
    eraser.classList.remove("active");
  };
  
}

function autoSetCanvasSize(canvas){
  setCanvasSize(canvas);
  window.onresize =function(){
    setCanvasSize(canvas);
  };
}
function setCanvasSize(canvas){
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}

function erase(x,y){
  style.fillStyle = context.fillStyle;
  style.strokeStyle = context.strokeStyle;
  context.fillStyle = "white";
  context.strokeStyle = "white";
  context.fillRect(x-7,y-7,14,14);
  context.fillStyle = style.fillStyle;
  context.strokeStyle = style.strokeStyle; 

}
function drawLine(x1,y1,x2,y2){
    console.log(context.strokeStyle);
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

function setCanvasBgc(canvas){
  context.fillStyle = "white";
  context.strokeStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
}



