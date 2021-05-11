const text = "Hola Mundo";
const frutas = ['Manzana', 'Melon', 'banana'];

/*
Test String

1Arg: titulo descriptivo de la prueba (debe ser muy detallado)
2arg: funcion anonima

expect: que y con que lo voy a comparar
toMatch: buscar coincidencia en un string delimitar palabra con //}
toContain:  buscar conincidencia en un  array
 */
test('Debe contener un texto', ()=>{
	expect(text).toMatch(/Mundo/);
});

test('Tenemos una babana?', () => {
	expect(frutas).toContain('banana');
});

/*
Test numbers

toBeGreaterThan comparar numero mayor que otro

 */
test('Un valor mayor que otro', () => {
	expect(10).toBeGreaterThan(9)
});

/*
Test booleans
toBeTruthy(): comprobar si es verdadero

 */

test('es Verdadero?', ()=> {
	expect(true).toBeTruthy();
});

/*

 Probar callbacks

*/
//reverse
const reverseString = (str, callback) => {
	callback(str.split('').reverse().join(''))

}

//primero ejecutar el callback y cuando ocurra hacer la prueba
test('Probar un callback', ()=>{
	reverseString('Hola',(str) => {
		expect(str).toBe('aloH');
	});
});


// Promesas

const reverseString2 = str => {
	return new Promise((resolve, reject) => {
		if(!str) {
			reject(Error('error'));
		}
		resolve(str.split('').reverse().join(''));
	});
};

test('Probar una promesa', () => {
	return reverseString2('Hola')
	.then(string => {
		expect(string).toBe('aloH');
	});

});

//Async y Await

test('Probar async/await', async () => {
	const string = await reverseString2('hola');

	expect(string).toBe('aloh');
});

// Trabajar con funciones que se van a ejecutar Antes de cada Prueba o Despues de cada Prueba
//Despues de cada prueba
//
afterEach(() => console.log('Despues de cada prueba'));
afterAll(() => console.log('Despues de todas las pruebas'));

beforeEach(() => console.log('Antes de cada prueba'));
beforeAll(() => console.log('Antes de todas las pruebas'));


