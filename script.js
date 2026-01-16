const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const convert = {
  meterToFeet: 3.28084,
  feetToMeter: 0.3048,
  literToGallon: 0.21997,
  gallonToLiter: 4.54609,
  kiloToPound: 2.20462,
  poundToKilo: 0.453592,
};

convertBtn.addEventListener("click", function () {
  let baseValue = Number(inputEl.value);
  lengthEl.textContent = `${baseValue} meters = ${(
    baseValue * convert.meterToFeet
  ).toFixed(3)} feet | ${baseValue} feet = ${(
    baseValue * convert.feetToMeter
  ).toFixed(3)} meters`;
  volumeEl.textContent = `${baseValue} liters = ${(
    baseValue * convert.literToGallon
  ).toFixed(3)} gallons | ${baseValue} gallons = ${(
    baseValue * convert.gallonToLiter
  ).toFixed(3)} liters`;
  massEl.textContent = `${baseValue} kilograms = ${(
    baseValue * convert.kiloToPound
  ).toFixed(3)} pounds | ${baseValue} pounds = ${(
    baseValue * convert.poundToKilo
  ).toFixed(3)} kilograms`;
});
