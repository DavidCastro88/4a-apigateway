const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
    class TouristPackageAPI extends RESTDataSource {
        
        constructor() {
            super();
            this.baseURL = serverConfig.auth_shopping_api_url;
    }
        async getTouristPackgebyId(Id_tourist_package) {
            return await this.get(`/tourist_package/${Id_tourist_package}/`);
    }
        
        async createTouristPackage(Tourist_Package) {
            Tourist_Package = new Object(JSON.parse(JSON.stringify(Tourist_Package)));
            return await this.post(`/tourist_package/`, Tourist_Package);
        
}}
module.exports = TouristPackageAPI;