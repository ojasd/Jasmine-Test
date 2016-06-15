// Email validation function

is_valid = function(email){  
  var reg_expr = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;  
  return reg_expr.test(email);  
}

var MyObject = function (state) {
    this._state = state;
}
MyObject.prototype.setState = function (state) {
    this._state = state;
};
MyObject.prototype.addState = function (state) {
    if (typeof this._state === "string") {
        this._state = [this._state, state];
    } else {
        this._state.push(state);
    }
};
MyObject.prototype.getState = function () {
    return this._state;
}


