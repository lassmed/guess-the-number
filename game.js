let r= Math.floor(Math.random() * 10);
let d= prompt("choose a diffuclty (1,2,3) : ");

if (d == 1)
    tries = 5;
else if (d == 2){
    tries = 3;
}
else if (d == 3){
    tries = 2;
}

while(tries>0){
    tries --;
    let input = prompt("Suggest a number : ");
    if(input == r){
        window.alert("You Won");
        tries =0;
    }
    else {
        window.alert("Only " + tries + " tries left" );
    }

}