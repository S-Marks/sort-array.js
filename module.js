var list = [];

module.exports.add = function add(num) {
  list.push(num);
  return(list);
}
module.exports.sort = function sort() {
  var digits = list
  digits.sort()
  return(digits);
}
