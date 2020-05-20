// Bindings
import { bindings } from 'bindings';

/**
 *
 */
export default async (data: string, hash: string): Promise<boolean> => {
  if (!data || typeof data !== 'string' || !data.length)
    return Promise.reject(new Error(`bcrypt.compare "data" must be a string.`));
  if (!hash || typeof hash !== 'string' || !hash.length)
    return Promise.reject(new Error(`bcrypt.compare "hash" must be a string.`));

  return new Promise((resolve, reject) => {
    bindings.compare(data, hash, (err: Error, result: boolean) => (err ? reject(err) : resolve(result)));
  });
};
