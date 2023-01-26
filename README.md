# node-webcrypto

[![npm package](https://nodei.co/npm/node-webcrypto.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-webcrypto/)

[![npm](https://img.shields.io/npm/v/node-webcrypto)](https://www.npmjs.com/package/node-webcrypto) [![QA](https://github.com/mark-herrmann/node-webcrypto/actions/workflows/qa.yml/badge.svg?branch=main)](https://github.com/mark-herrmann/node-webcrypto/actions/workflows/qa.yml)

Provides webcrypto in node.js context (incl. typescript compatible vue.js).

## Install
```sh
npm i webcrypto
```

## Usage
Example in JavaScript
```js
import webcrypto from 'node-webcrypto';

const keyData = webcrypto.getRandomValues(new Uint8Array(16));
const key = webcrypto.subtle.importKey("raw", keyData, "aes-gcm", false, ["encrypt", "decrypt"]).then(e => {
  console.log({ e }); //prints the imported key object
});
```


## License

This project is licensed under the [MIT License](LICENSE.txt)
