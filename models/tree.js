'use strict'

class Node {
  constructor(tag, data) {
    this.tag = tag
    this.data = data || null
    this.children = []
    this.parent = null;
  }
}

class Tree {
  constructor(tag, data){
  var node = new Node(tag, data);
  this._root = node;
  }

  traverseDF(callback) {
    (function recurse(currentNode) {
      for (var i = 0; i < currentNode.children.length; i++) {
        recurse(currentNode.children[i])
      }

      callback(currentNode);
    })(this._root);
  }

  addFromJSON(tag, data, toData, traversal) {
    var child = new Node(data)
    var parent = null
    var callback =function(node) {
      if (node.data === toData) {
        parent = node;
      }
    };
    this.contains(callback, traversal);
    if (parent) {
      parent.children.push(child);
      child.parent = parent;
    } else {
      throw new Error('Cannot add node to a non-existent parent.')
    }
  }
}

var tree = new Tree('<body>')

tree._root.children.push(new Node('<section>'))

tree.traverseDF(function(node) {
  console.log(node.tag);
})
