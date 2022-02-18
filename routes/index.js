const express = require('express')
const router = express.Router();
const app = express()
const path = require('path');
const api = require('./api');
const cors = require('cors')

app.use(cors())

router.get('/', (req, res) => {
  const indexFilePath = path.resolve(`${__dirname}/../public/index.html`);
  res.sendFile(indexFilePath);
});

router.use('/api', api);

module.exports = router;
