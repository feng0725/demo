function Person(){

}
Person.prototype = {
   //  constructor:Person,
    name:'张三',
    age:18,
    job:'流浪歌手',
    sayName:function(){
        console.log(this.name)
    }
}

Object.defineProperty(Person.prototype,'constructor',{
    enumerable:false,
    value:Person
}