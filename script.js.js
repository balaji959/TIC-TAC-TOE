let cells=document.querySelectorAll('.cell');
let reset=document.querySelector('.btn-glitch');
let messageContainer=document.querySelector('.msg-container');
let message=document.getElementById('message');
let turn0=true;
const winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
cells.forEach((cell)=>{
    cell.addEventListener('click',()=>{
        console.log('cell was clicked');
        if(turn0){
            cell.innerText='0';
            turn0=false;
        }   
        else{
            cell.innerText='X';
            turn0=true;
        }
        cell.style.pointerEvents='none';
        checkWinner();
    })
});
const resetGame=()=>{
    reset.addEventListener('click',()=>{
        cells.forEach((cell)=>{
            cell.innerText='';
            cell.style.pointerEvents='';
        });
        messageContainer.classList.add('hide');
        message.innerText='';
        turn0=true;
    })
}
const disableCells=()=>{
    cells.forEach((cell)=>{
        cell.style.pointerEvents='none';
    })}
const showWinnerMessage=(msg)=>{
    messageContainer.classList.remove('hide');
    message.innerText=msg;
    disableCells();

}
const checkWinner=()=>{
    for(let patterns of winningPatterns){
        let pos1val=cells[patterns[0]].innerText;
        let pos2val=cells[patterns[1]].innerText;
        let pos3val=cells[patterns[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !="")
        {
            if(pos1val==pos2val && pos2val==pos3val)
            {
                showWinnerMessage(`Player ${pos1val} has won the game!`)
                resetGame();
                return;
            }

    }}}