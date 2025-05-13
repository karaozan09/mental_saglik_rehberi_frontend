import  httpBase from "@/app/utils/http/http.js"
import Swal from 'sweetalert2'
import { formatChange } from "@/app/utils/format-change/format-change"

const socialMediaModule = {
    namespaced:true,
    state: {
        settings:[],
        contact:[],
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
        }
    },
    actions: {
        async getAll({ commit }){
            const response = await httpBase.get('api/settings/get-all');
            commit('setSettings',response.data.settings)
            commit('setContact',response.data.contact)
        },

        async getLogo({ commit }){
            const response = await httpBase.get('api/settings/get-logo');
            commit('setLogo',response.data.logo)
        },

        async logo({dispatch},formData) {
            try{
                const response = await httpBase.post("api/settings/logo",formData,{
                    'Content-Type': 'multipart/form-data'
                });
                if (response.status === 201) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Başarılı",
                        text:"Başarıyla Güncellendi.",
                        showConfirmButton: false,
                        timer: 2000
                      });
                    dispatch('getLogo');
                }

                
            }catch(error){
                const errors = error.response.data.errors;
                let errorMessage ="";

                for (const key in errors) {
                    errorMessage += `<div class='fw-semibold'>${errors[key]}</div>`;
                  }
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Hata",
                    html:errorMessage,
                    confirmButtonText: "Tamam",
                });
            }
        },

        async homeProcess({dispatch},formData) {
            try{
                const response = await httpBase.post("api/settings/home-process",formData,{
                    'Content-Type': 'multipart/form-data'
                });
                if (response.status === 201) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Başarılı",
                        text:"Başarıyla Güncellendi.",
                        showConfirmButton: false,
                        timer: 2000
                      });
                    dispatch('getAll');
                }

                
            }catch(error){
                const errors = error.response.data.errors;
                let errorMessage ="";

                for (const key in errors) {
                    errorMessage += `<div class='fw-semibold'>${errors[key]}</div>`;
                  }
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Hata",
                    html:errorMessage,
                    confirmButtonText: "Tamam",
                });
            }
        },

        async contact({dispatch},formData) {
            try{
                const response = await httpBase.post("api/settings/contact",formData,{
                    'Content-Type': 'multipart/form-data'
                });
                if (response.status === 201) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Başarılı",
                        text:"Başarıyla Güncellendi.",
                        showConfirmButton: false,
                        timer: 2000
                      });
                    dispatch('getAll');
                }

                
            }catch(error){
                const errors = error.response.data.errors;
                let errorMessage ="";

                for (const key in errors) {
                    errorMessage += `<div class='fw-semibold'>${errors[key]}</div>`;
                  }
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Hata",
                    html:errorMessage,
                    confirmButtonText: "Tamam",
                });
            }
        },

        async contactEmail({dispatch},formData) {
            try{
                const response = await httpBase.post("api/settings/contact-email",formData,{
                    'Content-Type': 'multipart/form-data'
                });
                if (response.status === 201) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Başarılı",
                        text:"Başarıyla Güncellendi.",
                        showConfirmButton: false,
                        timer: 2000
                      });
                    dispatch('getAll');
                }

                
            }catch(error){
                const errors = error.response.data.errors;
                let errorMessage ="";

                for (const key in errors) {
                    errorMessage += `<div class='fw-semibold'>${errors[key]}</div>`;
                  }
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Hata",
                    html:errorMessage,
                    confirmButtonText: "Tamam",
                });
            }
        },

        async mapLocation({dispatch},formData) {
            try{
                const response = await httpBase.post("api/settings/map-location",formData,{
                    'Content-Type': 'multipart/form-data'
                });
                if (response.status === 201) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Başarılı",
                        text:"Başarıyla Güncellendi.",
                        showConfirmButton: false,
                        timer: 2000
                      });
                    dispatch('getAll');
                }

                
            }catch(error){
                const errors = error.response.data.errors;
                let errorMessage ="";

                for (const key in errors) {
                    errorMessage += `<div class='fw-semibold'>${errors[key]}</div>`;
                  }
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Hata",
                    html:errorMessage,
                    confirmButtonText: "Tamam",
                });
            }
        },

        async footer({dispatch},formData) {
            try{
                const response = await httpBase.post("api/settings/footer",formData,{
                    'Content-Type': 'multipart/form-data'
                });
                if (response.status === 201) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Başarılı",
                        text:"Başarıyla Güncellendi.",
                        showConfirmButton: false,
                        timer: 2000
                      });
                    dispatch('getAll');
                }

                
            }catch(error){
                const errors = error.response.data.errors;
                let errorMessage ="";

                for (const key in errors) {
                    errorMessage += `<div class='fw-semibold'>${errors[key]}</div>`;
                  }
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Hata",
                    html:errorMessage,
                    confirmButtonText: "Tamam",
                });
            }
        },

    },
    getters: {
        
    }
}

export default socialMediaModule