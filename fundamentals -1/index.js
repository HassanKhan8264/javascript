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