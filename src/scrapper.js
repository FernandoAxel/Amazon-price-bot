import axios from "axios";
import * as cheerio from 'cheerio';

async function getPrice(url){
    try{
        const response = await axios.get(url);
        //console.log(response.data);
        const $ = cheerio.load(response.data);
        const price = $('.a-price-whole').text();
        const priceValue = price.split('.', 1);
        return 'El precio es:'+ priceValue[0];
        } catch (error) {
            console.log(error);
        }
}

// add more functions

export { getPrice };