# Thundermouse
---
A static site generator which accepts a single JSON file that contains a single array of JSON objects which will be converted to a tree.  The tree is then traversed and each node's data is then appended to a string, which are written to the DOM.

## Prerequisites
---
JSON must be constructed in the following manner.
1. Must be an array of object
2. Objects must contain a "tag" key with a value that is a string with a value of valid html tag name
3. Must contain a content tag content can equal either
  * A string Value
  * Another JSON object
  * an array of JSON objects

## Valid input example.
---
```javascript
let jsonArr = [
  {
    "tag": "section",
    "content": {
      "tag": "p",
      "content": "Hello world!"
    }
  }
]
```

## Built With
* Node JS
* Express
* ❤️


## Authors

* **Joshua Warren** - *Initial work* - [shiftyfive](https://github.com/shiftyfive)

## License Info
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/shiftyfive/thunderMouse/blob/master/LICENSE.MD) file for details

version 1.0.0-alpha
