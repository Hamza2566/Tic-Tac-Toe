const grids =document.querySelector('.grid')
const cells = document.getElementsByClassName('cell')
const reset = document.querySelector('.buton')

playerone = prompt('Player One');
playertwo = prompt('Player Two');
function player1(name,sign){
    this.name = name
    this.sign = sign;
} 
function player2(name,sign){
    this.name = name
    this.sign = sign;
} 

const x = 'X'
const y = 'O'
const first = new player1(playerone,x)
const second = new player2(playertwo,y)
let currentPlayer = first;
let firswin = 0;
let secondwin = 0;
let round = 0;
function resetgame(){
    if (round === 6) {
        
        
    }
}


let XOarray = Array(9).fill(" ")
// console.log(array);
function firstwinner(winnerName) {
    const span1 = document.querySelector('.span1');
    span1.textContent = winnerName + ':'+firswin;
}
   
function tiegame() {
    const span1 = document.querySelector('.span2');
    span1.textContent = ' its Tie ';
}
   
function secondwinner(winnerName) {
    const span1 = document.querySelector('.span3');
    span1.textContent = winnerName + ": " + secondwin;
}

function Round() {
    round++; 
    const span2 = document.querySelector('.span2'); 

    if (span2) {
        span2.textContent = 'Round: ' + round;
    } else {
        console.error('Element with class "span2" not found.');
    }

}
function resetcell(){
    XOarray.fill(" ")
    const cells = Array.from(grids.children);
    cells.forEach(element => {
        element.textContent = '';
        
        
    });
    
}
reset.addEventListener('click',()=>{  
        resetcell()
        round = 0;
        firswin = 0;
        secondwin = 0; 
        const overlay = document.querySelector('.overlay');
        const h3 = document.querySelector('.text')
        const reset = document.querySelector('.buton')
        overlay.classList.remove('active');
        h3.classList.remove('active')
        reset.classList.remove('active')
    const span1 = document.querySelector('.span2')
    span1.textContent = 'Round: 0';
    const span2 = document.querySelector('.span1')
    span2.textContent = '';
    const span3 = document.querySelector('.span3')
    span3.textContent = '';
})

grids.addEventListener('click', function click(e){
    const cell = e.target;

    if (cell.classList.contains('cell')) {
        const index = Array.from(grids.children).indexOf(cell);
        if (XOarray[index] === " ") {
            cell.textContent = currentPlayer.sign;
            XOarray[index] = currentPlayer.sign;
            currentPlayer = currentPlayer === first ? second : first;
        } 
    }
        function check() {
            if (XOarray[0] === 'X' && XOarray[1] === 'X' && XOarray[2] === 'X') {
              
                firswin++
                 firstwinner(first.name)    
                 Round()                   
                resetcell()
            } else if (XOarray[0] === 'O' && XOarray[1] === 'O' && XOarray[2] === 'O') {
               
                secondwin++
                secondwinner(second.name)   
                Round()                   
                resetcell()
            }
        
            if (XOarray[3] === 'X' && XOarray[4] === 'X' && XOarray[5] === 'X') {
              
                firswin++
                firstwinner(first.name)      
                Round()                   
                resetcell()
                         

            } else if (XOarray[3] === 'O' && XOarray[4] === 'O' && XOarray[5] === 'O') {
               
                secondwin++
                secondwinner(second.name)    
                Round()                   
                resetcell()
                           

            }
        
            if (XOarray[6] === 'X' && XOarray[7] === 'X' && XOarray[8] === 'X') {
              
                firswin++
                firstwinner(first.name)        
                Round()                   
                resetcell()
                       


            } else if (XOarray[6] === 'O' && XOarray[7] === 'O' && XOarray[8] === 'O') {
               
                secondwin++
                secondwinner(second.name)      
                Round()                   
                resetcell()
                         

            }
        
            // Check columns
            if (XOarray[0] === 'X' && XOarray[3] === 'X' && XOarray[6] === 'X') {
              
                firswin++
                firstwinner(first.name)         
                Round()                   
                resetcell()
                      

            } else if (XOarray[0] === 'O' && XOarray[3] === 'O' && XOarray[6] === 'O') {
               
                secondwin++
                secondwinner(second.name)      
                Round()                   
                resetcell()
                         
            

            }
        
            if (XOarray[1] === 'X' && XOarray[4] === 'X' && XOarray[7] === 'X') {
              
                firswin++
                firstwinner(first.name)         
                Round()                   
                resetcell()
               
            } else if (XOarray[1] === 'O' && XOarray[4] === 'O' && XOarray[7] === 'O') {
               
                secondwin++
                secondwinner(second.name)    
                Round()                   
                resetcell()
                           
             

            }
        
            if (XOarray[2] === 'X' && XOarray[5] === 'X' && XOarray[8] === 'X') {
              
                firswin++
                firstwinner(first.name)  
                Round()                   
                resetcell()
                             

            } else if (XOarray[2] === 'O' && XOarray[5] === 'O' && XOarray[8] === 'O') {
               
                secondwin++
                secondwinner(second.name)    
                Round()                   
                resetcell()
                           


            }
        
            // Check diagonals
            if (XOarray[0] === 'X' && XOarray[4] === 'X' && XOarray[8] === 'X') {
              
                firswin++
                firstwinner(first.name)       
                Round()                   
                resetcell()
                        

            } else if (XOarray[0] === 'O' && XOarray[4] === 'O' && XOarray[8] === 'O') {
               
                secondwin++
                secondwinner(second.name)          
                Round()                   
                resetcell()
                     

            }
        
            if (XOarray[2] === 'X' && XOarray[4] === 'X' && XOarray[6] === 'X') {
              
                firswin++
                firstwinner(first.name)         
                Round()                   
                resetcell()
                      

            } else if (XOarray[2] === 'O' && XOarray[4] === 'O' && XOarray[6] === 'O') {
               
                secondwin++
                secondwinner(second.name)        
                Round()                   
                resetcell()

    

            }    
        }
            function tie() {
            const cells = Array.from(grids.children);
                const emptyCells = cells.filter(cell => cell.textContent === '');
                if (emptyCells.length === 0) {
                    round++;
                resetcell()
                    tiegame()
                }
            }
            tie()
        check()
        function winner(round,firswin,secondwin) {
            if (round === 5) {
                const overlay = document.querySelector('.overlay');
                const h3 = document.querySelector('.text')
                const reset = document.querySelector('.buton')
                overlay.classList.add('active');
                h3.classList.add('active')
                reset.classList.add('active')

                
                if (firswin > secondwin) {
                 h3.textContent= `${first.name} Has Won The Game `
                    
                }
                else if(secondwin > firswin){
                 h3.textContent= `${second.name} Has Won The Game`
                   
                }
                else{
                    h3.textContent= ` It's Tie Game!`
                    
                    
                }
            }
                    
                }
            
                winner(round,firswin,secondwin)
        },





















        
        
      
    

);


































// grids.addEventListener('click',(e)=>{
//  const cell = e.target
  

//  grids.addEventListener('click', (e) => {
//     const cell = e.target;

//     const index = XOarray.from(grids.children).indexOf(cell);
// console.log(index);
     
//     if (cell.textContent === '') {
//         cell.textContent = currentPlayer.sign;

//         currentPlayer = currentPlayer === first ? second : first;
//     } 
// });

 
        

// },

    
   
//     );
     



