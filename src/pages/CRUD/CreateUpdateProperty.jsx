import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FormProperty from './form/FormProperty';
import { AccessUser } from '../../lib/axios';

const CreateProperty = () => {
	const location = useLocation();
	const actualUrl = window.location.href;
	let strings = actualUrl.replaceAll('/', ' ');
	let url_name = strings.split(' ').slice(-1);
	let action = url_name == 'CrearPropiedad' ? 'Crear' : 'Modificar';
	const [RenderData, SetRenderData] = useState(<div></div>);
	const navigate = useNavigate();
	useEffect(() => {
		try {
			const usertoken = localStorage.getItem('UserToken');
			const token = JSON.parse(usertoken).jwt;

			const Fetch = async () => {
				const response = await AccessUser(token);

				if (response.status == 200) {
					SetRenderData(
						<div>
							<h1 className="title-create-update">{action} Propiedad</h1>
							<FormProperty
								ActionCU={action}
								dataUpdate={location.state == null ? null : location.state.data}
							/>
						</div>
					);
				}
			};
			Fetch();
		} catch {
			navigate('/LoginAdmin');
		}
	}, []);
	return (
		<div className="min-height-t">
			<div className="spacer layer-one"></div>
			{RenderData}
		</div>
	);
};

export default CreateProperty;
