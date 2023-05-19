const vehiclesFieldsParse = {

	"cargo_capacity": "capacidad_de_carga",
	"consumables": "consumibles",
	"cost_in_credits": "costo_en_créditos",
	"created": "creado",
	"crew": "tripulación",
	"edited": "editado",
	"length": "longitud",
	"manufacturer": "fabricante",
	"max_atmosphering_speed": "velocidad_atmosférica_máxima",
	"model": "modelo",
	"name": "nombre",
	"passengers": "pasajeros",
	"pilots": "pilotos",
	"films": "peliculas"
};

const vehiclesParse = (vehicles) => {

	return Object.keys(vehicles).reduce((obj, field) => {

		const parse_field = vehiclesFieldsParse[field];
		obj[parse_field] = vehicles[field];
		return obj;
	}, {});
};

exports.vehiclesParse = vehiclesParse;