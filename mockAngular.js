function Piece (name, type, deps) {
  this.name = name;
  this.type = type;
  if (deps.constructor === Array) {
    checkArity(deps);
    deps.pop();
    this.deps = deps.filter(function(dep) {return dep[0] !== '$'});
  }

  function checkArity (deps) {
    if ((deps.length-1) !== deps.slice(-1)[0].length) {
      console.log('Warning: ' + type + ' ' + name + ' has unmatching number of'
        + ' arguments.')
    };
  };
}

function Module (name) {
  this.name = name;

  this.pieces = {};

  this.directive = function (name, deps) {
    this.pieces[name] = new Piece(name, 'directive', deps);
    return this;
  };

  this.controller = function (name, deps) {
    this.pieces[name] = new Piece(name, 'controller', deps);
    return this;
  };

  this.factory = function (name, deps) {
    this.pieces[name] = new Piece(name, 'factory', deps);
    return this;
  };

  this.service = function (name, deps) {
    this.pieces[name] = new Piece(name, 'service', deps);
    return this;
  };

  this.provider = function (name, deps) {
    this.pieces[name] = new Piece(name, 'provider', deps);
    return this;
  };

  this.constant = function (name, deps) {
    this.pieces[name] = new Piece(name, 'constant', deps);
    return this;
  };

  this.filter = function (name, deps) {
    this.pieces[name] = new Piece(name, 'filter', deps);
    return this;
  };

  this.config = function () {
    return this;
  };

  this.run = function () {
    return this;
  };
}

function Angular () {
  this.modules = {};

  this.module = function (name, deps) {
    if (this.modules.hasOwnProperty(name)) {
      return this.modules[name];
    } else {
      var module = new Module(name);
      this.modules[name] = module;
      return this.modules[name];
    };
  };
}
