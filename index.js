import { getPrice } from "./src/scrapper.js";
import { intro, outro, text, spinner } from "@clack/prompts";


    const s = spinner();

intro('welcome to amazon price bot!');

const url = await text({
    message: 'tType or paste your amazon URL: ',
    placeholder: 'https://www.amazon.com.mx/dp/B0BRYVKW7F',
    validate: (value) => {
        if(!value.includes('www.amazon.com.mx')) return 'invalid amazon URL';
    },
});
s.start('Getting price...');
const price = await getPrice(url);
s.stop(price);

outro('Thanks for using my app!');
