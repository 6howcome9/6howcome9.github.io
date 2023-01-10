---
layout: post
title: Typescript Challenge - Day 2
date: 2023-01-10-TUE
categories: learnings typescript
tags: nomadcoders typescript challenge
toc: true
---

## 1. How to use TypeScript
```ts
type Person = {
  readonly name: string, // non-editable
  age?: number // optional
}

const john: Person = {
  name: "John"
}

// const setPerson = (name: string): Person => ({name})
function setPerson (name: string): Person {
  return {
    name
  }
}

const jenny = setPerson("Jenny");
```

## 2. Tuple
- 최소한의 길이
- 순서에 따른 변수 타입

```ts
const Person: [string, number] = ["John", 10];
```

## 3. Other Types

### 1) unknown
```ts
let res: unknown;
let data = res + 1; // error
if (typeof res === 'number') {
  let data = res + 1;
}
```

### 2) void
```ts
// function hello(): void {
function hello() {
  console.log('Hello!');
}
hello.toUppperCase(); // error
```

### 3) never
- 함수가 return을 하지 않을 때 사용 (exception 발생 시)
```ts
function hello(): never {
  throw new Error("error!!");
}
```
