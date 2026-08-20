const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");

let attempts = 0;


// When mouse goes near NO button
noBtn.addEventListener("mouseover", moveButton);


// Move NO button
function moveButton() {

    attempts++;

    // Get screen size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Get button size
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    // Generate random position
    const randomX =
        Math.random() * (screenWidth - buttonWidth - 20);

    const randomY =
        Math.random() * (screenHeight - buttonHeight - 20);

    // Move button
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";


    // Change button text
    if (attempts === 1) {

        noBtn.innerText = "Are you sure? 😭";

    } 
    else if (attempts === 2) {

        noBtn.innerText = "Really? 🥺";

    } 
    else if (attempts === 3) {

        noBtn.innerText = "Think again! 😢";

    } 
    else if (attempts === 4) {

        noBtn.innerText = "Please? ❤️";

    } 
    else if (attempts === 5) {

        noBtn.innerText = "Don't do this 😭";

    } 
    else {

        noBtn.innerText = "Catch me! 😂";

    }


    // Make YES button bigger
    let size = 1 + attempts * 0.08;

    yesBtn.style.transform = `scale(${size})`;
}


// YES button
yesBtn.addEventListener("click", function () {

    question.innerText = "You made the right choice! 🥰";

    message.innerHTML =
        "🎉 I KNEW YOU WOULD SAY YES! ❤️";

    noBtn.style.display = "none";

    yesBtn.innerText = "❤️ YES ❤️";

});