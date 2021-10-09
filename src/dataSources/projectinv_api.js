const {RESTDataSource} = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ProjectInvAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.projectInv_api_url;
    }

    async userByUserId(userId){
        return await this.get(`/users/${userId}`);
    }

    async createProject(project) {
        project = new Object(JSON.parse(JSON.stringify(project)));
        return await this.post('project', project);
    }

    async projectByIdUser(userId){
        return await this.get(`/project/${userId}`);
    }
}

module.exports = ProjectInvAPI;