import fs from 'fs';

export const write = async (url) => {
    process.stdout.write('Write text to write to file.\nFor finish click Ctrl+C.\n');
    const stream = fs.createWriteStream(url, { flags: 'a'});
    process.stdin.pipe(stream);
};
const pathToWrite = 'src/streams/files/fileToWrite.txt';
write(pathToWrite);