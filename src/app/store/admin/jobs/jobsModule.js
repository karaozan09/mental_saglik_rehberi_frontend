import  httpBase from "@/app/utils/http/http.js"
import Swal from 'sweetalert2'

const socialMediaModule = {
    namespaced:true,
    state: {
        jobs:[]
    },
    mutations: {
        setJobs(state,jobs){
            state.jobs = jobs
        },
        deleteJob(state,id){
            state.jobs = state.jobs.filter( s => s.id != id)
        },
    },
    actions: {
        async getAll({ commit }){
            const response = await httpBase.get('api/jobs/get-all');
            commit('setJobs',response.data.jobs)
        },
        async create({dispatch},formData) {
            try{
                const response = await httpBase.post("api/jobs/create",formData,{
                    'Content-Type': 'multipart/form-data'
                });
                if (response.status === 201) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Başarılı",
                        text:"Meslek başarıyla eklendi.",
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
                const response = await httpBase.post("api/jobs/update",formData,{
                    'Content-Type': 'multipart/form-data'
                });
                if (response.status === 200) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Başarılı",
                        text:"Meslek başarıyla güncellendi.",
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
        async delete({ commit }, jobId) {
            try {
                // Kullanıcıdan onay iste
                const result = await Swal.fire({
                    title: 'Mesleği silmek istediğinize emin misiniz?',
                    text: "Bu işlemi geri alamazsınız!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Sil',
                    cancelButtonText: 'İptal et'
                });
        

                if (result.isConfirmed) {
                    const response = await httpBase.post("api/jobs/delete", {
                        id: jobId
                    });
                    if (response.status === 200) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Başarılı",
                            text: "Meslek başarıyla silindi.",
                            showConfirmButton: false,
                            timer: 2000
                        });
                        commit('deleteJob',jobId);
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