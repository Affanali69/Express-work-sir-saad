var getExpress = document.getElementById("item");
var getPrices = document.getElementById("Prices");
var getUl = document.getElementById("ul");
function add() {
    getUl.innerHTML += `<li><span>${getExpress.value}  ${getPrices.value}</span></li>`
    getExpress.value = "";
    getPrices.value ="";
}