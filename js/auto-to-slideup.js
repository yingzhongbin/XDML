!function () {
    let specialTags = document.querySelectorAll('[data-x]');
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add("offset");
    }
    window.addEventListener("scroll",function (e) {
        //设置界面滑动触发nav li
        let specialTags = document.querySelectorAll('[data-x]');
        let minIndex = 0;
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(window.scrollY - specialTags[minIndex].offsetTop) > Math.abs(specialTags[i].offsetTop - window.scrollY)) {
                minIndex = i;
            }
        }
        specialTags[minIndex].classList.remove("offset");
        let id = specialTags[minIndex].id;
        let a = document.querySelector("a[href='#" + id + "']");
        let li = a.parentNode;
        let childrenLis = li.parentNode.children;
        for (let i = 0; i < childrenLis.length; i++) {
            childrenLis[i].classList.remove("highlight");
        }
        li.classList.add("highlight");
    })
    //设置名片初始动画
    setTimeout(() => {
        let minIndex = 0;
        specialTags[minIndex].classList.remove("offset");
    }, 500);
}.call()