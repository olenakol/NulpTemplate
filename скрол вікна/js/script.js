/*var ball = document.querySelector('.ball');

window.addEventListener('keydown',function(e){
//    console.log('event object - ', e);
    if(e.keyCode == 39){
        var goRight = ball.offsetLeft;
        ball.style.left = goRight + 20 + 'px';
    }
    if(e.keyCode == 37){
        var goLeft = ball.offsetLeft;
        ball.style.left = goLeft - 20 + 'px';
    }
    if(e.keyCode == 38){
        var goUp = ball.offsetTop;
        ball.style.top = goUp - 20 + 'px';
    }
    if(e.keyCode == 40){
        var goDown = ball.offsetTop;
        ball.style.top = goDown + 20 + 'px';
    }
});*/

document.getElementById('txt').value = document.querySelector('.box').innerHTML;

document.getElementById('save').onclick = function(){
    document.querySelector('.box').innerHTML = document.getElementById('txt').value;
}