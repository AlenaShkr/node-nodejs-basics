import crypto from 'node:crypto';
import fs from 'node:fs';

export const calculateHash = async (url) => {
    const hash = crypto.createHash('sha256');
    const readStream = fs.createReadStream(url);
    readStream.on('readable', () => {
        const content = readStream.read();
        if(content) {
            hash.update(content);
        } else {
            console.log(`${hash.digest('hex')}`)
        }
    })
};
const urlFile = 'src/hash/files/fileToCalculateHashFor.txt';
calculateHash(urlFile);