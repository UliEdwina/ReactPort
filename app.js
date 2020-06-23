const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const creds = require('./config')
// const ContactRouter = require('./routes/ContactRouter')

require('dotenv').config();

// mongoose.connect(`mongodb://localhost:27017/me_DB`, {useNewUrlParser: true, useCreateIndex: true})
//     .then( () => {
//         console.log('MongoDB Connected')
//     })let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'edwinaulisespro@gmail.com',
//         pass: 'TimeToWerq12@@'
//         
//     .catch(err => console.log('Error: ${err}'))



app.set('views', path.join(__dirname, 'views'));

const transport = {
            host: 'smtp.gmail.com',
            auth: {
                user: creds.USER,
                pass: creds.PASS
                }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if(error) {
        console.log(error)
    } else {
        console.log('works fine')
    }
})
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.post('/add', (req, res, next) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const pronouns = req.body.pronouns
    

    let mail = {
        from: firstName,
        to: 'edwinaulisespro@gmail.com',
        subject: 'New',

       
    }

transporter.sendMail(mail, (err, data) => {
    if(err){
        res.json({
            msg: 'fail'
        }) 
    }
         else {
                res.json({
                    msg: 'success'
                })
            }
        
        })
})
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use('/contact', ContactRouter);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
  // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
//   res.status(err.status || 500);
//   res.json({
      
//       error: err
//   })
// });

app.get('/', (req, res) => {
    res.send('hello bitch')
})

app.listen(8000, () => {
    console.log('App Listening on Port 8000') 
})

module.exports = app;