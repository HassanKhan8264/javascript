login = async (value) => {
    console.log('thisis the them testgin', value);
}
login('hassan')

let js = 'amazing';
if (js === 'amazing') {
    let js = "amazing 2"
    alert('amazing')
    console.log('in scope', js);
}
console.log('out scope', js);
let Number = 56 + 56 + 56 - 7
console.log(Number);
/* Write your code below. Good luck! 🙂 */
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJhon = 1.95;

let BMIMark = massMark / (heightMark * heightMark)
let BMIJohn = massJohn / (heightJhon * heightJhon)
console.log('mass', BMIJohn, BMIMark)

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}


// there is 5 falsy values in js 0 ,'', undefined, null,NaN
// and truthy values are {}, 'string'
function falsyTruthyValues() {
    let object = {}
    if (object) {
        return !!object
    }
}
console.log(falsyTruthyValues());


// map returns a new array
// filter returns a new array with expected values
// reduce returns a element with each item added values



/* Write your code below. Good luck! 🙂 */

// Scores for Dolphins
const dolphinScores = [96, 108, 89];

// Scores for Koalas
const koalaScores = [88, 91, 110];

// Function to calculate the average score
function calculateAverageScore(scores) {
    const totalScore = scores.reduce((a, b) => a + b, 0);
    return totalScore / scores.length;
}

// Calculate average scores
const scoreDolphins = calculateAverageScore(dolphinScores); l
const scoreKoalas = calculateAverageScore(koalaScores);

// Determine the winner
if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}
// Define the bill values for testing
let bill = 275;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
let total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}.`);
// Function to calculate the tip and total value
function calculateTip(bill) {
    // Declare the tip variable
    let tip;
    // Calculate the tip using a ternary operator

    // Calculate the total value

    // Print the result
}


