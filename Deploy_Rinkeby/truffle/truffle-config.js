const HDWallet = require('@truffle/hdwallet-provider');
const dotenv = require('dotenv');
dotenv.config();
const mnemonic = process.env.MNEMONIC;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWallet(mnemonic, process.env.INFURA_URL);
      },
      network_id: 4,
	  gas: 5500000,        
      confirmations: 0,    
      timeoutBlocks: 200,  
      skipDryRun: true 
    }
  },

  compilers: {
    solc: {
       version: "0.8.5",    // Fetch exact version from solc-bin (default: truffle's version)
        docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
        pasrser: "solcjs"
       //settings: {          // See the solidity docs for advice about optimization and evmVersion
       // optimizer: {
       //   enabled: false,
       //   runs: 200
       // },
       // evmVersion: "byzantium"
       //}
    }
  },
}; 