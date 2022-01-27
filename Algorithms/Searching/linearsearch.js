const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return i
        }
    }
    return -1
}

console.log(linearSearch(array, 6));