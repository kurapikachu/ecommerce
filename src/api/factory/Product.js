import BaseModel from "../BaseModel"

export default class Product extends BaseModel {
    getResource() {
        return '/products'
    }

    getAllProducts() {
        return this.$request.get(this.getResource())
    }
}