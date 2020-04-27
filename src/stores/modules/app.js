
const state = {
    userInfo: { user: 'guest'}
}
const mutations = {
    USER_INFO: (state, info) => {
        state.userInfo = info;
    }
}
const actions = {
    setUserInfo({ commit }, info) {
        commit('USER_INFO', info)
    }
}
export const getter = {
    userInfo: (state) => state.app.userInfo
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
}


