//DOM - document object model
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
view1.style.display = "flex";
view2.style.display = "none";

const view = document.getElementsByClassName("view");
console.log(view);
const sameView = document.querySelectorAll(".view");
console.log(sameView);

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for (let i = 1; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "red";
  // evenDivs[i].style.width = "200px"
  // evenDivs[i].style.height = "200px"
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World";
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1>  <p>this should align right.`;
navbar.style.justifyContent = "space-between";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousElementSibling);
console.log(evenDivs[0].previousSibling);

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
  view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#000";
  newDiv.style.width = "10rem";
  newDiv.style.height = "10rem";
  newDiv.style.margin = "1rem";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
};

// createDivs(view2,10)

for (let i = 1; i <= 12; i++) {
  createDivs(view2, i);
}
