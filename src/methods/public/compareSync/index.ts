// Bindings
import { bindings } from 'bindings';

/**
 *
 */
export default (data: string, hash: string): boolean => {
  if (!data || typeof data !== 'string' || !data.length) throw new Error(`bcrypt.compare "data" must be a string.`);
  if (!hash || typeof hash !== 'string' || !hash.length) throw new Error(`bcrypt.compare "hash" must be a string.`);

  return bindings.compare_sync(data, hash);
};
