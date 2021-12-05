const accountResolver = {
    Query: {
        shoppinghistorybyId_Purchase: async(_, { Id_Purchase }, { dataSources, ShoppingId }) => {
            if (Id_Purchase == ShoppingId)
                return await dataSources.ShoppingHistoryAPI.getShoppingHistorybyId_Purchase(Id_Purchase)
            else
                return null    
        },
        shoppinghistoryUserbyID: async(_, { userId }, { dataSources, ShoppingId }) => {
            if (userId == ShoppingId)
                return await dataSources.ShoppingHistoryAPI.getShoppingHistorybyUser(userId)
            else
                return null    
        },

    }, 
    Mutation: {
        createShoppingRegister: async(_, { Shoppingregister }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (Shoppingregister.usernameOrigin == usernameToken)
                return dataSources.accountAPI.createshoppingRegister(Shoppingregister)
            else
                return null
    }
};
module.exports = accountResolver;