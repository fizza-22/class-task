//TASK NUMBER 01:-
function reverseArray(arr) {
    return arr.reverse();
    
}
let numbers = [1, 2, 3, 4, 5];
console.log("Real array :" , numbers);
console.log("Reversed array :" , reverseArray(numbers));

let largeArray = [1,2,3,4,5,6,7,8,9,10];
console.log("\nOriginal large array :" ,largeArray);
console.log("Reversed large array :" ,reverseArray(largeArray));


//TASK NUMBER 2:-


function removeNegatives(arr1) {
    return arr1.filter(num => num >= 0);
  }
  const number = [-1, 2, -3, 4, -5, 6];
const positiveNumbers = removeNegatives(number);
console.log(positiveNumbers); // [2, 4, 6]

function removeNegatives(arr2) {
    if (!Array.isArray(arr2)) {
      throw new Error('Input must be an array');
    }
    return arr2.filter(num => typeof num === 'number' && num >= 0);
  }

  //TASK NUMBER 3 :-

  function countVowels(str) {
    str = str.toLowerCase();
    
    let vowels = str.match(/[aeiou]/g);
    
    // If no vowels are found, return 0
    if (vowels === null) {
      return 0;
    }
    
    return vowels.length;
  }
  
  // Example:
  console.log(countVowels("Hello World"));  // Output: 3
  console.log(countVowels("JavaScript"));  // Output: 3
  console.log(countVowels("abcdefghijklmnopqrstuvwxyz"));  // Output: 0

  //TASK NUMBER 4 :-

  function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the cleaned string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome('kayak'));  // Expected output: true
console.log(isPalindrome('hello'));  // Expected output: false
console.log(isPalindrome('A man, a plan, a canal: Panama'));  // Expected output: true
console.log(isPalindrome('Not a palindrome'));  // Expected output: false
console.log(isPalindrome('refer'));



//TASK NUMBER 5 :-


function checkRange(num1, num2) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}

// Test the function
console.log(checkRange(40, 60));  //  output: true
console.log(checkRange(100, 120)); //  output: false
console.log(checkRange(55, 65));   //  output: true
console.log(checkRange(129, 552));   //  output: false



//TASK NUMBER 6 :-



function getMinValueAfterMapping(arr3, func) {
    let mappedArr = arr3.map(func);
    
    // Get the minimum value in the mapped array
    let minValue = Math.min(...mappedArr);
    
    return minValue;
}

// Example usage:
let number3 = [1, 2, 3, 4, 5];
let square = x => x * x; // A function that squares a number

let minSquaredValue = getMinValueAfterMapping(number3, square);
console.log(minSquaredValue); // Output: 1



//task number 7 :-


function copyLastThree(str) {

    if (str.length >= 3) {
     
        let lastThree = str.slice(-3);
        
        // Create a new string with 4 copies of the last 3 characters
        let updatedStr = lastThree.repeat(4);
        
        return updatedStr;
    } else {
        return "The string length must be 3 and above.";
    }
}

// Test the function
console.log(copyLastThree("HelloWorld"));  // Output: "rldrldrldrld"
console.log(copyLastThree("ab"));  // Output: "The string length must be 3 and above."


//TASK NUMBER 8:-

function determineAngleType(angle) {
    if (angle < 0 || angle > 180) {
      return "Invalid angle. Angle must be between 0 and 180 degrees.";
    } else if (angle === 90) {
      return "Right angle";
    } else if (angle === 180) {
      return "Straight angle";
    } else if (angle < 90) {
      return "Acute angle";
    } else {
      return "Obtuse angle";
    }
  }
  
  // Test the function
  console.log(determineAngleType(45));  // Output: Acute angle
  console.log(determineAngleType(90));  // Output: Right angle
  console.log(determineAngleType(120)); // Output: Obtuse angle
  console.log(determineAngleType(180)); // Output: Straight angle
  console.log(determineAngleType(200)); // Output: Invalid angle. Angle must be between 0 and 180 degrees.



  //TASK NUMBER 9 :-
  function smallestRoundNumber(n) {
    let multiplier = 10;
    while (n % multiplier !== 0) {
        multiplier *= 10;
    }
    return Math.ceil(n / multiplier) * multiplier;
}

// Test the function
console.log(smallestRoundNumber(592));  // Outputs: 600
console.log(smallestRoundNumber(590));  // Outputs: 590
console.log(smallestRoundNumber(1234)); // Outputs: 1300



//TASK NUMBER 10:-
let colors = ["red", "green", "blue", "yellow"];
let itemToFind = "blue";
let index = colors.indexOf(itemToFind);

if (index !== -1) {
  console.log(`The index of "${itemToFind}" is ${index}`);
} else {
  console.log(`"${itemToFind}" not found in the array`);
}

