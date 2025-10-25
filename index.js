const express = require('express');
const conn = require('./db/conn');
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express();
app.use(express.json());
require('dotenv').config();

app.use(cors())
app.use(express.urlencoded({ extended: false }));

const login_rt = require('./routes/rt_login');
const agendamento_rt = require('./routes/rt_agendamento')

app.use('/login', login_rt);
app.use('/agendamento', agendamento_rt);

app.listen(3042, () => {
    console.log('Server is running on http://localhost:3042');
});
  