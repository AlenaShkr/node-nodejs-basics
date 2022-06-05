import fs from 'node:fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream';

export const decompress = async (url) => {
    const unzip = zlib.createGunzip();
    const readStream = fs.createReadStream(url);
    const writeStream = fs.createWriteStream('src/zip/files/fileToCompress.txt');
    pipeline(readStream,unzip, writeStream, err => {
        if(err) throw new Error('some error');
    });
    };
const pathToDecompress = 'src/zip/files/archive.gz';
decompress(pathToDecompress);