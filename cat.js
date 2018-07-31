const fs = require('fs');


module.exports = function () {
	process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    cmdArray = cmd.split(' ');
		if(cmdArray[0] === 'cat'){
      let fileName = './' + cmdArray[1];
			fs.readFile(fileName, (err, files) => {
			if (err) {
				throw err
			} else {
				process.stdout.write(files)
				process.stdout.write("prompt > ")
			}
		});
	}
})
}
