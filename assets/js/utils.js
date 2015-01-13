var Utils = {}
Utils.Constructor = function() {
}
Utils.Constructor.prototype.isNumeric = function(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
}
Utils.Constructor.prototype.numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
