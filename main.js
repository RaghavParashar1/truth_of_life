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

