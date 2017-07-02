'use strict'
const Resource = require('../models/tree.js')

let jsonArr = [
  {
    "tag": "section",
    "content": [
      {
        "tag": "h3",
        "content": "My Favorite Things"
      },
      {
        "tag": "ul",
        "content": [
          {
            "tag": "li",
            "content": "<img src='http://placekitten.com/g/200/200'/>"
          },
          {
            "tag": "li",
            "content": "<img src='http://placekitten.com/g/201/200'/>"
          },
          {
            "tag": "li",
            "content": "<img src='http://placekitten.com/g/200/201'/>"
          }
        ]
      },
      {
        "tag": "p",
        "content": [
          {
            "tag": "span",
            "content": "In short, I "
          },
          {
            "tag": "strong",
            "content": "just love"
          },
          {
            "tag": "span",
            "content": " kittens!"
          }
        ]
      }
    ]
  }
]

// return merge(mergeSort(left), mergeSort(right))

function jsonToTree(jsonArr, tree, parent) {
  var tree =  tree || new Resource.Tree('main', null)
  var parent = parent || tree._root
  for (var i = 0; i < jsonArr.length; i++) {
      tree.add(jsonArr[i].tag, jsonArr[i].content, parent.tag, tree.traverseDF)
      if (parent.content !== String) {
        parent = parent.children[0]
        console.log(parent.content);
        return jsonToTree(parent.content, tree, parent)
    } else if()
  }
  console.dir(tree._root)
  return tree
  }

// tree.add('li', null, 'section', tree.traverseDF)


jsonToTree(jsonArr)
