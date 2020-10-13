const PaintCan = function(litres){
    this.litres = litres;
}

PaintCan.prototype.emptyCan = function(){
    this.litres = 0
}

module.exports = PaintCan;