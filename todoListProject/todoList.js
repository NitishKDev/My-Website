const todo = [
    {name:'make dinner',duedate:'2024-2-2'},
    {name:'play',duedate:'2025-12-2'}
];

//document.querySelector("#b1").addEventListener("click",addl);
rendertodolist();

function rendertodolist(){
    let htmlEle='';
for(let j=0;j<todo.length;j++)
{
    var k = todo[j];
    var name = k.name;
    var duedate = k.duedate;
    var html= `
    <p>
        ${name} ${duedate}
        <button onclick="
        todo.splice(${j},1);
        rendertodolist();
        ">Delete</button>
    </p> `;

    htmlEle = htmlEle + html;

    document.querySelector("#second").innerHTML=htmlEle;
}
}

function addl(){
    var i=document.querySelector("#inpt").value;
    var j=document.querySelector("#date").value;
    todo.push({
        name:i,
        duedate:j
});
    document.querySelector("#inpt").value='';
    rendertodolist();
}


