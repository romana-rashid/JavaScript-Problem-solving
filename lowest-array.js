function lowestNumber(numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}
const ages = [23, 45, 56, 24, 34, 12,];
const lowestAge = lowestNumber(ages);
console.log(lowestAge);