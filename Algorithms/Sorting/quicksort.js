function quickSort(array){
    if (array.length === 1){
        return array;
    }
    const pivot = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (let element of array.slice(0, array.length - 1)){
        element < pivot ? leftArray.push(element) : rightArray.push(element)
    }

    if (leftArray.length > 0 && rightArray.length > 0){
        return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    } else if (leftArray.length > 0){
        return [...quickSort(leftArray), pivot]
    } else {
        return [pivot, ...quickSort(rightArray)]
    }
}

const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(quickSort(array));
