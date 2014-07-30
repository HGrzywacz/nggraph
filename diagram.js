function Diagram (scaffolder, dotConfig) {

  this.flatData = [];
  this.dotConfig = dotConfig;
  this.nodes = [];
  this.edges = [];

  this.print = function () {
    this.flatData = scaffolder.flatten();
    console.log(this.flatData);
  };

  function printNode (flatNode) {
    var name = flatNode.name;
    var type = flatNode.type;
    type = typeof dotConfig[type] === 'undefined' ? dotConfig['default'] : dotConfig[type];
    var str = flatNode.name + ' [label=' + type.head + flatNode.name + type.tail + ']';
    console.log(str);
  }

  this.printNodes = function () {
    this.flatData = scaffolder.flatten();
    this.flatData.forEach(printNode);
  };
}

exports.Diagram = Diagram;
