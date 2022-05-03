// State

const menu = [
    { name: 'home', slug: '/home' },
    { name: 'about us', slug: '/about' },
    { name: 'shop', slug: '/shop' },
    { name: 'blog', slug: '/blog' },
    { name: 'contact', slug: '/contact' },
]

const state = () => ({
    menu: []
})

// Actions

const actions = {
    getMenu({ commit }) {
        commit("setMenu", menu)
    }
}

// Mutations

const mutations = {
    setMenu(state, menu) {
        state.menu = menu
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}