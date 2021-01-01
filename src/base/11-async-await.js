

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {
        const apiKey = 'a6gn2SGDDwcxAX3N4XEWhwClj4Vx6s9h';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;
    } catch (error) {
        // manejo del error
        // console.error(error)
        return error;
    }
}
