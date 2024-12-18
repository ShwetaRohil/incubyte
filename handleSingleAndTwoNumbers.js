// handle single and two numbers

const add = (numbers) => {
    if (!numbers) return 0; // empty string handling
    const numberArray = numbers.split(",").map(num => parseInt(num, 10)); // Split by comma and parse to integers
    return numberArray.reduce((sum, num) => sum + num, 0); // Sum all numbers
}

console.log(add("6"))
console.log(add("6,7"))
console.log(add("1,1"))

console.log(add("1,2,3,4,5,9,6,3,5,6"))   // handle multiple amount of digits