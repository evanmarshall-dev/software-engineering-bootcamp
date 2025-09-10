const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');

const ledgerApp = express();
const port = process.env.PORT ? process.env.PORT : 1986;
const path = require('path');

ledgerApp.use(express.static(path.join(__dirname, "public")));
ledgerApp.use(express.urlencoded({ extended: true }));
ledgerApp.use(methodOverride('_method'));
ledgerApp.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

ledgerApp.get('/', (req, res) => {
  res.send('Welcome to the Ledger Light App');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    ledgerApp.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });