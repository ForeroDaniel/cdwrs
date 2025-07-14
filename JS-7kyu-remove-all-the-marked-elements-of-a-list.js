Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(item => !values_list.includes(item))
}
