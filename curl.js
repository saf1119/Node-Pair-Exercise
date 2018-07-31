const request = require('request');

module.exports = function () {
	process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const cmdArray = cmd.split(' ')
		if (cmdArray[0] === 'curl'){
			request(cmdArray[1].toString(), function (err, response, body){
				if (err){
					throw err;
				}
				console.log(body)
			})
	}
})
}
