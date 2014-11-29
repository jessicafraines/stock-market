
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
  describe('#add', function(){
    it('should add stocks to a given portfolio', function(){
      var p1 = new Portfolio('Tech');

      p1.add('aapl', 50);
      p1.add('aapl', 25);
      p1.add('amzn', 50);

      expect(p1.stock[0].symbol).to.equal('AAPL');
      expect(p1.stock[0].count).to.equal(75);
      expect(p1.stock[1].symbol).to.equal('AMZN');
      expect(p1.stock[1].count).to.equal(50);
    });
  });
});
