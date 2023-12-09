import * as fs from 'node:fs/promises';

const main = async () => {
    const file = await fs.readFile('./input.txt','utf-8');
    
}

await main();