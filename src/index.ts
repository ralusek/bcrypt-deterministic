import _compare from './methods/public/compare';
import _compareSync from './methods/public/compareSync';
import _hash from './methods/public/hash';
import _hashSync from './methods/public/hashSync';

export const compare = _compare;
export const compareSync = _compareSync;
export const hash = _hash;
export const hashSync = _hashSync;

export default {
  compare,
  compareSync,
  hash,
  hashSync,
};
