import fs from 'node:fs';

export const create = async () => {
    const url = 'src/fs/files/fresh.txt';
    const content = 'I am fresh and young';
    fs.stat(url,  (err, stat) => {
        if (err) {
            fs.writeFile(url, content, (error) => {
                if(error) {
                    console.log('create file is done')
                }
            })
            return;
        } 
        throw new Error('FS operation failed');
    })
    
};
create();