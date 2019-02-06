const cote = require('cote');
const requester = new cote.Requester({name: 'something fancy here'});
let request = { type: 'convert', from: 'usd', to: 'eur', amount: Math.floor(Math.random() * 10) };


setInterval(() => {
    request = { type: 'convert', from: 'usd', to: 'eur', amount: Math.floor(Math.random() * 10) };

    requester.send(request, (res) => {
        console.log('request', request, 'answer', res);
    });
}, 5000);