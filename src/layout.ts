function myFunction(xml) {
    let xmlDoc = xml.responseXML;
    let videoUrl = xmlDoc.getElementsByTagName('videoURL_mp4')[0];
    let defaultUrl = xmlDoc.getElementsByTagName('defaultURL')[0];
    let imgUrl = xmlDoc.getElementsByTagName('imgURL')[0].textContent;
    let ov = window.document.getElementById("oneadVideo");
    ov.insertAdjacentHTML('afterbegin', "<source src='" + videoUrl.textContent + "' type='video/mp4'>");
    ov.setAttribute("poster",defaultUrl.textContent);
    // window.document.getElementById("oneadVideo").poster = defaultUrl.textContent;
    let bw = window.document.getElementById("banner_wrapper");
    bw.insertAdjacentHTML('afterbegin', "<iframe src='" + imgUrl.substring(0, imgUrl.length - 4) + "/index.html?isipIndex=0'</iframe>" + "</a>");
    // let onead = document.getElementById('div-onead-ad');
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

