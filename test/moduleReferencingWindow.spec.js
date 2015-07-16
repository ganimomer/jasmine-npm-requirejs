define(['../lib/moduleReferencingWindow'], function(moduleReferencingWindow) {

  describe('moduleReferencingWindow', function() {
    it('should return 12', function() {
      expect(moduleReferencingWindow.a).not.toThrow();
      expect(moduleReferencingWindow.b()).toEqual(12);
    });
  });
});
