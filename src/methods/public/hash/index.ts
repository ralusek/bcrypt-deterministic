// Types
import { HashProps } from './types';

// Bindings
import { bindings } from 'bindings';
import formattedSalt from '@/methods/private/formattedSalt';

/**
 * Hashes an input string. Optionally accepts a salt string,
 * which if included, will result in a stable/deterministic output
 * hash. If omitted, a random salt is generated.
 */
export default async (
  /**
   * Input data string to be hashed.
   */
  data: string,
  {
    salt,
    rounds,
    minor,
  }: HashProps = {}
): Promise<string> => {
  if (!data || !data.length) return Promise.reject(new Error(`bcrypt.hash "data" must be a string.`));

  const saltHash = await formattedSalt({ salt, rounds, minor });

  return new Promise((resolve, reject) => {
    bindings.encrypt(data, saltHash, (err: Error, result: string) => err ? reject(err) : resolve(result));
  });
};
