//console.log('hello world')

const myName = 'Scott'

// console.log(myName)

// using let here because age will change
let age = 24

// console.log(age)

let isCool = true

let nothing = null

let height = undefined

// console.log(height)

height = `5' 11 3/4" `

// console.log(height)

let x = 4
let y = 10
let z = 7 + 8

let sum = x + y + z

// console.log(sum)

let str1 = "string"
let str2 = 'string'
let str3 = `string`

let firstName = 'scott'
let lastName = 'sutherland'

let greeting = "Hello, " + firstName + ' ' + lastName

let greeting2 = `Hello, ${firstName} ${lastName} ${45}`

// console.log(greeting2)


const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


reader.question("Howdy, what's your name?", function(answer){
    console.log("Hi, " + answer)
    reader.close()
})