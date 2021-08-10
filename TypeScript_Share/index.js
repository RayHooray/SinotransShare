var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c);
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
function error(message) {
    throw new Error(message);
}
function printLabel(labelObj) {
    console.log(labelObj.label, labelObj.value);
}
var obj = {
    label: "hello",
    value: "world",
    hello: "dhfjhd"
};
printLabel(obj);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var cat = {
    name: "cat"
};
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var dog = {
    name: 'pudge',
    breed: "hahah"
};
var okay = { 100: dog, cat: cat };
console.log(okay[100]);
console.log(okay['cat']);
