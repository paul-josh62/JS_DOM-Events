console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

const byId = document.getElementById("node1").textContent = "I used the get Element By Id (node1) method to access this";

//.innerHTML = "I used the get Element By Id (node1) method to access this";
//byId.textContent = "I used the get Element By Id (node1) method to access this";

console.log(byId);

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

const className = document.getElementsByClassName("node2").textContent = "I used the getElementByClassName(node2) method to access this";

console.log(className);

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

const tagName = document.getElementsByTagName("h3").innerHTML = "I used the getElementByTagName(h3) method to access all of these";

console.log(tagName);

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let newPara = document.createElement("p");
newPara.textContent = 
  "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method

let parent = document.querySelector("#parent");
parent.appendChild(newPara);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
// BONUS: Add a link href to the <a>
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

let newA = document.createElement("a");
newA.textContent = "I am an <a> tag";
newA.href = "https://www.google.com/search?q=js+insertbefore&oq=js+insert&aqs=chrome.1.0i512l10.4494j0j7&sourceid=chrome&ie=UTF-8";
newA.target = "_blank";

parent.insertBefore(newA, newPara);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let exercise3Container = document.querySelector("#exercise-container3");
let oldChild = document.querySelector("#N1");

let newChildNode = document.createElement("p");
newChildNode.textContent = "Child Node that replace old child";

exercise3Container.replaceChild(newChildNode, oldChild);

// TODO: Remove the "New Child Node"

const removeChild = () => {
  exercise3Container.removeChild(newChildNode);
};

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
// TODO: Append the new list items to the unordered list element
ul.appendChild(li);
});

// TODO: Append the unordered list to the `div#container` under exercise 4 
document.querySelector("#container").appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this messagefunction show() {
function show() {

  // -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
  let modalContainer = document.createElement("div");
  let modalCard = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let closeBtn = document.createElement("button");

  h2.textContent = "Modal Header";
  p.textContent = "Modal Content blah blah";
  closeBtn.textContent = "Close";

  closeBtn.addEventListener("click", () => {
    document.body.removeChild(modalContainer);
  });

  modalCard.append(h2, p, closeBtn);
  modalCard.classList.add("modal-card");

  modalContainer.id = "modal";
  modalContainer.appendChild(modalCard);

  document.body.appendChild(modalContainer);
}

let button = document.querySelector("#btn");
button.addEventListener("click", show);
// This div should be a 'modal' that covers the main content on the screen

// BONUS: The modal popup should be able to be closed. Refactor for this functionality
