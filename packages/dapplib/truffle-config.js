require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note oval unusual harvest inhale flock small'; 
let testAccounts = [
"0x0cb3e10ff374021d7597eb146541c76efb7592848366f1c0ca1b0015cfe8dfe0",
"0x8b928a0f95b953607150af98b6e77ed805b1de8dd1a4180448c12af387b8eb79",
"0x496145105a0e71bf5c334e5f42da1bc3554d7a0ac5c9aeab5f29039929ca75ad",
"0xc277f3c389d7928612e8ac337a710a59c0eaa288293fea7df6e2989ed58367cc",
"0x1cb22fa67f16f844ce9bae64c33fe93d5eb80d2a4d44e7458d0360d8ed53a4b7",
"0x701e1668c9fb8c55bd817bcdcfd37121f8804036545d49d34209fbab808cd9c2",
"0x954fa52268309e4813952fd4f497246632ad360183f68bd3b2ab7d5c6c707116",
"0xeb02e741576c52fd28d9d6cae058d42eb7477cd57a453f9433043fc0cdc874c7",
"0xa674a3594d0121df97012bd81817a41b656ab45af38dcb56f4dc93c588209207",
"0xf6032fc21a049f78050057885e61850166406a90be67b050cd3f7df1371e0f87"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


