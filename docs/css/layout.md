---
title: 网页布局
date: 2021-01-10
categories:
 - css
tags:
 - css
 - 前端
sidebar: 'auto'
---

## flex

flexbox 是一种一维的布局模型, 这里的一维是指一次只能处理一个维度上的元素布局, 一行或一列 (grid 属于二维布局).

### 两根轴线

当使用 flex 布局时, 首先要想到的就是两根轴线 --- 主轴 (main axis) 和交叉轴 (cross axis). 主轴由属性 `flex-direction` 定义, 交叉轴垂直于他.

`flex-direction` 可以取 4 个值:
- row
- row-reverse
- column
- column-reverse

前两个值代表主轴延水平方向, 后两个值代表主轴延上下方向.