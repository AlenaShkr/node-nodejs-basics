import { Transform, pipeline } from 'node:stream';

export const transform = async () => {
    const readStream = process.stdin;
    const writeStream = process.stdout;

    const upperCaseTransform = new Transform({
        transform(data, encoding, callback) {
            this.push(data.toString().toUpperCase());
            callback();
        }
    });
     pipeline(readStream, upperCaseTransform,  writeStream, err => {
         if (error) {
             throw new Error('Some problem')
         }
     });
};
transform();