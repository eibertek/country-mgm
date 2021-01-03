import Axios, { AxiosResponse } from 'axios';

export type Country = {
    name: string;
    alpha3Code: string;
    code: string;
    currencies: Array<any>;
};
export default async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const countries = await getCountries();
    res.send(countries);
  }


 export const getCountries = async () => {
    // get all countries by service
    const countriesResponse: AxiosResponse = await Axios.get('https://restcountries.eu/rest/v2/all');
    const countries:Array<Country> = countriesResponse.data;
    return countries.map ? countries.map(cty => ({ name: cty.name, code: cty.alpha3Code, currencies: cty.currencies})): [];
  }
