import Model from "../BaseModel";
import BaseIndicatorModel from "../indicators/BaseIndicatorModel";

export default class CountryModel extends Model {
    constructor(parameters){
        super(parameters);
        return this.create();
    }
}