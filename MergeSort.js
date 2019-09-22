function f(arr, left, right) {
    if (left === right) {
        return [arr[left]];
    }
    if(right-left===1){
        if (arr[left] > arr[right]) {
            return [arr[right],arr[left]];
        }
        return [arr[left],arr[right]];
    }
    let middle = Math.floor((right + left) / 2);
    let t1 = f(arr, left, middle);
    let t2 = f(arr, middle + 1, right);
    let i = 0;
    let j = 0;
    let temp = [];
    while (i < t1.length && j < t2.length) {
        if (t1[i] < t2[j]) {
            temp.push(t1[i++]);

        } else {
            temp.push(t2[j++]);
        }
    }
    while (i < t1.length) {
        temp.push(t1[i++]);
    }
    while (j < t2.length) {
        temp.push(t2[j++]);
    }
    return temp;
}

function MergeSort(arr) {
    return f(arr,0,arr.length-1);
}
function BubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
module.exports = {
    MergeSort: MergeSort,
    BubbleSort
}