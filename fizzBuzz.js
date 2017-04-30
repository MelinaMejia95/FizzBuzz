var i = 0

for (i=1; i<=100; i++) {
	if (i%3 == 0) {
		document.write('Fizz')
	} else if (i%5 == 0) {
		document.write('Buzz')
	} else if (i%3 == 0 && i%5 == 0) {
		document.write('FizzBuzz')
	} else {
		document.write(i)
	}
}

