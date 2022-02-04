function largestNumber(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const ages = [12, 45, 56, 74, 54, 77];
const oldest = largestNumber(ages);
console.log(oldest);