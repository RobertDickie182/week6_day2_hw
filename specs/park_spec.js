const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
      park = new Park("Jurassic Park", 100, []);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function () {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur("t-rex")
    park.addDinosaur("velociraptor")
    assert.deepStrictEqual(park.dinosaurs, ["t-rex", "velociraptor"])
  });
  
  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur("t-rex");
    park.addDinosaur("velociraptor");
    park.removeDinosaurByName("t-rex");
    assert.deepStrictEqual(park.dinosaurs, ["velociraptor"]);
  });
  
  

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
