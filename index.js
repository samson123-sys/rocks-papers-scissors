const handOptions ={
    "rock": "btn-rock btn-B hand",
    'scissors': "btn-scissors btn-B hand",
    'paper': "btn-paper btn-B hand"
}
const imageOption = {
    "rock" : "/rocks-papers-scissors/images/icon-rock.svg",
    "paper" : "/rocks-papers-scissors/images/icon-paper.svg",
    "scissors" : "/rocks-papers-scissors/images/icon-scissors.svg",
}


const rules = ()=>{
    const btnn = document.querySelector(".rules-modal")
    btnn.style.display ="flex"

    const close = document.querySelector(".ruled")
    
}

function closed(){
    const close = document.querySelector(".rules-modal")
    close.style.display= "none"    
}
function buttomm(){
    const cancel = document.querySelector(".rules-modal")
    cancel.style.display = "none"
}


let Score = 0;

const pickgame = (hand)=>{
    console.log(hand)


    let userPicked = document.querySelector(".game");
     userPicked.style.display = "none";


    let contest = document.querySelector(".second");
    contest.style.display= "inline-flex"
    
    // let dop = document.querySelector(".tt")
    // dop.style.display ="inline-block"

    let x = window.matchMedia("(min-width: 300px)")
    x = document.querySelector(".tt");
    x.style.display = "block";

    //  let y = window.matchMedia("(min-width: 900px)")

    // if(y.matches){
    //     y = document.querySelector(".tt");
    //     y.style.display = "block";
    // }
   
    
        document.getElementById("userPicked").className = handOptions[hand];
   
   
        document.getElementById("userPickedee").src = imageOption[hand]; 

        let cpHand = computerHand()

        referee(hand, cpHand);
       
    
}

const computerHand = ()=>{
   let hand = ["rock", "paper", "scissors"]
   let cphand = hand[Math.floor(Math.random() * hand.length)]

   document.getElementById("computerPickede").src = imageOption[cphand];
   document.getElementById("computerPicked").className = handOptions[cphand]

   return cphand

}

const referee = (userHand, cpHand)=>{

    //Setting the ganme code for the rock 
   if(userHand == "rock" && cpHand == "scissors"){
      setDecision("YOU WIN")
      setSCORE(Score= Score +1)
   }if(userHand == "rock" && cpHand == "paper"){
      setDecision("YOU LOSE")
   }if(userHand == "rock" && cpHand == "rock"){
    setDecision("DRAW")
   }


    //Setting the game code for the paper   
    if(userHand == "paper" && cpHand == "rock"){
        setDecision("YOU WIN")
        setSCORE(Score + 1)
    }if(userHand == "paper" && cpHand == "scissors"){
        setDecision("YOU LOSE")
     }
     if(userHand == "paper" && cpHand == "paper"){
      setDecision("DRAW")
     }


    //Setting the game code for the scissors
    if(userHand == "scissors" && cpHand == "paper"){
        setDecision("YOU WIN")
        setSCORE(Score = Score + 1)
     }if(userHand == "scissors" && cpHand == "rock"){
        setDecision("YOU LOSE")
     }if(userHand == "scissors" && cpHand == "scissors"){
      setDecision("DRAW")
     }  
}



const setDecision = (decision)=>{
    console.log(decision)
    document.querySelector(".decision h3").innerText = decision
    document.querySelector(".third h3").innerText = decision
}


const setSCORE =(score)=>{ 
    Score = score
    document.querySelector(".score h1").innerText = score
}

const restartGame =()=>{
    let userPicked = document.querySelector(".game");
    userPicked.style.display= "flex"


    let contest = document.querySelector(".second");
    contest.style.display = "none";

    let x = window.matchMedia("(max-width: 300px)")
    x = document.querySelector(".tt");
    x.style.display = "none";

    // let x = window.matchMedia("min-width: 900px")
    // x = document.querySelector(".tt");
    // x.style.display = "block";

}