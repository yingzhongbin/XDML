
//设置鼠标进出触发
var liTags = document.querySelectorAll(".topNavBar nav>ul>li");
for(let a = 0;a<liTags.length;a++){
	liTags[a].onmouseenter = function(e){
		e.currentTarget.classList.add("active");
	}
	liTags[a].onmouseleave = function(e){
		e.currentTarget.classList.remove("active");
	}
}

let specialTags = document.querySelectorAll('[data-x]');
for(let i = 0;i < specialTags.length; i++){
	specialTags[i].classList.add("offset");
}

//设置名片初始动画
// let specialTags = document.querySelectorAll('[data-x]');
setTimeout(() => {
	let minIndex = 0;
	specialTags[minIndex].classList.remove("offset");
},500);


//重新设置浏览器的NAV li点击锚点动作
var aTags = document.querySelectorAll(".topNavBar nav>ul>li>a");
for(let a = 0;a<aTags.length;a++){
	aTags[a].onclick = function(e){
		e.preventDefault();//阻止默认动作
		let a = e.currentTarget;//取得当前监听对象
		let attr = a.getAttribute("href");//取得对象属性
		let target = document.querySelector(attr);//搜索属性所在对象
		let n =25;
		let currentTop = window.scrollY;
		let targetTop = target.offsetTop;//-80;
		let s = targetTop - currentTop;
		let distance = s/n;
		let i = 1;
		function animate(time) {
			requestAnimationFrame(animate);
			TWEEN.update(time);
		}
		requestAnimationFrame(animate);
		var coords = { y: currentTop }; // Start at (0, 0)
		var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
			.to({ y: targetTop }, 500) // Move to (300, 200) in 1 second.
			.easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
			.onUpdate(function() { // Called after tween.js updates 'coords'.
			// Move 'box' to the position described by 'coords' with a CSS translation.
			// window.scrollTo(0,coords.y);
			window.scrollTo(0,coords.y);
			})
			.start(); // Start the tween immediately.
	}
	
}
window.onscroll = function(e){
	//设置topNavBar的sticky状态
	if(window.scrollY > 0){
		topNavBar.classList.add("sticky");
	}else{
		topNavBar.classList.remove("sticky");
	}
	//设置界面滑动触发nav li
	let specialTags = document.querySelectorAll('[data-x]');
	let minIndex = 0;
	for(let i = 1;i < specialTags.length; i++){
		console.log(specialTags[i].offsetTop);
		if(Math.abs(window.scrollY - specialTags[minIndex].offsetTop) > Math.abs(specialTags[i].offsetTop - window.scrollY)){
			minIndex = i;
		}
	}
	specialTags[minIndex].classList.remove("offset");
	let id = specialTags[minIndex].id;
	let a = document.querySelector("a[href='#"+id+"']");
	let li = a.parentNode;
	let childrenLis = li.parentNode.children;
	for(let i = 0;i<childrenLis.length;i++){
		childrenLis[i].classList.remove("highlight");
	}
	li.classList.add("highlight");
}
portfolioAll.onclick=function(){
	portfolioBar.className = "bar state-1";
};
portfolioFramework.onclick=function(){
	portfolioBar.className = "bar state-2";
};
portfolioVallina.onclick=function(){
	portfolioBar.className = "bar state-3";
};
setTimeout(function(){
	siteWelcome.classList.remove("active");
},500);