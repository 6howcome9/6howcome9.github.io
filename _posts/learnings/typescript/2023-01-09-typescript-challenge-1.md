---
layout: post
title: Typescript Challenge - Day 1
date: 2023-01-09-MON
categories: learnings typescrypt
tags: nomadcoders typescrypt challenge
toc: true
---

## Why not Javascript ?

### 1. array + boolean = string?

```js
> [1,2,3] + false
> '1,2,3false'
```

### 2. Wrong argument, But got return

```js
function divide(a, b) {
  return a / b;
}

> divide("aaa")
> NaN
```

### 3. Run time error
```js
const user = {
  firstName: "Hello",
  lastName: "World"
}

console.log(user.name); // run하기 전까지는 에러가 날 수  있다는 걸  알 수  없음
```

## Implicit Types vs Explicit Types

### 1. 타입 추론
```ts
let a = "string"; // string type으로 추론함
a = "hello";

a = 1; // error
```

### 2. 타입 명시
```ts
let b: boolean = 10; // error
```

### 3. 최소한의 타입 명시
- 타입스크립트가 타입을 추론하도록