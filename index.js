
document.querySelector(".btn").addEventListener("click",function() {
var a=(Math.floor(Math.random()*6))+1;

var b=(Math.floor(Math.random()*6))+1;

switch(a)
{
            case 1:document.querySelector(".image-1").setAttribute("src","images/dice1.png");
            break;
            case 2:document.querySelector(".image-1").setAttribute("src","images/dice2.png");
            break;
            case 3:document.querySelector(".image-1").setAttribute("src","images/dice3.png");
            break;
            case 4:document.querySelector(".image-1").setAttribute("src","images/dice4.png");
            break;
            case 5:document.querySelector(".image-1").setAttribute("src","images/dice5.png");
            break;
            case 6:document.querySelector(".image-1").setAttribute("src","images/dice6.png");
            break;

}
switch(b)
{
            case 1:document.querySelector(".image-2").setAttribute("src","images/dice1.png");
            break;
            case 2:document.querySelector(".image-2").setAttribute("src","images/dice2.png");
            break;
            case 3:document.querySelector(".image-2").setAttribute("src","images/dice3.png");
            break;
            case 4:document.querySelector(".image-2").setAttribute("src","images/dice4.png");
            break;
            case 5:document.querySelector(".image-2").setAttribute("src","images/dice5.png");
            break;
            case 6:document.querySelector(".image-2").setAttribute("src","images/dice6.png");
            break;

}
if(a===b)
{
    document.querySelector("h1").textContent="Match Drawn!!";
}
else if(a>b)
    document.querySelector("h1").textContent="Player-1 Wins!!";
else
    document.querySelector("h1").textContent="Player-2 Wins!!";});