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
// let bannerClickArea = document.getElementById('banner_click_area');
// window.onscroll = someFunction; //也可以寫成 window.onscroll=()=>{} 箭頭函數X

console.log("video.ended:",Boolean(oneadVideo.ended));


//滑動到廣告去展開影片效果
var open = false;
window.addEventListener("scroll", (e) => {
  let windowtop = window.scrollY;
  all = windowtop + windosHeight;
  if (all >= bbTop && all <= 1700 && !open) {
    console.log('scroll back')
    playBtn.style.display = "block";
    inreadLayout.style.paddingBottom = "56.2%";
    gsPlayer.style.transform = "translateX(-34%)";
    bannerWarrper.style.transform = "scale(0.396094)";
    open = true;
  }
  else if (open) {
      console.log('scroll out')
    oneadVideo.play();

    playBtn.style.display = "none";

    inreadLayout.style.paddingBottom = "140%";

    gsPlayer.style.transform = "translateX(0%)";

    bannerWarrper.style.transform = "scale(0.585938) translateY(358px)";
    // window.removeEventListener("scroll",scrolling)
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
bannerWarrper.addEventListener("click", () => {
    window.open("https://www.facebook.com/applausemovietaiwan/videos/771300709916739");
    console.log('opennews')
  });

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
    console.log('start')
    var time ;
    time = setInterval(()=>{
        for(var i =0 ; i <=3 ; i++){
            var num = Math.ceil(Math.random()*15);
            // console.log(num);
            bar[i].style.height = num+"px";
        }
    },200)
    //再建事件聆聽的功能
    gsPlayer.addEventListener('click',playVideo)
    mutedButton.addEventListener('click',muted);
    // window.addEventListener('scroll', someFunction);
    // playButton.addEventListener('scroll',scrollPlay);
}


window.addEventListener('load',init);

