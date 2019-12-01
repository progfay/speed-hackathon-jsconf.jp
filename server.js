'use strict';

const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression({ level: 9 }));
app.use(express.static('.'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Please access to http://localhost:3000/2019/speakers')
});
