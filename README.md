# Steps

```shell
ng new angular-ssr // routing less
ng g c users
ng g c posts
ng serve -o
// edit ci

ng add @ng-toolkit/universal
// format
yarn build:prod && yarn server 
// succ ci

yarn add web3
// edit ci
ng serve -o

ERROR in ./node_modules/eth-lib/lib/bytes.js
Module not found: Error: Can't resolve 'crypto' in '/Users/theta/angular-ssr/node_modules/eth-lib/lib'
ERROR in ./node_modules/web3-eth-accounts/node_modules/eth-lib/lib/bytes.js
Module not found: Error: Can't resolve 'crypto' in '/Users/theta/angular-ssr/node_modules/web3-eth-accounts/node_modules/eth-lib/lib'
ERROR in ./node_modules/web3-eth-accounts/src/index.js
Module not found: Error: Can't resolve 'crypto' in '/Users/theta/angular-ssr/node_modules/web3-eth-accounts/src'
ERROR in ./node_modules/web3-providers-http/src/index.js
Module not found: Error: Can't resolve 'http' in '/Users/theta/angular-ssr/node_modules/web3-providers-http/src'
ERROR in ./node_modules/xhr2-cookies/dist/xml-http-request.js
Module not found: Error: Can't resolve 'http' in '/Users/theta/angular-ssr/node_modules/xhr2-cookies/dist'
ERROR in ./node_modules/web3-providers-http/src/index.js
Module not found: Error: Can't resolve 'https' in '/Users/theta/angular-ssr/node_modules/web3-providers-http/src'
ERROR in ./node_modules/xhr2-cookies/dist/xml-http-request.js
Module not found: Error: Can't resolve 'https' in '/Users/theta/angular-ssr/node_modules/xhr2-cookies/dist'
ERROR in ./node_modules/xhr2-cookies/dist/xml-http-request.js
Module not found: Error: Can't resolve 'os' in '/Users/theta/angular-ssr/node_modules/xhr2-cookies/dist'
ERROR in ./node_modules/browserify-sign/browser/index.js
Module not found: Error: Can't resolve 'stream' in '/Users/theta/angular-ssr/node_modules/browserify-sign/browser'
ERROR in ./node_modules/cipher-base/index.js
Module not found: Error: Can't resolve 'stream' in '/Users/theta/angular-ssr/node_modules/cipher-base'
ERROR in ./node_modules/hash-base/index.js
Module not found: Error: Can't resolve 'stream' in '/Users/theta/angular-ssr/node_modules/hash-base'
ℹ ｢wdm｣: Failed to compile.

// add patch 
// succ ci

yarn build:prod 

ERROR in ./node_modules/scrypt/index.js
Module not found: Error: Can't resolve './build/Release/scrypt' in '/Users/theta/angular-ssr/node_modules/scrypt'
 @ ./node_modules/scrypt/index.js 3:19-52
 @ ./node_modules/scrypt.js/node.js
 @ ./node_modules/web3-eth-accounts/src/index.js
 @ ./node_modules/web3-eth/src/index.js
 @ ./node_modules/web3/src/index.js
 @ ./dist/server/main.js
 @ ./server.ts

ERROR in ./node_modules/got/index.js
Module not found: Error: Can't resolve './package' in '/Users/theta/angular-ssr/node_modules/got'
 @ ./node_modules/got/index.js 22:12-32
 @ ./node_modules/swarm-js/lib/files.js
 @ ./node_modules/swarm-js/lib/api-node.js
 @ ./node_modules/web3-bzz/src/index.js
 @ ./node_modules/web3/src/index.js
 @ ./dist/server/main.js
 @ ./server.ts

ERROR in ./node_modules/got/index.js
Module not found: Error: Can't resolve 'electron' in '/Users/theta/angular-ssr/node_modules/got'
 @ ./node_modules/got/index.js 45:20-39
 @ ./node_modules/swarm-js/lib/files.js
 @ ./node_modules/swarm-js/lib/api-node.js
 @ ./node_modules/web3-bzz/src/index.js
 @ ./node_modules/web3/src/index.js
 @ ./dist/server/main.js
 @ ./server.ts
npm ERR! code ELIFECYCLE
npm ERR! errno 2

// edit webpack
yarn add electron node-loader
yarn build:prod && yarn server
// succ ci
```