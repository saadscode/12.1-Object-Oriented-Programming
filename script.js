// Create a class for vehicle, each instance containing: make, mode, year
// Each instance containing access to a method called honk, which returns the string "Beep."
// Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.

class vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep.";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

// Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

//Create a class for Motorcycle inheriting from Vehicle, add property numWheels with value 2, and revEngine method returning "VROOM!!!"

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}

/*Create a class for Garage, add property called vehicles which stores array of vehicles, property capacity. also an "add" method which adds to the array of vehicles. 
When adding something that's not a vehicle, garage should return "Only vehicles are allowed in here!". At capacity, it should say "Sorry, we're full." */

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(vehicle);
    return "Vehicle added!";
  }
}
