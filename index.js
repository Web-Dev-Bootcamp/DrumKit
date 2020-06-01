
function inputSoundMapping(input){
	switch (input) {
    	case "w":
    		var tom1 = new Audio("sounds/tom-1.mp3");
    		tom1.play();
    		break;
    	case "a":
    		var tom2 = new Audio("sounds/tom-2.mp3");
    		tom2.play();
    		break;
    	case "s":
    		var tom3 = new Audio("sounds/tom-3.mp3");
    		tom3.play();
    		break;
    	case "d":
    		var tom4 = new Audio("sounds/tom-4.mp3");
    		tom4.play();
    		break;
    	case "j":
    		var snare = new Audio("sounds/snare.mp3");
    		snare.play();
    		break;
    	case "k":
    		var crash = new Audio("sounds/crash.mp3");
    		crash.play();
    		break;
    	case "l":
    		var kick = new Audio("sounds/kick-bass.mp3");
    		kick.play();
    		break;
    	default:
    		alert(input);
    		break;
    }
}

function buttonAnimation(key){
	var buttonPressed = document.querySelector(("." + key));
	if(buttonPressed == null)
		return;
	buttonPressed.classList.add("pressed");
	setTimeout(function(){
		buttonPressed.classList.remove("pressed");
	}, 200);
}

function handleButtonClick(){
    var buttonText = this.textContent;
    buttonAnimation(buttonText);
    inputSoundMapping(buttonText);
}

function handleKeyPress(event){
	var keyPressed = event.key;
	buttonAnimation(keyPressed);
	inputSoundMapping(keyPressed);
}

document.addEventListener("keypress", handleKeyPress);

var drumButtonList = document.querySelectorAll("button.drum");

for(var i=0;i<drumButtonList.length;i++){
  drumButtonList[i].addEventListener("click", handleButtonClick);
}

