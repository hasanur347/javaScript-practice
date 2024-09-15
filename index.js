// (1) Write a function named calculateDifference that takes two arguments and 
//returns the difference between the first and second argument.
function calculateDifference (a,b){
    return a-b
}

result=calculateDifference(8,6)
console.log(result)


// (2) Write a function named isOdd that takes one argument and 
// returns true if the number is odd, and false if it is not.
function isOdd (number){
    if (number % 2 !== 0){
        return true
    } else {
        return false
    }
}

result1 = isOdd(4)
console.log(result1)


// (3) Write a function named findMin that takes an array of numbers and 
// returns the smallest number in the array.
function findMin(arr){
    if (arr.length == 0){
        return null
    }
    let min = arr[0]
    for (i=0;i<arr.length;i++){
        if (arr[i]<min){
            min = arr[i]
        }
    }
    return min
}
result2= findMin([1,2,3,4,3,4,4,3,4,-1,45,34])
console.log(result2)



// (4) Write a function named filterEvenNumbers that takes an array of numbers and 
// returns a new array containing only the even numbers.
function filterEvenNumbers(arr1){
    let evenArray = []
    for (i=0; i<arr1.length;i++){
        if (arr1[i] % 2 == 0){
            evenArray.push(arr1[i])
        }
    }
    return evenArray
}
result3 = filterEvenNumbers([12,23,435,2,4,5,6,7,85,3,5,67,5])
console.log(result3)


// (5) Write a function named sortArrayDescending that takes an array of numbers and 
// returns a new array sorted in descending order.
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
result4= sortArrayDescending([23,455,3,454,3,2,0])
console.log(result4)

// (6) Write a function named lowercaseFirstLetter that takes a string and 
// returns the same string with the first letter lowercased.
function lowercaseFirstLetter(str){
    let lowercaseString = str[0].toLowerCase()
    return (lowercaseString + str.slice(1,str.length))
}
console.log(lowercaseFirstLetter('Hasanuredf'))


// (7) Write a function named countVowels that takes a string and 
// returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    
    // Use the filter method to create an array of vowels found in the string
    let vowelCount = str.split('').filter(char => vowels.includes(char)).length;
    
    return vowelCount;
}

console.log(countVowels('Hello World')); 


// (8) Write a function named findAverage that takes an array of numbers and 
// returns the average of all elements.
function findAverage(arr){
    let sum = 0
    for (i=0;i<arr.length;i++){
        sum += arr[i]
    }
    let avg = sum / arr.length

    return avg
}

console.log(findAverage([1,2,3,4,5,6,7,7,6,56,6,5,5]))