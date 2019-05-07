var oneadVideo = document.getElementById('oneadVideo');
var mutedButton= document.getElementById('mutedButton');
var bar = document.querySelectorAll(".bar");
var news = document.getElementById("banner_wrapper");
// var scrollPlay = document.getElementById('playButton');
var windosHeight = window.innerHeight;//抓視窗的高
var oc = document.getElementById("onead_container");//宣告
var inreadLayout = document.getElementById("inread_layout");
var gsPlayer = document.getElementById('gsplayer');
var bannerWarrper  = document.getElementById('banner_wrapper');
var bbTop=oc.offsetTop;//抓物件的位子
// var toptext = document.getElementById("top");//宣告
// toptext.innerText=windosHeight;//高度帶入文字
var all=0;//宣告一個全域變數
window.onscroll=function (){ //也可以寫成 window.onscroll=()=>{} 箭頭函數XD 跟CSS的flex一樣有毒
    var windowtop =window.scrollY;//宣告卷軸的高度
     all = windowtop+windosHeight//卷軸滑動高度+一開始視窗高度 就是當前卷軸的高度
    // toptext.innerText=all;//帶入高度
    if(all >= bbTop&&all<= 1700){//如果總高度>=物件高 AND 總高度<=2000的時候 走這裡
        inreadLayout.style.paddingBottom = "56.2%";
        gsPlayer.style.transform = "translateX(-34%)";
        bannerWarrper.style.transform = "scale(0.396094)";
    }
    else{//如果不是上面就是這裡
        oneadVideo.play();
        // inread_layout padding-bottom 56.25% ->140%
        inreadLayout.style.paddingBottom = "140%";
        // gsplayer transform(-34%)->transform(0%)
        gsPlayer.style.transform = "translateX(0%)";
        // bannerWarrper transform:scale(0.396094)->transform: scale(0.585938) translateY(358px);
        bannerWarrper.style.transform = "scale(0.585938) translateY(358px)";
    }
}
console.log("video.ended:"+Boolean(oneadVideo.ended));
// var videoStop =true;

//     videoStop = !videoStop;
//     oneadVideo.ended = videoStop;
// 	if(videoStop){
//         oneadVideo.stop();
//         inreadLayout.style.paddingBottom = "56.2%";
//         gsPlayer.style.transform = "translateX(-34%)";
//         bannerWarrper.style.transform = "scale(0.396094)";
// 	}else{
//         oneadVideo.play();
//         // inread_layout padding-bottom 56.25% ->140%
//         inreadLayout.style.paddingBottom = "140%";
//         // gsplayer transform(-34%)->transform(0%)
//         gsPlayer.style.transform = "translateX(0%)";
//         // bannerWarrper transform:scale(0.396094)->transform: scale(0.585938) translateY(358px);
//         bannerWarrper.style.transform = "scale(0.585938) translateY(358px)";
//        }



function init(){
    oneadVideo.volume =0;

    //先跟HTML畫面產生關連
    // mutedButton.onclick = muted;
    var time ;
    time = setInterval(()=>{
        for(let i =0 ; i <=3 ; i++){
            let num = Math.ceil(Math.random()*15);
            // console.log(num);
            bar[i].style.height = num+"px";
        }
    },200)
    //再建事件聆聽的功能
    news.addEventListener('click',linkNews);
    oneadVideo.addEventListener('click',playVideo)
    mutedButton.addEventListener('click',muted);
    // playButton.addEventListener('scroll',scrollPlay);
}

//點擊banner_warp跳到宣傳頁面

console.log(Boolean(oneadVideo.paused));
//點擊跳至連結
var aaa = false;
function linkNews(e){
    window.open("https://www.facebook.com/applausemovietaiwan/videos/771300709916739");
}

function playVideo(){
    oneadVideo.play();
}

//調整靜音

var flag =true;
function muted(){
    //終止預設行為
    // console.log("2u03");
    event.preventDefault();
    //終止事件傳導
    event.stopPropagation();
    flag = !flag;
    oneadVideo.muted = flag;
	if(flag){
		originVolume=oneadVideo.volume;
		console.log('originVolume='+originVolume);
		oneadVideo.volume=0;
        console.log(oneadVideo.volume);
        for(let i =0 ; i <=3 ; i++){
            bar[i].style.background = "linear-gradient(rgb(189, 188, 188),rgb(57, 57, 57))";
        }
	}else{
        oneadVideo.volume = 1;
        console.log(oneadVideo.volume);
        for(let i =0 ; i <=3 ; i++){
           bar[i].style.background =" linear-gradient(rgb(94, 255, 0),green)";
       }
    }
}

window.addEventListener('load',init);

