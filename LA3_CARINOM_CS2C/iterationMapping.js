let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"))


let counter1 = 0
let counter2 = 0


for (let i = 0; i < maxLimit; i++) {
  for (let j = 0; j < maxLimit; j++) {

    let addedValue = counter1 + counter2


    console.log([${counter1}] [${counter2}] Added value is ${addedValue})


    counter2++
  }

  
  counter2 = 0
  counter1++
}