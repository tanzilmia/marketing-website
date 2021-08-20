var menuBtn = document.getElementById('menu__btn');
var sideNav = document.getElementById('side__nav');

sideNav.style.right = "-250px"

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0"
    }
    else{
        sideNav.style.right = "-250px"
    }
}











































































