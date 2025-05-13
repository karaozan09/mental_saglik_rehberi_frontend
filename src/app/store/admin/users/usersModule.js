import  httpBase from "@/app/utils/http/http.js"
import Swal from 'sweetalert2'
import { formatChange } from "@/app/utils/format-change/format-change"

const socialMediaModule = {
    namespaced:true,
    state: {
        users:[]
    },
    mutations: {
        setUsers(state,users){
            users.forEach(user => {
                user.img = formatChange.formatUrl(user.img)
            })
            state.users = users
        },
        deleteUsers(state,id){
            state.users = state.users.filter(i => i.id != id)
        }
    },
    actions: {
        async getAll({ commit }){
            const response = await httpBase.get('api/users/get-all');
            commit('setUsers',response.data.users)
        },
        async getByDetail({commit},socialMediaId){
            try{
                const response = await httpBase.get(`api/users/get`,{
                    params:{
                        id:socialMediaId
                    }
                })
                const socialMedia = response.data.user
                return socialMedia;
            }catch(error){
                console.error('Error changing user status:', error);
            }
        },
        async create({dispatch},formData) {
            try{
                const response = await httpBase.post("api/users/create",formData,{
                    'Content-Type': 'multipart/form-data'
                });
                if (response.status === 201) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Başarılı",
                        text:"Kullanıcı başarıyla eklendi.",
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
                const response = await httpBase.post("api/users/update",formData,{
                    'Content-Type': 'multipart/form-data'
                });
                if (response.status === 200) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Başarılı",
                        text:"Kullanıcı başarıyla güncellendi.",
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
                    title: 'Kullanıcıyı silmek istediğinize emin misiniz?',
                    text: "Bu işlemi geri alamazsınız!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Sil',
                    cancelButtonText: 'İptal et'
                });
        

                if (result.isConfirmed) {
                    const response = await httpBase.post("api/users/delete", {
                        id: socialMediaId
                    });
                    if (response.status === 200) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Başarılı",
                            text: "Kullanıcı başarıyla silindi.",
                            showConfirmButton: false,
                            timer: 2000
                        });
                        commit('deleteUsers',socialMediaId);
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