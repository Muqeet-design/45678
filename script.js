/* ==========================================
   WHEN FLOWERS REMEMBER
   SCRIPT.JS
========================================== */

/* ===============================
   ELEMENTS
================================ */

const pages = document.querySelectorAll(".page");

const loader = document.getElementById("loader");

const clickSound = document.getElementById("clickSound");

const introMusic = document.getElementById("introMusic");

const galleryMusic = document.getElementById("galleryMusic");

const endingMusic = document.getElementById("endingMusic");

const paperSound = document.getElementById("paperSound");

/* ===============================
   BUTTONS
================================ */

const beginJourney = document.getElementById("beginJourney");

const continueJourney = document.getElementById("continueJourney");

const touchFlower = document.getElementById("touchFlower");

const openStory = document.getElementById("openStory");

const openGallery = document.getElementById("openGallery");

const openSky = document.getElementById("openSky");

const openGarden = document.getElementById("openGarden");

const showEnding = document.getElementById("showEnding");

const restartJourney = document.getElementById("restartJourney");

/* ===============================
   PAGE SYSTEM
================================ */

function showPage(id){

pages.forEach(page=>{

page.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

/* ===============================
   PLAY CLICK
================================ */

function playClick(){

clickSound.currentTime=0;

clickSound.play().catch(()=>{});

}

/* ===============================
   LOADER
================================ */

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

},1800);

});

/* ==========================================
   SCENE FLOW (PART 2)
========================================== */

/* ---------- Opening → Tunnel ---------- */

beginJourney.addEventListener("click",()=>{

playClick();

introMusic.play().catch(()=>{});

showPage("tunnel");

createTunnelFlowers();

});

/* ---------- Tunnel → First Bloom ---------- */

continueJourney.addEventListener("click",()=>{

playClick();

showPage("firstBloom");

});

/* ---------- First Bloom → Letter ---------- */

touchFlower.addEventListener("click",()=>{

playClick();

paperSound.currentTime=0;

paperSound.play().catch(()=>{});

const flower=document.getElementById("magicFlower");

flower.style.transform="scale(1.3)";

flower.style.filter="drop-shadow(0 0 60px #ff9ecf)";

setTimeout(()=>{

showPage("letterScene");

},1000);

});

/* ---------- Letter → Story ---------- */

openStory.addEventListener("click",()=>{

playClick();

showPage("storyScene");

});

/* ==========================================
   FLOWER TUNNEL
========================================== */

const flowerTunnel=document.getElementById("flowerTunnel");

function createTunnelFlowers(){

flowerTunnel.innerHTML="";

for(let i=0;i<40;i++){

const flower=document.createElement("div");

flower.className="tunnelFlower";

flower.innerHTML="🌺";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=(5+Math.random()*5)+"s";

flower.style.animationDelay=(Math.random()*3)+"s";

flower.style.fontSize=(30+Math.random()*25)+"px";

flowerTunnel.appendChild(flower);

}

}


/* ==========================================
   SCENE FLOW (PART 3)
========================================== */

/* ---------- Story → Gallery ---------- */

openGallery.addEventListener("click",()=>{

playClick();

introMusic.pause();

galleryMusic.currentTime=0;

galleryMusic.play().catch(()=>{});

showPage("galleryScene");

});

/* ---------- Gallery → Night Sky ---------- */

openSky.addEventListener("click",()=>{

playClick();

showPage("skyScene");

createStars();

createFireflies();

});

/* ---------- Night Sky → Garden ---------- */

openGarden.addEventListener("click",()=>{

playClick();

galleryMusic.pause();

endingMusic.currentTime=0;

endingMusic.play().catch(()=>{});

showPage("gardenScene");

createGarden();

});


/* ==========================================
   STARS
========================================== */

const stars=document.getElementById("stars");

const starMessage=document.getElementById("starMessage");

const messages=[

"Some memories bloom forever. 🌺",

"The sky never forgot your smile. ✨",

"Every star remembers a beautiful moment. ⭐",

"Some flowers wait forever. 🌸",

"Even silence can carry love. 🤍",

"Hope still blooms somewhere. 🌺"

];

function createStars(){

stars.innerHTML="";

for(let i=0;i<70;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=(Math.random()*4)+"s";

star.onclick=()=>{

playClick();

starMessage.innerHTML=

messages[Math.floor(Math.random()*messages.length)];

};

stars.appendChild(star);

}

}


/* ==========================================
   FIREFLIES
========================================== */

const fireflies=document.getElementById("fireflies");

function createFireflies(){

fireflies.innerHTML="";

for(let i=0;i<18;i++){

const fly=document.createElement("div");

fly.className="firefly";

fly.style.left=Math.random()*100+"vw";

fly.style.top=Math.random()*100+"vh";

fly.style.animationDelay=(Math.random()*8)+"s";

fireflies.appendChild(fly);

}

}


/* ==========================================
   FINAL GARDEN
========================================== */

const flowerField = document.getElementById("flowerField");

function createGarden(){

flowerField.innerHTML="";

for(let i=0;i<45;i++){

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML="🌺";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDelay=(i*0.08)+"s";

flower.style.fontSize=(35+Math.random()*35)+"px";

flowerField.appendChild(flower);

}

}


/* ==========================================
   GARDEN → ENDING
========================================== */

showEnding.addEventListener("click",()=>{

playClick();

showPage("endingScene");

createPetals();

});


/* ==========================================
   RESTART
========================================== */

restartJourney.addEventListener("click",()=>{

playClick();

endingMusic.pause();

galleryMusic.pause();

introMusic.pause();

introMusic.currentTime=0;

galleryMusic.currentTime=0;

endingMusic.currentTime=0;

showPage("opening");

});


/* ==========================================
   FLOATING PETALS
========================================== */

function createPetals(){

const petals=document.getElementById("petals");

petals.innerHTML="";

for(let i=0;i<40;i++){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*5)+"s";

petal.style.animationDelay=(Math.random()*2)+"s";

petals.appendChild(petal);

}

}


/* ==========================================
   SPARKLES
========================================== */

setInterval(()=>{

const sparkles=document.getElementById("sparkles");

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkles.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},2000);

},250);


/* ==========================================
   AUTO PLAY (FIRST USER CLICK)
========================================== */

document.addEventListener("click",()=>{

introMusic.play().catch(()=>{});

},{once:true});
