//Se llama al typedef (esquema) de cada submodulo
const accountTypeDefs = require('./account_type_defs');
const authTypeDefs = require('./auth_type_defs');
const shoppinghistoryTypeDefs = require('./shopping_history_type_defs');
const tokenClientTypeDefs= require('./token_client_type_defs');
const touristPackageTypeDefs= require('./tourist_package_type_defs')
//Se unen
const schemasArrays = [authTypeDefs,accountTypeDefs, shoppinghistoryTypeDefs,tokenClientTypeDefs,touristPackageTypeDefs];
//Se exportan
module.exports = schemasArrays;