---
title: 数据类型
date: 2021-01-10
categories:
 - javascript
tags:
 - javascript
 - 前端
sidebar: 'auto'
---

JavaScript 有六种数据类型，（ES6 新增一种 Symbol 类型）：

- 数值（number）
- 字符串（string）
- 布尔值（boolean）
- undefined
- null
- 对象（object）

数值、字符串、布尔值属于原始类型，即他们是最基本的类型。至于 undefined 和 null，一般将他们看成两个特殊的值。
对象属于复合类型，它又分为三个子类型：

- 狭义对象（object）
- 数组（array）
- 函数（function）

## 确定一个类型
JavaScript 有三种方法确定一个数据的类型：

- typeof 运算符
- instanceof 运算符
- Object.prototype.toString 方法

对于数值、字符串、布尔值，typeof 运算符分别返回 `number` 、 `string` 、 `boolean` 。函数返回 `function` 。
```javascript
typeof 1; // "number"
typeof '1'; // "string"
typeof true; // "boolean"

function f() {}
typeof f // "function"
```
undefined 返回 "undefined。利用这一点，typeof 可以用来检查一个没有声明的变量，而不报错。实际编程中通常用于判断语句。
```javascript
v; // Uncaught ReferenceError: v is not defined

typeof v; // "undefined"

// 实际应用
if (typeof v === "undefined") {
 		// ... 
}
```
对象返回 `object`
```javascript
typeof {}; // "object"
typeof []; // "object"
```
在 JavaScript 中数组是一种特殊的对象，利用 `instanceof` 可以实际的区分数组和对象。
```javascript
var o = {};
var a = [];

o instanceof Array; // false
a instanceof Array; // true
```
null 会返回 `object` ，这是历史原因造成的。
## null、undefined、布尔值
`null` 和 `undefined` 含义非常相似，都可以表示没有，甚至 `==` 运算符直接报告两者相等，但又有些不同。出于历史原因，两者尴尬的共存了。两者的区别是这样的，`null` 是一个表示空的对象，转换为数值时为 `0`；`undefined` 是一个表示 “此处无定义” 的原始值，转换为数值时为 `NaN` 。
返回 `undefined` 的典型场景：
```javascript
// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined
```
布尔值代表“真”和“假”两个状态。如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为`false`，其他值都视为`true`。

- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `""`、`''`

注意，空数组（`[]`）和空对象（`{}`）对应的布尔值，都是`true`。
### 类型转换
在大多数情况下，运算符和函数会自动将赋予他们的值转换为正确的类型，称为隐式转换。也可以显式进行转换：
字符串转换
```javascript
let value = true;
String(value); // "true"
```

## 数值
JavaScript 内部，所有数字都是以 64 位浮点数形式存储，整数亦是如此。所以 `1` 和 `1.0` 是相同的。容易造成混淆的是，某些运算只有整数才能完成，此时 JavaScript 会自动把64位浮点数，转成32位整数，然后再进行运算。
JavaScript 中有几个特殊的数值：

- 正负 0
- NaN
- Infinity
