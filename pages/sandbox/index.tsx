import React, { ReactNode } from 'react'
import Head from "next/head";
import { getCountries, Country } from '../api/countries';
import { citizens } from "../../models/mocks/Indicators";

type Props = {
    children?: ReactNode;
    countries: Array<Country>;
};

const Sandbox = ({children, countries}:Props) => {
    return (<div  className="container">
            <Head>
                <title>Sandbox for implement classes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>            
            {children}
            <select>
            {countries.map(ct=>(<option value={ct.alpha3Code}>{ct.name}</option>))}
            </select>
            <div>
                <div>Next steps</div>
                <ul>
                    <li>Populate indicators info for each country</li>
                    <li>create sandbox of differents laws to change indicators in a country</li>
                    <li>create citizen data for a country</li>
                    <li>create a timelapse who with the indicators generate change the indicators on each citizen</li>
                    <li></li>
                </ul>
            </div>
            {citizens.map(citizen =>(<div>{citizen.id} 
                                     {citizen.getAmount()}
                                     <li>{citizen.getIndicators().happiness}</li>
                                     <li>{citizen.getIndicators().education}</li>
                                     <li>{citizen.getIndicators().job}</li>
                                     </div>))}
        </div>
    )
}


export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.
    const data = await getCountries();
  
    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
      props: {
          countries: data,
      }
    }
  }

export default Sandbox;