// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and 
// returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit 
// and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; 
// resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending 
// order: MDCLXVI.

// Example:
// solution(1000); // should return 'M'

// Help:
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// Remember that there can't be more than 3 identical symbols in a row.

const solution = (num) => {
    let result = ''
    let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    decimals.map((value, i) => {
        while(num >= value){
            result += roman[i]
            num -= value
        }
    })

    return result
}

solution(1600)

//Solution 2

const solution = (num) => {
    let result = ""
    const roman = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
    };

    for(let i in roman){
        while(num >= roman[i]){
            result += i
            num -= roman[i] 
        }
    }

    return result
}


solution(1600)