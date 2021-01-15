---
title: powershell
date: 2021-01-15
categories:
 - PowerShell
tags:
 - PowerShell
 - shell
 - 脚本
sidebar: 'auto'
---

## 环境变量

[about_Automatic_Variables](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_automatic_variables?view=powershell-7.1)

- $PSVersionTable: ps 版本信息
- $PROFILE: 当前用户的启动配置文件

## 执行策略

默认的执行策略是 `restricted`, 即禁止运行任何脚本。`Get-ExecutionPolicy` 获取当前执行策略, `Set-ExecutionPolicy -ExecutionPolicy` 设置执行策略, 建议修改为 `RemoteSigned
`.

## 命令

### Get-Member

`Get-Member` 接受一个对象, 然后打印出对象的 Member.

- `Get-Member -MemberType`: 选择打印 Member 的类型

### Get-Command

- `Get-Command -ParameterType typename`: 根据接受参数的类型查找命令
- `Get-Command -Module moduleName`: 获取模块相关的命令

### Select-Object

- `xxx | Select-Object -Property properties`: 通过管道接收一个对象, 选择打印哪些 Property

### Out-Host

打印字符串到屏幕