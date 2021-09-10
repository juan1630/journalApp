
import  cloudinary from 'cloudinary';

import { fileUploas } from "../../../helpers/fileUpload";



cloudinary.config({ 
    cloud_name: 'sample', 
    api_key: '846329145778116', 
    api_secret: 'BCsMaUzwHAw0TYxS1GSpujj2j0g',
    secure: true
  });


describe('Pruebas en el fileupload', () => {
    
    test('Debe cargar un archivo y retornar el URL', async () => {

        const response  =  await fetch('https://cdn.cloudflare.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg');

        // converitmos la imagen de la url a un archivo
        const blob = await response.blob();

        const file = new File([blob], 'foto.jpg');
        // console.log(file);
        const url = await fileUploas(file);
        // console.log(url)

        expect( typeof url).toBe('string');

        // borra la imagen por el id
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1].replace('.jpg', '');
        
         cloudinary.v2.api.delete_resources( imageId , {},()=> {
            //  console.log('Consulta jejej');
            //  done();
        }, 20000);

        
    });

    test('Debe de retornar un error', async () => {


        const file = new File([], 'foto.jpg');
        // console.log(file);
        const url = await fileUploas(file);
        //  console.log(url)

        expect( url).toBe(null);

    });

})
