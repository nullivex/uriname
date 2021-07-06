URI Name [![Build Status](https://travis-ci.org/nullivex/uriname.png?branch=master)](https://travis-ci.org/nullivex/uriname)
============

## Kado

STOP AND READ THIS

A new package is available to handle all your JavaScript needs.
See [kado.org](https://kado.org) for details.

## Summary

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

### 0.3.1
* Update dependencies
* Update package json

### 0.3.0
* Update the following dependencies
  * chai      3.5.x  →   4.2.x
  * mocha     3.2.x  →   7.1.x
  * request  2.79.x  →  2.88.x
* Add a notice about Kado to the README file.

### 0.2.0

* Initial release
