const sumArray = (array1: number[], array2: number[]): number[] => {
    let result: number[] = []
    let maxLength = Math.max(array1.length, array2.length)

    for (let i = 0; i < maxLength; i++) {
        let arr1 = array1[i] || 0
        let arr2 = array2[i] || 0
        result.push(arr1 + arr2)
   }
   return result
}



console.log(sumArray([1, 0, 2, 3, 4],[3, 5, 6, 7, 8, 13] ))