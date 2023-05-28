export default class Car {
  constructor(brand, motot, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const ModelCar = this.constructor[Symbol.species];
    return new ModelCar();
  }
}
