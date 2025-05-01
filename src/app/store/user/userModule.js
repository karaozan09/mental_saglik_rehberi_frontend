import  httpBase from "@/app/utils/http/http.js"
import { formatChange } from "@/app/utils/format-change/format-change.js";
import Swal from 'sweetalert2'


const userModule = {
    namespaced:true,
    state: {

    },
    mutations: {
       
    },
    actions: {
        async register({dispatch},data) {
            try{                
                const response = await httpBase.post("api/user/create",data);
                if (response.status === 201) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Başarılı",
                        text:"Başarıyla kayıt oldunuz.",
                        showConfirmButton: false,
                        timer: 2000
                      });
                    return true;
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

export default userModule