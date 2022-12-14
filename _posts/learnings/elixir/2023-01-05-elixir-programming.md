---
layout: post
title: 처음 배우는 엘릭서 프로그래밍
date: 2023-01-05-THU
categories: learnings elixir
tags: functional elixir
toc: true
---

## 함수형 프로그래밍에 대해 생각하기

- 객체지향 프로그래밍이 코드를 설계하는 유일한 방법은 아니다.
- 함수형 프로그래밍은 복잡하거나 수학적이지 않아도 된다.
- 프로그래밍의 기본이 할당문, if문, 반복문은 아니다.
- 동시성 프로그래밍에 락, 세마포어, 모니터 같은 것들이 반드시 필요한 것은 아니다.
- 프로세스가 꼭 비싼 자원은 아니다.
- 메타프로그래밍은 언어에 얽매여 있지 않다.
- 아무리 일이라도, 프로그래밍은 재밌어야 한다.

## 기억하면 좋을 것들

- 아톰은 주로 이름값을 위해 사용된다.
- 튜플은 순서가 중요한 리스트로 2 ~ 4개의 값을 가진다.
- Keyword List가 함수의 마지막 인자라면 1번을 2번처럼 쓸 수 있다.
  ``` elixir
  # 1
  DB.save(record, [{:use_transition, true}, {:logging, "HIGH"}])
  ```
  
  ``` elixir
  # 2
  DB.save(record, use_transition: true, logging: "HIGH")
  ```
- Sigil(시길)은 리터럴로 엘릭서의 자료구조를 생성하는 데 사용된다.
- Module, Record, Protocol, Behaviour는 PascalCase를 사용하며, 다른 식별자는 snake_case를 사용한다.
- with 표현식
  - 메크로를 호출하는 것과 같은 취급을 받는다.
    ``` elixir
    mean = with # 이렇게 쓰면 안 돼!!!!!!
             count = Enum.count(values),
             sum = Enum.sum(values)
           do
             sum/count
           end
    ```
  - 변수의 local scope를 정의한다.
    ```elixir
    content = "TEST"
    with_statement = with {:ok, file} = File.open("/etc/passwd"),
                           content = IO.read(file, :all)
                     do
                       "DO SOMETHING"
                     end
    IO.puts contents # => TEST
    ```
  - 패턴 매칭이 실패했을 때, 패턴 매칭되지 않았던 값을 반환한다.
- String Interpolation: `"Hello, #{name}"`
- 클로저는 스코프가 변수 바인딩을 저장해두어 나중에 사용할 수 있도록 한다.
- & 캡처 연산자
  ``` elixir
  # 1
  div_rem = &{ div(&1, &2), rem(&1, &2) }
  
  div_rem.(13, 5) # {2, 3}
  
  # 2
  greeting = &"Hello, #{&1}"
  
  greeting.("there") # Hello, there
  ```
- default parameter
  ``` elixir
  defmodule Example do
    def func(p1, p2 \\ 2, p3 \\ 3, p4) do
      IO.inspect [p1, p2, p3, p4]
    end
  end
  
  Example.func("a", "b")              # ["a", 2, 3, "b"]
  Example.func("a", "b", "c")         # ["a", "b", 3, "c"]
  Example.func("a", "b", "c", "d")    # ["a", "b", "c", "d"]
  ```
- import and alias
  ``` elixir
  import List, only: [flatten: 1, duplicate: 2]
  alias My.Module.Parser, as Parser
  ```
 - 모듈의 속성(attribute)은 메타 데이터 용도로만 사용하는 것이 좋다. `@name "John"`
 - 모듈 이름은 하나의 아톰이다. 모듈의 정의하면 엘릭서는 내부적으로 `Elixir.`가 prefix로 붙는 아톰으로 그 이름을 바꾼다.
 - 얼랭에서 변수이름은 대문자, 모듈이름은 소문자로 시작한다. 엘릭서에서 얼랭 모듈을 사용할 경우 모듈 이름을 아톰형식으로 바꾸어 호출하면 된다.
 - list는 head, tail로 구성되며, head는 값, tail은 그 나머지 값을 포함한다.
    ``` elixir
    def square([]), do: []
    def square([ head | tail ]), do: [ head * head, square(tail) ]
    
    # map
    def map([], _func), do: []
    def map([ head | tail], func), do: [ func.(head) | map(tail, func) ]
    
    # reduce
    def reduce([], value, _func), do: value
    def reduce([ head | tail ], value, func), do: reduce(tail, func.(head, value), func)
    ```
  - 조인 연산자: `[ 1, 2, 3 | [ 4, 5, 6] ]`
  - 패턴 매칭은 재귀적이므로, 패턴 안에서 패턴 매칭을 수행할 수 있다.

## 자료형 가이드
- 내용을 기준으로 패턴 매칭하고 싶은 경우: 맵
- 같은 키로 여러 항목을 저장해야 하는 경우: 키워드 리스트
- 요소들의 순서가 보장되어야 하는 경우: 키워드 리스트
- 필드가 정해져 있는 경우(데이터 구조가 항상 동일한 경우): 구조체
- 어느 것도 해당하지 않는 경우: 맵

---
- 출처: 데이트 토머스(2022). 처음 배우는 엘릭서 프로그래밍(역 권두호). 서울: 한빛미디어(주).

