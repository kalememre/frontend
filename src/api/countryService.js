import axios from 'axios';
import apiUrl from './config';

const getCountryByName = async (countryName) => {
    return await axios.get(`${apiUrl}/country/${countryName}`)
}

const getAllCountriesNamesWithFlag = async () => {
    return await axios.get(`${apiUrl}/countries`)
}

export {
    getCountryByName,
    getAllCountriesNamesWithFlag
}