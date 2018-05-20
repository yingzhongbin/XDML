var APP_ID = 'YVCVHRvVQFuQ7kXSfXxCFbLN-gzGzoHsz';
var APP_KEY = 'CSk75vzciKe4uMeBW4eB9P9h';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
var messageList = document.querySelector("#messageList")
var myForm = document.getElementById("postMessageForm");
myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let content = myForm.querySelector("input[name='content']").value;
    let name = myForm.querySelector("input[name='name']").value;
    
    // 创建Messages表
    var Messages = AV.Object.extend('Messages');
    // 在表中创建一行数据
    var messages = new Messages();
    // 数据内容是 Hello World!
    // 如果成功 alert
    messages.save({
        content: content,
        name:name,
    }).then(function (object) {
        let li = document.createElement("li")
        li.textContent = content+":   "+name;
        messageList.appendChild(li);
        myForm.querySelector("input[name='content']").value = "";
        myForm.querySelector("input[name='name']").value = "";
        // alert('LeanCloud Rocks!');
    })
});
var query = new AV.Query('Messages');
query.find().then(function (messages) {
  messages.forEach(function(message) {
    let content = message.attributes.content
    let name = message.attributes.name
    let li = document.createElement("li")
    li.textContent = content+":   "+name;
    messageList.appendChild(li);
  });
  return AV.Object.saveAll(todos);
}).then(function(messages) {
    console.log(messages)
  // 更新成功
}, function (error) {
  // 异常处理
});
