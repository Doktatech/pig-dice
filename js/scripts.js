var initialScore =0;
function Player (Player1, Player2){
    this.firstPlayer =Player1;
    this.secondPlayer= Player2;
}

$(document).ready(function() {
    $("#roll").click(function(){
        var score= document.getElementById ('score');
        var remark = document.getElementById ('remark');
        let rollValue = Math.floor( Math.random() * 6 ) + 1        
        score.innerHTML=rollValue;        
        if (rollValue!==1) {
            totalScore=initialScore+=rollValue;
        }    
       if (rollValue!==1){
            remark.innerHTML ='You rolled '+rollValue+'.'+'Hold or Continue?';
            remark0.innerHTML ='You total score is ' + totalScore;
            
        }else{
            remark.innerHTML = 'You rolled a ' + rollValue+ '.'+' Please hand over';
            //document.getElementById("roll").disabled = true;
        }
        if (totalScore>=100){
            remark.innerHTML=('Hurray!!!!You WON the Game.Refresh to Start');
            document.getElementById("roll").disabled = true;
        }
              
    $("#hold").click(function(){
        var Player1=document.getElementById('Player1');
        remark.innerHTML='You held.Please pass the Die'
    //     if (rollValue!==1) {
    //         totalScore1=initialScore+=rollValue;
    //     }    
    //    if (rollValue!==1){
    //         remark.innerHTML ='Hold or Continue?';
    //         remark.innerHTML ='You total score is ' + totalScore;
            
    //     }else{
    //         remark.innerHTML = 'You rolled a ' + rollValue+ '.'+' Please hand over';
    //         //document.getElementById("roll").disabled = true;
    //     }
    //     if (totalScore>=100){
    //         remark.innerHTML=('Hurray!!!!You WON the Game.Refresh to Start');
    //         document.getElementById("roll").disabled = true;
    //     }
      
    });

    });
});
