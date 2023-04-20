export default class Building {
  constructor(sqft) {
    if (
      new.target !== Building && type of this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error(
        'Class extending Buidig must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
