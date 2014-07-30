exports.Scaffolder = function Scaffolder (angular) {

  this.angular = angular;

  this.print = function () {

    function printPiece (piece) {
      console.log('    ' + piece.type + ' ' + piece.name);
    }

    function printModule (module) {
      console.log('  Module ' + module.name + ':');
      for (key in module.pieces) {
        printPiece(module.pieces[key]);
      };
    }

    console.log('Angular:');
    for (key in this.angular.modules) {
      printModule(this.angular.modules[key]);
    }
  };

  this.flatten = function () {
    var flatPieces = [];
    for (key in this.angular.modules) {
      for (pieceKey in this.angular.modules[key].pieces) {
        flatPieces.push(this.angular.modules[key].pieces[pieceKey]);
      }
    }
    return flatPieces;
  };

  this.pieceEdges = function (piece) {

    function printEdges (edges) {
      return function (from) {
        var to = piece.name;
        edges.push(from + ' -> ' + to);
      };
    };

    if (typeof piece.deps !== 'undefined') {
      var edges = [];
      piece.deps.forEach(printEdges(edges));
      return edges;
    };
  };

  this.moduleEdges = function (module) {
    var moduleEdgesArray = [];
    for (pieceKey in module.pieces) {
      //moduleEdgesArray.concat(
      console.log(this.pieceEdges(module.pieces[pieceKey]));
    };
    console.log(moduleEdgesArray);
    return moduleEdgesArray;
  };

  this.edges = function () {
    var flatEdges = [];
    for (key in this.modules) {
      var moduleEdges = this.moduleEdges(this.modules[key]);
      console.log(moduleEdges);
      flatEdges.concat(moduleEdges);
    };
    console.log(flatEdges);
  };
};

