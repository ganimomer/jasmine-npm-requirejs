'use strict';
var requirejs = require('requirejs');
var Jasmine = require('jasmine');
var glob = require('glob');
var jasmine = new Jasmine();
var jsdom = require('node-jsdom').jsdom;
requirejs.config({
  nodeRequire: require
});


var spec_files = glob.sync('test/*.spec.js');

global.define = requirejs.define;

requirejs(spec_files, function() {
  jasmine.loadConfig({
    spec_dir: '.',
    spec_files: ['test/*.spec.js']
  });
  global.document = jsdom('');
  global.window = global.document.parentWindow;
  jasmine.execute();
});
