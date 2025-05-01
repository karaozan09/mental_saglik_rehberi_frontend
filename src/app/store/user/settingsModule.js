import  httpBase from "@/app/utils/http/http.js"
import { formatChange } from "@/app/utils/format-change/format-change.js";
import Swal from 'sweetalert2';

const settingsModule = {
  state: {
    
  },
  mutations: {
    
  },
  actions: {
    async updateProfil({commit,dispatch},data){
        try{
            const response = await httpBase.post('api/user-settings/update-profil',data,{
                'Content-Type': 'multipart/form-data'
            });

            if (response.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Başarılı",
                    text:"Profil başarıyla güncellendi.",
                    showConfirmButton: false,
                    timer: 2000
                  });
                  commit('setloginUser', response.data.user, { root: true });
            }
        }catch(error){
            const errors = error.response.data.errors;
                let errorMessage ="";
                for (const key in errors) {
                    errors[key].forEach(message => {
                        errorMessage += `<p class='font-medium tracking-wdier mb-2'>${message}</p>`
                    })
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

    async changePassword({dispatch},data){
        try{
            const response = await httpBase.post('api/user-settings/password-change',data)
            if (response.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Başarılı",
                    text:"Şifre başarıyla değiştirildi.",
                    showConfirmButton: false,
                    timer: 2000
                  });
            }
        }catch(error){
            const errors = error.response.data.errors;
                let errorMessage ="";
                for (const key in errors) {
                    errors[key].forEach(message => {
                        errorMessage += `<p class='font-medium tracking-wdier mb-2'>${message}</p>`
                    })
                }
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Hata",
                    html:errorMessage,
                    confirmButtonText: "Tamam",
                });
        }
    }
  },
  getters: {
    
  }
};

export default settingsModule;