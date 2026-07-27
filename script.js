// ==========================================
// WHEN FLOWERS REMEMBER
// script.js
// ==========================================

const introMusic = document.getElementById("introMusic");
const clickSound = document.getElementById("clickSound");
const beginButton = document.getElementById("beginJourney");

// ----------------------------
// Start Music
// ----------------------------

window.addEventListener("load",()=>{

setTimeout(()=>{

introMusic.volume = 0.35;

introMusic.play().catch(()=>{});

},600);

});

// ----------------------------
// Begin Journey
// ----------------------------

beginButton.addEventListener("click",()=>{

clickSound.currentTime = 0;

clickSound.play().catch(()=>{});

// Fade Out

document.getElementById("opening").style.opacity="0";

document.getElementById("opening").style.transition="1.5s";

setTimeout(()=>{

// Next page later

alert("Next Scene Coming... 🌸");

},1500);

});
// ==========================================
// FLOATING PETALS
// ==========================================

const petals = document.getElementById("petals");

function createPetal(){

const petal = document.createElement("div");

petal.className = "petal";

petal.style.left = Math.random()*100+"vw";

petal.style.animationDuration =
(6 + Math.random()*5)+"s";

petal.style.opacity =
0.4 + Math.random()*0.6;

petal.style.transform =
`rotate(${Math.random()*360}deg)`;

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

}

setInterval(createPetal,450);

// ==========================================
// GLOWING PARTICLES
// ==========================================

const particles = document.getElementById("particles");

function createParticle(){

const dot=document.createElement("div");

dot.className="particle";

dot.style.left=Math.random()*100+"vw";

dot.style.top=Math.random()*100+"vh";

dot.style.animationDuration=
(2+Math.random()*4)+"s";

particles.appendChild(dot);

setTimeout(()=>{

dot.remove();

},6000);

}

setInterval(createParticle,250);


// =====================================
// FLOWER TUNNEL
// =====================================

const tunnel = document.getElementById("tunnel");
const flowerTunnel = document.getElementById("flowerTunnel");

function startTunnel(){

document.getElementById("opening").style.display="none";

tunnel.style.display="flex";

setInterval(()=>{

const flower=document.createElement("div");

flower.className="tunnelFlower";

flower.innerHTML="🌸";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=
(4+Math.random()*3)+"s";

flowerTunnel.appendChild(flower);

setTimeout(()=>{

flower.remove();

},7000);

},180);

}

beginButton.onclick=()=>{

clickSound.play();

startTunnel();

};

/* ===================================
   FIRST BLOOM
=================================== */

const firstBloom = document.getElementById("firstBloom");
const magicFlower = document.getElementById("magicFlower");
const touchFlower = document.getElementById("touchFlower");

// Tunnel → First Bloom

document.getElementById("enterGarden").addEventListener("click",()=>{

clickSound.currentTime = 0;
clickSound.play().catch(()=>{});

document.getElementById("tunnel").style.display="none";

firstBloom.style.display="flex";

});

// Flower Click

touchFlower.addEventListener("click",()=>{

clickSound.currentTime = 0;
clickSound.play().catch(()=>{});

magicFlower.style.transform="scale(1.4)";
magicFlower.style.filter=
"drop-shadow(0 0 80px #ff8cc8)";

setTimeout(()=>{

magicFlower.style.transform="scale(1)";
magicFlower.style.filter=
"drop-shadow(0 0 25px #ff8cc8)";

// NEXT SCENE
// Letter Scene yahan open hogi

alert("Letter Scene Coming ❤️");

},1500);

});
/* ===================================
LETTER SCENE
=================================== */

const letterScene =
document.getElementById("letterScene");

const continueStory =
document.getElementById("continueStory");

// Flower → Letter

touchFlower.addEventListener("click",()=>{

clickSound.currentTime=0;

clickSound.play().catch(()=>{});

magicFlower.style.transform="scale(1.4)";

magicFlower.style.filter=

"drop-shadow(0 0 80px #ff8cc8)";

setTimeout(()=>{

firstBloom.style.display="none";

letterScene.style.display="flex";

},1800);

});

// Letter → Story

continueStory.addEventListener("click",()=>{

clickSound.currentTime=0;

clickSound.play().catch(()=>{});

// Story Page yahan open hogi

alert("Story Book Coming... 📖");

});

/* ===================================
STORY BOOK
=================================== */

const storyScene =
document.getElementById("storyScene");

const storyText =
document.getElementById("storyText");

const nextMemory =
document.getElementById("nextMemory");

const story = `

Every flower has its own season.

Some bloom for a moment...

Some wait for years.

But every flower remembers
the hands that once cared for it.

This journey isn't about changing yesterday.

It's about remembering the beauty
that once existed.

🌺

`;

continueStory.addEventListener("click",()=>{

letterScene.style.display="none";

storyScene.style.display="flex";

typeStory(story);

});

function typeStory(text){

storyText.innerHTML="";

let i=0;

const typing=setInterval(()=>{

storyText.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},35);

}

nextMemory.addEventListener("click",()=>{

// Next Scene
alert("Memory Gallery Coming 📷");

});
/* ===================================
MEMORY GALLERY
=================================== */

const galleryScene=document.getElementById("galleryScene");

const photos=document.querySelectorAll(".memoryPhoto");

const memories=[

"The day everything felt easy. 🌺",

"A smile worth remembering.",

"Time stopped for a moment.",

"Some memories never fade.",

"When flowers remember... ❤️"

];

nextMemory.onclick=()=>{

storyScene.style.display="none";

galleryScene.style.display="flex";

};

photos.forEach((photo,index)=>{

photo.onclick=()=>{

clickSound.currentTime=0;

clickSound.play().catch(()=>{});

photo.style.transform="scale(1.15) rotate(0deg)";

setTimeout(()=>{

photo.style.transform="";

},500);

alert(memories[index]);

};

});



/* ===================================
NIGHT SKY
=================================== */

const skyScene=document.getElementById("skyScene");

const starsContainer=document.getElementById("starsContainer");

const starMessage=document.getElementById("starMessage");

const starTexts=[

"Some flowers still remember your smile. 🌺",

"The moon kept every silent conversation.",

"Kindness never truly disappears.",

"Some memories become stars.",

"You were always part of this garden."

];

continueSky.onclick=()=>{

galleryScene.style.display="none";

skyScene.style.display="flex";

createStars();

};

function createStars(){

starsContainer.innerHTML="";

for(let i=0;i<60;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.onclick=()=>{

clickSound.currentTime=0;

clickSound.play().catch(()=>{});

star.style.transform="scale(3)";

starMessage.innerHTML=

starTexts[Math.floor(Math.random()*starTexts.length)];

};

starsContainer.appendChild(star);

}

}


/* ===================================
FINAL GARDEN
=================================== */

const finalScene=document.getElementById("finalScene");

const flowerGarden=document.getElementById("flowerGarden");

continueGarden.onclick=()=>{

skyScene.style.display="none";

finalScene.style.display="flex";

let count=0;

const bloom=setInterval(()=>{

const flower=document.createElement("div");

flower.className="finalFlower";

flower.innerHTML="🌺";

flowerGarden.appendChild(flower);

count++;

if(count==40){

clearInterval(bloom);

}

},180);

};

finishJourney.onclick=()=>{

document.body.style.transition="3s";

document.body.style.opacity="0";

setTimeout(()=>{

alert("Thank you for taking this journey. 🌺");

},3000);

};
