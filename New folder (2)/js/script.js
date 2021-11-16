let kickBtn = document.querySelector(".kick");
let snareBtn = document.querySelector(".snare");
let clapBtn = document.querySelector(".clap");
let hihatBtn = document.querySelector(".hi-hat");
let bassBtn = document.querySelector(".bass");
let crashBtn = document.querySelector(".crash");
let display = document.querySelector(".drum-machine-display");
let btnOn = document.querySelector(".on");
let btnOff = document.querySelector(".off");
let btnGroup = document.querySelector(".drum-btn-group");
const audio = new Audio();






let zvukovi = {
    kick: {
        name: "kick",
        location: "./mp3s/kick.wav",
        icon: "./img/kick.png"

    },
    snare: {
        name: "snare",
        location: "./mp3s/snare.wav",
        icon: "./img/snare.png"
    },
    clap: {
        name: "clap",
        location: "./mp3s/clap.wav",
        icon: "./img/clap.png"
    },
    hihat: {
        name: "hihat",
        location: "./mp3s/hihat.wav",
        icon: "./img/hihat.png"
    },
    bass: {
        name: "bass",
        location: "./mp3s/bass.wav",
        icon: "./img/bass.png"
    },
    crash: {
        name: "crash",
        location: "./mp3s/crash.wav",
        icon: "./img/crash.png"
    },
    on: {
        name: "On",
        location: "./mp3s/on.wav",
    },
    off: {
        name: "off",
        location: "./mp3s/off.wav"
    }




}








//Dodaje zvukove na dugme na klik

btnOff.onclick = function () {
    audio.src = `${zvukovi.off.location}`;
    audio.play();
}

btnOn.onclick = function () {
    audio.src = `${zvukovi.on.location}`;
    audio.play();
}
crashBtn.onclick = function () {
    display.innerHTML = `<p style="margin-right:15px;">${zvukovi.crash.name}</p><img src="${zvukovi.crash.icon}">`;
    audio.src = `${zvukovi.crash.location}`;
    audio.play();
}

bassBtn.onclick = function () {
    display.innerHTML = `<p style="margin-right:15px;">${zvukovi.bass.name}</p><img src="${zvukovi.bass.icon}">`;
    audio.src = `${zvukovi.bass.location}`;
    audio.play();
}

hihatBtn.onclick = function () {
    display.innerHTML = `<p style="margin-right:15px;">${zvukovi.hihat.name}</p><img src="${zvukovi.hihat.icon}">`;
    audio.src = `${zvukovi.hihat.location}`;
    audio.play();
}

clapBtn.onclick = function () {
    display.innerHTML = `<p style="margin-right:15px;">${zvukovi.clap.name}</p><img src="${zvukovi.clap.icon}">`;
    audio.src = `${zvukovi.clap.location}`;
    audio.play();
}

snareBtn.onclick = function () {
    display.innerHTML = `<p style="margin-right:15px;">${zvukovi.snare.name}</p><img src="${zvukovi.snare.icon}">`;
    audio.src = `${zvukovi.snare.location}`;
    audio.play();
}
kickBtn.onclick = function () {

    display.innerHTML = `<p style="margin-right:15px;">${zvukovi.kick.name}</p><img src="${zvukovi.kick.icon}">`;
    audio.src = `${zvukovi.kick.location}`;
    audio.play();

}



document.addEventListener('keypress', logKey);

function logKey(e) {

    if (e.code == "KeyW") {
        display.innerHTML = `<p style="margin-right:15px;">${zvukovi.kick.name}</p><img src="${zvukovi.kick.icon}">`;
        audio.src = `${zvukovi.kick.location}`;
        audio.play();
        kickBtn.classList.toggle("drum-btn");
    }

    else if (e.code == "KeyA") {
        display.innerHTML = `<p style="margin-right:15px;">${zvukovi.clap.name}</p><img src="${zvukovi.clap.icon}">`;
        audio.src = `${zvukovi.clap.location}`;
        audio.play();
        clapBtn.classList.toggle("drum-btn");


    }
    else if (e.code == "KeyD") {
        display.innerHTML = `<p style="margin-right:15px;">${zvukovi.snare.name}</p><img src="${zvukovi.snare.icon}">`;
        audio.src = `${zvukovi.snare.location}`;
        audio.play();
        snareBtn.classList.toggle("drum-btn");

    }
    else if (e.code == "KeyS") {
        display.innerHTML = `<p style="margin-right:15px;">${zvukovi.bass.name}</p><img src="${zvukovi.bass.icon}">`;
        audio.src = `${zvukovi.bass.location}`;
        audio.play();
        bassBtn.classList.toggle("drum-btn");

    }
    else if (e.code == "KeyX") {

        display.innerHTML = `<p style="margin-right:15px;">${zvukovi.hihat.name}</p><img src="${zvukovi.hihat.icon}">`;
        audio.src = `${zvukovi.hihat.location}`;
        audio.play();
        hihatBtn.classList.toggle("drum-btn");


    }
}


