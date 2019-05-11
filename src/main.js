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
var open = false;
function someFunction() {
    var windowtop =window.scrollY;//宣告卷軸的高度
     all = windowtop+windosHeight//卷軸滑動高度+一開始視窗高度 就是當前卷軸的高度
    // toptext.innerText=all;//帶入高度
    if(all >= bbTop&&all<= 1700){//如果總高度>=物件高 AND 總高度<=2000的時候 走這裡
        playBtn.style.display = "block";
        inreadLayout.style.paddingBottom = "56.2%";
        gsPlayer.style.transform = "translateX(-34%)";
        bannerWarrper.style.transform = "scale(0.396094)";
        open = true;
        // console.log("動1")
    }
    else if(open){//如果不是上面就是這裡
        // console.log("動2")
        oneadVideo.play();

        playBtn.style.display = "none";
        // inread_layout padding-bottom 56.25% ->140%
        inreadLayout.style.paddingBottom = "140%";
        // gsplayer transform(-34%)->transform(0%)
        gsPlayer.style.transform = "translateX(0%)";
        // bannerWarrper transform:scale(0.396094)->transform: scale(0.585938) translateY(358px);
        bannerWarrper.style.transform = "scale(0.585938) translateY(358px)";
        //取消寫在這下面
        // window.removeEventListener("scroll",someFunction)
    }
}


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
function linkNews(e){
    window.open("https://www.facebook.com/applausemovietaiwan/videos/771300709916739");
    console.log('opennews')
}


//滑動結束後再次點開影片事件
function playVideo(){
    //終止預設行為
    event.preventDefault();
    //終止事件傳導
    event.stopPropagation();
    oneadVideo.play();
   if(oneadVideo.ended){
       console.log('play1')
       playBtn.style.display = "block";
       inreadLayout.style.paddingBottom = "56.2%";
       gsPlayer.style.transform = "translateX(-34%)";
       bannerWarrper.style.transform = "scale(0.396094)";
   }
   else{
    console.log('play2')
       oneadVideo.play();
    //    oneadVideo.volume = 1;
       playBtn.style.display = "none";
       inreadLayout.style.paddingBottom = "140%";
       gsPlayer.style.transform = "translateX(0%)";
       bannerWarrper.style.transform = "scale(0.585938) translateY(358px)";
   }

}

//調整靜音
var mute =true;
function muted(){
    //終止預設行為
    // console.log("2u03");
    event.preventDefault();
    //終止事件傳導
    event.stopPropagation();
    mute = !mute;
    oneadVideo.muted = mute;
    console.log('muted',mute)
	if(mute){
		originVolume=oneadVideo.volume;
		console.log('originVolume=',originVolume);
		oneadVideo.volume=0;
        console.log(oneadVideo.volume);
        for(var i =0 ; i <=3 ; i++){
            bar[i].style.background = "linear-gradient(rgb(189, 188, 188),rgb(57, 57, 57))";
        }
	}else{
        oneadVideo.volume = 1;
        console.log(oneadVideo.volume);
        for(var i =0 ; i <=3 ; i++){
           bar[i].style.background =" linear-gradient(rgb(94, 255, 0),green)";
       }
    }
}


//各個事件load到頁面
function init(){
    oneadVideo.volume =0;
    //先跟HTML畫面產生關連
    var time ;
    time = setInterval(()=>{
        for(var i =0 ; i <=3 ; i++){
            var num = Math.ceil(Math.random()*15);
            // console.log(num);
            bar[i].style.height = num+"px";
        }
    },200)
    //再建事件聆聽的功能
    onead.addEventListener('click',linkNews);
    gsPlayer.addEventListener('click',playVideo)
    mutedButton.addEventListener('click',muted);
    window.addEventListener('scroll', someFunction);
    // playButton.addEventListener('scroll',scrollPlay);
}


window.addEventListener('load',init);

