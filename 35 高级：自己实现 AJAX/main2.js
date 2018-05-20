window.jQuery = function(nodeOrSecletor){
    let nodes = {};
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}
window.jQuery.ajax = function(options){
    url = options.url;
    method = options.method;
    body = options.body;
    successFn = options.successFn;
    failFn = options.failFn;
    headers = options.headers;
    let request = new XMLHttpRequest();
    request.open(method,url)
    for(key in headers){
        request.setRequestHeader(key,headers[key]);
    }
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
    $.ajax({
        "url":"/xxx",
        "method":"get",
        "headers":{
            "Content-Type":"application/x-www-form-urlencoded",
            "frank":"18"
        },
        "body":"我偏要设置request第四部分",
        "successFn":(responseText)=>{
            console.log("请求成功")
            let obj = JSON.parse(responseText)
            console.log(obj)
            console.log(obj.note.to)
        },
        "failFn":(request)=>{
            console.log("请求失败",request)
        }
    });
})