const body = document.body;
const div = document.createElement('div');
// div.innerHTML = 'Hello World';
div.textContent = 'Hello World 2';
body.append(div);


const div2 = document.querySelector('div');
console.log(div2.innerHTML);
console.log(div2.textContent);
console.log(div2.innerText);