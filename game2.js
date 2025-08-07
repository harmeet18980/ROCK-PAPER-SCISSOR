let box=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")

let turnO=true;
const winpattern=
    [[0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,8],
    [2,5,8],
    [3,4,5],
    [6,7,8]];

box.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("the box was clicked");
        if(turnO){
        box.innerText="O";
        turnO=false;
        }
        else{
          box.innerText="X";
          turnO=true;
        }
        box.disabled=true;   //once done cannot be changed
        checkWinner();
    });
});

const checkWinner = () =>{
    for (let pattern of winpattern){

          let pos1Val=box[pattern[0]].innerText
          let pos2Val=box[pattern[1]].innerText
          let pos3Val=box[pattern[2]].innerText;

          if(pos1Val!=""&& pos2Val!=""&& pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val)
            }
          }
    }
}
reset.addEventListener("click",()=>{
    box.forEach((b)=>{
        b.innerText="";
        b.disabled=false;
    });
    turnO=true;
})
