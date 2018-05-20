//设置鼠标hover进出触发 显示横杠
var liTags = document.querySelectorAll(".topNavBar nav>ul>li");
for (let a = 0; a < liTags.length; a++) {
	liTags[a].onmouseenter = function (e) {
		e.currentTarget.classList.add("active");
	}
	liTags[a].onmouseleave = function (e) {
		e.currentTarget.classList.remove("active");
	}
}




// 将等待载入时的动画 隐藏
setTimeout(function () {
	siteWelcome.classList.remove("active");
}, 500);