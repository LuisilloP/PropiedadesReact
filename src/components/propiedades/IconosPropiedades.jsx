import React from 'react';
import Icon_Water from '../../../public/iconos/aguaCyT.png';
import Icon_Banio from '../../../public/iconos/banosCyT.png';
import Icon_Light from '../../../public/iconos/luzCyT.png';
import Icon_Beedroom from '../../../public/iconos/dormitorioCyT.png';
import Icon_meters from '../../../public/iconos/metrosCyT.png';
const IconosPropiedades = ({ tipo, agua, luz, metros, banio, habitacion }) => {
	return (
		<div className="iconos-precio-propiead">
			<div className="iconos-propiedad">
				<div className="ico-cant">
					<img
						className="icono-propiedad"
						src={tipo == 'casa' ? Icon_Beedroom : Icon_Light}
					/>
					<p>{tipo == 'casa' ? habitacion : luz}</p>
				</div>
				<div className="ico-cant">
					<img
						className="icono-propiedad"
						src={tipo == 'casa' ? Icon_Banio : Icon_Water}
					/>
					<p>{tipo == 'casa' ? banio : agua}</p>
				</div>
				<div className="ico-cant">
					<img className="icono-propiedad" src={Icon_meters} />
					<p>
						{metros}m<sup>2</sup>
					</p>
				</div>
			</div>
		</div>
	);
};

export default IconosPropiedades;
