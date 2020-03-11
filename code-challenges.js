// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const myFunction = (string) => {
    let newArray = string.split('');
    let newCodedArray = newArray.map(value=> {
        if (value == "a") {
            return "4";
        } else if (value == "e"){
            return "3";
        } else if (value == "i"){
            return "1";
        } else if (value == "o") {
            return "0";
        } else {
            return value
        }       
    })
    return newCodedArray.join('')
}
console.log(myFunction(secretCodeWord1))
console.log(myFunction(secretCodeWord2))

// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const aFinder = (array) => {
    let finalArray = array.filter(value=>{
        return value.match (/[Aa]/);
}); 
    return finalArray;
}    
console.log(aFinder(arrayOfWords))



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

testArray=[1,2,3,4,5]

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false


    function countUniqueValues(arr) {
        let checkerValue = new Set(arr).size;
        if (checkerValue == 2) {
            return true
        }   else {
            return false
        }
    }
    console.log(countUniqueValues(hand1))
    console.log(countUniqueValues(hand2))
    console.log(countUniqueValues(testArray))
