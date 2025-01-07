class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
// Method to determine if the ship is worth looting
  isWorthIt() {
    // Calculate the draft without the crew's weight (1.5 units per crew member)
    const effectiveDraft = this.draft - (this.crew * 1.5);
    
    // If the effective draft is greater than 20, it's worth looting
    return effectiveDraft > 20;
  }
}
