const h1Selector = document.getElementById("titulo");
console.log(h1Selector);
console.log(h1Selector.id);
console.log(h1Selector.className);

const classSelector = document.getElementsByClassName("span-class")
console.log(classSelector);

const tagSelector = document.getElementsByTagName("p")
console.log(tagSelector);

const selector = document.querySelector("h1")
const selector2 = document.querySelector(".span-class")
const selector3 = document.querySelector("#titulo")

console.log(selector);
console.log(selector2);
console.log(selector3);