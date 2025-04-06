# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

## My Invariant

At the beginning of each recursive call, it is true that the elements of fibArray
will satisfy the following conditions:  
If $fibArray.length \geq 0, fibArray[0] == 0$.  
If $fibArray.length \geq 1, fibArray[1] == 1$. 
For every index, $i$, where $2 \leq i < fibArray.length: fibArray[i] ==
fibArray[i - 1] + fibArray[i - 2]$.  

At The beginning of the $nth$ recursive call, it holds true that each element of
fibArray, for $2 \leq n < fibArray.length$ will be equivalent to $fibArray[n - 1] +
fibArray[n - 2]$. For $n = 0, 1: fibArray[n]$ will be equivalent to $0, 1$
respectively.
invariant for my program is fibArray. Prior to each recursive call of
calcFib(fibArray, n), fibArray contains the entire preceding sequence of
Fibonacci numbers. Beyond the base cases of fibArray[0] == 0, and fibArray[1]
== 1, for any n, which is an element of the natural numbers, fibArray[n] can be
calcualated as fibArray[n - 1] + fibArray[n - 2], after which fibArray[n + 1]
can be calculated as fibArray[n - 1 + 1] + fibArray[n - 2 + 1], etc.

## Sources

Before I could understand recursion, I needed to understand recursion, so I used
the following source to help understand recursion:  

https://www.geeksforgeeks.org/introduction-to-recursion-2/#  

## Plagiarism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
