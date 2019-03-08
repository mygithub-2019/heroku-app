var express = require('express');
var port = process.env.PORT || 5000;
app = express();

app.use(express.static(__dirname + "/dist"));
app.get(/.*/, function(req, res){
    res.sendfile(__dirname + '/dist/index.html')
})

app.listen(port);

// var path = require('path');
// var serveStatic = require('serve-static');




console.log('server started '+ port);