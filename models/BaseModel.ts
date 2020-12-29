import CountryInterface from "../interfaces/CountryInterface";

export default class Model implements CountryInterface {
    name:string = 'baseModel';
    constructor(parameters) {}

    create() {
      return this;  
    }
}