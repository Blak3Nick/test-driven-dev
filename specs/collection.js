var Collection = function () {
    var size = 0;
    var items = [];
    this.isEmpty = function () {
      return size === 0;
  }
  this.add = function (item) {
      return items.push(item);
      size++;
  }
  this.remove = function (item) {
      
  }
  this.contains = function (item) {
    return true;
  }
  this.size = function () {
      return size;
  }
};