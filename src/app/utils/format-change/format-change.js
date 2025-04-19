
export class FormatChange {

    formatDate(dateString) {
        const date = new Date(dateString);
        
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    formatImage(image){
        return import.meta.env.VITE_BASE_URL + image.slice(1)
    }
    
  }


  
  const formatChange = new FormatChange();
  
  export { formatChange };