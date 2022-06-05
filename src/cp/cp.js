import childProcess from 'node:child_process';

export const spawnChildProcess = async (args) => {
    const child = childProcess.fork('src/cp/files/script.js');
};
spawnChildProcess();