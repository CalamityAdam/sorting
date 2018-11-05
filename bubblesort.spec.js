describe("Bubble Sort", function() {
  //functional variables

  beforeEach(() => {
    spyOn(bubbleSort, "swap").and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it("handles an empty array", function() {
    expect(bubbleSort.sort([])).toEqual([]);
  });
  it("handles an array of length 1", function() {
    expect(bubbleSort.sort([1])).toEqual([1]);
  });
  it("handles an array of length 2", function() {
    expect(bubbleSort.sort([4, 1])).toEqual([1, 4]);
  });
  it("handles an array of length 3", function() {
    expect(bubbleSort.sort([4, 3, 1])).toEqual([1, 3, 4]);
    expect(bubbleSort.swap.calls.count()).toEqual(3);
  });
});
