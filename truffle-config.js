/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation, and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * Hands-off deployment with Infura
 * --------------------------------
 *
 * Do you have a complex application that requires lots of transactions to deploy?
 * Use this approach to make deployment a breeze 🏖️:
 *
 * Infura deployment needs a wallet provider (like @truffle/hdwallet-provider)
 * to sign transactions before they're sent to a remote public node.
 * Infura accounts are available for free at 🔍: https://infura.io/register
 *
 * You'll need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. You can store your secrets 🤐 in a .env file.
 * In your project root, run `$ npm install dotenv`.
 * Create .env (which should be .gitignored) and declare your MNEMONIC
 * and Infura PROJECT_ID variables inside.
 * For example, your .env file will have the following structure:
 *
 * MNEMONIC = <Your 12 phrase mnemonic>
 * PROJECT_ID = <Your Infura project id>
 *
 * Deployment with Truffle Dashboard (Recommended for best security practice)
 * --------------------------------------------------------------------------
 *
 * Are you concerned about security and minimizing rekt status 🤔?
 * Use this method for best security:
 *
 * Truffle Dashboard lets you review transactions in detail, and leverages
 * MetaMask for signing, so there's no need to copy-paste your mnemonic.
 * More details can be found at 🔎:
 *
 * https://trufflesuite.com/docs/truffle/getting-started/using-the-truffle-dashboard/
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');

const privateKeys = ["e61d520cd0384f658256cc6da249572679575ce036ab7f96fbffc7e79889ff57"];

const url = "http://127.0.0.1:8545"

const provider = new HDWalletProvider(privateKeys, url);

module.exports = {
  networks: {
    hoya: {
      provider: () => provider,
      network_id: "*",
      gasPrice: 0,
     },
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.1",
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 1000,
         },
      }
    }
  },
};
