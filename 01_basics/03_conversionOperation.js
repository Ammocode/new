let score = "33abc"


console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber) //NaN

//"33" => 33
// "33abs" => NaN
// true => 1; false => 0

let isLoggedIn=1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "amogha" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

console.log(1+2+"2")

console.log("2" === "2")