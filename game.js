$( document ).ready(function(){
  var Random=Math.floor(Math.random()*102+19)
  
  $('#target').text(Random);
  
  var num1= Math.floor(Math.random()*12+1)
  var num2= Math.floor(Math.random()*12+1)
  var num3= Math.floor(Math.random()*12+1)
  var num4= Math.floor(Math.random()*12+1)
  
  var playerTotal= 0; 
  var wins= 0;
  var losses = 0;
  

$('#wins').text(wins);
$('#losses').text(losses);

  function reset(){
      Random=Math.floor(Math.random()*102+19);
      console.log(Random)
      $('#scoreToMatch').text(Random);
      num1= Math.floor(Math.random()*12+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*14+1);
      num4= Math.floor(Math.random()*13+1);
      playerTotal= 0;
      $('#totalScore').text(playerTotal);
    } 

  function woohoo(){
    alert("Congrats! You won!");
     wins++; 
      $('#wins').text(wins);
  reset();
}
  function loser(){
    alert ("Sorry! You lose!");
    losses++;
      $('#losses').text(losses);
  reset()
}
 
    $("#ruby").on ('click', function(){
      console.log("working")
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $('#personalScore').text(playerTotal); 
          if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    }) 
    $("#emerald").on ('click', function(){
      console.log("working")
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#personalScore').text(playerTotal); 
            //Win & lose conditions
          if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })   
    $("#sapphire").on ('click', function(){
      console.log("working")
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#personalScore').text(playerTotal); 
            //Win & lose conditions
          if (playerTotal == Random){
            woohoo();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    }) 
});
