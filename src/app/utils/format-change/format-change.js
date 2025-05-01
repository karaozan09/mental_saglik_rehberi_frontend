
export class FormatChange {

    formatDate(dateString) {
        const date = new Date(dateString);
        
        const day = String(date.getDate()).padStart(2, '0'); // Gün (2 haneli)
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Ay (2 haneli, Ocak ayı 0'dan başladığı için +1 eklenir)
        const year = date.getFullYear(); // Yıl
        
        return `${day}/${month}/${year}`;
    }

    formatUrl(url){
        return url ? import.meta.env.VITE_BASE_URL + url.slice(0) : ''
    }

    formatUrlArr(urls){
        urls = urls ? urls.map(url => import.meta.env.VITE_BASE_URL + url) : []
        return urls
    }

    //Fotoğraflar sayfasındaki resimlerin formatını ve yazılarını ayarlıyoruz
    //captionArr de veri içerisindeki text olacak alanaların isimlerini alıyoruz
    getImageObject(photos,arr,captionArr){
        let captionText ='';
        const captionArrLength = captionArr.length
        
        photos.forEach((photo) => {
            captionArr.forEach((text,index) => {
                captionText += ` ${captionArrLength > 1 && index > 0 ? '-' : ''} ${photo[text]}`
            })
            arr.push(
              {
                id: photo.id,
                images : photo.photos.map(img => {
                    return{
                        src: img,
                        caption: captionText,
                        type:'image'
                        
                    }
                }
            )
          })
          captionText = '';
        })
        return arr
    }
  }

  const formatChange = new FormatChange();
  
  export { formatChange };