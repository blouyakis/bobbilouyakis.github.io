// START Image Click to Transform 
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Coral-in-aquarium.jpg") {
    myImage.setAttribute("src", "images/Coral-in-aquarium-image2.jpg");
  } else {
    myImage.setAttribute("src", "images/Coral-in-aquarium.jpg");
  }
});
// END Image Click to Transform


// START Strikethrough list items
// const listItems = document.querySelectorAll("li");

// function toggleDone(e) {
//   if (!e.target.className) {
//     e.target.className = "done";
//   } else {
//     e.target.className = "";
//   }
// }

// listItems.forEach((item) => {
//   item.addEventListener("click", toggleDone);
// });
// END Strikethrough list items

// START Button = Welcome Message
// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// SET USER NAME WITHOUT RESTRICTION
// function setUserName() {
//   const myName = prompt("Please enter your name.");
//   localStorage.setItem("name", myName);
//   myHeading.textContent = `Mozilla is cool, ${myName}`;
// }

// SET USER NAME WITH RESTRICTION
// function setUserName() {
//   const myName = prompt("Please enter your name.");
//   if (!myName) {
//     setUserName();
//   } else {
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `Mozilla is cool, ${myName}`;
//   }
// }

// if (!localStorage.getItem("name")) {
//   setUserName();
// } else {
//   const storedName = localStorage.getItem("name");
//   myHeading.textContent = `Mozilla is cool, ${storedName}`;
// }

// myButton.addEventListener("click", () => {
//   setUserName();
// });
// END Button

// USING REFERENCES - change the heading text
// Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
// myHeading.textContent = "Hello world!";