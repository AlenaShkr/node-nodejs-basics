import fs from 'node:fs';

export const rename = async () => {
    const renamedFile = 'src/fs/files/wrongFilename.txt';
    const renamingFile = 'src/fs/files/properFilename.md';
    fs.stat(renamingFile, (err, stat) => {
        if (err) {
            fs.rename(renamedFile, renamingFile, (err) =>{
                if(err) {
                    throw new Error('FS operation failed');
                }
            }); 
        } else throw new Error('FS operation failed');
    })
};
rename();