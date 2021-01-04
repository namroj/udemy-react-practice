import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <Primera App />', () => {

    // test('debe mostrar el mensaje "Hola, Soy Goku"', () => {

    //     const saludo = 'Hola, Soy Goku';

    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect(getByText(saludo)).toBeInTheDocument();

    // })

    test('debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, Soy Goku!';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot( );
    });

    test('debe mostrar el subtítulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku!';
        const subtitulo = 'Subtítulo de prueba';
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
    });

});
