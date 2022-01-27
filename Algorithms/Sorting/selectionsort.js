const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function SelectionSort(array){
    for (let i = 0; i < array.length; i++){
        let min = i;
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[min]){
                min = j;
            }
        }
        let temp = array[i]
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}
console.log(SelectionSort(array));