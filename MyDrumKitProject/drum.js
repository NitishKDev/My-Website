var numbrbtn =document.querySelectorAll(".drum").length; 
for(var i =0;i<numbrbtn;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",handclk);
}
function handclk()
{
    //this.style.color = "green";
    // var sound = new Audio("sound4.wav");
    // sound.play();
    var b = this.innerHTML;
    makesound(b);
    btnanimation(b);
}

document.addEventListener("keypress",function(event){
    // console.log(event.key);
    var k=event.key;
    makesound(k);
    btnanimation(k);
});

function makesound(key){
    switch (key) {
        case "w":
            var sound1 = new Audio("sound1.wav");
            sound1.play();
            break;
        case "a":
            var sound2 = new Audio("sound2.wav");
            sound2.play();
            break;
        case "s":
            var sound3 = new Audio("sound3.wav");
            sound3.play();
            break;
        case "d":
            var sound4 = new Audio("sound4.wav");
            sound4.play();
            break;
        case "j":
            var sound5 = new Audio("sound5.wav");
            sound5.play();
            break;
        case "k":
            var sound6 = new Audio("sound6.wav");
            sound6.play();
            break;
        case "l":
            var sound7 = new Audio("sound7.wav");
            sound7.play();
            break;
        
        default:console.log(key);
            break;
    }
}


function btnanimation(curntkey)
{
    var activebtn = document.querySelector("."+curntkey); 
    activebtn.classList.add("pressed");
    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100);
}
// function playsound(){
//     document.querySelectorAll("audio").play();
// }
// document.querySelectorAll(".w").addEventListener("click",playsound);

//document.firstElementChild.lastElementChild.querySelector("div").addEventListener("click",handclk);

// document.querySelectorAll("button")[0].addEventListener("click",handclk);
// document.querySelectorAll("button")[1].addEventListener("click",handclk);
// document.querySelectorAll("button")[2].addEventListener("click",handclk);
// document.querySelectorAll("button")[3].addEventListener("click",handclk);
// document.querySelectorAll("button")[4].addEventListener("click",handclk);
// document.querySelectorAll("button")[5].addEventListener("click",handclk);
// document.querySelectorAll("button")[6].addEventListener("click",handclk);