'use strict';

var babel = require('babel-core');
var preset2015 = require('babel-preset-es2015');
var presetstage3 = require('babel-preset-stage-3');

module.exports = function (content, file, conf) {
    conf = fis.util.extend({
        presets: [
            preset2015,
            presetstage3
        ]
    }, conf);
    var result = babel.transform(content, conf);
    return result.code;
};
