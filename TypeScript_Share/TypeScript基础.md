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

## TypeScript 基础数据类型

---

### 数字（number）

  与 JavaScript 一样， TypeScript 里的所有数字都是浮点数。

  除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript 2015 中引入的二进制和八进制字面量

  ```ts
  let decLiteral: number = 6;
  let hexLiteral: number = 0xf00d; // 十六进制
  let binaryLiteral: number = 0b1010; // 二进制
  let octalLiteral: number = 0o744; // 八进制
  ```

### 布尔（boolean）

  最基本的数据类型就是简单的 true/false 值
  
  ```ts
  let isDone: boolean = false;
  ```

### 字符串（string）

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

### 数组

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

### 元组 Tuple

元组类型表示已知元素数量和类型（甚至是顺序）的**数组**，各元素的类型不必相同。 比如，你可以定义一对值分别为 string 和 number 类型的元组。

```ts
let x: [string, number];

x = ['hello', 10]

x = [10, 'hello']; // 检查类型错误
```

### 枚举（enum）

枚举类型可以为一组数值赋予友好的名字

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

默认情况下是从 0 开始

### any

### void

### null 和 undefined

### never

### Object

### 断言类型