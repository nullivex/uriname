'use strict';
var expect = require('chai').expect

var uriname = require('../helpers/uriname')


describe('uriname',function(){
  it('should handle normal names',function(done){
    var title = 'My Fancy Title'
    var uri = uriname(title)
    expect(uri).to.be.a('string')
    expect(uri).to.equal('my-fancy-title')
    done()
  })
  it('should handle special names',function(done){
    var title = 'Something 0=&*(&) reaLLy c*(*)()l'
    var uri = uriname(title)
    expect(uri).to.be.a('string')
    expect(uri).to.equal('something-0-really-c-l')
    done()
  })
  it('should handle arrays of names',function(done){
    var titles = ['Something Neat','Really Nice']
    var uris = uriname(titles)
    expect(uris).to.be.an('array')
    expect(uris[0]).to.equal('something-neat')
    expect(uris[1]).to.equal('really-nice')
    done()
  })
})
