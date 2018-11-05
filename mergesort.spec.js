describe('Split Array function', function () {
    it('is able to split an even array into two halves', function () {
        // your code here
        expect(split([1, 2, 3, 4])).toEqual([
            [1, 2],
            [3, 4]
        ])

    });
    it('is able to split an odd array into two halves', function () {
        // your code here
        expect(split([1, 2, 3])).toEqual([
            [1, 2],
            [3]
        ])

    });


    describe('Merge function', function () {
        it('is able to merge two sorted arrays into one sorted array', function () {
            expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
        });
        it('is able to merge two sorted arrays of unequal lenghts into one sorted array', function () {
            expect(merge([1, 2, 5], [3, 4])).toEqual([1, 2, 3, 4, 5])
            expect(merge([1, 2, 5, 10, 12, 17], [3, 4, 6, 7, 18])).toEqual([1, 2, 3, 4, 5, 6, 7, 10, 12, 17, 18])
        });

    });

});