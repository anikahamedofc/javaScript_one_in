//  1. getElementById
const id1 = document.getElementById("textJava");
console.log(id1);
// id1.innerHTML;
// we can access Html text by innerHTML
console.log(id1.innerHTML);
// we can change Html text
id1.innerHTML = "Welcome To 2023";

// we can write this way one line
document.getElementById("btn").innerHTML = "please click me";

// 2. getElementByTagName
const id2 = document.getElementsByTagName("button")[0];
console.log(id2.innerHTML);

// 3. getElementByClassName
const class1 = document.getElementsByClassName("loremPara")[0];
console.log(class1.innerText);

const class2 = (document.getElementsByClassName("loremPara").innerText =
  "hello world");
console.log(class2);

// 4.DOM element Style
const textClor = document.getElementById("textJava");
textClor.style.color = "white";
textClor.style.backgroundColor = "black";
textClor.style.fontSize = "40px";

// 5.DOM elements ATTRIBUTES
const id4 = document.getElementById("textJava");
console.log(id4);
console.log(id4.attributes);
console.log(id4.attributes.length);

// 6. get attribute

const id3 = document.getElementById("textJava");
console.log(id3.getAttribute("class"));
console.log(id3.getAttribute("id"));

// 7. Remove attribute
const id5 = document.getElementById("h1s");
console.log(id5.innerText);
id5.removeAttribute("class");

//  8. text remove function
function closebtn() {
  document.getElementById("textJava").innerHTML = "";
}
function closebtnVisible() {
  document.getElementById("textJava").innerText = "Welcome To 2023";
}
