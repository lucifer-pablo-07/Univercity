let a =document.getElementById("menubar");
a1 = false

function menu(){
    a1 = !a1;
    if(a1==true){
        a.style="transform: translateX(0px);"
    } else{
        a.style="transform: translateX(100%);"
    }
}

console.log("menubar")