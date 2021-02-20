---
title: 经验
date: 2021-01-20
categories:
 - css
tags:
 - css
 - 前端
sidebar: 'auto'
---

## 被包裹的 img 元素与父元素下沿有一个缝隙

img 的 display 属性默认是 inline, vertical-align 默认是 baseline, 所以 img 底部会与文字基线对齐, 造成缝隙的出现.

解决方法有两个:
1. `vertical-align: middle`
2. `display: block`

## 文本超出部分显示为省略号

```css
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

## height 的 inherit 属性不生效

只有当父元素明确声明 height 时才会生效