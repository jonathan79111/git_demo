let oneadVideo:HTMLMediaElement= (<HTMLMediaElement>document.getElementById('oneadVideo'));
let mutedButton:HTMLElement= document.getElementById('mutedButton');
let bar= document.querySelectorAll(".bar")  as NodeListOf<HTMLElement>;;
let bannerClickArea:HTMLElement = document.getElementById('banner_click_area');
let playBtn:HTMLElement = document.getElementById('play-button');
let windosHeight:number = window.innerHeight;
let oc:HTMLElement = document.getElementById("onead_container");
let inreadLayout:HTMLElement = document.getElementById("inread_layout");
let gsPlayer:HTMLElement = document.getElementById('gsplayer');
let bannerWarrper:HTMLElement = document.getElementById('banner_wrapper');
let bbTop:number = oc.offsetTop;
let all:number=0;
// let onead:HTMLElement = document.getElementById("div-onead-ad");
// let bar = document.querySelectorAll<SVGRectElement | SVGCircleElement>('.bar');


//滑動到廣告去展開影片效果
let scrolling:boolean = false;//初始宣告型別
// let scrolling = () => window.addEventListener("scroll", (e) => {
window.addEventListener("scroll", (e) => {
  let windowtop = window.scrollY;
  all = windowtop + windosHeight;
  if (all >= bbTop && all <= 1700 && !scrolling) {
    playBtn.style.display = "block";
    inreadLayout.style.paddingBottom = "56.2%";
    gsPlayer.style.transform = "translateX(-34%)";
    bannerWarrper.style.transform = "scale(0.396094)";
    scrolling = true;
  }
  else if (scrolling) {
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


//點擊banner_warp跳到宣傳頁面
//點擊跳至連結
bannerClickArea.addEventListener("click", () => {
    window.open("https://www.facebook.com/applausemovietaiwan/videos/771300709916739");
    console.log('opennews')
  });

//滑動結束後再次點開影片事件
oneadVideo.addEventListener("click", (e) => {
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
let mute:boolean = false;//初始宣告型別
mutedButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  mute = !mute;
  oneadVideo.muted = mute;
  if (mute) {
    // originVolume = oneadVideo.volume;
    this.volume = 0;
    for (let i = 0; i <= 3; i++) {
      bar[i].style.background = "linear-gradient(rgb(189, 188, 188),rgb(57, 57, 57))";
    }
  } else {
    this.volume = 1;
    console.log(this.volume);
    for (let i = 0; i <= 3; i++) {
        bar[i].style.background = " linear-gradient(rgb(94, 255, 0),green)";
    }
  }
});

//各個事件load到頁面
window.addEventListener("load", (e) => {
this.volume = 0;
    let time;
    time = setInterval(() => {
      for (let i = 0; i <= 3; i++) {
        let num = Math.ceil(Math.random() * 15);
        bar[i].style.height = num + "px";
      }
    }, 200)
      // scrolling();
  });

