const removeFromArray = function(filterArray, ...args) {
  return filterArray.filter(item => !args.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
