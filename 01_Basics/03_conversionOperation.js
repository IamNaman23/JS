let score=Number(33)
let strNum=Number("33abc")
let str=Number("hello")
let bool1=Number(true)
let bool2=Number(false)
let nullCheck=Number(null)
let undef=Number(undefined)


console.log(typeof score);  // output: number

console.table([score,strNum,str,bool1,bool2,nullCheck,undef])
console.table([typeof score,typeof strNum,typeof str,typeof bool1,typeof bool2,typeof nullCheck,typeof undef])



// "33" --toNumer--> 33 (type: number)
// "33abc" --toNumber--> NaN (type: number)
// true --toNumber--> 1 (type: number)
// false --toNumber--> 0 (type: number)
// null --toNumber--> 0 (type: number)
// undefined --toNumber--> NaN (type: number)
// "hello" --toNumber--> NaN (type: number)



let isLoggedIn=1

let boolLoggedIn=Boolean(isLoggedIn)

// 1 --toBoolean--> true; 0-->false
// "" --toBoolean--> false
// "hello" --toBoolean--> true











