# Thundermouse
---
A static site generator. Thundermouse accepts single JSON file written
as an array of JSON objects that is converted to a tree data structure and then the HTML
is written to the DOM.

## Prerequisites
---
JSON must be constructed in the following manner.
1. must be an array of object
2. Objects must contain a "tag" key with a value that is a string hit a valid html tag name
3. must contain a content tag content can equal either:
  * A string
  * another JSON object
  * an array of objects

## Valid Input Example
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
