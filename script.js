'use strict'
const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");
//Sounds
const sounds = document.querySelectorAll(".sound-picker button");
//Time Display
const timeDisplay = document.querySelector(".time-display");
const outlineLength = outline.getTotalLength();
//Duration
const timeSelect = document.querySelectorAll(".time-select button");
let fakeDuration = 600;

// しほ


// りゅういち
// play.addEventListener('click', ()=>{
//     play.classList.toggle('aaa')
// });
// if (id_play.classList.contains('aaa')) {
//     // song.play();
//     video.play();
//     play.src = "./svg/pause.svg"}
//   } else {
//     song.pause();
//     video.pause();
//     play.src = "./svg/play.svg";
//   }

// ひがみの


// りゅういち


// ひがみの



// ゆうじ
song.ontimeupdate=function(){
    let currentTime=song.currentTime;
    let elapsed=fakeDuration-currentTime;
    let minutes=Math.floor(elapsed/60);
    let seconds=Math.floor(elapsed%60);
    timeDisplay.textContent=`${minutes}:${seconds}`;
    let progress=outlineLength-(currentTime/fakeDuration)*outlineLength;
    outline.style.storokeDashoffset=progress;

    if(currentTime>=fakeDuration){
        song.pause();
        song.currentTime=0;
        play.src="./svg/play.svg";
        video.pause();
    }
};


