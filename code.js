function fib(n)
{
    // Initialize array to hold fibArray.
    var fibArray = [];

    // If desired fib sequence is amongst base cases...
    if(n == 0 || n == 1)
    {
        // Either base case should will result in 0 being the first fib elemet.
        fibArray.push(0);
        if(n == 1)
        {
            // If second base case, 1 will be second fib element.
            fibArray.push(1);
        }
    }

    // If desired fib sequence contains more elements than base cases...
    if(n > 1)
    {
        // Initialize fibArray to calculate later fib elements.
        fibArray.push(0);
        fibArray.push(1);
        // Call helper function with fibArray, so we can calculate later elements,
        // and n, so we know when our fibArray is of appropriate length.
        return calcFib(fibArray, n);
    }
    
    return fibArray;
}

function calcFib(fibArray, n)
{
    // If fibArray is of length n + 1, we're done, just return fibArray.
    if(fibArray.length == n + 1)
    {
        return fibArray;
    }
    // Otherwise push the next fib element onto fibArray, calculated as the previous
    // two values, ten return the result of recursively calling itself.
    else
    {
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
        return calcFib(fibArray, n);
    }
}