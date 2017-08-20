'use strict';
var amp = require('ampl');
exports.htmlToAmp = function (req, res) {
    var html = req.body.md;
    var css = '';
    amp.parse(html, css, function (ampHtml) {
        console.log(ampHtml);
        res.send(ampHtml);
    });

}

exports.noGet = function (req, res) {
    res.send('use POST instead.');
}