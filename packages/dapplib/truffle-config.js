require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food main rifle payment clump hockey civil army genuine'; 
let testAccounts = [
"0x6bf5a563d242d22e44c90b11ae061edf36c7ee22ec401d1cc8ab1c4b12029c85",
"0x8f0bde8929787df6fadef192fae760a85bc17f1dfd1fc87c220607fb4c6d763a",
"0x971c5304ea157c2d30177bdbfef3226c80fdfd468f2d881fe6bf25df8bfe9c1e",
"0xbbbf1d77c484c6c2e115b34fb481de41aa99266ea9a2cc8b22934b1e96c2fd69",
"0x4b1d4df8c064e8d2c6d9c5e0db7ea79aebfd636867ab01db92edbf1aada3203e",
"0xc383079161012188b423aeb2160bc2a2853d7688b25eac02697a33178c36fe89",
"0x9cd7fb39d69704d92d7ee8afdc0b19756d88f6006ab720341c96f04a6a4db4b3",
"0xa152d0ee4d62fee96f524d63c3e6c2502dba3747f074a7f158999ef7b4c9ccc2",
"0x7fa88388fb712ac2f3af87b3af10bc78b778ea362002a0dc944e1317fe560ee3",
"0xda712048f2e399e303615f147bc566592c2c00909f6767f2af99132fc6da24c5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

