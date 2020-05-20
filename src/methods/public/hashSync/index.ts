// Types
import { HashProps } from './types';

// Bindings
import { bindings } from 'bindings';
import formattedSaltSync from '@/methods/private/formattedSaltSync';

/**
 * Hashes an input string. Optionally accepts a salt string,
 * which if included, will result in a stable/deterministic output
 * hash. If omitted, a random salt is generated.
 */
export default (
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
  if (!data || !data.length) return Promise.reject(new Error(`bcrypt.hashSync "data" must be a string.`));

  const saltHash = formattedSaltSync({ salt, rounds, minor });

  return bindings.encrypt_sync(data, saltHash);
};
