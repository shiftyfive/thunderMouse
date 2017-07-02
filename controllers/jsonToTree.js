const Resource = require('../models/tree.js')

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
