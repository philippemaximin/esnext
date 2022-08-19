/**
 * ES6
 */

let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

//----- const

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);

/*
citiesId = [];
console.log(citiesId); //TypeError: Assignment to constant variable.
*/

citiesId.push("tokyo");
console.log(citiesId);

//------ Création d’objet

function getWeather(citiesId) {
    let city = citiesId.toUpperCase();
    let temperature = 20;

    return {city, temperature};
}

const weather = getWeather(favoriteCityId);
console.log(weather);

//---- Affectation destructurée

const {city, temperature} = weather;
console.log(city);
console.log(temperature);


//----- Rest operator
let [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);


//------- Classe
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price; 
    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }

    toString() {
        return `[${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());
parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

//---- Héritage
class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price = 0) {
        super(id, name, imageUrl);
        this.price = price;
    }

    toString() {
        return `Free ${super.toString()}`;
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
console.log(freeTrip.toString());