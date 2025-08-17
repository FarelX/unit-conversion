let inputEl = document.getElementById("input-el");
let convertBtn = document.getElementById("convert-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const length = {
  meterToFeet: 3.281,
  feetToMeter: 0.3048,
};
const volume = {
  literToGallon: 0.264,
  gallonToLiter: 3.785,
};
const mass = {
  kiloToPound: 2.204,
  poundToKilo: 0.453,
};

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;
  let resultMeter = baseValue * length.meterToFeet;
  let resultFeet = baseValue * length.feetToMeter;
  let resultLiter = baseValue * volume.literToGallon;
  let resultGallon = baseValue * volume.gallonToLiter;
  let resultKilo = baseValue * mass.kiloToPound;
  let resultPound = baseValue * mass.poundToKilo;

  // (baseValue * length.feetToMeter);
  lengthEl.innerHTML = `
  ${baseValue} meter = ${resultMeter.toFixed(
    3
  )} feet | ${baseValue} feet = ${resultFeet.toFixed(3)} meter  `;

  volumeEl.innerHTML = `
  ${baseValue} liters = ${resultLiter.toFixed(
    3
  )} gallons | ${baseValue} gallons = ${resultGallon.toFixed(3)} liters
`;

  massEl.innerHTML = `
  ${baseValue} kilograms = ${resultKilo.toFixed(
    3
  )} pounds | ${baseValue} pounds = ${resultPound.toFixed(3)} kilograms
`;
});
