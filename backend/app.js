const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');

//load config file
const config = require('../config/config');
// const Post = require('./models/post');

const app = express();

// mongoose.connect("mongodb+srv://andy:N2LcfyylMOLfsbel@cluster0-hhltm.mongodb.net/node-angular?retryWrites=true")
mongoose.connect(`mongodb+srv://${config.name}:${config.pw}@cluster0-hhltm.mongodb.net/node-angular?retryWrites=true`)
.then(() => {
    console.log('Connected to the database!')
  })
  .catch(() => {
    console.log('Connection failed')
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.use('/api/posts', postsRoutes);

// N2LcfyylMOLfsbel
module.exports = app;
