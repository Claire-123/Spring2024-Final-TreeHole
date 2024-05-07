const express = require('express')
const bodyParser = require('body-parser')
const nedb = require('@seald-io/nedb')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const nedbSessionStore = require('nedb-promises-session-store')
const bcrypt = require('bcrypt')
const path = require('path')

let database = new nedb({
    filename: "database.txt",
    autoload: true,
})

const urlEncodedParser = bodyParser.urlencoded({extended: true})

const nedbSessionInit = nedbSessionStore({
    connect: expressSession,
    filename: 'sessions.txt'
})

let userdatabase = new nedb({
    filename: 'userdb.txt',
    autoload: true
})

const app = express()

app.use(express.static("public"))
app.use(urlEncodedParser)
app.use(cookieParser())
app.set('view engine', 'ejs')

app.use(expressSession({
    store: nedbSessionInit,
    cookie:{
        maxAge: 365*24*60*60*1000
    },
    secret: 'supersecret123'
}))

function requiresAuthentication(req, res, next){
    if (req.session.loggedInUser){
        next()
    } else{
        res.redirect('/login?error=access')
    }
}

app.get('/', (req, res)=>{
    res.render('gate.ejs')
})

app.get('/start', (req, res)=>{
    res.render('start.ejs')
})

app.get('/login', (req, res)=>{
    if (req.query.error){
        res.render('login.ejs', {error: req.query.error})
    } else {
        res.render('login.ejs', {error:false})
    }
})

app.get('/register', (req, res)=>{
    if (req.query.error){
        res.render('register.ejs', {error: req.query.error})
    } else {
        res.render('register.ejs', {error:false})
    }
})

app.post('/signup', (req, res)=>{

    if (!req.body.password){
        res.redirect('/register?error=incomplete')
    } else{

        let hashedPassword = bcrypt.hashSync(req.body.password, 10)
        
        let data = {
            username: req.body.username,
            password: hashedPassword
        }

        let searchQuery = {
            username: data.username
        }

        userdatabase.findOne(searchQuery, (err, user)=>{
            if (err || user){
                res.redirect('/register?error=repeate')
            } else{
                userdatabase.insert(data, (err, dataInserted) =>{
                    res.redirect('/login')
                })
            }
        })
    }
})

app.post('/authenticate', (req, res)=>{
    let attemptLogin = {
        username: req.body.username,
        password: req.body.password
    }

    let searchQuery = {
        username: attemptLogin.username
    }

    userdatabase.findOne(searchQuery, (err, user)=>{
        if(err||user == null){
            res.redirect('/login?error=user')
        } else{
            let encPass = user.password
            
            if(bcrypt.compareSync(attemptLogin.password, encPass)){
                let session = req.session
                session.loggedInUser = attemptLogin.username
                res.redirect('/private')
            } else{
                res.redirect('/login')
            }
        }
    })
})

app.get('/logout', (req, res)=>{
    delete req.session.loggedInUser
    res.redirect('/start')
})

app.get('/private', requiresAuthentication, (req, res)=>{
    let query = {username: req.session.loggedInUser}
    let sortQuery = {timestamp: -1}

    database.find(query).sort(sortQuery).exec((err, data)=>{
        res.render('private.ejs', {
            posts: data
        })
    })
})

app.get('/public', requiresAuthentication, (req, res)=>{
    let query = {privacy: 'public'}
    let sortQuery = {timestamp: -1}

    database.find(query).sort(sortQuery).exec((err, data)=>{
        res.render('public.ejs', {
            posts: data
        })
    })
})

app.post('/comment', requiresAuthentication, (req, res)=>{
    // local variables for commenting data
    let postId = req.body.postId
    let commentText = req.body.comment
    let commentUser = req.session.loggedInUser
  
    let query = {
      _id: postId
    }
  
    let commentData = {
      text: commentText,
      user: commentUser
    }
  
    let update = {
      $push: { comments: commentData}
    }
  
    database.update(query, update, {}, (err, numUpdated)=>{
      console.log(`${numUpdated} comment has been added`)
      res.redirect(`/post/${postId}`)
    })
  
  })

app.post('/upload', requiresAuthentication, (req, res)=>{
    let currDate = new Date()

    let data = {
        username: req.session.loggedInUser,
        text: req.body.text,
        date: currDate.toLocaleString(),
        privacy: req.body.privacy,
        comments: [],
        timestamp: currDate.getTime()
    }

    database.insert(data, (err, newData) =>{
        res.redirect('/private')
    })
})

app.post('/remove', requiresAuthentication, (req, res)=>{
    let removedId = req.body.postId

    let query = {
        _id: removedId
    }

    database.remove(query, (err, numRemoved)=>{
        res.redirect('/private')
    })
})

app.get("/post/:id", requiresAuthentication, (req, res) => {
    let id = req.params.id;
  
    let query = {
      _id: id,
    };
  
    database.findOne(query, (err, individualPost) => {
      res.render("singlePost.ejs", { post: individualPost });
    });
  });

app.listen(3000, ()=>{
    console.log('http://localhost:3000')
})