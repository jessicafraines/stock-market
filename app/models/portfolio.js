'use strict';

var Stock = require('./stock');

function Portfolio(name){
  this.name  = name;
  this.stock = [];

}

Portfolio.prototype.add = function(symbol, amount){
  //This variable is determined by findStock()
  var stock = findStock(this.stock, symbol); 

  //Check to see if is an object, returns true if object 
  //and false if the variable is undefined
  if(stock){
    stock.count += amount;
  //If stock ISN'T already an object, it will initialize stock as a new
  //object and push it to the portfolio array
  }else{
    stock = new Stock(symbol, amount);
    this.stock.push(stock);
  }
};

//Loops through stock to see if a stock symbol already
//exists. If it does, the function will return the entire object
function findStock(stocks, symbol){
  for(var i = 0; i < stocks.length; i++){
    if(stocks[i].symbol === symbol.toUpperCase()){
      return stocks[i];
    }
  }
}





module.exports = Portfolio;
