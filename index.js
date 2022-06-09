var pWin = false
var pLose = false
var pScore = 0
var aiScore = 0
var playerOutput = ''
var aiOutput;

function scissors()
{
    playerOutput = '1'
}
function paper()
{
    playerOutput = '2'
}
function rock()
{
    playerOutput = '3'
}

const aioutput = () =>
{
    globalThis.aiOutput = Math.floor(Math.random()*3) + 1;
    if(aiOutput == 1){
        document.getElementById("ai1").style.display ='';
        document.getElementById("ai2").style.display ='none';
        document.getElementById("ai3").style.display ='none';
    }
    
    if(aiOutput == 2){
        document.getElementById("ai1").style.display ='none';
        document.getElementById("ai2").style.display ='';
        document.getElementById("ai3").style.display ='none';
    }
    
    if(aiOutput == 3){
        document.getElementById("ai1").style.display ='none';
        document.getElementById("ai2").style.display ='none';
        document.getElementById("ai3").style.display ='';
    }
}
function calculate()
{

    if (playerOutput == aiOutput)
    {
        msg = document.getElementById('outcome');
        msg.innerHTML = 'Tie'
    }
    if (playerOutput == '1' && aiOutput == '2') 
    {
        pWin = true
    }
    if(playerOutput == "2" && aiOutput == "3")
    {
        pWin=true
    }
    if(playerOutput == "3" && aiOutput == "1")
    {
        pWin=true
    }
    if (playerOutput == '1' && aiOutput == '3' || playerOutput == '2' && aiOutput == '1' || playerOutput == '3' && aiOutput == '2')
    {
        pLose = true
    }

    msg = document.getElementById('outcome');
    msgP = document.getElementById('playerScore');
    msgAi = document.getElementById('aiScore');

    if(pWin==true)
    {
        pScore = pScore + 1;
        msgP.textContent = `Your Score: ${pScore}`
        msg.innerHTML = `You Win!`
        pWin=false
    }

    if(pLose==true)
    {
        aiScore = aiScore + 1;
        msgAi.textContent = `Ai Score: ${aiScore}`
        msg.innerHTML = 'You Lose...'
        pLose=false
    }
    if (playerOutput == aiOutput) 
    {
    msg.innerHTML = "Tie!"
    }

}

function displaySelf(playerChoice)

{
    if (playerChoice == 1) {
        document.getElementById("1").style.display = '';
        document.getElementById("2").style.display = 'none';
        document.getElementById("3").style.display  = 'none';
    }
    if (playerChoice == 2) {
        document.getElementById("1").style.display  = 'none';
        document.getElementById("2").style.display  = '';
        document.getElementById("3").style.display = 'none';
    }
    if (playerChoice == 3) {
        document.getElementById("1").style.display  = 'none';
        document.getElementById("2").style.display  = 'none';
        document.getElementById("3").style.display  = '';
    }
}
