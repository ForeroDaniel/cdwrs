var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {return this._friends = f}
  }
  return person;
}
