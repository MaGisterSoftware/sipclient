'use strict';

var assert = require('chai').assert;
var sipclient = require('../Sip').SipClient;


describe('#exist', function() {
    it('Function exist', function() {
        assert.typeOf(sipclient, 'function');
    });
});