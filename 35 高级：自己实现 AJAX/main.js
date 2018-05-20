window.jQuery = function(nodeOrSecletor){
    let nodes = {};
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}
window.jQuery.ajax = function(url,method,body,successFn,failFn){
    let request = new XMLHttpRequest();
    request.open(method,url)
    request.setRequestHeader("frank","18");
    request.setRequestHeader("Content-Type","x-www-form-urlencoded");
    request.send(body)
    request.onreadystatechange = (e)=>{
        if(request.readyState === 4){
            if(request.status < 300 & request.status >= 200){
                successFn.call(undefined,request.responseText)
            }else if(request.status > 400){
                failFn.call(undefined,request)
            }
        }
    };
}
window.$ = window.jQuery;
myButton.addEventListener("click",(e)=>{
    $.ajax(
        "/xxx",
        "get",
        "我偏要设置request第四部分",
        (responseText)=>{
            console.log("请求成功")
            let obj = JSON.parse(responseText)
            console.log(obj)
            console.log(obj.note.to)
        },
        (request)=>{
            console.log("请求失败",request)
        }
    );
    
})