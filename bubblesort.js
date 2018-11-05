const bubbleSort = {

    swap(array) {
        let index = 0;
        while (index < array.length) {
            const left = array[index];
            const right = array[index + 1];
            if (left > right) {
                array[index] = right;
                array[index + 1] = left;
            }
            index++;
        }
        return array;
    },

    sort(array) {
        let swaps = 0;

        while (swaps < array.length) {
            this.swap(array);
            swaps++;
        }
        return array;
    }

}
console.dir(bubbleSort);