const images=["0.png", "1.png", "2.png", "3.png", "4.png", "5.png"];

const chosenImg = images[Math.floor(Math.random()*images.length)];

const bgImg= document.createElement("img");

bgImg.src=`imges/${chosenImg}`;

document.body.appendChild(bgImg);