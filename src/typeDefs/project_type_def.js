const { gql } = require('apollo-server');

const projectTypeDefs = gql `

    type Project {
        id: String!
        nombre: String
        estado: String
        idUser: String
        fechaIncio: String
    }

    input ProjectInput {
        idUser: String
        nombre: String
        estado: String
    }
    extend type Query {
        projectByIdUser(userId: String!): [Project]
    }
    
    type Mutation {
        createProject(project: ProjectInput!): Project
    }
`;

module.exports = projectTypeDefs;
