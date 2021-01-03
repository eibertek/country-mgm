import React, { ReactNode, useState } from 'react'
import Head from "next/head";
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getCountries, Country } from '../api/countries';
import { setCitizens } from "../../models/mocks/Indicators";

type Props = {
    children?: ReactNode;
    countries: Array<Country>;
};

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
const Sandbox = ({children, countries}:Props) => {
    const setCountryToHook = (evt) => {
        setCountry(evt.currentTarget.value);
        if(!_.find(citizens, {country})) {
            setCitizensHook([...citizens, setCitizens(5000, evt.currentTarget.value)]);
        }
    }

    const [country, setCountry] = useState("ARG");    
    const [citizens, setCitizensHook] = useState([setCitizens(5000, "ARG")]);
    const actualCountry = _.find(citizens, {country})?.citizens;    
    const classes = useStyles();

    return (<div  className="container">
            <Head>
                <title>Sandbox for implement classes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>            
            {children}
            <select onChange={evt => setCountryToHook(evt)} defaultValue={country}>
            {countries.map((ct,index)=>(<option key={`I_${index}`} value={ct.code}>{ct.name}</option>))}
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
            <div>{country}</div>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Happiness</TableCell>
                        <TableCell align="right">Education</TableCell>
                        <TableCell align="right">Job</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {actualCountry && actualCountry.map((citizen,index) => (
                        <TableRow key={index}>
                        <TableCell align="right">{citizen.id}</TableCell>
                        <TableCell align="right">{citizen.getIndicators().happiness}</TableCell>
                        <TableCell align="right">{citizen.getIndicators().education}</TableCell>
                        <TableCell align="right">{citizen.getIndicators().job}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
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