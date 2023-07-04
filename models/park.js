const Park = function(name, ticket_price, dinosaurs) {
    this.name = name
    this.ticket_price = ticket_price
    this.dinosaurs = []
};


Park.prototype.addDinosaur = function (name) {
    this.dinosaurs.push(name);
}

Park.prototype.removeDinosaurByName = function (name) {
    const index = this.dinosaurs.indexOf(name);
    this.dinosaurs.splice(index, 1);
};

module.exports = Park;
