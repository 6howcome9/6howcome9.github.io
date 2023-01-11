---
layout: post
title: Typescript Challenge - Day 4
date: 2023-01-11-THU
categories: learnings typescript
tags: nomadcoders typescript challenge
toc: true
---

## 1. Polymorphism
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

## 2. Practice
```ts
// last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
function last<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

const lastTest1 = last([1, 2, 3]);
const lastTest2 = last(["ㄱ", "ㄴ", "ㄷ"]);

console.log(lastTest1);
console.log(lastTest2);


// prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
function prepend<T>(arr: T[], item: T): T[] {
  return [item, ...arr];
}

const prependTest1 = prepend([2, 3], 1);
const prependTest2 = prepend(["나", "다"], "가");

console.log(prependTest1);
console.log(prependTest2);
```