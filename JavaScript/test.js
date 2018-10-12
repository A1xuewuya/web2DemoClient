// var a = 123;
// var b = 456;
// var c = a + b;
// var d;
// console.log(c);

// var name = "小明";
// var str = "hello world";
// var msg = `你好， ${name}`;
// console.log(msg);
// console.log(name.length);
// console.log(str.length);

// var age = 20;
// if (age >= 18) {
//     console.log("成年人");
// } else {
//     console.log("未成年人");
// }

// 循环 遍历数组
/*
var arr = ["a", "b", "c"];
for (let index = 0; index < arr.length; index++) {
    // const element = array[index];
    console.log(`索引是：${index}，值: ${arr[index]}`)
}
*/

// for.. in..
/*
var obj = {
    name: "jack",
    age: 20,
    city: "beijing"
};
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];

//     }
// }

// for(var key in obj){
//     console.log(key)
// };
// 要过滤掉对象继承的属性
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        // const element = object[key];
        console.log(key)
    }
}
*/

// ES6新数据类型Map和Set
// var m = new Map();
// var s = new Set();
// console.log(m);

// var m = new Map([
//     ["jack", 95],
//     ["tom", 100],
//     ["leile", 98]
// ]);
// m.get("tom");

// var m = new Map();
// m.set("name", "tom");
// m.set("age", 20)
// console.log(m.get("name"));

/*
var a = ['a', 'b', 'c'];
// console.log(typeof a)

a.forEach(function (element, index, array) {
    console.log(element);
    console.log(index);
})
*/

/*
var a = ['a', 'b', 'c'];
// var obj = {
//     name: "jack",
//     age: 20,
//     city: "beijing"
// };
// a.forEach(function(element, index, array){
//     console.log(element)
// })
a.forEach((element, index) => {
    console.log(element)
});
*/

// var max = function(a, b, ...rest){
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }
// max(10, 20, 30, 40, 50);

// 不在任何函数内定义的变量就具有全局作用域
// var course = 'Learn JavaScript';
// console.log(course);
// console.log(window);

// 局部作用域
// function foo() {
//     for (var i = 0; i <= 100; i++) {

//     }
//     i += 100;
//     console.log(i);
// }
// foo()

// 块作用域
// for (let index = 0; index < array.length; index++) {
// const element = array[index];

// }

// 解构赋值
// var arr = ['hello', 'world', 'china'];
// var [x, y, z] = arr;
// console.log(x)

// 对二维数组结构
// var arr = ['hello', ['world', 'china']];
// let [x, [y, z]] = arr;
// console.log(z)

//对对象解构赋值
// var person = {
//     name: '小明',
//     age: 20
// }
// var { name, age } = person;
// console.log(name)

// 对一个对象进行解构赋值时，同样可以直接对嵌套的对象属性进行赋值，只要保证对应的层次是一致的
// var person = {
//     name: "小明",
//     msg: {
//         age: 20,
//         job: "web"
//     }
// }
// var { name, msg: { age, job } } = person;
// console.log(age);

// var xiaoming = {
//     name: "小明",
//     birth: 2000,
//     age: function () {
//         let y = new Date().getFullYear();
//         return y - this.birth;
//     }
// };
// var age = xiaoming.age();
// console.log(age);

// var count = 0;
// var oldParseInt = parseInt; //保存原函数
// window.parseInt = function () {
//     count += 1;
//     return oldParseInt.apply(null, arguments);
// }

// var a = parseInt('10');
// var b = parseInt('20');
// var c = parseInt('30');
// console.log(count);


// 数组规则
/*
function pow(x) {
    return x * x * x;
}

var arr = [1, 2, 3, 4, 5];
var res = arr.map(pow);
console.log(res);
*/

// 把array的所有数字转成字符串
/*
var arr = [1, '2', '3', 4, 5];
var res = arr.map(String);
console.log(res);
*/

/*
var arr = [1, 2, 3, 4, 5];
var res = arr.reduce(function (x, y) {
    return x + y;
});
console.log(res);
*/

// ES6新语法 箭头函数 Arrow Function
/*
x => x * x;
function(x) {
    return x * x;
}
*/

// var fn = x => x * x;
// var res = fn(6);
// console.log(res);