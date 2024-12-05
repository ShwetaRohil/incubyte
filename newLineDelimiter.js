const add = (numbers) => {
    if (!numbers) return 0; // handle empty string
    const delimiters = /,|\n/; // comma and new line delimiter
    const numberArray = numbers.split(delimiters).map(num => parseInt(num, 10));
    return numberArray.reduce((sum, num) => sum + num, 0);
}

console.log(add("1\n2,3")); 
console.log(add("1,2\n3,4")); 