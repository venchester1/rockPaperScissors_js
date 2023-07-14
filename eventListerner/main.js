//Javascript event Listerner
const view1 = document.querySelector("#view1");
view1.style.display = "flex";

const view2 = document.querySelector("#view2");
view2.style.display = "flex";
console.log(view2);
const div = view2.querySelector("div");
const h2 = div.querySelector("h2");

//Syntax: addEventListener(event, function, useCapture)

// const doSomething = () => {
//     alert("doing something")
// }

// h2.addEventListener("click", doSomething, false)
// h2.removeEventListener("click", doSomething, false)

// h2.addEventListener("click", event => {
//     console.log(event.target);
//     event.target.textContent = "Clicked"
// })


//to know if its ready 
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {

  const view2 = document.querySelector("#view2");
  view2.style.display = "flex";
  const div = view2.querySelector("div");
  const h2 = div.querySelector("h2");

  view2.addEventListener(
    "click",
    (_) => {
      view2.classList.toggle("darkblue");
      view2.classList.toggle("purple");
    },
    false
  );
  div.addEventListener(
    "click",
    (_) => {
      div.style.backgroundColor = "blue";
      div.classList.toggle("blue");
      div.classList.toggle("black");
    },
    false
  );
  h2.addEventListener(
    "click",
    (event) => {
      //   _.stopPropagation();   //want to be alone
      const myText = event.target.textContent;
      myText === "My 2nd view"
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd view");
    },
    true
  );

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
  });
  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  });
};

const view3 = document.querySelector("#view3")
view3.style.display = "flex"
myForm = view3.querySelector("#myForm")
myForm.addEventListener("submit", event => {
    event.preventDefault()
    console.log("Submit event");
})
