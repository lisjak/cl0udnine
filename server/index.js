const path = require('path')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const session = require('express-session')
const passport = require('passport')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./db')
const sessionStore = new SequelizeStore({ db })
const PORT = process.env.PORT || 8080
const app = express()
const socketio = require('socket.io')
// const isAdmin = require('./api/isAdmin')
// import isAdmin from './api/isAdmin'
module.exports = app

// This is a global Mocha hook, used for resource cleanup.
// Otherwise, Mocha v4+ never quits after tests.
if (process.env.NODE_ENV === 'test') {
  after('close the session store', () => sessionStore.stopExpiringSessions())
}

/**
 * In your development environment, you can keep all of your
 * app's secret API keys in a file called `secrets.js`, in your project
 * root. This file is included in the .gitignore - it will NOT be tracked
 * or show up on Github. On your production server, you can add these
 * keys as environment variables, so that they can still be read by the
 * Node process on process.env
 */
if (process.env.NODE_ENV !== 'production') require('../secrets')

// passport registration
passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id)
    done(null, user)
     console.log(0000)
  } catch (err) {
    done(err)
    console.log(000)
  }
})

console.log(00)

const createApp = () => {
console.log(0)
  // logging middleware
  app.use(morgan('dev'))
console.log(1)
  // body parsing middleware
  app.use(express.json())
  console.log(2)

  app.use(express.urlencoded({ extended: true }))
console.log(3)
  // compression middleware
  app.use(compression())
  console.log(4)

  // session middleware with passport
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'my best friend is Cody',
      store: sessionStore,
      resave: false,
      saveUninitialized: true
    })
  )

  console.log(5)

  app.use(passport.initialize())

  console.log(6)

  app.use(passport.session())

  console.log(7)

  // auth and api routes

  app.use('/auth', require('./auth'))

  console.log(8)











  app.use('/api', require('./api'))
  console.log(9)



  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))
console.log(10)

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })
  console.log(11)

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })
  console.log(12)

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
  console.log(13)
}


const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, '0.0.0.0', () =>
    console.log(`Mixing it up on port ${PORT}`)
  )


  // set up our socket control center

  const io = socketio(server)

  require('./socket')(io)
}


const syncDb = () => db.sync()
console.log(16)

async function bootApp() {
await sessionStore.sync()
await console.log('a')
await syncDb()
await console.log('b')
await createApp()
await console.log('c')
await startListening()
}
// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp()
  console.log('here????')
// } else {
//   createApp()
}
