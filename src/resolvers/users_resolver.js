const usersResolver = {
    Query: {
        userByUserId: (_, {userId}, { dataSources}) =>{
            return dataSources.projectInvAPI.userByUserId(userId)
        },
    },
    Mutation: {}
};

module.exports = usersResolver;