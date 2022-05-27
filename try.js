const arr = [7, 1, 3, 4, 1, 7]


function minimumDistances(a) {
    const copy = [...a]
    const resultArr = [];
    for(let i = 0; i < a.length; i++){
        copy[i] = -1;
        if(copy.indexOf(a[i]) > 1){
            resultArr.push(copy.indexOf(a[i]) - i)
            // console.log(found)
        }
        console.log(resultArr)
    }
}

console.log(minimumDistances(arr))