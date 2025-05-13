import  httpBase from "@/app/utils/http/http.js"

const dashboardModule = {
    namespaced:true,
    state: {
        statistics:[]
    },
    mutations: {
        setStatistics(state,statistics){
            state.statistics = statistics
        },
    },
    actions: {
        async getStatistics({ commit }){
            const response = await httpBase.get('api/dashboard/statistics');
            commit('setStatistics',response.data)
        },
    },
    getters: {
        
    }
}

export default dashboardModule