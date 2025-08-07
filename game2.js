let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const score1=document.querySelector("#userscore");
const score2=document.querySelector("#compscore")

const genCompChoice=()=>{
    const options=["ROCK","PAPER","SCISSOR"]; //math.randam to create random choice
    const random=Math.floor(Math.random() * 3);
    return options[random];

}
const drawGame = () => {
    console.log("GAME IS DRAW");
      msg.innerText="IT'S A DRAW";
      msg.style.backgroundColor="blue"
}
const showWinner=(userWin)=>{
    if(userWin===true)
    {
        console.log("YOU WON!!");
        msg.innerText="YOU WON";
        msg.style.backgroundColor="green";
        userscore++;
        score1.innerText=userscore
    }
    else{
        console.log("COMP WON!!");
          msg.innerText="COMP WON";
          msg.style.backgroundColor="red";
          compscore++;
          score2.innerText=compscore
    }
}
const playGame=(userChoice)=> {
    console.log("User Choice:",userChoice);
    const compChoice=genCompChoice();
    console.log("Comp Choice:",compChoice);

if(userChoice === compChoice)
{
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="ROCK"){
    userWin = compChoice==="PAPER"? false : true;}
    else if(userChoice==="PAPER"){
    userWin =compChoice==="SCISSOR" ? false : true;
    } 
    else{
    userWin= compChoice==="ROCK"? false : true;
    }   
    showWinner(userWin);
}
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
    const  userChoice = choice.getAttribute("id");
   
    playGame(userChoice);
    });
});


