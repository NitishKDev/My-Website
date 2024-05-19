let items = 0;
    document.querySelector("#show").addEventListener("click",function(){
    display1();

});

document.querySelector("#add1").addEventListener("click",function(){
    items = items +1;
    display2();
});

document.querySelector("#add2").addEventListener("click",function(){
    items = items+2;
    display3();
});

document.querySelector("#add3").addEventListener("click",function(){
    items = items+3;
    display4();
})

document.querySelector("#reset").addEventListener("click",function(){
    items =0;
    display5();
})

function display1(){
    document.querySelector("#p1").innerHTML= "Total items = "+items;
    const myTimeout1 = setTimeout(clear1, 3000);
}
function clear1(){
    document.querySelector("#p1").innerHTML= "";
}

function display2(){
    document.querySelector("#p2").innerHTML= "One item added.";
    const myTimeout2 = setTimeout(clear2, 3000);
}
function clear2(){
    document.querySelector("#p2").innerHTML= "";
}

function display3(){
    document.querySelector("#p3").innerHTML= "Two item added.";
    const myTimeout3 = setTimeout(clear3, 3000);
}
function clear3(){
    document.querySelector("#p3").innerHTML= "";
}

function display4(){
    document.querySelector("#p4").innerHTML= "Three item added.";
    const myTimeout4 = setTimeout(clear4, 3000);
}
function clear4(){
    document.querySelector("#p4").innerHTML= "";
}

function display5(){
    document.querySelector("#p5").innerHTML= "Cart is empty now!";
    const myTimeout5 = setTimeout(clear5, 3000);
}
function clear5(){
    document.querySelector("#p5").innerHTML= "";
}