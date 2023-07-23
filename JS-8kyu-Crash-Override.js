function aliasGen(name, lastName){
   return isNaN(name[0]) && isNaN(lastName[0]) ? `${firstName[name[0].toUpperCase()]} ${surname[lastName[0].toUpperCase()]}` : 'Your name must start with a letter from A - Z.';
}
