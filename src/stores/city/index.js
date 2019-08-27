const state = {
    name: '北京',
    id: 1
};

const actions = {

}

const mutations = {
    CITY_INFO(state, payload) {
        state.name = payload.name;
        state.id = payload.id;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}