import { citizens } from "../../mocks/Indicators";
import BaseIndicatorModel from "../BaseIndicatorModel";


const percentageValues = {minValue:0, maxValue:100};

class CitizenIndicator {
    id:string = `Citizen ${Math.floor(Math.random()*1000000)}`;
    happiness: BaseIndicatorModel = new BaseIndicatorModel({});    
    education: BaseIndicatorModel = new BaseIndicatorModel(percentageValues);
    job: BaseIndicatorModel = new BaseIndicatorModel(percentageValues);
    family: {
        married:boolean;
        children:number;
    }
    corruption:BaseIndicatorModel = new BaseIndicatorModel({});

    constructor(indicators) {
        this.happiness.value = indicators.happiness;
        this.education.value = indicators.education;
        this.job.value = indicators.job;
    }

    getAmount = () => 2000;

    getIndicators = () => ({
        happiness: this.happiness.value,
        education: this.education.value,
        job: this.job.value,
    })
}


export default CitizenIndicator;