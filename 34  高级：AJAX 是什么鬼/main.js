myButton.addEventListener("click",(e)=>{
    let request = new XMLHttpRequest();
    request.onreadystatechange = (e)=>{
        if(request.readyState === 4){
            if(request.status < 300 & request.status >= 200){
                console.log("请求成功")
                let text = request.responseText;
                let obj = JSON.parse(text)
                console.log(obj)
                console.log(obj.note.to)
            }else if(request.status > 400){
                console.log("请求失败")
            }
        }
    };
    request.open("get","/xxx")
    request.send()
})