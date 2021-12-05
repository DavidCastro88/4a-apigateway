const { gql } = require('apollo-server');
const touristPackageTypeDefs = gql `
    type  Tourist_package{ 
        Id_tourist_package: Int!
        Destination_place: String!
        Hotel: String!
        Days_stay: Int!
        Nights_stay: Int!
        Feeding: String!
        Guides: String!
        Price_Person: Int!
    }
    input Tourist_package_input{ 
        Destination_place: String!
        Hotel: String!
        Days_stay: Int!
        Nights_stay: Int!
        Feeding: String!
        Guides: String!
        Price_Person: Int!
    }
    extend type Mutation{
        createTourist_package(TouristPackageregister: Tourist_package_input!): Tourist_package
    }
    type Query{
        Tourist_packagebyId(Id_tourist_package: Int!):Tourist_package!
    }
    
`;
module.exports = touristPackageTypeDefs;