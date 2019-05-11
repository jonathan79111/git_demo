var oneadVideo = document.getElementById('oneadVideo');
var mutedButton= document.getElementById('mutedButton');
var bar = document.querySelectorAll(".bar");
var onead = document.getElementById("div-onead-ad");
var playBtn = document.getElementById('play-button');
var windosHeight = window.innerHeight;//抓視窗的高
var oc = document.getElementById("onead_container");//宣告
var inreadLayout = document.getElementById("inread_layout");
var gsPlayer = document.getElementById('gsplayer');
var bannerWarrper = document.getElementById('banner_wrapper');
var bbTop=oc.offsetTop;//抓物件的位子
var all=0;//宣告一個全域變數
// window.onscroll = someFunction; //也可以寫成 window.onscroll=()=>{} 箭頭函數X

console.log("video.ended:",Boolean(oneadVideo.ended));


//滑動到廣告去展開影片效果
var open = false; //初始宣告型別
open = false;
window.addEventListener("scroll", function (e) {
    var windowtop = window.scrollY;
    all = windowtop + windosHeight;
    if (all >= bbTop && all <= 1700) {
        playBtn.style.display = "block";
        inreadLayout.style.paddingBottom = "56.2%";
        gsPlayer.style.transform = "translateX(-34%)";
        bannerWarrper.style.transform = "scale(0.396094)";
        open = true;
    }
    else if (open) {
        oneadVideo.play();
        playBtn.style.display = "none";
        inreadLayout.style.paddingBottom = "140%";
        gsPlayer.style.transform = "translateX(0%)";
        bannerWarrper.style.transform = "scale(0.585938) translateY(358px)";
        // this.removeEventListener("scroll",this,false);
        // window.removeEventListener("scroll", someFunction);
    }
});

//影片結束回到初始位置
    oneadVideo.addEventListener("ended",()=>{
        playBtn.style.display = "block";
        inreadLayout.style.paddingBottom = "56.2%";
        gsPlayer.style.transform = "translateX(-34%)";
        bannerWarrper.style.transform = "scale(0.396094)";
    })

//影片自次播放


//點擊banner_warp跳到宣傳頁面
//點擊跳至連結
onead.addEventListener("click", function (e) {
    window.open("https://www.facebook.com/applausemovietaiwan/videos/771300709916739");
    console.log('opennews')
});


//滑動結束後再次點開影片事件
gsPlayer.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    oneadVideo.play();
    if (oneadVideo.ended) {
        playBtn.style.display = "block";
        inreadLayout.style.paddingBottom = "56.2%";
        gsPlayer.style.transform = "translateX(-34%)";
        bannerWarrper.style.transform = "scale(0.396094)";
    }
    else {
        oneadVideo.play();
        playBtn.style.display = "none";
        inreadLayout.style.paddingBottom = "140%";
        gsPlayer.style.transform = "translateX(0%)";
        bannerWarrper.style.transform = "scale(0.585938) translateY(358px)";
    }
});
//調整靜音
var mute = false; //初始宣告型別
mute = false;
mutedButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    mute = !mute;
    oneadVideo.muted = mute;
    if (mute) {
        // originVolume = oneadVideo.volume;
        oneadVideo.volume = 0;
        for (var i = 0; i <= 3; i++) {
            bar[i].style.background = "linear-gradient(rgb(189, 188, 188),rgb(57, 57, 57))";
        }
    }
    else {
        oneadVideo.volume = 1;
        console.log(oneadVideo.volume);
        for (var i = 0; i <= 3; i++) {
            bar[i].style.background = " linear-gradient(rgb(94, 255, 0),green)";
        }
    }
});


//各個事件load到頁面
window.addEventListener("load", function (e) {
    oneadVideo.volume = 0;
    var time;
    time = setInterval(function () {
        for (var i = 0; i <= 3; i++) {
            var num = Math.ceil(Math.random() * 15);
            bar[i].style.height = num + "px";
        }
    }, 200);
});
