const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const config = require('./config/env.config');
const schema = require('./schema');
const cors = require('cors');
const mongooseconfig = require('./config/mongoose.config')(config);
const graphqlHTTP = require('express-graphql');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client/build')));

//GraphQL Setup 
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
})


module.exports = app;