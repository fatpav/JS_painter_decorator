const Decorator = function(stock){
    this.stock = []
}


Decorator.prototype.getCans = function(paintcan){
    this.stock.push(paintcan)

};


module.exports = Decorator;