


export const fileUploas =  async (file) => {

    const urlCloud = "https://api.cloudinary.com/v1_1/juanpatron1630/upload";
    // return de la url de la imagen 

    const formData = new FormData();

    formData.append('upload_preset', 'qvwslqtp');
    formData.append('file', file);


    try {
        // hacemos la peticion post y le configramos el tipo de petiocn que se hace
        const resp = await fetch( urlCloud,  {
            method : 'POST',
            body: formData,
        });


        if( resp.ok ) {
            // convertimos a json la respuesta
            const cloudResp = await resp.json();
            // retornamos el url para actualizarlos en firebase
            return cloudResp.secure_url;
        }else {
            throw await resp.json();
        }

    } catch (error) {
        console.log(error);
        throw error;
    }
}


