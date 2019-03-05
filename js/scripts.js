
var initialScore =0;
$(document).ready(function() {
    $("#roll").click(function(){                  
      var score= document.getElementById ('score');
      var remark = document.getElementById ('remark');
      var remark0=document.getElementById ('remark0');
      let rollValue = Math.floor( Math.random() * 6 ) + 1        
      score.innerHTML=rollValue;          
      if (rollValue!==1) {
          totalScore=initialScore+=rollValue;
      }
      if (rollValue!==1) {
        remark.innerHTML ='You rolled '+rollValue+'.'+'Hold or Continue?';
        remark0.innerHTML ='You total score is ' + totalScore;       
         
      }else{
        remark.innerHTML = 'You rolled a ' + rollValue+ '.'+' Please hand over';
        // document.getElementById("roll").disabled=true;
        }
        if (totalScore>=100){
        remark.innerHTML=('Hurray!!!!You WON the Game.Refresh to Start');
        document.getElementById("roll").disabled = true;
        }
    $("#roll2").click(function(){             
        var score2= document.getElementById ('score2');
        var remark = document.getElementById ('remark');
        var remark2=document.getElementById ('remark2');
        let rollValue2 = Math.floor( Math.random() * 6 ) + 1        
				score2.innerHTML =rollValue2;
				
              
        if (rollValue2!==1) {	
									
          currentScore=initialScored+=rollValue2;      
        }  
        if (rollValue2!==1){
        	remark.innerHTML ='You rolled '+rollValue2+'.'+'Hold or Continue?';
        	remark2.innerHTML ='You total score is '+ currentScore;              
                
        }else{
        	remark.innerHTML = 'You rolled a ' + rollValue2+ '.'+' Please hand over';
        
        }
        if (currentScore>=100){
        remark.innerHTML=('Hurray!!!!You WON the Game.Refresh to Start');
        document.getElementById("roll2").disabled = true;
        }
                 
    $("#hold").click(function(){
        

    });

    });
});
});
