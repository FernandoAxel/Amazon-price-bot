import axios from "axios";
import * as cheerio from 'cheerio';

async function getPrice(url){
    try{
        const response = await axios.get(url);
        //console.log(response.data);
        const $ = cheerio.load(response.data);
        const price = $('.is--current-price').text();
        const priceValue = price.split('.', 1);
        return 'El precio es:'+ priceValue[0];
        } catch (error) {
            console.log(error);
        }
}
async function getName(url){
    try{
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);
        const name = $('#pdp_product_title').text();
        const nameValue = name.split('.', 1);
        return 'El nombre de los tenis es: ' + nameValue[0];
    }catch (error){
        console.log(error);
    }
}
async function getDescripcion(url){
    try{
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);
        const des = $('.css-1pbvugb p').text();
        const desValue = des.split('.', 1);
        return 'Descripcion del producto: ' + desValue[0];
    }catch (error){
        console.log(error);
    }
}
// add more functions.is--current-price

export { getPrice };
export { getName };
export {getDescripcion};