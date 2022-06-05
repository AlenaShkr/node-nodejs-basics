import fs from 'node:fs/promises';

export const copy = async () => {
    let copyURL = 'src/fs/files';
    try{
        await fs.mkdir(`${copyURL}_copy`, {recursive: false});
        await fs.readdir(copyURL)
        .then(resolve => resolve.forEach(el => fs.copyFile(`${copyURL}/${el}`, `${copyURL}_copy/${el}`)));

    } catch(err) {
        throw new Error('FS operation failed');
    }
};
copy();