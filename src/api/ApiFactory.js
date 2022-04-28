import Product from "./factory/Product"

export default ($axios) => ({
    // eslint-disable-next-line
    product: new Product($axios)
})