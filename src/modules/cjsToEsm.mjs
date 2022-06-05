import path from 'node:path';
import { release, version } from 'node:os';
import  http  from 'node:http';
import url from 'node:url';
import {} from './files/c.js';
import ajson from './files/a.json' assert { type: 'json' };
import bjson from './files/b.json' assert { type: 'json' };

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = ajson;
} else {
    unknownObject = bjson;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${url.fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(url.fileURLToPath(import.meta.url))}`);

const createMyServer = http.createServer((req, res) => {
    res.end('Request accepted');
});

export default {
    unknownObject,
    createMyServer,
};

