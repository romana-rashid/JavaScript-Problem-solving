const business = 650;
const army = 700;
const engineer = 900;
// if(business > army && business > engineer){
//     console.log('Business is bigger');
// }
// else if(army > business && army > engineer){
//     console.log('Army is bigger');
// }
// else{
//     console.log('Engineer is bigger');
// }
var max = Math.max(business, army, engineer);
console.log('Largest is', max);
