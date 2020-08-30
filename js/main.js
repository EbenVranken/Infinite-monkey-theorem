const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]

let s = document.getElementById("slider").value;
let t= setInterval(randKey,s);
let c = document.getElementById("container");

function randKey() {
    c.innerHTML += keys[Math.floor(Math.random() * keys.length)];
}

function time(button) {
    if(button.innerHTML === "STOP") {
        clearInterval(t);
            button.innerHTML = "RESUME";
    } else {
        t= setInterval(randKey,s);
            button.innerHTML = "STOP";
    }
}

function reset() {
    c.innerHTML = "";
}

function speed() {
    s = document.getElementById("slider").value;
    clearInterval(t);
    t= setInterval(randKey,s);
}