const arr = [1, 2, 3, 4, 5];

function recursiveIteration(array, index = 0)
{
    console.log(array[index]);
    index++;

    if (array[index] !== undefined) {
        recursiveIteration(array, index);
    }
}

recursiveIteration(arr);
