'use strict'

let jsonArr = [
  {
    "tag": "section",
    "content": {
      "tag": "h2",
      "content": "This file is a bit more complicated because:"
    }
  },
  {
    "tag": "section",
    "content": {
      "tag": "ol",
      "content": [
        {
          "tag": "li",
          "content": "There are multiple levels of nesting."
        },
        {
          "tag": "li",
          "content": "Some keys are at the same level."
        },
        {
          "tag": "li",
          "content": "The data types are mixed!"
        }
      ]
    }
  }
]

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

  add(tag, data, toData, traversal) {
    var child = new Node(data)
    var parent = null
    var callback = function(node) {
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

  parseJson(arr) {
    arr.forEach((el) => {
      tree._root.children.push(new Node(el.tag, el.data))
    })
  }
}

var tree = new Tree('section', 'data')

tree.parseJson(jsonArr);


// var tree = new Tree('', 'data')
// tree._root.children.push(new Node('<section>'))

tree.traverseDF(function(node) {
  console.log(node.tag);
})

module.exports = { Tree, Node }
