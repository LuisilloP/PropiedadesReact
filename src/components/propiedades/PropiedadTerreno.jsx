import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, EffectFade, Autoplay } from 'swiper';
import { NavLink } from '../navLink';
import { mostrarPropiedades } from '../../lib/axios.js';
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

	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);
	return (
		<div className="propiedad">
			<div className="hidden">
				<input type="text" className="idPropiedad" defaultValue={id} />
			</div>
			<Swiper
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Mousewheel, Keyboard, EffectFade, Autoplay]}
				className="mySwiper"
				navigation={true}
				autoplay={{
					delay: 2500,
				}}
			>
				{url_img.map((img) => (
					<SwiperSlide key={img}>
						<img
							id={`principal${img}`}
							src={mostrarPropiedades(img, `principal${img}`)}
							alt="img_house"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<NavLink to={`/PropiedadSelected/${id}`} state={props}>
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
							<div className="ico-cant">
								<img
									className="icono-propiedad"
									src={
										tipo == 'casa'
											? '../../assets/iconos/dormitorioCyT.png'
											: '../../assets/iconos/luzCyT.png'
									}
								/>
								<p>{tipo == 'casa' ? habitacion : luz}</p>
							</div>
							<div className="ico-cant">
								<img
									className="icono-propiedad"
									src={
										tipo == 'casa'
											? '../../assets/iconos/banosCyT.png'
											: '../../assets/iconos/aguaCyT.png'
									}
								/>
								<p>{tipo == 'casa' ? banio : agua}</p>
							</div>
							<div className="ico-cant">
								<img
									className="icono-propiedad"
									src="../../assets/iconos/metrosCyT.png"
								/>
								<p>
									{metros}m<sup>2</sup>
								</p>
							</div>
						</div>
						<div className="precio-propiedad">
							<p>Valor: ${precio.toLocaleString()}</p>
							<button className="btn-contactoDirecto">Contacto directo</button>
						</div>
					</div>
				</div>
			</NavLink>
		</div>
	);
};
export default PropiedadPlantilla;
