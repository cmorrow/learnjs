let isValid = false;
const version = 1.2;

const nameInput = document.getElementById('nameInput');
const formEl = document.getElementById('form');

nameInput.addEventListener('keyup', () => {
   if(nameInput.value) {
      isValid = true;
      formEl.classList.add('valid')
   }else{
      formEl.classList.remove('valid')
   }

   console.log(`isValid =  ${isValid}`);
})



