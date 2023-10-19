let score1 = 0
let score2 = 0
let player1trn=true

const player1 = document.getElementById("Player1")
const player2 = document.getElementById("Player2")
const player1dice = document.getElementById("player1dice")
const player2dice = document.getElementById("player2dice")
const score1board = document.getElementById("player1score")
const score2board = document.getElementById('player2score') 
const message = document.getElementById("message")

//roll dice
function roll(){
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

         const img1 = 'Dice_Images/dice_'+randomNumber1+'.png' 
         document.querySelectorAll('img')[0].setAttribute('src',img1);

         const img2 = 'Dice_Images/dice_'+randomNumber2+'.png' 
         document.querySelectorAll('img')[1].setAttribute('src',img2);
          
         var total = randomNumber1+randomNumber2
        
        //player 1 turn
       
         if(player1trn){
            
           score1 += total
           player1dice.textContent = total
           score1board.textContent = score1
            player1dice.classList.remove("active")
            player2dice.classList.add("active")
            if(randomNumber1!=randomNumber2){
                player1trn=false
                message.textContent = "player 2 turn"
            }else if(randomNumber1==1 && randomNumber2==1){
                player1trn=false
                score1=0
                message.textContent = "player 2 turn"
                 
            }else{
                return player1trn=true
            }
            
            //player 2 turn
            
         }else{
            score2 += total
            player2dice.textContent = total
            score2board.textContent = score2
            player2dice.classList.remove("active")
            player1dice.classList.add("active")
            if(randomNumber1!=randomNumber2){
                player1trn=true
                message.textContent = "player 1 turn"
            }else if(randomNumber1==1 && randomNumber2==1){
                player1trn=true
                score2=0
                message.textContent = "player 1 turn"
               
            }else{
                return player1trn=false
            }
           
         }

         if(score1>=100){
            message.textContent= "player 1 has won!"
            
         }else if(score2>=100){
            message.textCount = "player 2 has won!"
         }
         player1trn!=player1trn
})
}