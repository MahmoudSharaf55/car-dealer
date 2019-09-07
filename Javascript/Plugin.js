/* nav bar animation */
function navBtns(ele) {
    var navBtn = document.getElementsByClassName('navBtns');
    for (var i = 0 ; i < navBtn.length ; i++){
        navBtn[i].style.color = null;
    }
    ele.style.color="#da2c2d";
}
/* search bar */
var x = true;
function searchBar() {
    var bar = document.getElementById('searchBar');
    if (x == true){
        bar.style.width = "179px";
        bar.style.visibility="visible";
        x = false;
    } else {
        bar.style.width = "0";
        setTimeout(function () {
            bar.style.visibility='hidden';
        },500);
        x = true;
    }
}
/* full side view search bar */
var y = true;
function fullSearchBar() {
    var bar = document.getElementById('full-searchBar');
    if (y == true){
        bar.style.visibility="visible";
        bar.style.width="316px";
        y = false;
    } else {
        bar.style.width = "0";
        setTimeout(function () {
            bar.style.visibility="hidden";
            bar.style.width="0";
        },300);
        y = true;
    }
}
/* spectial offer section animation */
const carNames = ["BMW I8 2018","Lamborghini Aventador 2018","MERCEDES BENZ SLC 43","Audi a7 premium plus","911 CARRERA MODELS"];
const carPrices = ["95 000 $","202 995 $","68 000 $","82 000 $","76 400 $"];
const cars = document.getElementsByClassName('car-offer');
var slideNum = 0;
offerSlider(slideNum);
function plusSlide() {
    if (slideNum==cars.length-1)
        slideNum=0;
    else
        slideNum++;
    offerSlider(slideNum);
}
function minusSlide() {
    if (slideNum==0)
        slideNum=cars.length-1;
    else
        slideNum--;
    offerSlider(slideNum);
}
function offerSlider(ele) {
    slideNum = ele;
    for (var i=0 ; i < cars.length ; i++){
        cars[i].style.opacity = null;
    }
    cars[ele].style.opacity = 1;
    document.getElementById('car-name').innerHTML = carNames[ele];
    document.getElementById('car-price').innerHTML = carPrices[ele];
    document.getElementById('car-img').src = "img/car_offer"+ele+".png";
}
/* end offer slider section */
function openNav() {
    document.getElementById("nav-full-content").style.width = "100%";
}
function closeNav() {
    document.getElementById("nav-full-content").style.width = "0";
}
// to top btn
window.onscroll = function () {
    var topBtn=document.getElementById("toTop");
    if(window.pageYOffset >= 500){
        topBtn.style.display='block';
    }
    else{
        topBtn.style.display='none';
    }
};
function toTop() {
    var id = setInterval(f,3);
    function f() {
        var curr = window.pageYOffset;
        if (curr == 0){
            clearInterval(id);
        }
        else {
            curr-=8;
        }
        window.scroll(0,curr);
    }
}
function sendSubscribe(email) {
    if (document.getElementById(email).value){
        showSnack('Thanks');
        document.getElementById(email).value = '';
    }
}
function showSnack(txt) {
    var snk = document.getElementById('snackbar');
    snk.innerHTML = txt;
    snk.style.visibility="visible";
    snk.style.animation="fadein 0.5s,fadeout 0.5s 2.5s";
    setTimeout(function () {
        snk.style.visibility="hidden";
        snk.style.animation="";
    },3000);
}