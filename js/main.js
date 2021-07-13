var elForm = document.querySelector('.form');
var elNumberInput = elForm.querySelector('.form-input');
var elResultBox = elForm.querySelector('.result-box');
var elHumanInput = elResultBox.querySelector('.human .card-body .card-text');
var elBicycleInput = elResultBox.querySelector('.bicycle .card-body .card-text');
var elCarInput = elResultBox.querySelector('.car .card-body .card-text');
var elPlaneInput = elResultBox.querySelector('.plane .card-body .card-text');

var human = 3.6;
var bicycle = 20.1;
var car = 70;
var plane =  800;

function submitElForm(evt) {
	evt.preventDefault();
	var numberInput = Number(elNumberInput.value.trim());
	elHumanInput.textContent = `${(numberInput/human).toFixed(2)} soat`;
    elBicycleInput.textContent = `${(numberInput/bicycle).toFixed(2)} soat`;
    elCarInput.textContent = `${(numberInput/car).toFixed(2)} soat`;
    elPlaneInput.textContent = `${(numberInput/plane).toFixed(2)} soat`;
}

elForm.addEventListener('submit', submitElForm);