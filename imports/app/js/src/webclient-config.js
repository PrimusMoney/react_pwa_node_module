/**
 * 
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var WebClientConfig = Object.create(null);
WebClientConfig.execution_env = 'prod'; // used for remote login

WebClientConfig.default_remote_network_config = {
  name: 'PrimusMoney',
  uuid: '0638b7bc-3e1d-0f04-bd75-a91cef4bd5c7',
  restserver: {
    activate: true,
    rest_server_url: 'https://mobile-rest.primusmoney.com',
    rest_server_api_path: '/webapp/api'
  },
  authserver: {
    activate: true,
    rest_server_url: 'https://authkey-rest.primusmoney.com',
    rest_server_api_path: '/authkey'
  },
  keyserver: {
    activate: true,
    rest_server_url: 'https://authkey-rest.primusmoney.com',
    rest_server_api_path: '/authkey'
  },
  ethnodeserver: {
    name: 'firenze',
    activate: false,
    rest_server_url: 'https://firenze-dapps.primusmoney.com',
    rest_server_api_path: '/erc20-dapp/api',
    web3_provider_url: 'https://ethnode.primusmoney.com/firenze'
  }
}; // built-in schemes

WebClientConfig.builtin_local_networks = {
  "default": {
    name: 'default local network',
    uuid: 'c2dde9a3-0c1b-df6e-9340-ccc96699a7df',
    restserver: {
      activate: false
    },
    authserver: {
      activate: false
    },
    keyserver: {
      activate: false
    }
  }
};
WebClientConfig.builtin_remote_networks = {
  primus_mobile: {
    name: 'primusmoney mobile network',
    uuid: 'ced32053-c088-7932-dd1b-0009d99eb7ec',
    restserver: {
      activate: true,
      rest_server_url: 'https://mobile-rest.primusmoney.com/',
      rest_server_api_path: '/webapp/api'
    },
    authserver: {
      activate: true,
      rest_server_url: 'https://authkey-rest.primusmoney.com',
      rest_server_api_path: '/authkey'
    },
    keyserver: {
      activate: true,
      rest_server_url: 'https://authkey-rest.primusmoney.com',
      rest_server_api_path: '/authkey'
    }
  }
};
WebClientConfig.builtin_scheme_list_servers = [
  /*{
  	name: 'primus money mytokens',
  	uuid: '57eed191-9f8a-b533-7828-776766707c51',
  	url: 'https://mobile-rest.primusmoney.com/webapp/api/mytokens/scheme/list'
  }*/
];
WebClientConfig.builtin_local_schemes = {
  milano: {
    name: 'PrimusChain mainnet',
    uuid: '7ced1537-ee74-b9d9-15f9-4fac1c070701',
    restserver: {
      activate: false
    },
    authserver: {
      activate: false
    },
    keyserver: {
      activate: false
    },
    ethnodeserver: {
      name: 'milano',
      activate: false,
      chainid: 78,
      networkid: 78,
      default_gas_limit: '63000',
      default_gas_price: '1000000000',
      avg_transaction_fee: '0.000021',
      transaction_units_min: '5'
    }
  },
  firenze: {
    name: 'firenze test scheme',
    uuid: 'd55d9338-15a2-1499-7b94-22c8c9778bfc',
    restserver: {
      activate: false
    },
    authserver: {
      activate: false
    },
    keyserver: {
      activate: false
    },
    ethnodeserver: {
      name: 'firenze',
      activate: false,
      rest_server_url: 'https://firenze-dapps.primusmoney.com',
      rest_server_api_path: '/erc20-dapp/api',
      web3_provider_url: 'https://ethnode.primusmoney.com/firenze',
      explorerurl: 'https://mytokens-rest.primusmoney.com/mytokens-dapp/api/mytokens',
      chainid: 78110,
      networkid: 78110,
      default_gas_limit: '4850000',
      default_gas_price: '10000000000',
      avg_transaction_fee: '0.00021',
      transaction_units_min: '240'
    }
  },
  florin: {
    name: 'florin scheme',
    uuid: 'b1a18ba9-1609-3f66-c1fd-42ae0073efac',
    restserver: {
      activate: false
    },
    authserver: {
      activate: false
    },
    keyserver: {
      activate: false
    },
    ethnodeserver: {
      name: 'florin',
      activate: false,
      rest_server_url: 'https://firenze-dapps.primusfinance.fr',
      rest_server_api_path: '/erc20-dapp/api',
      web3_provider_url: 'https://ethnode.primusfinance.fr/firenze',
      explorerurl: 'https://mytokens-rest.primusmoney.com/mytokens-dapp/api/mytokens',
      chainid: 78110,
      networkid: 78110,
      default_gas_limit: '4850000',
      default_gas_price: '10000000000',
      avg_transaction_fee: '0.00021',
      transaction_units_min: '240'
    }
  }
};
WebClientConfig.builtin_remote_schemes = {
  facebook: {
    name: 'facebook oauth2 scheme',
    uuid: 'd8dbb10e-a478-e52c-b96b-29af6f48ae9b',
    restserver: {
      activate: false
    },
    authserver: {
      activate: true,
      mode: 'oauth2',
      oauth2: {
        provider: 'facebook'
      },
      rest_server_url: 'https://oauth2.primusmoney.com',
      rest_server_api_path: '/erc20-dapp/api/oauth2'
    },
    keyserver: {
      activate: true,
      rest_server_url: 'https://oauth2.primusmoney.com',
      rest_server_api_path: '/erc20-dapp/api/oauth2'
    },
    ethnodeserver: {
      name: 'firenze',
      activate: false
    }
  },
  google: {
    name: 'google oauth2 scheme',
    uuid: '47b0806f-c3fa-65f6-b356-8715a2bcfa0c',
    restserver: {
      activate: false
    },
    authserver: {
      activate: true,
      mode: 'oauth2',
      oauth2: {
        provider: 'google'
      },
      rest_server_url: 'https://oauth2.primusmoney.com',
      rest_server_api_path: '/erc20-dapp/api/oauth2'
    },
    keyserver: {
      activate: true,
      rest_server_url: 'https://oauth2.primusmoney.com',
      rest_server_api_path: '/erc20-dapp/api/oauth2'
    },
    ethnodeserver: {
      name: 'firenze',
      activate: false
    }
  },
  primusmoney: {
    name: 'primusmoney firenze scheme',
    uuid: 'd3b4fa61-ed65-11f6-4877-b169441dbe58',
    restserver: {
      activate: false
    },
    authserver: {
      activate: true,
      rest_server_url: 'https://authkey-rest.primusmoney.com',
      rest_server_api_path: '/authkey'
    },
    keyserver: {
      activate: true,
      rest_server_url: 'https://authkey-rest.primusmoney.com',
      rest_server_api_path: '/authkey'
    },
    ethnodeserver: {
      name: 'firenze',
      activate: false,
      rest_server_url: 'https://mobile-rest.primusmoney.com',
      rest_server_api_path: '/webapp/api',
      web3_provider_url: 'https://ethnode.primusmoney.com/firenze'
    }
  }
}; //module.exports = WebClientConfig;
// Note: webpack does not handle well import on module.exports

var _default = WebClientConfig;
exports["default"] = _default;
//# sourceMappingURL=webclient-config.js.map