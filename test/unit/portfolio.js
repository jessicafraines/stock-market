
'use strict';
/*global describe, it*/
var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio');

describe('Portfolio', function(){
  describe('constructor', function(){
    it('should create a new portfolio object', function(){
      var p1 = new Portfolio('name');

      expect(p1).to.be.instanceof(Portfolio);
      expect(p1.name).to.equal('name');
      expect(p1.stock.length).to.equal(0);

    });
  });
});
