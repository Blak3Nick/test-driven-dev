describe('Collection', function () {
   var emptyCollection;
    var oneCollection;
    var manyCollection;

    beforeEach(function () {
        emptyCollection = new Collection();
        oneCollection = new Collection();
        manyCollection = new Collection();
   });
    describe("is empty", function () {
     it("should return true", function () {

         expect(emptyCollection.isEmpty()).toBe(true);
     });

   });
    describe("contains", function () {
       describe("when the item exists", function () {
          expect(oneCollection.contains(item).toBe(true));
           expect(manyCollection.contains(item).toBe(true));
           expect(emptyCollection.contains(item).toBe(false));
       });
    });

});