var _this = this;
var oneadVideo = document.getElementById('oneadVideo');
var mutedButton = document.getElementById('mutedButton');
var bar = document.querySelectorAll(".bar");
;
var bannerClickArea = document.getElementById('banner_click_area');
var playBtn = document.getElementById('play-button');
var windosHeight = window.innerHeight;
var oc = document.getElementById("onead_container");
var inreadLayout = document.getElementById("inread_layout");
var gsPlayer = document.getElementById('gsplayer');
var bannerWarrper = document.getElementById('banner_wrapper');
var bbTop = oc.offsetTop;
var all = 0;
var Open = false;
Open = false;
var scrolling = function () { return window.addEventListener("scroll", function (e) {
    var windowtop = window.scrollY;
    all = windowtop + windosHeight;
    if (all >= bbTop && all <= 1700) {
        console.log('move');
        playBtn.style.display = "block";
        inreadLayout.style.paddingBottom = "56.2%";
        gsPlayer.style.transform = "translateX(-34%)";
        bannerWarrper.style.transform = "scale(0.396094)";
        Open = true;
    }
    else if (Open) {
        console.log('not move');
        oneadVideo.play();
        playBtn.style.display = "none";
        inreadLayout.style.paddingBottom = "140%";
        gsPlayer.style.transform = "translateX(0%)";
        bannerWarrper.style.transform = "scale(0.585938) translateY(358px)";
        window.removeEventListener("scroll", scrolling);
    }
}); };
oneadVideo.addEventListener("ended", function () {
    playBtn.style.display = "block";
    inreadLayout.style.paddingBottom = "56.2%";
    gsPlayer.style.transform = "translateX(-34%)";
    bannerWarrper.style.transform = "scale(0.396094)";
});
bannerClickArea.addEventListener("click", function () {
    console.log('link');
    window.open("https://www.facebook.com/applausemovietaiwan/videos/771300709916739");
    console.log('opennews');
});
oneadVideo.addEventListener("click", function (e) {
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
        console.log('play');
        oneadVideo.play();
        playBtn.style.display = "none";
        inreadLayout.style.paddingBottom = "140%";
        gsPlayer.style.transform = "translateX(0%)";
        bannerWarrper.style.transform = "scale(0.585938) translateY(358px)";
    }
});
var Mute = false;
Mute = false;
mutedButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    Mute = !Mute;
    oneadVideo.muted = Mute;
    if (Mute) {
        _this.volume = 0;
        for (var i = 0; i <= 3; i++) {
            bar[i].style.background = "linear-gradient(rgb(189, 188, 188),rgb(57, 57, 57))";
        }
    }
    else {
        _this.volume = 1;
        console.log(_this.volume);
        for (var i = 0; i <= 3; i++) {
            bar[i].style.background = " linear-gradient(rgb(94, 255, 0),green)";
        }
    }
});
window.addEventListener("load", function (e) {
    _this.volume = 0;
    var time;
    time = setInterval(function () {
        for (var i = 0; i <= 3; i++) {
            var num = Math.ceil(Math.random() * 15);
            bar[i].style.height = num + "px";
        }
    }, 200);
});
//# sourceMappingURL=main.js.map