import fs from 'fs';

export const read = async (url) => {
    let readStream = fs.createReadStream(url, { encoding: 'utf-8'});
    readStream.on('readable', () => {
        let chunk;
        while((chunk = readStream.read()) !== null){
            process.stdout.write(`${chunk}`);
        }
    })
    readStream.on('end', () => {
        console.log('\n read finished');
    })
    readStream.on('error', (err) => {
        if(err) process.stderr.write('Some problem');
    })
    
};
const urlFile = 'src/streams/files/fileToRead.txt';
read(urlFile);