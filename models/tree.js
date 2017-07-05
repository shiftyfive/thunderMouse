'use strict'

class Queue {
  constructor() {
  this.oldestIndex = 1
  this.newestIndex = 1
  this.storage = {}
  }

  size() {
    return this.newestIndex = this.oldestIndex
  }
  enqueue(data) {
    this.data = data
    this.storage[this.newestIndex] = data
    this.newestIndex ++
  }

  dequeue() {
    const oldestIndex = this.oldestIndex
    const deletedData = this.storage[oldestIndex]
    delete this.storage[oldestIndex]
    this.oldestIndex += 1
    return deletedData
  }
}

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

  traverseBF(callback) {
      var queue = new Queue();

      queue.enqueue(this._root);

      currentNode = queue.dequeue();

      while(currentNode){
          for (var i = 0, length = currentNode.children.length; i < length; i++) {
              queue.enqueue(currentNode.children[i]);
          }

          callback(currentNode);
          currentNode = queue.dequeue();
      }
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

module.exports = { Queue, Tree, Node}
