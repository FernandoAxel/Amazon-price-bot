import { getPrice, getName, getDescripcion } from "./src/scrapper.js";
import { intro, outro, text, spinner } from "@clack/prompts";

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const s = spinner();

intro('welcome to Nike Information bot!');

function displayMenu() {
    console.log('=== Menu ===');
    console.log('1. Grt price');
    console.log('2. Get Name');
    console.log('3. Get Description');
    console.log('4. Go Out');
}

async function handleUserInput(option, url) {
    switch (option) {
        case '1':
            const price = await getPrice(url);
            s.stop('The Price is: ' + price);
            outro('Thanks for using my app!');
            rl.close();
            break;
        case '2':
            const name = await getName(url);
            s.stop('Name of the Product: ' + name);
            outro('Thanks for using my app!');
            rl.close();
            break;
        case '3':
            const des = await getDescripcion(url);
            s.stop('Description of the product: ' + des);
            outro('Thanks for using my app!');
            rl.close();
            break;
        case '4':
            console.log('Leaving the Program.');
            rl.close();
            break;
        default:
            console.log('Invalid Option ');
            rl.close();
            break;
    }
}

async function startApp() {
    displayMenu();

    rl.question('Select Option: ', async (answer) => {
        const url = await text({
            message: 'Type or paste your Nike Shoes URL: ',
            placeholder: 'https://www.nike.com/mx/t/bota-city-classic-KD52WX/DQ5601-710',
            validate: (value) => {
                if (!value.includes('https://www.nike.com/mx/')) return 'Invalid URL';
            },
        });

        handleUserInput(answer, url);
    });
}

startApp();