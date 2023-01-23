import React from 'react';
import TextField from '@mui/material/TextField';

const Contact = () => {
	return (
		<div className="min-height-t">
			<div className="layer-one spacer"></div>
			<div className="contact-page">
				<h1>Contactanos</h1>
				<form className="form-contact">
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
					<button type="submit" className="btn-send">
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
