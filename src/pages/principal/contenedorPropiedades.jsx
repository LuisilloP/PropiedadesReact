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
				<h1 className="text-aling-center">Propiedades</h1>
				<div className="contenedor-propiedad">
					{propiedades.map((propiedad, index) => {
						if (index <= 2) {
							//maximo de propiedades a mostrar
							return (
								<PropiedadPlantilla
									key={propiedad._id}
									id={propiedad._id}
									titulo={propiedad.titulo}
									descripcion={propiedad.descripcion}
									url_img={propiedad.url_img}
									ubicacion={propiedad.ubicacion}
									banio={propiedad.banio}
									tipo={propiedad.tipo}
									metros={propiedad.metros}
									habitacion={propiedad.habitacion}
									agua={propiedad.agua}
									luz={propiedad.luz}
									precio={propiedad.precio}
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
