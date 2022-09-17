import propiedadSpects from './Propiedad.jsx';
import axios from 'axios';

import MostrarImagenes from './mostrarImagenSwiper.jsx';
const mostrarPropiedades = async (urlKey) => {
	const UrlImages = import.meta.env.VITE_URL_GETIMAGES;
	console.log(UrlImages);
	await axios
		.get(UrlImages + `/${urlKey}`, {
			responseType: 'blob',
		})
		.then((response) => {
			console.log(response.data);
			let id = document.getElementById(urlKey.slice(0, -4));
			let imgUrl = URL.createObjectURL(response.data);
			id.src = imgUrl;
		});
};
const PropiedadPlantilla = (props) => {
	const { id, titulo, url_img, descripcion, ubicacion } = props;

	return (
		<div className="propiedad">
			<div className="hidden">
				<input type="text" className="idPropiedad" defaultValue={id} />
			</div>
			<div className="swiper">
				<div className="swiper-wrapper">
					{url_img.map((img) => {
						<MostrarImagenes
							key={img.slice(0, -4)}
							img={img}
						></MostrarImagenes>;
					})}
				</div>

				<div className="swiper-pagination"></div>
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</div>
			<div className="informacion-propiedad">
				<div className="titulo-propiedad">
					<h3>{titulo}</h3>
					<p>{ubicacion}</p>
					<p>{descripcion}</p>
				</div>
				<div className="iconos-precio-propiead">
					<div className="iconos-propiedad">
						<img
							className="icono-propiedad"
							src="/img/icons/dormitorioCyT.png"
						/>
						<p>4</p>
						<img className="icono-propiedad" src="/img/icons/banosCyT.png" />
						<p>2</p>
						<img className="icono-propiedad" src="/img/icons/metrosCyT.png" />
						<p>
							240m<sup>2</sup>
						</p>
					</div>
					<div className="precio-propiedad">
						<p>Valor $20.000.000</p>
						<button className="btn-contactoDirecto">Contacto directo</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PropiedadPlantilla;
