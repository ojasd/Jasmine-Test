// Jasmine test function to test email validation

describe("Email validation", function() {  
  
  it("should validate someone@somewhere.com",function(){  
console.log("aaa");  
    var result = is_valid("someone@somewhere.com");  
    expect(result).toBe(true);  
  });  
  
  it("should not validate someone@somewhere",function(){  
    var result = is_valid("someone@somewhere");  
    expect(result).not.toBe(true);  
  });  
  
});

describe('JavaScript addition operator', function () {
    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(3);
    });
});

describe('Learning the Matches', function() {
  
  it("is defined", function () {
    var name = "Andrew";
    expect(name).toBeDefined();
  });
  
  it("is not defined", function () {
    var name;
    expect(name).toBeUndefined();
  });
  
  it("is less than 10", function () {
    expect(5).toBeLessThan(10);
  });
  
  it("is greater than 10", function () {
    expect(20).toBeGreaterThan(10);
  });
  
  it("should contain oranges", function () {
    expect(["apples", "oranges", "pears"]).toContain("oranges");
  });
  
});

describe('Testing Objects', function() {
  
    var obj = new MyObject();

    beforeEach(function () {
        obj.setState("clean");
    });

    it("changes state", function () {
        obj.setState("dirty");
        expect(obj.getState()).toEqual("dirty");
    })
    it("adds states", function () {
        obj.addState("packaged");
        expect(obj.getState()).toEqual(["dirty", "packaged"]);
    })
});
  




