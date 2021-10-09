const { gql } = require('apollo-server');

const usersTypeDefs = gql `
    type User {
        userId: String!
        rol: String
        estado: String
        edad: Int
    }
    type Query {
        userByUserId(userId: String): User
    }
`;

module.exports = usersTypeDefs;