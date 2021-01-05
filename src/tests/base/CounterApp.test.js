import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from "../../CounterApp";

describe('Pruebas en CounterApp', () => {
    test('Debe renderizar <CounterApp /> correctamente', () => {
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto/inicial 100', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={100} />);
        const defaultValue = parseInt(wrapper.find('h2').text());

        expect(defaultValue).toBe(value);
    });
});
