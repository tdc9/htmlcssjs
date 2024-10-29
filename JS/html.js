console.log(document)

const div = document.querySelector('div');
const input = document.createElement("input");
input.value = "Angular Course"
input.type = "text"
input.placeholder = "Enter Sme Content";
input.id = 'course_field'
const h1 = document.createElement('h1');
h1.innerText= "Dynamic HTML";
const button = document.createElement("button")
button.textContent = "click me"

div.appendChild(h1);
div.appendChild(input);
div.appendChild(button);






//h1.innerText = "Hello TDC9";