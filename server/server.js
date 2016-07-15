'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

module.exports = function(logging) {

    var app = express();
    
    function errorHandler(err, req, res, next) {
        if (res.headersSent) {
            return next(err);
        }
        res.status(500);
        res.render('error', { error: err });
    }

    if (logging) {
        app.use(require('morgan')('combined'));
    }

    //app.use('/map/v1', require(__dirname + '/payments'));
   
    app.use('/', express.static(__dirname + '/../public', { maxAge: 4 * 60 * 60 * 1000 /* 2hrs */ }));

    return app;
};