let numberInput = document.getElementById("number-input")
let inputSpans = document.getElementsByClassName("input-span")
let feet = document.getElementById("feet")
let meters = document.getElementById("meters")
let liters = document.getElementById("liters")
let gallons = document.getElementById("gallons")
let pounds = document.getElementById("pounds")
let kilos = document.getElementById("kilos")

updateValues()

function printInputValue() {
if (inputSpans.length > 0) {
    for (let i = 0; i < inputSpans.length; i++) {
        inputSpans[i].textContent = numberInput.value;
    }
}
}

function calculateFeet() {
let result = numberInput.value * 3.281
feet.textContent = Number(result).toFixed(3)
}

function calculateMeters() {
let result = numberInput.value / 3.281
meters.textContent = Number(result).toFixed(3)
}

function calculateGallons() {
let result = numberInput.value / 3.785
gallons.textContent = Number(result).toFixed(3)
}

function calculateLiters() {
let result = numberInput.value * 3.785
liters.textContent = Number(result).toFixed(3)
}

function calculatePounds() {
let result = numberInput.value / 2.205
pounds.textContent = Number(result).toFixed(3)
}

function calculateKilos() {
let result = numberInput.value * 2.205
kilos.textContent = Number(result).toFixed(3)
}

function updateValues() {
printInputValue()
calculateFeet()
calculateMeters()
calculateGallons()
calculateLiters()
calculatePounds()
calculateKilos()
}