enum Color { Red, Green, Blue }

let c: Color = Color.Red

console.log(c)

let no: never

if(no) {
  console.log(no)
} else {
  console.log(!no)
}