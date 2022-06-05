import fs from 'node:fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream';

export const compress = async (url) => {
const readStream = fs.createReadStream(url);
const zlidCompress = zlib.createGzip();
const writeStream = fs.createWriteStream('src/zip/files/archive.gz');
pipeline(readStream, zlidCompress, writeStream, err => {
    if(err) throw new Error('some error');
});
};

const pathToZip = 'src/zip/files/fileToCompress.txt';
compress(pathToZip);