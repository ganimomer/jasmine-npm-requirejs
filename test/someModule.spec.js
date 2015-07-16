define(['../lib/someModule'], function(someModule) {
  describe('someModule', function() {
    it('should return seven', function() {
      expect(someModule).toEqual(7);
    });
  });
});
