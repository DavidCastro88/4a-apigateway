const authResolver = require('./auth_resolver');
const accountResolver = require('./account_resolver');
const shoppinghistoryResolver = require('./shoppinghistory_resolver');
const TokenclientResolver = require('./Token_client_resolver');
const touristpackageResolver = require('./tourist_package_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(authResolver,accountResolver,shoppinghistoryResolver,TokenclientResolver,touristpackageResolver);
module.exports = resolvers;