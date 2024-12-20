/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputField = document.querySelector("#input-field");
const convertButton = document.querySelector("#convert-button");
const lengthValue = document.querySelector("#length-value");
const volumeValue = document.querySelector("#volume-value");
const massValue = document.querySelector("#mass-value");
const feet = 3.281;
const gallon = 0.264;
const kilogram = 2.204;

convertButton.disabled = true;

inputField.addEventListener("input", () => {
    if(inputField.value === "0" || inputField.value === "") {
        convertButton.disabled = true;
    } else {
        convertButton.disabled = false;
    }
})

convertButton.addEventListener("click", () => {
    renderValues(Number(inputField.value));
})

function renderValues(value) {
    let lengthFeet = (value * feet).toFixed(3);
    let lengthMeters = (value / feet).toFixed(3);
    let volumeGallons = (value * gallon).toFixed(3);
    let volumeLiters = (value / gallon).toFixed(3);
    let massPounds = (value * kilogram).toFixed(3);
    let massKilos = (value / kilogram).toFixed(3);
    
    lengthValue.innerHTML = `${value} meters = ${lengthFeet} feet | ${value} feet = ${lengthMeters} meters`
    volumeValue.innerHTML = `${value} liters = ${volumeGallons} gallons | ${value} gallons = ${volumeLiters} liters`
    massValue.innerHTML = `${value} kilos = ${massPounds} pounds | ${value} pounds = ${massKilos} kilos`
} 