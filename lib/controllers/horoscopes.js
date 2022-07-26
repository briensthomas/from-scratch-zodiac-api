const fetch = require('cross-fetch');
const { Router } = require('express');

const router = Router();

router
//   .get('/:sign', async (req, res) => {
//     const data = await fetch(`https://ohmanda.com/api/horoscope/${sign}`);
//     const sign = data.find((horoscope) => horoscope.id === req.params.id);
//     res.send(data);
//   })  

  .get('/', async (req, res) => {
    const data = await fetch('https://ohmanda.com/api/horoscope/aquarius/');
    const horoscope = await data.json();
    // console.log(horoscope);
    res.send(horoscope);

  });

module.exports = router;
