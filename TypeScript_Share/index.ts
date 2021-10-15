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

// interface ClockContructor {
//   new (hour: number, minute: number): ClockInterface
// }

// interface ClockInterface {
//   tick():void
// }

// function createClock(Ctor: ClockContructor, hour: number, minute: number): ClockInterface {
//   return new Ctor(hour, minute)
// }

// class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number) {}
//   tick() {
//     console.log(1111)
//   }
// }

// const digitalClock = createClock(DigitalClock, 12, 123)

// interface Counter {
//   (start: number): string // 指定函数的组成结构，返回类型
//   initNumber: number
//   reset():void // 方法而不是函数
// }

// function getCounter(): Counter {
//   // counter 既是对象也是函数
//   let counter = <Counter>function (start: number) { return `${start}`};
//   counter.initNumber = 123;
//   counter.reset = function () { };
//   return counter;
  
// }
// let c = getCounter();
// c(10);
// c.reset();
// c.initNumber = 5.0;
// console.log(c, c(10))

// class Animal {
//   public name: string
//   public bark: string
//   constructor(name: string, bark: string) {
//     this.name = name
//     this.bark = bark
//   }
//   voice() {
//     return `${this.name}'s voice is ${this.bark}`
//   }
// }

// // 继承类

// class Corgi extends Animal {
//   constructor(name: string, bark: string, selfName?: string) {
//     super(name, bark)
//     this.selfName = selfName
//   }
//   public selfName?: string
//   readonly belognTo?: string
//   private muster?: string
//   voice(): string {
//     return  `${this.name}'s vioce is ${this.bark}, it's name is ${this.selfName}`
//   }
// }

// let corgi = new Corgi('狗子', '汪汪', '旺财')

// let animal = new Animal('人', '来了老弟')

// console.log(corgi.voice())

// console.log(animal.voice())

// // 父类
// class Test {
//   public keyName1: string
//   private keyName2: number
//   protected keyName3: unknown
// }
// // 实例
// const test = new Test()
// test.keyName1 // ok
// test.keyName2 // 错误
// test.keyName3 // 错误

// class ChildTest extends Test {
//   constructor() {
//     super()
//     this.keyName1 // ok
//     this.keyName2
//     this.keyName3
//   }
// }

// const child_test = new ChildTest()

// child_test.keyName1
// child_test.keyName2
// child_test.keyName3

class TestGetAndSet {
  isPrint: boolean
  private printMsg?: string

  constructor(isPrint: boolean) {
    this.isPrint = isPrint
  }

  get printTest() {
    return !!this.printMsg ?  this.printMsg : 'hola'
  }
  set printTest(value) {
    if(this.isPrint) {
      this.printMsg = value
    } else {
      console.log('error: ' + 'let\'s play a game hahahhahaha.........')
    }
  }
}

const test_get_and_set = new TestGetAndSet(true)

const test_get_and_set2 = new TestGetAndSet(false)

console.log(test_get_and_set.printTest)

test_get_and_set.printTest = 'kshfkjasdhkdfhkjadshkfhkah'

console.log(test_get_and_set.printTest)

test_get_and_set2.printTest = '11111111'

console.log(test_get_and_set2.printTest)

