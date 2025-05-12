class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName() {
    return [this.firstName, this.lastName]
      .filter(name => name !== "")  // Remove empty strings
      .join(" ")                    // Join with space
      || "";                        // Return empty string if both are empty
  }
  
}
