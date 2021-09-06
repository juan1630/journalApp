import { fileUploas } from "../../../helpers/fileUpload";

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

    });

    test('Debe de retornar un error', async () => {


        const file = new File([], 'foto.jpg');
        // console.log(file);
        const url = await fileUploas(file);
         console.log(url)

        expect( url).toBe(null);

    });

})
