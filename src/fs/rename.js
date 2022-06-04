import fs from 'node:fs';

export const rename = async () => {
    const renamedFile = 'src/fs/files/wrongFilename.txt';
    const renamingFile = 'src/fs/files/properFilename.md';
    fs.stat(renamingFile, (err, stat) => {
        if(typeof stat === 'object') {
            throw new Error('FS operation failed');
        } else {
            fs.rename(renamedFile, renamingFile, (err, res) => {
                if(err) throw new Error('FS operation failed');
            })
        } 
    });          
}
rename();