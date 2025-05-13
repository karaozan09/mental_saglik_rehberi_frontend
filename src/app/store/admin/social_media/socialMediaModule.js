import  httpBase from "@/app/utils/http/http.js"
import Swal from 'sweetalert2'

const socialMediaModule = {
    namespaced:true,
    state: {
        socialMedias:[]
    },
    mutations: {
        setSocialMedia(state,socialMedias){
            state.socialMedias = socialMedias
        },
        deleteSocialMedia(state,id){
            state.socialMedias = state.socialMedias.filter(i => i.id != id)
        }
    },
    actions: {
        async getAll({ commit }){
            const response = await httpBase.get('api/social-media/get-all');
            commit('setSocialMedia',response.data.social_medias)
        },
        async getByDetail({commit},socialMediaId){
            try{
                const response = await httpBase.get(`api/social-media/get`,{
                    params:{
                        id:socialMediaId
                    }
                })
                const socialMedia = response.data.social_media
                return socialMedia;
            }catch(error){
                console.error('Error changing user status:', error);
            }
        },
        async create({dispatch},formData) {
            try{
                const response = await httpBase.post("api/social-media/create",formData,{
                    'Content-Type': 'multipart/form-data'
                });
                if (response.status === 201) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Başarılı",
                        text:"Sosyal medya adresi başarıyla eklendi.",
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
        async update({dispatch},formData) {
            try{
                const response = await httpBase.post("api/social-media/update",formData,{
                    'Content-Type': 'multipart/form-data'
                });
                if (response.status === 200) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Başarılı",
                        text:"Sosyal medya adresi başarıyla güncellendi.",
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
        async delete({ commit }, socialMediaId) {
            try {
                // Kullanıcıdan onay iste
                const result = await Swal.fire({
                    title: 'Sosyal medya adresi silmek istediğinize emin misiniz?',
                    text: "Bu işlemi geri alamazsınız!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Sil',
                    cancelButtonText: 'İptal et'
                });
        

                if (result.isConfirmed) {
                    const response = await httpBase.post("api/social-media/delete", {
                        id: socialMediaId
                    });
                    if (response.status === 200) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Başarılı",
                            text: "Sosyal medya adresi başarıyla silindi.",
                            showConfirmButton: false,
                            timer: 2000
                        });
                        commit('deleteSocialMedia',socialMediaId);
                    }
                }
                
            } catch (error) {
                const errors = error.response?.data?.errors || {};
                let errorMessage = "";
        
                for (const key in errors) {
                    errorMessage += `<div class='fw-semibold'>${errors[key]}</div>`;
                }
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Hata",
                    html: errorMessage,
                    confirmButtonText: "Tamam",
                });
            }
        },
    },
    getters: {
        
    }
}

export default socialMediaModule