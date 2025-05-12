//Class Constructor

class Car {
    constructor(Brand,Color,Price,Mileage){
        this.Brand=Brand;
        this.Color=Color;
        this.Price=Price;
        this.Mileage=Mileage;
    }
out(){console.log(`I choose ${this.Brand} \n I Need ${this.Color} Color Car \n It costs around ${this.Price} \n It gives {this.Mileage} Mileage per Hour`)}
}

const output = new Car("Hyundai","Olive Green","14.5 Lakhs","20 Km");
output.out();

// Task