const jokearr = [
  "Did you hear about the first restaurant to open on the moon?It had great food, but no atmosphere.",
  "Why don’t scientists trust atoms? Because they make up everything!",

  " What do dentists call their x-rays?Tooth pics!",

  " What did one ocean say to the other ocean? Nothing, it just waved.",

  " Do you want to hear a construction joke?Sorry, I’m still working on it.",

  "Clean joke that's funny for adults.Unsplash",

  " Did you hear about the fire at the circus? It was in tents!",

  " Why do ducks have feathers?To cover their butt quacks!",

  " What’s the difference between a hippo and a zippo?One is really heavy and the other’s a little lighter.",

  " What does a nosey pepper do? It gets jalapeño business.",

  " Why should you never trust stairs?They’re always up to something.",

  " When does a joke become a ‘dad’ joke?When it becomes apparent.",

  "Related: Christian Jokes",

  " Why did the bullet end up losing his job?He got fired.",

  " What kind of shorts do clouds wear?Thunderpants",

  " I entered ten puns in a contest to see which would win.No pun in ten did.",

  " How do you measure a snake?In inches—they don’t have feet.",

  " Where does a waitress with only one leg work?IHOP.",

  " What does a house wear?Address!",

  " Why are toilets always so good at poker?They always get a flush",

  " Why is Peter Pan always flying?Because he Neverlands. (I love this joke because it never grows old.)",

  " You heard the rumor going around about butter?Never mind, I shouldn’t spread it.",
];


document.querySelector(".but").addEventListener("click",showj);

function showj(){
    let ran = Math.floor(Math.random()*22);
    document.getElementById("joke").innerHTML =jokearr[ran];
}
let cnt = 1;
const button = document.getElementById("btn");
button.addEventListener("mouseover",chnge);

function chnge(){
    if(cnt<6){
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
    cnt++;
    }
    else{
        button.style.left=`${600}px`;
        button.style.top=`${340}px`;
        button.textContent="Ok Sorry..Now try";
        button.style.color="red";
    }
    
}
