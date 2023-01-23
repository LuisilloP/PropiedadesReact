import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ShowProperties, mostrarPropiedades } from '../../lib/axios';
import { MessageDeleteProperty } from '../../components/SweetBtn';
import { NavLink } from 'react-router-dom';
const Dashboard = () => {
	const [Database, setDatabase] = useState([]);
	const usertoken = localStorage.getItem('UserToken');
	const token = JSON.parse(usertoken).jwt;
	const [cont, setCont] = useState(0);
	useEffect(() => {
		console.log('reload');
		try {
			const response = async () => {
				const data = await ShowProperties(token);
				if (data != undefined) {
					setDatabase(data.data);
				}
			};
			response();
		} catch {}
	}, [cont]);
	const OnDelete = async (event, token, id, tipo) => {
		event.preventDefault();
		let data = [id, tipo];
		const response = await MessageDeleteProperty(token, data);
		if (response == true) {
			window.location.reload(true);
		}
	};

	return (
		<div className="Dashboard">
			<h2>Lista de propiedades</h2>
			<NavLink to="/PrincipalPageCrud/CrearPropiedad">
				<button className="btn-add-property">Nueva Propiedad</button>
			</NavLink>

			<table className="table-crud">
				<thead>
					<tr>
						<th>IMAGE</th>
						<th>NOMBRE</th>
						<th>TIPO</th>
						<th>DIRECCION</th>
						<th>DESCRIPCION</th>
						<th>CARACTERISTICAS</th>
						<th>PRECIO</th>
						<th>ACCIONES</th>
					</tr>
				</thead>
				<tbody>
					{Database.map((value, index) => {
						let dataI = value;
						console.log(value);
						return (
							<tr key={index}>
								<td className="td-img">
									<img
										id={`principal${value.url_img[0]}`}
										src={mostrarPropiedades(
											value.url_img[0],
											`principal${value.url_img[0]}`
										)}
										alt="img_house"
									/>
								</td>
								<td>{value.title}</td>
								<td>{value.type}</td>
								<td>{value.ubication}</td>
								<td>
									{value.description.length >= 100
										? `${value.description.slice(0, 100)}...`
										: value.description}
								</td>
								<td>{value.meters}</td>
								<td>{value.price}</td>
								<td className="td-buttons-action">
									<NavLink
										className="btn-td-table update "
										to={{
											pathname: `/PrincipalPageCrud/ModificarPropiedad`,
										}}
										state={{ data: dataI }}
									>
										Modificar
									</NavLink>
									<button
										className="btn-td-table delete"
										onClick={(event) =>
											OnDelete(event, token, value._id, value.type)
										}
									>
										Eliminar
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
