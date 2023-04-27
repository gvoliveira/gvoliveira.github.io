const poke = document.querySelector("#pokemon")

var pokepath = document.querySelector("#pokemon").src;
var pokemon = 7;



function evolui() {

    pokepath = document.querySelector("#pokemon").src;
    console.log(pokepath)

    if (pokemon == 7) { 
        document.querySelector("#pokemon").src= "./img/8.gif";
        pokemon = 8;
       
    }
    else if (pokemon == 8){
        document.querySelector("#pokemon").src = "./img/9.gif";
    }
    else{
        console.log("Else")
    }

    

}



poke.addEventListener("click", evolui)