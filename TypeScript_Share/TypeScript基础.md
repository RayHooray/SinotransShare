# TypeScript 基础

## TypeScript 实现了什么

---

1. 为 JavaScript 提供了可选的类型系统（类型）
2. 兼容了当前以及未来的 JavaScript 特性（超集）

## TypeScript 与 JavaScript 的关系

---

![relationship](relationship.jpg)

* TypeScript 是 JavaScript 的超集（TypeScript 向下兼容 JavaScript，TypeScript 有的特性 JavaScript 不一定有，JavaScript 有的特性，TypeScript 都有）
* 相对于 JavaSript，TypeScript 多了一个类型标注和类型推导，一旦变量、函数或者类的类型确定，则在传递值或者参数时必需传入相应的类型

  ```ts
  let num: number
  num = 0
  num = 'hello world' // Error: Type 'string' is not assignable to type 'number'.
  ```

## 调试

* 建议在本地下载 <code>ts-node typescript @types/node</code>
* VSCode 装载 Code Runner 插件

## TypeScript 基础数据类型

---

### 相同

---

#### 数字（number）

  与 JavaScript 一样， TypeScript 里的所有数字都是浮点数。

  除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript 2015 中引入的二进制和八进制字面量

  ```ts
  let decLiteral: number = 6;
  let hexLiteral: number = 0xf00d; // 十六进制
  let binaryLiteral: number = 0b1010; // 二进制
  let octalLiteral: number = 0o744; // 八进制
  ```

#### 布尔（boolean）

  最基本的数据类型就是简单的 true/false 值

  ```ts
  let isDone: boolean = false;
  ```

#### 字符串（string）

  表示文本数据类型，可以使用双引号或单引号表示字符串。

  ```ts
  let name: string = "bob";
  name = "smith";
  ```

  还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 被反引号包围(`)，并且以 ${ key } 形式嵌入表达式。

  模板字符串的好处就是能还原变量字符串原有的结构，换行可以不适用换行符。

  ```ts
  let name: string = `Gene`;
  let age: number = 37;
  let sentence: string = `Hello, my name is ${ name }.

  I'll be ${ age + 1 } years old next month.`;
  ```

#### null 和 undefined

* undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null；
* 默认情况下 null 和 undefined 是所有类型的子类型；

  ```ts
  let nun: number

  num = undefined

  num = null
  ```

* 当指定了 --strictNullChecks 标记，null 和undefined 只能赋值给 void 或他们本身
* 鼓励尽可能的使用 --strictNullChecks

#### Object

* 表示的事非原始类型，即除了 number、string、boolean、symbol、null、undefined 之外的类型。
* 使用 object 类型，可以更好的表示 Object.create 这样的 API

```ts
delare function create(obj: object | null)

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

#### 数组

  有两种方式可以定义数组：

* 可以在元素类型后面接上 []，表示由此类型元素组成的一个数组；

  ```ts
  let list: number[] = [1, 2, 3];
  let arr: (number | string | boolean)[] = [1, '2', true]
  ```

* 第二种方式是使用数组泛型，Array<元素类型>：

    ```ts
    let list: Array<number> = [1, 2, 3];
    let arr: Array<number | string | boolean> = [1, '2', true]
    ```

### 不同

---

#### 元组 Tuple

元组类型表示已知元素数量和类型（甚至是顺序）的**数组**，各元素的类型不必相同。 比如，定义一对值分别为 string 和 number 类型的元组。

```ts
let x: [string, number];

x = ['hello', 10]

x = [10, 'hello']; // 检查类型错误
```

#### 枚举（enum）

枚举类型可以为一组数值赋予友好的名字

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

默认情况下是从 0 开始

#### any

* any 在 TS 中占有特殊的地位
* 它会使 TS 将类型检查关闭，当使用 any 时，基本上是在告诉 TS 不要进行任何类型检查
* 在类型系统中，any 能兼容任何类型，也能赋值给其他任何类型

```ts
let power: any

// 可被赋值任何类型
power = 123
power = '123'

// 可以兼容任何类型
let num: number

num = power
power = num
```

#### never

* 表示的是那些永不存在的值的类型，例如：
  * 抛出异常
  * 根本不会有返回值的函数表达式或箭头函数表达式的返回值类型
  * 永不为真
* 是任何类型的子类型，也可以赋值给任何类型
* 没有类型是 never 的子类型或可以赋值给 never 类型（除了 never 类型自身）

```ts
// 返回 never 类型的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

// 类型推导成 never 类型
function fail() {
  return error('failed')
}

function infiniteLoop(): never {
  while(true) {}
}
// 
```

#### void

表示一个函数没有任何的返回值

```ts
function log(message: string): void {
  console.log(message)
}
```

#### 断言类型

* 主要用于类型转换，但不进行特殊的数据检查和解构
* 对运行并没有影响，只是在编译过程中 TS 认为已经进行了必须的检查
* 书写方法：
  * 尖括号

    ```ts
    let someValue: any = 'this is a string'
    let stringLength:number = (<string>someValue).length
    ```

  * as

    ```ts
    let someValue: any = 'this is a string'
    let stringLength:number = (someValue as string).length
    ```

## 接口

---

接口的作用为类型命名、为代码或第三方代码定义契约。

### 接口是如何工作的

接口可以理解成一段描述，描述了一个参数该有什么，是对一个参数或变量的一种约束。

```ts
interface LabelValue {
  lable: string
  value?: string
}

function printLabel(labelObj: {label: LabelValue}): void {
  console.log(labelObj.label)
  if(labelObj.value) {
    console.log(labelObj.value)
  }
}

let myObj = { size: 10, label: 'size 10 object' }

printLabel(myObj)
```

### 接口定义的数据类型

* 性质上分
  * 一般属性
  * 可选属性
  * 只读属性

  ```ts
  interface Config {
    color: string
    width?: number
    readonly x: number
    readonly y: number
  }
  ```

* 额外属性检查
  * 在检查或预见所定义属性意外的属性 key 的类型和 value 类型

  ```ts
  interface SquareConfig {
    color?: string
    width?: number
    [propName: string]: any
  }
  ```

* 类型上分
  * 函数类型

  ```ts
  interface Func {
    (source: string, subString: string): boolean
  }
  ```

  * 可索引的类型
    * 数字索引

    ```ts
    interface MyArray<T> {
      [index: number]: T
      length: number
      name: T
    }
    ```

    * 字符串索引

    ```ts
    interface Dictionary<T> {
      [index: string]: T
      length: number
      name: T
    }
    ```

    * 如果对象要同时支持两种索引类型，那么必须保证**字符串索引对应值的类型是数字索引对应值的类型的基础类**。
      * 说人话就是**字符串值得类型必须是索引属性值得类型的基础（我觉得理解成子集更形象）**
      * 因为在 JavaScript 的实现中，当我们以一个数字作为 key 访问对象属性时，JavaScript 会首先将该数字转变成字符串形式，再进行属性读取。

  * 类类型
    * 实现接口：TS 通过接口来强制一个类去实现某种约定
    * class 类通过 implements 来实现接口约束
    * 接口中的除去非可选属性和扩展属性都需要实现，类也可以在实现接口过程中也可以添加自己的属性

      ```ts
      // 接口属性 currentTime 属性必须实现
      interface ClockInterface {
        currentTime: Date
      }

      class Clock implements ClockInterface {
        currentTime: Date
        constructor(h: number, m: number) {}
      }
      ```

    * 类静态部分和实例部分的区别
    * 静态类型部分，不在检查的范围内
    * 想要检查静态类型，需要使用到一个辅助函数
  
      ````ts
      interface TestContructor {
        new (hour: number, munite: number): TestInterface
      }

      interface TestInterface {
        test?(): any
      }

      function createTest(Ctor: TestContructor, hour: number, munite: number): TestInterface {
        return new Ctor(hour, munite)
      }

      class Test implements TestInterface {
        constructor(h: number, m: number) {}
      }
      ````

  * 混合类型
    * 由于 JavaScript 的类型是动态灵活的，有时候需要指定多种类型
    * 例如，一个对象，它既是对象也是函数，并且带有额外属性

      ```ts
      interface Counter {
        (start: number): number // 指定函数的组成结构，返回类型
        initNumber: number
        reset():void // 方法而不是函数
      }

      function getCounter(): Counter {
        // counter 既是对象也是函数
        let counter = <Counter>function (start: number) { return start };
        counter.initNumber = 123;
        counter.reset = function () { console.log('this is reset') };
        return counter;
      }

      let c = getCounter();
      c(10);
      c.reset();
      c.initNumber = 5.0;

      ```

## 类

---

### 创建并实现一个类

``` ts
// 创建类
class Animal {
  public name: string
  public voice: number
  protected protectedName: string
  constructor(name: string, voice: string) {
    this.name = name
    this.voice = number
  }
  voice() {
    return `${name}'s voice is ${this.voice}`
  }
}

// 继承类

class Corgi extends Animal {
  selfName: string
  readonly belognTo: string
  private muster: string
  // 错误，可以重写父类方法和属性，但是，必须和父类方法或属性的类型保持一直
  // name: number
  // voice() {
  //   console.log(1111)
  // }
  // 正确重写方式
  name: string
  voice() {
    return 'hello world'
  }
}

```

### 访问修饰符 public、private 和 protected 如何区分

---

|可访问性|public|protected|private|
|---|---|---|---|
|父类|true|true|true|
|子类|true|true|false|
|实例|true|false|false|

```ts
// 父类
class Test {
  public keyName1: stringunknown
  private keyName2: number
  protected keyName3: unknown
}
// 实例
const test = new Test()
test.keyName1 // ok
test.keyName2 // 错误 属性“keyName2”为私有属性，只能在类“Test”中访问。
test.keyName3 // 错误 属性“keyName3”受保护，只能在类“Test”及其子类中访问。

// 子类
class ChildTest extends Test {
  constructor() {
    super()
    this.keyName1 // ok
    this.keyName2 // 错误 属性“keyName2”为私有属性，只能在类“Test”中访问
    this.keyName3 // ok
  }
}

// 子类实例
const child_test = new ChildTest()

child_test.keyName1 // ok
child_test.keyName2 // 错误 属性“keyName2”为私有属性，只能在类“Test”中访问。
child_test.keyName3 // 错误 属性“keyName3”受保护，只能在类“Test”及其子类中访问。

```

### readonly 修饰符

* 使用 readonly关键字将属性设置为只读的;
* 只读属性必须在声明时或构造函数里被初始化

```ts
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

// 简化版 相对于 protected 和 public 也是一样的
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor (readonly name: string) {
        
    }
}
```

### get 和 set（存取器）

```ts
// typescript 支持通过 getters/setters 来截取对对象成员的访问
class TestGetAndSet {
  isPrint: boolean
  private printMsg: string

  get printTest() {
    return !!this.printMsg ?  this.printMsg : 'hola'
  }
  set printTest(value) {
    if(isPrint) {
      this.printMsg = value
    } else {
      console.log('hahahhahaha.........')
    }
  }
}
```

<!-- ### 静态属性

与 ES6 中的静态属性规则类似，只能通过类本身调用（不能用 **this**），可以被子类继承，但是不能被实例继承，详细：
https://es6.ruanyifeng.com/#docs/class -->

### 抽象类

* 作为其他衍生类的基类，不能实例化，与接口不同的事，抽象类包含成员的实现细节

* 与接口不同的是，抽象类中被 abstract 标记的方法和属性必须实现，而且自定义了抽象类没有的属性和方法，会报错（衍生类是抽象类的子集）

* 接口是指定类型，有选择的实现接口内的属性和方法，可以自定义接口为指定的方法和属性（接口是衍生类的子集）

```TS
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
```






<!-- ## 函数

## TS 项目构成

---

### 编译配置文件

#### tsconfig.json

* 告诉 TypeScript 哪些文件需要被编译，哪些文件不需要编译
* 编辑过程中需要使用到的信息 -->
