function greetDevelopers(list) {
  return list.map(person => {
    // Add a new property 'greeting' to each object
    person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`;
    return person;  // Return the modified object
  });
}
