---
title: 运算符
date: 2021-01-10
categories:
 - javascript
tags:
 - javascript
 - 前端
sidebar: 'auto'
---

所有的比较运算符均返回布尔值

## 不同类型间的比较
当对不同类型的值进行比较时，JavaScript 会首先将其转化为数字（number）再判定大小。

## `==` 和 `===`
严格相等运算符  `===` 在作比较时不会做任何类型转换。换句话说，如果两个值属于不同类型，那么两者将不会进行任何比较，直接返回 `false`。

这里有一个特例，`null` 和 `undefined`, 当使用严格相等运算符比较时两者不等，因为两者属于不同类型。但是当用普通相等运算符 `==` 时，二者相等，这是因为 JavaScript 存在一个独立的特殊规则会判定二者相等。
```javascript
null == undefiled; // true
```
这个规则不会将二者转换为数字，而是直接判定相等，并且在此规则下，只有二者相等，二者不等于任何其他值。当使用其他数学式或比较方法 `< > <= >=` 时 `null` 及 `undefined` 则会被转换为数字：`null` 转为 `0`，`undefined` 转为 `NaN`。
```javascript
null > 0; false
null == 0; false
null >= 0; true
```
