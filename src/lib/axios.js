import axios from 'axios';
import { v4 as uuid } from 'uuid';
const URLAPI = import.meta.env.VITE_URLAPI;
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
		.post(`${URLAPI}/user/login`, inputValue)
		.catch((error) => {
			return error.response;
		});
	return response;
};
export const AccessUser = async (token) => {
	let response = await axios
		.get(`${URLAPI}/user/perfil`, {
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
			`${URLAPI}/propiedad/mostrarpropiedades`,
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
			`${URLAPI}/propiedad/${
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
			`${URLAPI}/propiedad/${
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
		.delete(`${URLAPI}/propiedad/borrarpropiedadterreno`, {
			data: { _id: id_delete, type: type },
			headers: { Authorization: `Bearer ${token}` },
		})
		.catch((error) => {
			console.error(error);
		});
	return response;
};
