import fs from 'node:fs/promises';

export const read = async () => {
    let fileURL = 'src/fs/files/fileToRead.txt';
    try {
        let content = await fs.readFile(fileURL, {encoding: 'utf8'});
        console.log(content);
    } catch(error) {
        throw new Error('FS operation failed');
    }
};
read();