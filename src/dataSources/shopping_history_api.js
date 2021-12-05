const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
    class ShoppingHistoryAPI extends RESTDataSource {
        
        constructor() {
            super();
            this.baseURL = serverConfig.auth_shopping_api_url;
    }
        async getShoppingHistorybyUser(userId) {
            return await this.get(`/shoppinghistory/user/${userId}/`);
    }
        async getShoppingHistorybyId_Purchase(Id_Purchase) {
            return await this.get(`/shoppinghistory/${Id_Purchase}/`);
    }
        async createshoppingRegister(Shoppingregister) {
            Shoppingregister = new Object(JSON.parse(JSON.stringify(Purchase)));
            return await this.post(`/shoppinghistory/`, Purchase);
        
}}
module.exports = ShoppingHistoryAPI;