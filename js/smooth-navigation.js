!function(){
    //重新设置浏览器的NAV li点击锚点动作
    let view = document.querySelector(".topNavBar");
    var aTags = view.querySelectorAll(".topNavBar nav>ul>li>a");
    for (let a = 0; a < aTags.length; a++) {
        aTags[a].onclick = function (e) {
            e.preventDefault();//阻止默认动作
            let a = e.currentTarget;//取得当前监听对象
            let attr = a.getAttribute("href");//取得对象属性
            let target = document.querySelector(attr);//搜索属性所在对象
            let n = 25;
            let currentTop = window.scrollY;
            let targetTop = target.offsetTop;//-80;
            let s = targetTop - currentTop;
            let distance = s / n;
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
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    // Move 'box' to the position described by 'coords' with a CSS translation.
                    // window.scrollTo(0,coords.y);
                    window.scrollTo(0, coords.y);
                })
                .start(); // Start the tween immediately.
        }
    }
}.call()
