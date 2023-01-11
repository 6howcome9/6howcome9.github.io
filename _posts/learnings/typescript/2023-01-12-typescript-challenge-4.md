---
layout: post
title: Typescript Challenge - Day 4
date: 2023-01-11-THU
categories: learnings typescript
tags: nomadcoders typescript challenge
toc: true
---

## Polymorphism
- Poly: many, several, multi
- Morpho: form, structure

### 1) Concrete type
- Concrete: 구상
- new 키워드를 사용하여 인스턴스를 만드는 클래스 타입

### 2) Generic
- like placeholder
- call signiture 작성 시 정확한 타입을 모를 때 사용

```ts
type MyPrint = <T>(arr: T[]): void


const myPrint: MyPrint = (arr) => {
  arr.forEach(i => console.log(i));
}

myPrint([1, 2, 3]); // 타입스크립트 타입 추론
myPrint([true, false, false]); // 타입스크립트 타입 추론
```

```ts
function getFirstEl<T>(a: T[]) {
  return a[0];
}

const a = getFirstEl([1, 2, 3, 4]);
const b = getFirstEl<number>([1, 2, 3, 4]);
```

```ts
type Person<Info> = {
  name: string;
  info: Info
}

const john: Person<{hobbies: string[]}> = {
  name: "John",
  hobbies: ["swim", "reading"]
}

const jenny: Person<null> = {
  name: "Jenny",
  info: null
}
```
