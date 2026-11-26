const container = document.querySelector('#container');

const content = document.createElement('div');
content.textContent = 'Halo! Ini ditambahkan oleh JavaScript.';

container.appendChild(content);

const redText = document.createElement('p');
redText.textContent = "Hey I'm red!";
redText.style.color = 'red';
container.appendChild(redText);

const blueHeading = document.createElement('h3');
blueHeading.textContent ="I'm blue!";
blueHeading.style.color = 'blue'
container.appendChild(blueHeading);

const pinkBox = document.createElement('div');
pinkBox.style.border = '1px solid black';
pinkBox.style.backgroundColor = 'pink';

const boxTitle = document.createElement('h1');
boxTitle.textContent = "I'm in a div";

const boxText = document.createElement('p');
boxText.textContent = 'ME TOO!';

pinkBox.appendChild(boxTitle);
pinkBox.appendChild(boxText);

container.appendChild(pinkBox);