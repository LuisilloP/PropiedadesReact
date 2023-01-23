const regexString = /^[A-Za-z, ]{1,30}$/;
const regexSiNoFactible = /^(si|no|factible)/;
const regexNumber = /^[0-9]{1,15}$/;
const regexTextNumber = /^[a-zA-Z0-9,. ]*$/;
const ValidatePropertyCreateUp = (data, SetValidateInput) => {
	const {
		title,
		ubication,
		description,
		meters,
		type,
		light,
		water,
		toilets,
		beedrooms,
		images,
		price,
	} = data;
	let response = true;
	const errorText =
		'El elemento solo debe contener Texto, no se aceptan: vacio, numeros y caracteres.';
	const errorTextNumber =
		'El elemento solo debe contener Texto o numeros y caracteres: "," y "."';
	const errorNumber = 'El elemento solo admite numeros mayores que 0';
	if (!regexString.test(title) || title === undefined) {
		SetValidateInput((names) => ({
			...names,
			title: [true, errorText],
		}));
		response = false;
	}
	if (!regexString.test(ubication) || ubication === undefined) {
		SetValidateInput((names) => ({
			...names,
			ubication: [true, errorText],
		}));
		response = false;
	}
	if (!regexTextNumber.test(description) || description === undefined) {
		SetValidateInput((names) => ({
			...names,
			description: [true, errorTextNumber],
		}));
		response = false;
	}
	if (type === 'default') {
		SetValidateInput((names) => ({
			...names,
			type: [true, 'seleccione tipo'],
		}));
		response = false;
	}
	if (!regexNumber.test(meters)) {
		SetValidateInput((names) => ({
			...names,
			meters: [true, errorNumber],
		}));
		response = false;
	}
	if (type == 'casa') {
		if (!regexNumber.test(beedrooms)) {
			SetValidateInput((names) => ({
				...names,
				beedrooms: [true, errorNumber],
			}));
			response = false;
		}
		if (!regexNumber.test(toilets)) {
			SetValidateInput((names) => ({
				...names,
				toilets: [true, errorNumber],
			}));
			response = false;
		}
	}
	if (type == 'terreno') {
		if (!regexSiNoFactible.test(light)) {
			SetValidateInput((names) => ({
				...names,
				light: [true, errorNumber],
			}));
			response = false;
		}
		if (!regexSiNoFactible.test(water)) {
			SetValidateInput((names) => ({
				...names,
				water: [true, errorNumber],
			}));
			response = false;
		}
	}
	if (images === undefined) {
		SetValidateInput((names) => ({
			...names,
			images: [true, 'se necesita al menos una imagen'],
		}));
		response = false;
	}
	if (!regexNumber.test(price)) {
		SetValidateInput((names) => ({
			...names,
			price: [true, errorNumber],
		}));
		response = false;
	}
	return response;
};
export default ValidatePropertyCreateUp;
