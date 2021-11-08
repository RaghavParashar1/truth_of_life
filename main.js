function toggle1() {
    if ((document.getElementById('Love').checked) && (document.getElementById('Money').checked)) {
        document.getElementById('Money').checked = false;
    }
}

function toggle2() {
    if ((document.getElementById('Money').checked) && (document.getElementById('Friends').checked)) {
        document.getElementById('Friends').checked = false;
    }
}


function toggle3() {
    if ((document.getElementById('Love').checked) && (document.getElementById('Friends').checked)) {
        document.getElementById('Love').checked = false;
    }
}

var onLine = navigator.onLine;

window.onload = function () {
    //-- usage --//
    preload(
        "https://raghavparashar1.github.io/truth_of_life/images.jpg"
    )
}

var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

setInterval(check_state_change, 1000);


function check_state_change() {
    if (onLine != navigator.onLine) {
        check_connectivity();
        onLine = navigator.onLine
    }
}

function check_connectivity() {
    if (navigator.onLine == false) {

        elem = document.getElementById("main_body")
        elem.style.display = "none"

        elemBody = document.getElementById("hidden_body")
        elemBody.style.display = "block"

        document.body.style.backgroundColor = "black";
        elemBody.innerHTML = '<img src="https://raghavparashar1.github.io/truth_of_life/images.jpg" width="auto" height="150vh" style="position: absolute; left: 45%; top: 40%;"></img>'

        console.log("Lost connection to the internet gods.")
    }
    else {

        elem = document.getElementById("main_body")
        elem.style.display = "block"

        elemBody - document.getElementById("hidden_body")
        elemBody.style.display = "none"

        document.body.style.backgroundColor = "#0b0c10";

        console.log("Rejoice!! The internet gods can be heard again.")
    }
}