import { assert } from 'assertthat';
// eslint-disable-next-line unicorn/import-index
import webcrypto from '../../lib/index';

suite('Simple test for webcrypto', (): void => {
  test('returns getRandomValues function.', async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const func = webcrypto.getRandomValues;

    assert.that(func).is.ofType('function');
    assert.that(func.name).is.equalTo('getRandomValues');
    assert.that(func.length).is.equalTo(1);
  });

  test('returns importKey function.', async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const func = webcrypto.subtle.importKey;

    assert.that(func).is.ofType('function');
    assert.that(func.name).is.equalTo('importKey');
    assert.that(func.length).is.equalTo(5);
  });

  test('returns randomUUID function.', async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const func = webcrypto.randomUUID;

    assert.that(func).is.ofType('function');
    assert.that(func.name).is.equalTo('randomUUID');
    assert.that(func.length).is.equalTo(0);
  });
});
