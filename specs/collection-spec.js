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
});