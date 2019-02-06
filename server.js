const cote = require('cote');

const responder = new cote.Responder({ name: 'wtf yo' });

const rates = { usd_eur: 0.91, eur_usd: 1.10 };

responder.on('convert', (req, cb) => {
    cb(req.amount * rates[`${req.from}_${req.to}`]);
});