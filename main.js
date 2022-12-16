// Query selected elements:
var svg = document.querySelector(".svg")
var messageText = document.querySelector(".message-text")
var radioButtonMantra = document.getElementById("mantra")
var radioButtonAffirmation = document.getElementById("affirmation")
var seeFavoritesView = document.querySelector(".view-favorites")
var seeHomeView = document.querySelector(".home-view")
var favoriteAffirmations = document.querySelector("#favorite-affirmations")
var favoriteMantras = document.querySelector("#favorite-mantras")
var seeLoginView = document.querySelector(".login-view")
var nameInput = document.querySelector(".login")
var homeGreeting = document.querySelector(".say-hello")
var doItYourselfForm = document.querySelector(".DIY-form")
var userNewMessage = document.querySelector(".DIY")
// Buttons:
var submitButton = document.querySelector(".submit-button")
var viewFavoritesButton = document.querySelector(".see-favorites-button")
var addToFavesButton = document.querySelector(".add-to-favorite-button")
var recieveMessageButton = document.querySelector(".recieve-message-button")
var viewHomePageButton = document.querySelector(".home-page-button")
var clearMessageButton = document.querySelector(".clear-message-button")
var removeFromPossibleButton = document.querySelector(".delete-from-possibilities-button")
var makeYourOwnButton = document.querySelector(".make-own-button")
var submitYourOwnButton = document.querySelector(".DIY-button")
// Event listeners:
window.addEventListener("load", showLoginView)
submitButton.addEventListener("click", showHomeView)
recieveMessageButton.addEventListener("click", displayRandomMessage)
addToFavesButton.addEventListener("click", addToFaves)
viewFavoritesButton.addEventListener("click", showFavorites)
viewHomePageButton.addEventListener("click", hideFaveView)
clearMessageButton.addEventListener("click", clearMessage)
removeFromPossibleButton.addEventListener("click", removeFromPossible)
makeYourOwnButton.addEventListener("click", makeYourOwn)
submitYourOwnButton.addEventListener("click", submitYourOwn)
// Event handlers: 
function showLoginView() {
    seeLoginView.style.display = "inline"
    seeHomeView.style.display = "none"
    seeFavoritesView.style.display = "none"
}
function showHomeView() {
    if (nameInput.value) {
        homeGreeting.innerHTML = `Hello <span>${nameInput.value}</span>, we're glad you're here!`
        addToFavesButton.hidden = true
        clearMessageButton.hidden = true
        removeFromPossibleButton.hidden = true
        doItYourselfForm.hidden = true
        seeHomeView.style.display = "inline"
        seeFavoritesView.style.display = "none"
        seeLoginView.style.display = "none"
    } else {
        alert("Please enter your name to continue!")
    }
}
function hideFaveView() {
    seeHomeView.style.display = "inline"
    seeFavoritesView.style.display = "none"
    seeLoginView.style.display = "none"
}
function displayRandomMessage() {
    svg.style.display = "none"
    addToFavesButton.hidden = false
    clearMessageButton.hidden = false
    removeFromPossibleButton.hidden = false
    if(radioButtonMantra.checked) {
        messageText.innerText = randomMantra()
        currentMantra = messageText.innerText
        preventRepeatMantra()
    } else if(radioButtonAffirmation.checked) {
        messageText.innerText = randomAffirmation()
        currentAffirmation = messageText.innerText
        preventRepeatAffirmation()
    } else if(!radioButtonMantra.checked && !radioButtonAffirmation.checked) {
        addToFavesButton.hidden = true
        removeFromPossibleButton.hidden = true
        messageText.innerText = "Please select if you would like an affirmation or a mantra!"
    }
}
function preventRepeatMantra() {
    for(var i = 0; i < usedMantras.length; i++) {
        if(usedMantras[i] !== currentMantra && usedMantras.length < mantraArray.length + 1) {
            usedMantras.push(currentMantra)
            return
        }
    } 
    if (usedMantras.length === mantraArray.length + 1) {
        addToFavesButton.hidden = true
        removeFromPossibleButton.hidden = true
        messageText.innerHTML = "<strong>✨ That's all the mantras!  They will now repeat. ✨</strong>"
        usedMantras = [""]
    }
}
function preventRepeatAffirmation() {
    for(var i = 0; i < usedAffirmations.length; i++) {
        if(usedAffirmations[i] !== currentAffirmation && usedAffirmations.length < affirmationArray.length + 1) {
            usedAffirmations.push(currentAffirmation)
            return
        }
    } 
    if (usedAffirmations.length === affirmationArray.length + 1) {
        addToFavesButton.hidden = true
        removeFromPossibleButton.hidden = true
        messageText.innerHTML = "<strong>✨ That's all the affirmations!  They will now repeat. ✨</strong>"
        usedAffirmations = [""]
    }
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
    favoriteMantras.innerHTML = "<strong><u>Favorite Mantras<br><br></u></strong>"
    favoriteAffirmations.innerHTML = "<strong><u>Favorite Affirmations<br><br></u></strong>"
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
    removeFromPossibleButton.hidden = true
    svg.style.display = "inline"
}
function removeFromPossible() {
    for(var i = 0; i < mantraArray.length; i++) {
        if(radioButtonMantra.checked && currentMantra === mantraArray[i]) {
            mantraArray.splice(i, 1)
            alert("Got it!  We won't show you that mantra again.")
            clearMessage()
        }
    }
    for(var i = 0; i < affirmationArray.length; i++) {
        if (radioButtonAffirmation.checked && currentAffirmation === affirmationArray[i]) {
            affirmationArray.splice(i, 1)
            alert("Got it!  We won't show you that affirmation again.")
            clearMessage()
       }
    }
}
function makeYourOwn() {
    doItYourselfForm.hidden = false
    makeYourOwnButton.hidden = true
}
function submitYourOwn() {
    svg.style.display = "none"
    clearMessageButton.hidden = false
    addToFavesButton.hidden = false
    removeFromPossibleButton.hidden = true
    if(!radioButtonMantra.checked && !radioButtonAffirmation.checked) {
        messageText.innerText = "Please select if you would like an affirmation or a mantra!"
    } else if(userNewMessage.value === "") {
        messageText.innerText = "Please write your message in the box!"
    } else if(radioButtonMantra.checked && mantraArray.includes(userNewMessage.value) === false) {
        currentMantra = userNewMessage.value
        mantraArray.push(userNewMessage.value)
        messageText.innerText = userNewMessage.value
    } else if(radioButtonAffirmation.checked && affirmationArray.includes(userNewMessage.value) === false) {
        currentAffirmation = userNewMessage.value
        affirmationArray.push(userNewMessage.value)
        messageText.innerText = userNewMessage.value
    }
}
// List of messages:
var currentMantra = "";
var currentAffirmation = "";
var usedMantras = [""];
var usedAffirmations = [""];
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
