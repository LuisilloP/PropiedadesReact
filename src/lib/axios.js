import axios from 'axios';
export const mostrarPropiedades = async (urlKey) => {
	const UrlImages = import.meta.env.VITE_URL_GETIMAGES;

	const { data } = axios.get(UrlImages + `/${urlKey}`);
	return data;
};
