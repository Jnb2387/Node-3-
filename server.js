// requires the npm installs
var express = require('express'),
    bodyParser = require("body-parser"),
    logger = require('morgan'),
    
//var for calling express object to use app.  
    app= express();
    
//middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//routes to pages
//home ('/') form page
app.get('/', function(req, res){
    res.sendFile('form.html', {root: './public'});
});
//route to success page after submit of form
app.get('/success', function(req, res){
    res.sendFile('success.html', {root: './public'})
})
app.post('/formsubmit', function (req, res) {
    res.redirect('/success'); 
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('server is listening on ' + port);
})
