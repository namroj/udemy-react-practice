import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from "../../CounterApp";

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar el <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto/inicial 100', () => {
        const wrapper = shallow(<CounterApp value={100} />);
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');
    });

    test('Debe incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
    });

    test('Debe incrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');
    });

    test('Debe reiniciar valor por defecto con el botón reset', () => {
        const wrapper = shallow(<CounterApp value={25} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('25');
    });
});
