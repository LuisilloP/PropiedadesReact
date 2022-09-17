import swiper from '../../lib/swiper.js';
const MostrarImagenes = () => {
	return (
		<div key={img} className="swiper-slide">
			<div>
				<img
					id={img.slice(0, -4)}
					src={mostrarPropiedades(img)}
					alt="img_house"
				/>
			</div>
		</div>
	);
};
export default MostrarImagenes;
