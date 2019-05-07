/*! mirt_test - v1.0.0 - 2019-05-07 */function myFunction(xml){
    // let oneadVideo = document.getElementById("oneadVideo");

    console.log("video:"+oneadVideo);
    let xmlDoc = xml.responseXML;
    let videoUrl = xmlDoc.getElementsByTagName('videoURL_mp4')[0];
    console.log("videoUrl:"+videoUrl)

    let defaultUrl = xmlDoc.getElementsByTagName('defaultURL')[0];
    console.log("defaultURL:"+ defaultUrl)

    let imgUrl = xmlDoc.getElementsByTagName('imgURL')[0].textContent;
    console.log(imgUrl)
    // oneadVideo.textContent = videoUrl.textContent;
    window.document.getElementById("oneadVideo").innerHTML = "<source src='"+videoUrl.textContent+"' type='video/mp4'>";
    window.document.getElementById("oneadVideo").poster = defaultUrl.textContent;
    window.document.getElementById("banner_wrapper").innerHTML = "<iframe src='"+imgUrl.substring(0,imgUrl.length-4)+"/index.html?isipIndex=0'</iframe>";


}

let  xhr = new XMLHttpRequest () ;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
    // document.getElementById('oneadVideo').textContent = xhr.responseText;
    // console.log(xhr.responseText);
    }
    if(this.status == 404){
        console.log('Fail or resource not found')
    }
};


xhr.open('get','https://demo.onead.com.tw/cprp/xml/1121984/l.xml?pid=1121984&campid=10033&uid=1000081&guid=4262fc5d-60f4-11e9-b1f7-0242ac120004',true);
console.log('something here')
xhr.addEventListener("load", myFunction);
xhr.send(null);
;var myMovie = document.getElementById('myMovie');
var mutedButton= document.getElementById('mutedButton');
var playButton = document.getElementById('playButton');
var stopButton = document.getElementById('stopButton');
var bar = document.querySelectorAll(".bar");
var news = document.getElementById("news");
var closebtn = document.getElementById("close-btn");

function init(){
    myMovie.volume =0;

    //先跟HTML畫面產生關連
    document.getElementById("linkButton").onclick = linkNews;
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
    closebtn.addEventListener('click',closeNews);
    news.addEventListener('click',linkNews);
    playButton.addEventListener('click',replayVideo);
    myMovie.addEventListener('click',playVideo)
	mutedButton.addEventListener('click',muted);
}


console.log(Boolean(myMovie.paused));
//點擊跳至連結
var aaa = false;
function linkNews(e){
    // window.open("https://www.onead.com.tw");
    // myMovie.pause();
    if(aaa){
        aaa = false;
        myMovie.play();
        console.log("NoOpen",aaa);
    }else if(!aaa){
        console.log("open",aaa);
        window.open("https://www.onead.com.tw");
        myMovie.pause();
        aaa = true;
    }
    console.log("最後",aaa);

}

function playVideo(){
    myMovie.play();
}


//關閉廣告的按鈕
function closeNews(){
     //終止預設行為
    event.preventDefault();
    //終止事件傳導
    event.stopPropagation();
    document.getElementById("onead-news").style.display = "none";
    if(myMovie.volume !=0 ){
		originVolume=myMovie.volume;
		console.log('originVolume='+originVolume);
		myMovie.volume=0;
		console.log(myMovie.volume);
	}else{
		console.log(originVolume);
		myMovie.volume=originVolume;
		console.log(myMovie.volume);
	}
}


//播放廣告影片

//靜音linear-gradient(yellow,red)
var flag =true;
function muted(){
    //終止預設行為
    // console.log("2u03");
    event.preventDefault();
    //終止事件傳導
    event.stopPropagation();
    flag = !flag;
    myMovie.muted = flag;
	if(flag){
		originVolume=myMovie.volume;
		console.log('originVolume='+originVolume);
		myMovie.volume=0;
        console.log(myMovie.volume);
        for(let i =0 ; i <=3 ; i++){
            bar[i].style.background = "linear-gradient(rgb(189, 188, 188),rgb(57, 57, 57))";
        }
	}else{
        myMovie.volume = 1;
        console.log(myMovie.volume);
        for(let i =0 ; i <=3 ; i++){
           bar[i].style.background =" linear-gradient(rgb(94, 255, 0),green)";
       }
    }
    
}

//播放&暫停
    // if(myMovie.ended){
    //     console.log(11);
    //     playButton.style.display='block';
    // }else{
    playButton.style.display='none';  linkButton.style.display='none';
    // }

    // myMovie.onended = ()=>{
    //     playButton.style.display='block';
    // }
    myMovie.addEventListener("ended",()=>{
        playButton.style.display='block';
        linkButton.style.display='block';
    })


function replayVideo(){
    //終止預設行為
    event.preventDefault();
    //終止事件傳導
    event.stopPropagation();
    myMovie.play();
    playButton.style.display='none';  linkButton.style.display='none';
}

window.addEventListener('load',init);

