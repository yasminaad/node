var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true,
    uppercase: true,
    symbols: false
    
    
});

// 'uEyMTw32v9'
console.log(password);