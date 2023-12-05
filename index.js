import { getPrice, getName, getDescripcion } from "./src/scrapper.js";
import { intro, outro, text, spinner } from "@clack/prompts";


    const s = spinner();

intro('welcome to  Nike Information bot!');

const url = await text({
    message: 'Type or paste your Nike Shoes URL: ',
    placeholder: 'https://www.nike.com/mx/t/bota-city-classic-KD52WX/DQ5601-710',
    validate: (value) => {
        if(!value.includes('https://www.nike.com/mx/')) return 'invalid amazon URL';
    },
});
s.start('Getting price...');
const price = await getPrice(url);
s.stop(price);

s.start('Getting name.....');
const name = await getName(url);
s.stop(name);

s.start('Getting Descripcion.....');
const des = await getDescripcion(url);
s.stop(des);


outro('Thanks for using my app!');
