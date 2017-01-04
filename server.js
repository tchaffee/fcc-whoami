var express = require('express');

var app = express();

app.get('/', function (req, res) {

  var rtnObj = {};
  
  rtnObj.ipaddress = req.get('X-Forwarded-For');
  rtnObj.language = req.get('ACCEPT-LANGUAGE').substr(0, req.get('ACCEPT-LANGUAGE').indexOf(','));
  rtnObj.software = /\((.*?)\)/.exec(req.get('USER-AGENT'))[1];
    
  res.send(rtnObj);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})