// const { hasSubscribers } = require('diagnostics_channel');
require('./src/config/db')
// require('./src/models/FormModel')
// const formRoute = require('./src/routes/formRoute');
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
// ...........................paths in frontend folder..................................................................
 const viewPath  = path.join(__dirname,'frontend/views');
 const partialPath = path.join(__dirname,'frontend/partials');
 const publicPath = path.join(__dirname,'frontend/public');

 app.use(express.static(publicPath));

// ...........................get dynamic value using hbs.................................................................
app.set('view engine','hbs');

// // ...........from path in frontend
app.set('views', viewPath);
hbs.registerPartials(partialPath);
// ................................

app.get('/', (req,res)=>{
    res.render('index',{
        name:'Rupali'
    })
})

app.get('/About', (req,res)=>{
    res.render('About')
})

app.get('/Contact', (req,res)=>{
    res.render('Contact')
})
// ...........................to add online template................................................................
// app.use(express.static('public'))

//............................if we want to connect html page with it.................................................................... 
// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'))
// })
// ...........................First to st+art server...................................................

// app.use('/users',formRoute);

app.listen(3000,()=>{
    console.log("running");
})