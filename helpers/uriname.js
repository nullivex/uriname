'use strict';

/**
 * Convert to URI name
 * @param {string} string
 * @return {string}
 */
var uriname = function(string){
  string = string.replace(/[^a-z0-9\-,.]+/ig,' ')
  string = string.trim()
  string = string.replace(/\s+/ig,'-')
  string = string.toLowerCase()
  return string
}

/**
 * Wrapper for URI name will handle multiple inputs
 * @param {*} string
 * @return {*}
 */
module.exports = function(string){
  if(string instanceof Array){
    var result = []
    string.forEach(function(s){
      result.push(uriname(s))
    })
    return result
  } else {
    return uriname('' + string)
  }
}
