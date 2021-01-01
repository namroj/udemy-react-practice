import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp.js', () => {

    test('getHeroeById debe retornar un héroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })

    test('getHeroeById debe retornar undefined si un héroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })

    test('getHeroesByOwner debe retornar los héroes por owner', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesData);
    })

    test('getHeroesByOwner debe retornar los héroes por owner validando por length', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes.length).toBe(heroesData.length);
    })

    test('getHeroesByOwner debe retornar un array vacío si el owner no existe', () => {

        const owner = 'xxx';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual([]);
        expect(heroes.length).toBe(heroesData.length);
    })

})