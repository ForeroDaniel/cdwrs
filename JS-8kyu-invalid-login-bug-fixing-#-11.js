function validate(username, password){
  var valid = new Validator();
  return valid.login(username, escape(password));
}
