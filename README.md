URI Name [![Build Status](https://travis-ci.org/nullivex/uriname.png?branch=master)](https://travis-ci.org/nullivex/uriname)
============

URI Name is a simple package that will take a generic string and produce a string
that is safe to use as a URI component.

## Usage

```
$ npm install uriname
```

```js
var uriname = require('uriname')

//normal title
var title = 'My Fancy Title'
var uri = uriname(title)
console.log(uri) //my-fancy-title

//user input
var title = 'Something 0=&*(&) reaLLy c*(*)()l'
var uri = uriname(title)
console.log(uri) //something-0-really-c-l

//process multiples easily
var titles = ['Something Neat','Really Nice']
var uris = uriname(titles)
console.log(uris) ['something-neat','really-nice']

//enjoy!
```

## Changelog

### 0.2.0

* Initial release
