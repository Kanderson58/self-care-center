// Query selected elements:
var svg = document.querySelector(".svg")
var recieveMessageButton = document.querySelector(".recieve-message-button")
var messageText = document.querySelector(".message-text")
var radioButtonMantra = document.getElementById("mantra")
var radioButtonAffirmation = document.getElementById("affirmation")
var addToFavesButton = document.querySelector(".add-to-favorite-button")
var seeFavoritesView = document.querySelector(".view-favorites")
var viewFavoritesButton = document.querySelector(".see-favorites-button")
var seeHomeView = document.querySelector(".home-view")
var favoriteAffirmations = document.querySelector("#favorite-affirmations")
var favoriteMantras = document.querySelector("#favorite-mantras")
// Event listeners:
window.addEventListener("load", showHomeView)
recieveMessageButton.addEventListener("click", displayRandomMessage)
addToFavesButton.addEventListener("click", addToFaves)
viewFavoritesButton.addEventListener("click", showFavorites)
// Event handlers:
function displayRandomMessage() {
    svg.style.display = "none"
    addToFavesButton.hidden = false
    if(radioButtonMantra.checked) {
        messageText.innerText = randomMantra()
        currentMantra = messageText.innerText
    } else if(radioButtonAffirmation.checked) {
        messageText.innerText = randomAffirmation()
        currentAffirmation = messageText.innerText
    } else if(!radioButtonMantra.checked && !radioButtonAffirmation.checked) {
        addToFavesButton.hidden = true
        messageText.innerText = "Please select if you would like an affirmation or a mantra!"
    }
}
function showHomeView() {
    addToFavesButton.hidden = true
    seeFavoritesView.style.display = "none"
}
function randomAffirmation() {
    return affirmationArray[Math.floor(Math.random() * affirmationArray.length)]
}
function randomMantra() {
    return mantraArray[Math.floor(Math.random() * mantraArray.length)]
}
function addToFaves() {
    if(radioButtonMantra.checked && currentMantra !== "" && !faveMantras.includes(currentMantra)) {
        faveMantras.push(currentMantra);
    } else if(radioButtonAffirmation.checked && currentAffirmation !== "" && !faveAffirmations.includes(currentAffirmation)) {
        faveAffirmations.push(currentAffirmation);
    }
}
function showFavorites() {
    seeHomeView.style.display = "none"
    seeFavoritesView.style.display = "block"
    for(var i = 0; i < faveAffirmations.length; i++) {
        favoriteAffirmations.innerHTML += `<li>${faveAffirmations[i]}<br><br></li>`
    }
    for(var i = 0; i < faveMantras.length; i++) {
        favoriteMantras.innerHTML += `<li>${faveMantras[i]}<br><br></li>`
    }

}

// ✅ When a message appears, it should appear with a “Favorite” button.
// ✅ When the “Favorite” button is clicked, that message should be added to a new list of favorite messages.
// ✅ Users should be able to view their favorites by clicking a “View Favorites” button that exists somewhere on the page
// ✅ When the “View Favorites” button is clicked, users should be taken to a new page that displays all of their favorite messages.
// Users should be able to navigate back to the main page by clicking a button.
    // Add button "Main Page" and add event listener to it that shows main page view when clicked.  Maybe add styling to show which button is currently selected?
// Users should be able to remove a message from their list of favorites, by clicking a button.
    // Each message has an added <button> that splices it from that array and calls the View Favorites function again.
// As you add these new elements to the page, be sure to match the style of existing elements.
    // Sans serif, rounded corners, white fieldsets, sparkly emojis!

// List of messages:
var currentMantra = "";
var currentAffirmation = "";
var faveMantras = [];
var faveAffirmations = [];
var affirmationArray = ["-I forgive myself and set myself free.",
    "-I believe I can be all that I want to be.",
    "-I am in the process of becoming the best version of myself.",
    "-I have the freedom & power to create the life I desire.",
    "-I choose to be kind to myself and love myself unconditionally.",
    "-My possibilities are endless.",
    "-I am worthy of my dreams.",
    "-I am enough.",
    "-I deserve to be healthy and feel good.",
    "-I am full of energy and vitality and my mind is calm and peaceful.",
    "-Every day I am getting healthier and stronger.",
    "-I honor my body by trusting the signals that it sends me.",
    "-I manifest perfect health by making smart choices."];
var mantraArray = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    "Do not let yesterday take up too much of today.",
    "Every day is a second chance.",
    "Tell the truth and love everyone.",
    "I am free from sadness.",
    "I am enough.",
    "In the beginning it is you, in the middle it is you and in the end it is you.",
    "I love myself.",
    "I am present now.",
    "Inhale the future, exhale the past.",
    "This too shall pass.",
    "Yesterday is not today.",
    "The only constant is change.",
    "Onward and upward.",
    "I am the sky, the rest is weather."];