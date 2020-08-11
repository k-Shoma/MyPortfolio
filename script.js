function switchByWidth(){
    if(window.matchMedia('(max-width: 600px)').matches){
        topChar = document.getElementsByClassName('topChar');
        topChar[0].innerHTML = '<div><h1>加藤将馬の<br>ポートフォリオサイト</h1><p>はじめまして。<br>加藤将馬のポートフォリオサイトへようこそ。';

        document.getElementById('detaillink2').innerHTML = '<td>詳しくは<br><a href="https://www.nitech.ac.jp/edu/index.html">こちら</a></td>';
        document.getElementById('detaillink3').innerHTML = '<td>詳しくは<br><a href="https://www.nitech.ac.jp/edu/new/kodo/em.html">こちら</a></td>';
        document.getElementById('detaillink4').innerHTML = '<td>詳しくは<br><a href="https://www.nitech.ac.jp/campus/club/koudaisai.html">こちら</a></td>';
        document.getElementById('detaillink1').innerHTML = '<td>詳しくは<br><a href="https://www.nitech.ac.jp/">こちら</a></td>';
        document.getElementById('detaillink1').innerHTML = '<td>詳しくは<br><a href="https://www.nitech.ac.jp/">こちら</a></td>';
    }
}

window.onload = switchByWidth;
