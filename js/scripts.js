$(document).ready(function() {
    $("#roll").click(function(){
        var score= document.getElementById ('score');
        var remark = document.getElementById ('remark')
        let rollValue = Math.floor( Math.random() * 6 ) + 1
        score.innerHTML=rollValue;
        remark.innerHTML = 'You rolled ' + rollValue+ '.'+' Continue or Hold?';
    $("#hold").click(function(){


    });

    });
});
