import { useEffect } from 'react';
import { AccessUser } from '../../lib/axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './Dashboard';
const PrincipalPageCrud = () => {
	const [RenderData, SetRenderData] = useState(<div></div>);
	const navigate = useNavigate();
	useEffect(() => {
		try {
			const usertoken = localStorage.getItem('UserToken');
			const token = JSON.parse(usertoken).jwt;

			const Fetch = async () => {
				const response = await AccessUser(token);

				if (response.status == 200) {
					SetRenderData(<Dashboard></Dashboard>);
				}
			};
			Fetch();
		} catch {
			navigate('/LoginAdmin');
		}
	}, []);
	return (
		<div className="min-height-t">
			<div className="spacer layer-two"></div>
			{RenderData}
		</div>
	);
};

export default PrincipalPageCrud;
