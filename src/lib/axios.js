import axios from 'axios';
import { v4 as uuid } from 'uuid';
export const mostrarPropiedades = async (urlKey, UrlGetId) => {
	const UrlImages = import.meta.env.VITE_URL_GETIMAGES;
	await axios
		.get(UrlImages + `/${urlKey}`, {
			responseType: 'blob',
		})
		.then((response) => {
			let idImg = document.getElementById(UrlGetId);
			let imgUrl = URL.createObjectURL(response.data);
			idImg.src = imgUrl;
		})
		.catch();
};
export const LoginUser = async (inputValue) => {
	let response = await axios
		.post('http://localhost:3000/user/login', inputValue)
		.catch((error) => {
			return error.response;
		});
	return response;
};
export const AccessUser = async (token) => {
	let response = await axios
		.get('http://localhost:3000/user/perfil', {
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((error) => {
			return error.response;
		});
	return response;
};
export const ShowProperties = async (token) => {
	let response = axios
		.post(
			'http://localhost:3000/propiedad/mostrarpropiedades',
			{ tipo: 'terreno-propiedad' },
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		)
		.catch((error) => {
			return error.response;
		});
	return response;
};
export const CreateProperties = async (token, formData, type) => {
	const unique_id = uuid();
	formData.append('_id', unique_id);
	const response = await axios
		.post(
			`http://localhost:3000/propiedad/${
				type == 'casa' ? 'crearpropiedad' : 'crearterreno'
			}`,
			formData,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'multipart/form-data',
				},
			}
		)
		.catch((error) => console.error(error));
	return response;
};
export const UpdateProperties = async (token, formData, type) => {
	const response = await axios
		.put(
			`http://localhost:3000/propiedad/${
				type == 'casa' ? 'actualizarpropiedad' : 'actualizarterreno'
			}`,
			formData,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'multipart/form-data',
				},
			}
		)
		.catch((error) => console.log(error));
	return response;
};
export const DeleteProperties = async (token, data) => {
	const [id_delete, type] = data;
	console.log(type);
	const response = await axios
		.delete('http://localhost:3000/propiedad/borrarpropiedadterreno', {
			data: { _id: id_delete, type: type },
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((error) => {
			console.error(error);
		});
	return response;
};
