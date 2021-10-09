const projectResolver = {
    Query: {
        projectByIdUser: (_, { userId }, {dataSources}) =>{
            return dataSources.projectInvAPI.projectByIdUser(userId)
        }
    },
    Mutation: {
        createProject: (_, {project}, {dataSources})=>{
            return dataSources.projectInvAPI.createProject(project)
        }
    }

};

module.exports = projectResolver;