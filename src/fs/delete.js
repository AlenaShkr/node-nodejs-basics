import fs from 'node:fs/promises';

export const remove = async () => {
    let deleteURL = 'src/fs/files/fileToRemove.txt';
    try {
        await fs.rm(deleteURL, {force: false, recursive: true});
    } catch(error) {
        throw new Error('FS operation failed')
    }
};
remove();