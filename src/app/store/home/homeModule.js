import  httpBase from "@/app/utils/http/http.js"
import { formatChange } from "@/app/utils/format-change/format-change"

const homeModule = {
    namespaced:true,
    state: {
        settings:[],
        contact:[],
        staff:[],
        social_media:[],
        logo: ''
    },
    mutations: {
        setSettings(state,data){
            data.home_img = formatChange.formatUrl(data.home_img)
            data.aim_img = formatChange.formatUrl(data.aim_img)
            data.purpose_img = formatChange.formatUrl(data.purpose_img)
            data.logo = formatChange.formatUrl(data.logo)
            data.home_text = data.home_text || ''
            data.aim_text = data.aim_text || ''
            data.footer_top_text = data.footer_top_text || ''
            data.footer_bottom_text = data.footer_bottom_text || ''
            state.settings = data

        },
        setContact(state,data){
            data.address_1 = data.address_1 || ''
            data.address_2 = data.address_2 || ''
            state.contact = data
        },

        setLogo(state,data){
            data = formatChange.formatUrl(data)
            state.logo = data
        },

        setStaff(state,data){
            data.forEach(i => {
                i.img = formatChange.formatUrl(i.img)
            })
            state.staff = data
        },

        setSocialMedia(state,data){
            state.social_media = data
        }
    },
    actions: {
        async getSettings({ commit }){
            const response = await httpBase.get('api/home/get-settings');
            commit('setSettings',response.data.settings)
            commit('setContact',response.data.contact)
        },

        async getStaff({ commit }){
            const response = await httpBase.get('api/home/get-staff');
            commit('setStaff',response.data.staff)
        },

        async getSocialMedia({ commit }){
            const response = await httpBase.get('api/home/get-social-media');
            commit('setSocialMedia',response.data.social_media)
        },

        async getLogo({ commit }){
            const response = await httpBase.get('api/home/get-logo');
            commit('setLogo',response.data.logo)
        },

    },
    getters: {
        
    }
}

export default homeModule