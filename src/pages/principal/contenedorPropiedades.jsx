import { useEffect, useLayoutEffect, useState } from 'react';
import PropiedadPlantilla from '../../components/propiedades/PropiedadTerreno.jsx';

import axios from 'axios';

const ContenedorPropiedades = (obj) => {
	const { cant } = obj;
	const [propiedades, setPropiedades] = useState([]);
	const rutaMostrarPropiedades = import.meta.env.VITE_MOSTRARPROPIEDADES;
	const usertoken = localStorage.getItem('UserToken');

	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.post(rutaMostrarPropiedades, {
				tipo: 'terreno-propiedad',
			});
			setPropiedades(data);
		};
		getData();
	}, []);
	{
		return (
			<section className="contenedor">
				{/* <h1 className="text-aling-center">Propiedades</h1> */}
				<div className="contenedor-propiedad">
					{propiedades.map((propiedad, index) => {
						//console.log(propiedad.type);
						//MUESTRA 3 YA QUE EL INDEX PARTE EN 0
						if (index <= cant) {
							//maximo de propiedades a mostrar
							return (
								<PropiedadPlantilla
									key={propiedad._id}
									id={propiedad._id}
									titulo={propiedad.title}
									descripcion={propiedad.description}
									url_img={propiedad.url_img}
									ubicacion={propiedad.ubication}
									banio={propiedad.toilets}
									tipo={propiedad.type}
									metros={propiedad.meters}
									habitacion={propiedad.beedrooms}
									agua={propiedad.water}
									luz={propiedad.light}
									precio={propiedad.price}
								></PropiedadPlantilla>
							);
						}
					})}
				</div>
			</section>
		);
	}
};
export default ContenedorPropiedades;
