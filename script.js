var numberofButton = document.querySelectorAll("button").length;

for (i = 0; i < numberofButton; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var btnInner = this.innerHTML;
        makeSound(btnInner);
        buttonAnimation(btnInner);
    })
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key) {
    switch (key) {
        case "1":
            var tom1 = new Audio("sounds/c6.mp3");
            tom1.play();
            break;
        case "2":
            var tom2 = new Audio("sounds/d6.mp3");
            tom2.play();

            break;
        case "3":
            var tom3 = new Audio("sounds/e6.mp3");
            tom3.play();

            break;
        case "4":
            var tom4 = new Audio("sounds/f6.mp3");
            tom4.play();

            break;
        case "5":
            var crash = new Audio("sounds/g6.mp3");
            crash.play();

            break;
        case "6":
            var kickBass = new Audio("sounds/a6.mp3");
            kickBass.play();

            break;
        case "7":
            var snare = new Audio("sounds/b6.mp3");
            snare.play();

            break;
        case "8":
            var snare = new Audio("sounds/c7.mp3");
            snare.play();

            break;

        default:
            console.log(btnInner);
            break;
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");

    //timeout
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}