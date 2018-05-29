function SuperType() {
    this.property = true
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubvalue = function() {
    return this.subproperty;
}

SubType.prototype.getSuperValue = function() {
    return false;
}

var instance = new SubType();
console.log(instance.getSuperValue())
