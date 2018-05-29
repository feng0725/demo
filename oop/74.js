var re = null
for (var i = 0; i < 10; i++) {
    re = /cat/g
    console.log(re.test('catastrophe'),1)
}
for (var i = 0; i < 10; i++) {
    re = new RegExp('cat', 'g')
    console.log(re.test('catastrophe'),2)
}