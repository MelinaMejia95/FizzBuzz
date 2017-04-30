var i = 0

for (i=1; i<=100; i++) {
	if (i%3 == 0) {
		document.write('<br /> Fizz')
	} else if (i%5 == 0) {
		document.write('<br /> Buzz')
	} else if (i%3 == 0 && i%5 == 0) {
		document.write('<br /> FizzBuzz')
	} else {
		document.write('<br /> ' + i)
	}
}


