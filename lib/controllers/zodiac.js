const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs.js');

const router = Router();

router
  .get('/:id', (req, res) => {
    const zodiac = zodiacs.find((zodiac) => zodiac.id === req.params.id);
    res.json(zodiac);
  })  

  .get('/', (req, res) => {
    const data = zodiacs.map((zodiac) =>
      ({ id: zodiac.id, name: zodiac.name }));
    res.json(data);
  });

module.exports = router;
