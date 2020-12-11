
let character = document.getElementById("character");
let obstacle = document.getElementById("obstacle");
let scoreboard = document.getElementById("scoreboard");

let gameOver = false;
let jumpCount = -1;

//jump
document.addEventListener("keyup", function(keyPress){
  //space bar is pressed
  if(keyPress.keyCode == 32 && !gameOver){
      // alert("space detected");
      if(character.classList != "animate"){
        character.classList.add("animate");
      } //only adds animate class if not added yet in case of spamming
      setTimeout(function(){
        character.classList.remove("animate");
      }, 700); //removes animation class after 700 ms
  }
});



//game conditions
let checkHit = setInterval(function(){
  let characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let obstacleLeft =
    parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
  if(obstacleLeft > 0 && obstacleLeft < 20 && characterTop >= 130){
    gameOver = true;
    obstacle.style.animation = "none";  //stops running obstacle animation
    obstacle.style.visibility = "hidden";  //stops showing obstacle after loss
  }
}, 10); //every 10 ms

let addScore = setInterval(function(){
  let obstacleRight =
    parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));
  //add to scoreboard
  if(obstacleRight >= 0 && obstacleRight <= 1){
    jumpCount++;
    console.log(jumpCount);
  }
}, 1); //every 5 ms

//game reset
document.querySelector("#reset").addEventListener("click", () => {
  gameOver = false;
  obstacle.style.animation = "obstacle 1s infinite linear";
  obstacle.style.visibility = "visible";
})
