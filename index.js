
var randomNumber1 =Math.floor(Math.random()*6)+1;//1-6

var randomDiceImage ="dice" +randomNumber1+".png";//dice1.png-dice6.png

var randomImageSource ="images/" +randomDiceImage;//images/dice1.png-images/dice6.png

var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins"
}
else if (randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML= "🚩Player 2 wins"
}
else {
  document.querySelector("h1").innerHTML="Draw!"
}


































// var imglist =new array ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png'
// ]
// var n
//
// var selectNum = Math.floor(Math.random()*6)+1)*imglist.length);
// //1-6
// var output ="<img src="+ imglist[selectNum]+">";
//
// document.write(output);
//
// if (img1>img2){
//   document.querySelector("h1").innerHTML="Player 1 wins"
// }else if (img2>img1){
//   document.querySelector("h1").innerHTML="Player 2 wins"
// }else (img1%img2===0){
//   document.querySelector("h1").innerHTML="Draw!"
// }
// // var n =Math.random();
// // n=n*6;
// // n=Math.floor(n)+1;
// // console.log(n);
// //
// // document.querySelector(n).setAttribute("href=");
// // function  {
// //
// // if (n===1){
// //   document.querySelector(n).setAttribute("href=");
// //
// // }
// // else if (n===2){
// //   document.querySelector(n).setAttribute("href=");
// // }else if (n===3){
// //   document.querySelector(n).setAttribute("href");
// // }else if (n===4){
// //   document.querySelector(n).setAttribute("href=");
// // }else if (n===5){
// //   document.querySelector(n).setAttribute("href");
// // }else  (n===6){
// //   document.querySelector(n).setAttribute("href=");
// // }
// // }
