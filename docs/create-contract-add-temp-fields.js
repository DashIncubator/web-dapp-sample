const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  mnemonic:
    'erosion chalk panda one embrace absurd punch fitness congress cave true fine',
    seeds: [
      { service: 'seed-1.evonet.networks.dash.org' },
      { service: 'seed-2.evonet.networks.dash.org' },
      { service: 'seed-3.evonet.networks.dash.org' },
      { service: 'seed-4.evonet.networks.dash.org' },
      { service: 'seed-5.evonet.networks.dash.org' },
     ],
      apps: {
         dpns: {
            contractId: '7PBvxeGpj7SsWfvDSa31uqEMt58LAiJww7zNcVRP1uEM'
         }
      },
};
const client = new Dash.Client(clientOpts);

const registerContract = async function () {
  try {
    await client.isReady();
    const platform = client.platform;
    const identity = await platform.identities.get(
      '6st5GyAzz1jZuLbroUk3JWR8H1mzscZ3TcVjCKViGcPh',
    );

    const contractDocuments = {
      SignupRequest: {
        indices: [
          {
            properties: [{ $ownerId: 'asc' }],
            unique: false,
          },
          {
            properties: [{ reference: 'asc' }],
            unique: false,
          },
          {
            properties: [{ temp_timestamp: 'asc' }],
            unique: true,
          },
          {
            properties: [{ temp_unixtime_str: 'desc' }],
            unique: false,
          },
          {
            properties: [{ temp_unixtime_num: 'desc' }],
            unique: false,
          },
          {
            properties: [{ temp_unixtime_int: 'desc' }],
            unique: false,
          },
        ],
        properties: {
          reference: {
            type: 'string',
          },
          uid_pin: {
            type: 'string',
          },
          nonce: {
            type: 'string',
          },
          temp_timestamp: {
            type: 'string',
          },
          temp_dappname: {
            type: 'string',
          },
          temp_unixtime_str: {
            type: 'string',
          },
          temp_unixtime_num: {
            type: 'number',
          },
          temp_unixtime_int: {
            type: 'integer',
          },
          temp_vendoruid: {
            type: 'string',
          },
        },
        additionalProperties: false,
      },
      SignupResponse: {
        indices: [
          {
            properties: [{ $ownerId: 'asc' }],
            unique: false,
          },
          {
            properties: [{ reference: 'asc' }],
            unique: false,
          },
          {
            properties: [{ temp_timestamp: 'asc' }],
            unique: true,
          },
          {
            properties: [{ temp_unixtime_str: 'desc' }],
            unique: false,
          },
          {
            properties: [{ temp_unixtime_num: 'desc' }],
            unique: false,
          },
          {
            properties: [{ temp_unixtime_int: 'desc' }],
            unique: false,
          },
        ],
        properties: {
          reference: {
            type: 'string',
          },
          vid_pin: {
            type: 'string',
          },
          status: {
            type: 'string',
          },
          temp_timestamp: {
            type: 'string',
          },
          temp_unixtime_str: {
            type: 'string',
          },
          temp_unixtime_num: {
            type: 'number',
          },
          temp_unixtime_int: {
            type: 'integer',
          },
          temp_vendoruid: {
            type: 'string',
          },
          
        },
        additionalProperties: false,
      },
      LoginRequest: {
        indices: [
          {
            properties: [{ $ownerId: 'asc' }],
            unique: false,
          },
          {
            properties: [{ reference: 'asc' }],
            unique: false,
          },
          {
            properties: [{ temp_timestamp: 'asc' }],
            unique: true,
          },
          {
            properties: [{ temp_unixtime_str: 'desc' }],
            unique: false,
          },
          {
            properties: [{ temp_unixtime_num: 'desc' }],
            unique: false,
          },
          {
            properties: [{ temp_unixtime_int: 'desc' }],
            unique: false,
          },
        ],
        properties: {
          reference: {
            type: 'string',
          },
          uid_pin: {
            type: 'string',
          },
          nonce: {
            type: 'string',
          },
          temp_timestamp: {
            type: 'string',
          },
          temp_dappname: {
            type: 'string',
          },
          temp_unixtime_str: {
            type: 'string',
          },
          temp_unixtime_num: {
            type: 'number',
          },
          temp_unixtime_int: {
            type: 'integer',
          },
          temp_vendoruid: {
            type: 'string',
          },
        },
        additionalProperties: false,
      },
      LoginResponse: {
        indices: [
          {
            properties: [{ $ownerId: 'asc' }],
            unique: false,
          },
          {
            properties: [{ reference: 'asc' }],
            unique: false,
          },
          {
            properties: [{ temp_timestamp: 'asc' }],
            unique: true,
          },
          {
            properties: [{ temp_unixtime_str: 'desc' }],
            unique: false,
          },
          {
            properties: [{ temp_unixtime_num: 'desc' }],
            unique: false,
          },
          {
            properties: [{ temp_unixtime_int: 'desc' }],
            unique: false,
          },
        ],
        properties: {
          reference: {
            type: 'string',
          },
          vid_pin: {
            type: 'string',
          },
          status: {
            type: 'string',
          },
          temp_timestamp: {
            type: 'string',
          },
          temp_unixtime_str: {
            type: 'string',
          },
          temp_unixtime_num: {
            type: 'number',
          },
          temp_unixtime_int: {
            type: 'integer',
          },
          temp_vendoruid: {
            type: 'string',
          },
        },
        additionalProperties: false,
      },
      TweetRequest: {
        indices: [
          {
            properties: [{ $ownerId: 'asc' }],
            unique: false,
          },
          {
            properties: [{ reference: 'asc' }],
            unique: false,
          },
          {
            properties: [{ temp_timestamp: 'asc' }],
            unique: true,
          },
          {
            properties: [{ temp_unixtime_str: 'desc' }],
            unique: false,
          },
          {
            properties: [{ temp_unixtime_num: 'desc' }],
            unique: false,
          },
          {
            properties: [{ temp_unixtime_int: 'desc' }],
            unique: false,
          },
        ],
        properties: {
          reference: {
            type: 'string',
          },
          uid_pin: {
            type: 'string',
          },
          nonce: {
            type: 'string',
          },
          tweet: {
            type: 'string',
          },
          temp_timestamp: {
            type: 'string',
          },
          temp_dappname: {
            type: 'string',
          },
          temp_unixtime_str: {
            type: 'string',
          },
          temp_unixtime_num: {
            type: 'number',
          },
          temp_unixtime_int: {
            type: 'integer',
          },
          temp_vendoruid: {
            type: 'string',
          },
        },
        additionalProperties: false,
      },
      TweetResponse: {
        indices: [
          {
            properties: [{ $ownerId: 'asc' }],
            unique: false,
          },
          {
            properties: [{ reference: 'asc' }],
            unique: false,
          },
          {
            properties: [{ temp_timestamp: 'asc' }],
            unique: true,
          },
          {
            properties: [{ temp_unixtime_str: 'desc' }],
            unique: false,
          },
          {
            properties: [{ temp_unixtime_num: 'desc' }],
            unique: false,
          },
          {
            properties: [{ temp_unixtime_int: 'desc' }],
            unique: false,
          },
        ],
        properties: {
          reference: {
            type: 'string',
          },
          vid_pin: {
            type: 'string',
          },
          status: {
            type: 'string',
          },
          temp_timestamp: {
            type: 'string',
          },
          temp_unixtime_str: {
            type: 'string',
          },
          temp_unixtime_num: {
            type: 'number',
          },
          temp_unixtime_int: {
            type: 'integer',
          },
          temp_vendoruid: {
            type: 'string',
          },
        },
        additionalProperties: false,
      },
    };
    const contract = await platform.contracts.create(
      contractDocuments,
      identity,
    );
    console.dir({ contract });

    // Make sure contract passes validation checks
    await platform.dpp.dataContract.validate(contract);

    // Sign and submit the data contract
    await platform.contracts.broadcast(contract, identity);
  } catch (e) {
    console.error('Something went wrong:', e);
  } finally {
    client.disconnect();
  }
};

registerContract();
