const express = require('express');
const app = express();
const studentRoutes  = require('./routes/student');

app.use(express.json());
app.use('/api', studentRoutes);

module.exports = app;