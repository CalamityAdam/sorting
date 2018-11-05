function split(array) {

    /* your code here to define the firstHalf and secondHalf arrays */
    const firstHalf = []
    const secondHalf = []

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        (index < Math.ceil(array.length / 2)) ?
        firstHalf.push(element): secondHalf.push(element)
    }

    return [firstHalf, secondHalf];
}

function merge(array1, array2) {
    let mergedArray = []
    // debugger

    if (!array1.length) {
        mergedArray = [...mergedArray, ...array2]
        return mergedArray
    } else if (!array2.length) {
        mergedArray = [...mergedArray, ...array1]
        return mergedArray
    } else {
        const left = array1[0]
        const right = array2[0]
        if (left > right) {
            mergedArray.push(right)
            return [...mergedArray, ...merge(array1, array2.slice(1))]
        } else {
            mergedArray.push(left)
            return [...mergedArray, ...merge(array1.slice(1), array2)]
        }
    }

}