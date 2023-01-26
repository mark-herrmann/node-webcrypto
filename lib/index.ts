import nodeCrypto from 'crypto';

// Installing and importing node-forge provides type definitions for webcrypto
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import nodeForge from 'node-forge';

const { webcrypto } = nodeCrypto;

export default webcrypto;
