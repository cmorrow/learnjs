const dogInput = document.getElementById("dogNameInput");
const dogButton = document.getElementById("dogButton");
dogInput.addEventListener('mousedown', alertDogName)
var dog = 'Wolfie';
console.log(dog);

function alertDogName () {
   // let dog = 'Spot';
   const dog = dogInput.value
   console.log(dog);
   alert(dog)
}

console.log(dog);