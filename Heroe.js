export class Heroe {
    constructor(id, name, superpoder, debilidad, personalidad, fuerza, velocidad, inteligencia){
        this._id = id;
        this._name = name;
        this._superpoder = superpoder;
        this._debilidad = debilidad;
        this._personalidad = personalidad;
        this._fuerza = fuerza;
        this._velocidad = velocidad;
        this._inteligencia = inteligencia;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get superpoder() {
        return this._superpoder;
    }

    set superpoder(value) {
        this._superpoder = value;
    }

    get debilidad() {
        return this._debilidad;
    }

    set debilidad(value) {
        this._debilidad = value;
    }

    get personalidad() {
        return this._personalidad;
    }

    set personalidad(value) {
        this._personalidad = value;
    }

    get fuerza() {
        return this._fuerza;
    }

    set fuerza(value) {
        this._fuerza = value;
    }

    get velocidad() {
        return this._velocidad;
    }

    set velocidad(value) {
        this._velocidad = value;
    }

    get inteligencia() {
        return this._inteligencia;
    }

    set inteligencia(value) {
        this._inteligencia = value;
    }
}