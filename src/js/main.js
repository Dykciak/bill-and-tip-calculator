let inputPrice;
let inputPeople;
let selectTip;
let buttonCalculate;
let errorInfo;
let costInfo;
let costPrice;
const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	inputPrice = document.querySelector("#price");
	inputPeople = document.querySelector("#people");
	selectTip = document.querySelector("#tip");
	buttonCalculate = document.querySelector(".calculate");
	errorInfo = document.querySelector(".error");
	costInfo = document.querySelector(".cost-info");
	costPrice = document.querySelector(".cost");
};

const prepareDOMEvents = () => {
	buttonCalculate.addEventListener("click", checker);
	inputPrice.addEventListener("click", clearInput);
	inputPeople.addEventListener("click", clearInput);
};

const checker = () => {
	if (inputPrice.value == "" || inputPeople.value == "") {
		errorInfo.textContent = "Uzupełnij wszystkie pola";
		costInfo.style.display = "none";
	} else {
		errorInfo.textContent = "";
		calculateBill();
	}
};

const calculateBill = () => {
	const price = parseFloat(inputPrice.value);
	const people = parseFloat(inputPeople.value);
	const tip = parseFloat(selectTip.value);

	const total = (price + price * tip) / people;

	costPrice.textContent = "$" + total.toFixed(2);
	costInfo.style.display = "block";
};

const clearInput = (e) => {
	e.target.value = "";
};

document.addEventListener("DOMContentLoaded", main);
