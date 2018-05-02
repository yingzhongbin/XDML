var $images = $(".images > img");
var n = 0;
var size = 4;//图片数量
setInterval(() => {
    leave($($images[N(n)]))
    .one("transitionend",function(e){
        prepare($(e.currentTarget));
    });
    enter($($images[N(n+1)]));
    n++;
}, 1000);
//取得第几个图片
function leave($node){
    $($images[N(n)]).removeClass("stay").addClass("leave");
    return $($images[N(n)]);
}
function prepare($node){
    $node.removeClass("leave").addClass("prepare");
}
function enter($node){
    $node.addClass("stay").removeClass("prepare");
}
function N(n){
    if(n===4){
        return 0;
    }else{
        return n%size;
    }
}