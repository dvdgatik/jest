const randomStrings = require('../index');



//Poner una serie de Tests dentro de un bloque o suit
describe('probar la funcionalidad de randomStings', () => {
	test('probar la funcionalidad',()=> {
		expect(typeof (randomStrings())).toBe('string');
	});
	test('Comprobar que no existe una ciudad', ()=> {
		expect(randomStrings()).not.toMatch(/Cordoba/);
	});
})


const reverseString2 = str => {
	return new Promise((resolve, reject) => {
		if(!str) {
			reject(Error('error'));
		}
		resolve(str.split('').reverse().join(''));
	});
};

module.exports = randomStrings;
