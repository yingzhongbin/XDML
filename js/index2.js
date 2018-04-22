var liTags = document.querySelectorAll(".topNavBar nav>ul>li");
	for(let a = 0;a<liTags.length;a++){
		liTags[a].onmouseenter = function(e){
			// console.log(e.currentTarget);
			e.currentTarget.classList.add("active");
		}
	liTags[a].onmouseleave = function(e){
		//   console.log(e.currentTarget);
			e.currentTarget.classList.remove("active");
		}
	}
var aTags = document.querySelectorAll(".topNavBar nav>ul>li>a");
for(let a = 0;a<aTags.length;a++){
	aTags[a].onclick = function(e){
		e.preventDefault();
		let a = e.currentTarget;
		let attr = a.getAttribute("href")
		
		let target = document.querySelector(attr);
		console.log(target.offsetTop);
		window.scrollTo(0,target.offsetTop-80);
	}
	
}
window.onscroll = function(e){
	if(window.scrollY > 0){
		topNavBar.classList.add("sticky");
	}else{
		topNavBar.classList.remove("sticky");
	}
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
},100);