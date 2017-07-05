let jsonArr = [
  {
    "tag": "section",
    "content": {
      "tag": "h2",
      "content": "Welcome to My Page!"
    }
  },
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

String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};

function buildHtml(obj, str = '') {
  if (!obj.content) {
    return str;
  }

  if (Array.isArray(obj.content)) {
    str += `<${obj.tag}></${obj.tag}>`
    for (let i = 0; i < obj.content.length; i++) {
      if (Array.isArray(obj.content[i].content)) {
        str = str.insert(str.lastIndexOf('<'),`<${obj.content[i].tag}>` )
        for (let j = 0; j < obj.content[i].content.length; j++) {
          let subSubObj = `<${obj.content[i].content[j].tag}>${obj.content[i].content[j].content}</${obj.content[i].content[j].tag}>`
          str = str.insert(str.lastIndexOf('<'), subSubObj)
        }
      } else {
        let subObj = `<${obj.content[i].tag}>${obj.content[i].content}</${obj.content[i].tag}>`
        str = str.insert(str.lastIndexOf('<'), subObj)
      }
    }
    return str
  }

  if (typeof(obj.content) === 'object') {
    str += `<${obj.tag}><${obj.content.tag}>${obj.content.content}</${obj.content.tag}></${obj.tag}>)`;
    return str
  }


  str += `<${obj.tag}>${obj.content}</${obj.tag}>`;
  obj = obj.content;
  return buildHtml(obj, str);
}

function test(){
return jsonArr.map((obj) =>{
  return buildHtml(obj);
  })
}

console.log(test());
