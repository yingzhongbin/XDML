// jQuery之ajax 之 then
myButton.addEventListener("click",(e)=>{
    console.log($.ajax)
    $.ajax({
        "url":"xxx",
        "method":"get",
    }).then(
        (response)=>{
        console.log(response.note)
        },
        ()=>{
            console.log("error")
        });
})