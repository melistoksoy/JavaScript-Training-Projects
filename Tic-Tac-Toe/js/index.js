const cellElements=document.querySelectorAll('[data-cell]')
const board=document.getElementById('board')
const win=document.getElementById('win')
const x_class='x'
const circle_class='circle'
const win_message=document.querySelector('[data-win-message-text]')
const restart=document.getElementById('restart')
const winning= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let circleTurn

startGame()

function startGame(){
    circleTurn=false
    cellElements.forEach(function(item){
        item.addEventListener('click',handleClick,{once:true})
     })
     boardHover()
}

function handleClick(e){
 const cell=e.target
 const currentClass=circleTurn ? circle_class:x_class
 placeMark(cell,currentClass)

 if(checkWin(currentClass)) {
    endGame(false)
 }
 else if (isDraw()){
    endGame(true)
 }
 else {
 switchTurns()
 boardHover()
 }
}
function endGame(draw){
    if(draw){
     win_message.innerText='Draw!'
    }
    else {
      win_message.innerText=`${circleTurn ? "O's" : "X's"} Wins!`
    }
    win.classList.add('show')
}
function isDraw(){
     return [...cellElements].every(cell=> {
        return cell.classList.contains(x_class) || cell.classList.contains(circle_class)
     })
}

function placeMark(cell,currentClass){
    cell.classList.add(currentClass)

}
function switchTurns(){
    circleTurn =!circleTurn
}
function boardHover(){
    board.classList.remove(x_class)
    board.classList.remove(circle_class)
    if (circleTurn){
        board.classList.add(circle_class)
    } else{
        board.classList.add(x_class)
    }
}
function checkWin(currentClass){
 return winning.some(combination => {
    return combination.every(index=> {
            return cellElements[index].classList.contains(currentClass)
        
    })
 })
}
restart.addEventListener('click',function(){
    location.reload()
})