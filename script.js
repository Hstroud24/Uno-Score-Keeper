
var playerScores = [0, 0, 0, 0, 0];
//var currentRound = [0, 0, 0, 0, 0];


document.querySelector(".addbt").addEventListener('click', function(){

  for (var i = 0; i < 5; i++) {

    playerScores[i] += parseInt(document.querySelector(".current-" + i).value , 10);

    document.querySelector(".player-" + i).textContent = playerScores[i];
  }
});
