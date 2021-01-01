import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(userTest).toEqual(user);
    })

    test('getUsuarioActivo debe retornar un objeto recibiendo un argumento', () => {
        const nombre = 'namroj';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
})