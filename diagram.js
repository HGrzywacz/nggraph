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
  };

  this.printNodes = function () {
    this.flatData = scaffolder.flatten();
    this.flatData.forEach(printNode);
  };

  function printEdge (flatNode) {
    var str;
    var from;
    var to = flatNode.name;

    if (typeof flatNode.deps === 'undefined') {
      return;
    }

    flatNode.deps.forEach(function (dep) {
      from = dep;
      str = from + ' -> ' + to;
      console.log(str);
    });
  };

  this.printEdges = function () {
    this.flatData = scaffolder.flatten();
    this.flatData.forEach(printEdge);
  };

  this.printDiagram = function () {
    var head =  'digraph d {\n' +
      'nodesep=0.1\n' +
      'node [shape=Mrecord, fontname="Helvetica,Sans", fontsize=9, ' +
      'penwidth=0.5, margin="0.05, 0.04", height="0.2" ]\n' +
      'node [shape=plaintext];\n\n'
    var tail = '\n}';

    console.log(head);
    this.printNodes();
    this.printEdges();
    console.log(tail);
  };
}

exports.Diagram = Diagram;
