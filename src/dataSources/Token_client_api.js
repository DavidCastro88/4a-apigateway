const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
    class TokenClientAPI extends RESTDataSource {
        
        constructor() {
            super();
            this.baseURL = serverConfig.Tokenclient_api_url;
    }
        async getTokenClientbyEmail(Email) {
            return await this.get(`/contacto/email/${Email}/`);
    }
        async getTokenClientbyId(_id) {
            return await this.get(`/contacto/${_id}/`);
    }
        async createTokenClient(Token_inf) {
            Token_inf = new Object(JSON.parse(JSON.stringify(Token_inf)));
            return await this.post(`/contacto/`, Token_inf);
        
}}
module.exports = TokenClientAPI;