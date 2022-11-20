var randomNumber1 = Math.floor((Math.random()*6+1));
//console.log(randomNumber1);
var randomImage1 = "dice"+randomNumber1+".png";//dicenum.png
var randomImageSource1 = "Images/"+randomImage1;//it will set the path for the image 
// document is only support the browser not the Node.js 
var img1 = document.querySelectorAll("img")[0];//it will select the image1 
img1.setAttribute("src", randomImageSource1);

// for the second image 
var randomNumber2 = Math.floor((Math.random()*6+1));
var randomImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "Images/"+randomImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player1 was win";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player2 was win";
}else{
    document.querySelector("h1").innerHTML = "Match was Drawn";
}