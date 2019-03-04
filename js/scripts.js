var initialScore =0;
$(document).ready(function() {
    $("#roll").click(function(){
        var score= document.getElementById ('score');
        var remark = document.getElementById ('remark')
        let rollValue = Math.floor( Math.random() * 6 ) + 1        
        score.innerHTML=rollValue;
        var totalSum= initialScore+=rollValue;        
        
        if (rollValue===1){
            remark.innerHTML ='You rolled a ' + rollValue +'.'+ ' Please hand over'
            remark2.innerHTML= "Total score discarded"
        }else{
            remark.innerHTML = 'You rolled a ' + rollValue+ '.'+' Continue or Hold?';
            remark2.innerHTML = totalSum;
        }
              
    $("#hold").click(function(){
      remark.innerHTML=('You passed the turn to the next player');

    });

    });
});
