import Model from '../BaseModel';

export default class BaseIndicatorModel extends Model {
    minValue:number;
    maxValue:number;
    value:number;
    
    constructor(baseValues) {
        super({});
        if(baseValues){
            this.minValue = baseValues.minValue || -100;
            this.maxValue = baseValues.maxValue || 100;
            this.value = baseValues.value || 0; 
        }
    }
}