function Person(name, age, job) {
    this.name = name;
    this.age = age
    this.job = job

    if(typeof this.sayName !== 'function'){
        Person.prototype.sayName = function(){
            console.log(this.name)
        }
    }
}


var friend = new Person(' 李二1是', 28,'教师')
friend.sayName()