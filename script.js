var charachter = document.getElementById("charachter");
var block = document.getElementById("block");
var counter = 0;


function jump() {
    if(charachter.classList != "animate"){
    charachter.classList.add("animate");
    }
    setTimeout( function() {
        charachter.classList.remove("animate");
        
    }, 300);
}

var checkDead = setInterval(function(){
   let charachterTop =  parseInt(window.getComputedStyle(charachter).getPropertyValue("top"));
   let blockLeft =  parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && charachterTop>=50){
        block.style.animation ="none";
        alert("Game Over. score: "+Math.floor(counter/100))
        counter=0;
        block.style.animation = "block 1s infinite linear";

    }else{
        counter ++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
},10);

