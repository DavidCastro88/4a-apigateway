const { gql } = require('apollo-server');
const tokenClientTypeDefs = gql `
    type TokenClient{ 
        _id: Int!
        nombre: String!
        telefono: String!
        email: String!
        inquietudes: String!
        comentario: String!
        sol_activa: String!
    }
    input TokenClient_input{ 
        nombre: String!
        telefono: String!
        email: String!
        inquietudes: String!
        comentario: String!
        sol_activa: String!
    }
    extend type Mutation{
        createTokenRegister(Tokenregister: TokenClient_input!): TokenClient
    }
    type Query{
        tokenClientbyId(_id: Int!):TokenClient!
    }
    type Query{
        tokenClientbyEmail(email: String!): TokenClient!
    }
`;
module.exports = tokenClientTypeDefs;