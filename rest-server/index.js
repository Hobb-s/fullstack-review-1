require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT;

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.listen(PORT, () => {
  console.log(`Successfully connected to PORT: ${PORT}`);
});