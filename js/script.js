// category buttons

const allButton = document.getElementById("allBtn")
const entertainmentButton = document.getElementById("entertainmentBtn")
const devButton = document.getElementById("devBtn")
const gamingButton = document.getElementById("gamingBtn")
const musicButton = document.getElementById("musicBtn")
const aiToolsBtn = document.getElementById("aiToolsBtn")


// category containers

const entertainment = document.querySelector(".Entertainment")
const music = document.querySelector(".music")
const gaming = document.querySelector(".gaming")
const aiTools = document.querySelector(".AITools")
const work = document.querySelector(".Work")


// All button

allButton.addEventListener("click", function () {
    entertainment.style.display = "flex"
    gaming.style.display = "flex"
    aiTools.style.display = "flex"
    work.style.display = "flex"
    music.style.display = "flex"
})


// Entertainment button

entertainmentButton.addEventListener("click", function () {
    entertainment.style.display = "flex"
    gaming.style.display = "none"
    aiTools.style.display = "none"
    work.style.display = "none"
    music.style.display = "none"
})


// Development button

devButton.addEventListener("click", function () {
    entertainment.style.display = "none"
    gaming.style.display = "none"
    aiTools.style.display = "none"
    work.style.display = "flex"
    music.style.display = "none"
})


// Gaming button

gamingButton.addEventListener("click", function () {
    entertainment.style.display = "none"
    gaming.style.display = "flex"
    aiTools.style.display = "none"
    work.style.display = "none"
    music.style.display = "none"
})


// Music button

musicButton.addEventListener("click", function () {
    entertainment.style.display = "none"
    gaming.style.display = "none"
    aiTools.style.display = "none"
    work.style.display = "none"
    music.style.display = "flex"
})


// AI Tools button

aiToolsBtn.addEventListener("click", function () {
    entertainment.style.display = "none"
    gaming.style.display = "none"
    aiTools.style.display = "flex"
    work.style.display = "none"
    music.style.display = "none"
})


// Sign up button

const signupButton = document.getElementById("signupButton")
const signupOverlay = document.getElementById("signupOverlay")
const closeSignup = document.getElementById("closeSignup")

signupButton.addEventListener("click", function () {
    signupOverlay.style.display = "flex"
})

closeSignup.addEventListener("click", function () {
    signupOverlay.style.display = "none"
})


// Host button

const hostbtn = document.querySelector(".hostbtn")
const hostContainer = document.querySelector(".hostContainer")
const closebtn = document.getElementById("closebtn")

hostbtn.addEventListener("click", function () {
    hostContainer.style.display = "flex"
})

closebtn.addEventListener("click", function () {
    hostContainer.style.display = "none"
})


// Become a Host footer link

const hostFooterLink = document.querySelector(".hostFooterLink")

hostFooterLink.addEventListener("click", function (event) {
    event.preventDefault()
    hostContainer.style.display = "flex"
})


// Payment popup

const payNowButton = document.querySelector(".payNowButton")
const paymentOverlay = document.getElementById("paymentOverlay")
const closePayment = document.getElementById("closePayment")

payNowButton.addEventListener("click", function () {
    paymentOverlay.style.display = "flex"
})

closePayment.addEventListener("click", function () {
    paymentOverlay.style.display = "none"
})


const joinPopup = document.getElementById("joinPopup")
const popupCardDetails = document.getElementById("popupCardDetails")
const popupPayButton = document.getElementById("popupPayButton")

document.querySelectorAll(".subJoinButton").forEach(function(button) {
    button.addEventListener("click", function() {
        const card = button.closest(".subContainer")
        const cardCopy = card.cloneNode(true)

        cardCopy.querySelector(".subJoinButton").remove()

        popupCardDetails.innerHTML = ""
        popupCardDetails.appendChild(cardCopy)

        const price = card.querySelector(".subscription-price").textContent
        popupPayButton.textContent = "Pay Now — " + price.split("/")[0].trim()

        joinPopup.style.display = "flex"
    })
})

document.getElementById("closePopup").addEventListener("click", function() {
    joinPopup.style.display = "none"
})

document.getElementById("popupPayForm").addEventListener("submit", function(event) {
    event.preventDefault()
    alert("Payment will be connected here")
})
