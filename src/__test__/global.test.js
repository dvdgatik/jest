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