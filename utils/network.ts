import Axios, { AxiosResponse } from 'axios';
import { Car, CarMake } from './types';

const baseUrl = 'https://api.staging.myautochek.com/v1/inventory/';
const popularMakesUrl = baseUrl + 'make?popular=true';
const allCarsUrl = baseUrl + 'car/search';


export const fetchPopularMakes = async ():Promise<CarMake[] | null> => {
    try {
        const response:AxiosResponse<{makeList: CarMake[]}> = await Axios.get(popularMakesUrl);
        return response.data.makeList;
    } catch (error) {
        return null;
    }
}

export const fetchAllVehicles = async ():Promise<Car[] | null> => {
    try {
        const response:AxiosResponse = await Axios.get(allCarsUrl);
        console.log({data: response.data})
        return response.data.vehicleList;
    } catch (error) {
        return null;
    }
}
