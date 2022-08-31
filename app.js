//add an event listner to the scale notes button, when clicked,
//while showing the scale notes, a sound is played corresponding to the note
//chord of the note is played
// soundkeys, soundCollection, arr should be grouped together.


let majorC = document.querySelector('.cmajor');
let majorG = document.querySelector('.gmajor');
let majord = document.querySelector('.dmajor');
let majora = document.querySelector('.amajor');
let majore = document.querySelector('.emajor');
let majorb = document.querySelector('.bmajor');
let majorfsharp = document.querySelector('.fsharpmajor');
let majordflat = document.querySelector('.dflatmajor');
let majoraflat = document.querySelector('.aflatmajor');
let majoreflat = document.querySelector('.eflatmajor');
let majorbflat = document.querySelector('.bflatmajor');
let majorf = document.querySelector('.fmajor');
const tfoot = document.querySelector("#displayContent tfoot  tr");
const cof = document.querySelector('.imageBox');
const img = document.querySelector('section img');
const toggle = document.querySelector('.toggle');
const buttonSelect = document.getElementsByClassName('button-grabber');


let addSelectClass = function() {
    removeSelectClass();
    this.classList.add('selected');
};

let removeSelectClass = function() {
    for (let i = 0; i < buttonSelect.length; i++) {
        buttonSelect[i].classList.remove('selected');
    }
};

for(let i = 0; i < buttonSelect.length; i++) {
        buttonSelect[i].addEventListener('click', addSelectClass);
}

//create a function named lojic that changes the images on the page when clicked
function lojic() {
    let switcher = false;
    if (switcher === false) {
        img.classList.toggle('displayThis');
        img.classList.add('image1');
    } else {
        console.log('error');
    }
}

toggle.addEventListener('click', function() {
   //run functions here
   lojic();

});

let soundKeys = {
    cmajor : ["C", "D", "E", "F", "G", "A", "B"],
    gmajor : ["G", "A", "B", "C", "D", "E", "F#"],
    dmajor : ["D", "E", "F#", "G", "A", "B", "C#"],
    amajor : ["A", "B", "C#", "D", "E", "F#", "G#"],
    emajor : ["E", "F#", "G#", "A", "B", "C#", "D#"],
    bmajor : ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    fsharpmajor : ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
    dflatmajor : ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"],
    aflatmajor : ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"],
    eflatmajor : ["E♭", "F", "G", "A♭", "B♭", "C", "D"],
    bflatmajor : ["B♭", "C", "D", "E♭", "F", "G", "A"],
    fmajor : ["F", "G", "A", "Bb", "C", "D", "E"]
}

let soundCollection = {
    audio1: "../sounds/CMajor.mp3",
    audio2: "../sounds/GMajor.mp3",
    audio3: "../sounds/DMajor.mp3",
    audio4: "../sounds/AMajor.mp3",
    audio5: "../sounds/EMajor.mp3",
    audio6: "../sounds/BMajor.mp3",
    audio7: "../sounds/FsharpMajor.mp3",
    audio8: "../sounds/DflatMajor.mp3",
    audio9: "../sounds/AflatMajor.mp3",
    audio10: "../sounds/EflatMajor.mp3",
    audio11: "../sounds/BflatMajor.mp3",
    audio12: "../sounds/FMajor.mp3"

}

function reveal(arr) {
    let html = "";
    for (let i = 0; i < arr.length; i++) {
        html += `<td>${arr[i]}</td>`;
    }
        tfoot.innerHTML = html;
}

function playSound(arr) {
    const audio = new Audio();
    for (let i = 0; i < arr.length; i++) {
        audio.src += `${arr[i]}`;
    }
   audio.play();
}

// let arr = [majorC, majorG, majord, majora, majore, majorb, majorfsharp, majordflat, majoraflat, majoreflat, majorbflat, majorf];




majorC.addEventListener("click", () => {
    playSound(soundCollection.audio1);
    reveal(soundKeys.cmajor);

});

majorG.addEventListener("click", () => {
    playSound(soundCollection.audio2);
    reveal(soundKeys.gmajor);
});
majord.addEventListener("click", () => {
    playSound(soundCollection.audio3);
    reveal(soundKeys.dmajor);
});
majora.addEventListener("click", () => {
    playSound(soundCollection.audio4);
    reveal(soundKeys.amajor);
});
majore.addEventListener("click", () => {
    playSound(soundCollection.audio5);
    reveal(soundKeys.emajor);
});
majorb.addEventListener("click", () => {
    playSound(soundCollection.audio6);
    reveal(soundKeys.bmajor);
});
majorfsharp.addEventListener("click", () => {
    playSound(soundCollection.audio7);
    reveal(soundKeys.fsharpmajor);
});
majordflat.addEventListener("click", () => {
    playSound(soundCollection.audio8);
    reveal(soundKeys.dflatmajor);
});
majoraflat.addEventListener("click", () => {
    playSound(soundCollection.audio9);
    reveal(soundKeys.aflatmajor);
});
majoreflat.addEventListener("click", () => {
    playSound(soundCollection.audio10);
    reveal(soundKeys.eflatmajor);
});
majorbflat.addEventListener("click", () => {
    playSound(soundCollection.audio11);
    reveal(soundKeys.bflatmajor);
});
majorf.addEventListener("click", () => {
    playSound(soundCollection.audio12);
    reveal(soundKeys.fmajor);
});





