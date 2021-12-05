const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const AuthAPI = require('./dataSources/auth_api');
const AccountAPI = require('./dataSources/account_api');
const ShoppingHistoryAPI = require('./dataSources/shopping_history_api');
const TokenClientAPI = require('./dataSources/Token_client_api');
const TouristPackageAPI = require('./dataSources/tourist_package_api');
const authentication = require('./utils/authentication');
const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        accountAPI: new AccountAPI(),
        shoppingHistoryAPI: new ShoppingHistoryAPI(),
        authAPI: new AuthAPI(),
        tokenclientAPI: new TokenClientAPI(),
        touristpackageAPI: new TouristPackageAPI(),
        
    }),
    introspection: true,
    playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});