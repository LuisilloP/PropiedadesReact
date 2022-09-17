import { useLayoutEffect, useState } from 'react';
import PropiedadPlantilla from '../../components/propiedades/PropiedadTerreno.jsx';

import axios from 'axios';

const ContenedorPropiedades = () => {
	const [propiedades, setPropiedades] = useState([]);
	const rutaMostrarPropiedades = import.meta.env.VITE_MOSTRARPROPIEDADES;

	const getData = async () => {
		const { data } = await axios.post(rutaMostrarPropiedades, {
			tipo: 'terreno-propiedad',
		});
		setPropiedades(data);
	};

	useLayoutEffect(() => {
		getData();
	}, []);
	{
		return (
			<section className="contenedor">
				<div className="contenedor-propiedad">
					{propiedades.map((propiedad) => (
						<PropiedadPlantilla
							key={propiedad._id}
							id={propiedad._id}
							titulo={propiedad.titulo}
							descripcion={propiedad.descripcion}
							url_img={propiedad.url_img}
							ubicacion={propiedad.ubicacion}
							banio={propiedad.banio}
							metros={propiedad.metros}
							habitacion={propiedad.habitacion}
							agua={propiedad.agua}
							luz={propiedad.luz}
						></PropiedadPlantilla>
					))}
				</div>
			</section>
		);
	}
};
export default ContenedorPropiedades;
// _id: "c103964c-2593-45a6-90f9-98f135564b6d"
// ​​
// agua: "no"
// ​​
// descripcion: "1"
// ​​
// luz: "si"
// ​​
// metros: 1
// ​​
// precio: 1
// ​​
// tipo: "terreno"
// ​​
// titulo: "terrenogenial"
// ​​
// ubicacion: "1"
