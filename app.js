var express = require('express');
var cfenv = require('cfenv');
var companiesRepo = require('./companiesInfo');
var app = express();
var appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});

app.get('/company', function(req, res){
    res.send(Object.keys(companiesRepo.companies));
});

app.get('/company/:name', function(req, res) {
    var name = req.params.name;
    res.send(companiesRepo.companies[name]);
});
