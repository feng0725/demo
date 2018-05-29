function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job
	this.sayName = function () {
		console.log(this.name)
	}

}

var person1 = new Person('lier', 22, 'theacer');
var person2 = new Person('wangsan', 23, 'student')