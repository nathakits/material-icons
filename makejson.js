"use-strict";

const fs = require('fs');

// paths
const dirPath = './material-design-icons/';
const dirDesign = '/svg/design';

// material themes
const themes = [
  'action',
  'alert',
  'av',
  'communication',
  'content',
  'device',
  'editor',
  'file',
  'hardware',
  'image',
  'maps',
  'navigation',
  'notification',
  'places',
  'social',
  'toggle',
]

var arrJson = []
let sd = '';

for (let index = 0; index < themes.length; index++) {
  const element = themes[index];
  var svgs = fs.readdirSync(dirPath + element + dirDesign)

  var obj = {
    "title": '',
    "svgs": ''
  }

  obj.title = element
  obj.svgs = svgs
  arrJson.push(obj)
}

// create file
fs.writeFileSync('./assets/material-icons.json', JSON.stringify(arrJson, null, 2))