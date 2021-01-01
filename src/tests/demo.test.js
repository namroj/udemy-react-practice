describe('Pruebas en el archivo demo.test.js', () => {

    test('deben de ser iguales los strings', () => {

        // 1. inicialización
        const mensaje = 'Hola Mundo';

        // 2. estímulo
        const mensaje2 = `Hola Mundo`;

        // 3. observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
});
