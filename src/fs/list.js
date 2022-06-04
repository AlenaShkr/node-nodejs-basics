import fs from 'node:fs/promises';

export const list = async () => {
    let dirURL = 'src/fs/files';
    try{
         await fs.readdir(dirURL)
        .then( res => {
            console.log(`in directory:`);
            res.forEach(el => console.log(el));
        })
    } catch(error) {
        throw new Error('FS operation failed');
    }
};
list();