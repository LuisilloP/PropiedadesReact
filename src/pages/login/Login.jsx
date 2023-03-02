import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginUser, AccessUser } from '../../lib/axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Login = () => {
	const [inputValue, setInputValue] = useState({});
	const navigate = useNavigate();
	useEffect(() => {
		try {
			const usertoken = localStorage.getItem('UserToken');
			const token = JSON.parse(usertoken).jwt;

			const Fetch = async () => {
				const response = await AccessUser(token);
				if (response.status == 200) {
					navigate('/PrincipalPageCrud');
				}
			};
			Fetch();
		} catch {}
	}, []);
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputValue((values) => ({ ...values, [name]: value }));
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const userLogin = await LoginUser(inputValue);
			if (userLogin.status === 200) {
				window.localStorage.setItem(
					'UserToken',
					JSON.stringify(userLogin.data)
				);
				navigate('/PrincipalPageCrud');
			} else if (userLogin.status === 401) {
				console.log('error de credenciales');
			} else {
				console.log('error');
			}
		} catch {}
	};
	return (
		<div className="min-height-t">
			<div className="layer-three spacer"></div>
			<div className="login">
				<form className="form-login" onSubmit={handleSubmit}>
					<h1>Login</h1>
					<TextField
						name="mail"
						onChange={handleChange}
						value={inputValue.mail || ''}
						label="Ingrese Correo"
					/>
					<TextField
						name="password"
						type="password"
						onChange={handleChange}
						value={inputValue.password || ''}
						label="Ingrese contraseña"
					/>

					<Button variant="contained" className=" btn-send-form " type="submit">
						Entrar
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
