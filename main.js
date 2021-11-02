function display1(){
    if((document.getElementById('Love').checked)&&(document.getElementById('Money').checked)){
        document.getElementById('Money').checked=false;
    }
}

function display2(){
    if((document.getElementById('Money').checked)&&(document.getElementById('Friends').checked)){
        document.getElementById('Friends').checked=false;
    }
}


function display3(){
    if((document.getElementById('Love').checked)&&(document.getElementById('Friends').checked)){
        document.getElementById('Love').checked=false;
    }
}