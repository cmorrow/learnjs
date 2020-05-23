let sport = 'Soccer';
const country = 'usa';
console.log(`outside function: ${sport}`);


if(sport === 'Soccer' && country !== 'usa'){
   let sport = 'Football';
   console.log(`inside if block: ${sport}`);
}

getSportName();

console.log(`outside function: ${sport}`);