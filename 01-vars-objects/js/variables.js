let isValid = false;
const version = 1.2;

const nameInput = document.getElementById('nameInput');
const formEl = document.getElementById('form1');

if(nameInput.value) {
   isValid = true;
   formEl.classList.add('valid')
}



