function Person() {

}

Person.prototype.name = 'li'
Person.prototype.age = 29
Person.prototype.job = 'web'
Person.prototype.sayName = function () {
    console.log((this.name))
}

var person1 = new Person();
var person2 = new Person();

console.log(person1.hasOwnProperty('name'))
person1.name = 'zhangsan'
console.log(person1.name )
console.log(person1.hasOwnProperty('name'))
console.log('name' in person1)