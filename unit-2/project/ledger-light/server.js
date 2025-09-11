// IMPORTS
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const helmet = require('helmet');
const morgan = require('morgan');
const MongoStore = require('connect-mongo');

// ROUTE IMPORTS
const indexRoutes = require('./routes/index');

// VARIABLES / APP INITIALIZATION
const ledgerApp = express();
const config = require('./config');
const port = config.port;

// ------------------
// MIDDLEWARE
// ------------------
// Serve static assets from /public (CSS, client JS, images). Keep early so static
// requests bypass most middleware and are fast.
ledgerApp.use(express.static(path.join(__dirname, 'public')));

// Views configuration for server-rendered templates
ledgerApp.set('views', path.join(__dirname, 'views'));
ledgerApp.set('view engine', 'ejs');

// ------------------
// BODY PARSING
// ------------------
// - urlencoded: form submissions
// - json: API clients or fetch() from the browser
ledgerApp.use(express.urlencoded({ extended: true }));
ledgerApp.use(express.json());

// Support forms that need PUT/DELETE via ?_method=PUT
ledgerApp.use(methodOverride('_method'));

// Security headers — mount early to apply headers to all responses
ledgerApp.use(helmet());

// HTTP request logging (dev friendly). Replace or configure for production.
ledgerApp.use(morgan('dev'));

// Session middleware with MongoDB-backed store (persist sessions across restarts)
ledgerApp.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  // MongoDB session persistence
  store: MongoStore.create({ mongoUrl: config.mongoUri }),
  // Session secure cookie settings
  cookie: {
    httpOnly: true,
    secure: config.isProduction,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  }
}));

// DEFAULT LOCALS FOR TEMPLATES
ledgerApp.use((req, res, next) => {
  res.locals.siteTitle = config.siteTitle;
  // modern common practice: Page Title | Site Name
  res.locals.titleTemplate = config.titleTemplate;
  // expose session user if you plan auth later
  res.locals.currentUser = req.session && req.session.user ? req.session.user : null;
  next();
});

// ROUTES
ledgerApp.use('/', indexRoutes);

// DATABASE & SERVER
mongoose.connect(config.mongoUri)
  .then(() => {
    console.log('MongoDB connected');
    ledgerApp.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// ERROR HANDLER
ledgerApp.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  if (res.headersSent) return next(err);
  res.status(500).send('Internal Server Error');
});