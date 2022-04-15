const numberInput = document.getElementById("number-input")
const inputSpans = document.getElementsByClassName("input-span")
const feet = document.getElementById("feet")
const meters = document.getElementById("meters")
const liters = document.getElementById("liters")
const gallons = document.getElementById("gallons")
const pounds = document.getElementById("pounds")
const kilos = document.getElementById("kilos")

// Autofocus input field
window.onload = () => {
    numberInput.focus();
}

updateValues()

numberInput.addEventListener("input", updateValues)

// Place the insertion point at the end of the value
numberInput.addEventListener("focus", (e) => {
    // Store the event target value in a temp variable
    let temp = e.target.value;
    // Set the event target value to null
    e.target.value = null;
    // Set the event target value to the value stored in the temp variable
    e.target.value = temp
})

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