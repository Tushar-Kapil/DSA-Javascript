const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function MergeSort(array){

    if (array.length === 1){
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    return Merge (
        MergeSort(leftArray),
        MergeSort(rightArray),
    )
}

function Merge(leftArray, rightArray){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length){
        let leftElement = leftArray[leftIndex];
        let rightElement = rightArray[rightIndex];

        if (leftElement < rightElement){
            result.push(leftElement);
            leftIndex++;
        } else {
            result.push(rightElement)
            rightIndex++;
        }
    }

    return [...result, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)]
}

console.log(MergeSort(array));