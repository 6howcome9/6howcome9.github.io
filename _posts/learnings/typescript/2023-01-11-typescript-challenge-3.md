---
layout: post
title: Typescript Challenge - Day 3
date: 2023-01-11-WED
categories: learnings typescript
tags: nomadcoders typescript challenge
toc: true
---

## 1. Call Signitures
```ts
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + d;
```

## 2. Overloading
- 여러 개의 call signiture를 갖는 함수

### 1) 인자의 수가 같은 경우
```ts
type Config = {
  path: string,
  state: obejct
}

type Push = {
  (path: string): void
  (config: Config): void
}

const push: Push = (config) -> {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
}
```

### 2) 인자의 수가 다른 경우

```ts
type Add = {
  (a: number, b: number): number
  (a: number, b: number, c: number): number
}

const add: Add = (a, b, c?: number) => {
  if (c) {
    return a + b + c;
  } else {
    return a + b;
  }
}

add(1, 2);
add(1, 2, 3);
```