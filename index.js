// detecting button/mouse key press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML; // Fixed 'innerhtml' to 'innerHTML'
        makeSound(buttonInnerHTML);
        animationTopressKey(buttonInnerHTML);
    });
}

// detecting keyboard key press

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    animationTopressKey(event.key);
});

function makeSound(key) {
    switch (key) { // Removed extra ')'
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3'); // Changed audio file
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3'); // Corrected variable and audio
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3'); // Changed audio file
            crash.play();
            break;
        case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }

}

function animationTopressKey(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);
}




























//---------------------------------------------EXTRA CODE FOR HOW TO CLICK KEYWORD TO WORK ON THE SOUND----------------------------

// // Click Event Listener
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         var buttonInnerHTML = this.innerHTML; // Fixed 'innerhtml' to 'innerHTML'
//         makeSound(buttonInnerHTML);
//     });
// }

// // Keyboard Event Listener
// document.addEventListener("keydown", function (event) {
//     makeSound(event.key);
// });

// // Function to Play Sound Based on Key
// function makeSound(key) {
//     switch (key) {
//         case "w":
//             var tom1 = new Audio('sounds/tom-1.mp3');
//             tom1.play();
//             break;
//         case "a":
//             var tom2 = new Audio('sounds/tom-2.mp3');
//             tom2.play();
//             break;
//         case "s":
//             var tom3 = new Audio('sounds/tom-3.mp3');
//             tom3.play();
//             break;
//         case "d":
//             var tom4 = new Audio('sounds/tom-4.mp3');
//             tom4.play();
//             break;
//         case "j":
//             var snare = new Audio('sounds/snare.mp3');
//             snare.play();
//             break;
//         case "k":
//             var crash = new Audio('sounds/crash.mp3');
//             crash.play();
//             break;
//         case "l":
//             var kickBass = new Audio('sounds/kick-bass.mp3');
//             kickBass.play();
//             break;
//         default:
//             console.log("Invalid key pressed: " + key);
//     }
// }
