function toggle1(){
    if((document.getElementById('Love').checked)&&(document.getElementById('Money').checked)){
        document.getElementById('Money').checked=false;
    }
}

function toggle2(){
    if((document.getElementById('Money').checked)&&(document.getElementById('Friends').checked)){
        document.getElementById('Friends').checked=false;
    }
}


function toggle3(){
    if((document.getElementById('Love').checked)&&(document.getElementById('Friends').checked)){
        document.getElementById('Love').checked=false;
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


var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onerror = function() {
    elemNumber = document.getElementById('counter_number');
    elemLabel = document.getElementById('label');

    elemNumber.innerHTML = '<img src="https://raghavparashar1.github.io/truth_of_life/images.jpg"></img>'

    elemLabel.animate({opacity: [1, 0]}, 1000);
    elemLabel.innerText = 'Could not connect to Database'
    elemLabel.animate({opacity: [0, 1]}, 1000);
    console.log("Data Fetch Unsuccessful")
}

request.onprogress = function() {
    elemNumber = document.getElementById('counter_number');
    elemNumber.innerText = 'Fetching Data';
}

request.onload = function () {
    const jsonData = request.response;
    console.log(jsonData)
    console.log("Total Cases: " + jsonData['data']['summary']['total'])

    buttonClick();
}

function check_connectivity() {
    if (navigator.onLine==false) {
        elemNumber = document.getElementById('counter_number');
        elemLabel = document.getElementById('label');
        elemButton = document.getElementById('change_data');
    
        elemNumber.innerHTML = '<img src="https://raghavparashar1.github.io/truth_of_life/images.jpg"></img>'
    
        elemLabel.animate({opacity: [1, 0]}, 1000);
        elemLabel.innerText = 'Lost Connection to Internet'
        elemLabel.animate({opacity: [0, 1]}, 1000);

        changeBgColor(scream_color)
        elemButton.disabled = true;

        console.log("Data Fetch Unsuccessful")
    }
    else {
        elemNumber = document.getElementById('counter_number');
        elemLabel = document.getElementById('label');
        elemButton = document.getElementById('change_data');
    
        elemNumber.innerHTML = '<img src="https://raghavparashar1.github.io/truth_of_life/index.html"></img>'
    
        elemLabel.animate({opacity: [1, 0]}, 1000);
        elemLabel.innerText = 'Connected. Press button below to check stats.'
        elemLabel.animate({opacity: [0, 1]}, 1000);

        changeBgColor(green_color)
        elemButton.disabled = false;

        console.log("Data Fetch Unsuccessful")
    }
}