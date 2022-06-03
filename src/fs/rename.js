import fs from 'node:fs/promises';

export const rename = async () => {
    const renamedFile = 'src/fs/files_copy/wrongFilename.txt';
    const renamingFile = 'src/fs/files_copy/properFilename.md';
    try {
        await fs.rename(renamedFile, renamingFile);
    } catch (error) {
        throw new Error('FS operation failed');
    } 
};
rename();