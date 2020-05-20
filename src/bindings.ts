import path from 'path';

const binary = require('node-pre-gyp');
const binding_path = binary.find(path.resolve(path.join(__dirname, '../package.json')));

export const bindings = require(binding_path);

