var liTags = document.querySelectorAll(".topNavBar nav>ul>li");
        // console.log(liTags);
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
    



		window.onscroll = function(e){
			if(window.scrollY > 0){
				topNavBar.classList.add("sticky");
			}else{
				topNavBar.classList.remove("sticky");
			}
			// console.log(window.scrollY);
		}
		topNavBar.classList.add();
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