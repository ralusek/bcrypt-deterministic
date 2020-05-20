export type FormattedSaltProps = {
  /** Optional salt string to use. Random bytes will be used if not provided. */
  salt?: string;
  /** Work-factor rounds. */
  rounds?: number;
  minor?: 'a' | 'b';
};
