const bubbleSort = (array) => {
    let swaps = 0

    while (swaps < array.length) {

        swap(array)
        swaps++
    }
    //how many swaps? if more than zero repeat

    return array

}

const swap = (array) => {
    let index = 0
    while (index < array.length) {
        const left = array[index]
        const right = array[index + 1]
        if (left > right) {
            array[index] = right
            array[index + 1] = left
        }
        index++
    }
    return array

}