process.stdout.write('prompt > ');

const done = (output) => {
	console.log(output)
	console.log('\nprompt > ');
}

const pwd = require('./pwd')
const ls = require("./ls")
const cat = require("./cat")
const curl = require('./curl')

module.exports = done;

pwd()
ls()
cat()
curl()

