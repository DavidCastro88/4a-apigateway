const { gql } = require('apollo-server');
const shoppinghistoryTypeDefs = gql `
    type Shoppin_history{ 
        Id_Purchase: Int!
        Id_user: Int!
        Id_tourist_package: Int!
        Amount_package: String!
        Total_value: String!
        Status: String!
        Shopping_Date: String!
    }
    input Shoppinghistory_input{ 
        Id_user: Int!
        Id_tourist_package: Int!
        Amount_package: String!
        Total_value: String!
        Status: String!
    }
    extend type Mutation{
        createShoppingRegister(Shoppingregister: Shoppinghistory_input!): Shopping_history
    }
    type Query{
        shoppinghistorybyId_Purchase(Id_Purchase:Int!):Shoppin_history!
    }
    type Query{
        shoppinghistoryUserbyID(userId: Int!): Shoppin_history!
    }
`;
module.exports = shoppinghistoryTypeDefs;