class User {
    name;
    constructor(name){
        this.name = name;
    }
    getName() {
        return this.name;

    }
    setName(value) {
        this.name = value;
    }
};


class Admin extends User {
    isAdmin = true;
    constructor(name){
        super(name)
    }
}

var user = User('Dominis');
var pies = {
    imie: 'Azor',
    wlasciciel: user
};

console.log(pies.wlasciciel.getName());


var imie = 'Ala';
imie.prototype.wypisz = ()=>console.log(this);
var imie2 = 'Makota';
imie2.wypisz(this)