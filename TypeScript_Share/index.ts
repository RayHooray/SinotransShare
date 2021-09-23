// enum Color { Red, Green, Blue }

// let c: Color = Color.Red

// console.log(c)

// // let no: never

// // if(no) {
// //   console.log(no)
// // } else {
// //   console.log(!no)
// // }

// // let num: number

// // num = undefined

// // num = null

// // declare function create(o: object | null): void

// // create({a: 1})
// // create(null)

// function error(message: string): never {
//   throw new Error(message)
// }

// interface LabelValue {
//   label: string
//   value?: string
// }

// function printLabel(labelObj: LabelValue) {
//   console.log(labelObj.label, labelObj.value)
// }

// let obj = {
//   label: "hello",
//   value: "world",
//   hello: "dhfjhd"
// }

// printLabel(obj)


// interface MyArray<T> {
//   [index: number]: T
// }

// class Animal {
//   name: string
// }

// let cat: Animal = {
//   name: "cat"
// }

// class Dog extends Animal {
//   breed: string
// }


// interface Okay {
//   [x: string]: Animal
//   [x: number]: Dog
// }

// let dog: Dog = {
//   name: 'pudge',
//   breed: "hahah"
// }

// let okay: Okay = { dog, cat }

// console.log(okay[100])
// console.log(okay['cat'])

// interface Dictionary<T> {
//   [index: string]: T
//   length: T
//   name: T
// }

// class Animal {
//   name: string
// }

// class Dog extends Animal {
//   breed: string
// }

// interface Test {
//   [index: number]: Dog
//   [props: string]: Animal
// }

// interface Clock {
//   currentTiem: Date
//   hello?: string
//   [propName: string]: any
// }

// class Clocks implements Clock {
//   currentTiem: Date
//   11: 22222
//   test() {
//     console.log('hello world')
//   }
// }

interface ClockContructor {
  new (hour: number, minute: number): ClockInterface
}

interface ClockInterface {
  tick():void
}

function createClock(Ctor: ClockContructor, hour: number, minute: number): ClockInterface {
  return new Ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log(1111)
  }
}

const digitalClock = createClock(DigitalClock, 12, 123)
