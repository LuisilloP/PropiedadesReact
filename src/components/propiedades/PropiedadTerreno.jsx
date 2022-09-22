import React from 'react';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, EffectFade } from 'swiper';

const PropiedadPlantilla = (props) => {
	const {
		id,
		titulo,
		url_img,
		descripcion,
		ubicacion,
		tipo,
		banio,
		habitacion,
		agua,
		luz,
		metros,
		precio,
	} = props;
	const mostrarPropiedades = async (urlKey) => {
		const UrlImages = import.meta.env.VITE_URL_GETIMAGES;
		await axios
			.get(UrlImages + `/${urlKey}`, {
				responseType: 'blob',
			})
			.then((response) => {
				let idImg = document.getElementById(urlKey);
				let imgUrl = URL.createObjectURL(response.data);
				idImg.src = imgUrl;
			});
	};
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);
	return (
		<div className="propiedad">
			<div className="hidden">
				<input type="text" className="idPropiedad" defaultValue={id} />
			</div>
			<Swiper
				cssMode={true}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Mousewheel, Keyboard, EffectFade]}
				//effect="fade"
				className="mySwiper"
				navigation={true}
			>
				{url_img.map((img) => (
					<SwiperSlide key={img}>
						<img id={img} src={mostrarPropiedades(img)} alt="img_house" />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="informacion-propiedad">
				<div className="titulo-propiedad">
					<h3>{titulo}</h3>
					<p>{ubicacion}</p>
					<p className="descripcion-propiedad">
						{descripcion.length >= 185
							? `${descripcion.slice(0, 180)}...`
							: descripcion}
					</p>
				</div>

				<div className="iconos-precio-propiead">
					<div className="iconos-propiedad">
						<img
							className="icono-propiedad"
							src={
								tipo == 'propiedad'
									? '../../assets/iconos/dormitorioCyT.png'
									: '../../assets/iconos/luzCyT.png'
							}
						/>
						<p>{tipo == 'propiedad' ? habitacion : luz}</p>
						<img
							className="icono-propiedad"
							src={
								tipo == 'propiedad'
									? '../../assets/iconos/banosCyT.png'
									: '../../assets/iconos/aguaCyT.png'
							}
						/>
						<p>{tipo == 'propiedad' ? banio : agua}</p>
						<img
							className="icono-propiedad"
							src="../../assets/iconos/metrosCyT.png"
						/>
						<p>
							{metros}m<sup>2</sup>
						</p>
					</div>
					<div className="precio-propiedad">
						<p>Valor: ${precio.toLocaleString()}</p>
						<button className="btn-contactoDirecto">Contacto directo</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PropiedadPlantilla;
