import { AllHTMLAttributes } from "react";
import { Country } from "../../pages/api/countries";
import CitizenIndicator from "../indicators/citizen";


export const country:Country = {
    name:"Peronia",
    alpha3Code:"PER",
    currencies: [{}],
}


export const citizens = [];

for (let index = 0; index < 1500; index++) {
    const randomNumber = (isNeg=true) => {
        let rndNumber = Math.floor(Math.random()*100);
        return isNeg ? rndNumber * (Math.floor(Math.random()*10)%2 ? 1:-1) : rndNumber; 
    }
    citizens.push(
        new CitizenIndicator(
            {
                happiness: randomNumber(),
                education: randomNumber(),
                job: randomNumber(false),
            })
    );
}
