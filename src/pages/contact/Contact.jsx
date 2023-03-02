import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
	const pruebaMsg = (event) => {
		event.preventDefault();
		alert('esto es una prueba');
	};
	return (
		<div className="min-height-t">
			<div className="layer-one spacer"></div>
			<div className="contact-page">
				<h1>Contactanos</h1>
				<form className="form-contact" onSubmit={(event) => pruebaMsg(event)}>
					<div className="input-name-phone">
						<TextField
							fullWidth
							helperText="Ingresa tu nombre"
							id="demo-helper-text-misaligned"
							label="Nombre"
						/>

						<TextField
							fullWidth
							helperText="Opcional"
							id="demo-helper-text-misaligned"
							label="Telefono"
						/>
					</div>
					<TextField
						fullWidth
						helperText="Ej: correo@correo.com"
						id="demo-helper-text-misaligned"
						label="Correo"
					/>
					<TextField
						fullWidth
						multiline
						rows={4}
						helperText="max 100 caracteres"
						id="demo-helper-text-misaligned"
						label="Mensaje"
					/>
					<Button variant="contained" className=" btn-send-form " type="submit">
						Enviar
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
