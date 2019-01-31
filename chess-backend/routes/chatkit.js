//use chatkit
var Chatkit = require('@pusher/chatkit-server');

const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:a793e5d7-f35e-41c4-9373-544efaf68cf2',
    key: '90c441b5-0be4-499f-bb92-7eab2faf18b8:rYcacZuuMkww7XAoE8XOWPdQz2UnwqwOWb4R3cP1ddA='
 });

 module.exports = chatkit