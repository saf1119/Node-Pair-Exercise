const done = require('./bash')

console.log(done)

module.exports = function (done) {
	process.stdin.on('data', (data) => {
	const cmd = data.toString().trim();
	if(cmd === 'pwd'){
		done(process.cwd() + '\n');
	}
 });
}
