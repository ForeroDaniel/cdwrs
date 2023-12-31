class Cat extends Animal {
  
  constructor(name = 'Mr Whiskers' ){
    super()
    this.name = name
  }
  speak(){return  this.name + ' meows.'}
}
