const express = require('express');
const app = express();

app.use((req, res, next) => {
	console.log('req headers: ', req.headers);
	// middleware can append extra data to the request object that downstream middlewares can read/alter.
	req.foo = 'bar';
	next();
})

app.get('/', (req, res) => {
	console.log("Console Hello, World");
	// res.json() same as res.send()
	res.json({
		foo: req.foo
	});
})

app.listen(3000, (err) => {
	if (err) {
		return console.log('Error: ', err);
	}
	console.log('Server is running');
})