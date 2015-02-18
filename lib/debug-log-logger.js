// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

'use strict';

var debuglog = require('debuglog');

module.exports = DebuglogLogger;

function DebuglogLogger(name, ns) {
    var debuglogger = debuglog(ns || 'ringpop');

    return {
        trace: log.bind(null, name, 'trace'),
        debug: log.bind(null, name, 'debug'),
        info: log.bind(null, name, 'info'),
        warn: log.bind(null, name, 'warn'),
        error: log.bind(null, name, 'error')
    };

    function log(name, level, msg) {
        var args = [].slice.call(arguments, 3);

        msg = name + ' ' + level + ' ' + msg;
        args.unshift(msg);

        debuglogger.apply(null, args);
    }
}