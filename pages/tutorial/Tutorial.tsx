import { Button } from "@material-ui/core";
import { useState, useCallback } from "react";
import Flow from "../../helpers/Flow.tsx";


type Props = {};

const flowTutorial = new Flow([
    {
        StepComponent: (props) => <div>{props.title} {props.step} <span>{props.subtitle}</span></div>,
        title:'This is Step number',
        props: { subtitle:'This is another subtitle'}
    },
    {
        StepComponent: (props) => <div>{props.title} {props.step} <span>{props.subtitle}</span></div>,
        title:'This is Step number',
        nextStep:4,
        props: { subtitle:'this is the other step we have to do'}
    },
    {
        StepComponent: (props) => <div>{props.title} {props.step} <span>{props.subtitle}</span></div>,
        title:'This is Step number',
        props: { subtitle:'I dont have more to tell you'}
    },
    {
        StepComponent: (props) => <div>{props.title} {props.step} <span>{props.subtitle}</span></div>,
        title:'This is Step number',
        props: { subtitle:'Bye'}
    },
    {
        StepComponent: (props) => <div>{props.title} {props.step} <span>{props.subtitle}</span></div>,
        title:'This is Step number',
        props: { subtitle:'Byeeeee'}
    },
    {
        StepComponent: (props) => <div>{props.title} {props.step} <span>{props.subtitle}</span></div>,
        title:'This is Step number',
        props: { subtitle:'SECRET ROOM, SHHHH'},
        backStep:0
    }
]);

const Tutorial = (props:Props) => {
    const [, changeStep] = useState(flowTutorial.step);
    console.log('Render');
    return (
        <div>Step 
            {flowTutorial.getComponent({})}
            <Button onClick={() => changeStep(flowTutorial.goBack())} >Back</Button>
            <Button onClick={() => changeStep(flowTutorial.goNext())} >NEXT</Button>
        </div>);
};

export default Tutorial;