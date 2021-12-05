const Tokenclient_Resolver = {
    Query: {
        tokenClientbyId: async(_, { _id }, { dataSources}) => {
            return await dataSources.TokenClientAPI.getTokenClientbyId(_id)   
        },
        tokenClientbyEmail: async(_, { email }, { dataSources}) => {
            return await dataSources.TokenClientAPI.getTokenClientbyEmail(email)    
        },
    }, 
    Mutation: {
        createTokenRegister: async(_, { Tokenregister }, { dataSources }) => {
            return await dataSources.TokenClientAPI.createTokenClient(Tokenregister)
    }}
};
module.exports = Tokenclient_Resolver;