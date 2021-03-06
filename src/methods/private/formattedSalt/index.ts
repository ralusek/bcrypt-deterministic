import crypto from 'crypto';

// Types
import { FormattedSaltProps } from './types';

// Bindings
import { bindings } from 'bindings';

const MINOR = new Set(['a', 'b']);

export default async ({
  salt,
  rounds = 10,
  minor = 'b',
}: FormattedSaltProps = {}): Promise<string> => {
  if (salt && typeof salt !== 'string') return Promise.reject(new Error(`bcrypt.formattedSalt "salt" must be a string.`));
  if (typeof rounds != 'number') return Promise.reject(new Error(`bcrypt.formattedSalt "rounds" must be a number. Provided value was "${rounds}"`));
  if (!MINOR.has(minor)) return Promise.reject(new Error(`bcrypt.formattedSalt "minor" must be one of the following values ${Array.from(MINOR).join(', ')}, received "${minor}".`));

  let saltHash: Buffer;

  // Create a 16 byte hash from the provided salt.
  if (salt) {
    const hash = crypto.createHash('sha512');
    hash.update(salt);

    // Digest and truncate the hash to 16 bytes.
    saltHash = hash.digest().slice(0, 16);
  }
  // Generate random 16 bytes if no salt provided.
  else {
    saltHash = await new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, randomBytes) => err ? reject(err) : resolve(randomBytes));
    });
  }

  return new Promise((resolve, reject) => {
    bindings.gen_salt(minor, rounds, saltHash, (err: Error, result: string) => err ? reject(err) : resolve(result));
  });
};
