var initialScore =0;

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
            remark.innerHTML ='Hold or Continue?';
            remark2.innerHTML ='You total score is ' + totalScore;
            
        }else{
            remark.innerHTML = 'You rolled a ' + rollValue+ '.'+' Please hand over';
            remark2.innerHTML ='You total score is ' + totalScore
        }
        if (totalScore>=100){
            remark.innerHTML=('Hurray!!!!You WON the Game');
        }
              
    $("#hold").click(function(){
        var hold=document.getElementById('hold');
        remark.innerHTML='You held.Please pass the Die'
      
    });

    });
});
