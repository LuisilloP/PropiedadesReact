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
import layerTwo from '../../../public/top-header-property.svg';
import { mostrarPropiedades } from '../../lib/axios';
import { useState } from 'react';
import IconosPropiedades from '../../components/propiedades/IconosPropiedades';
const PropiedadSelected = () => {
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
		<>
			<div className="layer-one spacer">
				<img src={layerTwo}></img>
			</div>
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
							<IconosPropiedades
								tipo={tipo}
								agua={agua}
								luz={luz}
								metros={metros}
								banio={banio}
								habitacion={habitacion}
							></IconosPropiedades>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PropiedadSelected;
