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

Before each recursive call, in which we add the next number in the Fibonacci
sequence to the fibArray we'll let k = fibArray.length, then:  
If $k \geq 1$, then $fibArray[0] = 0$.  
If $k \geq 2$, then $fibArray[1] = 1$.  
For every index, $i$, where $2 \leq i < k$, $fibArray[i] =
fibArray[i - 1] + fibArray[i - 2]$.  
So my invariant is the property that all elements computed so far, and stored
within fibArray, satisfy the Fibonacci relationship.

## Sources

Before I could understand recursion, I needed to understand recursion, so I used
the following source to help understand recursion:  

https://www.geeksforgeeks.org/introduction-to-recursion-2/#  

## Plagiarism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
