function mergeSort(array) {
    if(array.length <= 1){
        return array;
    }
        
        const [array1, array2] = splitArray(array);
        
        const sortedArray1 = mergeSort(array1);
        const sortedArray2 = mergeSort(array2);
    console.log("This was printed recursively");
    return  mergeArray(sortedArray1, sortedArray2);
}

function splitArray(array) {
    let halfLength = Math.floor(array.length / 2);
    let firstPart = array.slice(0, halfLength);
    let secondPart = array.slice(halfLength);

    return [firstPart, secondPart];
}

function mergeArray(array1, array2){
    let result = [];
    let i = 0, j = 0;

    while(i < array1.length && j < array2.length){
        if(array1[i] < array2[j]){
            result.push(array1[i]);
            i++;
        }else{
            result.push(array2[j]);
            j++
        }
    }
    
    return result.concat(array1.slice(i)).concat(array2.slice(j));

}

let array = [5, 1,4,6,7,8,9,2];
console.log(mergeSort(array))