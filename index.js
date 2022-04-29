
     //dectecting button press
var numberofDrumButtons = document.querySelectorAll(".drum").length
 for (var i = 0 ;i < numberofDrumButtons ;i++){
     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
         var buttonInnerHtml = this.innerHTML;
            makesound(buttonInnerHtml);
            buttonAnimation(buttonInnerHtml);
     })
    
 }
   // dectecting keyboard press
document.addEventListener("keypress",function(event){
    makesound(event.key)
    buttonAnimation(event.key)
})

function makesound(key){
    switch (key) {
        
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play(); 
            break;
        case "a":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "s":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "d":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
         case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
         default :console.log(buttonInnerHtml);
    }
     
}
function buttonAnimation(cureentKey){
   var activeButton = document.querySelector("."+ cureentKey);
   activeButton.classList.add("pressed")
   setTimeout(function() {
       activeButton.classList.remove("pressed")
   },100)
}