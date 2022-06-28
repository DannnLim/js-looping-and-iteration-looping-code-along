// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(names, events) {
    const Arr = []
    for (let i = 0; i < names.length; i++) {
        let message = (`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
        Arr[i] = message;
    }
    return Arr
}
console.log(writeCards)

// function countDown() {
//     let countDown = 0;
//     while (countDown < 11)
//         console.log(countDown++)
// }

// console.log(countDown())

function countDown() {
    for (let countDown = 0; countDown < 11; countDown++) {
        console.log(countDown)
    }
}
console.log(countDown())