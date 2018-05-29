var person = {
	_name: 1234
};
Object.defineProperty(person, 'name', {
	get: function () {
		console.log('get', this._name)
		return this._name
	},
	set: function (val) {
		this._name = val
		return val
	}
})
// person.name = '123'
// console.log(person.name)
// person.name

var book = {
	_year: 2014,
	edition: 1
}

Object.defineProperty(book, 'year', {
	get: function () {
		return this._year
	},
	set: function (newValue) {
		this._year = newValue
	}
})
book.year = 2015;
console.log(book.year)


