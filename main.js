// Query selected elements:
var svg = document.querySelector(".svg")
var messageText = document.querySelector(".message-text")
var radioButtonMantra = document.getElementById("mantra")
var radioButtonAffirmation = document.getElementById("affirmation")
var seeFavoritesView = document.querySelector(".view-favorites")
var seeHomeView = document.querySelector(".home-view")
var favoriteAffirmations = document.querySelector("#favorite-affirmations")
var favoriteMantras = document.querySelector("#favorite-mantras")
// Buttons:
var viewFavoritesButton = document.querySelector(".see-favorites-button")
var addToFavesButton = document.querySelector(".add-to-favorite-button")
var recieveMessageButton = document.querySelector(".recieve-message-button")
var viewHomePageButton = document.querySelector(".home-page-button")
var clearMessageButton = document.querySelector(".clear-message-button")
// Event listeners:
window.addEventListener("load", showHomeView)
recieveMessageButton.addEventListener("click", displayRandomMessage)
addToFavesButton.addEventListener("click", addToFaves)
viewFavoritesButton.addEventListener("click", showFavorites)
viewHomePageButton.addEventListener("click", hideFaveView)
clearMessageButton.addEventListener("click", clearMessage)
// Event handlers:
function displayRandomMessage() {
    svg.style.display = "none"
    addToFavesButton.hidden = false
    clearMessageButton.hidden = false
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
    clearMessageButton.hidden = true
    seeHomeView.style.display = "inline"
    seeFavoritesView.style.display = "none"
}
function hideFaveView() {
    seeHomeView.style.display = "inline"
    seeFavoritesView.style.display = "none"
}
function randomAffirmation() {
    return affirmationArray[Math.floor(Math.random() * affirmationArray.length)]
}
function randomMantra() {
    return mantraArray[Math.floor(Math.random() * mantraArray.length)]
}
function addToFaves() {
    if(radioButtonMantra.checked && currentMantra !== "" && faveMantras.includes(currentMantra) === false) {
        faveMantras.push(currentMantra);
    } else if(radioButtonAffirmation.checked && currentAffirmation !== "" && faveAffirmations.includes(currentAffirmation) === false) {
        faveAffirmations.push(currentAffirmation);
    }
}
function showFavorites() {
    favoriteAffirmations.innerHTML = "<strong><u>Favorite Affirmations<br><br></u></strong>"
    favoriteMantras.innerHTML = "<strong><u>Favorite Mantras<br><br></u></strong>"
    seeHomeView.style.display = "none"
    seeFavoritesView.style.display = "inline"
    for(var i = 0; i < faveAffirmations.length; i++) {
        favoriteAffirmations.innerHTML += `<li>${faveAffirmations[i]} <button class="delete-button" onclick="deleteAffirmation(${i})">Delete</button><br><br></li>`
    }
    for(var i = 0; i < faveMantras.length; i++) {
        favoriteMantras.innerHTML += `<li>${faveMantras[i]} <button class="delete-button" onclick="deleteMantra(${i})">Delete</button><br><br></li>`
    }
}
function deleteAffirmation(i) {
    faveAffirmations.splice(i, 1);
    showFavorites()
}
function deleteMantra(i) {
    faveMantras.splice(i, 1);
    showFavorites()
}
function clearMessage() {
    messageText.innerText = ""
    addToFavesButton.hidden = true
    clearMessageButton.hidden = true
    svg.style.display = "inline"
}
// List of messages:
var currentMantra = "";
var currentAffirmation = "";
var faveMantras = [];
var faveAffirmations = [];
var affirmationArray = ["I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",
    "I have the freedom & power to create the life I desire.",
    "I choose to be kind to myself and love myself unconditionally.",
    "My possibilities are endless.",
    "I am worthy of my dreams.",
    "I am enough.",
    "I deserve to be healthy and feel good.",
    "I am full of energy and vitality and my mind is calm and peaceful.",
    "Every day I am getting healthier and stronger.",
    "I honor my body by trusting the signals that it sends me.",
    "I manifest perfect health by making smart choices."];
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