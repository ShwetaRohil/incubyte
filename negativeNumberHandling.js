function escape(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
}

const add = (numbers) => {
    if (!numbers) return 0; // handling empty string

    let delimiter = /,|\n/; // Default delimiters
    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/); // customised delimiters
        
        if (delimiterMatch) {
            delimiter = new RegExp(escape(delimiterMatch[1])); 
            numbers = numbers.slice(delimiterMatch[0].length); 
        }
    }

    const numberArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    
    //handling negative numbers
    const negatives = numberArray.filter(num => num < 0); // Find negative numbers

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
}


console.log(add("1,-2,3"));