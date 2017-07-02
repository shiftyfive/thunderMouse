'use strict'

class Node {
  constructor (tag, content) {
    this.tag = tag || null
    this.content = content || null
    this.children = []
    this.parent = null;
  }
}

class Tree {
  constructor(tag, content){
  var node = new Node(tag, content);
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

  contains(callback, traversal) {
    traversal.call(this, callback)
  }

  add(tag, content, toTag, traversal) {
    var child = new Node(tag, content)
    var parent = null
    var callback = function(node) {
      if (node.tag === toTag) {
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

var tree = new Tree('section')
tree.add('li', null, 'section', tree.traverseDF)
