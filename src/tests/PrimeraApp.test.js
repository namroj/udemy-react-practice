import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <Primera App />', () => {

    test('debe mostrar el mensaje "Hola, Soy Goku"', () => {

        const saludo = 'Hola, Soy Goku';

        const { getByText } = render(<PrimeraApp saludo={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument();

    })

})
