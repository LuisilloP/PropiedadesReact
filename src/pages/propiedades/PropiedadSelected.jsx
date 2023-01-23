import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	Navigation,
	Mousewheel,
	Keyboard,
	EffectFade,
	FreeMode,
	Thumbs,
} from 'swiper';
import { mostrarPropiedades } from '../../lib/axios';
import { useState } from 'react';
const PropiedadSelected = () => {
	// const { idPro } = useParams();
	// console.log(idPro);

	const stateParamsVal = useLocation().state;
	if (stateParamsVal == null) {
		return null;
	}
	window.scrollTo(0, 0);
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
	} = stateParamsVal;
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<div className="contenedor">
			<div className="cont-selected">
				<div className="cont-img-selected">
					<Swiper
						// bloquea movimiento en pc cssMode={true}
						spaceBetween={10}
						navigation={true}
						thumbs={{ swiper: thumbsSwiper }}
						modules={[FreeMode, Navigation, Thumbs]}
						className="mySwiperSelect"
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
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={2}
						slidesPerView={2}
						freeMode={true}
						navigation={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						direction="vertical"
						className="mySwiperVertical"
					>
						{url_img.map((img) => (
							<SwiperSlide key={img}>
								<img
									id={`second${img}`}
									src={mostrarPropiedades(img, `second${img}`)}
									alt="img_house"
									className="secondVertical"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div>
					<div className="select-informacion">
						<div className="titulo-propiedad">
							<h2>{titulo}</h2>
							<p>{ubicacion}</p>
							<h3>Descripcion</h3>
							<hr className="hr-description"></hr>
							<p className="descripcion-propiedad-select">{descripcion}</p>
						</div>
						<div className="precio-propiedad">
							<p>Valor: ${precio.toLocaleString()}</p>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropiedadSelected;
