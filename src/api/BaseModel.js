export default class BaseModel {
    $request = null
    constructor($axios) {
        this.$request = $axios
    }

    getResource() {
        return ''
    }
}