import Building from './5-building';

class SkyHighBuilding extends building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return (this._floors);
  }

  evacuationWarningMessage() {
    return (`Evacuation Slowly the ${this.floors} floors`);
  }
}

export default SkyHighBuilding;
