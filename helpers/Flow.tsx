import { FunctionComponent, ReactElement } from "react";

type Props = {};
type FlowStep = {
    title: String;
    StepComponent: FunctionComponent;
    props?: any;
    nextStep?: number;
    backStep?:number;
};

class Flow {
    step: number;
    flow:Array<FlowStep>;

    constructor(config:Array<FlowStep>){
        this.step=0;
        this.flow = config;
    }

    goNext = ():number => {
        const nextStep = this.flow[this.step].nextStep ? this.flow[this.step].nextStep : this.step + 1; 
        if(nextStep < this.flow.length) {
            this.step = nextStep;
        }
        console.log('NEXT',this.step, nextStep, this.flow[this.step]);
        return this.step;
    }


    goBack = ():number => {
        const backStep = typeof this.flow[this.step].backStep !== 'undefined' ? this.flow[this.step].backStep : this.step - 1; 
        if(backStep >= 0) {
            this.step = backStep;
        }
        console.log('BACK', this.step, backStep, this.flow[this.step]);
        return this.step;
    }

    getComponent:FunctionComponent<Props> = (): ReactElement   => {
        const { StepComponent, props, title } = this.flow[this.step];
        return (<StepComponent {...props} title={title} step={this.step} />);
    }
}


export default Flow;