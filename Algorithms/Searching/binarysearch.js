const array = [0,2,4,5,7,8,9,10,13,14];

function BinarySearch(array, value){
    let first = 0;
    let last = array.length - 1;

    while (first <= last){
        let middle = Math.floor((first + last) / 2);

        if (value === array[middle]){
            return middle;
        }

        if (value < array[middle]){
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }

    return -1;
}

console.log(BinarySearch(array, 14));