'use strict';

var cookie = require('..');
var assert = require('proclaim');

describe('cookie(name, value)', function() {
  it('should set a cookie', function() {
    cookie('name', 'tobi');
    assert(cookie('name') === 'tobi');

    cookie('species', 'ferret');
    assert(cookie('species') === 'ferret');
  });

  it('should escape', function() {
    cookie('name', 'tobi ferret');
    assert(document.cookie.indexOf('name=tobi%20ferret') !== -1);
  });

  it('should unescape', function() {
    cookie('full name', 'tobi ferret');
    assert(cookie('full name') === 'tobi ferret');
  });

  it('should ignore URIError', function() {
    cookie('bad', '%');
    cookie('bad', null);
  });

  describe('when undefined', function() {
    it('should return undefined', function() {
      assert(undefined === cookie('whatever'));
    });
  });
});

describe('cookie(name, null)', function() {
  it('should clear the cookie', function() {
    cookie('type', 'ferret');
    cookie('type', null);
    assert(undefined === cookie('type'));
  });

  it('should not be returned in the cookie() object', function() {
    cookie('full name', null);
    cookie('mydb', null);
    cookie('species', null);
    cookie('name', '0');
    var obj = cookie();
    assert(Object.keys(obj).length === 1);
    assert(obj.name === '0');
  });

  it('should ignore URIError and return null', function() {
    document.cookie = 'bad=%';
    assert(cookie('bad') === undefined);
  });
});

describe('cookie()', function() {
  it('should return all cookies', function() {
    cookie('name', 'loki');
    cookie('species', 'ferret');
    var obj = cookie();
    assert(obj, 'object was not returned');
    assert(obj.name === 'loki', '.name failed');
    assert(obj.species === 'ferret', '.species failed');
  });

  it('should return all cookies and ignore URIErrors', function() {
    cookie('name', 'loki');
    cookie('species', 'ferret');
    document.cookie = 'bad=%';
    var obj = cookie();

    assert(obj.name === 'loki', '.name failed');
    assert(obj.species === 'ferret', '.species failed');
    assert(obj.bad === undefined);
  });
});
