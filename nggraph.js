#! /usr/bin/env node

var sys = require('sys')
var exec = require('child_process').exec;
var fs = require('fs');

var scaffolder = require('./scaffolder.js');
var dotConfig = require('./dotConfig.js');
var diagram = require('./diagram.js');

global.load = function (file) {
  if (file === '') {return;}
  var body = fs.readFileSync(file, {encoding:'utf8'});
  eval.call(global, body);
};

load('./mockAngular.js');

global.angular = new Angular();

var scaffolder = new scaffolder.Scaffolder(angular);
var config = dotConfig.config;
var diagram = new diagram.Diagram(scaffolder, config);

function findCallback (error, stdout, stderr) {
  var files = stdout.split('\n');
  files.forEach(function (file) {load(file)});

  diagram.printDiagram();
}

exec('find app/ -type f -name "*.js"', findCallback);

