// //document.getElementById("count-el").innerText = 5;

// // let count = 5



// // console.log(count); 


// initialize the count as 0
//listen for the clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById("count-el")
let count = 0


console.log(saveEl)




function increment() {
     count += 1
     console.log('clicked')
     countEl.innerText = count
 }

// Create a function save() which logs out the count when it's called

function save() {
    let saveCount = (` ${count}  - `)
    console.log('clicked')
    saveEl.innerText += saveCount
    countEl.textContent = 0
    count = 0
 }










// function increment() {
//     console.log('Button was clicked!')
// }

// RACING GAME

//Setting up the race 🏎️ 🏎️ 🏎️

// function callOutNumber() {
//     console.log(42)
// }

// callOutNumber()


//Log lap times

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapLog() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// lapLog()

// Laps Completed

// let lapsCompleted = 0

// function lapIncrementLogger() {
//     lapsCompleted = lapsCompleted + 1
  
// }
// lapIncrementLogger()
// lapIncrementLogger()
// lapIncrementLogger()

// console.log(lapsCompleted)
// let username = 'GMoney'

// let notificationMessage = "You have three new notifications"

// console.log(`${notificationMessage} ${username}`)

// console.log(4 + 5) // 9
// console.log("2" + "4") // 24
// console.log("5" + 1) // 51
// console.log(100 + "100") // 100100