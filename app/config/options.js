exports.options = {
  connection: {
    apps: {
      loginContract: {
        contractId: '3K27igwzJDffCoKZVRGi5KRLb95rhd5psLDUXejDZcTq',
      },
      dpnsContract: {
        contractId: '7PBvxeGpj7SsWfvDSa31uqEMt58LAiJww7zNcVRP1uEM',
      },
      tweetContract: {
        contractId: '93LiKCGEszXfEk6jZ4ZF238v6YzruXVY4NF4v5Em8JhN',
      },
    },
    network: 'testnet',
    seeds: [
      { service: 'seed-1.evonet.networks.dash.org:3000' },
      { service: 'seed-2.evonet.networks.dash.org:3000' },
      { service: 'seed-3.evonet.networks.dash.org:3000' },
     ],
  },
  polling: {
    responsePollingTimeout: 30000,
    responsePollingFrequency: 5000,
    reponsePollingDelay: 3000,
  },
};
