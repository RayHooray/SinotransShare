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

declare function create(o: object | null): void

create({a: 1})
create(null)



