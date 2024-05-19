let computer = ["Rock","Paper","Scissor"];
let win =0;
let lose=0;
let ties=0;
document.querySelectorAll("button")[0].addEventListener("click",function(){
    let ud = document.querySelectorAll("button")[0].textContent;
    let randomNmbr= Math.floor(Math.random() * 3);
    let cd= computer[randomNmbr];
   if(ud == cd)
   {
    //alert(ud+"Ties"+cd);
    document.querySelector("#p1").innerHTML ="<h2>Ties</h2> <br> You = " + ud + " and Computer = " +cd ;
    ties++;
    document.querySelector("#p2").innerHTML="win = "+win+" : lose = "+lose+": ties = "+ties;
   }
   else if(ud == 'Rock' && cd =='Paper')
   {
    //alert(ud+"Computer wins"+cd); 
    document.querySelector("#p1").innerHTML ="<h2>Computer wins</h2> <br> You = " + ud + " and Computer = " +cd ;
    lose++;
    document.querySelector("#p2").innerHTML="win = "+win+" : lose = "+lose+": ties = "+ties;
   }
   else if(ud == 'Rock' && cd =='Scissor')
   {
    //alert(ud+"You wins"+cd);
    document.querySelector("#p1").innerHTML ="<h2>You wins </h2><br> You = " + ud + " and Computer = " +cd ;
    win++;
    document.querySelector("#p2").innerHTML="win = "+win+" : lose = "+lose+": ties = "+ties;
   }
   else
   {
    alert("code error!");
   }
});

document.querySelectorAll("button")[1].addEventListener("click",function(){
    let ud = document.querySelectorAll("button")[1].textContent;
    let randomNmbr= Math.floor(Math.random() * 3);
    let cd= computer[randomNmbr];
   if(ud == cd)
   {
    //alert(ud+"Ties"+cd);
    document.querySelector("#p1").innerHTML ="<h2>Ties</h2> <br> You = " + ud + " and Computer = " +cd ;
    ties++;
    document.querySelector("#p2").innerHTML="win = "+win+" : lose = "+lose+": ties = "+ties;
   }
   else if(ud == 'Paper' && cd =='Rock')
   {
    //alert(ud+"You wins"+cd);
    document.querySelector("#p1").innerHTML ="<h2>You Win</h2> <br> You = "+ud +" and Computer = "+cd ;
    win++;
    document.querySelector("#p2").innerHTML="win = "+win+" : lose = "+lose+": ties = "+ties;
   }
   else if(ud == 'Paper' && cd =='Scissor')
   {
    //alert(ud+"Computer wins"+cd);
    document.querySelector("#p1").innerHTML ="<h2>Computer wins </h2><br> You = "+ud +" and Computer = "+cd ;
    lose++;
    document.querySelector("#p2").innerHTML="win = "+win+" : lose = "+lose+": ties = "+ties;
   }
   else
   {
    alert("code error!");
   }
});


document.querySelectorAll("button")[2].addEventListener("click",function(){
    let ud = document.querySelectorAll("button")[2].textContent;
    let randomNmbr= Math.floor(Math.random() * 3);
    let cd= computer[randomNmbr];
   if(ud == cd)
   {
    //alert(ud+"Ties"+cd);
    document.querySelector("#p1").innerHTML ="<h2>Ties</h2> <br> You = " + ud + " and Computer = " +cd ;
    ties++;
    document.querySelector("#p2").innerHTML="win = "+win+" : lose = "+lose+": ties = "+ties;
   }
   else if(ud == 'Scissor' && cd =='Rock')
   {
    //alert(ud+"Computer wins"+cd);
    document.querySelector("#p1").innerHTML ="<h2>Computer wins</h2> <br> You = " + ud + " and Computer = " +cd ;
    lose++;
    document.querySelector("#p2").innerHTML="win = "+win+" : lose = "+lose+": ties = "+ties;
   }
   else if(ud == 'Scissor' && cd =='Paper')
   {
    //alert(ud+"You wins"+cd);
    document.querySelector("#p1").innerHTML ="<h2>You wins</h2><br> You = " + ud + " and Computer = " +cd ;
    win++;
    document.querySelector("#p2").innerHTML="win = "+win+" : lose = "+lose+": ties = "+ties;
   }
   else
   {
    alert("code error!");
   }
});

document.querySelectorAll("button")[3].addEventListener("click",function(){
    win =0;
    lose=0;
    ties=0;
    document.querySelector("#p2").innerHTML="win = "+win+" : lose = "+lose+": ties = "+ties;
});



