let score =0;
let tot = 0;
document.querySelectorAll("button")[0].addEventListener("click",function(){
    var ans = document.querySelector("#html").value;
    ans = ans.toLowerCase();
    if(ans=="hypertext markup language")
    {
        document.querySelector("#html").value="correct";
        score++;
        tot++;
    }
    else
    {
        document.querySelector("#html").value="wrong";
        tot++;
    }
    document.querySelector("#html").disabled = true;
});

document.querySelectorAll("button")[1].addEventListener("click",function(){
    var ans = document.querySelector("#css").value;
    ans = ans.toLowerCase();
    if(ans=="cascading style sheet")
    {
        document.querySelector("#css").value="correct";
        score++;
        tot++;
    }
    else
    {
        document.querySelector("#css").value="wrong";
        tot++;
    }
    document.querySelector("#css").disabled = true;
});

document.querySelectorAll("button")[2].addEventListener("click",function(){
    var ans = document.querySelector("#js").value;
    ans = ans.toLowerCase();
    if(ans=="javascript")
    {
        document.querySelector("#js").value="correct";
        score++;
        tot++;
    }
    else
    {
        document.querySelector("#js").value="wrong";
        tot++;
    }
    document.querySelector("#js").disabled = true;
});


document.querySelectorAll("button")[3].addEventListener("click",function(){
    document.querySelector("#p1").innerHTML ="Your total score is "+score+ " out of "+tot;
    });
