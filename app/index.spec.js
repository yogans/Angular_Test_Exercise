'use strict';
describe('login',function(){
  
  describe('login function definition',function(){
    
    it('should be defined',function(){
      expect(validate).toBeDefined();
    });
    
  });
  
  describe('login function validation',function(){
    
    it('expect validation to be true',function(){
      expect(validate).toBeTruthy();
    });
    
    it('expect validation to be false',function(){
      expect(validate).toBeFalsy();
    });
    
  });
  
});
  