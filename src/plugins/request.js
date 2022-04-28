import ApiFactory from "../api/ApiFactory"


export default ({ $axios }, inject) => {
    inject('api', ApiFactory($axios))
}