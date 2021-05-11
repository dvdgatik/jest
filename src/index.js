const cities = ['Ciudad de México','Bogota','Lima', 'Buenos Aires','Guadalajara'];

//Math.floor maximo valor
const randomString = () => {
	const string = cities[Math.floor(Math.random() * cities.length)];
	return string;
}



module.exports = randomString;