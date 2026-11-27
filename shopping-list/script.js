const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  if (myItem === '') {
    return;
  }

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const deleteBtn = document.createElement('button');

  listText.textContent = myItem;
  deleteBtn.textContent = 'Delete';

  listItem.appendChild(listText);
  listItem.appendChild(deleteBtn);
  list.appendChild(listItem);

  deleteBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});