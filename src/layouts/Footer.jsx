import React from 'react';

const Footer = () => {
	return (
		<div className="Footer-principal">
			<div className="contenedor-footer">
				<div>
					<h1>Logo</h1>
					<div>
						<ul className="ul-footer">
							<li>
								<a href="" className="subrayado">
									Principal
								</a>
							</li>
							<li>
								<a href="" className="subrayado">
									Informacion
								</a>
							</li>
							<li>
								<a href="" className="subrayado">
									Propiedades
								</a>
							</li>

							<li>
								<a href="" className="subrayado">
									Contacto
								</a>
							</li>
						</ul>
						<small>&copy; Copyright 2022, LPA Develloper</small>
					</div>
				</div>

				<div>
					<h1>Nosotros</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur sodio quos perferendis a. Harum recusandae Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Culpa soluta
						praesentium blanditiis quisquam a, doloremque sed dolores iure!
						Itaque delectus explicabo voluptatem doloremque necessitatibus qu
					</p>
				</div>
				<div className="footer-contact">
					<h1>Contacto</h1>
					<div className="contact-logo">
						<img src="../assets/iconos/telefono.png" className="logo" />
						<p>+569 987654321</p>
					</div>
					<div className="contact-logo">
						<img src="../assets/iconos/correo.png" className="logo" />
						<p>correo@correo.com</p>
					</div>
					<div className="contact-logo">
						<a
							href="https://goo.gl/maps/yfTtYABg1tY7wh867"
							className="contact-logo"
							target="_blank"
						>
							<img src="../assets/iconos/direccion.png" className="logo" />
							<p>Municipalidad de Ovalle - Carmen, Ovalle</p>
						</a>
					</div>
				</div>
			</div>
			<div className="redes-sociales">
				<h2>Siguenos</h2>
				<div className="contenedor redes-sociales-logos">
					<img
						src="../assets/iconos/redes/facebook.png"
						className="logo-redes"
					></img>
					<img
						src="../assets/iconos/redes/instagram.png"
						className="logo-redes"
					></img>
					<img
						src="../assets/iconos/redes/whatsapp.png"
						className="logo-redes"
					></img>
					<img
						src="../assets/iconos/redes/github.png"
						className="logo-redes"
					></img>
				</div>
			</div>
		</div>
	);
};

export default Footer;
