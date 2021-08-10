enum Color { Red, Green, Blue }

let c: Color = Color.Red

console.log(c)

// let no: never

// if(no) {
//   console.log(no)
// } else {
//   console.log(!no)
// }

// let num: number

// num = undefined

// num = null

// declare function create(o: object | null): void

// create({a: 1})
// create(null)

function error(message: string): never {
  throw new Error(message)
}

interface LabelValue {
  label: string
  value?: string
}

function printLabel(labelObj: LabelValue) {
  console.log(labelObj.label, labelObj.value)
}

let obj = {
  label: "hello",
  value: "world",
  hello: "dhfjhd"
}

printLabel(obj)


interface MyArray<T> {
  [index: number]: T
}

class Animal {
  name: string
}

let cat: Animal = {
  name: "cat"
}

class Dog extends Animal {
  breed: string
}


interface Okay {
  [x: string]: Animal
  [x: number]: Dog
}

let dog: Dog = {
  name: 'pudge',
  breed: "hahah"
}

let okay: Okay = { dog, cat }

console.log(okay[100])
console.log(okay['cat'])

interface Dictionary<T> {
  [index: string]: T
  length: T
  name: T
}
